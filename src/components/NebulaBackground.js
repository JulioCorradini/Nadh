// NebulaBackground.js

//import React, { useEffect } from 'react'; 
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import  { loadFull } from 'tsparticles';
import particlesConfig from './config/particles-config';
import './NebulaBackground.css';

const NebulaBackground = () => {

  const particlesInit = useCallback((engine)=>{
    loadFull(engine)
  }, [])

  return(
    <div className="nebula-background">
      <Particles 
        options={ particlesConfig }
        init={ particlesInit }
      />
    </div>
  )

  //return <div className="nebula-background"></div>;

};

export default NebulaBackground;
