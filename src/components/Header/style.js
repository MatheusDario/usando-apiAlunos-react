import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    color: #fff;
    margin-right: 10px;
    font-weight: bold;
  }
`;

export const Link = styled.a``;
