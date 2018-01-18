import {
  LOAD_LIST_DATA,
  RECEIVE_LIST_DATA,
  VISIBLE_MODAL_SET,
} from '../../../Redux/ActionType';
import firebase from '../../../Lib/firebase';
import { createAction} from 'redux-actions';

export const preLoadListBooks = (payload) => ({
  type: LOAD_LIST_DATA,
  payload,
});

/*export const preloadListBooks = createAction(LOAD_LIST_DATA,
	(payload) => payload
);*/

export const receiveListBooks = (payload) => ({
  type: RECEIVE_LIST_DATA,
  payload,
});

/*export const receiveListBooks = createAction(RECEIVE_LIST_DATA,
	(payload) => payload
);*/

export const setModalVisible = (payload) => ({
	type: VISIBLE_MODAL_SET,
	payload,
});

/*export const setModalVisible = createAction(VISIBLE_MODAL_SET,
	(payload) => payload
);*/

export const loadListBooks = (data) => (dispatch) => {
  dispatch(preLoadListBooks('books'));
  dispatch(receiveListBooks({
    key: 'books',
    data,
  }));
};

