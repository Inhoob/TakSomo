import React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import styled from 'styled-components/native';

import Spacer from '@components/Spacer';
import StyledText from '@components/StyledText';

import {Row} from '@styles/GlobalStyles';
import {CustomTheme} from '@styles/theme';

interface Props {}
const CreateMeeting = () => {
  const theme = useTheme<CustomTheme>();
  const [meetingRoomData, setMeetingRoomData] = React.useState({
    subject: '',
    description: '',
    password: '',
    image: [],
    maxPeople: 30,
  });
  const modifyMeetingRoomData = (key: string, value: string) => {
    setMeetingRoomData({
      ...meetingRoomData,
      [key]: value,
    });
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={{flex: 1, padding: 20}}>
        <Row>
          <Key>제목</Key>
          <TextInput
            mode="outlined"
            style={{
              flex: 1,
              borderRadius: 12,
              backgroundColor: theme.colors.cardContent,
              justifyContent: 'flex-start',
            }}
            outlineStyle={{borderRadius: 12}}
            placeholder="모임 이름"
            onChangeText={text => {
              modifyMeetingRoomData('subject', text);
            }}
            outlineColor="transparent"
          />
        </Row>
        <Spacer height="10" />
        <Key>소개</Key>
        <Spacer height="10" />
        <TextInput
          mode="outlined"
          style={{
            height: 200,
            backgroundColor: theme.colors.cardContent,
            borderRadius: 12,
          }}
          outlineStyle={{borderRadius: 12}}
          maxLength={100}
          placeholder="모임에 대한 설명을 적어주세요"
          numberOfLines={5}
          value={meetingRoomData.description}
          multiline={true}
          onChangeText={text => {
            modifyMeetingRoomData('description', text);
          }}
          outlineColor="transparent"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
const Key = styled(StyledText)`
  width: 50px;
`;

export default CreateMeeting;
