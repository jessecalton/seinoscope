import { combineReducers } from 'redux';
import seinoscopeReducer from './seinoscopeReducer';

export default combineReducers({
  seinoscope: seinoscopeReducer,
});
