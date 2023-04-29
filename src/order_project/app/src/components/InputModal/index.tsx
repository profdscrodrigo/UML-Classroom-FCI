import {Modal, Platform, TouchableOpacity} from 'react-native';
import {Form, Header, Input, ModalBody, Overlay, Row} from './styles';
import {Text} from '../Text';
import {Close} from '../Icons/Close';
import {Button} from '../Button';
import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';

interface InputModalProps {
  visible: boolean;
  onClose(): void;
  onSave(value: string): void;
  text: string;
  placeholder: string;
  maxLength?: number;
  keyboardType?: 'number-pad' | 'default'
}

export function InputModal({ visible, onClose, onSave, text, placeholder, maxLength, keyboardType = "default" }: InputModalProps) {
  const [value, setValue] = useState('');

  function handleSave() {
    setValue('');
    onSave(value);
  }

  return (
    <Modal visible={visible} transparent animationType='fade'>
      <StatusBar hidden={true} />

      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">{text}</Text>
            <TouchableOpacity onPress={() => onClose()}>
              <Close color='#666' />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder={placeholder}
              placeholderTextColor='#666'
              keyboardType={keyboardType}
              onChangeText={setValue}
              {...(maxLength ? {maxLength} :{})}
            />
            <Row>
              <Button
                onPress={() => handleSave()} disabled={value.length === 0}>
                Salvar
              </Button>
            </Row>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
