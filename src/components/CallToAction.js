// CallToAction.js
import React from 'react';
import { Button } from 'react-bootstrap';
import './CallToAction.css'

const CallToAction = () => {
  return (
    <div className="cta-container">
      <Button className= "button" variant="primary" size="lg">
        Conocer Más
      </Button>
    </div>
  );
};

export default CallToAction;
