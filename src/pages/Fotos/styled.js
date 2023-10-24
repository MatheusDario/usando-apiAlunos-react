import styled from 'styled-components';

export const Title = styled.h1`
  color: #7c7c7c;
  text-align: center;
  font-weight: bolder;
  font-family: 'Courier New', Courier, monospace;
  font-size: 19pt;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: center;
  margin-top: 10px;

  label {
    width: 180px;
    height: 180px;
    background: #eee;
    border: 3px dashed red;
    display: flex;
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
  }

  span {
    text-align: center;
    margin: auto;
  }

  img {
    width: 180px;
    height: 180px;
  }


  input {
    display: none;

    &:focus {
      border: 1px solid #C3073F;
    }
  }
`;
