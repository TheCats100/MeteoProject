import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import Results from './Results';
import { connect } from 'react-redux';

const Stack = createStackNavigator();

const mapStateToProps = (state) => ({
  city: state.city
})

function MyStack({ city }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{title: 'Rechercher une ville'}}/>
      <Stack.Screen name="Results" component={Results} options={{title: `Météo de ${city}`}}/>
    </Stack.Navigator>
  );
}

export default connect(mapStateToProps)(MyStack);