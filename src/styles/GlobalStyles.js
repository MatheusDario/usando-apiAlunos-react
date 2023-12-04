import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: #04B2E0;
    color: white;
  }

  html, border-style, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: 1px solid white;
    color: white;
    padding: 10px 20px;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.1em;
    transition: all 300ms ease-in-out;

    &:hover {
    color: black;
    background-color: #04D9B2;
    text-decoration: underline;
  }
  }
  
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 900px;
  min-width: 320px;
  background: #0378a9;
  margin: 50px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
