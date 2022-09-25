import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileMoonju() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/4_studio_thumbnail.png`}
                name="김문주"
                description="Hey, MATE "
                header={`${process.env.PUBLIC_URL}/assets/features/DC/4_studio_header.png`}
                featureName="Hey, MATE "
                featureDescription="여러분은 소중한 사람과 어떻게 지내고 있나요? 헤이메이트는 기숙사 생활을 하면서 방을 같이 쓰는 친구이자 가족 같은 룸메이트와 함께 행복하게 생활하면서 좋은 추억을 쌓을 수 있도록 도와주는 앱입니다. 서로의 시간표를 공유하고 얼굴 보고 직접 하기 힘든 말을 전할 수 있으며 예전 룸메이트와의 소통을 통해 인연을 이어 나갈 수 있습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC4.gif`}
                profileName="김문주"
                profileEng="Kim Moonju"
                profileMail="m.jju422@gmail.com"
                path="/project/dc/studio/:Moonju"
                work0={imageDcs.MOONJU.work0}
                work1={imageDcs.MOONJU.work1}
                work2={imageDcs.MOONJU.work2}
                work3={imageDcs.MOONJU.work3}
                work4={imageDcs.MOONJU.work4}
                work5={imageDcs.MOONJU.work5}
                work6={imageDcs.MOONJU.work6}
                work7={imageDcs.MOONJU.work7}
                work8={imageDcs.MOONJU.work8}
                work9={imageDcs.MOONJU.work9}
                work10={imageDcs.MOONJU.work10}
                work11={imageDcs.MOONJU.work11}
                work12={imageDcs.MOONJU.work12}
                work13={imageDcs.MOONJU.work13}
                work14={imageDcs.MOONJU.work14}
                work15={imageDcs.MOONJU.work15}
                lightMode={imageDcs.MOONJU.lightMode}
                darkMode={imageDcs.MOONJU.darkMode}
                link="https://cloud.protopie.io/p/ebdc43c31d"
                workVideo="https://www.youtube.com/embed/TlrNnE21BZo"
                protopieVideo="https://www.youtube.com/embed/lAUZIKtuCeg"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/4_research_thumbnail.png`}
                name="김문주"
                description="차곡차곡"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/4_research_header.png`}
                featureName="차곡차곡"
                featureDescription="차곡차곡은 돈을 차곡차곡 모으자는 의미로, 올바른 소비습관을 만들고 싶은 mz세대를 위한 앱입니다. 내가 어디에 돈을 썼는지 한 눈에 볼 수 있고 그룹원과 배틀을 통해 불필요한 소비를 하지 않게 도와줍니다. 앱 내의 페이 기능을 이용해 결제하면 지출 내역이 자동으로 기록되고 해당 기능들을 워치에서도 이용할 수 있도록 구성하였습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC4.gif`}
                profileName="김문주"
                profileEng="Kim Moonju"
                profileMail="m.jju422@gmail.com"
                path="/project/dc/research/:Moonju"
                work0={imageDcr.MOONJU.work0}
                work1={imageDcr.MOONJU.work1}
                work2={imageDcr.MOONJU.work2}
                work3={imageDcr.MOONJU.work3}
                work4={imageDcr.MOONJU.work4}
                work5={imageDcr.MOONJU.work5}
                work6={imageDcr.MOONJU.work6}
                work7={imageDcr.MOONJU.work7}
                work8={imageDcr.MOONJU.work8}
                work9={imageDcr.MOONJU.work9}
                work10={imageDcr.MOONJU.work10}
                work11={imageDcr.MOONJU.work11}
                work12={imageDcr.MOONJU.work12}
                work13={imageDcr.MOONJU.work13}
                work14={imageDcr.MOONJU.work14}
                work15={imageDcr.MOONJU.work15}
                work16={imageDcr.MOONJU.work16}
                work17={imageDcr.MOONJU.work17}
                workVideo="https://www.youtube.com/embed/Eznd_dxcT44"
                protopieVideo="https://www.youtube.com/embed/Buxn_rGJX_Q"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileMoonju;
