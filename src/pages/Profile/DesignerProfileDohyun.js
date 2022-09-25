import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileDohyun() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/10_studio_thumbnail.png`}
                name={"이도현"}
                description="AWAVE"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/10_studio_header.png`}
                featureName="AWAVE"
                featureDescription="사람들은 살면서 집중해야 하는 상황에 자주 놓이게 됩니다. 이러한 상황에서 효율을 높이고 싶지만 어떻게 해야 할지 모르는 사람들을 위해서 서비스를 기획하였습니다. AWAVE는 뇌파를 이용하는 BCI 기술과 가전을 제어하는 IoT 기술을 이용하여 실내 환경을 조절하여 사용자가 최상의 집중력을 낼 수 있도록 돕는 서비스입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC9.gif`}
                profileName="이도현"
                profileEng="Lee Dohyeon"
                profileMail="hyeonn323@gmail.com"
                path="/project/dc/studio/:Dohyeon"
                work0={imageDcs.DH.work0}
                work1={imageDcs.DH.work1}
                work2={imageDcs.DH.work2}
                work3={imageDcs.DH.work3}
                work4={imageDcs.DH.work4}
                work5={imageDcs.DH.work5}
                work6={imageDcs.DH.work6}
                work7={imageDcs.DH.work7}
                work8={imageDcs.DH.work8}
                work9={imageDcs.DH.work9}
                work10={imageDcs.DH.work10}
                work11={imageDcs.DH.work11}
                work12={imageDcs.DH.work12}
                work13={imageDcs.DH.work13}
                work14={imageDcs.DH.work14}
                work15={imageDcs.DH.work15}
                work16={imageDcs.DH.work16}
                work17={imageDcs.DH.work17}
                lightMode={imageDcs.DH.lightMode}
                darkMode={imageDcs.DH.darkMode}
                link="https://cloud.protopie.io/p/942ad953a1"
                workVideo="https://www.youtube.com/embed/xLDl0rAxxpA"
                protopieVideo="https://www.youtube.com/embed/422Vo9axvSg"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/10_research_thumbnail.png`}
                name={"이도현"}
                description={"NOVER"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/10_research_header.png`}
                featureName="NOVER"
                featureDescription="현대 사회에서 디지털 시대에 적응하여 디지털 기기나 AI 스피커를 자주 사용하는 시니어가 증가하고 있습니다. NOVER는 이러한 시니어들이 노후를 즐기며 건강을 편리하게 관리할 수 있도록 웰니스를 '잘 먹기', '잘 움직이기', '잘 쉬기'  세 가지 카테고리로 나누어 관리하고, 개선 방향을 제시해주는 서비스입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC9.gif`}
                profileName="이도현"
                profileEng="Lee Dohyeon"
                profileMail="hyeonn323@gmail.com"
                path="/project/dc/research/:Dohyeon"
                work0={imageDcr.DOHYEON.work0}
                work1={imageDcr.DOHYEON.work1}
                work2={imageDcr.DOHYEON.work2}
                work3={imageDcr.DOHYEON.work3}
                work4={imageDcr.DOHYEON.work4}
                work5={imageDcr.DOHYEON.work5}
                work6={imageDcr.DOHYEON.work6}
                work7={imageDcr.DOHYEON.work7}
                work8={imageDcr.DOHYEON.work8}
                work9={imageDcr.DOHYEON.work9}
                work10={imageDcr.DOHYEON.work10}
                work11={imageDcr.DOHYEON.work11}
                work12={imageDcr.DOHYEON.work12}
                work13={imageDcr.DOHYEON.work13}
                work14={imageDcr.DOHYEON.work14}
                work15={imageDcr.DOHYEON.work15}
                work16={imageDcr.DOHYEON.work16}
                workVideo="https://www.youtube.com/embed/S6Js4ZbJtQQ"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileDohyun;
