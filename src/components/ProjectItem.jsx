// src/components/ProjectItem.jsx
import React from 'react';

const ProjectItem = ({ project }) => {
  const descriptionParts = project.description.split(' • ');

  return (
    <div className="project-item flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-95 hover:-rotate-3 w-full max-w-screen-sm md:w-full p-4 md:p-0">
      <div className="w-full flex justify-center relative rounded-b-lg flex-grow" style={{ height: 'auto', maxHeight: '700px' }}>
        <div className={`w-full flex justify-center ${project.imageBgColor} rounded-t-3xl`}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-t-xl md:rounded-xl" 
            style={{ objectPosition: project.imagePosition || 'center', zIndex: 2 }} 
          />
        </div>
      </div>
      <div className="bg-white w-full p-4 md:p-6 rounded-b-3xl flex-none" style={{ maxWidth: '685px' }}>
        <p className="mt-4 mb-2 uppercase font-regular text-custom-gray text-sm md:text-base">
          {descriptionParts[0]} 
          <span className="text-[#B6B6B6]"> • {descriptionParts[1]}</span>
        </p>
        <h2 className="text-custom-gray font-medium text-2xl md:text-3xl">{project.title}</h2>
      </div>
    </div>
  );
};

export default ProjectItem;
