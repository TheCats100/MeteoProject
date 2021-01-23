import React from 'react';
import { View, StatusBar, StyleSheet, Image } from 'react-native';

//TabNavigator
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './components/Reducer';

//Components
import About from './components/About';
import Search from './components/Search';
import Stack from './components/StackS&R';

//Style
import style from './Style';

const Tab = createMaterialTopTabNavigator();
const store = createStore(Reducer);


const iconToAbout = () => <Image source={require('./components/icons/user.png')} style={{ width: 20, height: 20 }} />
const iconToSearch = () => <Image source={require('./components/icons/accueil.png')} style={{ width: 20, height: 20 }} />

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
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
    </Provider>
  );
}
