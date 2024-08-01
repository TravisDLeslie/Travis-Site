import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import menuIcon from '../assets/icons/Menu.svg';
import Menu from './Menu';  // Import the Menu component

const Header = ({ toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    toggleMenu();
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 bg-white w-full md:hidden">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-6 w-auto" />
        </Link>
        <button onClick={handleToggleMenu} className="focus:outline-none">
          <img src={menuIcon} alt="Menu" className="h-6 w-auto" />
        </button>
      </div>
      <Menu isOpen={isOpen} toggleMenu={handleToggleMenu} />
    </div>
  );
};

export default Header;
