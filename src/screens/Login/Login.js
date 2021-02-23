import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';


function Login({navigation}) {
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
export default Login;