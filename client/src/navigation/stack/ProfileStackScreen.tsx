import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackParamList} from 'src/interfaces/navigation';

import EditProfile from '@screens/Profile/EditProfile';
import Profile from '@screens/Profile/Profile';

import StyledText from '@components/StyledText';

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = (): React.JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileStack"
        component={Profile}
        options={{
          headerShown: true,
          headerTitleAlign: 'left',
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft: () => <StyledText>프로필</StyledText>,
          contentStyle: {backgroundColor: 'white'},
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          contentStyle: {backgroundColor: 'white'},
          headerTitle: '프로필 편집',
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={20}
              color="black"
              onPress={() => navigation.navigate('ProfileStack')}
            />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
