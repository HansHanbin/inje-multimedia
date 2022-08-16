import React from "react";
import "./AboutVisual.scss";

import VisualPolygons from "../../assets/images/AboutVisualPolygons.png";
import VisualPoster from "../../assets/images/AboutVisualPoster.png";
import VisualPolygonsMedium from "../../assets/images/AboutVisualPolygons738.png";
import VisualPolygonsSmall from "../../assets/images/AboutVisualPolygons390.png";

function AboutVisual() {
  return (
    <>
      <div className="about-visual">
        <div className="about-visual-wrapper">
          <div className="about-visual-title">VIsual Identity</div>

          <div className="about-visual-images">
            <img
              src={VisualPoster}
              alt="poster"
              className="visual-img-poster visual-image"
            />

            <img
              src={VisualPolygonsMedium}
              alt="polygons medium size"
              className="visual-img-polygons__medium visual-image"
            />

            <img
              src={VisualPolygons}
              alt="polygons"
              className="visual-img-polygons visual-image"
            />

            <img
              src={VisualPolygonsSmall}
              alt="polygons small size"
              className="visual-img-polygons__small visual-image"
            />
          </div>

          <div className="about-visual-description">
            우리 미래를 무한으로 펼치겠다는 마음가짐을 PRISM이라는 오브제로
            표현했습니다.
            <br /> 고유하고도 영롱한 빛깔을 띠는 프리즘 그래픽은 세 개의 면을
            가지고 있으며 이는 곧 세 가지 전공의 그래픽 모티프로 이어집니다.
          </div>
          <div className="about-visual-description__m">
            우리 미래를 무한으로 펼치겠다는 마음가짐을 PRISM이라는 오브제로
            표현했습니다.
            <br /> 고유하고도 영롱한 빛깔을 띠는 프리즘 그래픽은
            <br />세 개의 면을 가지고 있으며 이는 곧 세 가지
            <br />
            전공의 그래픽 모티프로 이어집니다.
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutVisual;
