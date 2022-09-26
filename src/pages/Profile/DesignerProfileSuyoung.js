import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileSuyoung() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/13_research_thumbnail.png`}
                name={"장수영"}
                description="Whale with 하나"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/13_research_header.png`}
                featureName="Whale with 하나"
                featureDescription="'Whale with 하나' 고래 멸종 위기 캠페인입니다. 고래 중에서 급격히 대형 고래 종이 멸종 위기가 많다고 합니다. 디자인은 포장 박스를 통해서 대형 고래를 죽어 나가는 외로움을 막기 위해서입니다. 대형 고래는 자주 볼 수 있는 동물이 아니기 때문에 친근함이 될 수 있도록 합니다. 캠페인을 통해 완화되는 게 목표입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI14.gif`}
                profileName="장수영"
                profileEng="Jang Suyoung"
                profileMail="wkdtndud0426@naver.com"
                path="/2022/project/vi/research/:Suyoung"
                work1={imageVir.SUYOUNG.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileSuyoung;
