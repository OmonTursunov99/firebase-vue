// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHxoN9yUaoCo7mnsZSfGY0ar6hmlHYUrk",
    authDomain: "vuefirebase-15630.firebaseapp.com",
    projectId: "vuefirebase-15630",
    storageBucket: "vuefirebase-15630.appspot.com",
    messagingSenderId: "461986981431",
    appId: "1:461986981431:web:db7cabb0a109ad3c7881b2",
    measurementId: "G-NW1HYT0F0J"
};

importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
    BASE_TOKEN: BCCOm39UIB5JnU637__0geYHE76hAhCXJQa5kzFi-WeJyYaxy8iiWRjIBVz6XSKDDnH5aRwTASFo1jp8_6i6WzY
    USER_UID: PJ2WKHqlvERHLPbeODftjTQPuZO2
*/
