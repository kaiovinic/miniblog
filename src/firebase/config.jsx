import { initializeApp } from "firebase/app";

// importando banco de dados Firestore
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIoJ8PP-85bl8THO4JhdXyZuY-mdPHnB0",
  authDomain: "miniblog-2bf69.firebaseapp.com",
  projectId: "miniblog-2bf69",
  storageBucket: "miniblog-2bf69.appspot.com",
  messagingSenderId: "605519280780",
  appId: "1:605519280780:web:23b5faca7c89be607519a9",
};

const app = initializeApp(firebaseConfig);

// Inicializando banco de dados da Firestore
const db = getFirestore(app);
export { db };
