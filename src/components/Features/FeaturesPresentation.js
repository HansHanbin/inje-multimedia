import React from "react";
import "./FeaturesPresentation.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useEffect } from "react";
import xButton from "../../assets/images/0818Images/1920/project_x button.png";
import buttonLight from "../../assets/images/0818Images/1920/project_mode button.png";
import buttonUp from "../../assets/images/0818Images/1920/project_top button.png";
import example from "../../assets/features/example.png";

function FeaturesPresentation() {
  const location = useLocation();
  const headerImg = location.state.header;
  const featureName = location.state.featureName;
  const featureDescription = location.state.featureDescription;
  const profileImage = location.state.profileImage;
  const profileName = location.state.profileName;
  const profileEng = location.state.profileEng;
  const profileMail = location.state.profileMail;

  console.log(location);

  const { pathname } = useLocation();
  let navigate = useNavigate();
  const onCloseClick = () => {
    navigate(-1);
  };

  const [light, setLight] = useState(false);
  const onLightClick = () => setLight(!light);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onUpButton = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div
        className={
          light === false ? "FeaturePresentation" : "FeaturePresentation dark"
        }
      >
        {/* 헤더 이미지 */}
        <div className="pt-header">
          <img src={headerImg} alt="header" />
        </div>

        {/* 작품 */}

        <div className="pt-contents">
          {/* 작품  개요*/}
          <div className="pt-text-wrapper">
            <div className="pt-info">
              <div className="pt-info-feature">{featureName}</div>
              <div className="pt-info-description">{featureDescription}</div>
            </div>
            <div className="pt-profile">
              <div className="pt-profile-name">{profileName}</div>
              <div className="pt-profile-eng">{profileEng}</div>
            </div>
          </div>

          {/* 작품 내용*/}
          <div className="pt-works">
            <img src={example} alt="work" className="pt-work" />
          </div>

          <div className="pt-profile-bottom">
            <div className="profile-wrapper">
              <div className="profile-title">Designer</div>
              <div className="profile-top">
                <img
                  alt="profile"
                  src={profileImage}
                  className="profile-image"
                />

                <div className="profile-text">
                  <div className="profile-text-name">
                    <div className="profile-text-kor">{profileName}</div>
                    <div className="profile-text-eng">{profileEng}</div>
                    <div className="profile-text-mail">{profileMail}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-buttons">
          <div className="pt-buttons-top">
            <img
              src={xButton}
              alt="x button"
              className="button-x"
              onClick={onCloseClick}
            />
          </div>
          <div className="pt-buttons-bottom">
            <img
              src={buttonLight}
              alt="light button"
              className="button-light"
              onClick={onLightClick}
            />
            <img
              src={buttonUp}
              alt="up button"
              className="button-up"
              onClick={onUpButton}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesPresentation;
