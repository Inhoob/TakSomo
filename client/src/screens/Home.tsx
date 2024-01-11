import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import CustomFAB from '@components/CustomFAB';
import StyledText from '@components/StyledText';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StyledText color="blue" size={20} height={30}>
        한글
      </StyledText>
      <Text>home</Text>
      <CustomFAB />
    </SafeAreaView>
  );
};

export default Home;
