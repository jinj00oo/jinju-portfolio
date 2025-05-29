import { useState } from 'react';
import type { Project } from '../constants/projects';
import { FaGithub, FaSearch } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex h-130 px-20 py-15 bg-[#FAF6E9] shadow-md hover:shadow-lg text-gray-700 rounded-xl gap-15 items-center">
        <div className="w-140 h-100 rounded-xl relative">
          <img
            className="rounded-xl border-2 border-gray-200 shadow-md w-full h-full object-cover"
            src={project.image}
            alt={project.name}
          />
          <div
            className="absolute bottom-3 left-3 bg-white rounded-full p-2 shadow cursor-pointer z-10"
            onClick={() => setZoomed(true)}
          >
            <FaSearch className="text-gray-700" />
          </div>
        </div>

        <div className="flex flex-col h-full justify-between border-l-2 border-gray-500 pl-10 gap-10">
          <div className="flex flex-col gap-5">
            <div className="w-80 text-3xl font-bold">{project.name}</div>
            <div className="w-80 text-gray-500">{project.description}</div>
          </div>
          <div className="flex flex-col w-80 text-sm text-gray-500 gap-2">
            {project.liveUrl && (
              <div className="flex items-center gap-2">
                <SiVercel className="text-xl text-gray-700" />
                <div>Live URL:</div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#71C9CE] underline hover:text-[#71C9CE]"
                >
                  {project.liveUrl}
                </a>
              </div>
            )}

            {project.github && (
              <div className="flex items-center gap-2">
                <FaGithub className="text-xl text-gray-700" />
                <div>GitHub:</div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#71C9CE] underline hover:text-[#71C9CE]"
                >
                  {project.github}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-gray-500" />
        ))}
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setZoomed(false)}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain rounded-xl shadow-lg duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
