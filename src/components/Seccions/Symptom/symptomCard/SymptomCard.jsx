
import React from 'react';
import './SymptomCard.scss';

const SymptomCard = ({ icon, title, description }) => {
  return (
    <div className="symptom-card">
      <img src={icon} alt={`${title} icon`} className="icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SymptomCard;
