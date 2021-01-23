import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const About = ({ navigation: { navigate } }) => {

  const search = () => {
    navigate('Search')
  }

  //watch time 42:35

  return (
    <View style={style.view}>
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
      <Button title="Rechercher" onPress={() => search()} />
    </View>
  )
}


export default About;


const style = StyleSheet.create({
  view: {
    margin: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  }
})