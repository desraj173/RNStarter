import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {COLORS, IMAGES} from '../constants';
import Home from './Stacks/Home';
import Settings from './Stacks/Settings';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          let routeName = route.name.toLowerCase();

          iconName = focused
            ? IMAGES.Tabs[`${routeName}Focus`]
            : IMAGES.Tabs[routeName];

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{
                tintColor: focused ? COLORS.primaryColor : 'grey',
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
              resizeMode={'contain'}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.secondaryColor,
        inactiveTintColor: 'grey',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
