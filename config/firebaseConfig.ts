// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWcPdRymWdnsRixM8DUdLwKD0-VB4Jwsk",
  authDomain: "react-native-loginsignup-b9b84.firebaseapp.com",
  projectId: "react-native-loginsignup-b9b84",
  storageBucket: "react-native-loginsignup-b9b84.firebasestorage.app",
  messagingSenderId: "731687939503",
  appId: "1:731687939503:web:c8d5a1fac5f3ee7312935a",
  measurementId: "G-33J9H13792"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
