import {
  LOGIN,
  LOGIN_SUCCESS,
  UPDATE_USER_INFO,
} from './ActionType';

export const login = (data) => ({
  type: LOGIN,
  payload: data
});

export const updateUserInfo = (data) => ({
  type: UPDATE_USER_INFO,
  payload: data
});