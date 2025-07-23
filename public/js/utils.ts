import { db } from './firebase-exports.js';
import { doc, getDoc, DocumentData } from 'firebase/firestore';

export async function fetchProblemData(problemId: string): Promise<DocumentData | null> {
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
