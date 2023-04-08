import React from 'react';
import {View} from 'react-native';
import { useTheme, Text } from 'react-native-paper';


const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>

    </View>
  );
};


export default HomeScreen;