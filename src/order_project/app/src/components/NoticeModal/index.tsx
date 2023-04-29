import {Modal, Platform, TouchableOpacity} from 'react-native';
import {Button, Header, ModalBody, Overlay} from './styles';
import {Text} from '../Text';
import {Close} from '../Icons/Close';
import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';

interface NoticeModalProps {
  visible: boolean;
  onClose(): void;
  text: string;
  Icon(): any;
}

export default ({ visible, onClose, text, Icon }: NoticeModalProps) => {

  return (
    <Modal visible={visible} transparent animationType='fade'>
      <StatusBar hidden={true} />

      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          {Icon()}
          <Header>
            <Text weight="600" color='#fff'>{text}</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color='#FFF' />
            </TouchableOpacity>
          </Header>
          <Button onPress={onClose}>
            <Text color='#D73035' weight='600'>Ok</Text>
          </Button>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
