import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCeax9QIeunafOHBLJ-7puXwQL5TZL22n4",
  authDomain: "syndic-62cd4.firebaseapp.com",
  projectId: "syndic-62cd4",
  storageBucket: "syndic-62cd4.firebasestorage.app",
  messagingSenderId: "677367910403",
  appId: "1:677367910403:web:syndic_web_app"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
