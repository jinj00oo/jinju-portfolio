import { skills } from '../constants/skills';
import SkillItem from './SkillItem';

const SkillList = () => {
  return (
    <div className="flex flex-col mt-15 md:mt-10 gap-6 shadow-xl justify-center px-5 py-5 md:px-20 md:py-15 text-gray-500 rounded-2xl bg-[#A6E3E9] w-full">
      <div className="text-4xl font-semibold">My Skills 📚</div>
      <div className="text-sm text-gray-500">My skills are listed below.</div>
      <div className="flex flex-wrap w-full py-5 gap-x-10 gap-y-5 justify-center">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
