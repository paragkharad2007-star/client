import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD88UBhimvYAS-h-zuA-ROMbMidvowA4Mo",
  authDomain: "saas-dashboard-5b427.firebaseapp.com",
  projectId: "saas-dashboard-5b427",
  storageBucket: "saas-dashboard-5b427.firebasestorage.app",
  messagingSenderId: "919853074593",
  appId: "1:919853074593:web:b58c3bdf7b2c173d8d48e0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
