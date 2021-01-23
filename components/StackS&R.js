import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import Results from './Results';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{title: 'Rechercher une ville'}}/>
      <Stack.Screen name="Results" component={Results} options={{title: 'Météo de ...'}}/>
    </Stack.Navigator>
  );
}

export default MyStack