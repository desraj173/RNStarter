import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {COLORS, IMAGES} from '../../constants';

function CustomDrawerContent({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryColor}}>
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

      <TouchableOpacity
        style={{marginTop: 20, marginLeft: 5, marginBottom: 10}}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: COLORS.white}}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
