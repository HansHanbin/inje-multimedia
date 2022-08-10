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
                <span className="one-title">멀티미디어학부 졸업전시회</span>
                <div className="one-description">
                  <div>프리즘처럼 빛나는 학생들의 모습을 확인해보세요!</div>
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

          <div className="about-section-four about-section">
            <div className="section-four-wrapper">
              <div className="four-title">Credit</div>
              <div className="four-contents">
                <div className="four-major-professor">지도교수</div>
                <div className="four-major-wrapper">
                  <div className="four-major four-major-dc">
                    <div className="four-major-title">디지털콘텐츠</div>
                    <div className="four-major-profile">
                      <div className="profile-image"></div>
                      <div className="profile-name">전우저 교수님</div>
                    </div>
                    <div className="four-major-profile">
                      <div className="profile-image"></div>
                      <div className="profile-name">이승희 교수님</div>
                    </div>
                  </div>
                  <div className="four-major four-major-mm">
                    <div className="four-major-title">모션미디어</div>
                    <div className="four-major-profile">
                      <div className="profile-image"></div>
                      <div className="profile-name">김석래 교수님</div>
                    </div>
                    <div className="four-major-profile">
                      <div className="profile-image"></div>
                      <div className="profile-name">백제훈 교수님</div>
                    </div>
                  </div>
                  <div className="four-major four-major-mm">
                    <div className="four-major-title">비주얼인포메이션</div>
                    <div className="four-major-profile">
                      <div className="profile-image"></div>
                      <div className="profile-name">박수진 교수님</div>
                    </div>
                    <div className="four-major-profile">
                      <div className="profile-image"></div>
                      <div className="profile-name">최인규 교수님</div>
                    </div>
                  </div>
                </div>
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
                      <span className="vi">비주얼인포메이션</span>
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
                      <span className="vi">비주얼인포메이션</span>
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
                  김시은&nbsp;&nbsp;구혜진&nbsp;&nbsp;서보현&nbsp;&nbsp;이영민&nbsp;&nbsp;조이현
                </div>
                <div className="team-wrapper">
                  <span>디자인</span>
                  정주현&nbsp;&nbsp;김기성&nbsp;&nbsp;김나영&nbsp;&nbsp;조성래&nbsp;&nbsp;지창현
                </div>
                <div className="team-wrapper">
                  <span>코딩</span>
                  이한빈&nbsp;&nbsp;남규리&nbsp;&nbsp;안도연&nbsp;&nbsp;이도현&nbsp;&nbsp;이민재
                </div>
                <div className="team-wrapper">
                  <span>홍보</span>
                  박민규&nbsp;&nbsp;김문주&nbsp;&nbsp;신소현&nbsp;&nbsp;장은교&nbsp;&nbsp;최재희
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
