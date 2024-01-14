import {
  useNavigation,
  useNavigationContainerRef,
  useNavigationState,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {View} from 'react-native';
import {FAB, Portal} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackParamList} from 'src/interfaces/navigation';

const TabNavigatorCounts = 4;
const CustomFAB = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <FAB
      style={{
        position: 'absolute',
        right: 20,
        bottom: 20,
      }}
      icon={({color, size}) => (
        <Ionicons name="add" color={color} size={size} />
      )}
      onPress={() => {
        navigation.navigate('CreateMeeting');
      }}
    />
  );
};

export default CustomFAB;
