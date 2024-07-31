import React from 'react';
import { useNavigate } from 'react-router-dom';
import closeIcon from '../assets/icons/close.svg';
import logo from '../assets/icons/logo.svg';
import footerLogo from '../assets/icons/footerlogo.svg';
import googleIcon from '../assets/icons/google.svg';
import metaIcon from '../assets/icons/meta.svg';
import figmaIcon from '../assets/icons/Figma.svg';
import tailwindIcon from '../assets/icons/tailwinds.svg';
import reactIcon from '../assets/icons/react.svg';

const Certifications = () => {
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
            CERTIFICATIONS
          </h1>
          <h2 className="text-custom-gray font-medium mt-8" style={{ fontSize: '24px' }}>
            CONTINUED LEARNING
          </h2>
          <p className="text-custom-gray font-regular mt-8 w-full" style={{ fontSize: '18px' }}>
            I’m a huge advocate for continuous learning and enhancing my knowledge
            in design, user interface, user research, and development. I believe they all
            play a crucial role in gaining a better understanding of how design and
            technology come together.
          </p>
          <div className="mt-16">
            <h3 className="text-custom-gray font-semibold" style={{ fontSize: '20px' }}>
              CERTIFICATIONS:
            </h3>
            <div className="flex space-x-8 mt-4">
              <div className="flex items-center space-x-2">
                <img src={googleIcon} alt="Google UX Design" className="h-8 w-auto" />
                <a
                  href="https://www.coursera.org/professional-certificates/google-ux-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-gray font-regular"
                  style={{ fontSize: '18px' }}
                >
                  Google UX Design Specialization
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <img src={metaIcon} alt="Meta React Basics" className="h-8 w-auto" />
                <a
                  href="https://www.coursera.org/learn/react-basics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-gray font-regular"
                  style={{ fontSize: '18px' }}
                >
                  Meta React Basics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-16 mt-20">
        <img src={figmaIcon} alt="Figma" className="w-20 h-20" />
        <img src={tailwindIcon} alt="TailwindCSS" className="w-28 h-24" />
        <img src={reactIcon} alt="React" className="w-20 h-20" />
      </div>
      <div className="w-full border-t border-gray-300 mt-2">
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

export default Certifications;
