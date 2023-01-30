import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIwaf9mN_-rs1tnzBizkfBjU10a7bdDiM",
  authDomain: "whatsapp-firebase-a4303.firebaseapp.com",
  projectId: "whatsapp-firebase-a4303",
  storageBucket: "whatsapp-firebase-a4303.appspot.com",
  messagingSenderId: "553076371343",
  appId: "1:553076371343:web:89ef9bb3c32b0cb0e925fa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;