import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import FindMeeting from '@screens/FindMeeting';

const FindMeetingStack = createNativeStackNavigator();

const FindMeetingStackScreen = (): React.JSX.Element => {
  return (
    <FindMeetingStack.Navigator>
      <FindMeetingStack.Screen
        name="FindMeetingStack"
        component={FindMeeting}
        options={{headerShown: false, contentStyle: {backgroundColor: 'white'}}}
      />
    </FindMeetingStack.Navigator>
  );
};

export default FindMeetingStackScreen;
