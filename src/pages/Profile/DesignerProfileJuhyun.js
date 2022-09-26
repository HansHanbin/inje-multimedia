import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileJuhyun() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/15_studio_thumbnail.png`}
                name={"정주현"}
                description={"Moonshot"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/15_studio_header.png`}
                featureName="Moonshot(문샷)"
                featureDescription="‘생생하게 꿈꾸면 이루어진다.’ 하지만 이뤄본 적도 없는 꿈을 어떻게 생생하게 꿀 수 있을까요? 문샷에서는 현재 나의 꿈과 목표를 이뤄낸 미래 모습 아바타를 만날 수 있습니다. 미루고 싶은 오늘의 과제도 성공한 미래의 내 모습이 권유한다면 마냥 무시할 수는 없겠죠. 문샷 아바타와 함께 생생한 미래를 꿈꿔보세요."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC14.gif`}
                profileName="정주현"
                profileEng="Jung Juhyun"
                profileMail="qwert911262@gmail.com"
                path="/2022/project/dc/studio/:Juhyun"
                work0={imageDcs.JUHYUN.work0}
                work1={imageDcs.JUHYUN.work1}
                lightMode={imageDcs.JUHYUN.lightMode}
                darkMode={imageDcs.JUHYUN.darkMode}
                link="https://cloud.protopie.io/p/a0667d47db"
                workVideo="https://www.youtube.com/embed/btdR06WBLCQ"
                protopieVideo="https://www.youtube.com/embed/TxDqK5z9h5s"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/15_research_thumbnail.png`}
                name={"정주현"}
                description={"Slue"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/15_research_header.png`}
                featureName="Slue(슬루)"
                featureDescription="매일 새롭게 넘쳐나는 정보들 속에서 우리에게는 진짜 정보와 가짜 정보를 구별하는 능력인 ‘디지털 리터러시’의 중요성이 커지고 있습니다. 슬루는 디지털 리터러시 교육이 가장 필요한 10-20대가 많이 이용하는 소셜 미디어 상의 이슈를 다양한 사람들과 소통하고, 자신의 의견을 펼치는 방식으로 정보 문해력을 기를 수 있도록 돕습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC14.gif`}
                profileName="정주현"
                profileEng="Jung Juhyun"
                profileMail="qwert911262@gmail.com"
                path="/2022/project/dc/research/:Juhyun"
                work0={imageDcr.JUHYUN.work0}
                work1={imageDcr.JUHYUN.work1}
                lightMode={imageDcr.JUHYUN.lightMode}
                darkMode={imageDcr.JUHYUN.darkMode}
                workVideo="https://www.youtube.com/embed/MPfJslWHoUY"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/16_studio_thumbnail.png`}
                name={"정주현"}
                description={"Fortention"}
                header={`${process.env.PUBLIC_URL}/assets/features/VI/16_studio_header.png`}
                featureName="Fortention(포텐션)"
                featureDescription="포텐션은 산불 피해 지역 지원을 위한 사용자 참여형 모바일 어플리케이션입니다. 산불이 발생할 때마다 피해 입은 자연과 거주민들을 위한 기부가 이어지지만 일시적인 관심이 갖는 한계가 있습니다. 이 문제에서 출발하여, 사용자의 일상 활동 통해 산불 위험 지역에 지속적인 관심을 가지고 실질적 도움까지 제공할 수있는 디자인을 제안합니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC14.gif`}
                profileName="정주현"
                profileEng="Jung Juhyun"
                profileMail="qwert911262@gmail.com"
                path="/2022/project/vi/studio/:Juhyun"
                work1={imageVis.JUHYUN.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/16_research_thumbnail.png`}
                name={"정주현"}
                description={"Project : E.V.E"}
                header={`${process.env.PUBLIC_URL}/assets/features/VI/16_research_header.png`}
                featureName="Project : E.V.E"
                featureDescription="먼 미래, 외계인들은 자신들의 행성에서 벗어나 이주할 행성으로 지구를 선택했습니다. 이들은 은밀하고 철저한 분석을 통해 지구인을 현혹시키고 지구를 침공할 수 있는 방법을 생각해냈죠. 그러나 역설적이게도, 이들의 계략에 말려들면 오염된 지구를 다시 깨끗하게 되돌릴 수도 있게 됩니다. 자, 앞으로 지구인들은 어떤 운명이 맞이하게 될까요?"
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC14.gif`}
                profileName="정주현"
                profileEng="Jung Juhyun"
                profileMail="qwert911262@gmail.com"
                path="/2022/project/vi/research/:Juhyun"
                work1={imageVir.JUHYUN.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileJuhyun;
