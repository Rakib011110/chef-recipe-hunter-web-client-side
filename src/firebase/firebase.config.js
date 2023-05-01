// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7WMRQd3-Aye22RHhco-ecbxoFoIaCto8",
    authDomain: "chef-recipe-hunter-web.firebaseapp.com",
    projectId: "chef-recipe-hunter-web",
    storageBucket: "chef-recipe-hunter-web.appspot.com",
    messagingSenderId: "899219579377",
    appId: "1:899219579377:web:2e8aa88269c46e8c0e6450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app