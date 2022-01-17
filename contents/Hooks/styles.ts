import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  margin: 40px;

  h1, h2, h3, h4, h5, p {
    margin: 16px
  }

  label {
    display: block;
    margin: 16px;
  }

  input {
    height: 40px
  }
`;


export const Card = styled.div`
  margin-bottom: 32px;
  padding: 16px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;

export const CardName = styled.h2`
  font-size: 24px;
`;

export const CardDelete = styled.button`
  height: 40px;
  width: auto;
  background-color: #0082FF29;
  border: none;
  cursor: pointer;
`;


