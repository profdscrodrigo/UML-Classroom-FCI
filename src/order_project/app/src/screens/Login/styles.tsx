import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

const isAndroid = Platform.OS === 'android';

interface SpacingProps {
    bottom?: number; 
}

export const Spacing = styled.View<SpacingProps>`
    margin-bottom: ${({ bottom }) => `${bottom || 0}px`};
    width: 100%;
    align-items: center;

`;

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: #fafafa;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  flex-direction: column;
  padding: 0 32px 0 32px;
`;

export const Row = styled.View`
    flex-grow: 1;
    flex-direction: row;
`;

