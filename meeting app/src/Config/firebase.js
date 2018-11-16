
import * as firebase from 'firebase';


  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC3z87Hq0kxcxgDN3uUp05ST3mDv1rbDZ8",
    authDomain: "reactify-auth.firebaseapp.com",
    databaseURL: "https://reactify-auth.firebaseio.com",
    projectId: "reactify-auth",
    storageBucket: "reactify-auth.appspot.com",
    messagingSenderId: "437389960595"
  };
  firebase.initializeApp(config);


export default firebase;