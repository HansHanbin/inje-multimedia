import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileSieun() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/5_studio_thumbnail.png`}
                name={"김시은"}
                description={"Pill-Me"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/5_studio_header.png`}
                featureName="Pill-Me"
                featureDescription="우리는 어른이나 아이 할 것 없이 매우 제한적인 형태의 알약을 먹습니다. 같은 약이지만 약효는 사람마다 다르고 부작용을 일으키기도 하죠. 3D프린터 기술은 이 문제를 해결하기 위해 개인 맞춤형 알약 조제를 목표로 하고 있습니다. Pill-Me은 이 기술이 활용될 미래에 도래했을 때, 대중들이 쉽게 사용할 수 있는 서비스를 제공합니다. "
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC5.gif`}
                profileName="김시은"
                profileEng="Kim Sieun"
                profileMail="kns9559sn@gmail.com"
                path="/2022/project/dc/studio/:Sieun"
                work0={imageDcs.SIEUN.work0}
                work1={imageDcs.SIEUN.work1}
                work2={imageDcs.SIEUN.work2}
                work3={imageDcs.SIEUN.work3}
                work4={imageDcs.SIEUN.work4}
                work5={imageDcs.SIEUN.work5}
                work6={imageDcs.SIEUN.work6}
                work7={imageDcs.SIEUN.work7}
                work8={imageDcs.SIEUN.work8}
                work9={imageDcs.SIEUN.work9}
                work10={imageDcs.SIEUN.work10}
                work11={imageDcs.SIEUN.work11}
                lightMode={imageDcs.SIEUN.lightMode}
                darkMode={imageDcs.SIEUN.darkMode}
                link="https://cloud.protopie.io/p/7f109309ef "
                workVideo="https://www.youtube.com/embed/dAhx4nQqcMQ"
                protopieVideo="https://www.youtube.com/embed/u6kRG-CbbzQ"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/5_research_thumbnaill.png`}
                name={"김시은"}
                description={"줍줍"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/5_research_header.png`}
                featureName="줍줍"
                featureDescription="나날이 심각해지는 환경 오염에 사람들은 심각성을 인지하고 다양한 환경 보호 활동을 하고 있습니다. 그런데도 환경 오염의 심각성은 지속되며, 더 많은 참여를 필요로 합니다. 여러분은 어떻게 대처하고 있나요? 환경 보호를 생각하곤 있지만, 막상 행동으로 실행하는 것이 어렵나요? 줍줍과 함께 환경 운동을 더 쉽고 재미있게 실천해보세요!"
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC5.gif`}
                profileName="김시은"
                profileEng="Kim Sieun"
                profileMail="kns9559sn@gmail.com"
                path="/2022/project/dc/research/:Sieun"
                work0={imageDcr.SIEUN.work0}
                work1={imageDcr.SIEUN.work1}
                work2={imageDcr.SIEUN.work2}
                work3={imageDcr.SIEUN.work3}
                work4={imageDcr.SIEUN.work4}
                work5={imageDcr.SIEUN.work5}
                work6={imageDcr.SIEUN.work6}
                work7={imageDcr.SIEUN.work7}
                work8={imageDcr.SIEUN.work8}
                work9={imageDcr.SIEUN.work9}
                work10={imageDcr.SIEUN.work10}
                work11={imageDcr.SIEUN.work11}
                work12={imageDcr.SIEUN.work12}
                workVideo="https://www.youtube.com/embed/HxUVam5Rtfw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileSieun;
