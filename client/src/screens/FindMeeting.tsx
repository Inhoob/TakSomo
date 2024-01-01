import React from 'react';
import {Text} from 'react-native';

// import {useTheme} from 'react-native-paper';
import CustomFAB from '@components/CustomFAB';

import {GlobalStyles} from '@styles/GlobalStyles';

GlobalStyles;

// import StyledText from '@components/StyledText';

const FindMeeting = () => {
  // const theme = useTheme();

  return (
    <GlobalStyles.SafeAreaView>
      {/* <StyledText color="blue" size={20} height={30}></StyledText> */}
      <Text>findMeeting</Text>
      <CustomFAB />
    </GlobalStyles.SafeAreaView>
  );
};

export default FindMeeting;
