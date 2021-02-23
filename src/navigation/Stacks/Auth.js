import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register} from '../../screens';
import navOptionHandler from '../Components/navOption';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={navOptionHandler} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
