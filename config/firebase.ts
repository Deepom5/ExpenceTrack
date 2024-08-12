// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {collection, getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3tmPjTq1wSQ1lkmlql_YPqb1wBBCedx8",
  authDomain: "test1-6220a.firebaseapp.com",
  databaseURL: "https://test1-6220a.firebaseio.com",
  projectId: "test1-6220a",
  storageBucket: "test1-6220a.appspot.com",
  messagingSenderId: "774189415973",
  appId: "1:774189415973:web:abad825bf087dcd96c49cc",
  measurementId: "G-HQY8H9Z28W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;
