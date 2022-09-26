import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/HeaderDark";
import "./ProjectContents.scss";
import FeaturesDCS from "../../components/Features/FeaturesDCS";

function ProjectVcontents() {
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
              <Link to="/2022/project/dc">
                <div className="major-dc ">Digital Contents</div>
                <div className="major-mobile ">D.C</div>
              </Link>
              <div>|</div>
              <Link to="/2022/project/vi">
                <div className="major-vi active">Visual Information Design</div>
                <div className="major-mobile active">V.I</div>
              </Link>
              <div>|</div>
              <Link to="/2022/project/mm">
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
              비주얼인포메이션스튜디오
            </div>

            <div
              onClick={onResearchClick}
              className={
                researchClick
                  ? "class-research class class-active"
                  : "class-research class"
              }
            >
              VI졸업연구
            </div>
          </div>
        </div>
        <div className="project-features">
          <FeaturesDCS />
          Test
        </div>
      </div>
    </>
  );
}

export default ProjectVcontents;
