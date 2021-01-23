import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import Axios from 'axios';

const mapStateToProps = (state) => ({
  city: state.city
})

const Results = ({ city }) => {

  const [weather, setWeather] = useState(null)

  const fetchWeather = () => {
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metri&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf`
    Axios.get(url)
      .then(res => res.data)
      .then(data => setWeather(data))
      .catch(err => console.log(err))
  }

  return (
    <View>
      <Text>
        {city}
      </Text>
      <Button title='Show me city' onPress={() => fetchWeather()} />
    </View>
  )
}

export default connect(mapStateToProps)(Results);