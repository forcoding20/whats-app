import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBGlYY72UEFx0wnAO-3BFzfdDbL_5DkzLs",
    authDomain: "whats-app-2022.firebaseapp.com",
    projectId: "whats-app-2022",
    storageBucket: "whats-app-2022.appspot.com",
    messagingSenderId: "753673593932",
    appId: "1:753673593932:web:a0a9082bddefa6757180e9",
    measurementId: "G-0Y9ZZY9HDC",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;