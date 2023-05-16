import {Modal, Platform, TouchableOpacity} from 'react-native';
import {Form, Header, Input, ModalBody, Overlay} from './styles';
import {Text} from '../Text';
import {Close} from '../Icons/Close';
import {Button} from '../Button';
import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';

interface Props {
  visible: boolean;
  onClose(): void;
  onSave(name: string): void;
}

export function RegisterModal({ visible, onClose, onSave }: Props) {
  const [name, setName] = useState('');

  function handleSaveCompany() {
    setName('');
    onSave(name);
  }

  return (
    <Modal visible={visible} transparent animationType='fade'>
      <StatusBar hidden={true} />

      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Nome do restaurante</Text>
            <TouchableOpacity onPress={() => onClose()}>
              <Close color='#666' />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder='Insira o nome do restaurante'
              placeholderTextColor='#666'
              onChangeText={setName}
              maxLength={120}
            />
            <Button
              onPress={() => handleSaveCompany()} disabled={name.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
