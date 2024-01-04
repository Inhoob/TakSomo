import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '@screens/Home';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = (): React.JSX.Element => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeStack"
        component={Home}
        options={{headerShown: false, contentStyle: {backgroundColor: 'white'}}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
