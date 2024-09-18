// src/components/ProjectsList.jsx
import React from 'react';
import ProjectItem from './ProjectItem';
import { Link } from 'react-router-dom';
import port1 from '../assets/images/port1.png';
import port2 from '../assets/images/port2.png';
import port3 from '../assets/images/port3.png';
import port4 from '../assets/images/port4.png';
import port5 from '../assets/images/port5.png';
import port6 from '../assets/images/port6.png';
import port7 from '../assets/images/port7.png';
import port8 from '../assets/images/port8.png';
import port9 from '../assets/images/port9.png';
import topo from '../assets/icons/topo.svg'; // Adjust the path if necessary

const projects = [
  {
    title: 'Web App Design',
    description: 'Sunrise Thoughts • UX/UI Design • Daily Inspiration & Motivation',
    image: port1,
    imageBgColor: 'bg-custom-purple',
    imagePosition: 'center top',
    link: '/project/sunrise-thoughts-webapp-ui-ux',
  },
  {
    title: 'Happy Hour Finder App',
    description: 'Scout & Sip • UX/UI Design • SAAS for Real-Time Happy Hour Discovery',
    image: port2,
    imageBgColor: 'bg-teal-500',
    imagePosition: 'center top',
    link: '/project/scout-sip-application-ui-ux',
  },
  {
    title: 'Creative Community Dashboard',
    description: 'Funky Scribbles • UX/UI Design • SAAS for Artistic Collaboration',
    image: port3,
    imageBgColor: 'bg-[#FF7135]',
    imagePosition: 'center top',
    link: '/project/funky-scribbles-creative-community-ui-ux',
  },
  {
    title: 'In-Vehicle Interface Redesign',
    description: 'Tesla • UX/UI Concept Design • Innovative In-Vehicle Experience',
    image: port4,
    imageBgColor: 'bg-teal-500',
    link: '/#',
  },
  {
    title: 'E-Commerce Experience',
    description: '43Made • UX/UI Design • Shopify Store for Custom Products',
    image: port5,
    imageBgColor: 'bg-red-500',
    imagePosition: 'center top',
    link: '/#',
  },
  {
    title: 'Local Produce Marketplace',
    description: 'Veggin Out • UX/UI Design • SAAS Marketplace for Local Produce',
    image: port6,
    imageBgColor: 'bg-green-700',
    imagePosition: 'center top',
    link: '/#',
  },
  {
    title: 'Real Estate Offer Management Platform',
    description: 'Revzn • UX/UI Design • Streamlining Real Estate Offer Comparison',
    image: port7,
    imageBgColor: 'bg-purple-400',
    imagePosition: 'center top',
    link: '/project/revzn-realestate-saas-ui-ux',
  },
  {
    title: 'Landing Page Design',
    description: 'Art of Visuals • UX/UI Design • High-Impact Landing Page',
    image: port9,
    imageBgColor: 'bg-[#1e1e1e]',
    imagePosition: 'center top',
    link: '/#',
  },
  {
    title: 'Shopify E-Commerce Store',
    description: 'Tamarack Threads • UX/UI Design • Custom Shopify E-Commerce Experience',
    image: port8,
    imageBgColor: 'bg-[#1e1e1e]',
    imagePosition: 'center top',
    link: '/#',
  },
];


const ProjectsList = ({ scrollRef, setScrollDirection }) => {
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight) {
      setScrollDirection('up');
    } else {
      setScrollDirection('down');
    }
  };

  return (
    <div
      ref={scrollRef}
      className="w-full h-full md:w-full md:h-full overflow-y-scroll relative snap-y snap-mandatory scrollbar-hide"
      onScroll={handleScroll}
    >
      <div className="fixed inset-0 bg-custom-gray z-0 hidden md:block">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${topo})` }}
        ></div>
      </div>
      <div className="relative z-10 space-y-8 p-4 md:space-y-0 md:p-0">
        {projects.map((project, index) => (
          <div key={index} className="snap-start h-auto md:h-screen flex items-center justify-center mb-8 md:mb-0">
            <Link to={project.link}>
              <ProjectItem project={project} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
