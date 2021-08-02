import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrA0Jn7vKtpdCdxMGPzhXAwe0eTZ0nam8",
  authDomain: "clone-2d7a5.firebaseapp.com",
  databaseURL: "https://clone-2d7a5.firebaseio.com",
  projectId: "clone-2d7a5",
  storageBucket: "clone-2d7a5.appspot.com",
  messagingSenderId: "811379512962",
  appId: "1:811379512962:web:83589e1f8e5332bc74c69b",
  measurementId: "G-RRHQCJDNTK"
};

const firebaseInstance = firebase.initializeApp(firebaseConfig);

const db = firebaseInstance.firestore();

const auth = firebaseInstance.auth();

export {db , auth}