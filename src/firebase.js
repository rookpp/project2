import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDLZ41eVignzd3cxzlaXwhdqWWm9jdr_CY",
    authDomain: "project-c972e.firebaseapp.com",
    projectId: "project-c972e",
    storageBucket: "project-c972e.appspot.com",
    messagingSenderId: "403207452075",
    appId: "1:403207452075:web:ec40e9b40c0522fbd94eee",
    measurementId: "G-5EPQ3Y86J7"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.auth()