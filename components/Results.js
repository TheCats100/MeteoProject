import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  city: state.city
})

const Results = ({ city }) => {
  return (
    <View>
      <Text>
        {city}
      </Text>
      <Button title='Show me city' onPress={() => console.log(city)} />
    </View>
  )
}

export default connect(mapStateToProps)(Results);