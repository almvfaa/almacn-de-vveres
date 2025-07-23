import { db } from './firebase-config.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

export async function fetchProblemData(problemId) {
    try {
        const problemRef = doc(db, 'problems', problemId);
        const problemSnap = await getDoc(problemRef);
        if (problemSnap.exists()) {
            return problemSnap.data();
        } else {
            console.log('No such problem document!');
            return null;
        }
    } catch (error) {
        console.error("Error fetching problem data:", error);
        return null;
    }
}
