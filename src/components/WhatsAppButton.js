// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Redirige al usuario a WhatsApp
  };

  return (
    <div className="whatsapp-container" onClick={handleWhatsAppClick}>
      <FaWhatsapp size={40} />
    </div>
  );
};

export default WhatsAppButton;
