import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/Header';

function Register({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Register'} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Register Screen !</Text>
      </View>
    </SafeAreaView>
  );
}

export default Register;