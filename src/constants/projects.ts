export interface Project {
  id: number;
  name: string;
  description: string;
  image?: string;
  github?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: '감정 일기장',
    description:
      '컴포넌트 기반 UI 설계, 상태 관리, 라우팅 등 핵심 개념을 숙지하고 다양한 프로젝트에 적용한 경험이 있습니다.',
    image: '../images/emotiondiary.png',
    github: 'https://github.com/jinj00oo/emotion-diary-front',
    liveUrl: 'https://emotion-diary-jet-five.vercel.app/',
  },
  {
    id: 2,
    name: '돌려돌려 Lp판 사이트',
    description:
      'TypeScript와 TailwindCSS를 기반으로, 다양한 React 라이브러리(JWT, zod, tanstack query 등)를 활용해 실무에 가까운 환경을 경험했습니다. API 호출, 인증, 데이터 검증 등 실제 서비스 개발에 필요한 기술을 직접 적용하며, 타입 안정성과 효율적인 상태 관리의 중요성을 체감했습니다.',
    image: '../images/lp.png',
    github: 'https://github.com/HIUMC/UMC-8th-Web-Study/tree/main/cola/week8/mission2',
  },
  {
    id: 3,
    name: 'Threads (진행중)',
    description:
      'React Native를 활용한 SNS 앱 클론코딩 프로젝트로, 모바일 앱 개발의 구조와 네이티브 환경에서의 컴포넌트 설계, 내비게이션, API 연동 등 다양한 모바일 개발 경험을 쌓고 있습니다. 진행 중인 프로젝트로, 앱 개발의 전체적인 흐름과 모바일 UX에 대해 배우고 있습니다.',
    image: '../images/threads3.png',
    github: 'https://github.com/jinj00oo/threads',
  },
];
