import React from 'react';
import {Text, View} from 'react-native';
import {Modal, Button, Portal, useTheme} from 'react-native-paper';

import StyledText from '@components/StyledText';

import {Row} from '@styles/GlobalStyles';
import {CustomTheme} from '@styles/theme';

import {deviceWidth} from '@constants/Device';

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onDismiss: () => void;
  content: string;
}

const TwoButtonModal: React.FC<Props> = ({
  open,
  onClose,
  onConfirm,
  onDismiss,
  content,
}) => {
  const theme = useTheme<CustomTheme>();
  return (
    <Portal>
      <Modal visible={open} onDismiss={onDismiss}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
          }}>
          <View
            style={{
              backgroundColor: theme.colors.background,
              padding: 20,
              borderRadius: 10,
              width: deviceWidth * 0.8,
              minHeight: 200,
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, minHeight: 40, justifyContent: 'center'}}>
              <StyledText color={theme.colors.mainText} size={20} height={25}>
                {content}
              </StyledText>
            </View>
            <Row style={{width: '100%', justifyContent: 'flex-end'}}>
              <Button
                onPress={onClose}
                mode="outlined"
                style={{marginRight: 10}}>
                <StyledText color={theme.colors.mainText}>나가기</StyledText>
              </Button>
              <Button onPress={onConfirm} mode="contained">
                <StyledText color={theme.colors.background}>저장</StyledText>
              </Button>
            </Row>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default TwoButtonModal;
