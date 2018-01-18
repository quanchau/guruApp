import * as firebase from 'firebase';
import { get, set } from './storage';

/*const config = {
  apiKey: "AIzaSyDHOZk_tADJSgWecEw_RS8X9c55hu0rL1c",
  authDomain: "react-firebase-ebcf7.firebaseapp.com",
  databaseURL: "https://react-firebase-ebcf7.firebaseio.com",
  projectId: "react-firebase-ebcf7",
  storageBucket: "react-firebase-ebcf7.appspot.com",
  messagingSenderId: "101790074065"
};
firebase.initializeApp(config);*/

var config = {
    apiKey: "AIzaSyDd91F9LFrLElsI1tkVkFPfw41WoQejREM",
    authDomain: "guruapp-c7b87.firebaseapp.com",
    databaseURL: "https://guruapp-c7b87.firebaseio.com",
    projectId: "guruapp-c7b87",
    storageBucket: "",
    messagingSenderId: "230893462217"
 };
 firebase.initializeApp(config);

firebase.initializeData = () => {
  const ref = firebase.database().ref('books');
  ref.once('value')
    .then(snapshot => {
      if (!snapshot.val()) {
		console.log('1.');
        console.log('INITIALIZE DATA FOR APPLICATION ');
        return fetch('https://www.googleapis.com/books/v1/volumes?q=a&key=AIzaSyDxVtl-VS4lr22NprX_4VdQOQ5kqzUvq1U');
      } else {
		 console.log('2.');
        console.log('APPLICATION HAVING DATA FROM FIREBASE');
        return null;
      }
    })
    .then(response => response.json())
    .then(books => {
      books.items.map(item => {
        const book = {
          id: item.id,
          ...item.volumeInfo,
        };
        ref.push(book);
      });

    })
    .catch(error => console.log('[firebase.js] initializeData ', error))
};

firebase.register = ({ email, password }) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(firebaseUser => {
      const user = {
        id: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
      };
      return firebase.database().ref('users').child(user.id).set(user);
    })
};

firebase.signInWithEmailAndPassword = ({email, password}) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(firebaseUser => {
      const user = {
        id: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
      };
      return set('USER_INFO', JSON.stringify(user));
    })
};

export default firebase;