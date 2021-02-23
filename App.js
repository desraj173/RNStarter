/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants';
import Navigations from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';


export default function App() {
  return (
    <Provider store={store}>     
      <StatusBar backgroundColor={COLORS.primaryColor}  />
      <Navigations />
    </Provider>
  );
}
