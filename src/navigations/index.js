import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';;
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AuthNavigator from './auth-navigator';
import HomeScreen from '_scenes/home';
import BuildScreen from '_scenes/build';

const Tab = createMaterialBottomTabNavigator();

function Navigator() {
  return (
    <Tab.Navigator
      activeColor="#5FB7E6"

      >
      <Tab.Screen name="Auth"
        component={AuthNavigator}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Build"
        component={BuildScreen}
        options={{
          tabBarLabel: 'Build',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wrench-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Home" 
        component={HomeScreen} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
        }}
      />
    </Tab.Navigator>
  );
}


export default Navigator;