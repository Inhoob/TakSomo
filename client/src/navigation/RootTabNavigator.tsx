/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
export const RootTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.tertiary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarStyle: {
          backgroundColor: 'white',
          padding: 10,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 10,
        },
      }}>
      <>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MeetingList"
          component={Home}
          options={{
            tabBarLabel: '모임찾기',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chatting"
          component={Home}
          options={{
            tabBarLabel: '채팅',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="chat-bubble" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
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
