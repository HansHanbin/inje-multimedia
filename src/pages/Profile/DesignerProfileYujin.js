import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileYujin() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/19_studio_thumbnail.png`}
                name={"허유진"}
                description="비건 복합문화공간 오롯"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/19_studio_header.png`}
                featureName="비건 복합문화공간 오롯"
                featureDescription="우리 사회는 비건 마케팅 선호를 넘어 이제는 소비자가 적극적으로 각자만의 베지테리언 생활과 문화에 정착하고 있습니다. 이를 통해 기본적인 스토어에 오로지 베지테리언 상품만을 카테고리별로 판매하는 구매 서비스와 더불어 베지테리언 유형별로 채식 관련 문화도 경험할 수 있는 베지테리언 복합문화공간 ‘오롯’을 만들게 되었습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI17.gif`}
                profileName="허유진"
                profileEng="Heo Yujin"
                profileMail="heoyujin9041@gmail.com"
                path="/project/vi/studio/:Yujin"
                work1={imageVis.YUJIN.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/19_research_thumbnail.png`}
                name={"허유진"}
                description="UHOK"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/19_research_header.png`}
                featureName="UHOK"
                featureDescription="유혹은 유(You)+혹(惑) ‘너를 혹하게 한다’라는 매혹적인 메시지를 담은 인센스 브랜드입니다. 유혹의 인센스 향을 맡으면 자신도 모르게 홀릴 정도로 치명적이다는 이미지를 신화 속에 나오는 ‘세이렌’으로 설정하였습니다. 세이렌과 항해사 둘 사이에 펼쳐지는 새로운 이야기와 일러스트를 담은 인센스를 느껴보세요. "
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI17.gif`}
                profileName="허유진"
                profileEng="Heo Yujin"
                profileMail="heoyujin9041@gmail.com"
                path="/project/vi/research/:Yujin"
                work1={imageVir.YUJIN.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileYujin;
