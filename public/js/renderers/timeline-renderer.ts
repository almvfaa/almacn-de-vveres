import { db } from '../firebase-config.js';
import { collection, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { html, render } from 'lit';
import '../components/timeline-event.js';

export async function renderTimeline(problemId: string, containerId: string): Promise<void> {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id ${containerId} not found.`);
        return;
    }

    container.innerHTML = 'Cargando línea del tiempo...';
    
    try {
        const eventsCollectionRef = collection(db, `problems/${problemId}/timeline_events`);
        const q = query(eventsCollectionRef, orderBy('date', 'asc'));
        const querySnapshot = await getDocs(q);

        const eventTemplates = querySnapshot.docs.map(doc => {
            const event = doc.data();
            const date = event.date instanceof Timestamp 
                ? event.date.toDate().toLocaleDateString() 
                : 'Fecha Desconocida';
            
            return html`<timeline-event .date="${date}" .title="${event.title || ''}" .description="${event.description || ''}"></timeline-event>`;
        });

        const staticCard = html`
            <timeline-event 
                .title="${"CONTEXTO"}" 
                .description="${"Aquí se presentará el contexto general del problema."}"
            ></timeline-event>`;

        render([staticCard, ...eventTemplates], container);
        
    } catch (error) {
        console.error("Error rendering timeline:", error);
        container.innerHTML = '<p>Error al cargar la línea del tiempo.</p>';
    }
}
