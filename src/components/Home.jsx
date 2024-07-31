import React, { useState, useRef } from 'react';
import FixedRightSide from './FixedRightSide';
import ProjectsList from './ProjectsList';

const Home = ({ toggleCertifications }) => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const scrollRef = useRef(null);

  return (
    <div className="flex h-screen">
      <ProjectsList scrollRef={scrollRef} setScrollDirection={setScrollDirection} />
      <FixedRightSide toggleCertifications={toggleCertifications} scrollDirection={scrollDirection} />
    </div>
  );
};

export default Home;
