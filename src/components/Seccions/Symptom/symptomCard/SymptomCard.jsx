import React from 'react';
import './SymptomCard.scss';

const SymptomCard = ({ icon, title, description, className }) => {
  return (
    <div className={`symptom-card ${className}`}>
      <img src={icon} alt={`${title} icon`} className="icon" />
      <div className="text-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SymptomCard;