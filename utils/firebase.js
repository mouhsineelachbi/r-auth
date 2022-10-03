import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
console.log(process.env.API_KEY)
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();