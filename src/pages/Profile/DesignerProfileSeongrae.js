import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileSeongrae() {
  const location = useLocation();
  const src = location.state.src;
  const name = location.state.name;
  const eng = location.state.eng;
  const mail = location.state.mail;
  const major = location.state.major;
  const major2 = location.state.major2;

  console.log(location);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <HeaderDark />
      <div className="profile">
        <div className="profile-wrapper">
          <div className="profile-top">
            <img alt="profile" src={src} className="profile-image" />

            <div className="profile-text">
              <div className="profile-text-name">
                <div className="profile-text-kor">{name}</div>
                <div className="profile-text-eng">{eng}</div>
              </div>

              <div className="profile-text-major">
                {major} <br /> {major2}
              </div>

              <div className="profile-text-mail">{mail}</div>
            </div>
          </div>

          <div className="profile-bottom">
            <div className="profile-bottom-title">Project</div>
            <div className="profile-projects">
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/16_studio_thumbnail.png`}
                name={"조성래"}
                description={"OE WORLD"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/16_studio_header.png`}
                featureName="OE WORLD"
                featureDescription="비용, 팬데믹 등으로 인해 해외로 나가기 힘든 요즘 집에서도 해외여행을 즐길 수 있다? 여행 또는 해외출장을 위한 사전답사 및 비용에 대한 예산관리를 진행 OE WORLD의 메인 키워드는 ‘경험’이며 증강현실을 활용한 콘텐츠를 가상현실에서 즐길 수 있도록 준비했습니다. 이제 집에서 다른 나라의 문화, 쇼핑, 분위기 등을 경험하세요"
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC15.gif`}
                profileName="조성래"
                profileEng="Cho Seongrae"
                profileMail="srj9704@naver.com"
                path="/2022/project/dc/studio/:Seongrae"
                work0={imageDcs.SR.work0}
                work1={imageDcs.SR.work1}
                work2={imageDcs.SR.work2}
                work3={imageDcs.SR.work3}
                work4={imageDcs.SR.work4}
                work5={imageDcs.SR.work5}
                work6={imageDcs.SR.work6}
                work7={imageDcs.SR.work7}
                work8={imageDcs.SR.work8}
                work9={imageDcs.SR.work9}
                work10={imageDcs.SR.work10}
                work11={imageDcs.SR.work11}
                work12={imageDcs.SR.work12}
                work13={imageDcs.SR.work13}
                work14={imageDcs.SR.work14}
                work15={imageDcs.SR.work15}
                work16={imageDcs.SR.work16}
                work17={imageDcs.SR.work17}
                work18={imageDcs.SR.work18}
                work19={imageDcs.SR.work19}
                work20={imageDcs.SR.work20}
                work21={imageDcs.SR.work21}
                work22={imageDcs.SR.work22}
                work23={imageDcs.SR.work23}
                work24={imageDcs.SR.work24}
                work25={imageDcs.SR.work25}
                work26={imageDcs.SR.work26}
                work27={imageDcs.SR.work27}
                work28={imageDcs.SR.work28}
                work29={imageDcs.SR.work29}
                lightMode={imageDcs.SR.lightMode}
                darkMode={imageDcs.SR.darkMode}
                link="https://cloud.protopie.io/p/88604c81c3"
                workVideo="https://www.youtube.com/embed/5JLMHgpqKl0"
                protopieVideo="https://www.youtube.com/embed/ut3r227PPHk"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/16_research_thumbnail.png`}
                name={"조성래"}
                description="Hi, Tap"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/16_research_header.png`}
                featureName="Hi, Tap"
                featureDescription="치매노인 부양이 힘드신가요? 치매노인이 걱정된다면 웨어러블 디바이스를 연결 후 치매노인의 현 위치, 건강 상태를 실시간으로 확인하세요 보호자와 치매노인은 관계 및 소통이 가장 중요한 만큼 Hi, Tap에선 일정 알림, 돌보미 매칭, 돌봄 일지 관리 등 다양한 콘텐츠가 준비되어 있습니다 지금부터 앱을 소개합니다!"
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC15.gif`}
                profileName="조성래"
                profileEng="Cho Seongrae"
                profileMail="srj9704@naver.com"
                path="/2022/project/dc/research/:Seongrae"
                work0={imageDcr.SEONGRAE.work0}
                work1={imageDcr.SEONGRAE.work1}
                work2={imageDcr.SEONGRAE.work2}
                work3={imageDcr.SEONGRAE.work3}
                work4={imageDcr.SEONGRAE.work4}
                work5={imageDcr.SEONGRAE.work5}
                work6={imageDcr.SEONGRAE.work6}
                work7={imageDcr.SEONGRAE.work7}
                work8={imageDcr.SEONGRAE.work8}
                work9={imageDcr.SEONGRAE.work9}
                work10={imageDcr.SEONGRAE.work10}
                work11={imageDcr.SEONGRAE.work11}
                work12={imageDcr.SEONGRAE.work12}
                work13={imageDcr.SEONGRAE.work13}
                work14={imageDcr.SEONGRAE.work14}
                work15={imageDcr.SEONGRAE.work15}
                work16={imageDcr.SEONGRAE.work16}
                work17={imageDcr.SEONGRAE.work17}
                work18={imageDcr.SEONGRAE.work18}
                workVideo="https://www.youtube.com/embed/ceJcKYWJ4Fk"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileSeongrae;
