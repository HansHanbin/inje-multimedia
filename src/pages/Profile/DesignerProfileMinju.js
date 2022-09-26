import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileMinju() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/10_studio_thumbnail.png`}
                name={"이민주"}
                description="COMMON SPACE DAY"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/10_studio_header.png`}
                featureName="COMMON SPACE DAY"
                featureDescription="정부 주도의 우주 경쟁을 펼치던 과거와 다르게 민간이 우주 사업을 주도하는 뉴 스페이스 시대가 다가왔습니다. 우주에서 새로운 비즈니스 기회가 열리고 있으며, 이에 따라 커먼 스페이스 데이를 새롭게 기획하였습니다. 우주 비즈니스 정보와 관련 포스터 등으로 누구에게나 열려있는 우주, 조금 더 친근하게 우주를 느낄 수 있도록 했습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI11.gif`}
                profileName="이민주"
                profileEng="Lee Minju"
                profileMail="m06090@naver.com"
                path="/2022/project/vi/studio/:Minju"
                work1={imageVis.MINJU.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/10_research_thumbnail.png`}
                name={"이민주"}
                description="쓰담해"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/10_research_header.png`}
                featureName="쓰담해"
                featureDescription="기후 위기와 각종 오염이 심각한 상황에서 환경 보호와 함께 지구의 건강, 나의 건강을 둘 다 챙길 수 있는 쓰담해 플로깅 키트를 제작하고 디자인했습니다. 누구나 언제든지 쉽게 플로깅을 할 수 있으며 지구 캐릭터로 친근함을 더하고자 했습니다. 쓰담해 플로깅 키트로 지구와 나의 건강을 함께 챙겨 보는 것은 어떨까요?"
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI11.gif`}
                profileName="이민주"
                profileEng="Lee Minju"
                profileMail="m06090@naver.com"
                path="/2022/project/vi/research/:Minju"
                work1={imageVir.MINJU.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileMinju;
