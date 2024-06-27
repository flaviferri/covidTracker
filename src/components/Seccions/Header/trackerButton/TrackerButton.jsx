import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TrackerButton.scss';

const TrackerButton = ({ className, text }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div className={`tracker-button ${className ? className : ''} ${isHighlighted ? 'highlighted' : ''}`}>
      <Link to="/ruta-de-la-nueva-pagina"
            onMouseEnter={() => setIsHighlighted(true)} 
            onMouseLeave={() => setIsHighlighted(false)}
            className={className} 
>
        {isHighlighted ? <span className="highlighted">{text}</span> : text}
      </Link>
    </div>
  );
};

export default TrackerButton;