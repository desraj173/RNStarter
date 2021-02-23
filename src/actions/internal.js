import axios from '../libs/api';
import storage from '../libs/storage';
import {
  API_URL  
} from '../constants/api';


export const setNotificationSettings = (payloads) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}${SET_NOTIFICATION_STATUS_URL}`, {
      payloads,
    });
    console.log('res', res);

    const {status} = res;
    if (status === 200 && res.data.success) {
      dispatch({type: SET_NOTIFICATION_STATUS, data: res.data.data});
    } else {
      console.log('Reason:', res.data.message);
      return res;
    }
    return res;
  } catch (e) {
    console.log('e', e);
  }
};
