import React from 'react';
import {Pressable} from 'react-native';
import {Card, useTheme} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import ImageWrapper from '@components/ImageWrapper';
import Spacer from '@components/Spacer';
import StyledText from '@components/StyledText';

// import StyledText from '@components/StyledText';
import {Column, GlobalStyles} from '@styles/GlobalStyles';
import {CustomTheme} from '@styles/theme';

import {dummyUser} from '@constants/DummyData';

const Profile = () => {
  const dummyData = dummyUser;
  const theme = useTheme<CustomTheme>();

  return (
    <View
      style={{padding: 20, backgroundColor: theme.colors.mainSurface, flex: 1}}>
      <Header>
        <Pressable onPress={async () => {}}>
          <ImageWrapper
            source={{uri: dummyData.image}}
            width="80"
            height="80"
            radius="40"
          />
        </Pressable>
        <Spacer width="30" />
        <FloatingButton theme={theme}>
          <Ionicons
            name={dummyData?.image ? 'pencil-outline' : 'camera-sharp'}
            size={20}
            color={theme.colors.secondary}
          />
        </FloatingButton>

        <Column>
          <StyledText size={20}>{dummyData.username}</StyledText>
          <Spacer height="5" />
          <StyledText color="gray" size={12} height={16}>
            {dummyData.province} {dummyData.distinct}
          </StyledText>
          <StyledText color="gray" size={12} height={16}>
            {dummyData.grade}부
          </StyledText>
        </Column>
      </Header>
      <Spacer height="20" />
      <Section>
        <StyledText size={16} color={theme.colors.mainGray1}>
          소개
        </StyledText>
        <Spacer height="10" />
        <Card.Content
          style={{
            backgroundColor: theme.colors.cardContent,
            padding: 20,
            borderRadius: 12,
            height: 100,
          }}>
          <StyledText>{dummyData.selfIntroduction}</StyledText>
        </Card.Content>
      </Section>

      <Spacer height="20" />
    </View>
  );
};
const FloatingButton = styled.View<{theme: ThemeProp}>`
  position: absolute;
  left: 60px;
  bottom: 5px;
  width: 30px;
  height: 30px;

  border-radius: 20px;
  background-color: ${({theme}) => theme.colors?.background};
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Section = styled.View`
  flex-direction: column;
`;

export default Profile;
