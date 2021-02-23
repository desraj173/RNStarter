import axios from 'axios';
import {compile} from 'path-to-regexp';
import {Platform} from 'react-native';
import URL from 'url-parse';
import {API_URL} from '../../constants/api';
import storage from '../storage';

axios.interceptors.request.use((config) => config);

const execute = async (
  path,
  method = 'GET',
  {params = {}, queries = {}, payloads = {}, headers = {}} = {},
) => {
  const token = await storage.get('token');  
  const deviceType = Platform.OS === 'ios' ? 1 : 2;
  /** IMPORTANT it will work if path start with https://  */

  //const compiler = compile(path);

  // const match = match("/user/:id", { decode: decodeURIComponent });
  // console.log('params', params);

  const {origin, pathname} = new URL(path);
  const buildURL = compile(pathname, {encode: encodeURIComponent});
  const url = `${origin}${buildURL({...params})}`;

  // SEND LOGIN TOKEN if LOGIN
  //const notification_token = await storage.get('notification_token');

  const base = API_URL.replace(/~\/$/, '');
  //const url = compiler(params || {});

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  //   if (notification_token) {
  //     headers.NotificationToken = `${notification_token}`;
  //     headers.Platform = `${Platform.OS}`;
  //   }

  if (!headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  if (!headers.Accept) {
    headers.Accept = 'application/json';
  }

  const options = {method, headers};

  if (
    method === 'POST' ||
    method === 'PATCH' ||
    method === 'PUT' ||
    method === 'DELETE'
  ) {
    let data = {...payloads, deviceType};
    options.data = data;
  }

  if (queries) {
    options.params = queries;
  }

  options.url = url;
  options.baseURL = base;
  console.log('Request', options);
  return await axios(options);
};

export default {
  get: (path, options) => execute(path, 'GET', options),
  post: (path, options) => execute(path, 'POST', options),
  patch: (path, options) => execute(path, 'PATCH', options),
  put: (path, options) => execute(path, 'PUT', options),
  delete: (path, options) => execute(path, 'DELETE', options),
};