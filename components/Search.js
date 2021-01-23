import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Search = () => {

  const [city, setCity] = useState('Troyes')

  return (
    <TextInput
      underlineColorAndroid='transparent'
      style={style.searchBar}
      value={city}
      onChangeText={text => setCity(text)}
    />
  )
}



export default Search;

const style = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
})