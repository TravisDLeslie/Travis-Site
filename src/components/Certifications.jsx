// src/components/Certifications.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import closeIcon from '../assets/icons/close.svg';
import logo from '../assets/icons/logo.svg';
import googleIcon from '../assets/icons/google.svg';
import metaIcon from '../assets/icons/meta.svg';
import figmaIcon from '../assets/icons/Figma.svg';
import tailwindIcon from '../assets/icons/tailwinds.svg';
import reactIcon from '../assets/icons/react.svg';
import Footer from './Footer';

const Certifications = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-white p-4 md:p-8 mt-4 z-40 flex flex-col">
      <div className="flex justify-between items-center p-4 w-full">
        <img src={logo} alt="Logo" className="h-6 w-auto" />
        <button onClick={handleClose} className="focus:outline-none">
          <img src={closeIcon} alt="Close" className="h-6 w-auto" />
        </button>
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto mt-8 md:mt-24">
        <div className="flex justify-center w-full">
          <div className="max-w-[700px] w-full">
            <h1 className="text-custom-gray font-bold text-3xl md:text-7xl">
              CERTIFICATIONS
            </h1>
            <h2 className="text-custom-gray font-medium mt-4 md:mt-8 text-xl md:text-4xl">
              CONTINUED LEARNING
            </h2>
            <p className="text-custom-gray font-light leading-6 mt-8 text-sm md:text-base md:leading-9">
              I’m a huge advocate for continuous learning and enhancing my knowledge
              in design, user interface, user research, and development. I believe they all
              play a crucial role in gaining a better understanding of how design and
              technology come together.
            </p>
            <div className="mt-8 md:mt-16">
              <h3 className="text-custom-gray font-semibold text-lg md:text-xl">
                CERTIFICATIONS:
              </h3>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4">
                <div className="flex items-center space-x-2">
                  <img src={googleIcon} alt="Google UX Design" className="h-6 md:h-8 w-auto" />
                  <a
                    href="https://www.coursera.org/professional-certificates/google-ux-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-custom-gray font-regular text-sm md:text-base"
                  >
                    Google UX Design Specialization
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={metaIcon} alt="Meta React Basics" className="h-6 md:h-8 w-auto" />
                  <a
                    href="https://www.coursera.org/learn/react-basics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-custom-gray font-regular text-sm md:text-base"
                  >
                    Meta React Basics
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-8 md:space-x-16 mt-8 md:mt-20">
          <img src={figmaIcon} alt="Figma" className="w-16 h-16 md:w-20 md:h-20" />
          <img src={tailwindIcon} alt="TailwindCSS" className="w-24 h-20 md:w-28 md:h-24" />
          <img src={reactIcon} alt="React" className="w-16 h-16 md:w-20 md:h-20" />
        </div>
      </div>
      <div className="mt-8 md:mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Certifications;
