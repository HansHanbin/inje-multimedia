import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import imageDcs from '../../works/imageDcs'

import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileSeongho() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/00_studio_thumbnail.png`}
                name={"박성호"}
                description={"혼플"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/00_studio_header.png`}
                featureName={"혼플"}
                featureDescription="혼자만의 삶을 즐기는 1인 가구가 계속 늘어나고 있는 현재 1인 가구를 위한 편의시설 상품, 서비스들이 다양하게 늘어나고 있어 성향과 선호도에 맞게 빠른 여행 일정을 세워주고 혼자 여행을 즐기면서도 나와 비슷한 취향과 선호도를 가진 사람들을 분석해 동행할 수 있는 매칭 서비스도 함께 제공하는 여행 플랜 서비스 앱 입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI6.gif`}
                profileName="박성호"
                profileEng="Park Seongho"
                profileMail="atree3682@daum.net"
                path="/project/dc/studio/:Seongho"
                work0={imageDcs.SH.work0}
                work1={imageDcs.SH.work1}
                lightMode={imageDcs.SH.lightMode}
                darkMode={imageDcs.SH.darkMode}
                link="https://cloud.protopie.io/p/3c1949d257"
                workVideo="https://www.youtube.com/embed/KaTumK1YRkg"
                protopieVideo="https://www.youtube.com/embed/_hovr0H1yZg"
              />
              <br />
                 <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/00_studio_thumbnail.png`}
                  name="박성호"
                  description="우지구직서"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/00_studio_header.png`}
                  featureName="우지구직서"
                  featureDescription="활발히 늘어나고 있는 우주산업으로 우주쓰레기가 늘어나고 있는 현재 지구로 떨어지고 있는 우주 낙하물에 대한 정보와 우주 낙하물이 지구로부터 떨어지고 있는 문제점을 재미있게 표현하고 우주 환경문제에 대한 관심을 전달하기 위해 우주 낙하물로부터 지구를 구할 새로운 직업과 서비스를 제공하는 가이드북입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI6.gif`}
                  profileName="박성호"
                  profileEng={"Park Seongho"}
                  profileMail="atree3682@daum.net"
                  path="/project/vi/studio/:Seongho"
                  work1={imageVis.SEONGHO.work1}
                />
                   <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/00_research_thumbnail.png`}
                  name="박성호"
                  description="만들지"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/00_research_header.png`}
                  featureName="만들지"
                  featureDescription="무언가를 꾸미며 만들기를 좋아하거나 자신만의 제품을 만들어 나가고 싶어 하는 사람들을 위해 종이를 활용한 제품과 다양한 문구를 직접 커스텀하고 꾸밀 수 있는 공간이 있으면 좋겠다고 생각을 하여 종이로 만들어진 다양한 제품들을 활용해 마음껏 표현해 볼 수 있는 만들지 페이퍼 숍 입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI6.gif`}
                  profileName="박성호"
                  profileEng={"Park Seongho"}
                  profileMail="atree3682@daum.net"
                  path="/project/vi/research/:Seongho"
                  work1={imageVir.SEONGHO.work1}
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileSeongho;
