import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

import AboutPeople from "../components/About/AboutPeople";
import AboutProfessor from "../components/About/AboutProfessor";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about-sections">
          <div className="about-section-one about-section">
            <div className="section-one-wrapper wrapper">
              <div className="one-text-warpper">
                <span className="one-title">멀티미디어학부 졸업전시회</span>
                <div className="one-description">
                  <div>프리즘처럼 빛나는 학생들의 모습을 확인해보세요!</div>
                  <FontAwesomeIcon icon={faCirclePlay} className="one-play" />
                </div>
              </div>
            </div>
          </div>

          <div className="about-section-two about-section">
            <div className="section-two-wrapper wrapper">
              <div className="two-title">학부소개</div>
              <ul className="two-cards-wrapper">
                <li className="cards-item">
                  <Cards
                    main={"Digital Contents"}
                    sub={"디지털콘텐츠"}
                    description={
                      "디지털 콘텐츠 전공은 인터넷,모바일을 기반으로 하는 다양한 웹, 앱, 모바일 콘텐츠의 기초,응용, 실습의 과정을 담은수업을 진행합니다. "
                    }
                  />
                </li>
                <li className="cards-item">
                  <Cards
                    main={"Visual Infomation"}
                    sub={"비주얼인포메이션"}
                    description={
                      "비주얼 인포메이션 디자인 전공은 정보디자인을 기반으로 하는 시각디자인 전반과 DTP를포함한 과정을 담은 수업을 진행합니다."
                    }
                  />
                </li>
                <li className="cards-item">
                  <Cards
                    main={"Motion Media"}
                    sub={"모션미디어"}
                    description={
                      "모션 미디어 전공은 영상디자인 및 애니메이션 등을 학습하는 것에 특화된 전공입니다. 2D, 3D 등의 툴을 배우고 실사 촬영에 대한 수업을 진행합니다. "
                    }
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="about-section-three about-section">
            <div className="section-three-wrapper wrapper">
              <AboutProfessor />
            </div>
          </div>

          <div className="about-section-four about-section">
            <div className="section-four-wrapper wrapper">
              <AboutPeople />
            </div>
          </div>

          <div className="about-footer ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
