import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/icons/footerlogo.svg';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 mt-8 p-8 lg:px-32 flex justify-between items-center">
      <img src={footerLogo} alt="Footer Logo" className="h-12 w-auto" />
      <div className="text-custom-gray">
        <a
          href="/TravisLeslie_UIUX_Designer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mx-4 hover:text-custom-gray hover:font-bold"
          style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
        >
          Resume
        </a> / 
        <a
          href="https://www.linkedin.com/in/travisdleslie"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mx-4 hover:text-custom-gray hover:font-bold"
          style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
        >
          LinkedIn
        </a> / 
        <a
          href="#"
          className="underline mx-4 hover:text-custom-gray hover:font-bold"
          style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
        >
          Dribbble
        </a> / 
        <Link
          to="/certifications"
          className="underline mx-4 hover:text-custom-gray hover:font-bold"
          style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}
        >
          Certifications
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
