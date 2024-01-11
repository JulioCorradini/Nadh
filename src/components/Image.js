// ImageCarousel.js
import React from 'react';
import './Image.css';
import image from "../image.jpg";

const Image = () => {
  return (
    <div className='principal-container'>
      <div className='image-container-blue'>
        
      </div>
      <div className='image-container-red'>
        
        </div>
      <img className={'image-content'} src={ image } alt={`Image`} />
    </div>
  );
};

export default Image;
