import React, { useState } from 'react';
import style from '../Style.js'
import { TextInput, Button, View } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  city: state.city
})


const Search = ({ navigation: { navigate }, dispatch }) => {

  const [city, setCity] = useState('Troyes')

  const handleCity = (city) => {
    dispatch({
      type: 'SWITCH_CITY',
      newCity: city
    })
  }

  const submit = () => {
    navigate('Results')
    handleCity(city)
  }

  return (
    <View style={style.container}>
    <TextInput
      underlineColorAndroid='transparent'
      style={style.searchBar}
      value={city}
      onChangeText={text => setCity(text)}
    />
    <Button color={style.color} onPress={() => submit()} title="Rechercher" />
    </View>
  )
}


export default connect(mapStateToProps)(Search);
