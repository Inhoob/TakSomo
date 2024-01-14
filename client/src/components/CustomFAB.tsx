import {
  useNavigation,
  useNavigationContainerRef,
  useNavigationState,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as React from 'react';
import {FAB, Portal} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackParamList} from 'src/interfaces/navigation';

const CustomFAB = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <Portal>
      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 10,
          bottom: 110,
        }}
        icon={({color, size}) => (
          <Ionicons name="add" color={color} size={size} />
        )}
        onPress={() => {
          // navigation.navigate('CreateMeeting');
        }}
      />
    </Portal>
  );
};

export default CustomFAB;
