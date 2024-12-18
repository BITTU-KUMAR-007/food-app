import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyALxveHUPDfY_M61-H22YCR147f4Up2oLc",
  authDomain: "foodapp-afa10.firebaseapp.com",
  projectId: "foodapp-afa10",
  storageBucket: "foodapp-afa10.firebasestorage.app",
  messagingSenderId: "1077428924316",
  appId: "1:1077428924316:web:b6f6729c083ab6e180a259",
  measurementId: "G-LDGLWJ5BNP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);