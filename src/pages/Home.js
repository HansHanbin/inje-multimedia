import React from "react";
import "./Home.scss";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { Canvas } from "@react-three/fiber";
// import PrismModel from "../PrismModel";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        {/* <div className="indicator-wrapper">
          <div className="section-indicator1 indicator"></div>
          <div className="section-indicator2 indicator"></div>
          <div className="section-indicator3 indicator"></div>
          <div className="section-indicator4 indicator"></div>
          <div className="section-indicator4 indicator"></div>
        </div> */}

        <section className="home-section one">
          {/* <Canvas className="home-canvas">
            <ambientLightProbe intentsity={0.5} />
            <directionalLight position={[1, 1, 1]} intentsity={0.5} />
            <Suspense fallback={null}>
              <PrismModel />
            </Suspense>
          </Canvas> */}

          <div className="home-section-title">
            <h4 className="title title-sub">
              2022 인제대학교 멀티미디어학부 졸업전시회
            </h4>
            <h1 className="title title-main">
              Inje Univ. Divison of Multimedia <br />
              2022 Graduation Exhibition
            </h1>
          </div>
          {/* <Link to="/2022/project" className="section-project">
            작품 보러가기
          </Link> */}
          {/* <div className="scrollDown-wrapper">
            <div className="scroll-down">
              <span>scroll</span>
              <span>down</span>
              <FontAwesomeIcon icon={faCaretDown} className="navBar-arrow" />
            </div>
          </div> */}
        </section>
        <section className="home-section two">
          {/* <div className="scrollDown-wrapper">
            <div className="scroll-down">
              <span>scroll</span>
              <span>down</span>
              <FontAwesomeIcon icon={faCaretDown} className="navBar-arrow" />
            </div>
          </div> */}
        </section>
        {/* <section className="home-section three">
          <div className="scrollDown-wrapper">
            <div className="scroll-down">
              <span>scroll</span>
              <span>down</span>
              <FontAwesomeIcon icon={faCaretDown} className="navBar-arrow" />
            </div>
          </div>
        </section> */}
        {/* <section className="home-section four">
          <div className="scrollDown-wrapper">
            <div className="scroll-down">
              <span>scroll</span>
              <span>down</span>
              <FontAwesomeIcon icon={faCaretDown} className="navBar-arrow" />
            </div>
          </div>
        </section>
        <section className="home-section five">
          <div className="scrollDown-wrapper">
            <div className="scroll-down">
              <span>scroll</span>
              <span>down</span>
              <FontAwesomeIcon icon={faCaretDown} className="navBar-arrow" />
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default Home;
