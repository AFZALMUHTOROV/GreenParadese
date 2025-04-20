// Importando do Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDuYw_0wTiHamxb6jxjkHR6zS7Twuq1KMc",
  authDomain: "tracer-login.firebaseapp.com",
  projectId: "tracer-login",
  storageBucket: "tracer-login.appspot.com",
  messagingSenderId: "343948067024",
  appId: "1:343948067024:web:d33be335e18f88dfc81ed5",
  measurementId: "G-XNNCEK4LRM"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };