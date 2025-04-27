import { initializeApp ,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
 import { getFirestore } from 'firebase/firestore';
 
 

const firebaseConfig = {
  apiKey: "AIzaSyCPD0sppvfVypMJgm-CdwJUa4P6bVnsL_k",
  authDomain: "prepwise-fe84b.firebaseapp.com",
  projectId: "prepwise-fe84b",
  storageBucket: "prepwise-fe84b.firebasestorage.app",
  messagingSenderId: "687140909215",
  appId: "1:687140909215:web:69fd64c31c415b8b5232aa",
  measurementId: "G-QQ812TD8JE"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
 export const auth = getAuth(app);
 export const db = getFirestore(app)