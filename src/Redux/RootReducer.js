import { combineReducers } from 'redux';

import Nav from '../Navigator/NavigatorState';
import friend from '../Container/Main/Friends/Reducer';

// Combine all
const appReducer = combineReducers({
  nav: Nav,
  friend: friend,
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;