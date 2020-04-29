import * as firebase from 'firebase/app'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCfOgMfR9vqYi09bHHGRYUY-tnnwlN7apA",
    authDomain: "v-chat-55dcf.firebaseapp.com",
    databaseURL: "https://v-chat-55dcf.firebaseio.com",
    projectId: "v-chat-55dcf",
    storageBucket: "v-chat-55dcf.appspot.com",
    messagingSenderId: "932170701904",
    appId: "1:932170701904:web:a8917e96e5bce9c35a8555"
  };
  // Initialize Firebase
  const base = firebase.initializeApp(firebaseConfig)
  const db = base.firestore()

  export default db