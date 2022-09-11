import React from "react";
import "./Home.scss";
import Header from "../components/Header";
import { Link } from "react-router-dom";

// //import Background from "../assets/video/main_background3.mp4";
// //import BackgroundBlack from "../assets/images/08.18 이미지 소스/1920/main_bacground 2.png";
// import mainLogo from "/assets/images/0818Images/1920/main_logo.png";
// //import mainLogoMedium from "/assets/images/0818Images/768/main_logo.png";
// //import mainLogoSmall from "/assets/images/0818Images/390/main_logo.png";
// import mainPrismLogo from "/assets/images/0818Images/1920/main_prism object.png";
// import mainPrismLogoMedium from "/assets/images/0818Images/768/main_prism object.png";
// import viewProject from "/assets/images/0818Images/1920/main_view project.png";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <section className="home-section one">
          <div className="one-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/0818Images/1920/main_logo.png`}
              alt="logo"
              className="main-logo-1920"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/0818Images/768/main_logo.png`}
              className="main-logo-768"
              alt="logo"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/0818Images/390/main_logo.png`}
              className="main-logo-390"
              alt="logo"
            />
            <div className="one-title-warpper">
              <h1>인제대학교 멀티미디어학부 2022 졸업전시회</h1>
              <h2>
                Divison of Multimedia Design, Inje University
                <br />
                2022 Graduation Exhibition
              </h2>
            </div>
          </div>
          <video className="one-video" autoPlay loop muted playsInline>
            <source
              src={`${process.env.PUBLIC_URL}/assets/video/main_background3.mp4`}
            />
          </video>
        </section>

        <section className="home-section two">
          <div className="two-wrapper">
            <div className="two-contents">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/0818Images/1920/main_prism object.png`}
                className="two-prismImage-1920"
                alt="prism"
              />
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/0818Images/768/main_prism object.png`}
                className="two-prismImage-768"
                alt="prism"
              />
              <div className="two-text-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/0818Images/1920/main_logo.png`}
                  className="two-prismLogo"
                  alt="second-logo"
                />
                <div className="two-description">
                  사람들은 저마다 아름다운 빛을 내고, <br />그 빛은 각각다른
                  형상을 띄고 있습니다. <br />
                  <br />
                  우리들은 졸업 전시회라는 하나의 프리즘을 통과해,
                  <br /> 새로운 방향으로 빛을 내며 나아갈 것이고,
                  <br /> 그 빛은 영원할 것입니다.
                </div>
                <Link to="/2022/project">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/0818Images/1920/main_view project.png`}
                    alt="view project"
                    className="two-viewProejct"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
