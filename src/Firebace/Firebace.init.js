// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtwHpJLx6IWTpL-1oqr3cDreKVO_lKeI4",
  authDomain: "royal-attire.firebaseapp.com",
  projectId: "royal-attire",
  storageBucket: "royal-attire.firebasestorage.app",
  messagingSenderId: "594805878730",
  appId: "1:594805878730:web:d759efdac359b89e5ee933"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;