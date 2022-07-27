import React from "react";
import "./Project.scss";
import Header from "../../components/Header";

function Project() {
  return (
    <>
      <Header />
      <div className="project">
        <div className="project-wrapper">
          <div className="project-dc major">
            DC
            <p className="dc-description description">
              인간, 사회, 환경, 문화, 기술 등 다양한 분야의 주제를 발굴하여,
              <br />
              서비스디자인 관점에서 해당 문제를 깊이있게 탐색한 후, <br />
              어플리케이션 UX/UI 디자인 및 프로토타입 제작을 통해 해결안을
              제안한다.
            </p>
          </div>

          <div className="project-vi major">
            VI
            <p className="vi-description description">
              학부과정에서 학습하였던 그래픽디자인, 타이포그래피, 편집디자인,
              색채 디자인, 공공디자인 등을 종합적으로 구현하는 과정이다.
              <br />
              학생들은 시각 정보 디자인의 미래적인 가치를 지향하고, 실험적인
              디자인 개발과정을 통하여 가치적 조형적 실험 디자인 과정을
              경험한다.
            </p>
          </div>

          <div className="project-mm major">
            MM
            <p className="mm-description description">
              영상 전공의 트랙을 통해 학습한 영상언어의 이해를 바탕으로 창의적
              표현의 도구로서 매체를 활용하고 <br />
              다양한 기술적 실험으로 실사 영상의 졸업 작품을 진행하게 된다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
