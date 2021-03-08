import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC30CcXGzXdhPMhQr4IYVbNIXn845_5ni0",
    authDomain: "contacts-d9f0b.firebaseapp.com",
    projectId: "contacts-d9f0b",
    storageBucket: "contacts-d9f0b.appspot.com",
    messagingSenderId: "100063188752",
    appId: "1:100063188752:web:192444baab87cd95aa3795"
  };

  firebase.initializeApp(config) 
  

  export const auth = firebase.auth()

  
 

