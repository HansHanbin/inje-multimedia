import React from "react";
import "./Footer.scss";

//import Logo from "/assets/images/inje-logo.jpg";

function Footer() {
  return (
    <div className="footer">
      <div className="copy">
        <div className="copy-up">
          <img
            className="copy-logo"
            alt="logo"
            src={`${process.env.PUBLIC_URL}/assets/images/inje-logo.png`}
          ></img>
          <div className="copy-major">
            <div>인제대학교 멀티미디어학부</div>
            <div>Division of Multimedia Design, Inje University.</div>
          </div>
        </div>
        <span className="copy-write">
          Copyright ⓒ 2022. Division of Multimedia Design, Inje University. All
          rights reserved.
        </span>
      </div>
      <div className="links">
        <a className="link-item multi" href="/">
          {/* <FontAwesomeIcon icon={faChrome} className="icon-internet icon" /> */}
          <img
            alt="link"
            src={`${process.env.PUBLIC_URL}/assets/images/footer/icon/h.png`}
            className="icon-internet icon"
          />
          학부 홈페이지
        </a>
        <a className="link-item insta" href="/">
          {/* <FontAwesomeIcon icon={faInstagram} className="icon-instagram icon" /> */}
          <img
            alt="link"
            src={`${process.env.PUBLIC_URL}/assets/images/footer/icon/i.png`}
            className="icon-instagram icon"
          />
          인스타그램
        </a>
        <a className="link-item youtube" href="/">
          {/* <FontAwesomeIcon icon={faYoutube} className="icon-youtube icon" /> */}
          <img
            alt="link"
            src={`${process.env.PUBLIC_URL}/assets/images/footer/icon/y.png`}
            className="icon-youtube icon"
          />
          유튜브
        </a>
      </div>
    </div>
  );
}

export default Footer;
