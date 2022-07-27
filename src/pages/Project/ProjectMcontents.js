import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./ProjectContents.scss";

function ProjectMcontents() {
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
    <div>
      <Header />
      <div className="project-contents">
        <div className="project-header">
          <div className="major-wrapper">
            <div className="header-major">
              <Link to="/2022/project/dc">
                <div className="major-dc ">DC</div>
              </Link>
              <Link to="/2022/project/vi">
                <div className="major-vi">VI</div>
              </Link>
              <Link to="/2022/project/mm">
                <div className="major-mm active">MM</div>
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
              모션미디어스튜디오
            </div>
            <div>|</div>
            <div
              onClick={onResearchClick}
              className={
                researchClick
                  ? "class-research class class-active"
                  : "class-research class"
              }
            >
              MM졸업연구
            </div>
          </div>
        </div>
        <div className="project-features"></div>
      </div>
    </div>
  );
}

export default ProjectMcontents;
