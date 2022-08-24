import React from "react";
import Header from "../components/HeaderDark";
import "./Designer.scss";
import Image from "../assets/images/dsigner-example.png";

function Designer() {
  return (
    <>
      <Header />
      <div className="DesignerList-grid">
        <div className="DesignerList-header">
          <div className="DesignerList-title">Designer</div>

          <div className="DesignerList-filter">
            <div className="DesignerList-filter-medium">ㅈㅊㅎ</div>
            <div className="DesignerList-filter-line"></div>
            <div className="DesignerList-filter-medium">ㅅㅇ</div>
            <div className="DesignerList-filter-line"></div>
            <div className="DesignerList-filter-medium">ㄷㄹㅁㅂ</div>
            <div className="DesignerList-filter-line"></div>
            <div className="DesignerList-filter-medium">ㄱㄴ</div>
            <div className="DesignerList-filter-line"></div>
            <div className="DesignerList-filter-bold">All</div>
          </div>
        </div>

        <ul className="DesignerList-list">
          <li className="DesignerList-person all alpha">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">아르텔레바 사이다</div>
            <div className="DesignerList-name-eng">Arteleva Saida</div>
          </li>
          <li className="DesignerList-person all alpha">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">강수민</div>
            <div className="DesignerList-name-eng">Kang Sumin</div>
          </li>
          <li className="DesignerList-person all alpha">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">강주언</div>
            <div className="DesignerList-name-eng">Kang Jueon</div>
          </li>
          <li className="DesignerList-person all alpha">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">강한나</div>
            <div className="DesignerList-name-eng">Kang Hanna</div>
          </li>
          <li className="DesignerList-person all alpha">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">공효빈</div>
            <div className="DesignerList-name-eng">Gong Hoybin</div>
          </li>
          <li className="DesignerList-person all alpha">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">곽윤석</div>
            <div className="DesignerList-name-eng">Kwak Yunseok</div>
          </li>
          <li className="DesignerList-person all beta">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">구혜진</div>
            <div className="DesignerList-name-eng">Gu Hyejin</div>
          </li>
          <li className="DesignerList-person all beta">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김기성</div>
            <div className="DesignerList-name-eng">Kim Kiseong</div>
          </li>
          <li className="DesignerList-person all beta">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김나영</div>
            <div className="DesignerList-name-eng">Kim Nayoung</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김문주</div>
            <div className="DesignerList-name-eng">Kim Moonju</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김범천</div>
            <div className="DesignerList-name-eng">Kim Beomcheon</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김병준</div>
            <div className="DesignerList-name-eng">Kim ByeongJun</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김성혁</div>
            <div className="DesignerList-name-eng">Kim Seonghyeok</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김시영</div>
            <div className="DesignerList-name-eng">Kim Siyoung</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김시은</div>
            <div className="DesignerList-name-eng">Kim Sieun</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김예원</div>
            <div className="DesignerList-name-eng">Kim Yeawon</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김지수</div>
            <div className="DesignerList-name-eng">Kim Jisu</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김초희</div>
            <div className="DesignerList-name-eng">Kim Chohee</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">김현수</div>
            <div className="DesignerList-name-eng">Kim Hyunsoo</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">노연희</div>
            <div className="DesignerList-name-eng">Noh Yeonhui</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">마준</div>
            <div className="DesignerList-name-eng">Ma Jun</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">문성희</div>
            <div className="DesignerList-name-eng">Moon SungHee</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">박민규</div>
            <div className="DesignerList-name-eng">Park Mingyu</div>
          </li>{" "}
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">박성호</div>
            <div className="DesignerList-name-eng">Park Seongho</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">박수민</div>
            <div className="DesignerList-name-eng">Park Sumin</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">박은수</div>
            <div className="DesignerList-name-eng">Park Eunsu</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">백정훈</div>
            <div className="DesignerList-name-eng">Baek Jeonghun</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">백제훈</div>
            <div className="DesignerList-name-eng">Baek Jaehoon</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">빙소은</div>
            <div className="DesignerList-name-eng">Bing Soeun</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">서보은</div>
            <div className="DesignerList-name-eng">Seo Boeun</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">서보현</div>
            <div className="DesignerList-name-eng">Seo Bohyeon</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">안도연</div>
            <div className="DesignerList-name-eng">An Doyeon</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">유지연</div>
            <div className="DesignerList-name-eng">Yoo Jiyeon</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">이도현</div>
            <div className="DesignerList-name-eng">Lee Dohyeon</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">이민주</div>
            <div className="DesignerList-name-eng">Lee Minju</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">이서연</div>
            <div className="DesignerList-name-eng">Lee Seoyeon</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">이소민</div>
            <div className="DesignerList-name-eng">Lee Somin</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">이승연</div>
            <div className="DesignerList-name-eng">Lee Seungyeon</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">이영민</div>
            <div className="DesignerList-name-eng">Lee Youngmin</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">이재희</div>
            <div className="DesignerList-name-eng">Lee Jaehee</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">이진호</div>
            <div className="DesignerList-name-eng">Lee Jinho</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">이한빈</div>
            <div className="DesignerList-name-eng">Lee Hanbin</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">임현우</div>
            <div className="DesignerList-name-eng">Lim Hyeonwoo</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">장수영</div>
            <div className="DesignerList-name-eng">Jang Suyoung </div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">장은교</div>
            <div className="DesignerList-name-eng">Jang Eunkyo</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">장재석</div>
            <div className="DesignerList-name-eng">Jang Jaeseok</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">정성진</div>
            <div className="DesignerList-name-eng">Jeong Seongjin</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">정정윤</div>
            <div className="DesignerList-name-eng">Jeong Jeongyoon</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">정주현</div>
            <div className="DesignerList-name-eng">Jeong Juhyun</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">조성래</div>
            <div className="DesignerList-name-eng">Cho SeongRae</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">조이현</div>
            <div className="DesignerList-name-eng">Jo Yihyeon</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">지강원</div>
            <div className="DesignerList-name-eng">Ji Kangwon</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">지창현</div>
            <div className="DesignerList-name-eng">Ji Changhyun</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">최요셉</div>
            <div className="DesignerList-name-eng">Choi Yosep</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
            </div>
            <div className="DesignerList-name-kor">허유진</div>
            <div className="DesignerList-name-eng">Heo Yujin</div>
          </li>
          <li className="DesignerList-person">
            <div className="DesignerList-image">
              <img src={Image} />
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
