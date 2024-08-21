// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {collection, getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
//put your firebase config here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;
