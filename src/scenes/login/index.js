import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const LoginScreen = ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Login</Text>
    <Button
      title="Go to home"
      onPress={() => navigation.navigate('Home')}
    />
  </View>

);

export default LoginScreen;