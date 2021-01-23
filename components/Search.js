import React, { useState } from 'react';
import style from '../Style.js'
import { TextInput, Button, View } from 'react-native';


const Search = ({ navigation: { navigate } }) => {

  const [city, setCity] = useState('Troyes')

  const submit = () => {
    navigate('Results', { city })
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


export default Search;
