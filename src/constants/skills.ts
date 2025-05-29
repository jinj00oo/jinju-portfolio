export interface Skill {
  name: string;
  level: '상' | '중' | '하';
  image: string; // 아이콘 이미지 경로 또는 URL
  description: string;
}

export const skills: Skill[] = [
  {
    name: 'React',
    level: '중',
    image: '/images/react.svg',
    description:
      '여러 프로젝트에서 컴포넌트 기반 UI와 다양한 라이브러리, API 연동 경험이 많으며, 협업을 통해 빠르게 성장하고 있습니다.',
  },
  {
    name: 'JavaScript',
    level: '중',
    image: '/images/javascript.svg',
    description: 'ES6+ 문법과 비동기 처리, DOM 조작 등 웹 개발에 필요한 기본기를 갖추고 있습니다.',
  },
  {
    name: 'TypeScript',
    level: '중',
    image: '/images/typescript.svg',
    description:
      '타입 시스템을 활용해 안정적인 코드 작성이 가능하며, 리액트와 함께 사용 경험이 있습니다.',
  },
  {
    name: 'TailwindCSS',
    level: '중',
    image: '/images/tailwindcss.svg',
    description: '유틸리티 퍼스트 방식의 스타일링에 익숙하며, 반응형 디자인 구현 경험이 있습니다.',
  },
  {
    name: 'React Native',
    level: '하',
    image: '/images/react.svg',
    description: '클론코딩을 통해 모바일 앱 개발 기초를 익히는 중입니다.',
  },
];
