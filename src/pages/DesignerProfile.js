import React from "react";
import { useLocation } from "react-router-dom";
import "./DesignerProfile.scss";
import HeaderDark from "../components/HeaderDark";

function DesignerProfile() {
  const location = useLocation;
  console.log(location);

  return (
    <>
      <HeaderDark />
      <div className="profile">
        <div className="profile-wrapper">
          <div className="profile-top">
            <div className="profile-img">
              <img alt="profile" />
            </div>
            <div className="profile-text">
              <div className="profile-text-name"></div>
              <div className="profile-text-eng"></div>
              <div className="profile-text-mail"></div>
            </div>
          </div>

          <div className="profile-bottom">
            <div className="profile-bottom-title">Project</div>
            <div className="profile-projects">
              <div className="profile-project-img"></div>
              <div className="profile-project-img"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerProfile;
