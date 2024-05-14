import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD6jEJF1wXwsJVOPgADquJQEay1FvQC-ww",
  authDomain: "newcomersguide-b827d.firebaseapp.com",
  projectId: "newcomersguide-b827d",
  storageBucket: "newcomersguide-b827d.appspot.com",
  messagingSenderId: "674798949742",
  appId: "1:674798949742:web:d9c0d546f5da29dc7e9d7f",
  measurementId: "G-RJH74T3Z00"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
console.log('pleaseeeeeeeeeee',auth);

export default auth;