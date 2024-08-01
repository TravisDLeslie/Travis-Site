import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/Menu.svg";
import hero from "../assets/images/AovHero.png";
import port2 from "../assets/images/FS1.png";
import port3 from "../assets/images/FS2.png";
import port4 from "../assets/images/FS3.png";
import port5 from "../assets/images/FS4.png";
import port6 from "../assets/images/FS5.png";
import port7 from "../assets/images/FS6.png";
import port8 from "../assets/images/FS7.png";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const AovProject = () => {
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
              FUNKY • UX/UI DESIGN • DASHBOARD
            </h2>
            <h1 className="mt-2 text-2xl md:text-4xl font-medium text-custom-gray text-left">
              Creative Community Dashboard
            </h1>
          </div>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
              Overview
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 leading-7 md:leading-10 font-light text-left">
              Funky Scribbles is a web application designed for a vibrant and
              creative community, providing a platform where users can select
              creative packs of their choice, engage in voting for the next
              pack, handle subscriptions, and enjoy different views based on
              their subscription status. This project aims to foster creativity
              and engagement while offering a seamless and enjoyable user
              experience.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
              Purpose
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 leading-7 md:leading-10 font-light text-left">
              Funky Scribbles was created to empower artists and creative
              individuals by giving them access to a variety of creative packs,
              a say in the future offerings, and a structured way to manage
              their subscriptions. Unlike other platforms, Funky Scribbles
              focuses on community-driven content and interaction, ensuring that
              every user feels valued and heard.
            </p>
            <div className="mt-12 flex flex-col items-center">
              <img
                src={port8}
                alt="Wireframe 2"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-center text-custom-gray text-xs">
                designed in figma
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left mb-4">
              Key Features
            </h2>
            <ol className="mt-2 text-sm md:text-base text-custom-gray leading-7 md:leading-10 text-left list-decimal pl-5">
              <li className="mb-4 font-medium">
                Creative Pack Selection:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Users can browse and select from a wide range of creative
                    packs tailored to various artistic needs and interests.
                  </li>
                  <li>
                    Each pack includes a detailed description, preview images,
                    and user ratings to help users make informed decisions.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Voting System:
                <ul className="list-disc font-light pl-5">
                  <li>
                    The community can vote on which creative packs should be
                    added next, ensuring that the offerings align with the
                    users' preferences.
                  </li>
                  <li>
                    Regular voting events keep the community engaged and excited
                    about new content.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Subscription Management:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Users can easily manage their subscriptions, with options to
                    subscribe to different tiers that offer various benefits and
                    access levels.
                  </li>
                  <li>
                    The subscription system includes automated reminders for
                    renewals and special offers for long-term subscribers.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                User Views:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Subscribed users enjoy an enhanced experience with exclusive
                    content, early access to new packs, and additional
                    customization options.
                  </li>
                  <li>
                    Non-subscribed users have access to basic features and a
                    limited selection of packs, encouraging them to upgrade for
                    a fuller experience.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Community Interaction:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Funky Scribbles fosters a sense of community by allowing
                    users to create profiles, follow their favorite artists, and
                    participate in discussions.
                  </li>
                  <li>
                    Interest groups and messaging features enable users to
                    connect, collaborate, and share their work.
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
                Artists and Creatives:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Gain access to a diverse range of high-quality creative
                    packs.
                  </li>
                  <li>Influence future content through voting.</li>
                  <li>
                    Enjoy a tailored experience based on their subscription
                    level.
                  </li>
                </ul>
              </li>
              <li className="mb-4 font-medium">
                Content Creators:
                <ul className="list-disc font-light pl-5">
                  <li>
                    Increase visibility and engagement by showcasing their packs
                    to an active community.
                  </li>
                  <li>
                    Receive feedback and insights from users to improve their
                    offerings.
                  </li>
                </ul>
              </li>
            </ol>
            <div className="mt-12 flex flex-col items-center">
              <img
                src={port6}
                alt="Wireframe 2"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-center text-custom-gray text-xs">
                designed in figma
              </p>
            </div>
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
                Project Scope and Timeline
              </h2>
              <p className="mt-2 text-sm md:text-base text-custom-gray leading-7 md:leading-10 font-light text-left">
                The development of Funky Scribbles spanned 6-8 weeks and
                involved extensive research, user testing, and iterative design
                to ensure the platform meets the needs of the creative
                community. Final files were delivered in collaboration via
                Figma, featuring a clean file structure ready for development
                handoff.
              </p>
              <div className="mt-12 flex flex-col items-center">
                <img
                  src={port7}
                  alt="Wireframe 2"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-center text-custom-gray text-xs">
                  designed in figma
                </p>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl text-custom-gray font-medium text-left">
                Conclusion
              </h2>
              <p className="mt-2 text-sm md:text-base text-custom-gray leading-7 md:leading-10 font-light text-left">
                Funky Scribbles is more than just a web application; it's a
                creative hub that brings artists and creatives together,
                offering them the tools and community they need to thrive. By
                focusing on user engagement, subscription management, and
                community interaction, Funky Scribbles stands out as an
                inclusive and fun platform for creative expression.
              </p>
              <div className="mt-12 flex flex-col items-center">
                <img
                  src={port5}
                  alt="Wireframe 2"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <p className="text-center text-custom-gray text-xs">
                  designed in figma
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

export default AovProject;
