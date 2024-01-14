import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '@screens/Home';
import CreateMeeting from '@screens/Meeting/CreateMeeting';

import HeaderBackBtn from '@components/Navigation/HeaderBackBtn';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = (): React.JSX.Element => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeStack"
        component={Home}
        options={{headerShown: false, contentStyle: {backgroundColor: 'white'}}}
      />
      <HomeStack.Screen
        name="CreateMeeting"
        component={CreateMeeting}
        options={{
          contentStyle: {backgroundColor: 'white'},
          headerTitle: '모임 생성',
          headerLeft: () => <HeaderBackBtn />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
