import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';

import StyledText from '@components/StyledText';

const EditProfile = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  // //   navigation.setOptions({
  // //     headerTitle: '프로필 편집',
  // //     headerTitleAlign: 'center',
  // //     headerShadowVisible: false,
  // //   });
  // // }, [navigation]);
  return (
    <View>
      <StyledText>EditProfile</StyledText>
    </View>
  );
};

export default EditProfile;
