import styled from 'styled-components/native';

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
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  justify-content: center;
  padding: 8px 24px 8px 24px;
`;

export const Row = styled.View`
    flex-grow: 1;
    flex-direction: row;
    align-items: center;
`;

export const Img = styled.Image`
    height: 50px;
    width: 50px;
    margin-right: 12px;
`;

export const RowReverse = styled(Row)`
  justify-content: flex-end;
`;

export const IconTouch = styled.TouchableOpacity`
  padding: 0 0 8px 16px
`;