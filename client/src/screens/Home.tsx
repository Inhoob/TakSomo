import React from 'react';
import {Text} from 'react-native';
// import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import StyledText from '@components/StyledText';
import CustomFAB from '@components/CustomFAB';

const Home = () => {
  // const theme = useTheme();

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
