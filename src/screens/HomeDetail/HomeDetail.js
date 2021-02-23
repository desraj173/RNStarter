import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import {Header} from '../../components';

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

export default HomeScreenDetail;