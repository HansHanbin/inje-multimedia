import React, { useState } from "react";
import "./Project.scss";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import projectVideo from "/assets/video/main_background4.mp4";

function Project() {
  const [dcClick, setDcClick] = useState(false);
  const [viClick, setViClick] = useState(false);
  const [mmClick, setMmClick] = useState(false);

  const onDcClick = (event) => {
    if (1200 >= window.innerWidth) {
      event.preventDefault();
      setDcClick(true);
      setViClick(false);
      setMmClick(false);
    }
  };

  const onViClick = (event) => {
    if (1200 >= window.innerWidth) {
      event.preventDefault();
      setDcClick(false);
      setViClick(true);
      setMmClick(false);
    }
  };

  const onMmClick = (event) => {
    if (1200 >= window.innerWidth) {
      event.preventDefault();
      setDcClick(false);
      setViClick(false);
      setMmClick(true);
    }
  };

  return (
    <>
      <Header />
      <div className="project">
        <video className="one-video" autoPlay loop muted playsInline>
          <source
            src={process.env.PUBLIC_URL + "/assets/video/main_background3.mp4"}
            type="video/mp4"
          />
        </video>
        <div
          className={
            dcClick || viClick || mmClick === true
              ? "project-container project-m"
              : "project-container"
          }
        >
          <div
            className={
              dcClick === true ? "project-dc major-m" : "project-dc major"
            }
            onClick={onDcClick}
          >
            {/* 마우스오버 전 */}
            <div className="project-before before">
              <h4>D.C</h4>
              <h6>디지털콘텐츠</h6>
            </div>
            {/* 마우스오버 후 */}
            <div className="project-after after">
              <Link to="/2022/project/dc/studio" className="innerLink">
                <div className="project-wrapper">
                  {/* 마우스오버 텍스트 */}
                  <div className="project-wrapper__text">
                    {/* 마우스오버 상단 전공명,교수 */}
                    <div className="project-wrapper__top">
                      <div className="proejct-wrapper__title">
                        <h2 className="project-wrapper__major-title">
                          DIGITAL CONTENTS
                        </h2>
                        <h4>디지털콘텐츠</h4>
                      </div>

                      {/* 마우스오버 하단 전공소개*/}
                      <div className="project-wrapper__bottom">
                        <div className="project-wrapper__major">
                          <div className="project-wrapper-studio">
                            <div className="project-wrapper__majorTitle">
                              <strong>디지털콘텐츠스튜디오</strong>
                              <br />
                              전우정 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              인간, 사회, 환경, 문화, 기술 등 다양한 분야의
                              주제를 발굴하여, 서비스디자인 관점에서 해당 문제를
                              깊이있게 탐색 한 후, 어플리케이션 UX/UI 디자인 및
                              프로토타입 제작을 통해 해결안을 제안한다.
                            </div>
                          </div>
                          <div className="project-wrapper-research">
                            <div className="project-wrapper__majorTitle">
                              <strong>DC졸업연구</strong>
                              <br />
                              이승희 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              모바일 디자인 테크놀로지에 대한 이해와 사용자
                              중심적 인터페이스, 인터랙션 강화를 위한 디자인
                              설계를 연구하고 경험디자인 방법론을 통해
                              문제해결을 위한 UX디자인 및 프로토타입을 제작하여
                              결과물을 완성한다.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 마우스오버 GO */}
                  <div className="project-wrapper__go">
                    <span>GO</span>
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div
            className={
              viClick === true ? "project-vi major-m" : " project-vi major"
            }
            onClick={onViClick}
          >
            {/* 마우스오버 전 */}
            <div className="project-before before">
              <h4>V.I</h4>
              <h6>비주얼인포메이션디자인</h6>
            </div>
            {/* 마우스오버 후 */}
            <div className="project-after after">
              <Link to="/2022/project/vi/studio" className="innerLink">
                <div className="project-wrapper">
                  {/* 마우스오버 텍스트 */}
                  <div className="project-wrapper__text">
                    {/* 마우스오버 상단 전공명,교수 */}
                    <div className="project-wrapper__top">
                      <div className="proejct-wrapper__title">
                        <h2 className="project-wrapper__major-title">
                          VISUAL INFORMATION DESIGN
                        </h2>
                        <h4>비주얼인포메이션디자인</h4>
                      </div>

                      {/* 마우스오버 하단 전공소개*/}
                      <div className="project-wrapper__bottom">
                        <div className="project-wrapper__major">
                          <div className="project-wrapper-studio">
                            <div className="project-wrapper__majorTitle">
                              <strong>비주얼인포메이션디자인스튜디오</strong>
                              <br />
                              최인규 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              사회의 다양한 문제를 시각적으로 풀어가는 과정이다.
                              먼저 사회적 문제들을 조사하고 이를 통하여
                              시각정보로 재생산할 가치가 있는 정보와 데이터를
                              수집한다. 수집된 정보와 데이터는 콘셉트와 전략에
                              맞게 시각정보로 전환한다. 전환된 시각정보는 다양한
                              미디어(플랫폼)에 맞게 디자인한다.
                            </div>
                          </div>
                          <div className="project-wrapper-research">
                            <div className="project-wrapper__majorTitle">
                              <strong>VI 졸업연구</strong>
                              <br />
                              박수진 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              그래픽, 타이포그래피, 편집, 브랜딩 등 학부과정에서
                              배운 다양한 디자인 지식과 기능을 종합적으로 다루며
                              졸업작품을 기획하고 제작한다. 이번 졸업연구VI의
                              주제는 ‘Paper’로, 종이라는 디자인 소재를 다양한
                              표현방식을 통해 상품화하는 과정을 경험한다.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 마우스오버 GO */}
                  <div className="project-wrapper__go">
                    <span>GO</span>
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div
            className={
              mmClick === true ? "project-mm major-m" : " project-mm major"
            }
            onClick={onMmClick}
          >
            {/* 마우스오버 전 */}
            <div className="project-before before">
              <h4>M.M</h4>
              <h6 className="title-mini">모션미디어</h6>
            </div>
            {/* 마우스오버 후 */}
            <div className="project-after after">
              <Link to="/2022/project/mm/studio" className="innerLink">
                <div className="project-wrapper">
                  {/* 마우스오버 텍스트 */}
                  <div className="project-wrapper__text">
                    {/* 마우스오버 상단 전공명,교수 */}
                    <div className="project-wrapper__top">
                      <div className="proejct-wrapper__title">
                        <h2 className="project-wrapper__major-title">
                          MOTION MEDIA
                        </h2>
                        <h4>모션미디어</h4>
                      </div>

                      {/* 마우스오버 하단 전공소개*/}
                      <div className="project-wrapper__bottom">
                        <div className="project-wrapper__major">
                          <div className="project-wrapper-studio">
                            <div className="project-wrapper__majorTitle">
                              <strong>모션미디어스튜디오</strong>
                              <br />
                              백재훈 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              실사 영상을 중심으로 학습한 영상언어의 이해를
                              바탕으로 창의적 표현의 도구로서 영상매체를
                              활용하고 다양한 기술적 실험으로 실사 영상의 졸업
                              작품을 진행하게 된다.
                            </div>
                          </div>
                          <div className="project-wrapper-research">
                            <div className="project-wrapper__majorTitle">
                              <strong>MM 졸업연구</strong>
                              <br />
                              김석래 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              애니메이션적 연출에 기반을 두고, 다양한 표현
                              방법들을 활용하여 자신만의 메시지가 담긴 영상
                              콘텐츠를 제작한다.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 마우스오버 GO */}
                  <div className="project-wrapper__go">
                    <span>GO</span>
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
