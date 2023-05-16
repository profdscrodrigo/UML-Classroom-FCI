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

export const TouchRow = styled.TouchableOpacity`
    flex-grow: 1;
    flex-direction: row;
`;

export const RowCenter = styled(Row)`
  align-items: center;
`;

export const Col = styled.View`
    flex-direction: column;
`;

export const Content = styled.View`
  flex-direction: column;
  padding: 20px 20px 0 20px;
`;