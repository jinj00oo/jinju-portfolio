import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectsList';
import SkillList from './components/SkillList';
import Links from './components/Links';
import RootLayout from './layout/RootLayout';

function App() {
  return (
    <RootLayout>
      <div className="flex flex-col gap-8 md:gap-10">
        <div id="about-me" className="max-w-4xl w-full mx-auto">
          <AboutMe />
        </div>
        <div id="projects" className="max-w-4xl w-full mx-auto">
          <ProjectList />
        </div>
        <div id="skills" className="max-w-4xl w-full mx-auto">
          <SkillList />
        </div>
        <div id="links" className="max-w-4xl w-full mx-auto">
          <Links />
        </div>
      </div>
    </RootLayout>
  );
}

export default App;
