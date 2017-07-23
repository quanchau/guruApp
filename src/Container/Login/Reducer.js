import {
  UPDATE_USER_INFO,
} from './ActionType';

const initialState =  {
  token : '',
};

const login = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case UPDATE_USER_INFO:
      return {
        state,
        ...payload,
      };
    default: return state;
  }
};

export default login;