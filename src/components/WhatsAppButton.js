// WhatsAppButton.js

import React from 'react';
import { useState } from 'react';
import './WhatsAppButton.css'
import whasAppLogo from "../WhatsApp.png";

const WhatsAppButton = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleWhatsAppClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
    //window.location.href = "...";
    console.log("click");
  };

  return (
    <div className='whatsapp-container' onClick={handleWhatsAppClick}>
      <img className='immage' src={ whasAppLogo }  alt="WhatsApp" with={60} height={60} />
    </div>
  );
};

export default WhatsAppButton;

