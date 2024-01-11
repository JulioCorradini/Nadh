// SubjectIcons.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faBook, faFlask } from '@fortawesome/free-solid-svg-icons';
import './Subjecticons.css';

const SubjectIcons = () => {
  const subjects = [
    { description: 'Matemáticas', icon: <FontAwesomeIcon icon={faCalculator} />  },
    { description: 'Lenguaje', icon: <FontAwesomeIcon icon={faBook} /> },
    { description: 'Ciencias', icon: <FontAwesomeIcon icon={faFlask} /> },
    // Add more subjects as needed
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (index) => {
    setSelectedSubject(index === selectedSubject ? null : index);
  };

  return (
    <div className="subject-icons-container">
      {subjects.map((subject, index) => (
        <div
          key={index}
          className={`subject-icon ${index === selectedSubject ? 'active' : ''}`}
          onClick={() => handleSubjectClick(index)}
        >
          {subject.icon}
          {index === selectedSubject && <p>{subject.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default SubjectIcons;