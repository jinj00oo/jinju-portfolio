import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  elementId: string;
}

const tabs: Tab[] = [
  { id: 'about', label: 'About Me', elementId: 'about-me' },
  { id: 'projects', label: 'Projects', elementId: 'projects' },
  { id: 'skills', label: 'Skills', elementId: 'skills' },
  { id: 'links', label: 'Links', elementId: 'links' },
];

const TabBar = () => {
  const [activeTab, setActiveTab] = useState<string>('about');

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabClick = (elementId: string, tabId: string) => {
    scrollToSection(elementId);
    setActiveTab(tabId);
  };

  return (
    <div className="fixed left-0 pt-20 top-1/2 -translate-y-1/2 h-full w-50 bg-[#A6E3E9] text-[#80CBC4] flex flex-col justify-start items-center gap-4 p-3 z-20 shadow-md">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.elementId, tab.id)}
          className={`
            w-30 h-12 rounded-lg flex items-center justify-center
            ${activeTab === tab.id ? 'bg-[#80CBC4] text-white' : 'text-gray-500 hover:bg-[#B4EBE6]'}
            transition-colors duration-200
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
