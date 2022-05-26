import React from 'react';

import { Navbar } from './styled';
import logo from '../../images/logo.png';

export default function MainNavbar() {
  return (
    <Navbar>
      <img src={logo} className="logo" />
      <a href="/" className="nav-text">
        programas
      </a>
      <a href="/" className="nav-text">
        matérias
      </a>
      <a href="/" className="nav-text">
        contato
      </a>
    </Navbar>
  );
}
