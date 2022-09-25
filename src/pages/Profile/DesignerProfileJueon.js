import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVir from "../../works/imageVir";
import imageVis from "../../works/imageVis";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileJueon() {
  const location = useLocation();
  const src = location.state.src;
  const name = location.state.name;
  const eng = location.state.eng;
  const mail = location.state.mail;
  const major = location.state.major;
  const major2 = location.state.major2;
  const work1 = location.state.work1;
  const work2 = location.state.work2;

  console.log(location);

  const { pathname } = useLocation();

  const [workOne, setWorkOne] = useState(true);
  const [workTwo, setWorkTwo] = useState(true);

  const onLoadOne = () => {
    if (work1 === null) {
      setWorkOne(false);
    } else {
      setWorkOne(true);
    }
  };

  const onLoadTwo = () => {
    if (work2 === null) {
      setWorkTwo(false);
    } else {
      setWorkTwo(true);
    }
  };

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
            <div className="profile-projects solo">
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/1_studio_thumbnail.png`}
                name={"강주언"}
                description={"나의 푸드 마일리지는?"}
                header={`${process.env.PUBLIC_URL}/assets/features/VI/1_studio_header.png`}
                featureName="나의 푸드 마일리지는?"
                featureDescription="먹은 음식의 푸드 마일리지가 종류 별로 얼마나 쌓여있는지 나타내어주어 환경을 한번 더 생각하며 먹은 음식 영양분을 분석하여 식습관을 체크 해줍니다. 푸드 마일리지를 입력하였을 때 먹은 음식 정보을 분석하여 피부 미용이나 다이어트 등 여러 건강에 관한 앱들과 연동하여서 다양한 정보를 제공해준는 서비스를 구성하려합니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI1.gif`}
                profileName="강주언"
                profileEng="Kang Jueon"
                profileMail="3349520@naver.com"
                path="/project/vi/studio/:Jueon"
                work1={imageVis.JUEON.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileJueon;
