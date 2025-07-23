import { db } from '../firebase-config';
import { collection, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
export async function renderTimeline(problemId, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id ${containerId} not found.`);
        return;
    }
    container.innerHTML = 'Cargando línea del tiempo...';
    try {
        let html = `
            <div class="timeline-event context-event">
                <div class="event-content">
                    <h4 class="event-title">CONTEXTO</h4>
                    <p class="event-description">Aquí se presentará el contexto general del problema.</p>
                </div>
            </div>
        `;
        const eventsCollectionRef = collection(db, `problems/${problemId}/timeline_events`);
        const q = query(eventsCollectionRef, orderBy('date', 'asc'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const event = doc.data();
            const date = event.date instanceof Timestamp
                ? event.date.toDate().toLocaleDateString()
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
    }
    catch (error) {
        console.error("Error rendering timeline:", error);
        container.innerHTML = '<p>Error al cargar la línea del tiempo.</p>';
    }
}
//# sourceMappingURL=timeline-renderer.js.map