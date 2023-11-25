// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-estate-f3b45.firebaseapp.com",
  projectId: "e-estate-f3b45",
  storageBucket: "e-estate-f3b45.appspot.com",
  messagingSenderId: "978137425214",
  appId: "1:978137425214:web:6a6546f182ba75d9a0386f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);