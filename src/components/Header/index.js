import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { Nav } from './style';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        {' '}
        <FaHome size={24} />
        {' '}
      </Link>
      <Link to="/register">
        {' '}
        <FaUserAlt size={22} />
        {' '}
      </Link>
      <Link to="/login">
        {' '}
        <FaSignInAlt size={24} />
        {' '}
      </Link>
    </Nav>
  );
}
