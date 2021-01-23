import React from 'react';
import { ActivityIndicator, Text, View, Image, Button } from 'react-native';
import style from '../Style.js';

const About = ({ navigation: { navigate } }) => {

  const search = () => {
    navigate('Search')
  }

  //watch time 42:35

  return (
    <View style={style.container}>
      <Text style={style.title}>A propos de l'application</Text>
      <Text>
        Lorem ipsum dolor sit ametss, consectetur adipisicing elit. Veniam eligendi ullam nam. Veniam distinctio, iste in error illo ea molestiae magni ut, alias saepe nulla, cumque perspiciatis iusto quia accusantium?
      </Text>
      {/* <ActivityIndicator
        style={style.view}
        color="#FF0000"
        size="large"
        animating={true}
      /> */}
      <Button color={style.color} title="Rechercher une ville" onPress={() => search()} />
    </View>
  )
}


export default About;
