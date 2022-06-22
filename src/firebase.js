// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyBnj666-t6cUA2XfJoPzTwSwgBL05x081g",
    authDomain: "thankful-journal.firebaseapp.com",
    projectId: "thankful-journal",
    storageBucket: "thankful-journal.appspot.com",
    messagingSenderId: "298048250958",
    appId: "1:298048250958:web:9007f78b5e6bd6f1b9cf1f"
    };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;