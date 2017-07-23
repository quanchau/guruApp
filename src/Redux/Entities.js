import {
  LOAD_LIST_DATA,
  RECEIVE_LIST_DATA,
} from './ActionType';

const entities = (state = {}, action ) => {
  const { type, payload } = action;
  switch (type){
    case LOAD_LIST_DATA:
      return {
        ...state,
        [payload]: undefined,
      };
    case RECEIVE_LIST_DATA:
      return {
        ...state,
        [payload.key]: {
          ...state[payload.key],
          ...payload.data,
        },
      };
    default:
      return state;
  }
};

export default entities;