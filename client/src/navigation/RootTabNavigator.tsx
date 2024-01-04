/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BottomTabParamList} from 'src/interfaces/navigation';

import ChattingStackScreen from './stack/ChattingStackScreen';
import FindMeetingStackScreen from './stack/FindMeetingStackScreen';
import HomeStackScreen from './stack/HomeStackScreen';
import ProfileStackScreen from './stack/ProfileStackScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();
export const RootTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white', flex: 1}}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.tertiary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarStyle: {
          backgroundColor: 'white',
          padding: 10,
          height: 100,
          borderWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 10,
        },
      }}>
      <>
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MeetingListTab"
          component={FindMeetingStackScreen}
          options={{
            tabBarLabel: '모임찾기',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ChattingTab"
          component={ChattingStackScreen}
          options={{
            tabBarLabel: '채팅',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="chat-bubble" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: '프로필',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </>
    </Tab.Navigator>
  );
};
