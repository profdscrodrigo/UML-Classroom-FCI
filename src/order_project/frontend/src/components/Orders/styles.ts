import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;

  width: 100%;
  max-width: 1216px;
  margin: 40px auto;

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 10px;
  }
`;
