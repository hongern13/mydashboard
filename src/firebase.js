import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmimxnkllR13JmP81XvbXq3a2yOHkrKOQ",
  authDomain: "my-dashboard-913be.firebaseapp.com",
  projectId: "my-dashboard-913be",
  storageBucket: "my-dashboard-913be.firebasestorage.app",
  messagingSenderId: "996416230173",
  appId: "1:996416230173:web:a402a57a90f6e13f7c47f4"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);