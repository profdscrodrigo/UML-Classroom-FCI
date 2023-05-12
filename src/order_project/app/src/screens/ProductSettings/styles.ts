import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const isAndroid = Platform.OS === 'android';

interface SpacingProps {
    bottom?: number; 
}

export const Spacing = styled.View<SpacingProps>`
    margin-bottom: ${({ bottom }) => `${bottom || 0}px`};
`;

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: #fafafa;
`;

export const Row = styled.View`
    flex-grow: 1;
    flex-direction: row;
`;

export const Col = styled.View`
    flex-direction: column;
`;

export const Content = styled.ScrollView`
  flex-direction: column;
  padding: 20px 20px 0 20px;
`;

export const ButtonContainer = styled.View`
  flex-direction: column;
  padding: 8px 20px 0 20px;
`;

export const InputContainer = styled.View`
  flex:1;
  background-color: #fff;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
`;

export const ItemImage = styled.Image`
  height: 75px;
  width: 75px;
  border-radius: 8px;
  border: 1px rgba(204, 204, 204, 0.5);
  margin: 16px;
`;

export const Center = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const RowCenter = styled(Row)`
  align-items: center;
`;

export const TouchRow = styled.TouchableOpacity`
  flex:1;
  background-color: #fff;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  flex-direction: row;
`;