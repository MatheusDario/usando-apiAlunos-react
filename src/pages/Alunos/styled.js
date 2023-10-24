import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  margin-top: 20px;

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
}`;

export const Title = styled.h1`
  color: #7c7c7c;
  text-align: center;
  font-weight: bolder;
  font-family: 'Courier New', Courier, monospace;
  font-size: 19pt;
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 10px;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  color: black;
  font-size: 12pt;

  &&:hover {
    color: red;
    text-decoration: underline;
  }
`;
