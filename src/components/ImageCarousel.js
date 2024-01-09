// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import image_1 from "../image-1.jpg";
import image_2 from "../image-2.jpg";
import image_3 from "../image-3.jpg";

const ImageCarousel = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    image_1,
    image_2,
    image_3
  ];

  return (
    <div className='image-corousel-container'>
      <Slider {...settings} className='slider'>
        {images.map((image, index) => (
          <div key={index}>
            <img className= "image" src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        </Slider>
    </div>
  );
};

export default ImageCarousel;
