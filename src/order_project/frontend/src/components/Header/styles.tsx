import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 198px;
  background-color: #D73035;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1216px;

  padding: 2rem;

  .details {
    h1 {
      font-size: 32px;
      color: #FFF;
    }

    h2 {
      font-size: 16px;
      color: #FFF;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }

  .logo {
      color: #fff;
    }

  @media (max-width: 767px) {
    .logo {
      display: none;
    }

    .details {
      width: 100%;
      text-align: center;
    }
  }
`;
