import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileNayoung() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/3_studio_thumbnail.png`}
                name={"김나영"}
                description="SPACE JANITOR"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/3_studio_header.png`}
                featureName="SPACE JANITOR"
                featureDescription="우주쓰레기를 처리하도록 도와주는 미래(2100년대) 우주쓰레기 수거 서비스로 우주쓰레기의 끝없는 증가로 발생하는 미래의 문제를 해결하기 위해 만들었습니다. 사용자는 우주선 조종 자격증 취득 인증 후 서비스 이용이 가능하며 우주선과 SPACE JANITOR의 태블릿을 연동하여 사용한다는 가정을 통해 서비스를 제작하였습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC3.gif`}
                profileName={"김나영"}
                profileEng={"Kim Nayoung"}
                profileMail="sdf02033@gmail.com"
                path="/project/dc/studio/:Nayoung"
                work0={imageDcs.NAYOUNG.work0}
                work1={imageDcs.NAYOUNG.work1}
                work2={imageDcs.NAYOUNG.work2}
                work3={imageDcs.NAYOUNG.work3}
                work4={imageDcs.NAYOUNG.work4}
                work5={imageDcs.NAYOUNG.work5}
                work6={imageDcs.NAYOUNG.work6}
                work7={imageDcs.NAYOUNG.work7}
                work8={imageDcs.NAYOUNG.work8}
                work9={imageDcs.NAYOUNG.work9}
                work10={imageDcs.NAYOUNG.work10}
                work11={imageDcs.NAYOUNG.work11}
                work12={imageDcs.NAYOUNG.work12}
                work13={imageDcs.NAYOUNG.work13}
                work14={imageDcs.NAYOUNG.work14}
                lightMode={imageDcs.NAYOUNG.lightMode}
                darkMode={imageDcs.NAYOUNG.darkMode}
                link="https://cloud.protopie.io/p/d490213dae"
                workVideo="https://www.youtube.com/embed/fHpS1nphov8"
                protopieVideo="https://www.youtube.com/embed/ATaM1WEAtqs"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/3_research_thumbnail.png`}
                name={"김나영"}
                description={"X RONE"}
                header={`${process.env.PUBLIC_URL}/assets/features/DC/3_research_header.png`}
                featureName="X RONE"
                featureDescription={
                  "지능형 무인 비행체인 ‘액체 수소 드론’을 이용한 드론 호출 서비스로 향후 기후변화 대응을 위한 중요 추세인 탄소 중립 실천이 가능한 서비스입니다. 드론을 이용하여 온실가스 감축, 미세먼지 저감, 해외 에너지 의존도를 감소하며 스마트 물류 플랫폼의 지속 가능한 가치와 미래의 새로운 비전 제시가 가능하다고 생각하여 서비스를 제작하였습니다."
                }
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC3.gif`}
                profileName={"김나영"}
                profileEng={"Kim Nayoung"}
                profileMail="sdf02033@gmail.com"
                path="/project/dc/research/:Nayoung"
                work0={imageDcr.NAYOUNG.work0}
                work1={imageDcr.NAYOUNG.work1}
                work2={imageDcr.NAYOUNG.work2}
                work3={imageDcr.NAYOUNG.work3}
                work4={imageDcr.NAYOUNG.work4}
                work5={imageDcr.NAYOUNG.work5}
                work6={imageDcr.NAYOUNG.work6}
                work7={imageDcr.NAYOUNG.work7}
                work8={imageDcr.NAYOUNG.work8}
                work9={imageDcr.NAYOUNG.work9}
                work10={imageDcr.NAYOUNG.work10}
                work11={imageDcr.NAYOUNG.work11}
                workVideo="https://www.youtube.com/embed/SF-Zxh2jNoo"
                protopieVideo="https://www.youtube.com/embed/NaT0JGHcGIc"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileNayoung;
