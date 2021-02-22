/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   StatusBar,
// } from 'react-native';

// import COLORS from './src/constants';
// import Launch from './src/screens/Launch';

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="light-content" backgroundColor={COLORS.primaryColor}/>
//       <SafeAreaView style={styles.container}>
//        <Launch />
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;

/**** end code */

import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, IMAGES} from './src/constants';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();
const StackSettings = createStackNavigator();
const StackApp = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent( {navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondaryColor}}>
      <View
        style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={IMAGES.Icons.user}
          style={{
            tintColor: COLORS.white,
            height: 60,
            width: 60,
            resizeMode: 'contain',
            borderRadius: 30,
          }}
        />
      </View>

      <ScrollView style={{flex: 1, marginLeft: 5}}>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('MenuTab')}>
          <Text style={{color: COLORS.white}}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Notifications')}>
          <Text style={{color: COLORS.white}}>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
          
          <TouchableOpacity style={{marginTop: 20, marginLeft: 5, marginBottom:10}}
            onPress={() => navigation.navigate('Login')}
            >
          <Text style={{color:COLORS.white}}>Logout</Text>
          </TouchableOpacity>
   
    </SafeAreaView>
  );
}

const navOptionHandler = () => {
  return {
    headerShown: false,
  };
};

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}

function SettingStack() {
  return (
    <StackSettings.Navigator initialRouteName="Setting">
      <StackSettings.Screen
        name="Setting"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      <StackSettings.Screen
        name="SettingDetail"
        component={SettingsScreenDetail}
        options={navOptionHandler}
      />
    </StackSettings.Navigator>
  );
}

function AppStack() {
  return (
    <StackApp.Navigator initialRouteName="Login">
      <StackApp.Screen
        name="HomeApp"
        component={DrawerNavigator}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="Login"
        component={LoginScreen}
        options={navOptionHandler}
      />
      <StackApp.Screen
        name="Register"
        component={RegisterScreen}
        options={navOptionHandler}
      />
    </StackApp.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Home'} isHome navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeDetail')}
          style={{marginTop: 20}}>
          <Text>Home Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Settings'} isHome navigation={navigation} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('SettingDetail')}>
          <Text>Settings Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Notifications'} navigation={navigation} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    </SafeAreaView>
  );
}

function RegisterScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Register'} navigation={navigation} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Register Screen !</Text>
      </View>
    </SafeAreaView>
  );
}

function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Header title={'Login'} navigation={navigation} /> */}

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Login Screen !</Text>
      

      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('HomeApp')}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Header({title, isHome, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
      }}>
      <View
        style={{
          flex: 1,

          justifyContent: 'center',
          //alignItems:'center'
        }}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{width: 30, height: 30, marginLeft: 5}}
              source={require('./src/images/menu.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image
              style={{width: 20, height: 20, marginLeft: 5}}
              source={require('./src/images/previous.png')}
              resizeMode={'contain'}
            />
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1.5,

          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}></View>
    </View>
  );
}

function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Home Detail'} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Detail!</Text>
        {/* <TouchableOpacity  style={{marginTop: 20}} >
          <Text>Home Details</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

function SettingsScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Settings Detail'} navigation={navigation} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings Detail!</Text>
        {/* <TouchableOpacity style={{marginTop: 20}} >
          <Text>Settings Details</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
function DrawerNavigator(){
  return (
  <Drawer.Navigator
        initialRouteName="MenuTab"
        drawerContent={(props) => CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {AppStack()}
    </NavigationContainer>
  );
}
