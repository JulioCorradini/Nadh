// SubjectIcons.js

import React, { useState } from 'react';
import mathIcon from '../icons/MathIcon.png';
import biologyIcon from '../icons/BiologyIcon.png';
import chemistryIcon from '../icons/ChemistryIcon.png';
import './Subjecticons.css';

const SubjectIcons = () => {

  const subjects = [
    { name: 'Matemáticas', icon: mathIcon, description: 'Descripción de Matemáticas...' },
    { name: 'Biología', icon: biologyIcon, description: 'Descripción de Biología...' },
    { name: 'Química', icon: chemistryIcon, description: 'Descripción de Química...' },
  ];

  const [activeDescription, setActiveDescription] = useState(null);

  const showDescription = (index) => {
    setActiveDescription(index);
  }

  return (
    <div className='array-subjects-container'>
      {subjects.map((item, index)=>(
        <div key={index} className={`subject-container-${index}`}>
          <img className={`icon-${item.name}`} src={item.icon} alt={`icon-${item.name}`} width={60} height={60} onClick={() => showDescription(index)} />
          <p className={`name-${item.name}`}> {item.name} </p>
          <p className={`description-${item.name} ${activeDescription === index ? 'description-show' : ''}`}> {item.description} </p>
        </div>
      ))}
    </div>
  );

};

export default SubjectIcons;
