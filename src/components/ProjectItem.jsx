import React from 'react';

const ProjectItem = ({ project }) => {
  const descriptionParts = project.description.split(' • ');

  return (
    <div className="project-item flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-95 hover:-rotate-3" style={{ height: '950px', width: '685px' }}>
      <div className="w-full flex justify-center relative" style={{ borderRadius: '0 0 20px 20px' }}>
        <div className={`w-full flex justify-center ${project.imageBgColor}`} style={{ height: '750px', width: '685px', borderRadius: '20px 20px 0 0', position: 'relative', zIndex: 1 }}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-xl" 
            style={{ objectPosition: project.imagePosition || 'center', zIndex: 2 }} 
          />
        </div>
      </div>
      <div className="bg-white p-8 w-full" style={{ width: '685px', borderRadius: '0 0 20px 20px' }}>
        <p className="mt-2 uppercase font-regular text-custom-gray" style={{ fontSize: '14px' }}>
          {descriptionParts[0]} 
          <span className="text-[#B6B6B6]"> • {descriptionParts[1]}</span>
        </p>
        <h2 className="text-custom-gray font-medium" style={{ fontSize: '40px' }}>{project.title}</h2>
      </div>
    </div>
  );
};

export default ProjectItem;
