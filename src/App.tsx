import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectsList';
import SkillList from './components/SkillList';

function App() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <div className="flex flex-col gap-15 md:gap-20 md:px-20 md:py-15">
        <div className="">
          <AboutMe />
        </div>
        <div className="flex flex-col gap-15 md:gap-30 items-center">
          <ProjectList />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

export default App;
