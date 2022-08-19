import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

import "./About.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

import AboutPeople from "../components/About/AboutPeople";
import AboutProfessor from "../components/About/AboutProfessor";
import AboutVisual from "../components/About/AboutVisual";

function About() {
  const [scroll, setScoll] = useState("0");

  const onScroll = (event) => {
    let scrollValue = event.currentTarget.scrollLeft;

    if (scrollValue === 0) {
      setScoll("0");
    } else if (300 > scrollValue > 0) {
      setScoll("1");
    } else if (scrollValue > 300) {
      setScoll("2");
    }
  };

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

          <div className="about-section-visual about-section">
            <div className="section-visual-wrapper wrapper">
              <AboutVisual />
            </div>
          </div>

          <div className="about-section-two about-section">
            <div className="section-two-wrapper wrapper">
              <div className="two-title">학부소개</div>
              <ul className="two-cards-wrapper" onScroll={onScroll}>
                <li className="cards-item cards-item-dc">
                  <Cards
                    main={"Digital Contents"}
                    sub={"디지털콘텐츠"}
                    description={
                      "디지털콘텐츠 전공은 인터넷, 모바일을 기반으로 하는 다양한 웹, 앱, 모바일 콘텐츠의 기초, 응용, 실습의 과정을 담은 수업을 진행합니다."
                    }
                    className="cards-item-dc"
                  />
                </li>
                <li className="cards-item cards-item-vi">
                  <Cards
                    main={"Visual Infomation"}
                    sub={"비주얼인포메이션"}
                    description={
                      "비주얼인포메이션 디자인 전공은 정보 디자인을 기반으로 하는 시각디자인 전반과 데스크탑 퍼블리싱(DTP)를 포함한 과정을 담은 수업을 진행합니다."
                    }
                  />
                </li>
                <li className="cards-item cards-item-mm">
                  <Cards
                    main={"Motion Media"}
                    sub={"모션미디어"}
                    description={
                      "모션미디어 전공은 영상디자인 및 애니메이션 등을 학습하는 것에 특화된 전공입니다. 2D, 3D등의 툴을 배우고 실사 촬영에 대한 수업을 진행합니다."
                    }
                  />
                </li>
              </ul>
              <div className="cards-indicators-wrapper">
                <ul className="cards-indicators">
                  <li
                    className={
                      scroll === "0" ? "indicator indicator-dc" : "indicator"
                    }
                  ></li>
                  <li
                    className={
                      scroll === "1" ? "indicator indicator-vi" : "indicator"
                    }
                  ></li>
                  <li
                    className={
                      scroll === "2" ? "indicator indicator-mm" : "indicator"
                    }
                  ></li>
                </ul>
              </div>
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

          <div className="about-section-four-mobile about-section">
            <div className="section-four-mobile-wrapper wrapper">
              <div className="mobile-wrapper">
                <div className="item-down-wrapper">
                  <p className="about-people-p">전시 웹사이트 디자인</p>
                  <div>
                    <span className="about-people-span">정주현</span>
                    <span className="about-people-span">김기성</span>
                    <span className="about-people-span">김나영</span>
                    <span className="about-people-span">조성래</span>
                    <span className="about-people-span">지창현</span>
                  </div>
                </div>

                <div className="item-down-wrapper">
                  <p className="about-people-p">전시 웹사이트 설계</p>
                  <div>
                    <span className="about-people-span">김시은</span>
                    <span className="about-people-span">구혜진</span>
                    <span className="about-people-span">서보현</span>
                    <span className="about-people-span">이영민</span>
                    <span className="about-people-span">조이현</span>
                  </div>
                </div>
              </div>

              <div className="mobile-wrapper">
                <div className="item-down-wrapper">
                  <p className="about-people-p">전시 웹사이트 코딩</p>
                  <div>
                    <span className="about-people-span">이한빈</span>
                    <span className="about-people-span">남규리</span>
                    <span className="about-people-span">안도연</span>
                    <span className="about-people-span">이도현</span>
                    <span className="about-people-span">이민재</span>
                  </div>
                </div>

                <div className="item-down-wrapper">
                  <p className="about-people-p">온라인 홍보</p>
                  <div>
                    <span className="about-people-span">박민규</span>
                    <span className="about-people-span">김문주</span>
                    <span className="about-people-span">신소현</span>
                    <span className="about-people-span">장은교</span>
                    <span className="about-people-span">최재희</span>
                  </div>
                </div>
              </div>
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
