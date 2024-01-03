import {useOverlay} from '@toss/use-overlay';
import React, {ComponentProps, useRef} from 'react';
import {View, StyleSheet, Modal, Text, Pressable} from 'react-native';
import styled from 'styled-components/native';

export function useModal() {
  const overlay = useOverlay();
  //TODO: 이걸로 twobutton modal, onebutton modal 각각 만들것
  const openModal = () =>
    new Promise(resolve => {
      overlay.open(({isOpen, close}) => {
        return (
          <Modal animationType="slide" transparent={true} visible={isOpen}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    close();
                    resolve(false);
                  }}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        );
      });
    });

  return {open: openModal, close: overlay.close};
}

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
