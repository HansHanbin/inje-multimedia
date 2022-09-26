import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../../components/HeaderDark";
import imageDcr from "../../works/imageDcr";
import imageDcs from "../../works/imageDcs";
import FeaturesItem from "../../components/Features/FeaturesItem";

function DesignerProfileChanghyun() {
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
                src={`${process.env.PUBLIC_URL}/assets/features/DC/18_studio_thumbnail.png`}
                name={"지창현"}
                description="HISMING"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/18_studio_header.png`}
                featureName="HISMING"
                featureDescription="히스밍은 자신을 가꾸고 관리하는 그루밍족을 위한 뷰티 가이드 서비스입니다. 매년 남성의 뷰티 관심도가 증가함에 따라,  남성 화장품 시장 또한 꾸준히 성장 중입니다. 히스밍은 남성 뷰티의 진입장벽을 낮추고 다양한 고민들을 해결할 수 있습니다. 그루밍족 대표 족장 ‘히스’에게 뷰티에 대한 모든 것을 전수받아 새로운 족장에 도전해 보세요."
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC17.gif`}
                profileName="지창현"
                profileEng="Ji Changhyun"
                profileMail="jchyundesign@gmail.com"
                path="/2022/project/dc/studio/:Changhyun"
                work0={imageDcs.CHANGHYUN.work0}
                work1={imageDcs.CHANGHYUN.work1}
                work2={imageDcs.CHANGHYUN.work2}
                work3={imageDcs.CHANGHYUN.work3}
                work4={imageDcs.CHANGHYUN.work4}
                work5={imageDcs.CHANGHYUN.work5}
                lightMode={imageDcs.CHANGHYUN.lightMode}
                darkMode={imageDcs.CHANGHYUN.darkMode}
                link={
                  "https://cloud.protopie.io/p/447a7625ce?touchHint=true&ui=true&scaleToFit=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&playSpeed=1&playerAppPopup=true"
                }
                workVideo="https://www.youtube.com/embed/qXHlphxQQTo"
                protopieVideo="https://www.youtube.com/embed/jmMlEZI8XPE"
              />
              <FeaturesItem
                src={`${process.env.PUBLIC_URL}/assets/features/DC/18_research_thumbnail.png`}
                name={"지창현"}
                description="MUNASIS"
                header={`${process.env.PUBLIC_URL}/assets/features/DC/18_research_header.png`}
                featureName="MUNASIS"
                featureDescription="문아시스는 공통의 관심사를 가진 사람들을 하나로 연결해 주는 서비스입니다. 메타버스 공간인 문아시스에서 다양한 사람들과 작품에 대해서 이야기하고 함께 작품을 쓸 수 있습니다. 또한 대사 사운드화로 생동감 있는 작품을 만들 수 있습니다. 창작이라는 벽 앞에서 잠시 쉬고 위안이 되는 오아시스 같은 곳이 되었으면 하는 고민이 담겨있습니다. "
                profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC17.gif`}
                profileName="지창현"
                profileEng="Ji Changhyun"
                profileMail="jchyundesign@gmail.com"
                path="/2022/project/dc/research/:Changhyun"
                work0={imageDcr.CHANGHYUN.work0}
                work1={imageDcr.CHANGHYUN.work1}
                work2={imageDcr.CHANGHYUN.work2}
                work3={imageDcr.CHANGHYUN.work3}
                work4={imageDcr.CHANGHYUN.work4}
                work5={imageDcr.CHANGHYUN.work5}
                work6={imageDcr.CHANGHYUN.work6}
                workVideo="https://www.youtube.com/embed/7Kwwcpny9CU"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfileChanghyun;
