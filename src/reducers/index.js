import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import initializeReducer from './initializeReducer';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  initializeReducer: initializeReducer,
  main: mainReducer,
  routing: routerReducer
});

export default rootReducer;
