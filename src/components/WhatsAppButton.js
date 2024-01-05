// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleWhatsAppClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
    window.location.href = "...";
  };

  return (
    <div className={`whatsapp-container${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`} 
    onClick={handleWhatsAppClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <img src="../src/WhatsApp.svg"  alt="WhatsApp" with={40} height={40} />
    </div>
  );
};

export default WhatsAppButton;
