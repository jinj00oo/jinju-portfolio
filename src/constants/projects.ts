export interface Project {
  id: number;
  name: string;
  description: string;
  image?: string;
  github?: string;
  liveUrl?: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: '감정 일기장',
    description:
      '컴포넌트 기반 UI 설계, 상태 관리, 라우팅 등 프론트엔드의 핵심 개념을 숙지하고, 감정 일기장 프로젝트에 직접 적용해본 경험이 있습니다. 특히, 전공 시간에 배운 지식을 바탕으로 데이터베이스를 직접 설계하고 백엔드까지 연결해 전체 서비스를 구현해보았습니다. 이러한 경험 덕분에 프론트엔드와 백엔드의 구조와 데이터 흐름을 깊이 이해하게 되었고, 실제 개발 과정에서 백엔드와의 소통과 협업을 더욱 효과적으로 할 수 있는 역량을 갖추게 되었습니다.',
    techStack: ['React', 'JavaScript', 'CSS', 'MySQL', 'Node.js'],

    image: '../images/emotiondiary.png',
    github: 'https://github.com/jinj00oo/emotion-diary-front',
    liveUrl: 'https://emotion-diary-jet-five.vercel.app/',
  },
  {
    id: 2,
    name: '돌려돌려 Lp판 사이트',
    description:
      'TypeScript와 TailwindCSS를 기반으로, 다양한 React 라이브러리(JWT, zod, tanstack query 등)를 활용해 실무에 가까운 환경을 경험했습니다. API 호출, 인증, 데이터 검증 등 실제 서비스 개발에 필요한 기술을 직접 적용하며, 타입 안정성과 효율적인 상태 관리의 중요성을 체감했습니다. 이러한 경험을 바탕으로 실제 프로젝트 진행 시 요구되는 실무 역량을 갖추게 되었습니다.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'JWT', 'Zod', 'TanStack Query'],

    image: '../images/lp.png',
    github: 'https://github.com/HIUMC/UMC-8th-Web-Study/tree/main/cola/week8/mission2',
  },
  {
    id: 3,
    name: 'Threads (진행중)',
    description:
      'React Native를 활용한 SNS 앱 클론코딩 프로젝트로, 모바일 앱 개발의 구조와 네이티브 환경에서의 컴포넌트 설계, 내비게이션, API 연동 등 다양한 모바일 개발 경험을 쌓고 있습니다. 현재 진행 중인 프로젝트로, 앱 개발의 전체적인 흐름과 모바일 UX에 대해 배우고 있으며, 이를 통해 웹뿐만 아니라 앱 등 다양한 환경에서 프로젝트를 진행할 수 있는 역량도 함께 키워가고 있습니다.',
    techStack: ['React Native', 'Expo', 'TypeScript'],

    image: '../images/threads3.png',
    github: 'https://github.com/jinj00oo/threads',
  },
];
