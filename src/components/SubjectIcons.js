// SubjectIcons.js

import React from 'react';
import mathIcon from '../icons/MathIcon.png';
import biologyIcon from '../icons/BiologyIcon.png';
import chemistryIcon from '../icons/ChemistryIcon.png';
import './Subjecticons.css';

const SubjectIcons = () => {

  const subjects = [
    { name: 'Matemáticas', icon: mathIcon, description: 'Descripción de Matemáticas...' },
    { name: 'Biología', icon: biologyIcon, description: 'Descripción de Biología...' },
    { name: 'Química', icon: chemistryIcon, description: 'Descripción de Química...' },
    { name: 'Física' },
    { name: 'Historia' }
  ];

  return (
    <div className='array-subjects-container'>
      {subjects.map((item, index)=>(
        <div key={index} className={`subject-container-${index}`}>
          {item.name}
        </div>
      ))}
    </div>
  );

};

export default SubjectIcons;
