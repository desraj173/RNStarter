import React from 'react'
import {SettingsScreenDetail , Settings} from '../../screens';
import {createStackNavigator} from '@react-navigation/stack'
import navOptionHandler from '../Components/navOption';



const Stack = createStackNavigator();

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={Settings}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="SettingDetail"
        component={SettingsScreenDetail}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
}

export default SettingStack;
