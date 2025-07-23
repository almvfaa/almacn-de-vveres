import { fetchProblemData } from './utils.js';
import { renderTimeline } from './renderers/timeline-renderer.js';
import { renderConceptMap } from './renderers/concept-map-renderer.js';

document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const mainAppContent = document.getElementById('main-app-content');
    const comenzarButton = document.getElementById('comenzarButton');
    
    if (comenzarButton && landingPage && mainAppContent) {
        comenzarButton.addEventListener('click', async () => {
            landingPage.style.display = 'none';
            mainAppContent.style.display = 'flex';

            const problemTitle = document.getElementById('problem-title');
            const problemDescription = document.getElementById('problem-description');

            if (problemTitle && problemDescription) {
                try {
                    const problemData = await fetchProblemData('problem1'); // Using a fixed problem ID for now
                    
                    if (problemData) {
                        problemTitle.textContent = problemData.title || 'Título del Problema';
                        problemDescription.textContent = problemData.description || 'Descripción del problema.';
                        
                        // Render the timeline
                        renderTimeline('problem1', 'timeline-container');
    
                        // Render the concept map
                        renderConceptMap('problem1', 'concept-map-container');
                        
                    } else {
                        problemTitle.textContent = 'Problema no encontrado';
                        problemDescription.textContent = 'No se pudieron cargar los detalles del problema.';
                    }
                } catch (error) {
                    console.error("Failed to load problem data:", error);
                    problemTitle.textContent = 'Error de Carga';
                    problemDescription.textContent = 'Ocurrió un error al intentar cargar el contenido del problema.';
                }
            }
        });
    }
});
