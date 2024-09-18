import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/Menu.svg";
import hero from "../assets/images/RevznHero.png";
import port2 from "../assets/images/RV-1.png";
import port3 from "../assets/images/RV-2.png";
import port4 from "../assets/images/RV-3.png";
import port5 from "../assets/images/RV-1.png";
import port6 from "../assets/images/RV-2.png";
import port7 from "../assets/images/RV-3.png";
import port8 from "../assets/images/RV-4.png";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const RevznProject = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <header className="flex justify-between items-center p-4 md:px-24 md:py-12 bg-white">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-6 w-auto" />
        </Link>
        <button onClick={toggleMenu} className="focus:outline-none">
          <img src={menuIcon} alt="Menu" className="h-6 w-auto" />
        </button>
      </header>
      <div className="mb-8 mx-auto w-full md:w-[calc(100%-200px)]">
        <img
          src={hero}
          alt="Revzn Real Estate Web App"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <main className="p-4 md:p-8 flex justify-center">
        <section className="w-full max-w-[900px]">
          <div className="mb-8">
            <h2 className="text-xs md:text-sm font-medium text-custom-gray text-left">
              REVZN • UX/UI DESIGN • REAL ESTATE
            </h2>
            <h1 className="mt-2 text-2xl md:text-4xl font-medium text-custom-gray text-left">
              Revzn: Real Estate Offer Management
            </h1>
          </div>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
              Overview
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 leading-7 md:leading-10 font-light text-left">
              Revzn is a real estate SaaS platform designed to help agents manage and parse multiple offers on a given property. The app allows users to compare offers in real time, highlight critical details, and easily navigate through essential information, reducing the need to dig through lengthy documents. By providing a secure, centralized platform, Revzn streamlines the offer management process, enabling agents to focus on what matters most.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
              Purpose
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 leading-7 md:leading-10 font-light text-left">
              Revzn was built to solve the challenge of managing real estate offers, which often consist of up to 17 documents, each containing an overwhelming amount of data. Revzn allows agents to quickly view and compare the most critical pieces of information without combing through entire PDFs. This ensures that agents can make informed decisions faster and more efficiently while maintaining a secure and organized environment for all offer documents.
            </p>
            <div className="mt-12 flex flex-col items-center">
              <img
                src={port5}
                alt="Revzn Wireframe"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-center text-custom-gray text-xs">
                designed in Figma
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left mb-4">
              Key Features
            </h2>
            <ol className="mt-2 text-sm md:text-base text-custom-gray leading-7 md:leading-10 text-left list-decimal pl-5">
              <li className="mb-4 font-medium">
                Real-Time Offer Comparison:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Agents can compare multiple offers side by side in real time, highlighting key pieces of information such as price, contingencies, and timelines.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Document Parsing and Summarization:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Automatically parse data from up to 17 documents per offer, summarizing the most important details for quick review.
                  </li>
                  <li>
                    Offers a dropdown feature for deeper dives into the full PDFs when needed.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Secure Offer Management:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Safely store all offers in one centralized location, ensuring a secure and organized process for managing sensitive real estate data.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                User-Friendly Interface:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Simple, clean UI allowing agents to navigate through offers, compare data, and make informed decisions quickly.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="mt-6">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left mb-4">
              Benefits for Users
            </h2>
            <ol className="mt-2 text-sm md:text-base text-custom-gray leading-7 md:leading-10 text-left list-decimal pl-5">
              <li className="mb-4 font-medium">
                Real Estate Agents:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Save time by quickly comparing key offer details in one place.
                  </li>
                  <li>
                    Access important information at a glance without having to open and scroll through multiple PDFs.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Real Estate Teams:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Collaborate efficiently and securely across teams by centralizing all offer data in a single platform.
                  </li>
                </ul>
              </li>
            </ol>
            <div className="mt-12 flex flex-col items-center">
              <img
                src={port8}
                alt="Revzn Wireframe"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-center text-custom-gray text-xs">
                designed in Figma
              </p>
            </div>
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
                Project Scope and Timeline
              </h2>
              <p className="mt-2 text-sm md:text-base text-custom-gray leading-7 md:leading-10 font-light text-left">
                The development of Revzn involved extensive user research, design prototyping, and iterative development over 12-16 weeks. The final design files were delivered through Figma, with a well-structured handoff for development.
              </p>
              <div className="mt-12 flex flex-col items-center">
                <img
                  src={port7}
                  alt="Revzn Wireframe"
                  className="w-full h-auto rounded-lg mb-4"
                />
              <p className="text-center text-custom-gray text-xs">
                designed in Figma
              </p>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
                Conclusion
              </h2>
              <p className="mt-2 text-sm md:text-base text-custom-gray leading-7 md:leading-10 font-light text-left">
                Revzn revolutionizes the way real estate agents manage offers by providing a secure, centralized platform for comparing, analyzing, and storing critical data. With its clean interface and real-time comparison features, Revzn significantly improves the efficiency of offer management, giving agents more time to focus on closing deals and serving clients.
              </p>
              <div className="mt-12 flex flex-col items-center">
                <img
                  src={port6}
                  alt="Revzn Wireframe"
                  className="w-full h-auto rounded-lg mb-4"
                />
              <p className="text-center text-custom-gray text-xs">
                designed in Figma
              </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer /> {/* Use the Footer component */}
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default RevznProject;
