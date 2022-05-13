import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBzt2AVi-dvzM21sVVb1gBVOy-9-7Pu1A",
  authDomain: "react-d8aec.firebaseapp.com",
  projectId: "react-d8aec",
  storageBucket: "react-d8aec.appspot.com",
  messagingSenderId: "643741349442",
  appId: "1:643741349442:web:0e2f1a70e99c81a34fdfdb"
};


const fire = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


export { fire, auth }