import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileJaeseok() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/14_studio_thumbnail.png`}
                name={"장재석"}
                description={"NFT 아트의 흥행 비결"}
                header={`${process.env.PUBLIC_URL}/assets/features/VI/14_studio_header.png`}
                featureName="NFT 아트의 흥행 비결"
                featureDescription="NFT는 2017년부터 가상화폐와 함께 화제가 되며 미술 시장의 새 패러다임을 제시하였으며 NFT 시장의 트렌드는 아트와 사진에서 PFP로, 그리고 더 나아가 기업형 NFT로 나아가고 있습니다. 시장의 흐름과 NFT 가치의 핵심인 커뮤니티에 대해 정리해보았습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI18.gif`}
                profileName="장재석"
                profileEng="Jang Jaeseok"
                profileMail="bm34c@naver.com"
                path="/project/vi/studio/:Jaeseok"
                work1={imageVis.JAESEOK.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/14_research_thumbnail.png`}
                name={"장재석"}
                description={"Instant NET"}
                header={`${process.env.PUBLIC_URL}/assets/features/VI/14_research_header.png`}
                featureName="Instant NET"
                featureDescription="요즘 미술관에 가면 대부분의 사람들이 유명한 작가들의 작품을 찾아 다니며 자신이 작품과 함께 찍은 사진을 SNS에 업로드 함으로서 지적인 이미지를 만들어낸다. 과연 이들은 무엇을 위해 이미지를 만들고 예술을 감상하는가. 경쟁이 과열된 현대사회에서 내재되어 있는 지적 허영심의 근원을 추적하고 앞으로 어떻게 다룰지 생각하는 계기가 되었으면 한다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI18.gif`}
                profileName="장재석"
                profileEng="Jang Jaeseok"
                profileMail="bm34c@naver.com"
                path="/project/vi/research/:Jaeseok"
                work1={imageVir.JAESEOK.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileJaeseok;
