import styled from 'styled-components';

export const Titulo = styled.h1`
  color: #aaa;
  text-align: center;
  font-weight: bolder;
  font-family: 'Courier New', Courier, monospace;
  font-size: 19pt;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  span {
    color: gray;
    margin: 0px 5px 5px;
  }

  input {
    height: 40px;
    font-size: 17px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;

    &:focus {
      border: 1px solid #C3073F;
    }
  }
`;
