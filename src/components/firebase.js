import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyCd93T9DyKXolR5pwY7YrffvaNG7MoQ3uc",
  authDomain: "radicalchat-44061.firebaseapp.com",
  projectId: "radicalchat-44061",
  storageBucket: "radicalchat-44061.appspot.com",
  messagingSenderId: "365459048590",
  appId: "1:365459048590:web:007e49ccff84896a4861df"
}).auth();
