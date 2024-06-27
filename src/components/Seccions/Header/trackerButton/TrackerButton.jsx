import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './TrackerButton.scss';

const TrackerButton = ({ className, text }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div className={`tracker-button ${className ? className : ''} ${isHighlighted ? 'highlighted' : ''}`}>
      <NavLink to="/trackers/tracker1"
            onMouseEnter={() => setIsHighlighted(true)} 
            onMouseLeave={() => setIsHighlighted(false)}
            className={className} 
>
        {isHighlighted ? <span className="highlighted">{text}</span> : text}
      </NavLink>
    </div>
  );
};

export default TrackerButton;