import firebase from "firebase";

const firebaseConfig = {
  apiKey: "**********************",
  authDomain: "********.firebaseapp.com",
  databaseURL: "https://********.firebaseio.com",
  projectId: "********",
  storageBucket: "********.appspot.com",
  messagingSenderId: "********",
  appId: "1:********:web:********"
};

//This u will get from firebase
// Step 1 - Create a project on firebase
// Step 2 - Add a web app and copy the config

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
