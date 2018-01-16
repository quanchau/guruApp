import { combineReducers } from 'redux';

import Nav from '../Navigator/NavigatorState';
import friend from '../Container/Main/Friends/Reducer';
import homeReducer from '../Container/Main/Home/Reducer';

// Combine all
const appReducer = combineReducers({
  nav: Nav,
  friend: friend,
  home: homeReducer,
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
//  console.log(appReducer(newState, action));
  return appReducer(newState, action);
};

export default rootReducer;