
import { LOAD_LIST_FRIEND, RECEIVE_LIST_FRIEND} from './ActionType';

const initialState = {
  friends : {
    loading: false,
    data: [],
  },
};

const friend = (state = initialState, action ) => {
  const { type, payload } = action;
  switch (type){
    case LOAD_LIST_FRIEND:
      const _friends = {
          ...state.friends,
          loading: true,
        };
        return {
          ...state,
          friends: _friends,
        }
    case RECEIVE_LIST_FRIEND:        
        return {
          ...state,
          friends: {
              loading: false,
              data:action.friends
          },
        }      
    default:
      return state;
  }
};

export default friend;