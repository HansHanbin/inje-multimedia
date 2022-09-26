import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileDoyeon() {
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
            <div className="profile-projects solo">
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/9_studio_thumbnail.png`}
                name={"안도연"}
                description="Assem"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/9_studio_header.png`}
                featureName="Assem"
                featureDescription="최근 1인 가구가 주된 가구 형태로 자리매김하면서 다양한 유형의 공유 주거 시설이 나타났습니다. 이에 따라, 공유 주거 시설을 선택하는 사람들이 증가하였습니다. 어셈(Assem)은 하우스메이트들과 일을 분담하고 수행하는 과정에서 소통에 도움을 주고, 공동구매 등 공유 주거 시설에서의 생활이 원활할 수 있도록 도와주는 어플리케이션입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC8.gif`}
                profileName="안도연"
                profileEng="An Doyeon"
                profileMail="rkornne@gmail.com"
                path="/2022/project/dc/studio/:Doyeon"
                work0={imageDcs.DOYEON.work0}
                work1={imageDcs.DOYEON.work1}
                work2={imageDcs.DOYEON.work2}
                work3={imageDcs.DOYEON.work3}
                work4={imageDcs.DOYEON.work4}
                work5={imageDcs.DOYEON.work5}
                work6={imageDcs.DOYEON.work6}
                work7={imageDcs.DOYEON.work7}
                lightMode={imageDcs.DOYEON.lightMode}
                darkMode={imageDcs.DOYEON.darkMode}
                workVideo="https://www.youtube.com/embed/Bg3fo5wHWaA"
                protopieVideo="https://www.youtube.com/embed/RIiXRnAAvcM"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileDoyeon;
