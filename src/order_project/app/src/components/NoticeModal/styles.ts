import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 0 24px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = styled.View`
  background-color: #D73035;
  padding: 24px;
  border-radius: 8px;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Button = styled.TouchableOpacity`
  background: #FFFFFF;
  border-radius: 48px;
  padding: 14px 24px;
  margin-top: 24px;
`;
