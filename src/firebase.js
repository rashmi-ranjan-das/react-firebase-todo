// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAZhd2TTWsFWCpAoArdcrPZsuy9QDwA96Q",
    authDomain: "todo-app-d88b6.firebaseapp.com",
    projectId: "todo-app-d88b6",
    storageBucket: "todo-app-d88b6.appspot.com",
    messagingSenderId: "539078501890",
    appId: "1:539078501890:web:3e27a36c811b017b61a91b",
    measurementId: "G-X5C4RBETSV"
});

const db = firebaseApp.firestore();

export default db;
//if we don't write this default line then in other files we wont be able to use this exact db
