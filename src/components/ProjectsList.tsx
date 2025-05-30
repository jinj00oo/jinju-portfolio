import { projects } from '../constants/projects';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  return (
    <div className="flex flex-col mt-15 md:mt-10 gap-6 shadow-xl justify-center px-5 py-5 md:px-20 md:py-15 text-gray-500 rounded-2xl bg-[#A6E3E9] w-full">
      <div className="text-4xl font-semibold">My Projects 💻</div>
      <div className="text-sm text-gray-500">Click the url to go to the GitHub repository.</div>
      <div className="flex flex-col gap-6 px-2 md:px-5 py-5">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
