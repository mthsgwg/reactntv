import React from 'react';

import { Navbar } from './styled';
import logo from '../../images/logo.png';

export default function MainNavbar() {
  return (
    <Navbar>
      <a href="/" className="logo">
        <img src={logo} />
      </a>
      <a href="/materias" className="nav-text">
        matérias
      </a>
      <a href="/" className="nav-text">
        programas
      </a>
      <a href="/" className="nav-text">
        contato
      </a>
    </Navbar>
  );
}
