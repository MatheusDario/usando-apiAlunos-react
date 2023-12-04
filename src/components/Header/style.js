import styled from 'styled-components';
import { color03 } from '../../config/colors';

export const Nav = styled.nav`
  background: ${color03};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 0px 10px  rgba(0,0,0,0.7);

  a {
    color: #fff;
    margin-right: 10px;
    font-weight: bold;
    transition: all 300ms ease-in-out;

    &:hover {
      color: #04D9B2;
    }
  }
`;

export const Link = styled.a``;
