import React from 'react';
import { useNavigate } from 'react-router-dom';
import closeIcon from '../assets/icons/close.svg';
import logo from '../assets/icons/logo.svg';
import footerLogo from '../assets/icons/footerlogo.svg';

const Contact = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-white p-16 z-40 flex flex-col justify-between">
      <div className="flex justify-between items-center w-full">
        <img src={logo} alt="Logo" className="h-6 w-auto" />
        <button onClick={handleClose} className="focus:outline-none">
          <img src={closeIcon} alt="Close" className="h-6 w-auto" />
        </button>
      </div>
      <div className="flex justify-center w-full mt-8">
        <div className="max-w-[700px] w-full">
          <h1 className="text-custom-gray font-bold leading-none" style={{ fontSize: '48px' }}>
            LET'S CONNECT <span role="img" aria-label="sparkles">✨</span>
          </h1>
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
      <div className="w-full border-t border-gray-300 mt-8">
        <div className="flex justify-between items-center pt-4 h-8">
          <img src={footerLogo} alt="Footer Logo" className="h-12 mt-12 w-auto" />
          <div className="text-custom-gray mt-12">
            <a href="/TravisLeslie_UIUX_Designer.pdf" target="_blank" rel="noopener noreferrer" className="underline mx-4" style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}>Resume</a> / 
            <a href="https://www.linkedin.com/in/travisdleslie" target="_blank" rel="noopener noreferrer" className="underline mx-4" style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}> LinkedIn</a> / 
            <a href="#" className="underline mx-4" style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}> Dribble</a> / 
            <a href="#" className="underline mx-4" style={{ textDecorationColor: '#FF7135', textUnderlineOffset: '8px' }}> Certifications</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
