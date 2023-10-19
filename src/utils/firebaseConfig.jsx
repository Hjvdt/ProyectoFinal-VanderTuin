import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD11reOj_SYrYwgsWq-u1iOh3ti68wiWtw",
  authDomain: "lab-ecommerce-1cb29.firebaseapp.com",
  projectId: "lab-ecommerce-1cb29",
  storageBucket: "lab-ecommerce-1cb29.appspot.com",
  messagingSenderId: "685173249964",
  appId: "1:685173249964:web:df1182bb438ec18f1d0c09"
};

// inizializo Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db


