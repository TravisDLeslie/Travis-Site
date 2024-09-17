import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/Menu.svg";
import hero from "../assets/images/ScoutHero.png";
import port2 from "../assets/images/SS-1.png";
import port3 from "../assets/images/SS-2.png";
import port4 from "../assets/images/SS-2.png";
import port5 from "../assets/images/SS-4.png";
import port6 from "../assets/images/SS-3.png";
import port7 from "../assets/images/SS-2.png";
import port8 from "../assets/images/SS-1.png";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const ScoutSipProject = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <header className="flex justify-between items-center p-4 md:px-24 md:py-12 bg-white">
        <Link to="/">
          <img src={logo} alt="Scout & Sip Logo" className="h-6 w-auto" />
        </Link>
        <button onClick={toggleMenu} className="focus:outline-none">
          <img src={menuIcon} alt="Menu" className="h-6 w-auto" />
        </button>
      </header>
      <div className="mb-8 mx-auto w-full md:w-[calc(100%-200px)]">
        <img
          src={hero}
          alt="Scout & Sip Hero"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <main className="p-4 md:p-8 flex justify-center">
        <section className="w-full max-w-[900px]">
          <div className="mb-8">
            <h2 className="text-xs md:text-sm font-medium text-custom-gray text-left">
              SCOUT & SIP • UX/UI DESIGN • PLATFORM
            </h2>
            <h1 className="mt-2 text-2xl md:text-4xl font-medium text-custom-gray text-left">
              Scout & Sip: Your Ultimate Happy Hour Finder
            </h1>
          </div>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
              Overview
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 leading-7 md:leading-10 font-light text-left">
              Scout & Sip is a modern web application designed to help users find local happy hours with their favorite amenities, such as live music, outdoor seating, yard games, and more. The platform allows users to explore live and upcoming happy hours, select venues by street location, and find the perfect spot for any social gathering or business meeting.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
              Purpose
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 leading-7 md:leading-10 font-light text-left">
              Scout & Sip was created to provide a seamless and enjoyable experience for users seeking the best happy hours in their area. By offering real-time updates and personalized options, Scout & Sip helps users discover the perfect vibe and amenities that match their preferences.
            </p>
            <div className="mt-12 flex flex-col items-center">
              <img
                src={port8}
                alt="Scout & Sip Wireframe"
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
                Live Happy Hour Updates:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Users can view live happy hours happening now, making it easy to find the right spot at the right time.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Personalized Search:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Filter by amenities such as live music, outdoor seating, and yard games to find the perfect venue.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Location-Based Discovery:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Find establishments by street, allowing for convenient and targeted happy hour searches.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Future Planning:
                <ul className="list-disc font-light pl-5">
                  <li>
                    View upcoming happy hours to plan ahead for meetings, dates, or casual outings with friends.
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
                Discover New Venues:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Explore a variety of happy hour options tailored to different preferences and needs.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Save Time and Money:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Quickly find the best deals and venues, saving time on decision-making and enjoying cost savings on drinks and food.
                  </li>
                </ul>
              </li>
            </ol>
            <div className="mt-12 flex flex-col items-center">
              <img
                src={port6}
                alt="Scout & Sip Wireframe"
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
                The development of Scout & Sip involved a comprehensive design and development process, including user research, prototyping, and iterative testing over a 12-16 week period. The final product was delivered via Figma with a clean file structure, ready for seamless integration into the platform.
              </p>
              <div className="mt-12 flex flex-col items-center">
                <img
                  src={port5}
                  alt="Scout & Sip Wireframe"
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
                Scout & Sip redefines how users discover happy hours by offering a personalized, user-friendly experience that highlights the best local deals and atmospheres. By prioritizing real-time updates, convenient searches, and personalized options, Scout & Sip stands out as the go-to app for happy hour enthusiasts.
              </p>
              <div className="mt-12 flex flex-col items-center">
                <img
                  src={port7}
                  alt="Scout & Sip Wireframe"
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

export default ScoutSipProject;
