import { db } from '../firebase-config.js';
import { collection, getDocs, query, orderBy } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export async function renderTimeline(problemId, containerId) {
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

        if (querySnapshot.empty) {
            container.innerHTML = '<p>No hay eventos en la línea del tiempo.</p>';
            return;
        }

        let html = '';
        querySnapshot.forEach((doc) => {
            const event = doc.data();
            const date = event.date && event.date.seconds 
                ? new Date(event.date.seconds * 1000).toLocaleDateString() 
                : 'Fecha Desconocida';
            html += `
                <div class="timeline-event">
                    <div class="event-date">${date}</div>
                    <div class="event-content">
                        <h4 class="event-title">${event.title || ''}</h4>
                        <p class="event-description">${event.description || ''}</p>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    } catch (error) {
        console.error("Error rendering timeline:", error);
        container.innerHTML = '<p>Error al cargar la línea del tiempo.</p>';
    }
}
