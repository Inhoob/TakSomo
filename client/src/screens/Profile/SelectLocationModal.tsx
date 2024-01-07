import React from 'react';
import {Pressable, View, StyleSheet} from 'react-native';
import {Modal} from 'react-native-paper';

import StyledText from '@components/StyledText';

import LocalList from '@constants/LocalList';

interface Props {
  isVisible: boolean;
}
/**  */
const SelectLocationModal = ({isVisible}: Props): React.JSX.Element => {
  return (
    <Modal visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <StyledText style={styles.modalText}>Hello World!</StyledText>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              // close();
              // resolve(false);
            }}>
            <StyledText style={styles.textStyle}>Hide Modal</StyledText>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SelectLocationModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
