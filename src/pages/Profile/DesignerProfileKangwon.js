import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileKangwon() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/17_studio_thumbnail.png`}
                name={"지강원"}
                description="동물복지 인증배지"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/17_studio_header.png`}
                featureName="동물복지 인증배지"
                featureDescription="안전한 먹거리와 생명존중 측면에서 동물복지의 필요성은 점점 증가하고 있습니다. 하지만 시중에서 동물복지를 마주하는 건 쉽지 않습니다. 그렇기에 누구나 쉽게 인식할 수 있는 동물복지 인증배지를 디자인했습니다. 그리고 이를 농가, 기업, 식당에서 사용해 소비자의 동물복지 인지가 높아지길 희망합니다. "
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI19.gif`}
                profileName="지강원"
                profileEng="Ji Kangwon"
                profileMail="wlrkddnjs777@naver.com"
                path="/2022/project/vi/studio/:Kangwon"
                work1={imageVis.KANGWON.work1}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/17_research_thumbnail.png`}
                name={"지강원"}
                description="헤픈(happen)여자"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/17_research_header.png`}
                featureName="헤픈(happen)여자"
                featureDescription="헤픈여자는 보통의 상태보다 더 많이 닳은 상태의 의미와 ‘일어나다’를 의미하는 영어 단어 happen에서 그 제목을 차용했습니다. 닳아버린 그녀에게는 도대체 무슨 일이 있었을까요. 이 짧은 단행본은 화려한 앞모습에 가려진 뒷모습에 관한 이야기입니다. 그리고 그 뒷모습을 감싸고 싶었던 한 남자의 시선을 담았습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI19.gif`}
                profileName="지강원"
                profileEng="Ji Kangwon"
                profileMail="wlrkddnjs777@naver.com"
                path="/2022/project/vi/research/:Kangwon"
                work1={imageVir.KANGWON.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileKangwon;
