import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import Results from './Results';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

export default MyStack