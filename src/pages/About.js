import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about-sections">
          <div className="about-section-one about-section">
            <div className="section-one-wrapper">
              <div className="one-title-mobile">About</div>
              <div className="one-text-warpper">
                <div className="one-title">멀티미디어학부 졸업전시회</div>
                <div className="one-description">
                  <span>
                    제 123회 인제대학교 멀티미디어학부 졸업전시회에 오신걸
                    환영합니다.
                  </span>
                  <span>씹고 뜯고 맛보고 즐기다 가십셔 👍👍👍</span>
                  <FontAwesomeIcon icon={faCirclePlay} className="one-play" />
                </div>
              </div>
            </div>
            <div className="about-scrollDown-wrapper">
              <div className="scroll-down">
                <span>scroll</span>
                <span>down</span>
                <FontAwesomeIcon icon={faCaretDown} className="navBar-arrow" />
              </div>
            </div>
          </div>
          <div className="about-section-two about-section">
            <div className="section-two-wrapper">
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
                    main={"Motion Media"}
                    sub={"모션미디어"}
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
              </ul>
            </div>
            <div className="about-scrollDown-wrapper">
              <div className="scroll-down">
                <span>scroll</span>
                <span>down</span>
                <FontAwesomeIcon icon={faCaretDown} className="navBar-arrow" />
              </div>
            </div>
          </div>
          <div className="about-section-three about-section">
            <div className="section-three-wrapper">
              <div className="three-title">Credit</div>
              <div className="three-top-wrapper">
                <div className="three-people-wrapper">
                  <span>교수진</span>
                  <div className="three-people">
                    <div className="people-wrapper">
                      <span>디지털콘텐츠</span>
                      <span>전우정 교수님</span>
                      <span>이승희 교수님</span>
                    </div>
                    <div className="people-wrapper">
                      <span>모션미디어</span>
                      <span>김석래 교수님</span>
                      <span>백재훈 교수님</span>
                    </div>
                    <div className="people-wrapper">
                      <span>비주얼인포메이션</span>
                      <span>박수진 교수님</span>
                      <span>최인규 교수님</span>
                    </div>
                  </div>
                </div>
                <div className="three-people-wrapper">
                  <span>졸업준비위원회</span>
                  <div className="three-people">
                    <div className="people-wrapper">
                      <span>디지털콘텐츠</span>
                      <span>홍길동</span>
                      <span>홍길동</span>
                    </div>
                    <div className="people-wrapper">
                      <span>모션미디어</span>
                      <span>홍길동</span>
                      <span>홍길동</span>
                    </div>
                    <div className="people-wrapper">
                      <span>비주얼인포메이션</span>
                      <span>홍길동</span>
                      <span>홍길동</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="three-bottom-wrapper">
                <div className="people-team">
                  <div className="team-wrapper">
                    <span>웹설계</span>
                    홍길동 홍길동 홍길동 홍길동 홍길동
                  </div>
                  <div className="team-wrapper">
                    <span>디자인</span>
                    홍길동 홍길동 홍길동 홍길동 홍길동
                  </div>
                  <div className="team-wrapper">
                    <span>코딩</span>
                    홍길동 홍길동 홍길동 홍길동 홍길동
                  </div>
                  <div className="team-wrapper">
                    <span>홍보</span>
                    홍길동 홍길동 홍길동 홍길동 홍길동
                  </div>
                </div>
              </div>
            </div>
            <div className="about-scrollDown-wrapper-additional">
              <div className="scroll-down">
                <span>scroll</span>
                <span>down</span>
                <FontAwesomeIcon icon={faCaretDown} className="navBar-arrow" />
              </div>
            </div>
          </div>
          <div className="about-section-three-additional about-section">
            <div className="three-title">Credit</div>
            <div className="three-bottom-wrapper-additional">
              <div className="people-team">
                <div className="team-wrapper">
                  <span>웹설계</span>
                  홍길동 홍길동 홍길동 홍길동 홍길동
                </div>
                <div className="team-wrapper">
                  <span>디자인</span>
                  홍길동 홍길동 홍길동 홍길동 홍길동
                </div>
                <div className="team-wrapper">
                  <span>코딩</span>
                  홍길동 홍길동 홍길동 홍길동 홍길동
                </div>
                <div className="team-wrapper">
                  <span>홍보</span>
                  홍길동 홍길동 홍길동 홍길동 홍길동
                </div>
              </div>
            </div>
          </div>
          <div className="about-section-footer"></div>
        </div>
      </div>
    </>
  );
}

export default About;
