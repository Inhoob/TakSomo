import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  CheckPhotoPermissionResult,
  checkPhotoPermission,
  requestPhotoPermission,
} from '@services/permission';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  Alert,
  BackHandler,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Card, TextInput, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackParamList} from 'src/interfaces/navigation';
import styled from 'styled-components/native';

import ImageWrapper from '@components/ImageWrapper';
import Spacer from '@components/Spacer';
import StyledText from '@components/StyledText';

import {Row} from '@styles/GlobalStyles';
import {CustomTheme} from '@styles/theme';

import {dummyUser} from '@constants/DummyData';

import {FloatingButton} from './Profile';

enum keyMapping {
  username = '이름',
  grade = '부수',
  image = '이미지',
  selfIntroduction = '소개',
  sex = '성별',
  key = 'key',
}

const EditProfile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const theme = useTheme<CustomTheme>();
  const [userData, setUserData] = React.useState({
    ...dummyUser,
  });

  const originalUserData = {...userData};
  const handleBackPress = useCallback(() => {
    let isSame = userDataChanged();
    console.log('issame!!', isSame);
    if (isSame) {
      showConfirmationModal();
      return true;
    } else {
      return false;
    }
  }, []);

  useEffect(() => {
    console.log('didmount!!!');
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => {
      console.log('return!!!!');
      backHandler.remove();
    };
  }, [handleBackPress]);

  const modifyUserData = (key: string, value: string) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const userDataChanged = () => {
    console.log(userData);
    console.log(originalUserData);
    return JSON.stringify(userData) === JSON.stringify(originalUserData);
  };

  const showConfirmationModal = () => {
    Alert.alert(
      '변경된 내용을 저장하시겠습니까?',
      '저장하지 않고 나가면 변경된 내용이 저장되지 않습니다.',
      [
        {
          text: '저장',
          onPress: () => {
            saveUserData();
            navigation.goBack();
          },
        },
        {
          text: '저장하지 않고 나가기',
          onPress: () => {
            navigation.goBack();
          },
        },
        {
          text: '취소',
          style: 'cancel',
        },
      ],
    );
  };

  const saveUserData = () => {
    /**TODO: save 코드 작성
     * 완료버튼 누를 시 바로 저장하고 뒤로가기 누를 시 저장 할지 말지 결정하는 modal
     */
  };
  const pickImage = () => {
    try {
      ImagePicker.launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 200,
          maxWidth: 200,
          quality: 0.8,
          selectionLimit: 1,
        },
        response => {
          if (!response.didCancel) {
            console.log(response.assets[0]?.uri);
            modifyUserData('image', response.assets[0]?.uri);
          }
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onPressPhotoButton = async () => {
    let permissionGranted = await checkPhotoPermission();

    if (permissionGranted.granted === true) {
      pickImage();
      //여기랑 똑같음
    } else {
      const result = await requestPhotoPermission();
      if (result.state === 'blocked') {
        openSettings();
      }
    }
  };

  const openSettings = async () => {
    Alert.alert(
      '사진 접근을 허용해주세요',
      '알림에서 사진 접근을 허용해하세요',
      [
        {
          text: 'OK',
          onPress: () => {
            Linking.openSettings();
          },
        },
      ],
    );
  };

  const renderTextInputRow = (key: keyof typeof keyMapping) => {
    return (
      <View>
        <Row>
          <Key color={theme.colors.mainGray1}>{keyMapping[key]}</Key>
          <TextInput
            maxLength={key === 'selfIntroduction' ? 40 : 10}
            style={{
              backgroundColor: theme.colors.cardContent,
              flex: 1,
              height: key === 'selfIntroduction' ? 100 : 40,
              justifyContent: 'flex-start',
              textAlignVertical: key === 'selfIntroduction' ? 'top' : 'auto',
            }}
            placeholder={
              key === 'selfIntroduction'
                ? '소개를 입력해 보세요(최대 40글자)'
                : ''
            }
            numberOfLines={key === 'selfIntroduction' ? 5 : 3}
            value={userData[key as keyof typeof userData] as string}
            multiline={key === 'selfIntroduction' ? true : false}
            onChangeText={text => modifyUserData(key, text)}
            underlineColor="transparent"
          />
        </Row>
      </View>
    );
  };

  const renderDistinctRow = () => {
    return (
      <View>
        <Row>
          <Key color={theme.colors.mainGray1}>지역</Key>
          <View
            style={{
              backgroundColor: theme.colors.cardContent,
              flex: 1,
              height: 40,
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <StyledText>
              {userData.province + ' ' + userData.distinct}
            </StyledText>
          </View>
        </Row>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{padding: 20, flex: 1}}>
        <Header>
          <Pressable
            style={{
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              onPressPhotoButton();
              /**TODO: file import 관련 권한 확인 및 파일 가져오기 (로컬에서) */
            }}>
            <ImageWrapper
              source={{uri: userData.image}}
              width="80"
              height="80"
              radius="40"
            />
            <FloatingButton theme={theme}>
              <Ionicons
                name={userData?.image ? 'pencil-outline' : 'camera-sharp'}
                size={20}
                color={theme.colors.secondary}
              />
            </FloatingButton>
          </Pressable>
        </Header>
        <Spacer height="30" />
        <Section>
          {renderTextInputRow('username')}
          <Spacer height="10" />
          {renderTextInputRow('selfIntroduction')}
          <Spacer height="10" />
          {renderDistinctRow()}
        </Section>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Key = styled(StyledText)`
  width: 50px;
`;

const Section = styled.View``;

export default EditProfile;
