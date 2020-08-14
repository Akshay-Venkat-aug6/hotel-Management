import { combineReducers } from 'redux';
import userReducer from './customer/auth/authreducer';
import searchReducer from './customer/search/searchreducer';

export default combineReducers({
  user: userReducer,
  search: searchReducer
})