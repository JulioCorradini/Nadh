// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">Nadh</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link >Home</Nav.Link>
        <Nav.Link >Materias</Nav.Link>
        <Nav.Link >Sobre Nosotros</Nav.Link>
        <Nav.Link >Contacto</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
