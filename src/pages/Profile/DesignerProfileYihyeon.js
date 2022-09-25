import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileYihyeon() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/17_studio_thumbnail.png`}
                name={"조이현"}
                description="슬금슬금"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/17_studio_header.png`}
                featureName="슬금슬금"
                featureDescription="슬금슬금은 부담 없이 돌아다닐 수 있다는 장점을 가진 '동네'에 집중하여 사용자가 살고 있는 동네 주변의 다양한 핫플들을 소개하고 동네의 다양한 소식들을 사용자들끼리 주고받을 수 있는 앱 서비스입니다. 사용자 자신의 취향에 맞는 다양한 핫플들을 통해 그동안 미처 몰랐었던 동네의 새로운 재미를 찾을 수 있을 것입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC16.gif`}
                profileName="조이현"
                profileEng="Jo Yihyeon"
                profileMail="j2hyun980@naver.com"
                path="/project/dc/studio/:Yihyeon"
                work0={imageDcs.IH.work0}
                work1={imageDcs.IH.work1}
                work2={imageDcs.IH.work2}
                work3={imageDcs.IH.work3}
                work4={imageDcs.IH.work4}
                work5={imageDcs.IH.work5}
                work6={imageDcs.IH.work6}
                work7={imageDcs.IH.work7}
                work8={imageDcs.IH.work8}
                lightMode={imageDcs.IH.lightMode}
                darkMode={imageDcs.IH.darkMode}
                link="https://cloud.protopie.io/p/ac7da1d6b3"
                workVideo="https://www.youtube.com/embed/WKW1Y1L0Sls"
                protopieVideo="https://www.youtube.com/embed/wd8x8LmDvow"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/17_research_thumbnail.png`}
                name={"조이현"}
                description="FEELM"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/17_research_header.png`}
                featureName="FEELM"
                featureDescription="무수히 쏟아지는 방대한 양의 영상 콘텐츠 때문에 오히려 어떤 것을 보아야 할지 쉽게 선택하지 못하는 현상이 발생하고 있습니다. 필름(FEELM)은 철저히 사용자 개개인의 취향에 맞는 맞춤 콘텐츠를 추천하여 선택하는 과정을 최소화해주고 쉽게 추천 알고리즘을 수정할 수 있는 OTT 서비스입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC16.gif`}
                profileName="조이현"
                profileEng="Jo Yihyeon"
                profileMail="j2hyun980@naver.com"
                path="/project/dc/research/:Yihyeon"
                work0={imageDcr.YIHYEON.work0}
                work1={imageDcr.YIHYEON.work1}
                work2={imageDcr.YIHYEON.work2}
                work3={imageDcr.YIHYEON.work3}
                work4={imageDcr.YIHYEON.work4}
                work5={imageDcr.YIHYEON.work5}
                work6={imageDcr.YIHYEON.work6}
                work7={imageDcr.YIHYEON.work7}
                work8={imageDcr.YIHYEON.work8}
                work9={imageDcr.YIHYEON.work9}
                workVideo="https://www.youtube.com/embed/d3MU4armr4Y"
                protopieVideo="https://www.youtube.com/embed/x99etLkYjgs"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileYihyeon;
