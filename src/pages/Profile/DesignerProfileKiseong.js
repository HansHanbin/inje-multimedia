import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileKiseong() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/2_studio_thumbnail.png`}
                name="김기성"
                description="PLANET"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/2_studio_header.png`}
                featureName="PLANET"
                featureDescription="첫 출시 당시엔 낯설게 다가왔던 스마트폰이 어느새 우리 생활 속에서 일상이 되었듯이, 가까운 시기에 메타버스가 새로운 일상이 될 것이며, 그 속에서 많은 시간을 보내게 될 것입니다. 사람들의 관심사와 콘텐츠 체류 시간에 따라 주목받는 소셜앱은 변화하고 진화해왔습니다. 메타버스 시대의 소셜앱은 어떤 기능이 필요하고 어떤 모습일까요?"
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC2.gif`}
                profileName="김기성"
                profileEng="Kim Kiseong"
                profileMail="kimkiseong98@gmail.com"
                path="/2022/project/dc/studio/:Kiseong"
                work0={imageDcs.KISEONG.work0}
                work1={imageDcs.KISEONG.work1}
                work2={imageDcs.KISEONG.work2}
                work3={imageDcs.KISEONG.work3}
                work4={imageDcs.KISEONG.work4}
                work5={imageDcs.KISEONG.work5}
                work6={imageDcs.KISEONG.work6}
                work7={imageDcs.KISEONG.work7}
                work8={imageDcs.KISEONG.work8}
                work9={imageDcs.KISEONG.work9}
                work10={imageDcs.KISEONG.work10}
                work11={imageDcs.KISEONG.work11}
                work12={imageDcs.KISEONG.work12}
                work13={imageDcs.KISEONG.work13}
                work14={imageDcs.KISEONG.work14}
                work15={imageDcs.KISEONG.work15}
                work16={imageDcs.KISEONG.work16}
                work17={imageDcs.KISEONG.work17}
                work18={imageDcs.KISEONG.work18}
                work19={imageDcs.KISEONG.work19}
                lightMode={imageDcs.KISEONG.lightMode}
                darkMode={imageDcs.KISEONG.darkMode}
                link="https://cloud.protopie.io/p/554c122585"
                workVideo="https://www.youtube.com/embed/LwJJYbap774"
                protopieVideo="https://www.youtube.com/embed/Ujb9hjFPLLA"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/2_research_thumbnail.png`}
                name={"김기성"}
                description="circular"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/2_research_header.png`}
                featureName="circular"
                featureDescription="다양한 브랜드들이 NFT를 긍정적으로 전개하고 있지만 판매는 대형 거래소에서, 혜택이나 커뮤니티 기능은 자사나 다른 플랫폼에서 이용하는 분산된 형태를 띠고 있습니다. 사용자 중점의 통합된 플랫폼을 구축하여 비즈니스 접근성을 높여 NFT의 가치 신뢰성을 확보하고자 circular 서비스를 제작하게 되었습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC2.gif`}
                profileName="김기성"
                profileEng="Kim Kiseong"
                profileMail="kimkiseong98@gmail.com"
                path="/2022/project/dc/research/:Kiseong"
                work0={imageDcr.KISEONG.work0}
                work1={imageDcr.KISEONG.work1}
                work2={imageDcr.KISEONG.work2}
                work3={imageDcr.KISEONG.work3}
                work4={imageDcr.KISEONG.work4}
                work5={imageDcr.KISEONG.work5}
                work6={imageDcr.KISEONG.work6}
                work7={imageDcr.KISEONG.work7}
                work8={imageDcr.KISEONG.work8}
                work9={imageDcr.KISEONG.work9}
                work10={imageDcr.KISEONG.work10}
                work11={imageDcr.KISEONG.work11}
                work12={imageDcr.KISEONG.work12}
                work13={imageDcr.KISEONG.work13}
                work14={imageDcr.KISEONG.work14}
                work15={imageDcr.KISEONG.work15}
                work16={imageDcr.KISEONG.work16}
                work17={imageDcr.KISEONG.work17}
                work18={imageDcr.KISEONG.work18}
                workVideo="https://www.youtube.com/embed/_yJoQ4M3stE"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileKiseong;
