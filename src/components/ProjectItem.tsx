import { useState } from 'react';
import type { Project } from '../constants/projects';
import { FaSearch } from 'react-icons/fa';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="text-lg font-semibold text-gray-800">{project.name}</div>
          <div className="text-sm text-gray-600">{project.description}</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="relative w-full aspect-[4/3]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain rounded-lg shadow-md"
          />
          <button
            className="absolute bottom-2 left-2 bg-white rounded-full p-1 shadow hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setZoomed(true)}
          >
            <FaSearch className="text-gray-600" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              GitHub로 이동 →
            </a>
            {project.backend && (
              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                백엔드 GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Live URL로 이동 →
              </a>
            )}
          </div>
        </div>
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setZoomed(false)}
        >
          <img
            src={project.image}
            alt={project.name}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
