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
import GongHyobin from "../assets/images/ProfileImage/VI/VI공효빈.gif";
import GongHyobinSmile from "../assets/images/ProfileImage/VI/VI_smile_공효빈.gif";
import KwakYunseok from "../assets/images/ProfileImage/VI/VI곽윤석.gif";
import KwakYunseokSmile from "../assets/images/ProfileImage/VI/VI_smile_곽윤석.gif";
import GuHyejin from "../assets/images/ProfileImage/DC/DC구혜진.gif";
import GuHyejinSmile from "../assets/images/ProfileImage/DC/DC_smile_구혜진.gif";
import KimKiseong from "../assets/images/ProfileImage/DC/DC김기성.gif";
import KimKiseongSmile from "../assets/images/ProfileImage/DC/DC_smile_김기성.gif";
import KimNayoung from "../assets/images/ProfileImage/DC/DC김나영.gif";
import KimNayoungSmile from "../assets/images/ProfileImage/DC/DC_smile_김나영.gif";
import KimMoonju from "../assets/images/ProfileImage/DC/DC김문주.gif";
import KimMoonjuSmile from "../assets/images/ProfileImage/DC/DC_smile_김문주.gif";
import KimBeomcheon from "../assets/images/ProfileImage/MM/MM김범찬.gif";
import KimBeomcheonSmile from "../assets/images/ProfileImage/MM/MM_smile_김범찬.gif";
import KimByeongJun from "../assets/images/ProfileImage/MM/MM김병준.gif";
import KimByeongJunSmile from "../assets/images/ProfileImage/MM/MM_smile_김병준.gif";
import KimSeonghyeok from "../assets/images/ProfileImage/MM/MM김성협.gif";
import KimSeonghyeokSmile from "../assets/images/ProfileImage/MM/MM_smile_김성협.gif";
import KimSiyoung from "../assets/images/ProfileImage/MM/MM김시영.gif";
import KimSiyoungSmile from "../assets/images/ProfileImage/MM/MM_smile_김시영.gif";
import KimSieun from "../assets/images/ProfileImage/DC/DC김시은.gif";
import KimSieunSmile from "../assets/images/ProfileImage/DC/DC_smile_김시은.gif";
import KimYeawon from "../assets/images/ProfileImage/MM/MM김예원.gif";
import KimYeawonSmile from "../assets/images/ProfileImage/MM/MM_smile_김예원.gif";
import KimJisu from "../assets/images/ProfileImage/MM/MM김지수.gif";
import KimJisuSmile from "../assets/images/ProfileImage/MM/MM_smile_김지수.gif";
import KimChohee from "../assets/images/ProfileImage/VI/VI김초희.gif";
import KimChoheeSmile from "../assets/images/ProfileImage/VI/VI_smile_김초희.gif";
import KimHyunsoo from "../assets/images/ProfileImage/MM/MM김현수.gif";
import KimHyunsooSmile from "../assets/images/ProfileImage/MM/MM_smile_김현수.gif";
import NohYeonhui from "../assets/images/ProfileImage/VI/VI노연희.gif";
import NohYeonhuiSmile from "../assets/images/ProfileImage/VI/VI_smile_노연희.gif";
import MaJun from "../assets/images/ProfileImage/MM/MM마준.gif";
import MaJunSmile from "../assets/images/ProfileImage/MM/MM_smile_마준.gif";
import MoonSungHee from "../assets/images/ProfileImage/MM/MM문성희.gif";
import MoonSungHeeSmile from "../assets/images/ProfileImage/MM/MM_smile_문성희.gif";
import ParkMingyu from "../assets/images/ProfileImage/DC/DC박민규.gif";
import ParkMingyuSmile from "../assets/images/ProfileImage/DC/DC_smile_박민규.gif";
import ParkSeongho from "../assets/images/ProfileImage/VI/VI박성호.gif";
import ParkSeonghoSmile from "../assets/images/ProfileImage/VI/VI_smile_박성호.gif";
import ParkSumin from "../assets/images/ProfileImage/MM/MM박수민.gif";
import ParkSuminSmile from "../assets/images/ProfileImage/MM/MM_smile_박수민.gif";
import ParkEunsu from "../assets/images/ProfileImage/MM/MM박은수.gif";
import ParkEunsuSmile from "../assets/images/ProfileImage/MM/MM_smile_박은수.gif";
import BaekJeonghun from "../assets/images/ProfileImage/VI/VI백정훈.gif";
import BaekJeonghunSmile from "../assets/images/ProfileImage/VI/VI_smile_백정훈.gif";
import BaekJaehoon from "../assets/images/ProfileImage/VI/VI백제훈.gif";
import BaekJaehoonSmile from "../assets/images/ProfileImage/VI/VI_smile_백제훈.gif";
import BingSoeun from "../assets/images/ProfileImage/MM/MM빙소은.gif";
import BingSoeunSmile from "../assets/images/ProfileImage/MM/MM_smile_빙소은.gif";
import SeoBoeun from "../assets/images/ProfileImage/VI/VI서보은.gif";
import SeoBoeunSmile from "../assets/images/ProfileImage/VI/VI_smile_서보은.gif";
import SeoBohyeon from "../assets/images/ProfileImage/DC/DC서보현.gif";
import SeoBohyeonSmile from "../assets/images/ProfileImage/DC/DC_smile_서보현.gif";
import ArtelevaSaida from "../assets/images/ProfileImage/MM/MM아르텔레바사이다.gif";
import ArtelevaSaidaSmile from "../assets/images/ProfileImage/MM/MM_smile_아르텔레바사이다.gif";
import AnDoyeon from "../assets/images/ProfileImage/DC/DC안도연.gif";
import AnDoyeonSmile from "../assets/images/ProfileImage/DC/DC_smile_안도연.gif";
import YooJiyeon from "../assets/images/ProfileImage/VI/VI유지연.gif";
import YooJiyeonSmile from "../assets/images/ProfileImage/VI/VI_smile_유지연.gif";
import LeeDohyeon from "../assets/images/ProfileImage/DC/DC이도현.gif";
import LeeDohyeonSmile from "../assets/images/ProfileImage/DC/DC_smile_이도현.gif";
import LeeMinju from "../assets/images/ProfileImage/VI/VI이민주.gif";
import LeeMinjuSmile from "../assets/images/ProfileImage/VI/VI_smile_이민주.gif";
import LeeSeoyeon from "../assets/images/ProfileImage/MM/MM이서연.gif";
import LeeSeoyeonSmile from "../assets/images/ProfileImage/MM/MM_smile_이서연.gif";
import LeeSomin from "../assets/images/ProfileImage/MM/MM이소민.gif";
import LeeSominSmile from "../assets/images/ProfileImage/MM/MM_smile_이소민.gif";
import LeeSeungyeon from "../assets/images/ProfileImage/DC/DC이승연.gif";
import LeeSeungyeonSmile from "../assets/images/ProfileImage/DC/DC_smile_이승연.gif";
import LeeYoungmin from "../assets/images/ProfileImage/DC/DC이영민.gif";
import LeeYoungminSmile from "../assets/images/ProfileImage/DC/DC_smile_이영민.gif";
import LeeJaehee from "../assets/images/ProfileImage/VI/VI이재희.gif";
import LeeJaeheeSmile from "../assets/images/ProfileImage/VI/VI_smile_이재희.gif";
import LeeJinho from "../assets/images/ProfileImage/MM/MM이진호.gif";
import LeeJinhoSmile from "../assets/images/ProfileImage/MM/MM_smile_이진호.gif";
import LeeHanbin from "../assets/images/ProfileImage/DC/DC이한빈.gif";
import LeeHanbinSmile from "../assets/images/ProfileImage/DC/DC_smile_이한빈.gif";
import LimHyeonwoo from "../assets/images/ProfileImage/VI/VI임현우.gif";
import LimHyeonwooSmile from "../assets/images/ProfileImage/VI/VI_smile_임현우.gif";
import JangSuyoung from "../assets/images/ProfileImage/VI/VI장수영.gif";
import JangSuyoungSmile from "../assets/images/ProfileImage/VI/VI_smile_장수영.gif";
import JangEunkyo from "../assets/images/ProfileImage/DC/DC장은교.gif";
import JangEunkyoSmile from "../assets/images/ProfileImage/DC/DC_smile_장은교.gif";
// 장재석 사진이 없음
import JeongSeongjin from "../assets/images/ProfileImage/VI/VI정성진.gif";
import JeongSeongjinSmile from "../assets/images/ProfileImage/VI/VI_smile_정성진.gif";
import JeongJeongyoon from "../assets/images/ProfileImage/MM/MM정정윤.gif";
import JeongJeongyoonSmile from "../assets/images/ProfileImage/MM/MM_smile_정정윤.gif";
import JeongJuhyun from "../assets/images/ProfileImage/DC/DC정주현.gif";
import JeongJuhyunSmile from "../assets/images/ProfileImage/DC/DC_smile_정주현.gif";
import ChoSeongRae from "../assets/images/ProfileImage/DC/DC조성래.gif";
import ChoSeongRaeSmile from "../assets/images/ProfileImage/DC/DC_smile_조성래.gif";
import JoYihyeon from "../assets/images/ProfileImage/DC/DC조이현.gif";
import JoYihyeonSmile from "../assets/images/ProfileImage/DC/DC_smile_조이현.gif";
// 지강원 사진이 없음
import JiChanghyun from "../assets/images/ProfileImage/DC/DC지창현.gif";
import JiChanghyunSmile from "../assets/images/ProfileImage/DC/DC_smile_지창현.gif";
import ChoiYosep from "../assets/images/ProfileImage/VI/VI최요셉.gif";
import ChoiYosepSmile from "../assets/images/ProfileImage/VI/VI_smile_최요셉.gif";
import HeoYujin from "../assets/images/ProfileImage/VI/VI허유진.gif";
import HeoYujinSmile from "../assets/images/ProfileImage/VI/VI_smile_허유진.gif";
import HwangHyojoon from "../assets/images/ProfileImage/MM/MM황효준.gif";
import HwangHyojoonSmile from "../assets/images/ProfileImage/MM/MM_smile_황효준.gif";

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

        {/* Dsigner List  */}

        <ul className="DesignerList-list">
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Sumin"
              state={{
                src: KangSuminSmile,
                name: "강수민",
                eng: "Kang Sumin",
                major: "모션미디어",
                mail: "kazalmaty@naver.com",
              }}
            >
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
            <Link
              to="/2022/designer/profile:Jueon"
              state={{
                src: KangJueon,
                name: "강주언",
                eng: "Kang Jueon",
                major: "비주얼인포메이션디자인",
                mail: "3349520@naver.com",
              }}
            >
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
            <Link
              to="/2022/designer/profile:Hanna"
              state={{
                src: KangHanna,
                name: "강한나",
                eng: "Kang Hanna",
                major: "모션미디어",
                mail: "gkssk1556@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KangHannaSmile} alt="profile" />
                <img
                  src={KangHanna}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">강한나</div>
              <div className="DesignerList-name-eng">Kang Hanna</div>
            </Link>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Hyobin"
              state={{
                src: GongHyobin,
                name: "공효빈",
                eng: "Gong Hyobin",
                major: "비주얼인포메이션디자인",
                mail: "hyob1130@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={GongHyobinSmile} alt="profile" />
                <img
                  src={GongHyobin}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">공효빈</div>
              <div className="DesignerList-name-eng">Gong Hoybin</div>
            </Link>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Yunseok"
              state={{
                src: KwakYunseok,
                name: "곽윤석",
                eng: "Kwak Yunseok",
                major: "비주얼인포메이션디자인",
                mail: "dbstjr_98@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KwakYunseokSmile} alt="profile" />
                <img
                  src={KwakYunseok}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">곽윤석</div>
              <div className="DesignerList-name-eng">Kwak Yunseok</div>
            </Link>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Hyejin"
              state={{
                src: GuHyejin,
                name: "구혜진",
                eng: "Gu Hyejin",
                major: "디지털콘텐츠",
                mail: "fpqlt_326998@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={GuHyejinSmile} alt="profile" />
                <img
                  src={GuHyejin}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">구혜진</div>
              <div className="DesignerList-name-eng">Gu Hyejin</div>
            </Link>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Hyejin"
              state={{
                src: KimKiseong,
                name: "김기성",
                eng: "Kim Kiseong",
                major: "디지털콘텐츠",
                mail: "kimkiseong98@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimKiseongSmile} alt="profile" />
                <img
                  src={KimKiseong}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김기성</div>
              <div className="DesignerList-name-eng">Kim Kiseong</div>
            </Link>
          </li>
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Hyejin"
              state={{
                src: KimNayoung,
                name: "김나영",
                eng: "Kim Nayoung",
                major: "디지털콘텐츠",
                mail: "sdf02033@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimNayoungSmile} alt="profile" />
                <img
                  src={KimNayoung}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김나영</div>
              <div className="DesignerList-name-eng">Kim Nayoung</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Hyejin"
              state={{
                src: KimMoonju,
                name: "김문주",
                eng: "Kim Moonju",
                major: "디지털콘텐츠",
                mail: "m.jju422@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimMoonjuSmile} alt="profile" />
                <img
                  src={KimMoonju}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김문주</div>
              <div className="DesignerList-name-eng">Kim Moonju</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Beomcheon"
              state={{
                src: KimBeomcheon,
                name: "김범천",
                major: "모션미디어",

                eng: "Kim Beomcheon",
                mail: "kmo1072@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimBeomcheonSmile} alt="profile" />
                <img
                  src={KimBeomcheon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김범천</div>
              <div className="DesignerList-name-eng">Kim Beomcheon</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:ByeongJun"
              state={{
                src: KimByeongJun,
                name: "김병준",
                major: "모션미디어",

                eng: "Kim ByeongJun",
                mail: "cjs_end2@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimByeongJunSmile} alt="profile" />
                <img
                  src={KimByeongJun}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김병준</div>
              <div className="DesignerList-name-eng">Kim ByeongJun</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Seonghyeok"
              state={{
                src: KimSeonghyeok,
                name: "김성혁",
                major: "모션미디어",

                eng: "Kim Seonghyeok",
                mail: "slek4361@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimSeonghyeokSmile} alt="profile" />
                <img
                  src={KimSeonghyeok}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김성혁</div>
              <div className="DesignerList-name-eng">Kim Seonghyeok</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Siyoung"
              state={{
                src: KimSiyoung,
                name: "김시영",
                major: "모션미디어",

                eng: "Kim Siyoung",
                mail: "tldud3956@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimSiyoungSmile} alt="profile" />
                <img
                  src={KimSiyoung}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김시영</div>
              <div className="DesignerList-name-eng">Kim Siyoung</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Sieun"
              state={{
                src: KimSieun,
                name: "김시은",
                major: "디지털콘텐츠",

                eng: "Kim Sieun",
                mail: "kns9559sn@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimSieunSmile} alt="profile" />
                <img
                  src={KimSieun}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김시은</div>
              <div className="DesignerList-name-eng">Kim Sieun</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Yeawon"
              state={{
                src: KimYeawon,
                name: "김예원",
                major: "모션미디어",

                eng: "Kim Yeawon",
                mail: "55kyw@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimYeawonSmile} alt="profile" />
                <img
                  src={KimYeawon}
                  alt="profile"
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김예원</div>
              <div className="DesignerList-name-eng">Kim Yeawon</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Jisu"
              state={{
                src: KimJisu,
                name: "김지수",
                major: "모션미디어",

                eng: "Kim Jisu",
                mail: "jisu8126@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimJisuSmile} alt="profile" />
                <img
                  src={KimJisu}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김지수</div>
              <div className="DesignerList-name-eng">Kim Jisu</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Chohee"
              state={{
                src: KimChohee,
                name: "김초희",
                major: "비주얼인포메이션디자인",

                eng: "Kim Chohee",
                mail: "kch1571@daum.net",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimChoheeSmile} alt="profile" />
                <img
                  src={KimChohee}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김초희</div>
              <div className="DesignerList-name-eng">Kim Chohee</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Hyunsoo"
              state={{
                src: KimHyunsoo,
                name: "김현수",
                major: "모션미디어",

                eng: "Kim Hyunsoo",
                mail: "hyun98soo@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={KimHyunsooSmile} alt="profile" />
                <img
                  src={KimHyunsoo}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김현수</div>
              <div className="DesignerList-name-eng">Kim Hyunsoo</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Yeonhui"
              state={{
                src: NohYeonhui,
                name: "노연희",
                major: "비주얼인포메이션디자인",

                eng: "Noh Yeonhui",
                mail: "wkdch5538@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={NohYeonhuiSmile} alt="profile" />
                <img
                  src={NohYeonhui}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">노연희</div>
              <div className="DesignerList-name-eng">Noh Yeonhui</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Jun"
              state={{
                src: MaJun,
                name: "마준",
                major: "모션미디어",

                eng: "Ma Jun",
                mail: "junhong0815@gmaiil.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={MaJunSmile} alt="profile" />
                <img
                  src={MaJun}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">마준</div>
              <div className="DesignerList-name-eng">Ma Jun</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:SungHee"
              state={{
                src: MoonSungHee,
                name: "문성희",
                major: "모션미디어",

                eng: "Moon SungHee",
                mail: "moonangel2@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={MoonSungHeeSmile} alt="profile" />
                <img
                  src={MoonSungHee}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">문성희</div>
              <div className="DesignerList-name-eng">Moon SungHee</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Mingyu"
              state={{
                src: ParkMingyu,
                name: "박민규",
                major: "디지털콘텐츠",

                eng: "Park Mingyu",
                mail: "parkmin9yu@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={ParkMingyuSmile} alt="profile" />
                <img
                  src={ParkMingyu}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">박민규</div>
              <div className="DesignerList-name-eng">Park Mingyu</div>
            </Link>
          </li>{" "}
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Seongho"
              state={{
                src: ParkSeongho,
                name: "박성호",
                major: "비주얼인포메이션디자인",

                eng: "Park Seongho",
                mail: "atree3682@daum.net",
              }}
            >
              <div className="DesignerList-image">
                <img src={ParkSeonghoSmile} alt="profile" />
                <img
                  src={ParkSeongho}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">박성호</div>
              <div className="DesignerList-name-eng">Park Seongho</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Sumin"
              state={{
                src: ParkSumin,
                name: "박수민",
                major: "모션미디어",

                eng: "Park Sumin",
                mail: "sumin10618@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={ParkSuminSmile} alt="profile" />
                <img
                  src={ParkSumin}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">박수민</div>
              <div className="DesignerList-name-eng">Park Sumin</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Eunsu"
              state={{
                src: ParkEunsu,
                name: "박은수",
                major: "모션미디어",

                eng: "Park Eunsu",
                mail: "unsu01181@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={ParkEunsuSmile} alt="profile" />
                <img
                  src={ParkEunsu}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">박은수</div>
              <div className="DesignerList-name-eng">Park Eunsu</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Jeonghun"
              state={{
                src: BaekJeonghun,
                name: "백정훈",
                major: "비주얼인포메이션디자인",

                eng: "Baek Jeonghun",
                mail: "duemno99@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={BaekJeonghunSmile} alt="profile" />
                <img
                  src={BaekJeonghun}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">백정훈</div>
              <div className="DesignerList-name-eng">Baek Jeonghun</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Jaehoon"
              state={{
                src: BaekJaehoon,
                name: "백제훈",
                major: "디지털콘텐츠",
                major2: "비주얼인포메이션디자인",
                eng: "Baek Jaehoon",
                mail: "bjh990225@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={BaekJaehoonSmile} alt="profile" />
                <img
                  src={BaekJaehoon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">백제훈</div>
              <div className="DesignerList-name-eng">Baek Jaehoon</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all brovo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Soeun"
              state={{
                src: BingSoeun,
                name: "빙소은",
                major: "모션미디어",

                eng: "Bing Soeun",
                mail: "ilyjej1208@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={BingSoeunSmile} alt="profile" />
                <img
                  src={BingSoeun}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">빙소은</div>
              <div className="DesignerList-name-eng">Bing Soeun</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Boeun"
              state={{
                src: SeoBoeun,
                name: "서보은",
                major: "비주얼인포메이션디자인",

                eng: "Seo Boeun",
                mail: "sbe3410@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={SeoBoeunSmile} alt="profile" />
                <img
                  src={SeoBoeun}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">서보은</div>
              <div className="DesignerList-name-eng">Seo Boeun</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Bohyeon"
              state={{
                src: SeoBohyeon,
                name: "서보현",
                major: "디지털콘텐츠",

                eng: "Seo Bohyeon",
                mail: "seobori2000@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={SeoBohyeonSmile} alt="profile" />
                <img
                  src={SeoBohyeon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">서보현</div>
              <div className="DesignerList-name-eng">Seo Bohyeon</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Arteleva"
              state={{
                src: ArtelevaSaida,
                name: "아르텔레바 사이다",
                major: "모션미디어",

                eng: "Arteleva Saida",
                mail: "saida.arteleva@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={ArtelevaSaidaSmile} alt="profile" />
                <img
                  src={ArtelevaSaida}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">아르텔레바 사이다</div>
              <div className="DesignerList-name-eng">Arteleva Saida</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Doyeon"
              state={{
                src: AnDoyeon,
                name: "안도연",
                major: "디지털콘텐츠",

                eng: "An Doyeon",
                mail: "rkornne@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={AnDoyeonSmile} alt="profile" />
                <img
                  src={AnDoyeon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">안도연</div>
              <div className="DesignerList-name-eng">An Doyeon</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Jiyeon"
              state={{
                src: YooJiyeon,
                name: "유지연",
                major: "비주얼인포메이션디자인",

                eng: "Yoo Jiyeon",
                mail: "wcdg1017@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={YooJiyeonSmile} alt="profile" />
                <img
                  src={YooJiyeon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">유지연</div>
              <div className="DesignerList-name-eng">Yoo Jiyeon</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Dohyeon"
              state={{
                src: LeeDohyeon,
                name: "이도현",
                major: "디지털콘텐츠",

                eng: "Lee Dohyeon",
                mail: "hyeonn323@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={LeeDohyeonSmile} alt="profile" />
                <img
                  src={LeeDohyeon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이도현</div>
              <div className="DesignerList-name-eng">Lee Dohyeon</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Minju"
              state={{
                src: LeeMinju,
                name: "이민주",
                major: "비주얼인포메이션디자인",

                eng: "Lee Minju",
                mail: "m06090@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={LeeMinjuSmile} alt="profile" />
                <img
                  src={LeeMinju}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이민주</div>
              <div className="DesignerList-name-eng">Lee Minju</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Seoyeon"
              state={{
                src: LeeSeoyeon,
                name: "이서연",
                major: "모션미디어",

                eng: "Lee Seoyeon",
                mail: "2syeonnn@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={LeeSeoyeonSmile} alt="profile" />
                <img
                  src={LeeSeoyeon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이서연</div>
              <div className="DesignerList-name-eng">Lee Seoyeon</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Somin"
              state={{
                src: LeeSomin,
                name: "이소민",
                major: "모션미디어",

                eng: "Lee Somin",
                mail: "dlthals29@daum.net",
              }}
            >
              <div className="DesignerList-image">
                <img src={LeeSominSmile} alt="profile" />
                <img
                  src={LeeSomin}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이소민</div>
              <div className="DesignerList-name-eng">Lee Somin</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Seungyeon"
              state={{
                src: LeeSeungyeon,
                name: "이승연",
                major: "디지털콘텐츠",

                eng: "Lee Seungyeon",
                mail: "lee40095617@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={LeeSeungyeonSmile} alt="profile" />
                <img
                  src={LeeSeungyeon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이승연</div>
              <div className="DesignerList-name-eng">Lee Seungyeon</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Youngmin"
              state={{
                src: LeeYoungmin,
                name: "이영민",
                major: "디지털콘텐츠",

                eng: "Lee Youngmin",
                mail: "rjscl343@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={LeeYoungminSmile} alt="profile" />
                <img
                  src={LeeYoungmin}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이영민</div>
              <div className="DesignerList-name-eng">Lee Youngmin</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Jaehee"
              state={{
                src: LeeJaehee,
                name: "이재희",
                major: "비주얼인포메이션디자인",

                eng: "Lee Jaehee",
                mail: "leejh6873@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={LeeJaeheeSmile} alt="profile" />
                <img
                  src={LeeJaehee}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이재희</div>
              <div className="DesignerList-name-eng">Lee Jaehee</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Jinho"
              state={{
                src: LeeJinho,
                name: "이진호",
                major: "모션미디어",

                eng: "Lee Jinho",
                mail: "leejh6873@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={LeeJinhoSmile} alt="profile" />
                <img
                  src={LeeJinho}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이진호</div>
              <div className="DesignerList-name-eng">Lee Jinho</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Hanbin"
              state={{
                src: LeeHanbin,
                name: "이한빈",
                major: "디지털콘텐츠",

                eng: "Lee Hanbin",
                mail: "hans.hanbin.lee@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={LeeHanbinSmile} alt="profile" />
                <img
                  src={LeeHanbin}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이한빈</div>
              <div className="DesignerList-name-eng">Lee Hanbin</div>
            </Link>
          </li>
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Hyeonwoo"
              state={{
                src: LimHyeonwoo,
                name: "임현우",
                major: "비주얼인포메이션디자인",

                eng: "Lim Hyeonwoo",
                mail: "gkrktk123@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={LimHyeonwooSmile} alt="profile" />
                <img
                  src={LimHyeonwoo}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">임현우</div>
              <div className="DesignerList-name-eng">Lim Hyeonwoo</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Suyoung"
              state={{
                src: JangSuyoung,
                name: "장수영",
                major: "비주얼인포메이션디자인",

                eng: "Jang Suyoung",
                mail: "wkdtndud0426@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={JangSuyoungSmile} alt="profile" />
                <img
                  src={JangSuyoung}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">장수영</div>
              <div className="DesignerList-name-eng">Jang Suyoung </div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Eunkyo"
              state={{
                src: JangEunkyo,
                name: "장은교",
                major: "디지털콘텐츠",

                eng: "Jang Eunkyo",
                mail: "429650@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={JangEunkyoSmile} alt="profile" />
                <img
                  src={JangEunkyo}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">장은교</div>
              <div className="DesignerList-name-eng">Jang Eunkyo</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Jaeseok"
              state={{
                src: Image,
                name: "장재석",
                major: "디지털콘텐츠",

                eng: "Jang Jaeseok",
                mail: "bm34c@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={Image} alt="profile" />
                <img
                  src={Image}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">장재석</div>
              <div className="DesignerList-name-eng">Jang Jaeseok</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Seongjin"
              state={{
                src: JeongSeongjin,
                name: "정성진",
                major: "비주얼인포메이션디자인",

                eng: "Jeong Seongjin",
                mail: "jsjpati@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={JeongSeongjinSmile} alt="profile" />
                <img
                  src={JeongSeongjin}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">정성진</div>
              <div className="DesignerList-name-eng">Jeong Seongjin</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Jeongyoon"
              state={{
                src: JeongJeongyoon,
                name: "정정윤",
                major: "모션미디어",

                eng: "Jeong Jeongyoon",
                mail: "wjddbs1777@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={JeongJeongyoonSmile} alt="profile" />
                <img
                  src={JeongJeongyoon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">정정윤</div>
              <div className="DesignerList-name-eng">Jeong Jeongyoon</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Juhyun"
              state={{
                src: JeongJuhyun,
                name: "정주현",
                major: "디지털콘텐츠",

                major2: "비주얼인포메이션디자인",

                eng: "Jeong Juhyun",
                mail: "qwert911262@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={JeongJuhyunSmile} alt="profile" />
                <img
                  src={JeongJuhyun}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">정주현</div>
              <div className="DesignerList-name-eng">Jeong Juhyun</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:SeongRae"
              state={{
                src: ChoSeongRae,
                name: "조성래",
                major: "디지털콘텐츠",

                eng: "Cho SeongRae",
                mail: "srj9704@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={ChoSeongRaeSmile} alt="profile" />
                <img
                  src={ChoSeongRae}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">조성래</div>
              <div className="DesignerList-name-eng">Cho SeongRae</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:SeongRae"
              state={{
                src: JoYihyeon,
                name: "조이현",
                major: "디지털콘텐츠",

                eng: "Jo Yihyeon",
                mail: "j2hyun980@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={JoYihyeonSmile} alt="profile" />
                <img
                  src={JoYihyeon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">조이현</div>
              <div className="DesignerList-name-eng">Jo Yihyeon</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Kangwon"
              state={{
                src: Image,
                name: "지강원",
                major: "디지털콘텐츠",

                eng: "Ji Kangwon",
                mail: "wlrkddnjs777@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={Image} alt="profile" />
                <img
                  src={Image}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">지강원</div>
              <div className="DesignerList-name-eng">Ji Kangwon</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Changhyun"
              state={{
                src: JiChanghyun,
                name: "지창현",
                major: "디지털콘텐츠",

                eng: "Ji Changhyun",
                mail: "jchyundesign@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={JiChanghyunSmile} alt="profile" />
                <img
                  src={JiChanghyun}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">지창현</div>
              <div className="DesignerList-name-eng">Ji Changhyun</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Yosep"
              state={{
                src: ChoiYosep,
                name: "최요셉",
                major: "비주얼인포메이션디자인",

                eng: "Choi Yosep",
                mail: "tozerothree@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={ChoiYosepSmile} alt="profile" />
                <img
                  src={ChoiYosep}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">최요셉</div>
              <div className="DesignerList-name-eng">Choi Yosep</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Yujin"
              state={{
                src: HeoYujin,
                name: "허유진",
                major: "비주얼인포메이션디자인",

                eng: "Heo Yujin",
                mail: "heoyujin9041@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={HeoYujinSmile} alt="profile" />
                <img
                  src={HeoYujin}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">허유진</div>
              <div className="DesignerList-name-eng">Heo Yujin</div>
            </Link>
          </li>
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/profile:Hyojoon"
              state={{
                src: HwangHyojoon,
                name: "황효준",
                major: "모션미디어",

                eng: "Hwang Hyojoon",
                mail: "hwanghyojoon97@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img src={HwangHyojoonSmile} alt="profile" />
                <img
                  src={HwangHyojoon}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">황효준</div>
              <div className="DesignerList-name-eng">Hwang Hyojoon</div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Designer;
