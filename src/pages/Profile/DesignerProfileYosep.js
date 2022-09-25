import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileYosep() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/18_studio_thumbnail.png`}
                name={"최요셉"}
                description="식용곤충 브랜드 디자인"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/18_studio_header.png`}
                featureName="식용곤충 브랜드 디자인"
                featureDescription="2050년에는 90억 명에 이를 것으로 전망된다. 현재보다 2배 정도의 식량이 더 필요하다 미래의 기아 퇴치, 영양보충, 환경오염 등을 위한 대비로 전 세계가 식용 곤충을 주목하게 되었다 지구촌 모두가 걱정없이 먹을 수 있는 식품을 만들겠다는 열정과 실력으로 만들어진 대한민국 대표 친환경 단백질식품소재회사로서 우수한 품질의 소재 및 식품을 선보이고 있다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI16.gif`}
                profileName="최요셉"
                profileEng="Choi Yosep"
                profileMail="tozerothree@gmail.com"
                path="/project/vi/studio/:Yosep"
                work1={imageVis.YOSEP.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/18_research_thumbnail.png`}
                name={"최요셉"}
                description="감싸다"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/18_research_header.png`}
                featureName="감싸다"
                featureDescription="날카로운 물건을 버리는 방법이 알려지지 않아 버리는 방식도 제각각이다. 인간의 편의를 위해 만들어진 물건이 고유한 역할이나 기능을 완수하고 인간의 곁을 떠날 때 나타나는 불편함을 감싸주는 것으로 제 기능을 다 한 물건이 타인에게 큰 위협으로 다가올 수 있음을 알리고, 사고를 미연에 방지하기 위한 타인을 향한 작은 손짓과 같은 캠페인이다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI16.gif`}
                profileName="최요셉"
                profileEng="Choi Yosep"
                profileMail="tozerothree@gmail.com"
                path="/project/vi/research/:Yosep"
                work1={imageVir.YOSEP.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileYosep;
