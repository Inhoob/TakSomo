import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  checkPhotoPermission,
  requestPhotoPermission,
} from '@services/permission';
import {useOverlay} from '@toss/use-overlay';
import React, {useEffect} from 'react';
import {
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  Alert,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {TextInput, useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackParamList} from 'src/interfaces/navigation';
import styled from 'styled-components/native';

import ImageWrapper from '@components/ImageWrapper';
import TwoButtonModal from '@components/Modal/common/TwoButtonModal';
import HeaderBackBtn from '@components/Navigation/HeaderBackBtn';
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

const originalUserData = dummyUser;

const EditProfile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const theme = useTheme<CustomTheme>();
  const [userData, setUserData] = React.useState({
    ...dummyUser,
  });
  const overlay = useOverlay();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderBackBtn onPress={handleBackPress} />,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const modifyUserData = (key: string, value: string) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };
  const handleBackPress = async () => {
    Keyboard.dismiss();
    if (JSON.stringify(userData) === JSON.stringify(originalUserData)) {
      navigation.goBack();
    } else {
      let result = await showConfirmationModal();
      if (result === true) {
        saveUserData();
        navigation.goBack();
      } else if (result === false) {
        navigation.goBack();
      } else {
        return true;
      }
    }
  };

  const showConfirmationModal = async () => {
    return new Promise(resolve =>
      overlay.open(({isOpen, close}) => (
        <TwoButtonModal
          open={isOpen}
          onClose={() => {
            resolve(false);
            close();
          }}
          onConfirm={() => {
            resolve(true);
            close();
          }}
          onDismiss={close}
          content="변경된 내용을 저장하시겠습니까?"
        />
      )),
    );
  };

  const saveUserData = () => {
    /**TODO: save 코드 작성
     *
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
          if (
            !response.didCancel &&
            response.assets &&
            typeof response.assets[0]?.uri === 'string'
          ) {
            modifyUserData('image', response.assets[0]?.uri);
          } else {
            /*TODO: 에러처리 추가 : 이미지를 불러오지 못했습니다 등 */
          }
        },
      );
    } catch (err) {}
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
            onChangeText={text => {
              modifyUserData(key, text);
            }}
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
