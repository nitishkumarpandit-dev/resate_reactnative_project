import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const PropertyDetail = () => {
    const { id} = useLocalSearchParams();

  return (
    <View>
      <Text>PropertyDetail {id}</Text>
    </View>
  )
}

export default PropertyDetail