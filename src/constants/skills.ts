export interface Skill {
  name: string;
  level: '상' | '중' | '하';
  image: string;
  description: string;
}

export const skills: Skill[] = [
  {
    name: 'Git',
    level: '중',
    image: '/images/git.png',
    description:
      'main, develop, feature 브랜치 전략을 활용해 체계적으로 버전 관리를 해본 경험이 있습니다. 실제 프로젝트에서 브랜치 분기와 병합 과정을 직접 진행하며, 효율적인 협업과 충돌 해결 방법을 익혔습니다.',
  },
  {
    name: 'React',
    level: '중',
    image: '/images/react.svg',
    description:
      '여러 프로젝트에서 컴포넌트 기반 UI와 다양한 라이브러리, API 연동 경험이 많으며, 협업을 통해 빠르게 성장하고 있습니다. ' +
      '특히 감정 일기장 프로젝트에서 다양한 React 훅을 상황에 맞게 적용하고, LP 사이트에서는 컴포넌트를 명확히 분리하여 유지보수성을 높였습니다.',
  },
  {
    name: 'JavaScript',
    level: '중',
    image: '/images/javascript.svg',
    description:
      'ES6+ 문법과 비동기 처리, DOM 조작 등 웹 개발에 필요한 기본기를 갖추고 있습니다. ' +
      '감정 일기장 프로젝트에서 비동기 API 처리와 상태 관리를 담당하며 JS 문법에 대한 실전 감각을 쌓았습니다.',
  },
  {
    name: 'TypeScript',
    level: '중',
    image: '/images/typescript.svg',
    description:
      '타입 시스템을 활용해 안정적인 코드 작성이 가능하며, 리액트와 함께 사용 경험이 있습니다. ' +
      'LP 사이트 개발 시 인터페이스 정의 및 Props 기반 컴포넌트 설계를 통해 코드의 명확성과 재사용성을 향상시켰습니다.',
  },
  {
    name: 'TailwindCSS',
    level: '중',
    image: '/images/tailwindcss.svg',
    description:
      '유틸리티 퍼스트 방식의 스타일링에 익숙하며, 반응형 디자인 구현 경험이 있습니다. ' +
      'LP 사이트 프로젝트에서 Tailwind를 사용해 반응형 UI를 빠르게 구성하고, 유지보수 시 클래스 기반으로 효율적으로 수정했습니다.',
  },
  {
    name: 'React Native',
    level: '하',
    image: '/images/react.svg',
    description:
      '클론코딩을 통해 모바일 앱 개발 기초를 익히는 중입니다. ' +
      '스레드(Thread) 프로젝트에서 폴더 구조 기반의 라우팅 구성과 Expo의 다양한 라이브러리를 활용하며 실제 앱 개발 경험을 쌓고 있습니다.',
  },
];
