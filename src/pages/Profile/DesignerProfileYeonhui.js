import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileYeonhui() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/5_studio_thumbnail.png`}
                name="노연희"
                description="함께 읽는 북코드"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/5_studio_header.png`}
                featureName="함께 읽는 북코드"
                featureDescription=" '독서는 중요하다!' 는 말은 이 프로젝트를 통해 가장 먼저 전달하고 싶은 이야기입니다. '인스타그래머블 책', '북스타그램', '책사기로 스트레스 풀기' 등 책에 대한 관심이 늘어나고 있지만 실생활에서 독서를 실천하는 '실제 독서율'은 점점 줄어들고 있습니다. 북코드는 독서를 방해하는 요인 분석을 통해 밀착 독서 서비스를 제공합니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI5.gif`}
                profileName="노연희"
                profileEng={"Noh Yeonhui"}
                profileMail="wkdch5538@naver.com"
                path="/project/vi/studio/:Yeonhui"
                work1={imageVis.YEONHUI.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/5_research_thumbnail.png`}
                name="노연희"
                description="아름다운 바다 상점"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/5_research_header.png`}
                featureName="아름다운 바다 상점"
                featureDescription="해양 오염 문제는 더이상 외면할 수 없는 심각한 문제고, 쓰레기로 인해 다양한 해양 생물이 고통 속에서 죽어가고 있습니다. 바다 상점에서는 해양 오염의 원인이 되는 미세 플라스틱, 폐그물에 대한 이야기를 담은 친환경 타이벡 가방을 제작해 해양 오염에 대한 경각심을 주고, 사람들에게 해양 오염에 관심을 갖자는 메세지를 전달하고자 합니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI5.gif`}
                profileName="노연희"
                profileEng={"Noh Yeonhui"}
                profileMail="wkdch5538@naver.com"
                path="/project/vi/research/:Yeonhui"
                work1={imageVir.YEONHUI.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileYeonhui;
