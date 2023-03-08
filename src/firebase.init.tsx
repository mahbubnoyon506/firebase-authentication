import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA10kckMIbS1owxfUjvQ8rZZE186EznQ8o",
  authDomain: "ewn-authentication.firebaseapp.com",
  projectId: "ewn-authentication",
  storageBucket: "ewn-authentication.appspot.com",
  messagingSenderId: "436178559033",
  appId: "1:436178559033:web:e7dd2ff06afc133ae16de8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;