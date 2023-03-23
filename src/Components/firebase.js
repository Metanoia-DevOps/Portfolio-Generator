import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASB8kY_9tjoM4ZooylsLrPfAhShXfNjak",
  authDomain: "portfolio-generator-90068.firebaseapp.com",
  projectId: "portfolio-generator-90068",
  storageBucket: "portfolio-generator-90068.appspot.com",
  messagingSenderId: "461619558054",
  appId: "1:461619558054:web:1213e8f3d3372f2a472667",
  measurementId: "G-7D9Z1JE9EG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
