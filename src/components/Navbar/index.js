import React from 'react';

import logo from '../../images/logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="xl" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">
          <img width="50" height="50" src={logo} className="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="/materias" className="fw-bold fs-3 mx-5">
              matérias
            </Nav.Link>
            <Nav.Link href="/programas" className="fw-bold fs-3 mx-5">
              programas
            </Nav.Link>
            <Nav.Link href="/faleconosco" className="fw-bold fs-3 mx-5">
              fale conosco
            </Nav.Link>
            <Nav.Link href="/contato" className="fw-bold fs-3 mx-5">
              contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
