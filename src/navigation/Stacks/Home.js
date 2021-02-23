import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, HomeScreenDetail} from '../../screens';
import navOptionHandler from '../Components/navOption';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={navOptionHandler} />
      <Stack.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
