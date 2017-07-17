import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDHOZk_tADJSgWecEw_RS8X9c55hu0rL1c",
  authDomain: "react-firebase-ebcf7.firebaseapp.com",
  databaseURL: "https://react-firebase-ebcf7.firebaseio.com",
  projectId: "react-firebase-ebcf7",
  storageBucket: "react-firebase-ebcf7.appspot.com",
  messagingSenderId: "101790074065"
};
firebase.initializeApp(config);

const database = firebase.database();

export const getListBooks = () => {
  database.ref('books').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      console.log('[firebase.js] ', childData, childKey);
    });
  });
};

export const addBook = (book) => {
  const refs = database.ref('books');
  const key = refs.push().getKey();
  refs.push()
};