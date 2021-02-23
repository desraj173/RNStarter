import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native';
import IMAGES from '../constants/images';

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
              source={IMAGES.Icons.menu}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image
              style={{width: 20, height: 20, marginLeft: 5}}
              source={IMAGES.Icons.backNavigation}
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

export default Header;