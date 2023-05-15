import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px 24px 0 24px;
`;

export const OrderHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Table = styled.View`
  background: #fff;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  padding: 16px;
`;

export const RowBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Settings = styled.TouchableOpacity`
  padding: 10px 0 10px 10px;
`;
