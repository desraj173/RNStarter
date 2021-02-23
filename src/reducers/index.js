import {combineReducers} from 'redux';

import user from './user';

export default function getRootReducer() {
  return combineReducers({
    user,
  });
}
