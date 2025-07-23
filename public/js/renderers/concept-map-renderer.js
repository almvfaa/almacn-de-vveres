import { db } from '../firebase-exports.js';
import { doc, getDoc } from 'firebase/firestore';
import { Network, DataSet } from 'vis-network';
export async function renderConceptMap(problemId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id ${containerId} not found.`);
        return;
    }
    container.innerHTML = 'Cargando mapa conceptual interactivo...';
    const networkCanvas = document.createElement('div');
    networkCanvas.style.width = '100%';
    networkCanvas.style.height = '500px';
    container.innerHTML = '';
    container.appendChild(networkCanvas);
    try {
        const nodesDocRef = doc(db, `problems/${problemId}/concept_map_data`, 'nodes');
        const edgesDocRef = doc(db, `problems/${problemId}/concept_map_data`, 'edges');
        const [nodesSnap, edgesSnap] = await Promise.all([getDoc(nodesDocRef), getDoc(edgesDocRef)]);
        const firestoreNodes = nodesSnap.exists() ? nodesSnap.data().data : [];
        const firestoreEdges = edgesSnap.exists() ? edgesSnap.data().data : [];
        if (firestoreNodes.length === 0) {
            container.innerHTML = '<p>No hay datos para el mapa conceptual.</p>';
            return;
        }
        const nodes = new DataSet(firestoreNodes.map(node => ({
            id: node.id,
            label: node.text,
            color: node.color || '#3f51b5',
            shape: node.shape || 'box'
        })));
        const edges = new DataSet(firestoreEdges.map(edge => ({
            from: edge.from,
            to: edge.to,
            label: edge.label || '',
            arrows: 'to',
            color: { color: '#848484' }
        })));
        const data = { nodes, edges };
        const options = {
            physics: {
                enabled: true,
                barnesHut: {
                    gravitationalConstant: -3000,
                    centralGravity: 0.2,
                    springLength: 100,
                    springConstant: 0.05,
                    damping: 0.1,
                    avoidOverlap: 0.6
                },
                maxVelocity: 50,
                minVelocity: 0.1,
                solver: 'barnesHut',
                stabilization: { iterations: 2000 }
            },
            interaction: {
                zoomView: true,
                dragNodes: true,
                dragView: true,
                hover: true
            },
            nodes: {
                shape: 'box',
                font: {
                    color: 'white',
                    size: 14,
                    face: 'Segoe UI, Arial, sans-serif'
                },
                color: {
                    border: '#3f51b5',
                    background: '#3f51b5',
                    highlight: { background: '#673ab7', border: '#673ab7' }
                },
                shadow: true
            },
            edges: {
                arrows: 'to',
                color: {
                    color: '#848484',
                    highlight: '#3498db',
                    hover: '#3498db'
                },
                font: {
                    align: 'top'
                }
            }
        };
        const network = new Network(networkCanvas, data, options);
        network.once('stabilizationIterationsDone', () => {
            network.fit({ animation: true });
        });
    }
    catch (error) {
        console.error("Error rendering concept map:", error);
        container.innerHTML = '<p>Error al cargar el mapa conceptual.</p>';
    }
}
//# sourceMappingURL=concept-map-renderer.js.map