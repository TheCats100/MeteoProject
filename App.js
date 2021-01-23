import React from 'react';
import { View, StatusBar, StyleSheet, Image } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import About from './components/About';
import Search from './components/Search';
import Stack from './components/StackS&R';


const iconToAbout = () => <Image source={require('./components/icons/user.png')} style={{ width: 20, height: 20 }} />
const iconToSearch = () => <Image source={require('./components/icons/accueil.png')} style={{ width: 20, height: 20 }} />

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          showIcon: true,
          showLabel: false,
          style: style.navBar,
          indicatorStyle: style.indicator,
          position: 'bottom'
        }}>
          <Tab.Screen 
            name="Search" 
            component={Stack}
            options={{ 
              title: 'Search',
              tabBarIcon: iconToSearch
            }} 
          />
          <Tab.Screen 
            name="About" 
            component={About}
            options={{ 
              title: 'About',
              tabBarIcon: iconToAbout
            }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create({
  navBar: {
    backgroundColor: "#a2273C",
    borderTopWidth: 1,
    borderColor: "#3f101C"
  },
  indicator: {
    height: 2,
    backgroundColor: "#FFF"
  }
})