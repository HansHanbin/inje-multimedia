import React from "react";
import "./Home.scss";
import Header from "../components/Header";

import "./Home.scss";

function Home() {
  return (
    <>
      <Header />
      <div className="home-section">
        <div className="indicator-wrapper">
          <div className="section-indicator1 indicator"></div>
          <div className="section-indicator2 indicator"></div>
          <div className="section-indicator3 indicator"></div>
          <div className="section-indicator4 indicator"></div>
        </div>

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
        <section className="section two">
          <div className="scrollDown-wrapper">
            <div className="scroll-down">
              scroll
              <br />
              down
            </div>
          </div>
        </section>
        <section className="section three">
          <div className="scrollDown-wrapper">
            <div className="scroll-down">
              scroll
              <br />
              down
            </div>
          </div>
        </section>
        <section className="section four">
          <div className="scrollDown-wrapper">
            <div className="scroll-down">
              scroll
              <br />
              down
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
