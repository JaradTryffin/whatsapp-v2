import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHIwkwSY4IuFXYzXYxKgATnAmvBTAKpkQ",
  authDomain: "whatsapp-2-3c763.firebaseapp.com",
  projectId: "whatsapp-2-3c763",
  storageBucket: "whatsapp-2-3c763.appspot.com",
  messagingSenderId: "866390478541",
  appId: "1:866390478541:web:0e9630570dc777662d2384",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
