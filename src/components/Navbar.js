// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <div className='navbar-div'>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Nadh</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link >Home</Nav.Link>
          <Nav.Link >Materias</Nav.Link>
          <Nav.Link >Sobre Nosotros</Nav.Link>
          <Nav.Link >Contacto</Nav.Link>
        </Nav>
      </Navbar>
    </div>

    // Este script asegura un suave desplazamiento al hacer clic en los enlaces del Navbar
    /*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });*/
  );
};

export default NavigationBar;
