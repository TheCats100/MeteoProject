import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Axios from 'axios';

import Weather from './Weather';


const mapStateToProps = (state) => ({
  city: state.city
})

const Results = ({ city }) => {

  const [weather, setWeather] = useState([])

  const fetchWeather = () => {
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metri&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf`
    Axios.get(url)
      .then(res => res.data)
      .then(data => setWeather(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchWeather()
  }, [city])

  const renderItem = ({item, index}) => (
    <Weather 
      temp={Math.round(item.temp.day - 273.15)} 
      day={parseInt(item.dt, 10)} 
      index={index} 
      typeWeather={item.weather[0].main.toLowerCase()}
    />
  )
  // ** = props

  return (
    <View>
      <FlatList 
        data={weather.list}
        renderItem={renderItem}
        keyExtractor={item => item.dt}
      />
    </View>
  )
}

export default connect(mapStateToProps)(Results);