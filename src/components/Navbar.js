// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">Clases Particulares</Navbar.Brand>
      <Nav className="ml-auto">
        {/* Add navigation links if needed */}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
