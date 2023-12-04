import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.footer`
  text-align: center;
  bottom: 0;
  position: fixed;
  width: 100%;
  padding: 10px;
  font-style: italic;
  font-size: 0.9em;
  background-color: #011C40;
`;

export const MyLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;
