import React from "react";
import "./AboutProfessor.scss";

function AboutProfessor() {
  return (
    <>
      <div className="grid1920">
        <div className="bold32">2022 졸업전시 수업 지도 교수</div>

        <div className="aboutProfessor-container">
          <div className="aboutProfessor-wrapper">
            <div className="MajorName">디지털 콘텐츠</div>
            <div className="aboutProfessor-pic-name">
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic"></div>
                <div className="ProfessorName">전우정 교수님</div>
                <div className="ProfessorClass">DC스튜디오</div>
              </div>
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic"></div>
                <div className="ProfessorName">이승희 교수님</div>
                <div className="ProfessorClass">DC졸업연구</div>
              </div>
            </div>
          </div>

          <div className="aboutProfessor-wrapper">
            <div className="MajorName">비주얼 인포메이션 디자인</div>
            <div className="aboutProfessor-pic-name">
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic"></div>
                <div className="ProfessorName">박수진 교수님</div>
                <div className="ProfessorClass">VI스튜디오</div>
              </div>
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic"></div>
                <div className="ProfessorName">최인규 교수님</div>
                <div className="ProfessorClass">VI졸업연구</div>
              </div>
            </div>
          </div>

          <div className="aboutProfessor-wrapper">
            <div className="MajorName">모션 미디어</div>
            <div className="aboutProfessor-pic-name">
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic"></div>
                <div className="ProfessorName">김석래 교수님</div>
                <div className="ProfessorClass">MM스튜디오</div>
              </div>
              <div className="aboutProfessor-pic">
                <div className="ProfessorPic"></div>
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
