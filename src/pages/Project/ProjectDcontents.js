import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/HeaderDark";
import FeaturesDCS from "../../components/Features/FeaturesDCS";
import FeaturesDCR from "../../components/Features/FeaturesDCR";
import "./ProjectContents.scss";

function ProjectDcontents() {
  const [studioClick, setStudioClick] = useState(true);
  const [researchClick, setResearchClick] = useState(false);

  const onStudioClick = () => {
    if (studioClick === false) {
      setStudioClick(true);
      setResearchClick(false);
    }
  };

  const onResearchClick = () => {
    if (studioClick === true) {
      setStudioClick(false);
      setResearchClick(true);
    }
  };

  return (
    <>
      <Header />

      <div className="project-contents">
        <div className="project-header">
          <div className="major-wrapper">
            <div className="header-major">
              <Link to="/project/dc">
                <div className="major-dc active">Digital Contents</div>
                <div className="major-mobile active">D.C</div>
              </Link>
              <div>|</div>
              <Link to="/project/vi">
                <div className="major-vi">Visual Information Design</div>
                <div className="major-mobile">V.I</div>
              </Link>
              <div>|</div>
              <Link to="/project/mm">
                <div className="major-mm">Motion Media</div>
                <div className="major-mobile">M.M</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="project-class">
          <div className="class-wrapper">
            <div
              onClick={onStudioClick}
              className={
                studioClick
                  ? "class-studio class class-active"
                  : "class-studio class"
              }
            >
              디지털컨텐츠스튜디오
            </div>

            <div
              onClick={onResearchClick}
              className={
                researchClick
                  ? "class-research class class-active"
                  : "class-research class"
              }
            >
              DC졸업연구
            </div>
          </div>
        </div>
        <div
          onClick={onStudioClick}
          className={
            studioClick ? "features-studio features-active" : "features-studio"
          }
        >
          <FeaturesDCS />
        </div>
        <div
          onClick={onResearchClick}
          className={
            researchClick
              ? "features-research features-active"
              : "features-research"
          }
        >
          <FeaturesDCR />
        </div>
      </div>
    </>
  );
}

export default ProjectDcontents;
