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
import topo from '../assets/icons/topo.svg'; // Adjust the path if necessary

const projects = [
  {
    title: 'Web App',
    description: 'Sunrise Thoughts • Inspiration',
    image: port1,
    imageBgColor: 'bg-custom-purple',
    imagePosition: 'center top', // Move image to the top
  },
  {
    title: 'Web App',
    description: 'Scout & Sip • SAAS',
    image: port2,
    imageBgColor: 'bg-teal-500', // Example background color for another project
    imagePosition: 'center top', // Move image to the top
  },
  {
    title: 'Dashboard',
    description: 'Funky Scribbles • SAAS',
    image: port3,
    imageBgColor: 'bg-[#FF7135]', // Example background color for another project
    imagePosition: 'center top', // Move image to the top
    link: '/project/funky',
  },
  {
    title: 'Tesla IVI',
    description: 'Tesla • concept',
    image: port4,
    imageBgColor: 'bg-teal-500', // Example background color for another project
    link: '/project/tesla',
  },
  {
    title: 'E-Commerce',
    description: '43Made • Shopify',
    image: port5,
    imageBgColor: 'bg-red-500',
    imagePosition: 'center top', // Example background color for another project
  },
  {
    title: 'Marketplace',
    description: 'Veggin Out • saas',
    image: port6,
    imageBgColor: 'bg-green-700',
    imagePosition: 'center top', // Example background color for another project
  },
  {
    title: 'Realestate App',
    description: 'Real Estate App • SAAS',
    image: port7,
    imageBgColor: 'bg-purple-400',
    magePosition: 'center top', // Example background color for another project
  },
  // Add more projects here
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
      className="w-1/2 h-full relative overflow-y-scroll snap-y snap-mandatory"
      onScroll={handleScroll}
    >
      <div className="fixed inset-0 bg-custom-gray z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${topo})` }}
        ></div>
      </div>
      <div className="relative z-10">
        {projects.map((project, index) => (
          <div key={index} className="snap-start h-screen flex items-center justify-center">
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