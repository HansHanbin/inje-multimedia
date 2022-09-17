import React from "react";
import { Link } from "react-router-dom";

import FeaturesItem from "./FeaturesItem";
import "./Features.scss";
import Header from "../HeaderDark";
import FeaturesMMSContents from "./FeaturesMMSContents";

// import nayoung from "../../assets/features/DC/김나영/김나영_research_thumbnail.png";
// import nayoungHeader from "../../assets/features/DC/김나영/김나영_research_header.png";
// import mingyu from "../../assets/features/DC/박민규/박민규_research_thumbnail.png";
// import mingyuHeader from "../../assets/features/DC/박민규/박민규_research_header.png";
// import bohyeon from "../../assets/features/DC/서보현/서보현_research_thumbnail.png";
// import bohyeonHeader from "../../assets/features/DC/서보현/서보현_research_header.png";
// import youngmin from "../../assets/features/DC/이영민/이영민_research_thumbnail.png";
// //import youngminHeader from "../../assets/features/DC/박민규/박민규_research_header.png";
// import seongrae from "../../assets/features/DC/조성래/조성래_research_thumbnail.png";
// import seongraeHeader from "../../assets/features/DC/조성래/조성래_research_header.png";
// import img1 from "../../assets/features/DC/조성래/조성래_research_thumbnail.png";

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
            <div className="class-studio class class-active">
              <Link to="/2022/project/mm/studio">모션미디어스튜디오</Link>
            </div>

            <div className="class-research class">
              <Link to="/2022/project/mm/research">MM졸업연구</Link>
            </div>
          </div>
        </div>
        <div className="features-studio features-active">
          <FeaturesMMSContents />
        </div>
      </div>
    </>
  );
}

export default Features;
