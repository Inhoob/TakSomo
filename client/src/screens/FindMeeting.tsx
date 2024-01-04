import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// import {useTheme} from 'react-native-paper';
import CustomFAB from '@components/CustomFAB';

// import StyledText from '@components/StyledText';

const FindMeeting = () => {
  // const theme = useTheme();

  return (
    <SafeAreaView>
      {/* <StyledText color="blue" size={20} height={30}></StyledText> */}
      <Text>findMeeting</Text>
      <CustomFAB />
    </SafeAreaView>
  );
};

export default FindMeeting;
