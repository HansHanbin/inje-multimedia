import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import "./About.scss";

function About() {
  return (
    <>
      <Header />
      <div className="about">
        <div className="about-sections">
          <div className="about-section-one section">
            <div className="section-one-wrapper">
              <div className="one-text-warpper">
                <div className="one-title">멀티미디어학부 졸업전시회</div>
                <div className="one-description">
                  제 123회 인제대학교 멀티미디어학부 졸업전시회에 오신걸
                  환영합니다. <br />
                  씹고 뜯고 맛보고 즐기다 가십셔 👍👍👍
                </div>
              </div>
            </div>
          </div>
          <div className="about-section-two section">
            <div className="section-two-wrapper">
              <div className="two-title">학부소개</div>
              <div className="two-cards-wrapper">
                <Cards
                  main={"Digital Contents"}
                  sub={"디지털콘텐츠"}
                  description={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                  }
                />
                <Cards
                  main={"Digital Contents"}
                  sub={"디지털콘텐츠"}
                  description={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                  }
                />
                <Cards
                  main={"Digital Contents"}
                  sub={"디지털콘텐츠"}
                  description={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
                  }
                />
              </div>
            </div>
          </div>
          <div className="about-section-three section">
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
          </div>
          <div className="about-section-footer"></div>
        </div>
      </div>
    </>
  );
}

export default About;
