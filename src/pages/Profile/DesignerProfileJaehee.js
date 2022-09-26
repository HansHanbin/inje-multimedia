import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileJaehee() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/11_studio_thumbnail.png`}
                name={"이재희"}
                description={"녹색위선"}
                header={`${process.env.PUBLIC_URL}/assets/features/VI/11_studio_header.png`}
                featureName="녹색위선"
                featureDescription="<녹색위선>은 친환경 정책을 표방하지만 실제로는 환경을 파괴하고 있는 기업들의 '그린 워싱'을 고발하고 소비자들의 경각심을 고취하기 위한 캠페인입니다. 이미지 포스터와 인포그래픽을 제작하여 그린 워싱에 대한 개념을 설명하고 실제 사례에 대한 정보를 쉽게 알 수 있도록 그래픽과 사진을 활용해 디자인 했습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI12.gif`}
                profileName="이재희"
                profileEng="Lee Jaehee"
                profileMail="leejh6873@naver.com"
                path="/2022/project/vi/studio/:Jaehee"
                work1={imageVis.JAEHEE.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/11_research_thumbnail.png`}
                name={"이재희"}
                description={"NO ONE HAS SAME IDENTITY"}
                header={`${process.env.PUBLIC_URL}/assets/features/VI/11_research_header.png`}
                featureName="NO ONE HAS SAME IDENTITY"
                featureDescription="'<NO ONE HAS SAME IDENTITY>는 직접 제작한 3,000,000개의 NFT 아바타 이미지 중 365개를 선정해서 일 단위 달력을 디자인 해보는 프로젝트입니다. “가장 디지털적인 요소인 NFT를 이용해 가장 아날로그적인 달력을 만들어 본다”는 행위에서 오는 아이러니가 본 프로젝트의 매력이자 재미입니다. "
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI12.gif`}
                profileName="이재희"
                profileEng="Lee Jaehee"
                profileMail="leejh6873@naver.com"
                path="/2022/project/vi/research/:Jaehee"
                work1={imageVir.JAEHEE.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileJaehee;
