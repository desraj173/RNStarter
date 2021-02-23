import api from '../utils/api';
import AsyncStorage from '@react-native-community/async-storage';
import {
  LOGOUT,
  LOGIN,
  REGISTER,
  AUTH_SUCCESS,
  FORGOT_PASSWORD,
} from '../constants/redux';
import {
  REGISTER_URL , LOGIN_URL , FORGOT_PASSWORD_URL , LOGOUT_URL , PROFILE_URL
} from '../constants/api'

const saveToken = (token) => AsyncStorage.setItem('token', token);

export const register = (payloads) => (dispatch) => {
  return api.post(REGISTER_URL, {payloads}).then((res) => {
    const {token} = res.data.user;
    saveToken(token);
    dispatch({
      type: REGISTER,
      data: res.data,
    });
    return res;
  });
};

export const login = ({username, password}) => (dispatch) =>
  new Promise((resolve, reject) => {
    let payloads = {
      user: {
        email: username,
        password,
      },
    };

    api
      .post(LOGIN_URL, {payloads})
      .then((res) => {
        console.log('res', res);
        resolve(res);
        const {token} = res.data.user;
        saveToken(token);
        dispatch({
          type: LOGIN,
          data: res.data,
        });
      })
      .catch((err) => reject(err));
  });

export const logoutUser = () => (dispatch) =>
  new Promise((resolve, reject) => {
    AsyncStorage.clear();
    dispatch({type: LOGOUT});
    return resolve({message: 'logout'});
  });

export const forgotPassword = (payloads) => (dispatch) => {
  return api.post(FORGOT_PASSWORD_URL, {payloads}).then((res) => {
    dispatch({
      type: FORGOT_PASSWORD,
    });
    return res;
  });
};

export const auth = () => (dispatch) =>
  new Promise((resolve, reject) => {
    api
      .get(PROFILE_URL)
      .then((res) => {
        resolve(res);
        dispatch({
          type: AUTH_SUCCESS,
          data: res.data,
        });
      })
      .catch((err) => reject(err));
  });
