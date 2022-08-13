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
              <div className="one-title-mobile">About</div>
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
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                    }
                  />
                </li>
                <li className="cards-item">
                  <Cards
                    main={"Visual Infomation"}
                    sub={"비주얼인포메이션"}
                    description={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                    }
                  />
                </li>
                <li className="cards-item">
                  <Cards
                    main={"Motion Media"}
                    sub={"모션미디어"}
                    description={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
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
