import React from 'react';
import {Text} from 'react-native';

import CustomFAB from '@components/CustomFAB';
import StyledText from '@components/StyledText';

import {GlobalStyles} from '@styles/GlobalStyles';

const Home = () => {
  return (
    <GlobalStyles.SafeAreaView>
      <StyledText color="blue" size={20} height={30}>
        한글
      </StyledText>
      <Text>home</Text>
      <CustomFAB />
    </GlobalStyles.SafeAreaView>
  );
};

export default Home;
