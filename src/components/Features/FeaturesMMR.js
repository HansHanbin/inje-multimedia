import React from "react";
import { Link } from "react-router-dom";

import "./Features.scss";
import Header from "../../components/HeaderDark";
import FeaturesMMRContents from "./FeaturesMMRContents";

function Features() {
  // 이 아래부터는 사실상 Html. 다른 파일도 마찬가지!
  return (
    <>
      <Header />

      <div className="project-contents">
        <div className="project-header">
          <div className="major-wrapper">
            <div className="header-major">
              <Link to="/2022/project/dc/studio">
                <div className="major-dc">Digital Contents</div>
                <div className="major-mobile">D.C</div>
              </Link>
              <div>|</div>
              <Link to="/2022/project/vi/studio">
                <div className="major-vi">Visual Information Design</div>
                <div className="major-mobile">V.I</div>
              </Link>
              <div>|</div>
              <Link to="/2022/project/mm/studio">
                <div className="major-mm active">Motion Media</div>
                <div className="major-mobile active">M.M</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="project-class">
          <div className="class-wrapper">
            <div className="class-studio class">
              <Link to="/2022/project/mm/studio">모션미디어스튜디오</Link>
            </div>

            <div className="class-research class class-active">
              <Link to="/2022/project/mm/research">MM졸업연구</Link>
            </div>
          </div>
        </div>
        <div className="features-studio features-active">
          {/* contents */}
          <FeaturesMMRContents />
        </div>
      </div>
    </>
  );
}

export default Features;
