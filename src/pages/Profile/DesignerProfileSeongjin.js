import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileSeongjin() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/15_studio_thumbnail.png`}
                name={"정성진"}
                description={"메타버스 회의방법"}
                header={`${process.env.PUBLIC_URL}/assets/features/VI/15_studio_header.png`}
                featureName="메타버스 회의방법"
                featureDescription="다양한 회의 방식과 기술의 발전에 따른 회의의 변화를 살펴보고 사람들에게 알려줌으로써 회의에 대한 관심을 이끌고 상황에 맞는 적절한 방식을 선택할 수 있도록 돕습니다. 메타버스 플랫폼 ‘게더타운’을 이용한 메타버스 회의장을 제작하여 온라인상에서 사람들이 필요 방식에 맞는 회의장을 메타버스 안에서 이용할 수 있도록 제작했습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI15.gif`}
                profileName="정성진"
                profileEng="Jeong Seongjin"
                profileMail="jsjpati@naver.com"
                path="/project/vi/studio/:Seongjin"
                work1={imageVis.SEONGJIN.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/15_research_thumbnail.png`}
                name={"정성진"}
                description={"책이에어"}
                header={`${process.env.PUBLIC_URL}/assets/features/VI/15_research_header.png`}
                featureName="책이에어"
                featureDescription="사람들은 저마다의 다른 목적을 가지고 여행을 떠납니다. 여행은 과거의 힘든 일을 잊게 하고 미래를 나아갈 활력을 우리에게 줍니다. 하지만 일상을 벗어나 나를 위한 시간을 가진다는 것이 대부분의 사람들에게는 쉽지 않은 일입니다. 책이에어는 비행기를 컨셉으로 하여 사람들에게 익숙한 공간인 카페에서 책을 통해여행의 활력을 느낄 수 있게 해줍니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI15.gif`}
                profileName="정성진"
                profileEng="Jeong Seongjin"
                profileMail="jsjpati@naver.com"
                path="/project/vi/research/:Seongjin"
                work1={imageVir.SEONGJIN.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileSeongjin;
