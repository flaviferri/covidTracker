import React from 'react';
import { Link } from 'react-router-dom';
import './TrackerButton.scss'; 
const TrackerButton = () => {
  return (
    <div className="tracker-button">
      <Link to="/ruta-de-la-nueva-pagina"> 
        Tracker
      </Link>
    </div>
  );
};

export default TrackerButton;
