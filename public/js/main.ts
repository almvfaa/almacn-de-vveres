import './components/app-landing.js';
import './components/timeline-event.js';
import './components/concept-node.js';
import './components/concept-edge-display.js';
import { fetchProblemData } from './utils.js';
import { renderTimeline } from './renderers/timeline-renderer.js';
import { renderConceptMap } from './renderers/concept-map-renderer.js';

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    const landingPage = appContainer?.querySelector('app-landing') as HTMLElement;
    const mainAppContent = document.getElementById('main-app-content') as HTMLElement;

    if (landingPage && mainAppContent) {
        landingPage.addEventListener('start-app', async () => {
            landingPage.classList.add('fade-out');

            // Wait for the fade-out animation to complete
            setTimeout(() => {
                landingPage.style.display = 'none';
                mainAppContent.style.display = 'flex';
                // Delay the fade-in slightly to ensure the display property has changed
                setTimeout(() => {
                    mainAppContent.classList.add('fade-in');
                }, 50);
            }, 500); // Must match the --animation-speed in CSS

            const problemTitle = document.getElementById('problem-title');
            const problemDescription = document.getElementById('problem-description');

            if (problemTitle && problemDescription) {
                try {
                    const problemData = await fetchProblemData('problem1');
                    
                    if (problemData) {
                        problemTitle.textContent = problemData.title || 'Título del Problema';
                        problemDescription.textContent = problemData.description || 'Descripción del problema.';
                        
                        renderTimeline('problem1', 'timeline-container');
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
