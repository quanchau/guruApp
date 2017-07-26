import {RECEIVE_LIST_FRIEND} from './ActionType'
import firebase from '../../../Lib/firebase';

export const preLoadListBooks = (payload) => {
    var query = firebase.database().ref("users");
    query.once('value').then((snapshot) => {        
        receiveListBooks(snapshot.val());
    })
};

export const receiveListBooks = (payload) => ({
  type: RECEIVE_LIST_FRIEND,
  payload,
});

export const loadListFriend = (data) => (dispatch) => {
  dispatch(preLoadListBooks('books'));
  dispatch(receiveListBooks({
    key: 'books',
    data,
  }));
};