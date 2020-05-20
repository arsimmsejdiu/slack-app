import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBDJ8n3yVGHpM0K2pFphhRhxFqPsmAu5uA",
    authDomain: "react-slack-1234.firebaseapp.com",
    databaseURL: "https://react-slack-1234.firebaseio.com",
    projectId: "react-slack-1234",
    storageBucket: "react-slack-1234.appspot.com",
    messagingSenderId: "161283952362",
    appId: "1:161283952362:web:1f1cf85bf75e54da12d193",
    measurementId: "G-CSFQ0D3C1V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;