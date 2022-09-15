import React from "react";
import { useState } from "react";
import "./AboutProfessor.scss";

function AboutProfessor() {
  const [dcClick, setDcClick] = useState(true);
  const [viClick, setViClick] = useState(false);
  const [mmClick, setMmClick] = useState(false);

  const onDcClick = () => {
    if (dcClick === false) {
      setDcClick(true);
      setMmClick(false);
      setViClick(false);
    }
  };

  const onViClick = () => {
    if (viClick === false) {
      setDcClick(false);
      setMmClick(false);
      setViClick(true);
    }
  };
  const onMmClick = () => {
    if (mmClick === false) {
      setDcClick(false);
      setMmClick(true);
      setViClick(false);
    }
  };

  return (
    <>
      <div className="grid1920">
        <div className="bold32">2022 졸업전시 수업 지도 교수</div>

        <div className="aboutProfessor-container web">
          <div className="aboutProfessor-wrapper">
            <div className="MajorName">디지털 콘텐츠</div>
            <div className="aboutProfessor-pic-name">
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pJeon.jpg`}
                  />
                </div>
                <div className="ProfessorName">전우정 교수님</div>
                <div className="ProfessorClass">DC스튜디오</div>
              </div>
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pLee.jpg`}
                  />
                </div>
                <div className="ProfessorName">이승희 교수님</div>
                <div className="ProfessorClass">DC졸업연구</div>
              </div>
            </div>
          </div>

          <div className="aboutProfessor-wrapper">
            <div className="MajorName">비주얼 인포메이션 디자인</div>
            <div className="aboutProfessor-pic-name">
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pPark.jpg`}
                  />
                </div>
                <div className="ProfessorName">최인규 교수님</div>
                <div className="ProfessorClass">VI스튜디오</div>
              </div>
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pChoi.jpg`}
                  />
                </div>
                <div className="ProfessorName">박수진 교수님</div>
                <div className="ProfessorClass">VI졸업연구</div>
              </div>
            </div>
          </div>

          <div className="aboutProfessor-wrapper">
            <div className="MajorName">모션 미디어</div>
            <div className="aboutProfessor-pic-name">
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pKim.jpg`}
                  />
                </div>
                <div className="ProfessorName">김석래 교수님</div>
                <div className="ProfessorClass">MM스튜디오</div>
              </div>
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  {" "}
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pBaek.jpg`}
                  />
                </div>
                <div className="ProfessorName">백재훈 교수님</div>
                <div className="ProfessorClass">MM졸업연구</div>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutProfessor-container mobile">
          <div className="aboutProfessor-mobile-wrapper">
            <div className="aboutProfessor-major-mobile">
              <div
                onClick={onDcClick}
                className={
                  dcClick === true ? "major-mobile-active" : "major-mobile"
                }
              >
                디지털콘텐츠
              </div>
              <div>|</div>
              <div
                onClick={onViClick}
                className={
                  viClick === true ? "major-mobile-active" : "major-mobile"
                }
              >
                비주얼인포메이션디자인
              </div>
              <div>|</div>
              <div
                onClick={onMmClick}
                className={
                  mmClick === true ? "major-mobile-active" : "major-mobile"
                }
              >
                모션미디어
              </div>
            </div>

            <div
              className={dcClick === true ? "pic-mobile-active" : "pic-mobile"}
            >
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pJeon.jpg`}
                  />
                </div>
                <div className="ProfessorName">전우정 교수님</div>
                <div className="ProfessorClass">DC스튜디오</div>
              </div>

              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pLee.jpg`}
                  />
                </div>
                <div className="ProfessorName">이승희 교수님</div>
                <div className="ProfessorClass">DC졸업연구</div>
              </div>
            </div>
            <div
              className={viClick === true ? "pic-mobile-active" : "pic-mobile"}
            >
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  {" "}
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pChoi.jpg`}
                  />
                </div>
                <div className="ProfessorName">최인규 교수님</div>
                <div className="ProfessorClass">VI스튜디오</div>
              </div>

              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pPark.jpg`}
                  />
                </div>
                <div className="ProfessorName">박수진 교수님</div>
                <div className="ProfessorClass">VI졸업연구</div>
              </div>
            </div>
            <div
              className={mmClick === true ? "pic-mobile-active" : "pic-mobile"}
            >
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pKim.jpg`}
                  />
                </div>
                <div className="ProfessorName">김석래 교수님</div>
                <div className="ProfessorClass">MM스튜디오</div>
              </div>

              <div className="aboutProfessor-pic">
                <div className="ProfessorPic">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/professorImage/pBaek.jpg`}
                  />
                </div>
                <div className="ProfessorName">백재훈 교수님</div>
                <div className="ProfessorClass">MM졸업연구</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutProfessor;
