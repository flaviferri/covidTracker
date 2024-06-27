import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/Homepage';

import './styles/main.scss'; 

const App = () => {
  return (
    <Router>       
      <Homepage />      
    </Router>
  );
};

// Crear una raíz
const root = createRoot(document.getElementById('root'));

// Renderizar la aplicación
root.render(<App />);
