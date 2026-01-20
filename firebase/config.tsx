// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtnTXYJqL5nlJ1PLVt6itcBxVV9ur486Y",
    authDomain: "app-crud-990f4.firebaseapp.com",
    databaseURL: "https://app-crud-990f4-default-rtdb.firebaseio.com",
    projectId: "app-crud-990f4",
    storageBucket: "app-crud-990f4.firebasestorage.app",
    messagingSenderId: "670124011120",
    appId: "1:670124011120:web:fa9a8717f40d5213878eb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);