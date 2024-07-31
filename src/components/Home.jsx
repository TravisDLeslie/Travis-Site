import React, { useRef, useState } from 'react';
import FixedRightSide from './FixedRightSide';
import ProjectsList from './ProjectsList';

const Home = ({ toggleCertifications }) => {
  const projectListRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');

  return (
    <div className="flex h-screen">
      <ProjectsList scrollRef={projectListRef} setScrollDirection={setScrollDirection} />
      <FixedRightSide
        toggleCertifications={toggleCertifications}
        projectListRef={projectListRef}
        scrollDirection={scrollDirection}
      />
    </div>
  );
};

export default Home;
