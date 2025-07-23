import { db } from '../firebase-config.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export async function renderConceptMap(problemId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id ${containerId} not found.`);
        return;
    }

    container.innerHTML = 'Cargando mapa conceptual...';
    
    try {
        const nodesDocRef = doc(db, `problems/${problemId}/concept_map_data`, 'nodes');
        const edgesDocRef = doc(db, `problems/${problemId}/concept_map_data`, 'edges');

        const [nodesSnap, edgesSnap] = await Promise.all([getDoc(nodesDocRef), getDoc(edgesDocRef)]);

        const nodes = nodesSnap.exists() ? nodesSnap.data().data : [];
        const edges = edgesSnap.exists() ? edgesSnap.data().data : [];

        if (nodes.length === 0) {
            container.innerHTML = '<p>No hay datos para el mapa conceptual.</p>';
            return;
        }

        let nodesHtml = nodes.map(node => `<div class="concept-node" id="node-${node.id}">${node.text}</div>`).join('');
        
        // Create a lookup for node text
        const nodeLut = nodes.reduce((acc, curr) => {
            acc[curr.id] = curr.text;
            return acc;
        }, {});

        let edgesHtml = edges.map(edge => {
            const fromText = nodeLut[edge.from] || edge.from;
            const toText = nodeLut[edge.to] || edge.to;
            return `<p class="concept-edge">'${fromText}' -> '${toText}' (${edge.label || 'conectado'})</p>`
        }).join('');

        container.innerHTML = `
            <div class="nodes-container">${nodesHtml}</div>
            <div class="edges-container">${edgesHtml}</div>
        `;
    } catch (error) {
        console.error("Error rendering concept map:", error);
        container.innerHTML = '<p>Error al cargar el mapa conceptual.</p>';
    }
}
