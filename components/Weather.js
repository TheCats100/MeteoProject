import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';

import style from '../Style';

moment.locale('fr')

const Weather = ({ temp, day, typeWeather, index }) => {
  
  const dayMoment = (today) => <Text style={[uniStyle.white, uniStyle.bold]}>{moment(today * 1000).format('ddd')}</Text>
  const dayDate = (today) => <Text style={uniStyle.white}>{moment(today*1000).format('DD/MM')}</Text>

  const icon = () => <Text>{typeWeather}</Text>
  
  return (
    <View style={uniStyle.dayWeather}>
      <Text>{dayMoment(day)}{dayDate(day)}</Text>
      {icon()}
      <Text style={uniStyle.temp}>{temp}°C</Text>
    </View>
  )
}

export default Weather;

const uniStyle = StyleSheet.create({
  white: {
    color: '#FFF',
  },
  bold : {
    fontWeight: 'bold'
  },
  dayWeather : {
    backgroundColor: style.color,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#202340',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  temp: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 22
  }
})