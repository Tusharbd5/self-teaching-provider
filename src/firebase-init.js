// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDY74MImam9eUlxUGjE9d46ePZD4C6_jlM",
    authDomain: "self-teaching-provider.firebaseapp.com",
    projectId: "self-teaching-provider",
    storageBucket: "self-teaching-provider.appspot.com",
    messagingSenderId: "768600875155",
    appId: "1:768600875155:web:bec1a003b1cc20ad222d66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;