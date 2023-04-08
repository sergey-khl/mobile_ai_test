import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '_scenes/login';


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
  );
};

export default AuthNavigator;