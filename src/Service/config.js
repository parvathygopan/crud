// import firebase from "firebase";
import  initializeApp from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyBzhShoaeuoosk46yaS3h1bdOQet4wwVsk",
    authDomain: "storehere-35abc.firebaseapp.com",
    projectId: "storehere-35abc",
    storageBucket: "storehere-35abc.appspot.com",
    messagingSenderId: "1068177031670",
    appId: "1:1068177031670:web:29f1bfbd4035c6c4c307d7",
    measurementId: "G-FJ4H70147D"
  };
  // export const Firebase = firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  export default app = initializeApp;