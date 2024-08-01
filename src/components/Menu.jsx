// src/components/Menu.jsx
import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import closeIcon from "../assets/icons/close.svg";
import figmaIcon from "../assets/icons/Figma.svg";
import tailwindIcon from "../assets/icons/tailwinds.svg";
import reactIcon from "../assets/icons/react.svg";

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="menu" unmountOnExit>
      <div className="fixed inset-y-0 right-0 w-full md:w-1/2 bg-white z-40 flex flex-col items-center justify-center">
        <button
          onClick={toggleMenu}
          className="absolute top-16 right-16 focus:outline-none"
        >
          <img src={closeIcon} alt="Close Menu" className="h-6 w-auto" />
        </button>
        <nav className="text-center space-y-10 mt-16">
          <Link
            to="/"
            className="text-gray-500 text-4xl block hover:text-custom-gray hover:font-bold"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-gray-500 text-4xl block hover:text-custom-gray hover:font-bold"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/certifications"
            className="text-gray-500 text-4xl block hover:text-custom-gray hover:font-bold"
            onClick={toggleMenu}
          >
            Certifications
          </Link>
          <a
            href="/TravisLeslie_UIUX_Designer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-4xl block hover:text-custom-gray hover:font-bold"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/travisdleslie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-4xl block hover:text-custom-gray hover:font-bold"
          >
            LinkedIn
          </a>
          <a
            href="#dribbble"
            className="text-gray-500 text-4xl block hover:text-custom-gray hover:font-bold"
          >
            Dribbble
          </a>
        </nav>
        <div className="absolute bottom-8 flex space-x-4">
          <img src={figmaIcon} alt="Figma" className="w-20 h-20" />
          <img src={tailwindIcon} alt="TailwindCSS" className="w-20 h-20" />
          <img src={reactIcon} alt="React" className="w-20 h-20" />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Menu;
