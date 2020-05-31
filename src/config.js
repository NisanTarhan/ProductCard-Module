import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDwxMtIjCtLE04vTwBfRYC6tnZxsTCMWxM",
    authDomain: "productcard-module.firebaseapp.com",
    databaseURL: "https://productcard-module.firebaseio.com",
    projectId: "productcard-module",
    storageBucket: "productcard-module.appspot.com",
    messagingSenderId: "842533974175",
    appId: "1:842533974175:web:596e12e5be58eef65432aa",
    measurementId: "G-PKYXJDTX8Z"
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;