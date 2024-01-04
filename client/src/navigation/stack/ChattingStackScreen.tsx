import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Chatting from '@screens/Chatting';

const ChattingStack = createNativeStackNavigator();

const ChattingStackScreen = (): React.JSX.Element => {
  return (
    <ChattingStack.Navigator>
      <ChattingStack.Screen
        name="ChattingStack"
        component={Chatting}
        options={{headerShown: false, contentStyle: {backgroundColor: 'white'}}}
      />
    </ChattingStack.Navigator>
  );
};

export default ChattingStackScreen;
