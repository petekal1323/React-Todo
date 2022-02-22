import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBvJBcuyDoaXZgPSIGbHTUWBs94F8mXK3U",
  authDomain: "todo-app-27ddc.firebaseapp.com",
  projectId: "todo-app-27ddc",
  storageBucket: "todo-app-27ddc.appspot.com",
  messagingSenderId: "293078708883",
  appId: "1:293078708883:web:c05ddb37772d7983f89366",
  measurementId: "G-6R4ES7GE9T"
  });
  
  const db=firebaseApp.firestore();
  export default db;  