import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './Stacks/AppStack';

const Navigations = () => (
  <NavigationContainer>{AppStack()}</NavigationContainer>
);

export default Navigations;
