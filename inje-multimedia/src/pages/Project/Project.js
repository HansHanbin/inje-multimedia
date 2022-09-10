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
        <video className="one-video" autoPlay loop>
          <source
            src={process.env.PUBLIC_URL + "/assets/video/main_background3.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="project-container">
          <Link
            to="/2022/project/dc/studio"
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
                              디지털콘텐츠스튜디오 | 전우정 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              인간, 사회, 환경, 문화, 기술 등
                              <strong> 다양한 분야의 주제를 발굴</strong>하여,
                              <strong>
                                서비스디자인 관점에서 해당 문제를 깊이있게 탐색
                              </strong>
                              한 후,
                              <strong>
                                어플리케이션 UX/UI 디자인 및 프로토타입 제작
                              </strong>
                              을 통해 해결안을 제안한다.
                            </div>
                          </div>
                          <div className="project-wrapper-research">
                            <div className="project-wrapper__majorTitle">
                              DC졸업연구 | 이승희 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              디지털 환경이 가속화 됨에 따라 급변하는 IT 기술에
                              필요한 디자인의 가치가 주목받고 있다. 본
                              수업에서는
                              <strong>
                                UX 디자인 방법론을 통해 인사이트를 발굴
                              </strong>
                              하고{" "}
                              <strong>
                                UI 디자인 설계를 진행하여 결과물을 완성한다.
                              </strong>
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
          </Link>

          <Link
            to="/2022/project/vi/studio"
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
                              비주얼인포메이션디자인스튜디오 | 최인규 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              학부과정에서 학습하였던 그래픽디자인,
                              타이포그래피, 편집디자인, 색채 디자인, 공공디자인
                              등을 종합적으로 구현하는 과정이다. 학생들은{" "}
                              <strong>
                                시각 정보 디자인의 미래적인 가치를 지향
                              </strong>
                              하고,{" "}
                              <strong>
                                실험적인 디자인 개발과정을 통하여 가치적 조형적
                                실험 디자인 과정을 경험
                              </strong>
                              한다.
                            </div>
                          </div>
                          <div className="project-wrapper-research">
                            <div className="project-wrapper__majorTitle">
                              VI 졸업연구 | 박수진 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              <strong>
                                그래픽, 타이포그래피, 편집, 브랜딩
                              </strong>
                              등 학부과정에서 배운 다양한 디자인 지식과 기능을
                              종합적으로 다루며 졸업작품을 기획하고 제작한다.
                              이번 졸업연구VI의 주제는<strong>‘Paper’</strong>
                              로,
                              <strong>
                                종이라는 디자인 소재를 다양한 표현방식
                              </strong>
                              을 통해 상품화하는 과정을 경험한다.
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
          </Link>

          <Link
            to="/2022/project/mm/studio"
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
                              모션미디어스튜디오 | 김석래 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              영상 전공의 트랙을 통해 학습한 영상언어의 이해를
                              바탕으로{" "}
                              <strong>
                                창의적 표현의 도구로서 매체를 활용
                              </strong>
                              하고{" "}
                              <strong>
                                다양한 기술적 실험으로 실사 영상의 졸업 작품을
                                진행
                              </strong>
                              하게 된다.
                            </div>
                          </div>
                          <div className="project-wrapper-research">
                            <div className="project-wrapper__majorTitle">
                              MM 졸업연구 | 백재훈 교수님
                            </div>
                            <div className="project-wrapper__majorDescription">
                              <strong>애니메이션적 연출에 기반을 두고</strong>,
                              다양한 표현 방법들을 활용하여{" "}
                              <strong>
                                자신만의 메시지가 담긴 영상 콘텐츠를 제작
                              </strong>
                              한다.
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
          </Link>
        </div>
      </div>
    </>
  );
}

export default Project;
