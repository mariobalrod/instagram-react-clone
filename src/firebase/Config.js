import firebase from 'firebase';

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBfabC552N1XoWyE9PPaANmyRkX-vO1fFo",
  authDomain: "instagram-clone-f9e1f.firebaseapp.com",
  databaseURL: "https://instagram-clone-f9e1f.firebaseio.com",
  projectId: "instagram-clone-f9e1f",
  storageBucket: "instagram-clone-f9e1f.appspot.com",
  messagingSenderId: "848210137600",
  appId: "1:848210137600:web:86466add5c046e6b01bee5",
  measurementId: "G-TJN7NJX7Q5",
});

export const db = app.firestore();
export const storage = firebase.storage()

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

