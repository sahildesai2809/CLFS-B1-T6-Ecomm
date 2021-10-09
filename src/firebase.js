import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBdqv4PryPbxkQ-dd7qzc6s2IKKLwgr_jw",
  authDomain: "clfs-b1-t6-ecomm-3893d.firebaseapp.com",
  projectId: "clfs-b1-t6-ecomm-3893d",
  storageBucket: "clfs-b1-t6-ecomm-3893d.appspot.com",
  messagingSenderId: "790951408038",
  appId: "1:790951408038:web:8f665f47de01fb6c615f67",
});

export const auth = app.auth();
export default app;
