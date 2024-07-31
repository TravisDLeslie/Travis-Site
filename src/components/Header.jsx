// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import menuIcon from '../assets/icons/Menu.svg';

const Header = ({ toggleMenu }) => {
  return (
    <div className="flex justify-between items-center p-8 bg-white">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-6 w-auto" />
      </Link>
      <button onClick={toggleMenu} className="focus:outline-none">
        <img src={menuIcon} alt="Menu" className="h-6 w-auto" />
      </button>
    </div>
  );
};

export default Header;
