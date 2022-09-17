import React from "react";
import "./FeaturesMMContents.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturesMMSContents() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="MM-contents">
        <section className="MM-contents-listBox">
          <Slider className="MM-contents-lists" {...settings}>
            <div className="MM-contents-list">
              <div className="MM-list-top">
                <div className="list-top-time">00 : 41 - 03 : 00</div>
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
            </div>
            <div className="MM-contents-list">
              <div className="MM-list-top">
                <div className="list-top-time">00 : 41 - 03 : 00</div>
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
            </div>
            <div className="MM-contents-list">
              <div className="MM-list-top">
                <div className="list-top-time">00 : 41 - 03 : 00</div>
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
            </div>
          </Slider>
        </section>
        <div className="MM-contents-manual">
          좌우로 슬라이드 하면 작품 목록을 확인할 수 있습니다.
        </div>
      </div>
    </>
  );
}

export default FeaturesMMSContents;
