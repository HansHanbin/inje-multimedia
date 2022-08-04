import React from "react";
import "./Project.scss";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Project() {
  return (
    <>
      <Header />
      <div className="project">
        <div className="project-container">
          <Link to="/2022/project/dc" className="project-dc major">
            {/* 마우스오버 전 */}
            <div className="project-before before">DC</div>
            {/* 마우스오버 후 */}
            <div className="project-after after">
              <div className="project-wrapper">
                {/* 마우스오버 텍스트 */}
                <div className="project-wrapper__text">
                  {/* 마우스오버 상단 전공명,교수 */}
                  <div className="project-wrapper__top">
                    <div className="proejct-wrapper__title">
                      <h2 className="asdasd">DIGITAL CONTENTS</h2>
                      <h4>디지털컨텐츠</h4>
                    </div>
                    <div className="project-wrapper__professor">
                      <span>전우정 교수님</span>
                      <span>|</span>
                      <span>이승희 교수님</span>
                    </div>
                    {/* 마우스오버 하단 전공소개*/}
                    <div className="project-wrapper__bottom">
                      <div className="project-wrapper__major">
                        <div className="project-wrapper-studio">
                          <div className="project-wrapper__majorTitle">
                            디지털컨텐츠스튜디오
                          </div>
                          <div className="project-wrapper__majorDescription">
                            인간, 사회, 환경, 문화, 기술 등 다양한 분야의 주제를
                            발굴하여, 서비스디자인 관점에서 해당 문제를 깊이있게
                            탐색한 후, 어플리케이션 UX/UI 디자인 및 프로토타입
                            제작을 통해 해결안을 제안한다.
                          </div>
                        </div>
                        <div className="project-wrapper-research">
                          <div className="project-wrapper__majorTitle">
                            DC졸업연구
                          </div>
                          <div className="project-wrapper__majorDescription">
                            디지털 환경이 가속화 됨에 따라 급변하는 IT 기술에
                            필요한 디자인의 가치가 주목받고 있다. 본 수업에서는
                            UX 디자인 방법론을 통해 인사이트를 발굴하고 UI
                            디자인 설계를 진행하여 결과물을 완성한다.
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
            </div>
          </Link>

          <Link to="/2022/project/vi" className="project-vi major">
            {/* 마우스오버 전 */}
            <div className="project-before before">DC</div>
            {/* 마우스오버 후 */}
            <div className="project-after after">
              <div className="project-wrapper">
                {/* 마우스오버 텍스트 */}
                <div className="project-wrapper__text">
                  {/* 마우스오버 상단 전공명,교수 */}
                  <div className="project-wrapper__top">
                    <div className="proejct-wrapper__title">
                      <h2 className="asdasd">MOTION MEDIA</h2>
                      <h4>모션미디어</h4>
                    </div>
                    <div className="project-wrapper__professor">
                      <span>김석래 교수님</span>
                      <span>|</span>
                      <span>백재훈 교수님</span>
                    </div>
                    {/* 마우스오버 하단 전공소개*/}
                    <div className="project-wrapper__bottom">
                      <div className="project-wrapper__major">
                        <div className="project-wrapper-studio">
                          <div className="project-wrapper__majorTitle">
                            모션미디어스튜디오
                          </div>
                          <div className="project-wrapper__majorDescription">
                            영상 전공의 트랙을 통해 학습한 영상언어의 이해를
                            바탕으로 창의적 표현의 도구로서 매체를 활용하고
                            다양한 기술적 실험으로 실사 영상의 졸업 작품을
                            진행하게 된다.
                          </div>
                        </div>
                        <div className="project-wrapper-research">
                          <div className="project-wrapper__majorTitle">
                            MM 졸업연구
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
            </div>
          </Link>

          <Link to="/2022/project/mm" className="project-mm major">
            {/* 마우스오버 전 */}
            <div className="project-before before">VI</div>
            {/* 마우스오버 후 */}
            <div className="project-after after">
              <div className="project-wrapper">
                {/* 마우스오버 텍스트 */}
                <div className="project-wrapper__text">
                  {/* 마우스오버 상단 전공명,교수 */}
                  <div className="project-wrapper__top">
                    <div className="proejct-wrapper__title">
                      <h2 className="asdasd">VISUAL INFORMATION DESIGN</h2>
                      <h4>비주얼인포메이션디자인</h4>
                    </div>
                    <div className="project-wrapper__professor">
                      <span>최인규 교수님</span>
                      <span>|</span>
                      <span>박수진 교수님</span>
                    </div>
                    {/* 마우스오버 하단 전공소개*/}
                    <div className="project-wrapper__bottom">
                      <div className="project-wrapper__major">
                        <div className="project-wrapper-studio">
                          <div className="project-wrapper__majorTitle">
                            비주얼인포메이션디자인스튜디오
                          </div>
                          <div className="project-wrapper__majorDescription">
                            학부과정에서 학습하였던 그래픽디자인, 타이포그래피,
                            편집디자인, 색채 디자인, 공공디자인 등을 종합적으로
                            구현하는 과정이다. 학생들은 시각 정보 디자인의
                            미래적인 가치를 지향하고, 실험적인 디자인 개발과정을
                            통하여 가치적 조형적 실험 디자인 과정을 경험한다.
                          </div>
                        </div>
                        <div className="project-wrapper-research">
                          <div className="project-wrapper__majorTitle">
                            VI 졸업연구
                          </div>
                          <div className="project-wrapper__majorDescription">
                            그래픽디자인, 타이포그래피, 편집디자인, 색채 디자인,
                            공공디자인 등의 주제를 다양한 방법으로 접근하여
                            문제를 해결하는 과정이다. 학생들은 사회적 문화적으로
                            나타나는 아젠다(agenda)나 이슈(issue) 등을 시각
                            정보디자인 방법으로 문제 해결한다.
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
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Project;
