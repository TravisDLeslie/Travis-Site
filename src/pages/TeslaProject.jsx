import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import menuIcon from '../assets/icons/Menu.svg';
import port1 from '../assets/images/imagetest.png';
import port2 from '../assets/images/imagetest.png';
import port3 from '../assets/images/imagetest.png';
import Menu from '../components/Menu';
import Footer from '../components/Footer'; // Import the Footer component

const TeslaProject = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <header className="flex justify-between items-center px-24 py-12 bg-white" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
      <Link to="/">
          <img src={logo} alt="Logo" className="h-6 w-auto" />
        </Link>        <button onClick={toggleMenu} className="focus:outline-none">
          <img src={menuIcon} alt="Menu" className="h-6 w-auto" />
        </button>
      </header>
      <div className="mb-8 mx-auto" style={{ width: 'calc(100% - 200px)' }}>
        <img src={port1} alt="Tesla In-Vehicle Infotainment" className="w-full h-auto rounded-lg" />
      </div>
      <main className="p-8 flex justify-center">
        <section className="w-full max-w-[1000px]">
          <div className="text-center mb-8">
            <h2 className="text-sm font-medium text-gray-600">TESLA • UX/UI DESIGN • CONCEPT</h2>
            <h1 className="mt-2 text-4xl font-bold text-gray-900">Tesla In-Vehicle Infotainment (IV)</h1>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="mt-2 text-gray-700">
              Tesla's in-vehicle infotainment system integrates seamlessly with the vehicle's hardware and software to provide a cohesive user experience.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Features</h2>
            <p className="mt-2 text-gray-700">
              - Real-time navigation<br/>
              - Streaming entertainment<br/>
              - Voice commands<br/>
              - Climate control
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Wireframes</h2>
            <p className="mt-2 text-gray-700">
              - Sketches<br/>
              - Lo-Fi wireframes<br/>
              - Hi-Fi mockup/prototype<br/>
              - Delivered in Figma
            </p>
            <div className="mt-4">
              <img src={port2} alt="Wireframe 1" className="w-full h-auto rounded-lg mb-4" />
              <img src={port3} alt="Wireframe 2" className="w-full h-auto rounded-lg mb-4" />
            </div>
          </div>
        </section>
      </main>
      <Footer /> {/* Use the Footer component */}
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default TeslaProject;
