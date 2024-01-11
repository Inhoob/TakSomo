import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackParamList} from 'src/interfaces/navigation';

interface Props {
  onPress?: () => void;
}

const HeaderBackBtn = ({onPress}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  console.log('navigation!!!!', navigation);
  return (
    <Pressable
      hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
      onPress={() => {
        onPress ? onPress() : navigation.goBack();
      }}>
      <Ionicons name="arrow-back" size={30} color="black" />
    </Pressable>
  );
};

export default HeaderBackBtn;
