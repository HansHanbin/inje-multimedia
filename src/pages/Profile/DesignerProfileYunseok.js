import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileYunseok() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/3_studio_thumbnail.png`}
                name={"곽윤석"}
                description="A.C(Area Character)"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/3_studio_header.png`}
                featureName="A.C(Area Character)"
                featureDescription="A.C는 지자체 캐릭터라는 뜻을 가졌으며 지금까지 수없이 많이 나온 지자체 캐릭터 들이 잊혀 가고 있는 것을 방지하고자 카카오톡과 연동하여 카카오톡에서는 지자체 캐릭터를 이모티콘으로 다운을 받을 수 있고 캐릭터를 이용한 퀴즈를 맞히면 포인트 를 적립하여 포인트가 누적되면 지역상품권을 구매할 수 있도록 제작되었습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI3.gif`}
                profileName={"곽윤석"}
                profileEng={"Kwak Yunseok"}
                profileMail="dbstjr_98@naver.com"
                path="/project/vi/studio/:Yunseok"
                work1={imageVis.YUNSEOK.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/3_research_thumbnail.png`}
                name={"곽윤석"}
                description="Bum Stay"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/3_research_header.png`}
                featureName="Bum Stay"
                featureDescription="다양한 콘셉트들의 카페들이 인기를 끌고 있는 가운데 범 스테이는 카페에 픽셀이라 는 콘셉트를 접목시켜 픽셀이 위주가 되는 카페이며 종이를 이용한 패키지와 주된 범 캐릭터(캐릭터의 호랑이는 98년생의 범띠에서 따온 캐릭터)를 이용한 종이접기를 이 용해 볼 수 있으며 온라인에서도 게더타운을 이용하여 메타버스로 즐길 수 있다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI3.gif`}
                profileName={"곽윤석"}
                profileEng={"Kwak Yunseok"}
                profileMail="dbstjr_98@naver.com"
                path="/project/vi/research/:Yunseok"
                work1={imageVir.YUNSEOK.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileYunseok;
