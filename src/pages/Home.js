import React from "react";
import "./Home.scss";
import Header from "../components/Header";

import "./Home.scss";

function Home() {
  return (
    <>
      <Header />
      <div className="home-section">
        <section className="section one">
          <div className="section-title">
            <h4 className="title title-sub">2022 인제대학교</h4>
            <h1 className="title title-main">
              멀티미디어학부
              <br /> 졸업전시회
            </h1>
          </div>
          <div className="scrollDown-wrapper">
            <div className="scroll-down">
              scroll
              <br />
              down
            </div>
          </div>
        </section>
        <section className="section two">Two</section>
        <section className="section three">Three</section>
        <section className="section four">Four</section>
      </div>
    </>
  );
}

export default Home;
