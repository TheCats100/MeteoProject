import React from 'react';
import { View, Text } from 'react-native';

import style from '../Style';


const Weather = ({ title, index }) => {
  return (
    <View style={style.item}>
      <Text style={style.title}>{title}°C</Text>
      <Text>{index}</Text>
    </View>
  )
}

export default Weather;