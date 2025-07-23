import { fetchProblemData } from './utils.js';

document.addEventListener('DOMContentLoaded', async () => {
    const problemTitle = document.getElementById('problem-title');
    const problemDescription = document.getElementById('problem-description');

    try {
        const problemData = await fetchProblemData('problem1'); // Using a fixed problem ID for now
        
        if (problemData) {
            problemTitle.textContent = problemData.title || 'Título del Problema';
            problemDescription.textContent = problemData.description || 'Descripción del problema.';
        } else {
            problemTitle.textContent = 'Problema no encontrado';
            problemDescription.textContent = 'No se pudieron cargar los detalles del problema.';
        }
    } catch (error) {
        console.error("Failed to load problem data:", error);
        problemTitle.textContent = 'Error de Carga';
        problemDescription.textContent = 'Ocurrió un error al intentar cargar el contenido del problema.';
    }
    
    // Future calls to render timeline and concept map will go here
});
