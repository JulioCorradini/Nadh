// NebulaBackground.js

import React, { useEffect } from 'react'; 
import './NebulaBackground.css';
import Particles from 'particles.js';

const NebulaBackground = () => {

  useEffect(() => {

    // Configurar los parámetros de particles.js
    Particles('nebula-background', {
      particles: {
        number: {
          value: 80,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    });
  }, []);

  return <div className="nebula-background"></div>;
};

export default NebulaBackground;
