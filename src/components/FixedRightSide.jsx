import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import menuIcon from '../assets/icons/Menu.svg';
import scrolldown from '../assets/icons/scrolldown.svg';
import Menu from './Menu';

const FixedRightSide = ({ toggleCertifications, projectListRef, scrollDirection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e) => {
    if (projectListRef.current) {
      projectListRef.current.scrollTop += e.deltaY;
    }
  };

  useEffect(() => {
    const fixedRightSide = document.querySelector('.fixed-right-side');
    if (fixedRightSide) {
      fixedRightSide.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (fixedRightSide) {
        fixedRightSide.removeEventListener('wheel', handleScroll);
      }
    };
  }, [projectListRef]);

  return (
    <div className="fixed-right-side fixed right-0 top-0 h-full w-1/2 bg-white p-16 flex flex-col justify-between z-30">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-6 w-auto" />
        </Link>
        <button onClick={toggleMenu} className="focus:outline-none">
          <img src={menuIcon} alt="Menu" className="h-6 w-auto" />
        </button>
      </div>
      <div>
        <h1 className="text-custom-gray font-bold leading-none" style={{ fontSize: '100px' }}>
          TRAVIS<br />LESLIE
        </h1>
        <p className="text-custom-gray font-medium mt-4" style={{ fontSize: '48px' }}>UI/UX DESIGNER</p>
        <p className="text-custom-gray font-regular mt-8 w-[500px]" style={{ fontSize: '18px' }}>
          I’m a versatile UI/UX designer with a passion for designing beautiful, intuitive experiences with a positive impact on people and the business they represent. I have 5+ years of industry experience with user interactions & design.
        </p>
        <div className="mt-12">
          <a 
            href="/TravisLeslie_UIUX_Designer.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-custom-gray underline mx-2" 
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
          >
            Resume
          </a> / 
          <a 
            href="https://www.linkedin.com/in/travisdleslie" target="_blank"
            className="text-custom-gray underline mx-2" 
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
          >
            LinkedIn
          </a> / 
          <a 
            href="#" 
            className="text-custom-gray underline mx-2" 
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
          >
            Dribbble
          </a> / 
          <Link 
            to="/certifications"
            className="text-custom-gray underline mx-2" 
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }} 
            onClick={toggleCertifications}
          >
            Certifications
          </Link>
        </div>
      </div>
      <div className="flex items-start justify-start mt-8">
        <img
          src={scrolldown}
          alt="Scroll Arrow"
          className={`h-6 w-auto transition-transform duration-300 ${scrollDirection === 'up' ? 'rotate-180' : ''}`}
        />
        <span className="ml-2 text-gray-500 uppercase" style={{ fontSize: '16px', color: '#979797' }}>
          {scrollDirection === 'up' ? 'Scroll Up' : 'Scroll Down'}
        </span>
      </div>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} toggleCertifications={toggleCertifications} />
    </div>
  );
};

export default FixedRightSide;
