import React from 'react';
import {View} from 'react-native'
import { useTheme, Button, Text, Switch } from 'react-native-paper';
import PreferencesContext from '_utils/preferences-context';


const LoginScreen = ({navigation}) => {
  const theme = useTheme();

  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button raised 
        theme={{ roundness: 10 }} 
        onPress={() => navigation.navigate('Home')}>
        Go home
      </Button>
      <Switch
          value={isThemeDark}
          onValueChange={toggleTheme}
        />
    </View>
  );
};

export default LoginScreen;