import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import getRootReducer from '../reducers';

let middleware = [thunk];
const persistConfig = {
  key: 'db',
  storage: AsyncStorage,
  whitelist: ['user'],
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, getRootReducer());

// LOG ONLY IN DEVELOPMENT PRODUCTION OPTIMIZATIONS
if (process.env.NODE_ENV === 'development') {
  const reduxLogger = require('redux-logger');
  const logger = reduxLogger.createLogger({collapsed: true});
  middleware = [...middleware, logger];
}

export const store = createStore(pReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);