import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileMingyu() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/6_studio_thumbnail.png`}
                name="박민규"
                description="소담"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/6_studio_header.png`}
                featureName="소담"
                featureDescription="사춘기 혹은 성인이 되고서 가족 간의 소통이 점점 없어지는 가정이 늘어나고 있으며 그로 인해 가족이지만 불편함을 느끼거나 같은 공간에 있으면 어색함을 느끼는 사람도 증가하고 있습니다. 소담은 이러한 문제점을 해결하는 데 도움을 주는 애플리케이션이며 가족 간의 소통 개선을 목적으로 프로젝트를 시작하게 되었습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC6.gif`}
                profileName="박민규"
                profileEng={"Park Mingyu"}
                profileMail="parkmin9yu@naver.com"
                path="/2022/project/dc/studio/:Mingyu"
                work0={imageDcs.MINGYU.work0}
                work1={imageDcs.MINGYU.work1}
                work2={imageDcs.MINGYU.work2}
                work3={imageDcs.MINGYU.work3}
                work4={imageDcs.MINGYU.work4}
                work5={imageDcs.MINGYU.work5}
                work6={imageDcs.MINGYU.work6}
                work7={imageDcs.MINGYU.work7}
                work8={imageDcs.MINGYU.work8}
                work9={imageDcs.MINGYU.work9}
                work10={imageDcs.MINGYU.work10}
                work11={imageDcs.MINGYU.work11}
                work12={imageDcs.MINGYU.work12}
                work13={imageDcs.MINGYU.work13}
                work14={imageDcs.MINGYU.work14}
                work15={imageDcs.MINGYU.work15}
                work16={imageDcs.MINGYU.work16}
                work17={imageDcs.MINGYU.work17}
                lightMode={imageDcs.MINGYU.lightMode}
                darkMode={imageDcs.MINGYU.darkMode}
                link="https://cloud.protopie.io/p/8ad84e1d51"
                workVideo="https://www.youtube.com/embed/zpK-4o1LtGM"
                protopieVideo="https://www.youtube.com/embed/e06_a_WuFN8"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/6_research_thumbnail.png`}
                name={"박민규"}
                description={"나드리"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/6_research_header.png`}
                featureName={"나드리"}
                featureDescription={
                  "나드리는 교통약자들을 위한 길안내 서비스 입니다. 단순 길안내가 아닌 위험지역과 장애물을 피해 경로를 알려주며, 사용자 주변 편의시설의 위치와 예약이 가능한 콜택시 기능을 제공하고 있습니다. 그럼 지금 즐겁게 나드리를 떠나볼까요?﻿ "
                }
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC6.gif`}
                profileName={"박민규"}
                profileEng={"Park Mingyu"}
                profileMail="parkmin9yu@naver.com"
                path="/2022/project/dc/research/:Mingyu"
                work0={imageDcr.MINGYU.work0}
                work1={imageDcr.MINGYU.work1}
                work2={imageDcr.MINGYU.work2}
                work3={imageDcr.MINGYU.work3}
                work4={imageDcr.MINGYU.work4}
                work5={imageDcr.MINGYU.work5}
                work6={imageDcr.MINGYU.work6}
                work7={imageDcr.MINGYU.work7}
                work8={imageDcr.MINGYU.work8}
                work9={imageDcr.MINGYU.work9}
                work10={imageDcr.MINGYU.work10}
                work11={imageDcr.MINGYU.work11}
                work12={imageDcr.MINGYU.work12}
                work13={imageDcr.MINGYU.work13}
                work14={imageDcr.MINGYU.work14}
                work15={imageDcr.MINGYU.work15}
                work16={imageDcr.MINGYU.work16}
                workVideo={"https://www.youtube.com/embed/1rPwE6x4uEQ"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileMingyu;
