import {  
  LOGIN,
  LOGOUT,
  REGISTER,
  RESTORE_TOKEN,
  EDIT_PROFILE,
  SOCIAL_LOGIN,
} from '../constants/redux';
import {initialState} from './initial';

export default (state = initialState.internal, action) => {
  const {accessToken, OTP} = action.data || {};
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        isLoading: false,
      };
    case LOGIN:
    case SOCIAL_LOGIN:
      return {
        ...state,
        token: accessToken,
        isLoggedIn: true,
      };
    case EDIT_PROFILE:
      return {
        ...state,
        token: accessToken,
        isLoggedIn: true,
      };
    case REGISTER:
      return {
        ...state,
        otp: OTP,
        token: accessToken,
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isSignout: true,
        token: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
