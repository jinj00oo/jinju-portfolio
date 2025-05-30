import type { Skill } from '../constants/skills';

interface SkillItemProps {
  skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div className="w-80 h-[300px] bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full bg-gradient-to-r from-[#FFFDF6] to-white flex items-center justify-center w-16 h-16 border-2 border-gray-200">
            <img className="w-12 h-12" src={skill.image} alt={skill.name} />
          </div>
          <div className="text-base font-semibold text-gray-800">{skill.name}</div>
          <div className="text-xs text-gray-500">{skill.level}</div>
        </div>
        <div className="text-gray-600 text-sm flex-1">
          <div className="whitespace-pre-line">{skill.description}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
