import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter as Router} from 'react-router-dom';
import Homepage from './components/Pages/HomePage/HomePage';

import './styles/main.scss'; 

const App = () => {
  return (
    <Router>       
          <Homepage />      
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));























/*import Navbar from './components/Seccions/Header/Navbar/Navbar';
import TextPart from './components/Seccions/FirstSection/TextPart/TextPart';
import ImagePart from './components/Seccions/FirstSection/ImagePart/ImagePart';
import SymptomSection from './components/Seccions/Symptom/SymptomSection/SymptomSection';





  )
};
      
    export default App;






/*const App = () => {
  return (
    <Router>
      <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}/>
      <Navbar/>
      <TextPart/>
    </Router>
  );
};

export default App;























/*import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Seccions/Header/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
      </div>
    </Router>
  );
};

export default App;*/
