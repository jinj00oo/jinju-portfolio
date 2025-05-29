import { projects } from '../constants/projects';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  return (
    <div className="flex flex-col shadow-xl pt-15 gap-5 rounded-2xl items-center bg-[#B4EBE6] w-full text-gray-700">
      <div className="text-4xl font-semibold">My Projects 💻</div>
      <div className="text-sm text-gray-500">Click the url to go to the GitHub repository.</div>
      <div className="flex flex-col gap-30 md:gap-10 px-5 py-15">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
