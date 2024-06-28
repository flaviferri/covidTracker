import React from 'react';
import SymptomHeader from '../symptomHeader/SymptomHeader';
import SymptomCard from '../symptomCard/SymptomCard';
import './SymptomSection.scss';

const SymptomSection = () => {
  return (
    <div className="symptom-section">
      <SymptomHeader smallTitle="small-title" largeTitle="large-title" />
      <div className="symptom-cards">
        <SymptomCard
          className="card card-1"
          icon="/images/banner-right-removebg-preview.png"
          title="Aches and pains "
          description="Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100"
        />
        <SymptomCard
          className="card card-2"
          icon="/images/cough-removebg-preview.png"
          title="Runny nose"
          description="People of all ages who experience fever and/or cough associated with difficulty breathing/shortness of breath."
        />
        <SymptomCard
          className="card card-3"
          icon="/images/breathing-removebg-preview.png"
          title="Sore throat"
          description="Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer"
        />
      </div>
    </div>
  );
};

export default SymptomSection;