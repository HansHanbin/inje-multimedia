import React from "react";
import "./FeaturesMMContents.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";

function FeaturesMMRContents() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    slidesToShow: 1,
  };

  return (
    <>
      <div className="MM-contents">
        <section className="MM-contents-listBox">
          <Slider className="MM-contents-lists" {...settings}>
            <div className="MM-contents-list">
              <div className="MM-list-top">
                <div className="list-top-time">00 : 12 - 04 : 43</div>
                <div className="list-top-title">
                  <strong>안전불감증</strong>
                </div>
              </div>
              <div className="MM-list-bottom">
                <div className="list-bottom-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/features/MM/3_research_thumbnail.jpg`}
                    alt="thumbnail"
                  />
                  <div className="list-top-time-mobile">
                    00 : 12 - 04 : 43
                    <br />
                    <strong>안전불감증</strong>
                  </div>
                </div>
                <div className="list-bottom-text">
                  <div className="list-bottom-text_description">
                    DIY 미니어처를 구매한 아이. 생각보다 어려운 설명에 대충
                    만들기 시작하고 아이의 세상과 가상의 미니어처 세상은
                    연결되어 있어 아이의 행동이 미니어처 세상에 영향을 끼치게
                    된다.
                  </div>
                  <div className="list-bottom-text_designer">
                    <div className="list-designer">
                      <strong>박은수</strong>
                      <br />
                      Park Eunsu
                      <br />
                      unsu01181@naver.com
                    </div>
                    <div className="list-designer">
                      <strong>빙소은</strong>
                      <br />
                      Bing Soeun
                      <br />
                      ilyjej1208@naver.com
                    </div>
                    <div className="list-designer">
                      <strong>아르텔레바 사이다</strong>
                      <br />
                      Arteleva Saida
                      <br />
                      saida.arteleva@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-bottom-text_designer-768">
                <div className="list-designer">
                  <strong>박은수</strong>
                  <br />
                  Park Eunsu
                  <br />
                  unsu01181@naver.com
                </div>
                <div className="list-designer">
                  <strong>빙소은</strong>
                  <br />
                  Bing Soeun
                  <br />
                  ilyjej1208@naver.com
                </div>
                <div className="list-designer">
                  <strong>아르텔레바 사이다</strong>
                  <br />
                  Arteleva Saida
                  <br />
                  saida.arteleva@gmail.com
                </div>
              </div>
            </div>
            <div className="MM-contents-list">
              <div className="MM-list-top">
                <div className="list-top-time">04 : 54 - 07 : 02</div>
                <div className="list-top-title">
                  <strong>DAY & DAY</strong>
                </div>
              </div>
              <div className="MM-list-bottom">
                <div className="list-bottom-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/features/MM/2_research_thumbnail.png`}
                    alt="thumbnail"
                  />
                  <div className="list-top-time-mobile">
                    04 : 54 - 07 : 02
                    <br />
                    <strong>DAY & DAY</strong>
                  </div>
                </div>
                <div className="list-bottom-text">
                  <div className="list-bottom-text_description">
                    하루종일 온통 딸을 위해 살아가는 엄마의 하루와 자신만을 위해
                    살아가는 딸의 하루를 비교함으로 자녀를 향한 모든 어머니들의
                    지극한 사랑을 소개한다.
                  </div>
                  <div className="list-bottom-text_designer">
                    <div className="list-designer">
                      <strong>강수민</strong>
                      <br />
                      Kang Sumin
                      <br />
                      kazalmaty@naver.com
                    </div>
                    <div className="list-designer">
                      <strong>김예원</strong>
                      <br />
                      Kim Yeawon
                      <br />
                      55kyw@naver.com
                    </div>
                    <div className="list-designer">
                      <strong>문성희</strong>
                      <br />
                      Moon Sunghee
                      <br />
                      moonangel2@naver.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-bottom-text_designer-768">
                <div className="list-designer">
                  <strong>강수민</strong>
                  <br />
                  Kang Sumin
                  <br />
                  kazalmaty@naver.com
                </div>
                <div className="list-designer">
                  <strong>김예원</strong>
                  <br />
                  Kim Yeawon
                  <br />
                  55kyw@naver.com
                </div>
                <div className="list-designer">
                  <strong>문성희</strong>
                  <br />
                  Moon Sunghee
                  <br />
                  moonangel2@naver.com
                </div>
              </div>
            </div>

            <div className="MM-contents-list">
              <div className="MM-list-top">
                <div className="list-top-time">07 : 13 - 10 : 22</div>
                <div className="list-top-title">
                  <strong>신호</strong>
                </div>
              </div>
              <div className="MM-list-bottom">
                <div className="list-bottom-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/features/MM/1_research_thumbnail.png`}
                    alt="thumbnail"
                  />
                  <div className="list-top-time-mobile">
                    07 : 13 - 10 : 22
                    <br />
                    <strong>신호</strong>
                  </div>
                </div>
                <div className="list-bottom-text">
                  <div className="list-bottom-text_description">
                    여느 때와 같이 집에서 티비를 보는 남성은 매일 옆집의 소음에
                    시달리게 된다. 날이 갈수록 심해지는 소음과 옆집 아이의
                    모습에 남성은 의문을 가지며 진실에 가까워지게 된다.
                  </div>
                  <div className="list-bottom-text_designer">
                    <div className="list-designer">
                      <strong>김현수</strong>
                      <br />
                      Kim Hyunsoo
                      <br />
                      hyun98soo@naver.com
                    </div>
                    <div className="list-designer">
                      <strong>박수민</strong>
                      <br />
                      Park Sumin
                      <br />
                      sumin10618@naver.com
                    </div>
                    <div className="list-designer">
                      <strong>이서연</strong>
                      <br />
                      Lee Seoyeon
                      <br />
                      2syeonnn@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-bottom-text_designer-768">
                <div className="list-designer">
                  <strong>김현수</strong>
                  <br />
                  Kim Hyunsoo
                  <br />
                  hyun98soo@naver.com
                </div>
                <div className="list-designer">
                  <strong>박수민</strong>
                  <br />
                  Park Sumin
                  <br />
                  sumin10618@naver.com
                </div>
                <div className="list-designer">
                  <strong>이서연</strong>
                  <br />
                  Lee Seoyeon
                  <br />
                  2syeonnn@gmail.com
                </div>
              </div>
            </div>
          </Slider>
        </section>
        <div className="MM-contents-manual">
          좌우로 슬라이드 하면 작품 목록을 확인할 수 있습니다.
        </div>
        <div className="MM-contents-video" alt="MM Studio Works">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/qevgj2btdk4"
            className="video-contents"
            title="MM 졸업연구"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default FeaturesMMRContents;
