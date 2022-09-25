import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileBohyun() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/8_studio_thumbnail.png`}
                name={"서보현"}
                description="Derong"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/8_studio_header.png`}
                featureName="Derong"
                featureDescription="데롱은 복잡한 오해를 심해라고 빗대어 표현하였습니다. 자신의 정보를 등록하여 나만의 심해 즉 데롱을 제작합니다. 이는 심해 속에 해파리가 있는 모습으로 제작이 되며 친구들의 데롱의 모습과 정보 또한 알 수 있습니다. 친구들과의 대화와 질문을 통해 서로를 알아가고 오해를 해결할 수 있도록 도와주는 서비스입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC7.gif`}
                profileName="서보현"
                profileEng="Seo Bohyeon"
                profileMail="seobori2000@gmail.com"
                path="/project/dc/studio/:Bohyeon"
                work0={imageDcs.BH.work0}
                work2={imageDcs.BH.work2}
                lightMode={imageDcs.BH.lightMode}
                darkMode={imageDcs.BH.darkMode}
                link="https://cloud.protopie.io/p/d8e2d0fefa"
                workVideo="https://www.youtube.com/embed/fAthydPOyWo"
                protopieVideo="https://www.youtube.com/embed/0Pxnv7JIjD8"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/8_research_thumbnail.png`}
                name={"서보현"}
                description={"BEBICARE"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/8_research_header.png`}
                featureName="BEBICARE"
                featureDescription="베비케어는 아토피 피부염에 걸린 아이를 키우고 있지만 병원에 방문할 시간이 마땅치 않거나 병원이 문을 열지 않은 시간에도 진료를 받고 싶거나, 아토피 케어를 하고 싶은 분들을 대상으로 제작되었습니다. 비대면 진료, AI 진료, 목욕을 관리해 줘 아이의 아토피에 대해 정확하고 빠른 케어할 수 있도록 도와주는 서비스입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC7.gif`}
                profileName="서보현"
                profileEng="Seo Bohyeon"
                profileMail="seobori2000@gmail.com"
                path="/project/dc/research/:Bohyeon"
                work0={imageDcr.BOHYEON.work0}
                work2={imageDcr.BOHYEON.work2}
                workVideo="https://www.youtube.com/embed/jqqq0xvEmTE"
                protopieVideo="https://www.youtube.com/embed/O35YqESb3pE"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileBohyun;
