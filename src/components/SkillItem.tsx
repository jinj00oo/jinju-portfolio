import type { Skill } from '../constants/skills';

interface SkillItemProps {
  skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div className="w-100 h-40 p-5 rounded-4xl bg-[#FFFDF6] shadow-md hover:shadow-lg">
      <div className="flex w-full h-full items-center justify-center gap-5">
        <div className="flex flex-col w-50 items-center justify-center border-r-2 border-gray-500 pr-4">
          <div className="rounded-full bg-[#FFFDF6] flex items-center justify-center">
            <img className="w-12 h-12" src={skill.image} alt={skill.name} />
          </div>
          <div className="text-xl font-semibold text-gray-800 text-center">{skill.name}</div>
          <div className="text-sm text-gray-500 text-center">{skill.level}</div>
        </div>
        <div className="text-gray-600 text-sm">{skill.description}</div>
      </div>
    </div>
  );
};

export default SkillItem;
