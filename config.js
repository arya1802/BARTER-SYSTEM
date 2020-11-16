import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCV02d2LHIIH2Rf9T2NdS6kR53dgORJduM",
  authDomain: "barter-system-ed19c.firebaseapp.com",
  databaseURL: "https://barter-system-ed19c.firebaseio.com",
  projectId: "barter-system-ed19c",
  storageBucket: "barter-system-ed19c.appspot.com",
  messagingSenderId: "439791884674",
  appId: "1:439791884674:web:c69b7afb04bf735840579b"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
