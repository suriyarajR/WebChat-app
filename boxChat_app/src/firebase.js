import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp(
  {
  apiKey: "AIzaSyCkCEj1rrPrJzqCx1PI0hitmHj8AM-TBE4",
  authDomain: "boxchat-8231c.firebaseapp.com",
  projectId: "boxchat-8231c",
  storageBucket: "boxchat-8231c.appspot.com",
  messagingSenderId: "202370103243",
  appId: "1:202370103243:web:1bd2916a4d4a66bcd6284e"

}).auth();