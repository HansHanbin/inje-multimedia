import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageVir from "../../works/imageVir";
import imageVis from "../../works/imageVis";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileHyejin() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/VI/12_studio_thumbnail.png`}
                name={"임현우"}
                description="Cheers to 'Active Senior'"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/12_studio_header.png`}
                featureName="Cheers to 'Active Senior'"
                featureDescription="이 작품들은 모두 노인들을 위한 ‘실버 디자인’입니다. 다양한 타겟을 고려해 여러 가지 스타일의 작품을 제작했습니다. 젊은 층들이 보기 쉬운 인포그래픽 포스터를 시작으로 중후한 매력을 뽐내는 복지 인증 서비스 제도, 모두가 부담 없이 접근할 수 있는 실버 매장 스티커들까지 한 주제로 컨셉이 다른 다양한 작품을 시도했습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI13.gif`}
                profileName="임현우"
                profileEng="Lim Hyeonwoo"
                profileMail="gkrktk123@naver.com"
                path="/project/vi/studio/:Hyeonwoo"
                work1={imageVis.HYEONWOO.work1}
                work2={imageVis.HYEONWOO.work2}
                work3={imageVis.HYEONWOO.work3}
                work4={imageVis.HYEONWOO.work4}
                work5={imageVis.HYEONWOO.work5}
                work6={imageVis.HYEONWOO.work6}
                work7={imageVis.HYEONWOO.work7}
                work8={imageVis.HYEONWOO.work8}
                work9={imageVis.HYEONWOO.work9}
                work10={imageVis.HYEONWOO.work10}
                work11={imageVis.HYEONWOO.work11}
                work12={imageVis.HYEONWOO.work12}
                work13={imageVis.HYEONWOO.work13}
                work14={imageVis.HYEONWOO.work14}
                work15={imageVis.HYEONWOO.work15}
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/VI/12_research_thumbnail.png`}
                name={"임현우"}
                description="Lily's Dream"
                header={`${process.env.PUBLIC_URL}/assets/features/VI/12_research_header.png`}
                featureName="Lily's Dream"
                featureDescription="‘릴리의 꿈’은 어른들을 위한 동화입니다. 동화는 항상 아름다운 이야기들이 주로 이룹니다. 그러나 이 동화책은 아름답지 않은 현실의 이야기를 신비한 판타지적 요소들을 통해 풀어냈습니다. 빈번하게 일어나는 아동학대의 모습을 상징적인 형태와 보여주며 경각심을 일깨웁니다. 이 책이 많은 이들의 지침서가 되었으면 하는 마음으로 제작했습니다."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI13.gif`}
                profileName="임현우"
                profileEng="Lim Hyeonwoo"
                profileMail="gkrktk123@naver.com"
                path="/project/vi/research/:Hyeonwoo"
                work1={imageVir.HYEONWOO.work1}
                work2={imageVir.HYEONWOO.work2}
                work3={imageVir.HYEONWOO.work3}
                work4={imageVir.HYEONWOO.work4}
                work5={imageVir.HYEONWOO.work5}
                work6={imageVir.HYEONWOO.work6}
                work7={imageVir.HYEONWOO.work7}
                work8={imageVir.HYEONWOO.work8}
                work9={imageVir.HYEONWOO.work9}
                work10={imageVir.HYEONWOO.work10}
                work11={imageVir.HYEONWOO.work11}
                work12={imageVir.HYEONWOO.work12}
                work13={imageVir.HYEONWOO.work13}
                work14={imageVir.HYEONWOO.work14}
                work15={imageVir.HYEONWOO.work15}
                work16={imageVir.HYEONWOO.work16}
                work17={imageVir.HYEONWOO.work17}
                work18={imageVir.HYEONWOO.work18}
                work19={imageVir.HYEONWOO.work19}
                work20={imageVir.HYEONWOO.work20}
                work21={imageVir.HYEONWOO.work21}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileHyejin;
