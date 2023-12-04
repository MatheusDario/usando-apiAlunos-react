import React from 'react';
import {
  FaHome,
  FaUserAlt,
  FaSignInAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav } from './style';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Link title="Home" to="/">
        {' '}
        <FaHome size={24} />
        {' '}
      </Link>
      <Link title="Alterar seus dados" to="/register">
        {' '}
        <FaUserAlt size={22} />
        {' '}
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          {' '}
          <FaPowerOff title="Sair" size={24} />
          {' '}
        </Link>
      ) : (
        <Link title="Entrar" to="/login">
          {' '}
          <FaSignInAlt size={24} />
          {' '}
        </Link>
      )}

      {isLoggedIn && <FaCircle size={22} color="#04D98B" />}
    </Nav>
  );
}
