import {initialState} from './initial';
import {
  LOGIN,
  LOGOUT,
  LOGIN_ERROR,
  REGISTER,
  AUTH_SUCCESS,
} from '../constants/redux';

export default (state = initialState.user, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        info: action.data,
        loginStatus: true,
      };
    case REGISTER:
      return {
        ...state,
        info: action.data,
        loginStatus: true,
        userAdded: true,
      };
    case LOGOUT:
    case LOGIN_ERROR:
      return {
        ...state,
        info: {},
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        info: action.data,
      };

    default:
      return state;
  }
};
