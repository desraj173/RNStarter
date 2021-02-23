import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '../Drawer';
import navOptionHandler from '../Components/navOption';
import AuthStack from './Auth';
import { Launch } from '../../screens';


const Stack = createStackNavigator();

function AppStack() {
  const isLoading = false;
  const isLoggedIn = false;
  return (
    <Stack.Navigator initialRouteName="Launch">
      {isLoading ? (
        <Stack.Screen
          name="Launch"
          component={Launch }
          options={navOptionHandler}
        />
      ) : isLoggedIn ? (
        <Stack.Screen
          name="HomeApp"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={navOptionHandler}
        />
      )}

      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={navOptionHandler}
      /> */}
    </Stack.Navigator>
  );
}
export default AppStack;
