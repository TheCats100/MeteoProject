import React from 'react';
import { View } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { TabNavigator } from 'react-navigation';

const Tabs = TabNavigator({
  Search: { screen: Search },
  About: { screen: About }
})

export default function App() {
  return (
    <Tabs />
  );
}

