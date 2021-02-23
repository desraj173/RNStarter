import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import {Header} from '../../components';

function SettingsScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Setting Detail'} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings Detail!</Text>        
      </View>
    </SafeAreaView>
  );
}

export default SettingsScreenDetail;