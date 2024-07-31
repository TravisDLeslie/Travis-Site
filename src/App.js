import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import TeslaProject from './pages/TeslaProject';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/tesla" element={<TeslaProject />} />
        {/* Add routes for other projects */}
      </Routes>
    </div>
  );
};

export default App;
