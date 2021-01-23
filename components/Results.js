import React from 'react';
import { View, Text, Button } from 'react-native';

const Results = ({ city }) => {
  return (
    <View>
      <Text>
        
      </Text>
      <Button title='Show me city' onPress={() => console.log(city)} />
    </View>
  )
}

export default Results;