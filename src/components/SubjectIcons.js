// SubjectIcons.js

import React, { useState } from 'react';
import mathIcon from '../icons/MathIcon.png';
import biologyIcon from '../icons/BiologyIcon.png';
import chemistryIcon from '../icons/ChemistryIcon.png';
import './Subjecticons.css';

const SubjectIcons = () => {

  const subjects = [
    { name: 'Matemáticas', icon: mathIcon, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
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
