// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/icons/footerlogo.svg';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 mt-8 p-4 md:pt-8 md:px-4 md:mt-2 flex flex-col md:flex-row justify-between items-center">
      <div className="flex justify-between items-center w-full md:w-auto mb-4 md:mb-0">
        <img src={footerLogo} alt="Footer Logo" className="h-10 w-auto md:h-8" />
        <div className="hidden md:block md:flex-1"></div> {/* Spacer for larger screens */}
        <div className="md:hidden flex justify-end w-full md:w-auto text-xs">
          <a
            href="/TravisLeslie_UIUX_Designer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mx-2 hover:text-custom-gray hover:font-bold text-xs"
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '5px' }}
          >
            Resume
          </a> / 
          <a
            href="https://www.linkedin.com/in/travisdleslie"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mx-2 hover:text-custom-gray hover:font-bold text-xs"
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '5px' }}
          >
            LinkedIn
          </a> / 
          <a
            href="#"
            className="underline mx-2 hover:text-custom-gray hover:font-bold text-xs"
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '5px' }}
          >
            Dribbble
          </a> / 
          <Link
            to="/certifications"
            className="underline mx-2 hover:text-custom-gray hover:font-bold text-xs"
            style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '5px' }}
          >
            Certifications
          </Link>
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:justify-end w-full md:w-auto text-sm md:text-base">
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
