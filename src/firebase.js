import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAHh_uUBTYem1PRNQqWpdd8zlNKL26yzG4",
    authDomain: "messinger-clone.firebaseapp.com",
    projectId: "messinger-clone",
    storageBucket: "messinger-clone.appspot.com",
    messagingSenderId: "367929923052",
    appId: "1:367929923052:web:123062529760be2eb99cc9",
  })
  .auth();
