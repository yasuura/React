import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig"; 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBinNJBpNTkD8ZRwnbaUljw-Bhx9875bsg",
//   authDomain: "my-first-react-app-78263.firebaseapp.com",
//   databaseURL: "https://my-first-react-app-78263.firebaseio.com",
//   projectId: "my-first-react-app-78263",
//   storageBucket: "my-first-react-app-78263.appspot.com",
//   messagingSenderId: "765404192373",
//   appId: "1:765404192373:web:3b4fce021cacf4be77e23c",
//   measurementId: "G-J1JQQEEX94"
// };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
