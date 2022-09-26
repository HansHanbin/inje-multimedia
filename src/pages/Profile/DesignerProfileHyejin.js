import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileHyejin() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/1_studio_thumbnail.png`}
                name={"구혜진"}
                description={"MARITY"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/1_studio_header.png`}
                featureName="MARITY"
                featureDescription="해수면의 상승으로 삶의 터전을 잃은 우리는 현재 해상 도시에 거주 중입니다. 한정된 자원 속에서 살아남기 위해 선택한 자급자족의 삶, 우리는 고도화된 인공지능을 활용해 해상 도시의 더 나은 미래를 만들어가려고 합니다. 머지않아 만나게 될 자급자족 뉴노멀 시대! 마리티와 함께 미리 만나 보아요! "
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC1.gif`}
                profileName="구혜진"
                profileEng="Gu Hyejin"
                profileMail="fpqlt_326998@naver.com"
                path="/2022/project/dc/studio/:Hyejin"
                work0={imageDcs.HYEJIN.work0}
                work1={imageDcs.HYEJIN.work1}
                work2={imageDcs.HYEJIN.work2}
                work3={imageDcs.HYEJIN.work3}
                work4={imageDcs.HYEJIN.work4}
                work5={imageDcs.HYEJIN.work5}
                work6={imageDcs.HYEJIN.work6}
                work7={imageDcs.HYEJIN.work7}
                work8={imageDcs.HYEJIN.work8}
                work9={imageDcs.HYEJIN.work9}
                work10={imageDcs.HYEJIN.work10}
                work11={imageDcs.HYEJIN.work11}
                work12={imageDcs.HYEJIN.work12}
                work13={imageDcs.HYEJIN.work13}
                work14={imageDcs.HYEJIN.work14}
                work15={imageDcs.HYEJIN.work15}
                work16={imageDcs.HYEJIN.work16}
                work17={imageDcs.HYEJIN.work17}
                work18={imageDcs.HYEJIN.work18}
                work19={imageDcs.HYEJIN.work19}
                work20={imageDcs.HYEJIN.work20}
                work21={imageDcs.HYEJIN.work21}
                work22={imageDcs.HYEJIN.work22}
                work23={imageDcs.HYEJIN.work23}
                work24={imageDcs.HYEJIN.work24}
                work25={imageDcs.HYEJIN.work25}
                work26={imageDcs.HYEJIN.work26}
                work27={imageDcs.HYEJIN.work27}
                lightMode={imageDcs.HYEJIN.lightMode}
                darkMode={imageDcs.HYEJIN.darkMode}
                link="https://cloud.protopie.io/p/434db47ec1"
                workVideo="https://www.youtube.com/embed/4Kk_j-Va6Ts"
                protopieVideo="https://www.youtube.com/embed/zO7n7g3z1r4"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/1_research_thumbnail.png`}
                name="구혜진"
                description="IV"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/1_research_header.png`}
                featureName="IV"
                featureDescription="우주 산업이 나날이 발전하고 있는 지금, 기술의 발전으로 전문적으로 훈련받은 우주비행사 뿐만 아니라 민간인들도 우주에 갈 수 있게 되었습니다. 저는 더 발전된 미래에는 민간인이 우주왕복선을 개인소유할 수 있을 것이라고 상상했고, 일상에서도 쉽게 사용이 가능한 우주선 IOT 서비스를 만들어보고 싶어 이 프로젝트를 기획하게 되었습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC1.gif`}
                profileName="구혜진"
                profileEng="Gu Hyejin"
                profileMail="fpqlt_326998@naver.com"
                path="/2022/project/dc/research/:Hyejin"
                work0={imageDcr.HYEJIN.work0}
                work1={imageDcr.HYEJIN.work1}
                work2={imageDcr.HYEJIN.work2}
                work3={imageDcr.HYEJIN.work3}
                work4={imageDcr.HYEJIN.work4}
                work5={imageDcr.HYEJIN.work5}
                work6={imageDcr.HYEJIN.work6}
                work7={imageDcr.HYEJIN.work7}
                work8={imageDcr.HYEJIN.work8}
                work9={imageDcr.HYEJIN.work9}
                work10={imageDcr.HYEJIN.work10}
                work11={imageDcr.HYEJIN.work11}
                work12={imageDcr.HYEJIN.work12}
                work13={imageDcr.HYEJIN.work13}
                work14={imageDcr.HYEJIN.work14}
                work15={imageDcr.HYEJIN.work15}
                work16={imageDcr.HYEJIN.work16}
                work17={imageDcr.HYEJIN.work17}
                workVideo="https://www.youtube.com/embed/TA93DL38Yuw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DesignerProfileHyejin;
