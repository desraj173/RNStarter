import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import {Header} from '../../components';

function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Notifications'} navigation={navigation} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No New Notification!</Text>
      </View>
    </SafeAreaView>
  );
}

export default NotificationsScreen;