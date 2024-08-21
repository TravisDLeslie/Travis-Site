import React from 'react';
import { useNavigate } from 'react-router-dom';
import closeIcon from '../assets/icons/close.svg';
import logo from '../assets/icons/logo.svg';
import footerLogo from '../assets/icons/footerlogo.svg';
import Footer from './Footer';

const Contact = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-white z-40 flex flex-col justify-between overflow-auto">
      <div className="p-4 md:p-16 flex justify-between items-center w-full">
        <img src={logo} alt="Logo" className="h-6 w-auto" />
        <button onClick={handleClose} className="focus:outline-none">
          <img src={closeIcon} alt="Close" className="h-6 w-auto" />
        </button>
      </div>
      <div className="flex justify-center w-full mt-8 px-4 md:px-0">
        <div className="max-w-[700px] w-full">
          <h1 className="text-custom-gray font-bold leading-none text-3xl md:text-5xl mb-4">
            LET'S CONNECT <span role="img" aria-label="sparkles">✨</span>
          </h1>
          <h1 className="text-gray-500 font-normal mb-2">Quick Contact</h1>
          <p className="text-custom-gray font-bold">hello@travisleslie.com</p>
          <p className="text-custom-gray font-bold">208.284.6163</p>
          <form className="mt-8 space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500" 
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500" 
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Phone number" 
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500" 
              />
            </div>
            <div>
              <textarea 
                placeholder="Message" 
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500" 
                rows="4"
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-black text-white p-4 rounded-md font-bold"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 md:mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
