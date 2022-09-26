import React, { useState } from "react";
import Header from "../components/HeaderDark";
import "./Designer.scss";
import { Link } from "react-router-dom";

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
              to="/2022/designer/KangSumin"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM1.gif`,
                name: "강수민",
                eng: "Kang Sumin",
                major: "모션미디어",
                mail: "kazalmaty@naver.com",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/1_studio_thumbnail.png`,
                work2: `${process.env.PUBLIC_URL}/assets/features/MM/2_research_thumbnail.png`,
                link1: "/2022/project/mm/studio",
                link2: "/2022/project/mm/research",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_1.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM1.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
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
              to="/2022/designer/KangJueon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI1.gif`,
                name: "강주언",
                eng: "Kang Jueon",
                major: "비주얼인포메이션디자인",
                mail: "3349520@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_1.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI1.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">강주언</div>
              <div className="DesignerList-name-eng">Kang Jueon</div>
            </Link>
          </li>
          {/* <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/:Hanna"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM2.gif`,
                name: "강한나",
                eng: "Kang Hanna",
                major: "모션미디어",
                mail: "gkssk1556@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_2.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM2.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">강한나</div>
              <div className="DesignerList-name-eng">Kang Hanna</div>
            </Link>
          </li> */}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Hyobin"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI2.gif`,
                name: "공효빈",
                eng: "Gong Hyobin",
                major: "비주얼인포메이션디자인",
                mail: "hyob1130@naver.com",
                work1: `${process.env.PUBLIC_URL}/assets/features/VI/2_studio_thumbnail.png`,
                work2: `${process.env.PUBLIC_URL}/assets/features/VI/2_research_thumbnail.png`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_2.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI2.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">공효빈</div>
              <div className="DesignerList-name-eng">Gong Hyobin</div>
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
              to="/2022/designer/Yunseok"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI3.gif`,
                name: "곽윤석",
                eng: "Kwak Yunseok",
                major: "비주얼인포메이션디자인",
                mail: "dbstjr_98@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_3.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI3.gif`}
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
              to="/2022/designer/Hyejin"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC1.gif`,
                name: "구혜진",
                eng: "Gu Hyejin",
                major: "디지털콘텐츠",
                mail: "fpqlt_326998@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_1.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC1.gif`}
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
              to="/2022/designer/Kiseong"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC2.gif`,
                name: "김기성",
                eng: "Kim Kiseong",
                major: "디지털콘텐츠",
                mail: "kimkiseong98@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_2.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC2.gif`}
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
              to="/2022/designer/Nayoung"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC3.gif`,
                name: "김나영",
                eng: "Kim Nayoung",
                major: "디지털콘텐츠",
                mail: "sdf02033@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_3.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC3.gif`}
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
              to="/2022/designer/Moonju"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC4.gif`,
                name: "김문주",
                eng: "Kim Moonju",
                major: "디지털콘텐츠",
                mail: "m.jju422@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_4.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC4.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김문주</div>
              <div className="DesignerList-name-eng">Kim Moonju</div>
            </Link>
          </li>{" "}
          {/* <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Beomcheon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM3.gif`,
                name: "김범천",
                major: "모션미디어",
                eng: "Kim Beomcheon",
                mail: "kmo1072@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_3.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM3.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김범천</div>
              <div className="DesignerList-name-eng">Kim Beomcheon</div>
            </Link>
          </li>{" "} */}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/ByeongJun"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM4.gif`,
                name: "김병준",
                major: "모션미디어",

                eng: "Kim Byeongjun",
                mail: "cjs_end2@naver.com",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/2_studio_thumbnail.png`,
                link1: "/2022/project/mm/studio",
                link2: "/2022/project/mm/research",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_4.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM4.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김병준</div>
              <div className="DesignerList-name-eng">Kim Byeongjun</div>
            </Link>
          </li>{" "}
          {/* <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Seonghyeok"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM5.gif`,
                name: "김성혁",
                major: "모션미디어",

                eng: "Kim Seonghyeok",
                mail: "slek4361@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_5.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM5.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김성혁</div>
              <div className="DesignerList-name-eng">Kim Seonghyeok</div>
            </Link>
          </li>{" "} */}
          {/* <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Siyoung"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM6.gif`,
                name: "김시영",
                major: "모션미디어",

                eng: "Kim Siyoung",
                mail: "tldud3956@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_6.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM6.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김시영</div>
              <div className="DesignerList-name-eng">Kim Siyoung</div>
            </Link>
          </li>{" "} */}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Sieun"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC5.gif`,
                name: "김시은",
                major: "디지털콘텐츠",

                eng: "Kim Sieun",
                mail: "kns9559sn@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_5.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC5.gif`}
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
              to="/2022/designer/Yeawon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM7.gif`,
                name: "김예원",
                major: "모션미디어",
                eng: "Kim Yeawon",
                mail: "55kyw@naver.com",
                link1: "/2022/project/mm/studio",
                link2: "/2022/project/mm/research",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/3_studio_thumbnail.png`,
                work2: `${process.env.PUBLIC_URL}/assets/features/MM/2_research_thumbnail.png`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_7.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM7.gif`}
                  alt="profile"
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김예원</div>
              <div className="DesignerList-name-eng">Kim Yeawon</div>
            </Link>
          </li>{" "}
          {/* <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Jisu"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM8.gif`,
                name: "김지수",
                major: "모션미디어",

                eng: "Kim Jisu",
                mail: "jisu8126@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_8.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM8.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">김지수</div>
              <div className="DesignerList-name-eng">Kim Jisu</div>
            </Link>
          </li>{" "} */}
          <li
            className={
              all || alpha === true
                ? "DesignerList-person  all alpha"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Chohee"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI4.gif`,
                name: "김초희",
                major: "비주얼인포메이션디자인",

                eng: "Kim Chohee",
                mail: "kch1571@daum.net",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_4.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI4.gif`}
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
              to="/2022/designer/Hyunsoo"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM9.gif`,
                name: "김현수",
                major: "모션미디어",

                eng: "Kim Hyunsoo",
                mail: "hyun98soo@naver.com",
                link1: "/2022/project/mm/studio",
                link2: "/2022/project/mm/research",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/5_studio_thumbnail.png`,
                work2: `${process.env.PUBLIC_URL}/assets/features/MM/1_research_thumbnail.png`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_9.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM9.gif`}
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
              to="/2022/designer/Yeonhui"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI5.gif`,
                name: "노연희",
                major: "비주얼인포메이션디자인",

                eng: "Noh Yeonhui",
                mail: "wkdch5538@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_5.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI5.gif`}
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
              to="/2022/designer/Jun"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM10.gif`,
                name: "마준",
                major: "모션미디어",
                eng: "Ma Jun",
                mail: "junhong0815@gmaiil.com",
                link1: "/2022/project/mm/studio",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/5_studio_thumbnail.png`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_10.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM10.gif`}
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
              to="/2022/designer/SungHee"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM11.gif`,
                name: "문성희",
                major: "모션미디어",
                eng: "Moon Sunghee",
                mail: "moonangel2@naver.com",
                link1: "/2022/project/mm/studio",
                link2: "/2022/project/mm/research",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/3_studio_thumbnail.png`,
                work2: `${process.env.PUBLIC_URL}/assets/features/MM/2_research_thumbnail.png`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_11.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM11.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">문성희</div>
              <div className="DesignerList-name-eng">Moon Sunghee</div>
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
              to="/2022/designer/Mingyu"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC6.gif`,
                name: "박민규",
                major: "디지털콘텐츠",

                eng: "Park Mingyu",
                mail: "parkmin9yu@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_6.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC6.gif`}
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
              to="/2022/designer/Seongho"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI6.gif`,
                name: "박성호",
                major: "비주얼인포메이션디자인",

                eng: "Park Seongho",
                mail: "atree3682@daum.net",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_6.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI6.gif`}
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
              to="/2022/designer/ParkSumin"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM12.gif`,
                name: "박수민",
                major: "모션미디어",
                eng: "Park Sumin",
                mail: "sumin10618@naver.com",
                link1: "/2022/project/mm/studio",
                link2: "/2022/project/mm/research",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/4_studio_thumbnail.png`,
                work2: `${process.env.PUBLIC_URL}/assets/features/MM/1_research_thumbnail.png`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_12.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM12.gif`}
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
              to="/2022/designer/Eunsu"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM13.gif`,
                name: "박은수",
                major: "모션미디어",

                eng: "Park Eunsu",
                mail: "unsu01181@naver.com",
                link1: "/2022/project/mm/studio",
                link2: "/2022/project/mm/research",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/1_studio_thumbnail.png`,
                work2: `${process.env.PUBLIC_URL}/assets/features/MM/3_research_thumbnail.jpg`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_13.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM13.gif`}
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
              to="/2022/designer/Jeonghun"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI7.gif`,
                name: "백정훈",
                major: "비주얼인포메이션디자인",

                eng: "Baek Jeonghun",
                mail: "duemno99@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_7.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI7.gif`}
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
              to="/2022/designer/Jaehoon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI8.gif`,
                name: "백제훈",

                major1: "비주얼인포메이션디자인",
                eng: "Baek Jaehoon",
                mail: "bjh990225@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_8.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI8.gif`}
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
              to="/2022/designer/Soeun"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM14.gif`,
                name: "빙소은",
                major: "모션미디어",
                eng: "Bing Soeun",
                mail: "ilyjej1208@naver.com",
                link1: "/2022/project/mm/studio",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/3_research_thumbnail.jpg`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_14.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM14.gif`}
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
              to="/2022/designer/Boeun"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI9.gif`,
                name: "서보은",
                major: "비주얼인포메이션디자인",

                eng: "Seo Boeun",
                mail: "sbe3410@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_9.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI9.gif`}
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
              to="/2022/designer/Bohyeon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC7.gif`,
                name: "서보현",
                major: "디지털콘텐츠",

                eng: "Seo Bohyeon",
                mail: "seobori2000@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_7.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC7.gif`}
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
              to="/2022/designer/Arteleva"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM15.gif`,
                name: "아르텔레바 사이다",
                major: "모션미디어",
                eng: "Arteleva Saida",
                mail: "saida.arteleva@gmail.com",
                link1: "/2022/project/mm/studio",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/3_research_thumbnail.jpg`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_15.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM15.gif`}
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
              to="/2022/designer/Doyeon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC8.gif`,
                name: "안도연",
                major: "디지털콘텐츠",

                eng: "An Doyeon",
                mail: "rkornne@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_8.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC8.gif`}
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
              to="/2022/designer/Jiyeon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI10.gif`,
                name: "유지연",
                major: "비주얼인포메이션디자인",

                eng: "Yoo Jiyeon",
                mail: "wcdg1017@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_10.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI10.gif`}
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
              to="/2022/designer/Dohyeon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC9.gif`,
                name: "이도현",
                major: "디지털콘텐츠",

                eng: "Lee Dohyeon",
                mail: "hyeonn323@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_9.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC9.gif`}
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
              to="/2022/designer/Minju"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI11.gif`,
                name: "이민주",
                major: "비주얼인포메이션디자인",

                eng: "Lee Minju",
                mail: "m06090@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_11.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI11.gif`}
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
              to="/2022/designer/Seoyeon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM16.gif`,
                name: "이서연",
                major: "모션미디어",

                eng: "Lee Seoyeon",
                mail: "2syeonnn@gmail.com",
                link1: "/2022/project/mm/studio",
                link2: "/2022/project/mm/research",
                work1: `${process.env.PUBLIC_URL}/assets/features/MM/4_studio_thumbnail.png`,
                work2: `${process.env.PUBLIC_URL}/assets/features/MM/1_research_thumbnail.png`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_16.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM16.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이서연</div>
              <div className="DesignerList-name-eng">Lee Seoyeon</div>
            </Link>
          </li>
          {/* <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Somin"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM17.gif`,
                name: "이소민",
                major: "모션미디어",

                eng: "Lee Somin",
                mail: "dlthals29@daum.net",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_17.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM17.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이소민</div>
              <div className="DesignerList-name-eng">Lee Somin</div>
            </Link>
          </li> */}
          {/* <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Seungyeon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC10.gif`,
                name: "이승연",
                major: "디지털콘텐츠",

                eng: "Lee Seungyeon",
                mail: "lee40095617@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_10.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC10.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">이승연</div>
              <div className="DesignerList-name-eng">Lee Seungyeon</div>
            </Link>
          </li> */}
          <li
            className={
              all || bravo === true
                ? "DesignerList-person all bravo"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Youngmin"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC11.gif`,
                name: "이영민",
                major: "디지털콘텐츠",

                eng: "Lee Youngmin",
                mail: "rjscl343@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_11.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC11.gif`}
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
              to="/2022/designer/Jaehee"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI12.gif`,
                name: "이재희",
                major: "비주얼인포메이션디자인",

                eng: "Lee Jaehee",
                mail: "leejh6873@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_12.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI12.gif`}
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
              to="/2022/designer/Jinho"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM18.gif`,
                name: "이진호",
                major: "모션미디어",

                eng: "Lee Jinho",
                mail: "leejh6873@naver.com",
                link1: "/2022/project/mm/studio",

                work1: `${process.env.PUBLIC_URL}/assets/features/MM/2_studio_thumbnail.png`,
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_18.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM18.gif`}
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
              to="/2022/designer/Hanbin"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC12.gif`,
                name: "이한빈",
                major: "디지털콘텐츠",

                eng: "Lee Hanbin",
                mail: "hans.hanbin.lee@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_12.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC12.gif`}
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
              to="/2022/designer/Hyeonwoo"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI13.gif`,
                name: "임현우",
                major: "비주얼인포메이션디자인",

                eng: "Lim Hyeonwoo",
                mail: "gkrktk123@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_13.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI13.gif`}
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
              to="/2022/designer/Suyoung"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI14.gif`,
                name: "장수영",
                major: "비주얼인포메이션디자인",

                eng: "Jang Suyoung",
                mail: "wkdtndud0426@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_14.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI14.gif`}
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
              to="/2022/designer/Eunkyo"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC13.gif`,
                name: "장은교",
                major: "디지털콘텐츠",

                eng: "Jang Eunkyo",
                mail: "429650@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_13.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC13.gif`}
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
              to="/2022/designer/Jaeseok"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI18.gif`,
                name: "장재석",
                major: "비주얼인포메이션디자인",

                eng: "Jang Jaeseok",
                mail: "bm34c@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_18.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI18.gif`}
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
              to="/2022/designer/Seongjin"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI15.gif`,
                name: "정성진",
                major: "비주얼인포메이션디자인",

                eng: "Jeong Seongjin",
                mail: "jsjpati@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_15.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI15.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">정성진</div>
              <div className="DesignerList-name-eng">Jeong Seongjin</div>
            </Link>
          </li>
          {/* <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Jeongyoon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM19.gif`,
                name: "정정윤",
                major: "모션미디어",

                eng: "Jeong Jeongyoon",
                mail: "wjddbs1777@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_19.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM19.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">정정윤</div>
              <div className="DesignerList-name-eng">Jeong Jeongyoon</div>
            </Link>
          </li> */}
          <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Juhyun"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC14.gif`,
                name: "정주현",
                major: "디지털콘텐츠",

                major2: "비주얼인포메이션디자인",

                eng: "Jeong Juhyun",
                mail: "qwert911262@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_14.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC14.gif`}
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
              to="/2022/designer/SeongRae"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC15.gif`,
                name: "조성래",
                major: "디지털콘텐츠",

                eng: "Cho SeongRae",
                mail: "srj9704@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_15.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC15.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">조성래</div>
              <div className="DesignerList-name-eng">Cho Seongrae</div>
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
              to="/2022/designer/Yihyeon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC16.gif`,
                name: "조이현",
                major: "디지털콘텐츠",

                eng: "Jo Yihyeon",
                mail: "j2hyun980@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_16.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC16.gif`}
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
              to="/2022/designer/Kangwon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI19.gif`,
                name: "지강원",
                major: "비주얼인포메이션디자인",

                eng: "Ji Kangwon",
                mail: "wlrkddnjs777@naver.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_19.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI19.gif`}
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
              to="/2022/designer/Changhyun"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC17.gif`,
                name: "지창현",
                major: "디지털콘텐츠",

                eng: "Ji Changhyun",
                mail: "jchyundesign@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC_smile_17.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC17.gif`}
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
              to="/2022/designer/Yosep"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI16.gif`,
                name: "최요셉",
                major: "비주얼인포메이션디자인",

                eng: "Choi Yosep",
                mail: "toze/2022rothree@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_16.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI16.gif`}
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
              to="/2022/designer/Yujin"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI17.gif`,
                name: "허유진",
                major: "비주얼인포메이션디자인",

                eng: "Heo Yujin",
                mail: "heoyujin9041@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI_smile_17.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI17.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">허유진</div>
              <div className="DesignerList-name-eng">Heo Yujin</div>
            </Link>
          </li>
          {/* <li
            className={
              all || charlie === true
                ? "DesignerList-person all charlie"
                : "DesignerList-person-deActive"
            }
          >
            <Link
              to="/2022/designer/Hyojoon"
              state={{
                src: `${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM20.gif`,
                name: "황효준",
                major: "모션미디어",

                eng: "Hwang Hyojoon",
                mail: "hwanghyojoon97@gmail.com",
              }}
            >
              <div className="DesignerList-image">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM_smile_20.gif`}
                  alt="profile"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/MM/MM20.gif`}
                  alt="profile "
                  className="DesignerList-profileImage"
                />
              </div>
              <div className="DesignerList-name-kor">황효준</div>
              <div className="DesignerList-name-eng">Hwang Hyojoon</div>
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Designer;
