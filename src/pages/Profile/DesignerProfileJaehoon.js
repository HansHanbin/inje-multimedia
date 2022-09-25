import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVis from "../../works/imageVis";
import imageVir from "../../works/imageVir";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileJaehoon() {
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
            <div className="profile-projects">
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/7_studio_thumbnail.png`}
                name={"백제훈"}
                description="당신은 왜 당신이 싫은가"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/7_studio_header.png`}
                featureName="당신은 왜 당신이 싫은가"
                featureDescription="자존감이랑 자신을 얼마나 존중하냐에 대한 감정을 다루는 단어입니다. 흔히들 자존감이 높은 것이 좋고 그렇게 되기 위해 노력을 하라곤 하죠. 하지만 꼭 그럴 필요가 있을까요? 이 간단한 테스트는 자존감 저하를 하나의 성격유형으로 취급하고 또 그에 따른 다양한 장점을 소개해줍니다. 그 모습도 다양한 사람들의 다양한 성향중 하나일뿐 애써 바꿔나갈 필요는 없으니까요."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI8.gif`}
                profileName="백제훈"
                profileEng="Baek Jaehoon"
                profileMail="bjh990225@gmail.com"
                path="/project/vi/studio/:Jaehoon"
                work1={imageVis.JAEHOON.work1}
                work2={imageVis.JAEHOON.work2}
                work3={imageVis.JAEHOON.work3}
                work4={imageVis.JAEHOON.work4}
                work5={imageVis.JAEHOON.work5}
                work6={imageVis.JAEHOON.work6}
                work7={imageVis.JAEHOON.work7}
                work8={imageVis.JAEHOON.work8}
                work9={imageVis.JAEHOON.work9}
                work10={imageVis.JAEHOON.work10}
                work11={imageVis.JAEHOON.work11}
                work12={imageVis.JAEHOON.work12}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/7_research_thumbnail.png`}
                name={"백제훈"}
                description="Shall we play?"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/7_research_header.png`}
                featureName="Shall we play?"
                featureDescription="플레잉 카드. 카드놀이 혹은 마술에 사용되는 트럼프 카드라고도 불리는 이 카드들은 오늘 날 다양한 컨셉, 다양한 디자인을 선보이기도 합니다. 카드놀이뿐만 아니라 수집, 전시용으로 사용되기도 합니다. 이 트럼프 카드 세트는 약간의 무서움, 약간의 기괴함을 보여줍니다. 놀이용으로도 가능하지만 장식용으로 사용하게 될 경우 이 무시무시한 카드는 진가를 발휘하게 될 것입니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI8.gif`}
                profileName="백제훈"
                profileEng="Baek Jaehoon"
                profileMail="bjh990225@gmail.com"
                path="/project/vi/research/:Jaehoon"
                work1={imageVir.JAEHOON.work1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileJaehoon;
