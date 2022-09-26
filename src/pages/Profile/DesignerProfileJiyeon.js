import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileJiyeon() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/9_studio_thumbnail.png`}
                name={"유지연"}
                description="ZEROIN"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/9_studio_header.png`}
                featureName="ZEROIN"
                featureDescription="제로인은 나에게 적합한 맞춤형 제로 웨이스트 미션을 받고 실천하는 제로 웨이스트 주간 미션 플랫폼입니다. 주어진 미션을 달성하는 도전 의식을 통해 일상에서 제로 웨이스트를 실천하도록 유도합니다. 지속적인 실천을 위해 주마다 미션이 바뀌고, 주어진 기간동안 부담없이 편리하게 제로 웨이스트를 실천할 수 있습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI10.gif`}
                profileName="유지연"
                profileEng="Yu Jiyeon"
                profileMail="wcdg1017@naver.com"
                path="/2022/project/vi/studio/:Jiyeon"
                work1={imageVis.JIYEON.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/9_research_thumbnail.png`}
                name={"유지연"}
                description="PETTAM"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/9_research_header.png`}
                featureName="PETTAM"
                featureDescription="펫탐은 소중한 반려동물을 위해 더 보살펴주고 기록하기 위한 키트 브랜드입니다. 반려동물의 상황을 체크할 수 있는 달력과 스티커, 종이테이프, 메모지, 반려동물의 건강에 도움되는 간식 패키지로 구성되어있습니다. 펫탐은 빠르고 간편한 기록이 가능하며, 나의 소중한 반려동물의 상황을 달력으로 한 눈에 볼 수 있습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI10.gif`}
                profileName="유지연"
                profileEng="Yu Jiyeon"
                profileMail="sbe3410@naver.com"
                path="/2022/project/vi/research/:Jiyeon"
                work1={imageVir.JIYEON.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileJiyeon;
