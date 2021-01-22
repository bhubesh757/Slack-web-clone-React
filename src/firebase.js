import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBeU33mSd2JOC8ttwofTTX-KiBfc145nDM",
  authDomain: "slack-web-clone-js.firebaseapp.com",
  projectId: "slack-web-clone-js",
  storageBucket: "slack-web-clone-js.appspot.com",
  messagingSenderId: "360828311041",
  appId: "1:360828311041:web:21b234f3f2b84f2b855200",
  measurementId: "G-PQ47TYSGST"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // const login = firebase.login()

  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {db , auth , provider };

  export default firebase