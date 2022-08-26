import React, { useState } from "react";
import Header from "../components/HeaderDark";
import "./Designer.scss";
import { Link } from "react-router-dom";
import Image from "../assets/images/dsigner-example.gif";

import KangSuminSmile from "../assets/images/ProfileImage/MM/MM_smile_강수민.gif";
import KangJueon from "../assets/images/ProfileImage/VI/VI강주언.gif";
import KangJueonSmile from "../assets/images/ProfileImage/VI/VI_smile_강주언.gif";
import KangHanna from "../assets/images/ProfileImage/MM/MM강한나.gif";
import KangHannaSmile from "../assets/images/ProfileImage/MM/MM_smile_강한나.gif";
import GonhHoybin from "../assets/images/ProfileImage/VI/VI공효빈.gif";
import KwakYunseok from "../assets/images/ProfileImage/VI/VI곽윤석.gif";
import GuHyejin from "../assets/images/ProfileImage/DC/DC구혜진.gif";
import KimKiseong from "../assets/images/ProfileImage/DC/DC김기성.gif";
import KimNayoung from "../assets/images/ProfileImage/DC/DC김나영.gif";
import KimMoonju from "../assets/images/ProfileImage/DC/DC김문주.gif";
import KimBeomcheon from "../assets/images/ProfileImage/MM/MM김범찬.gif";
import KimByeongJun from "../assets/images/ProfileImage/MM/MM김병준.gif";
import KimSeonghyeok from "../assets/images/ProfileImage/MM/MM김성협.gif";
import KimSiyoung from "../assets/images/ProfileImage/MM/MM김시영.gif";
import KimSieun from "../assets/images/ProfileImage/DC/DC김시은.gif";
import KimYeawon from "../assets/images/ProfileImage/MM/MM김예원.gif";
import KimJisu from "../assets/images/ProfileImage/MM/MM김지수.gif";
import KimChohee from "../assets/images/ProfileImage/VI/VI김초희.gif";
import KimHyunsoo from "../assets/images/ProfileImage/MM/MM김현수.gif";
import NohYeonhui from "../assets/images/ProfileImage/VI/VI노연희.gif";
import MaJun from "../assets/images/ProfileImage/MM/MM마준.gif";
import MoonSungHee from "../assets/images/ProfileImage/MM/MM문성희.gif";
import ParkMingyu from "../assets/images/ProfileImage/DC/DC박민규.gif";
import ParkSeongho from "../assets/images/ProfileImage/VI/VI박성호.gif";
import ParkSumin from "../assets/images/ProfileImage/MM/MM박수민.gif";
import ParkEunsu from "../assets/images/ProfileImage/MM/MM박은수.gif";
import BaekJeonghun from "../assets/images/ProfileImage/VI/VI백정훈.gif";
import BaekJaehoon from "../assets/images/ProfileImage/VI/VI백제훈.gif";
import BingSoeun from "../assets/images/ProfileImage/MM/MM빙소은.gif";
import SeoBoeun from "../assets/images/ProfileImage/VI/VI서보은.gif";
import SeoBohyeon from "../assets/images/ProfileImage/DC/DC서보현.gif";
import ArtelevaSaida from "../assets/images/ProfileImage/MM/MM아르텔레바사이다.gif";
import AnDoyeon from "../assets/images/ProfileImage/DC/DC안도연.gif";
import YooJiyeon from "../assets/images/ProfileImage/VI/VI유지연.gif";
import LeeDohyeon from "../assets/images/ProfileImage/DC/DC이도현.gif";
import LeeMinju from "../assets/images/ProfileImage/VI/VI이민주.gif";
import LeeSeoyeon from "../assets/images/ProfileImage/MM/MM이서연.gif";
import LeeSomin from "../assets/images/ProfileImage/MM/MM이소민.gif";
import LeeSeungyeon from "../assets/images/ProfileImage/DC/DC이승연.gif";
import LeeYoungmin from "../assets/images/ProfileImage/DC/DC이영민.gif";
import LeeJaehee from "../assets/images/ProfileImage/VI/VI이재희.gif";
import LeeJinho from "../assets/images/ProfileImage/MM/MM이진호.gif";
import LeeHanbin from "../assets/images/ProfileImage/DC/DC이한빈.gif";
import LimHyeonwoo from "../assets/images/ProfileImage/VI/VI임현우.gif";
import JangSuyoung from "../assets/images/ProfileImage/VI/VI장수영.gif";
import JangEunkyo from "../assets/images/ProfileImage/DC/DC장은교.gif";
// 장재석 사진이 없음
import JeongSeongjin from "../assets/images/ProfileImage/VI/VI정성진.gif";
import JeongJeongyoon from "../assets/images/ProfileImage/MM/MM정정윤.gif";
import JeongJuhyun from "../assets/images/ProfileImage/DC/DC정주현.gif";
import ChoSeongRae from "../assets/images/ProfileImage/DC/DC조성래.gif";
import JoYihyeon from "../assets/images/ProfileImage/DC/DC조이현.gif";
// 지강원 사진이 없음
import JiChanghyun from "../assets/images/ProfileImage/DC/DC지창현.gif";
import ChoiYosep from "../assets/images/ProfileImage/VI/VI최요셉.gif";
import HeoYujin from "../assets/images/ProfileImage/VI/VI허유진.gif";
import HwangHyojoon from "../assets/images/ProfileImage/MM/MM황효준.gif";

function Designer() {
  const [all, setAll] = useState(true);
  const [alpha, setAlpha] = useState(false);
  const [bravo, setBravo] = useState(false);
  const [charlie, setCharlie] = useState(false);

  const onAllClick = () => {
    setAll(true);
    setAlpha(false);
    setBravo(false);
    setCharlie(false);
  };

  const onAlphaClick = () => {
    setAll(false);
    setAlpha(true);
    setBravo(false);
    setCharlie(false);
  };

  const onBravoClick = () => {
    setAll(false);
    setAlpha(false);
    setBravo(true);
    setCharlie(false);
  };

  const onCharlieClick = () => {
    setAll(false);
    setAlpha(false);
    setBravo(false);
    setCharlie(true);
  };

  return (
    <>
      <Header />
      <div className="DesignerList-grid">
        <div className="DesignerList-header">
          <div className="DesignerList-title">Designer</div>

          <div className="DesignerList-filter">
            <div
              className={
                charlie === true
                  ? "DesignerList-filter-bold"
                  : "DesignerList-filter-medium"
              }
              onClick={onCharlieClick}
            >
              ㅈㅊㅎ
            </div>
            <div className="DesignerList-filter-line"></div>
            <div
              className={
                bravo === true
                  ? "DesignerList-filter-bold"
                  : "DesignerList-filter-medium"
              }
              onClick={onBravoClick}
            >
              ㅂㅅㅇ
            </div>
            <div className="DesignerList-filter-line"></div>
            <div
              className={
                alpha === true
                  ? "DesignerList-filter-bold"
                  : "DesignerList-filter-medium"
              }
              onClick={onAlphaClick}
            >
              ㄱㄴㅁ
            </div>
            <div className="DesignerList-filter-line"></div>
            <div
              className={
                all === true
                  ? "DesignerList-filter-bold"
                  : "DesignerList-filter-medium"
              }
              onClick={onAllClick}
            >
              All
            </div>
          </div>
        </div>

        <ul className="DesignerList-list">
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link to="/2022/designer/profile:Sumin">
              <div className="DesignerList-image">
                <img src={KangSuminSmile} alt="profile" />
              </div>
              <div className="DesignerList-name-kor">강수민</div>
              <div className="DesignerList-name-eng">Kang Sumin</div>
            </Link>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link to="/2022/designer/profile:Jueon">
              <div className="DesignerList-image">
                <img src={KangJueonSmile} alt="profile" />
                <img
                  src={KangJueon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">강주언</div>
              <div className="DesignerList-name-eng">Kang Jueon</div>
            </Link>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KangHannaSmile} alt="profile" />
              <img src={KangHanna} alt="profile " 
                className="DesignerList-profileImage"
              />
            </div>
            <div className="DesignerList-name-kor">강한나</div>
            <div className="DesignerList-name-eng">Kang Hanna</div>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={GonhHoybin} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">공효빈</div>
            <div className="DesignerList-name-eng">Gong Hoybin</div>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KwakYunseok} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">곽윤석</div>
            <div className="DesignerList-name-eng">Kwak Yunseok</div>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={GuHyejin} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">구혜진</div>
            <div className="DesignerList-name-eng">Gu Hyejin</div>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimKiseong} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김기성</div>
            <div className="DesignerList-name-eng">Kim Kiseong</div>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimNayoung} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김나영</div>
            <div className="DesignerList-name-eng">Kim Nayoung</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimMoonju} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김문주</div>
            <div className="DesignerList-name-eng">Kim Moonju</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimBeomcheon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김범천</div>
            <div className="DesignerList-name-eng">Kim Beomcheon</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimByeongJun} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김병준</div>
            <div className="DesignerList-name-eng">Kim ByeongJun</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimSeonghyeok} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김성혁</div>
            <div className="DesignerList-name-eng">Kim Seonghyeok</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimSiyoung} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김시영</div>
            <div className="DesignerList-name-eng">Kim Siyoung</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimSieun} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김시은</div>
            <div className="DesignerList-name-eng">Kim Sieun</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimYeawon} alt="profile" />
            </div>
            <div className="DesignerList-name-kor">김예원</div>
            <div className="DesignerList-name-eng">Kim Yeawon</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimJisu} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김지수</div>
            <div className="DesignerList-name-eng">Kim Jisu</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimChohee} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김초희</div>
            <div className="DesignerList-name-eng">Kim Chohee</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={KimHyunsoo} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">김현수</div>
            <div className="DesignerList-name-eng">Kim Hyunsoo</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={NohYeonhui} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">노연희</div>
            <div className="DesignerList-name-eng">Noh Yeonhui</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={MaJun} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">마준</div>
            <div className="DesignerList-name-eng">Ma Jun</div>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={MoonSungHee} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">문성희</div>
            <div className="DesignerList-name-eng">Moon SungHee</div>
          </li>{" "}
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={ParkMingyu} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">박민규</div>
            <div className="DesignerList-name-eng">Park Mingyu</div>
          </li>{" "}
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={ParkSeongho} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">박성호</div>
            <div className="DesignerList-name-eng">Park Seongho</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={ParkSumin} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">박수민</div>
            <div className="DesignerList-name-eng">Park Sumin</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={ParkEunsu} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">박은수</div>
            <div className="DesignerList-name-eng">Park Eunsu</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={BaekJeonghun} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">백정훈</div>
            <div className="DesignerList-name-eng">Baek Jeonghun</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={BaekJaehoon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">백제훈</div>
            <div className="DesignerList-name-eng">Baek Jaehoon</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={BingSoeun} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">빙소은</div>
            <div className="DesignerList-name-eng">Bing Soeun</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={SeoBoeun} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">서보은</div>
            <div className="DesignerList-name-eng">Seo Boeun</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={SeoBohyeon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">서보현</div>
            <div className="DesignerList-name-eng">Seo Bohyeon</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={ArtelevaSaida} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">아르텔레바 사이다</div>
            <div className="DesignerList-name-eng">Arteleva Saida</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={AnDoyeon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">안도연</div>
            <div className="DesignerList-name-eng">An Doyeon</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={YooJiyeon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">유지연</div>
            <div className="DesignerList-name-eng">Yoo Jiyeon</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={LeeDohyeon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">이도현</div>
            <div className="DesignerList-name-eng">Lee Dohyeon</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={LeeMinju} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">이민주</div>
            <div className="DesignerList-name-eng">Lee Minju</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={LeeSeoyeon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">이서연</div>
            <div className="DesignerList-name-eng">Lee Seoyeon</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={LeeSomin} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">이소민</div>
            <div className="DesignerList-name-eng">Lee Somin</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={LeeSeungyeon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">이승연</div>
            <div className="DesignerList-name-eng">Lee Seungyeon</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={LeeYoungmin} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">이영민</div>
            <div className="DesignerList-name-eng">Lee Youngmin</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={LeeJaehee} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">이재희</div>
            <div className="DesignerList-name-eng">Lee Jaehee</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={LeeJinho} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">이진호</div>
            <div className="DesignerList-name-eng">Lee Jinho</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={LeeHanbin} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">이한빈</div>
            <div className="DesignerList-name-eng">Lee Hanbin</div>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={LimHyeonwoo} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">임현우</div>
            <div className="DesignerList-name-eng">Lim Hyeonwoo</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={JangSuyoung} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">장수영</div>
            <div className="DesignerList-name-eng">Jang Suyoung </div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={JangEunkyo} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">장은교</div>
            <div className="DesignerList-name-eng">Jang Eunkyo</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={Image} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">장재석</div>
            <div className="DesignerList-name-eng">Jang Jaeseok</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={JeongSeongjin} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">정성진</div>
            <div className="DesignerList-name-eng">Jeong Seongjin</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={JeongJeongyoon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">정정윤</div>
            <div className="DesignerList-name-eng">Jeong Jeongyoon</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={JeongJuhyun} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">정주현</div>
            <div className="DesignerList-name-eng">Jeong Juhyun</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={ChoSeongRae} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">조성래</div>
            <div className="DesignerList-name-eng">Cho SeongRae</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={JoYihyeon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">조이현</div>
            <div className="DesignerList-name-eng">Jo Yihyeon</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={Image} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">지강원</div>
            <div className="DesignerList-name-eng">Ji Kangwon</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={JiChanghyun} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">지창현</div>
            <div className="DesignerList-name-eng">Ji Changhyun</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={ChoiYosep} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">최요셉</div>
            <div className="DesignerList-name-eng">Choi Yosep</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={HeoYujin} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">허유진</div>
            <div className="DesignerList-name-eng">Heo Yujin</div>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <div className="DesignerList-image">
              <img src={HwangHyojoon} alt="profile " />
            </div>
            <div className="DesignerList-name-kor">황효준</div>
            <div className="DesignerList-name-eng">Hwang Hyojoon</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Designer;
