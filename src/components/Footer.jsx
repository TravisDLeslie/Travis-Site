// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/icons/footerlogo.svg';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 mt-8 p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
        <img src={footerLogo} alt="Footer Logo" className="h-12 w-auto" />
      </div>
      <div className="text-center md:text-right w-full md:w-auto">
        <a
          href="/TravisLeslie_UIUX_Designer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mx-2 hover:text-custom-gray hover:font-bold"
          style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
        >
          Resume
        </a> / 
        <a
          href="https://www.linkedin.com/in/travisdleslie"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mx-2 hover:text-custom-gray hover:font-bold"
          style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
        >
          LinkedIn
        </a> / 
        <a
          href="#"
          className="underline mx-2 hover:text-custom-gray hover:font-bold"
          style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
        >
          Dribbble
        </a> / 
        <Link
          to="/certifications"
          className="underline mx-2 hover:text-custom-gray hover:font-bold"
          style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
        >
          Certifications
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
