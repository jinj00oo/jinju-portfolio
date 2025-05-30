import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectsList';
import SkillList from './components/SkillList';
import Links from './components/Links';

function App() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <div className="flex flex-col gap-15 md:gap-20 md:px-20 md:py-15">
        <div className="max-w-4xl w-full mx-auto">
          <AboutMe />
        </div>
        <div className="flex flex-col gap-15 md:gap-30 items-center">
          <div className="max-w-4xl w-full">
            <ProjectList />
          </div>
          <div className="max-w-4xl w-full">
            <SkillList />
          </div>
          <div className="max-w-4xl w-full">
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
