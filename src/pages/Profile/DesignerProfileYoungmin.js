import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileYoungmin() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/12_studio_thumbnail.png`}
                name={"이영민"}
                description={"HOMETUDY"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/12_studio_header.png`}
                featureName="HOMETUDY"
                featureDescription="'홈 스쿨링' 과 ‘그룹 스터디' 를 통해 학습에 대한 동기부여를 제공하여 본인 스스로 학습에 흥미를 느낄 수 있도록 하며, ‘게이미피케이션‘ 요소를 추가하여 애플리케이션 사용 시 흥미와 관심도를 높이고, 동기부여와 자발적 참여 의지를 극대화하여 스스로에게 원동력이 생기게 지원해주는 애플리케이션입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC11.gif`}
                profileName="이영민"
                profileEng="Lee Youngmin"
                profileMail="rjscl343@naver.com"
                path="/project/dc/studio/:Youngmin"
                work0={imageDcs.YM.work0}
                work1={imageDcs.YM.work1}
                work2={imageDcs.YM.work2}
                work3={imageDcs.YM.work3}
                work4={imageDcs.YM.work4}
                work5={imageDcs.YM.work5}
                work6={imageDcs.YM.work6}
                work7={imageDcs.YM.work7}
                work8={imageDcs.YM.work8}
                work9={imageDcs.YM.work9}
                work10={imageDcs.YM.work10}
                work11={imageDcs.YM.work11}
                work12={imageDcs.YM.work12}
                work13={imageDcs.YM.work13}
                work14={imageDcs.YM.work14}
                lightMode={imageDcs.YM.lightMode}
                darkMode={imageDcs.YM.darkMode}
                link="https://cloud.protopie.io/p/c76cb5bcde"
                workVideo="https://www.youtube.com/embed/i87bnW_G6l0"
                protopieVideo="https://www.youtube.com/embed/Iu0OxxyW3Ts"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/12_research_thumbnail.png`}
                name={"이영민"}
                description={"또바기"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/12_research_header.png`}
                featureName="또바기"
                featureDescription="반려동물을 키우는 가구가 늘어나는 추세에 동물병원 진료비용에 부담을 가지고, 어느 병원에서 진료받아야 할지 찾는 분들에게 사용자에게 필요한 병원을 알려주고, 사용자 위치 근처에 있는 병원과 병원마다의 가격 및 리뷰 등의 정보를 제공하며 어떤 진료가 가능한지 알려주는 애플리케이션입니다. "
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC11.gif`}
                profileName="이영민"
                profileEng="Lee Youngmin"
                profileMail="rjscl343@naver.com"
                path="/project/dc/research/:Youngmin"
                work0={imageDcr.YM.work0}
                work1={imageDcr.YM.work1}
                work2={imageDcr.YM.work2}
                work3={imageDcr.YM.work3}
                work4={imageDcr.YM.work4}
                work5={imageDcr.YM.work5}
                work6={imageDcr.YM.work6}
                work7={imageDcr.YM.work7}
                work8={imageDcr.YM.work8}
                work9={imageDcr.YM.work9}
                work10={imageDcr.YM.work10}
                work11={imageDcr.YM.work11}
                work12={imageDcr.YM.work12}
                work13={imageDcr.YM.work13}
                work14={imageDcr.YM.work14}
                work15={imageDcr.YM.work15}
                work16={imageDcr.YM.work16}
                work17={imageDcr.YM.work17}
                work18={imageDcr.YM.work18}
                workVideo="https://www.youtube.com/embed/ciGFi4jj2Vs"
                protopieVideo="https://www.youtube.com/embed/WzKkvr37w3A"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileYoungmin;
