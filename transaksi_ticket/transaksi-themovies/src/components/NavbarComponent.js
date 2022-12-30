import React from "react";
import {Nav, Navbar, Container } from 'react-bootstrap'
import './navbar.css';

const NavbarComponent = () => {
  return (
    <Navbar className="nav" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand className="tm" href="#home"><strong>T-Movies</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Nav.Link href="#ticket"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
