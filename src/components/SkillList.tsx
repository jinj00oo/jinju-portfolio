import { skills } from '../constants/skills';
import SkillItem from './SkillItem';

const SkillList = () => {
  return (
    <div className="flex flex-col w-full shadow-xl rounded-2xl bg-[#A6E3E9] items-center px-5 py-15 gap-5">
      <div className="text-4xl font-semibold">My Skills 📚</div>
      <div className="text-sm text-gray-500">My skills are listed below.</div>
      <div className="flex flex-wrap w-full py-10 gap-x-10 gap-y-5 justify-center">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
