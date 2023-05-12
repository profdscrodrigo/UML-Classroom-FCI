import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const isAndroid = Platform.OS === 'android';

interface SpacingProps {
    bottom?: number; 
    left?: number; 
    right?: number; 
    top?: number; 
}

export const Spacing = styled.View<SpacingProps>`
    margin-bottom: ${({ bottom }) => `${bottom || 0}px`};
    margin-left: ${({ left }) => `${left || 0}px`};
    margin-top: ${({ top }) => `${top || 0}px`};
    margin-right: ${({ right }) => `${right || 0}px`};
`;

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: #fafafa;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: column;
  padding: 0 32px 0 32px;
`;

export const Row = styled.View`
  flex-grow: 1;
  flex-direction: row;
`;

export const RowButton = styled(Row)`
  padding: 12px;
`;

export const RowCenter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const ButtonAdd = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #D73035;
  flex-direction: row;
  padding: 8px 0;
`;
