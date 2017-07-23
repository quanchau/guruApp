import {
  LOAD_LIST_DATA,
  RECEIVE_LIST_DATA,
} from './ActionType';

export const loadListData = (payload) => ({
  type: LOAD_LIST_DATA,
  payload,
});

export const receiveListData = (payload) => ({
  type: RECEIVE_LIST_DATA,
  payload,
});