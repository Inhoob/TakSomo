import {useNavigation, useNavigationState} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import CustomFAB from '@components/CustomFAB';
import StyledText from '@components/StyledText';

const Home = () => {
  const navigation = useNavigation();
  const stackLength = useNavigationState(state => state?.routes?.length);
  return (
    <>
      <SafeAreaView>
        <StyledText color="blue" size={20} height={30}>
          한글
        </StyledText>
        <Text>home</Text>
      </SafeAreaView>
      {stackLength === 1 && <CustomFAB />}
    </>
  );
};

export default Home;
