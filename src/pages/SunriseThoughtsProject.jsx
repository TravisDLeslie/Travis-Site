import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/Menu.svg";
import hero from "../assets/images/SunriseHero.png";
import stport1 from "../assets/images/stport1.png";
import stport2 from "../assets/images/stport2.png";
import figmaIcon from "../assets/icons/figmaicon.svg"; // Import Figma icon
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const SunriseThoughtsProject = () => {
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
          alt="Tesla In-Vehicle Infotainment"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <main className="p-4 md:p-8 flex justify-center">
        <section className="w-full max-w-[900px]">
          <div className="mb-8">
            <h2 className="text-xs md:text-sm font-medium text-custom-gray text-left">
              SUNRISE THOUGHTS • UX/UI DESIGN • SIMPLE APP
            </h2>
            <h1 className="mt-2 text-2xl md:text-4xl font-medium text-custom-gray text-left">
              Inspirational Web App
            </h1>
          </div>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
              Overview
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 leading-7 md:leading-10 font-light text-left">
            Sunrise Thoughts is a single-page web application designed to provide daily inspiration and motivation for individuals seeking to enhance their lives. The application is built to be a quick, engaging, and colorful experience, allowing users to absorb all content in just five minutes and encouraging them to return for fresh insights each day.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
              Purpose
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 leading-7 md:leading-10 font-light text-left">
            The primary aim of Sunrise Thoughts is to offer a daily dose of inspiration through a "daily thought," which is a short, simple read containing actionable insights. The platform also includes a newsletter signup feature, allowing users to receive inspiration and motivational content directly in their inbox.
            </p>
            <div className="mt-12 flex flex-col items-center">
              <img
                src={stport1}
                alt="Wireframe 2"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="flex items-center justify-center">
                <p className="text-center text-custom-gray text-xs mr-2">
                  designed in
                </p>
                <img src={figmaIcon} alt="Figma" className="h-4 w-4" />
                <p className="text-center text-custom-gray font-medium text-xs mr-2">
                  figma
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left mb-4">
              Key Features
            </h2>
            <ol className="mt-2 text-sm md:text-base text-custom-gray leading-7 md:leading-10 text-left list-decimal pl-5">
              <li className="mb-4 font-medium">
                Daily Thought:
                <ul className="list-disc font-light pl-5">
                  <li>
                  A concise and impactful message designed to inspire and motivate users.
                  </li>
                  <li>
                  Each daily thought includes actionable insights that users can implement in their daily lives.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
              Colorful and Engaging Design:
                <ul className="list-disc font-light pl-5">
                  <li>
                  The application features a vibrant and visually appealing design, making it a delightful experience for users.
                  </li>
                  <li>
                  The user interface is intuitive and easy to navigate, ensuring a seamless user experience.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
              Quick Content Consumption:
                <ul className="list-disc font-light pl-5">
                  <li>
                  Users can view all the content within five minutes, making it perfect for a quick motivational boost at the start of their day.
                  </li>
                  <li>
                  The application encourages users to check back daily for new and updated content.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
              Newsletter Signup:
                <ul className="list-disc font-light pl-5">
                  <li>
                  Users can subscribe to a newsletter to receive daily inspiration and motivation directly to their inbox.
                  </li>
                  <li>
                  The signup process is simple and user-friendly, encouraging more users to stay connected.
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
              Inspiration on the Go:
                <ul className="list-disc font-light pl-5">
                  <li>
                  Access quick and meaningful content that fits seamlessly into a busy lifestyle.
                  </li>
                  <li>Gain daily motivation and actionable insights to enhance personal growth and productivity.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
              Consistent Engagement:
                <ul className="list-disc font-light pl-5">
                  <li>
                  Daily updates keep users engaged and encourage regular visits to the platform.
                  </li>
                  <li>
                  The newsletter ensures users receive inspiration even when they're not actively browsing the web app.
                  </li>
                </ul>
              </li>
            </ol>
            <div className="mt-12 flex flex-col items-center">
              <img
                src={stport2}
                alt="Wireframe 2"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="flex items-center justify-center">
                <p className="text-center text-custom-gray text-xs mr-2">
                  designed in
                </p>
                <img src={figmaIcon} alt="Figma" className="h-4 w-4" />
                <p className="text-center text-custom-gray font-medium text-xs mr-2">
                  figma
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
                Project Scope and Timeline
              </h2>
              <p className="mt-2 text-sm md:text-base text-custom-gray leading-7 md:leading-10 font-light text-left">
                The design process of Sunrise thoughts spanned 6-8 weeks and
                involved extensive research, user testing, and iterative design
                to ensure the platform meets the needs of the creative
                community. Final files were delivered in collaboration via
                Figma, featuring a clean file structure ready for development
                handoff.
              </p>
              <div className="mt-12 flex flex-col items-center">
                <img
                  src={stport1}
                  alt="Wireframe 2"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <div className="flex items-center justify-center">
                <p className="text-center text-custom-gray text-xs mr-2">
                  designed in
                </p>
                <img src={figmaIcon} alt="Figma" className="h-4 w-4" />
                <p className="text-center text-custom-gray font-medium text-xs mr-2">
                  figma
                </p>
              </div>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
                Conclusion
              </h2>
              <p className="mt-2 text-sm md:text-base text-custom-gray leading-7 md:leading-10 font-light text-left">
              Sunrise Thoughts is more than just an application; it's a daily companion that offers users a moment of reflection and motivation. By focusing on quick, impactful content and a vibrant design, Sunrise Thoughts provides an enjoyable and meaningful experience that users can look forward to each day.
              </p>
              <div className="mt-12 flex flex-col items-center">
                <img
                  src={stport2}
                  alt="Wireframe 2"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <div className="flex items-center justify-center">
                <p className="text-center text-custom-gray text-xs mr-2">
                  designed in
                </p>
                <img src={figmaIcon} alt="Figma" className="h-4 w-4" />
                <p className="text-center text-custom-gray font-medium text-xs mr-2">
                  figma
                </p>
              </div>
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

export default SunriseThoughtsProject;
