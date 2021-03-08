import firebase from 'firebase';
import "firebase/auth";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyB-eyMDXNMt5YT_RTjjlJKDUZZPBId5ZY0",
    authDomain: "the-liquor-valley.firebaseapp.com",
    projectId: "the-liquor-valley",
    storageBucket: "the-liquor-valley.appspot.com",
    messagingSenderId: "251167790495",
    appId: "1:251167790495:web:4a429482d62e9695d719aa",
    measurementId: "G-FGX83BW6T7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const rdb = firebase.database();
  export const storage = firebase.storage();

  export default firebase;

  