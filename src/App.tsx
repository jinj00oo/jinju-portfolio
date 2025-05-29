import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectsList';
import SkillList from './components/SkillList';

function App() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <div className="flex flex-col gap-20 py-15">
        <div className="px-20 pt-10">
          <AboutMe />
        </div>
        <div className="flex flex-col gap-30 px-20 items-center">
          <ProjectList />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

export default App;
