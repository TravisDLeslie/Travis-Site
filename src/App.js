import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import TeslaProject from './pages/TeslaProject';
import FunkyProject from './pages/FunkyProject';
import SunriseThoughtsProject from './pages/SunriseThoughtsProject';
import ScoutSipProject from './pages/ScoutSipProject';
import TamarackThreadsProject from './pages/TamarackThreadsProject';
import VegginOutProject from './pages/VegginOutProject';
import RevznProject from './pages/RevznProject';
import FourtyThreeProject from './pages/FourtyThreeProject';
import AovProject from './pages/AovProject';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/tesla-ivi-redesign-concept-ui-ux" element={<TeslaProject />} />
        <Route path="/project/funky-scribbles-creative-community-ui-ux" element={<FunkyProject />} />
        <Route path="/project/sunrise-thoughts-webapp-ui-ux" element={<SunriseThoughtsProject />} />
        <Route path="/project/scout-sip-application-ui-ux" element={<ScoutSipProject />} />
        <Route path="/project/tamarackthreads-shopify-ecommerce-ui-ux" element={<TamarackThreadsProject />} />
        <Route path="/project/vegginout-marketplace-saas-ui-ux" element={<VegginOutProject />} />
        <Route path="/project/revzn-realestate-saas-ui-ux" element={<RevznProject />} />
        <Route path="/project/43made-ecommerce-shopify-store-ui-ux" element={<FourtyThreeProject />} />
        <Route path="/project/artofvisuals-saas-landing-page-ui-ux" element={<AovProject />} />

        {/* Add routes for other projects */}
      </Routes>
    </div>
  );
};

export default App;
