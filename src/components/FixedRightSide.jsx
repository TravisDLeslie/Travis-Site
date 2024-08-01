import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import menuIcon from '../assets/icons/Menu.svg';
import scrolldown from '../assets/icons/scrolldown.svg';
import Menu from './Menu';

const FixedRightSide = ({ toggleCertifications, scrollDirection, toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    toggleMenu();
  };

  return (
    <div className="md:fixed md:bottom-0 md: right-0 w-full h-full bg-white p-4 flex flex-col md:justify-between z-30 md:relative md:h-full md:w-full md:p-16">
      <div className="hidden md:flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-6 w-auto" />
        </Link>
        <button onClick={handleToggleMenu} className="focus:outline-none">
          <img src={menuIcon} alt="Menu" className="h-6 w-auto" />
        </button>
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-custom-gray font-bold leading-none text-xl md:text-[100px]">
          <span className="md:inline">TRAVIS</span> <span className=" md:inline">LESLIE</span>
        </h1>
        <p className="text-custom-gray font-medium mt-2 text-lg md:mt-8 md:text-5xl">UI/UX DESIGNER</p>
        <p className="text-custom-gray font-regular mt-2 w-full text-base md:mt-8 md:w-[500px] md:text-lg">
          I’m a versatile UI/UX designer with a passion for designing beautiful, intuitive experiences with a positive impact on people and the business they represent. I have 5+ years of industry experience with user interactions & design.
        </p>
        <div className="mt-4 md:mt-12">
          <a 
            href="/TravisLeslie_UIUX_Designer.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-custom-gray underline mx-2 hover:font-medium" 
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
          >
            Resume
          </a> / 
          <a 
            href="https://www.linkedin.com/in/travisdleslie" target="_blank"
            className="text-custom-gray underline mx-2 hover:font-medium" 
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
          >
            LinkedIn
          </a> / 
          <a 
            href="#" 
            className="text-custom-gray underline mx-2 hover:font-medium" 
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
          >
            Dribbble
          </a> / 
          <Link 
            to="/certifications"
            className="text-custom-gray underline mx-2 hover:font-medium" 
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }} 
            onClick={toggleCertifications}
          >
            Certifications
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center md:items-start md:justify-start mt-4 md:mt-8">
        <img src={scrolldown} alt="Scroll Down" className={`h-6 w-auto transform transition-transform ${scrollDirection === 'up' ? 'rotate-180' : ''}`} />
        <span className="ml-2 text-gray-500 uppercase text-sm md:text-base" style={{ color: '#979797' }}>
          {scrollDirection === 'up' ? 'Scroll Up' : 'Scroll Down'}
        </span>
      </div>
      <Menu isOpen={isOpen} toggleMenu={handleToggleMenu} />
    </div>
  );
};

export default FixedRightSide;
