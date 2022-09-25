import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVir from "../../works/imageVir";
import imageVis from "../../works/imageVis";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileBoeun() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/8_studio_thumbnail.png`}
                name={"서보은"}
                description="딴 짓"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/8_studio_header.png`}
                featureName="딴 짓"
                featureDescription="정보 통신의 발달과 디지털 기기의 보급화로 인해 스마트폰을 과의존 하게 되면서 기억력이 감퇴하는 디지털 치매 현상이 나타나기 시작했다. 이를 해결하기 위해 제작된 '딴짓' 은 어떤일을 하고 있을때 그 일과 관계없는 행동을 하는 것으로, 디지털 기기에서 벗어나 전혀 관계없는 아날로그 행위로 치유하자는 뜻을 담은 브랜드라 할 수있다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI9.gif`}
                profileName="서보은"
                profileEng="Seo Boeun"
                profileMail="sbe3410@naver.com"
                path="/project/vi/studio/:Boeun"
                work1={imageVis.BOEUN.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/8_research_thumbnail.png`}
                name={"서보은"}
                description="Gardoom"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/8_research_header.png`}
                featureName="Gardoom"
                featureDescription="가둠은 홈가드닝의 어려움을 겪고 있는 초보자들의 입장에서 생각한 브랜드로, 어떻게 하면 쉽고 간단히 관리 할 수 있을지를 중점적으로 고민하여 제작한 식물 키트 서비스이다. 가둠은 Gardeen+Room의 합성어로, 내 방에 작은 정원을 가둔다는 의미를 담고 있으며, 소비자들의 인테리어와 가드닝을 동시에 만족시키는 브랜드라 할 수 있다."
                pofileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI9.gif`}
                profileName="서보은"
                pofileEng="Seo Boeun"
                pofileMail="sbe3410@naver.com"
                path="/project/vi/research/:Boeun"
                work1={imageVir.BOEUN.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileBoeun;
