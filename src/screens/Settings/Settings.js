import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../../components/';

function Settings({navigation}) {
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

export default Settings;
