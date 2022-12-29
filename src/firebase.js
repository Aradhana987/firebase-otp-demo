// import firebase from 'firebase/app'
// import firebase from "firebase/compat/app";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
// var firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export default firebase;
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import firebase from "firebase/compat/app";

const firebaseConfig = {
    // apiKey: "AIzaSyDVOqCsRwyLNHfKu3hnHnDfPE8VlskvPs4",
    apiKey: "AIzaSyD5LbxPrzvO2MyXSclhiSgXt6EQytPG76U",
    authDomain: "otp-demo-f66a7.firebaseapp.com",
    projectId: "otp-demo-f66a7",
    storageBucket: "otp-demo-f66a7.appspot.com",
    messagingSenderId: "422550501564",
    appId: "1:422550501564:web:aa37ff954bd3fc833838b9"
};

// Initialize Firebase
// const firebase = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
export default firebase;
