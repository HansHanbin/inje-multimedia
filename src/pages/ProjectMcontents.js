import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Project.scss";

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
      <div className="project">
        <div className="project-header">
          <div className="major-wrapper">
            <div className="header-major">
              <Link to="/project/dc-studio">
                <div className="major-dc ">DC</div>
              </Link>
              <Link to="/project/vi-studio">
                <div className="major-vi">VI</div>
              </Link>
              <Link to="/project/mm-studio">
                <div className="major-mm active">MM</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="project-dcstudio">
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
    </div>
  );
}

export default ProjectMcontents;
