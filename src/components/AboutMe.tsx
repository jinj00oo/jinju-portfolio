import { FaCircle } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div className="flex flex-col mt-15 md:mt-10 gap-10 shadow-xl justify-center px-5 py-5 md:px-20 md:py-15 text-gray-500 rounded-2xl bg-[#FFF5E4]">
      <div className="text-4xl font-semibold">About Me 😊</div>
      <div className="flex flex-col text-sm gap-6 leading-relaxed">
        <div>
          <FaCircle className="inline mr-2 text-gray-500" />
          <span>
            저는 <strong>꾸준한 열정과 책임감</strong>을 가진 프론트엔드 개발자{' '}
            <strong>박진주</strong>입니다.
          </span>
        </div>
        <div>
          <FaCircle className="inline mr-2 text-gray-500" />
          <span>
            <strong>React의 기본기</strong>를 인프런 강의를 통해 체계적으로 학습하고, 배운 내용을
            직접 적용하여 <strong>‘감정 일기장’ 프로젝트</strong>를 완성한 경험이 있습니다.
          </span>
        </div>
        <div>
          <FaCircle className="inline mr-2 text-gray-500" />
          <span>
            단순히 로컬 스토리지에 데이터를 저장하는 것을 넘어, 전공 수업에서 배운 지식을 바탕으로{' '}
            <strong>데이터베이스(DB) 설계와 백엔드 연동</strong>까지 직접 구현해보며{' '}
            <strong>개발의 전 과정을 경험</strong>했습니다.
          </span>
        </div>
        <div>
          <FaCircle className="inline mr-2 text-gray-500" />
          <span>
            <strong>UMC 연합동아리</strong>에서 인증, 쿼리, 상태 관리 등 <strong>심화 개념</strong>
            을 학습하고, 이를 실제 프로젝트에 적용하면서 다양한{' '}
            <strong>라이브러리의 필요성과 사용법</strong>을 익혔습니다. 웹 개발에 그치지 않고{' '}
            <strong>앱 개발</strong>까지 역량을 확장하고자 <strong>React Native</strong>도 병행하여
            공부하고 있습니다.
          </span>
        </div>
        <div>
          <FaCircle className="inline mr-2 text-gray-500" />
          <span>
            <strong>새로운 기술을 배우는 데에 열정</strong>이 있으며, 배운 내용을 직접 프로젝트에 적용하며 
            성장하는 과정을 즐깁니다. 토이 프로젝트를 진행하면서 Git을 활용한 버전 관리와 
            main, develop, feature 브랜치 전략을 경험했고, 이를 통해 실제 개발 환경에서 
            효율적으로 협업할 수 있는 역량도 갖추게 되었습니다.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="text-3xl font-bold">경력</div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <FaCircle className="shrink-0 text-gray-500" />
            <span className="font-semibold">교내 알고리즘 분석 스터디 – 스터디장</span>
          </div>
          <div className="pl-6">
            <p>
              팀원들을 책임감 있게 이끌며, <strong>원활한 소통과 적극적인 참여</strong>를
              이끌어냈습니다.
            </p>
            <p>
              그 결과, <strong>학기 말 우수 스터디 팀</strong>으로 선정되는 성과를 거두었습니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <FaCircle className="shrink-0 text-gray-500" />
            <span className="font-semibold">UMC 연합동아리 Web 파트</span>
          </div>
          <div className="pl-6">
            <p>
              매주 워크북을 성실히 수행하며, 해결이 어려운 문제는{' '}
              <strong>스터디원들과 함께 트러블슈팅</strong>을 통해 적극적으로 해결했습니다.
            </p>
            <p>
              이러한 적극적인 참여로 <strong>베스트 워크북에 2회</strong> 선정되었습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
