import { db } from '../firebase-config.js';
import { doc, getDoc } from 'firebase/firestore';
import { html, render } from 'lit';
import '../components/concept-node.js';
import '../components/concept-edge-display.js';

interface ConceptNodeData {
    id: string;
    text: string;
    x?: number;
    y?: number;
}

interface ConceptEdgeData {
    from: string;
    to: string;
    label?: string;
}

export async function renderConceptMap(problemId: string, containerId: string): Promise<void> {
    const container = document.getElementById(containerId) as HTMLElement;
    if (!container) {
        console.error(`Container with id ${containerId} not found.`);
        return;
    }

    container.innerHTML = 'Cargando mapa conceptual...';
    
    try {
        const nodesDocRef = doc(db, `problems/${problemId}/concept_map_data`, 'nodes');
        const edgesDocRef = doc(db, `problems/${problemId}/concept_map_data`, 'edges');

        const [nodesSnap, edgesSnap] = await Promise.all([getDoc(nodesDocRef), getDoc(edgesDocRef)]);

        const nodes: ConceptNodeData[] = nodesSnap.exists() ? nodesSnap.data().data : [];
        const edges: ConceptEdgeData[] = edgesSnap.exists() ? edgesSnap.data().data : [];

        if (nodes.length === 0) {
            render(html`<p>No hay datos para el mapa conceptual.</p>`, container);
            return;
        }

        const nodeMap = new Map<string, ConceptNodeData>(nodes.map(node => [node.id, node]));

        const nodesTemplate = html`
            <div class="nodes-display-area" style="position: relative; width: 100%; min-height: 400px;">
                ${nodes.map(node => html`
                    <concept-node
                        .nodeId="${node.id}"
                        .text="${node.text}"
                        .x="${node.x || 0}"
                        .y="${node.y || 0}"
                    ></concept-node>
                `)}
            </div>
        `;

        const edgesTemplate = html`
            <div class="edges-list">
                ${edges.map(edge => {
                    const fromNode = nodeMap.get(edge.from);
                    const toNode = nodeMap.get(edge.to);
                    if (fromNode && toNode) {
                        return html`<concept-edge-display
                            .fromNodeText="${fromNode.text}"
                            .toNodeText="${toNode.text}"
                            .label="${edge.label || ''}"
                        ></concept-edge-display>`;
                    }
                    return '';
                })}
            </div>
        `;

        render(html`${nodesTemplate}${edgesTemplate}`, container);

    } catch (error) {
        console.error("Error rendering concept map:", error);
        render(html`<p>Error al cargar el mapa conceptual.</p>`, container);
    }
}
