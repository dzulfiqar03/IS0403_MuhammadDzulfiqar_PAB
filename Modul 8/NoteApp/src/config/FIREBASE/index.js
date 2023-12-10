import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyDOb3fwVVX1K8IqIPwHTVjq5rRSJryqJds",
  authDomain: "notes-app-535b6.firebaseapp.com",
  databaseURL: "https://notes-app-535b6-default-rtdb.firebaseio.com/",
  projectId: "notes-app-535b6",
  storageBucket: "notes-app-535b6.appspot.com",
  messagingSenderId: "210254804863",
  appId: "1:210254804863:web:923568cf0e35a5a3618c4a",
});

const FIREBASE = firebase;

export default FIREBASE;
