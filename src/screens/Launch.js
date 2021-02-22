import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../constants';

const Launch = () => {
  const {container, title, logoText} = styles;
  return (
    <View style={container}>
      <Text style={logoText}>W </Text>
      <Text style={title}>Wedding.ly</Text>
    </View>
  );
};

export default Launch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title:{
    color: COLORS.white,
    fontFamily:'Ballet-Regular',
    fontSize: 70, 
  },
  logoText:{
    color: COLORS.white,
    fontFamily:'Ballet-Regular',
    fontSize: 55,
  }
});
