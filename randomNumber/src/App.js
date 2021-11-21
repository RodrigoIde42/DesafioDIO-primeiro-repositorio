import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RandomNumber from './RandomNumber';
import Resume from './Resume';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Resume" component={Resume} />
        <Stack.Screen name="Random Number" component={RandomNumber} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;