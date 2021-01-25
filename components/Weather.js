import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';

import style from '../Style';

moment.locale('fr')

//watchTime: 1:24:49

const Weather = ({ temp, day, typeWeather, index }) => {

  const dayMoment = (today) => <Text style={[uniStyle.white, uniStyle.bold]}>{(moment(today * 1000).format('ddd')).toUpperCase()}</Text>
  const dayDate = (today) => <Text>{moment(today * 1000).format('DD/MM')}</Text>

  const icon = () => {
    const useLogo = (url) => <Image source={url} style={{ width: 50, height: 50 }} />
    switch (typeWeather) {
      case 'clouds':
        return useLogo(require('./icons/cloudy.png'))
      case 'rain':
        return useLogo(require('./icons/rain.png'))
      default:
        return useLogo(require('./icons/sun.png'))
    }
  }



  return (
    <View style={[uniStyle.flex, uniStyle.dayWeather]}>
      <View style={uniStyle.flex}>
        {icon()}
        <Text style={{marginLeft: 10}}>{dayMoment(day)}{dayDate(day)}</Text>
      </View>
      <Text style={uniStyle.temp}>{temp}°C</Text>
    </View>
  )
}

export default Weather;

const uniStyle = StyleSheet.create({
  white: {
    color: '#FFF',
  },
  bold: {
    fontWeight: 'bold'
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dayWeather: {
    backgroundColor: '#394163',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#202340',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  temp: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 22
  }
})