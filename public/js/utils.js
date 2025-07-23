import { db } from './firebase-exports.js';
import { doc, getDoc } from 'firebase/firestore';
export async function fetchProblemData(problemId) {
    try {
        const problemRef = doc(db, 'problems', problemId);
        const problemSnap = await getDoc(problemRef);
        if (problemSnap.exists()) {
            return problemSnap.data();
        }
        else {
            console.log('No such problem document!');
            return null;
        }
    }
    catch (error) {
        console.error("Error fetching problem data:", error);
        return null;
    }
}
//# sourceMappingURL=utils.js.map