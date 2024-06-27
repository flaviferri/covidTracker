import React from 'react';
import { Outlet} from "react-router-dom"
import Navbar from '../components/Seccions/Header/navbar/Navbar';
import TextPart from '../components/Seccions/FirstSection/textPart/TextPart';
import ImagePart from '../components/Seccions/FirstSection/imagePart/ImagePart';
import SymptomSection from '../components/Seccions/Symptom/symptomSection/SymptomSection';





const Homepage = () => {
  return (
    <><div className='background'>
          <Navbar />
          <div><Outlet/></div>
          <div className='content'>
              <TextPart />
              <ImagePart />
          </div>
          <div>
              <SymptomSection />
          </div>
        
      </div>
    </>
      
  );
};

export default Homepage;
