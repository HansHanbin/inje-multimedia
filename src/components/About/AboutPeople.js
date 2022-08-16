import React from "react";
import "./AboutPeople.scss";

function AboutPeople() {
  return (
    <div className="container">
      <div className="item-top">
        <p className="about-people-title">졸업준비위원회</p>
        <div>
          <span className="about-people-span">위원장</span>
          <span className="about-people-span">박은수</span>
        </div>
      </div>
      <div className="item-middle">
        <div className="item-left">
          <p className="about-people-p">디지털콘텐츠</p>
          <div>
            <span className="about-people-span">김시은</span>
            <span className="about-people-span">지창현</span>
          </div>
        </div>

        <div className="item-right">
          <p className="about-people-p">비주얼인포메이션디자인</p>
          <div>
            <span className="about-people-span">노연희</span>
            <span className="about-people-span">허유진</span>
          </div>
        </div>
        <div className="item-center">
          <p className="about-people-p">모션미디어</p>
          <div>
            <span className="about-people-span">김성혁</span>
            <span className="about-people-span">박은수</span>
          </div>
        </div>
      </div>

      <div className="item-down">
        <div className="item-down-wrapper">
          <p className="about-people-p">전시 웹사이트 디자인</p>
          <div>
            <span className="about-people-span">김기성</span>
            <span className="about-people-span">김나영</span>
            <span className="about-people-span">전주현</span>
            <span className="about-people-span">조성래</span>
            <span className="about-people-span">지창현</span>
          </div>
        </div>

        <div className="item-down-wrapper">
          <p className="about-people-p">전시 웹사이트 설계</p>
          <div>
            <span className="about-people-span">구혜진</span>
            <span className="about-people-span">김시은</span>
            <span className="about-people-span">서보현</span>
            <span className="about-people-span">이영민</span>
            <span className="about-people-span">조이현</span>
          </div>
        </div>

        <div className="item-down-wrapper">
          <p className="about-people-p">전시 웹사이트 코딩</p>
          <div>
            <span className="about-people-span">남규리</span>
            <span className="about-people-span">안도연</span>
            <span className="about-people-span">이도현</span>
            <span className="about-people-span">이민재</span>
            <span className="about-people-span">이한빈</span>
          </div>
        </div>

        <div className="item-down-wrapper">
          <p className="about-people-p">온라인 홍보</p>
          <div>
            <span className="about-people-span">김문주</span>
            <span className="about-people-span">박민규</span>
            <span className="about-people-span">신소현</span>
            <span className="about-people-span">장은교</span>
            <span className="about-people-span">최재희</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPeople;
