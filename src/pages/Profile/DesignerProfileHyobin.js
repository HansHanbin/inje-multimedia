import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVir from "../../works/imageVir";
import imageVis from "../../works/imageVis";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileHyobin() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/2_studio_thumbnail.png`}
                name="공효빈"
                description="마약은 당신을 [          ] 한다."
                header={`${process.env.PUBLIC_URL}/assets/features/VI/2_studio_header.png`}
                featureName="마약은 당신을 [          ] 한다."
                featureDescription="마약이 어느 날부터 우리 사회 곳곳에 파고들었다. 마약떡볶이, 마약베게 등 마약 관련 단어가 무분별하게 남용되고 있으며 인터넷과 암호화폐의 발달로 인해 마약을 구하기 더 쉬워졌다. 이에 따라 젊은 층 특히 20-30대 마약사범 수가 증가하고 있다. 마약에 경각심을 가지기 위해 마약의 부정적 측면을 강화한 포스터 디자인을 제안하게 되었다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI2.gif`}
                profileName="공효빈"
                profileEng="Gong Hyobin"
                profileMail="hyob1130@naver.com"
                path="/project/vi/studio/:Hyobin"
                work1={imageVis.HYOBIN.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/2_research_thumbnail.png`}
                name="공효빈"
                description="우리바다 함께海"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/2_research_header.png`}
                featureName="우리바다 함께海"
                featureDescription="우리 모두는 서로 유기적으로 연결되어 있으며 원인이 있으면 결과가 있는 인과관계 속에서 살아간다. 즉, 우리는 혼자 살아갈 수 없으며 수레바퀴에 맞물리듯 서로에게 영향을 준다. 한쪽의 균형이 무너진다면 다른 쪽도 무너질 수밖에 없다. 이와 같은 생각하에 조화롭게 살아가고자 하는 염원을 담아 ‘공존(共存)’이라는 주제를 선정하게 되었다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI2.gif`}
                profileName="공효빈"
                profileEng="Gong Hyobin"
                profileMail="hyob1130@naver.com"
                path="/project/vi/research/:Hyobin"
                work1={imageVir.HYOBIN.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileHyobin;
