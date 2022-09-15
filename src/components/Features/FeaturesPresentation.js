import React from "react";
import "./FeaturesPresentation.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useEffect } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
// import xButton from "/assets/images/0818Images/1920/project_x button.png";
// import buttonLight from "/assets/images/0818Images/1920/project_mode button.png";
// import buttonUp from "/assets/images/0818Images/1920/project_top button.png";
// import example from "/assets/features/example.png";

function FeaturesPresentation() {
  const location = useLocation();
  const headerImg = location.state.header;
  const featureName = location.state.featureName;
  const featureDescription = location.state.featureDescription;
  const profileImage = location.state.profileImage;
  const profileName = location.state.profileName;
  const profileEng = location.state.profileEng;
  const profileMail = location.state.profileMail;

  const work0 = location.state.work0;
  const work1 = location.state.work1;
  const work2 = location.state.work2;
  const work3 = location.state.work3;
  const work4 = location.state.work4;
  const work5 = location.state.work5;
  const work6 = location.state.work6;
  const work7 = location.state.work7;
  const work8 = location.state.work8;
  const work9 = location.state.work9;
  const work10 = location.state.work10;
  const work11 = location.state.work11;
  const work12 = location.state.work12;
  const work13 = location.state.work13;
  const work14 = location.state.work14;
  const work15 = location.state.work15;
  const work16 = location.state.work16;
  const work17 = location.state.work17;
  const work18 = location.state.work18;
  const work19 = location.state.work19;
  const work20 = location.state.work20;
  const work21 = location.state.work21;
  const work22 = location.state.work22;
  const work23 = location.state.work23;
  const work24 = location.state.work24;
  const work25 = location.state.work25;
  const work26 = location.state.work26;
  const work27 = location.state.work27;
  const work28 = location.state.work28;
  const work29 = location.state.work29;
  const work30 = location.state.work30;
  const lightMode = location.state.lightMode;
  const darkMode = location.state.darkMode;

  console.log(location);

  const { pathname } = useLocation();
  let navigate = useNavigate();
  const onCloseClick = () => {
    navigate(-1);
  };

  const [light, setLight] = useState(false);
  const onLightClick = () => setLight(!light);

  // useEffect(() => {
  //   if (light) {
  //     document.body.style.backgroundColor = "#222";
  //   } else {
  //     document.body.style.backgroundColor = "#fdfdfd";
  //   }
  // }, [light]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onUpButton = () => {
    document.documentElement.scrollTop = 0;
  };

  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const [e, setE] = useState(false);
  const [f, setF] = useState(false);
  const [g, setG] = useState(false);
  const [h, setH] = useState(false);
  const [i, setI] = useState(false);
  const [j, setJ] = useState(false);
  const [k, setK] = useState(false);
  const [l, setL] = useState(false);
  const [m, setM] = useState(false);
  const [n, setN] = useState(false);
  const [o, setO] = useState(false);
  const [p, setP] = useState(false);
  const [q, setQ] = useState(false);
  const [r, setR] = useState(false);
  const [s, setS] = useState(false);
  const [t, setT] = useState(false);
  const [v, setV] = useState(false);
  const [w, setW] = useState(false);
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  const [aa, setAA] = useState(false);
  const [bb, setBB] = useState(false);
  const [cc, setCC] = useState(false);
  const [dd, setDD] = useState(false);
  const [ee, setEE] = useState(false);
  const [ff, setFF] = useState(false);

  const onA = () => {
    if (work0 === undefined) {
      setA(false);
    } else {
      setA(true);
    }
  };
  const onB = () => {
    if (work1 === undefined) {
      setB(false);
    } else {
      setB(true);
    }
  };
  const onC = () => {
    if (work2 === undefined) {
      setC(false);
    } else {
      setC(true);
    }
  };
  const onD = () => {
    if (work3 === undefined) {
      setD(false);
    } else {
      setD(true);
    }
  };
  const onE = () => {
    if (work4 === undefined) {
      setE(false);
    } else {
      setE(true);
    }
  };

  const onF = () => {
    if (work5 === undefined) {
      setF(false);
    } else {
      setF(true);
    }
  };

  const onG = () => {
    if (work6 === undefined) {
      setG(false);
    } else {
      setG(true);
    }
  };

  const onH = () => {
    if (work7 === undefined) {
      setH(false);
    } else {
      setH(true);
    }
  };

  const onI = () => {
    if (work8 === undefined) {
      setI(false);
    } else {
      setI(true);
    }
  };

  const onJ = () => {
    if (work9 === undefined) {
      setJ(false);
    } else {
      setJ(true);
    }
  };

  const onK = () => {
    if (work10 === undefined) {
      setK(false);
    } else {
      setK(true);
    }
  };

  const onL = () => {
    if (work11 === undefined) {
      setL(false);
    } else {
      setL(true);
    }
  };

  const onM = () => {
    if (work12 === undefined) {
      setM(false);
    } else {
      setM(true);
    }
  };

  const onN = () => {
    if (work13 === undefined) {
      setN(false);
    } else {
      setN(true);
    }
  };

  const onO = () => {
    if (work14 === undefined) {
      setO(false);
    } else {
      setO(true);
    }
  };

  const onP = () => {
    if (work15 === undefined) {
      setP(false);
    } else {
      setP(true);
    }
  };

  const onQ = () => {
    if (work16 === undefined) {
      setQ(false);
    } else {
      setQ(true);
    }
  };

  const onR = () => {
    if (work17 === undefined) {
      setR(false);
    } else {
      setR(true);
    }
  };
  const onS = () => {
    if (work18 === undefined) {
      setS(false);
    } else {
      setS(true);
    }
  };

  const onT = () => {
    if (work19 === undefined) {
      setT(false);
    } else {
      setT(true);
    }
  };

  const onV = () => {
    if (work20 === undefined) {
      setV(false);
    } else {
      setV(true);
    }
  };
  const onW = () => {
    if (work21 === undefined) {
      setW(false);
    } else {
      setW(true);
    }
  };
  const onX = () => {
    if (work22 === undefined) {
      setX(false);
    } else {
      setX(true);
    }
  };
  const onY = () => {
    if (work23 === undefined) {
      setY(false);
    } else {
      setY(true);
    }
  };
  const onZ = () => {
    if (work24 === undefined) {
      setZ(false);
    } else {
      setZ(true);
    }
  };

  const onAA = () => {
    if (work25 === undefined) {
      setAA(false);
    } else {
      setAA(true);
    }
  };

  const onBB = () => {
    if (work26 === undefined) {
      setBB(false);
    } else {
      setBB(true);
    }
  };

  const onCC = () => {
    if (work27 === undefined) {
      setCC(false);
    } else {
      setCC(true);
    }
  };

  const onDD = () => {
    if (work28 === undefined) {
      setDD(false);
    } else {
      setDD(true);
    }
  };

  const onEE = () => {
    if (work29 === undefined) {
      setEE(false);
    } else {
      setEE(true);
    }
  };
  const onFF = () => {
    if (work30 === undefined) {
      setFF(false);
    } else {
      setFF(true);
    }
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
            <img
              src={work0}
              alt="work"
              onLoad={onA}
              className={
                a === false
                  ? "pt-work mobile-title none"
                  : "pt-work mobile-title"
              }
            />
            <img
              src={work1}
              alt="work"
              onLoad={onB}
              className={b === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work2}
              alt="work"
              onLoad={onC}
              className={c === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work3}
              alt="work"
              onLoad={onD}
              className={d === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work4}
              alt="work"
              onLoad={onE}
              className={e === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work5}
              alt="work"
              onLoad={onF}
              className={f === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work6}
              alt="work"
              onLoad={onG}
              className={g === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work7}
              alt="work"
              onLoad={onH}
              className={h === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work8}
              alt="work"
              onLoad={onI}
              className={i === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work9}
              alt="work"
              onLoad={onJ}
              className={j === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work10}
              alt="work"
              onLoad={onK}
              className={k === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work11}
              alt="work"
              onLoad={onL}
              className={l === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work12}
              alt="work"
              onLoad={onM}
              className={m === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work13}
              alt="work"
              onLoad={onN}
              className={n === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work14}
              alt="work"
              onLoad={onO}
              className={o === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work15}
              alt="work"
              onLoad={onP}
              className={p === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work16}
              alt="work"
              onLoad={onQ}
              className={q === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work17}
              alt="work"
              onLoad={onR}
              className={r === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work18}
              alt="work"
              onLoad={onS}
              className={s === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work19}
              alt="work"
              onLoad={onT}
              className={t === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work20}
              alt="work"
              onLoad={onV}
              className={v === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work21}
              alt="work"
              onLoad={onW}
              className={w === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work22}
              alt="work"
              onLoad={onX}
              className={x === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work23}
              alt="work"
              onLoad={onY}
              className={y === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work24}
              alt="work"
              onLoad={onZ}
              className={z === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work25}
              alt="work"
              onLoad={onAA}
              className={aa === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work26}
              alt="work"
              onLoad={onBB}
              className={bb === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work27}
              alt="work"
              onLoad={onCC}
              className={cc === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work28}
              alt="work"
              onLoad={onDD}
              className={dd === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work29}
              alt="work"
              onLoad={onEE}
              className={ee === false ? "pt-work none" : "pt-work"}
            />
            <img
              src={work30}
              alt="work"
              onLoad={onFF}
              className={ff === false ? "pt-work none" : "pt-work"}
            />
            <img src={light === false ? lightMode : darkMode} />
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
              src={`${process.env.PUBLIC_URL}/assets/images/0818Images/1920/project_x button.png`}
              alt="x button"
              className="button-x"
              onClick={onCloseClick}
            />
          </div>
          <div className="pt-buttons-bottom">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/0818Images/1920/project_mode button.png`}
              alt="light button"
              className="button-light"
              onClick={onLightClick}
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/0818Images/1920/project_top button.png`}
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
