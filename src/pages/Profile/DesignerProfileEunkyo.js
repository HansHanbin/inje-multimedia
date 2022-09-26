import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileEunkyo() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/14_studio_thumbnail.png`}
                name={"장은교"}
                description="WON:D"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/14_studio_header.png`}
                featureName="WON:D"
                featureDescription="비가 와 우중충한 상태를 좋아하는 사람, 천둥번개를 즐기는 사람, 구름 한 점 없는 쨍쨍한 햇빛을 좋아하는 사람 등 선호하는 기상 상태는 모두 다릅니다. 내가 가장 좋아하는 기상을 언제든 즐길 수 있는 방법은 없을까요? 그런 당신을 위한 기상상태 조절을 통한 여가 활동 서비스 WON:D와 함께라면 할 수 있습니다! "
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC13.gif`}
                profileName="장은교"
                profileEng="Jang Eunkyo"
                profileMail="429650@gmail.com"
                path="/2022/project/dc/studio/:Eunkyo"
                work0={imageDcs.EUNKYO.work0}
                work1={imageDcs.EUNKYO.work1}
                work2={imageDcs.EUNKYO.work2}
                lightMode={imageDcs.EUNKYO.lightMode}
                darkMode={imageDcs.EUNKYO.darkMode}
                link="https://cloud.protopie.io/p/ed7365d26a"
                workVideo="https://www.youtube.com/embed/-bHpNfaN8Lk"
                protopieVideo="https://www.youtube.com/embed/PZUF2xgL7wA"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/14_research_thumbnail.png`}
                name={"장은교"}
                description="FING"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/14_research_header.png`}
                featureName="FING"
                featureDescription="코로나19의 영향으로 여행 서비스에도 많은 변화가 생겼습니다. 특히 나만의 시간을 보낼 수 있는 섬 혹은 소도시 등 색다른 여행지를 선호하고 있습니다. 이러한 트렌드에 맞춘 안심하고 여행을 떠날 수 있는 FING은 자율운항선박과 함께 나만의 여행을 만들며 특별한 경험을 만들 수 있는 서비스입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC13.gif`}
                profileName="장은교"
                profileEng="Jang Eunkyo"
                profileMail="429650@gmail.com"
                path="/2022/project/dc/research/:Eunkyo"
                work0={imageDcr.EUNKYO.work0}
                work1={imageDcr.EUNKYO.work1}
                work2={imageDcr.EUNKYO.work2}
                workVideo="https://www.youtube.com/embed/St2HOuKIfo4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileEunkyo;
