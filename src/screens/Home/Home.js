import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';


function Home({navigation}) {
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
export default Home;