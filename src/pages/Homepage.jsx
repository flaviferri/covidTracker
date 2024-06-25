import React from 'react';
import TextPart from '../../Seccions/FirstSection/textPart/TextPart';
import ImagePart from '../../Seccions/FirstSection/imagePart/ImagePart';
import Navbar from '../../Seccions/Header/navbar/Navbar';
import SymptomSection from '../../Seccions/Symptom/symptomSection/SymptomSection';





const Homepage = () => {
  return (
    <><div className='background'>
          <Navbar />
          <div className='content'>
              <TextPart />
              <ImagePart />
          </div>
      </div><div>
              <SymptomSection />
          </div></>
      
  );
};

export default Homepage;
