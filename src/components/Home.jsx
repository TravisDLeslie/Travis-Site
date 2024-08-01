// src/components/Home.jsx
import React, { useRef, useState } from 'react';
import FixedRightSide from './FixedRightSide';
import ProjectsList from './ProjectsList';
import Header from './Header';
import Footer from './Footer';

const Home = ({ toggleCertifications }) => {
  const projectListRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col w-full h-full md:h-screen md:flex-row">
      <div className="w-full p-6 md:hidden">
        <Header toggleMenu={toggleMenu} />
      </div>
      <div className="w-full md:hidden">
        <FixedRightSide
          toggleCertifications={toggleCertifications}
          projectListRef={projectListRef}
          scrollDirection={scrollDirection}
          toggleMenu={toggleMenu}
          isOpen={isMenuOpen}
        />
      </div>
      <div className="flex flex-col w-full h-full md:flex-row">
        <div className="w-full h-auto md:w-1/2 md:h-full">
          <ProjectsList scrollRef={projectListRef} setScrollDirection={setScrollDirection} />
        </div>
        <div className="w-full h-auto hidden md:block md:w-1/2 md:h-full">
          <FixedRightSide
            toggleCertifications={toggleCertifications}
            projectListRef={projectListRef}
            scrollDirection={scrollDirection}
            toggleMenu={toggleMenu}
            isOpen={isMenuOpen}
          />
        </div>
      </div>
      <div className="w-full md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
