 import { combineReducers } from 'redux'

import boards from './boardReducer';
import user from './userReducer';

export default combineReducers({
  boards,
  user
})
