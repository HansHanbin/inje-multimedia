import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileHanbin() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/me_studio_thumbnail.png`}
                name={"이한빈"}
                description={"NEXITY"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/me_studio_header.png`}
                featureName="NEXITY"
                featureDescription="기후가 변하고 해수면이 상승, 지구의 온도가 지속적으로 높아지고 있는 현 시대에 다음 세대를 위한 준비와 고민은 불가피 합니다. NEXITY의 궁극적인 목표는 다음 세대를 위해 은하계 어딘가에 있을 또 다른 생명을 유지할 수 있는 행성을 찾고 이를 지구화 하는 것입니다. 무인 함선 시스템 SUNDAY는 우리의 임무를 보다 정확하고 효율적으로 도울 것 입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC12.gif`}
                profileName="이한빈"
                profileEng="Lee Hanbin"
                profileMail="hans.hanbin.lee@gmail.com"
                path="/project/dc/studio/:Hanbin"
                work0={imageDcs.HANBIN.work0}
                work1={imageDcs.HANBIN.work1}
                lightMode={imageDcs.HANBIN.lightMode}
                darkMode={imageDcs.HANBIN.darkMode}
                link="https://cloud.protopie.io/p/cd4bdcb184"
                workVideo="https://www.youtube.com/embed/OIVc79HMrIY"
                protopieVideo="https://www.youtube.com/embed/KVXfLUno5kQ"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/me_research_thumbnail.png`}
                name={"이한빈"}
                description={"ROCAB"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/me_research_header.png`}
                featureName="ROCAB"
                featureDescription="최근 경제는 소유의 시대를 넘어 공유의 시대를 향해 가고 있습니다. 공유 경제 속 우리는 간편 이동 수단, 업무 공간, 주거 공간 등 다양한 재화를 공유 하며 살아갑니다. 우리 ROCAB은 근 미래에 완전 자율주행 차량의 보급에 발맞춰 LEVEL 5 이상의 자율 주행 차량의 공유화를 목표로 합니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC12.gif`}
                profileName="이한빈"
                profileEng="Lee Hanbin"
                profileMail="hans.hanbin.lee@gmail.com"
                path="/project/dc/research/:Hanbin"
                work0={imageDcr.HANBIN.work0}
                work1={imageDcr.HANBIN.work1}
                workVideo="https://www.youtube.com/embed/-PyA8xCeG7w"
                protopieVideo="https://www.youtube.com/embed/6w1PqOwRRM8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileHanbin;
