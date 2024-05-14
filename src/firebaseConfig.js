import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6jEJF1wXwsJVOPgADquJQEay1FvQC-ww",
  authDomain: "newcomersguide-b827d.firebaseapp.com",
  projectId: "newcomersguide-b827d",
  storageBucket: "newcomersguide-b827d.appspot.com",
  messagingSenderId: "674798949742",
  appId: "1:674798949742:web:d9c0d546f5da29dc7e9d7f",
  measurementId: "G-RJH74T3Z00"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Auth service for Firebase Authentication
const auth = getAuth(app);

export default auth;
