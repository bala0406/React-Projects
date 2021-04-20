import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDSPlMjkeCVWN4U6N0D6ZoeCYpgU_tvX7o",
    authDomain: "ninja-firegram-9a3c1.firebaseapp.com",
    projectId: "ninja-firegram-9a3c1",
    storageBucket: "ninja-firegram-9a3c1.appspot.com",
    messagingSenderId: "585270922473",
    appId: "1:585270922473:web:ccbdd4d774ce7f6e293478",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timeStamp };
