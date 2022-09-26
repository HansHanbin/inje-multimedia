import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileJeonghun() {
  const location = useLocation();
  const src = location.state.src;
  const name = location.state.name;
  const eng = location.state.eng;
  const mail = location.state.mail;
  const major = location.state.major;
  const major2 = location.state.major2;
  const work1 = location.state.work1;
  const work2 = location.state.work2;

  console.log(location);

  const { pathname } = useLocation();

  const [workOne, setWorkOne] = useState(true);
  const [workTwo, setWorkTwo] = useState(true);

  const onLoadOne = () => {
    if (work1 === null) {
      setWorkOne(false);
    } else {
      setWorkOne(true);
    }
  };

  const onLoadTwo = () => {
    if (work2 === null) {
      setWorkTwo(false);
    } else {
      setWorkTwo(true);
    }
  };

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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/6_studio_thumbnail.png`}
                name={"백정훈"}
                description="지향"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/6_research_header.png`}
                featureName="지향"
                featureDescription="프로젝트 네임 ‘지향(紙香)’ 어떤 목표를 향해 달리다라는 의미를 가진 지향(指向)과  중의적인 표현으로써 종이에서 피어나는 향기를 의미하고 있습니다. 작은 카드가 들어 갈 수 있는 공간이면 지향의 작은 카드형 퍼퓸페이퍼를 꽂아 놓음으로써 어느곳이든 당신이 좋아하는 향기를 머무르게 할 수 있습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI7.gif`}
                profileName="백정훈"
                profileEng="Baek Jeonghun"
                profileMail="duemno99@naver.com"
                path="/2022/project/vi/studio/:Jeonghun"
                work1={imageVis.JEONGHUN.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/6_research_thumbnail.png`}
                name={"백정훈"}
                description="GAP"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/6_studio_header.png`}
                featureName="GAP"
                featureDescription="프로젝트 네임 'GAP'은 현시대 게임 중독의 추세와 개념을 알려주고 게임 중독 테스트를 통해서 자신의 게임 중독지수를 판단할 수 있게, 그리고 중독 유형을 분리하고 분석해서 게임마다 어느 중독 유형을 가지고 있는지를 중독 유형 픽토그램을 통해서 알려줘서 스스로 게임 중독에 대해 경계할 수 있는 기회를 제시하는 프로젝트입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI7.gif`}
                profileName="백정훈"
                profileEng="Baek Jeonghun"
                profileMail="duemno99@naver.com"
                path="/2022/project/vi/research/:Jeonghun"
                work1={imageVir.JEONGHUN.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileJeonghun;
