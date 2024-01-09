// ImageCarousel.js
import React from 'react';
import './Image.css';
import image from "../image.jpg";

const Image = () => {
  return (
    <div className='image-container'>
      <img className={'image-content'} src={ image } alt={`Image`} />
    </div>
  );
};

export default Image;
