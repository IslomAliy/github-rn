import React from 'react';
import Home from './src/screens/HomeScreen';
import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from './src/screens/UserScreen';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type UserProps = {
  route: RouteProp<RootStackParamList, 'User'>;
  navigation: NavigationProp<RootStackParamList>;
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{ title: 'User' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
