import React from 'react';
import FixedRightSide from './FixedRightSide';
import ProjectsList from './ProjectsList';

const Home = ({ toggleCertifications }) => {
  return (
    <div className="flex h-screen">
      <ProjectsList />
      <FixedRightSide toggleCertifications={toggleCertifications} />
    </div>
  );
};

export default Home;
