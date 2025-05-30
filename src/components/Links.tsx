interface UrlItem {
  title: string;
  url: string;
  description: string;
  icon: 'github' | 'envelope' | 'tstory';
}

const urlItems: UrlItem[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/jinj00oo',
    description: '프로젝트와 코드를 공유하는 공간',
    icon: 'github',
  },
  {
    title: 'TStory',
    url: 'https://icems0428.tistory.com/',
    description: '프로젝트와 코드를 공유하는 공간',
    icon: 'tstory',
  },
  {
    title: 'Email',
    url: 'mailto:icems0428@g.hongik.ac.kr',
    description: '직접 연락해보세요',
    icon: 'envelope',
  },
];

const Links = () => {
  return (
    <div className="flex flex-col mt-15 md:mt-10 gap-10 shadow-xl justify-center px-5 py-5 md:px-20 md:py-15 text-gray-500 rounded-2xl bg-[#FFF5E4]">
      <div className="text-4xl font-semibold">Links🔗</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {urlItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-gray-600">
                {item.icon === 'github' ? '💻' : item.icon === 'tstory' ? '✍️' : '📧'}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {item.title}로 이동 →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
