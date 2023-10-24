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
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
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

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 5px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #000;
  }
`;
