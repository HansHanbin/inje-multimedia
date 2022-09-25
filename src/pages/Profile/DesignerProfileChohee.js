import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVir from "../../works/imageVir";
import imageVis from "../../works/imageVis";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileChohee() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/4_studio_thumbnail.png`}
                name="김초희"
                description="PLANTRIUM "
                header={`${process.env.PUBLIC_URL}/assets/features/VI/4_studio_header.png`}
                featureName="PLANTRIUM "
                featureDescription="플랜트리움은 증강현실 AR를 활용하여 현재 식물을 키우고 있거나 키울 예정인 사용자들을 위해 인테리어의 정보와 직접 배치해볼 수 있는 기회를 제공하고, 누구나 쉽게 식물을 활용하여 집을 새롭게 변화시키고 또 나만의 식물까지 구매할 수 있는 AR 식물 인테리어 구독 서비스 플랫폼을 제작하고자 합니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI4.gif`}
                profileName="김초희"
                profileEng="Kim Chohee"
                profileMail="kch1571@daum.net"
                path="/project/vi/studio/:Chohee"
                work1={imageVis.CHOHEE.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/4_research_thumbnail.png`}
                name="김초희"
                description="언더더씨 "
                header={`${process.env.PUBLIC_URL}/assets/features/VI/4_research_header.png`}
                featureName="언더더씨 "
                featureDescription="언더더씨 캠페인은 식량이나 기름, 환경 등의 이유로 멸종 위기에 처한 해양 동물들을 다시 상기시켜주고 보호하기 위해서 시작한 캠페인 입니다. 그래서 대표 해양 동물로 북극곰, 푸른바다거북, 해달, 상괭이, 점박이 물범을 미니멀하게 캐릭터를 디자인하여 환경 캠페인의 캐릭터를 개발하였습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI4.gif`}
                profileName="김초희"
                profileEng="Kim Chohee"
                profileMail="kch1571@daum.net"
                path="/project/vi/research/:Chohee"
                work1={imageVir.CHOHEE.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileChohee;
