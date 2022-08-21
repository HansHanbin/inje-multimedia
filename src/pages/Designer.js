import React from "react";
import Header from "../components/Header";
import "./Designer.scss";

function Designer() {
  return (
    <>
      <Header />
      <div className="DesignerList-grid">
        <div className="DesignerList-title">Designer</div>

        <div className="DesignerList-filter">
          <div className="DesignerList-filter-medium">ㅈㅊㅎ</div>
          <div className="DesignerList-filter-line"></div>
          <div className="DesignerList-filter-medium">ㅅㅇ</div>
          <div className="DesignerList-filter-line"></div>
          <div className="DesignerList-filter-medium">ㄷㄹㅁㅂ</div>
          <div className="DesignerList-filter-line"></div>
          <div className="DesignerList-filter-medium">ㄱㄴ</div>
          <div className="DesignerList-filter-line"></div>
          <div className="DesignerList-filter-bold">All</div>
        </div>

        <ul className="DesignerList-list">
          <li className="DesignerList-person">
            <div className="DesignerList-image"></div>
            <div className="DesignerList-name-kor">홍길동</div>
            <div className="DesignerList-name-eng">Hong Gildong</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image"></div>
            <div className="DesignerList-name-kor">홍길동</div>
            <div className="DesignerList-name-eng">Hong Gildong</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image"></div>
            <div className="DesignerList-name-kor">홍길동</div>
            <div className="DesignerList-name-eng">Hong Gildong</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image"></div>
            <div className="DesignerList-name-kor">홍길동</div>
            <div className="DesignerList-name-eng">Hong Gildong</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image"></div>
            <div className="DesignerList-name-kor">홍길동</div>
            <div className="DesignerList-name-eng">Hong Gildong</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image"></div>
            <div className="DesignerList-name-kor">홍길동</div>
            <div className="DesignerList-name-eng">Hong Gildong</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image"></div>
            <div className="DesignerList-name-kor">홍길동</div>
            <div className="DesignerList-name-eng">Hong Gildong</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image"></div>
            <div className="DesignerList-name-kor">홍길동</div>
            <div className="DesignerList-name-eng">Hong Gildong</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Designer;
