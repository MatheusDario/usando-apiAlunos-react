import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  margin-top: 30px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid white;
}`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-weight: bolder;
  font-family: 'Courier New', Courier, monospace;
  font-size: 2.5em;
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
  background-color: #011C40;
  border: 1px solid white;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
  color: white;
  font-size: 1.3em;
  transition: all 300ms ease-in-out;

  &:hover {
    color: black;
    background-color: #04D9B2;
    text-decoration: underline;
  }
`;
