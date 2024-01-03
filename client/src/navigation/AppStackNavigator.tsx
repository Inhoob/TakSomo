import {
  createNativeStackNavigator, // NativeStackNavigationProp,
  // NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
export const AppStackNavivator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Root">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
