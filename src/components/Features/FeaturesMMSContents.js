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
                <div className="list-top-time">00 : 12 - 11 : 10</div>

                <div className="list-top-title">
                  <strong>고백</strong>
                </div>
              </div>
              <div className="MM-list-bottom">
                <div className="list-bottom-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/features/MM/1_studio_thumbnail.png`}
                    alt="thumbnail"
                  />
                  <div className="list-top-time-mobile">
                    00 : 12 - 11 : 10
                    <br />
                    <strong>고백</strong>
                  </div>
                </div>
                <div className="list-bottom-text">
                  <div className="list-bottom-text_description">
                    아름다운 재단에서 진행하는 '열여덟 어른' 캠페인.
                    보호종료아동들이 당당히 세상을 마주하길 바라는 안연주
                    캠페이너의 따스한 위로와 응원이 담긴 고백을 단편영화를 통해
                    전달한다.
                  </div>
                  <div className="list-bottom-text_designer-studio">
                    <div className="list-designer">
                      <strong>강수민</strong>
                      <br />
                      Kang Sumin
                      <br />
                      kazalmaty@naver.com
                    </div>
                    <div className="list-designer">
                      <strong>박은수</strong>
                      <br />
                      Park Eunsu
                      <br />
                      unsu01181@naver.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-bottom-text_designer-768-studio">
                <div className="list-designer">
                  <strong>강수민</strong>
                  <br />
                  Kang Sumin
                  <br />
                  kazalmaty@naver.com
                </div>
                <div className="list-designer">
                  <strong>박은수</strong>
                  <br />
                  Park Eunsu
                  <br />
                  unsu01181@naver.com
                </div>
              </div>
            </div>
            <div className="MM-contents-list">
              <div className="MM-list-top">
                <div className="list-top-time">11 : 20 - 19 : 14</div>
                <div className="list-top-title">
                  <strong>빛나는 5월</strong>
                </div>
              </div>
              <div className="MM-list-bottom">
                <div className="list-bottom-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/features/MM/3_studio_thumbnail.png`}
                    alt="thumbnail"
                  />
                  <div className="list-top-time-mobile">
                    11 : 20 - 19 : 14
                    <br />
                    <strong>빛나는 5월</strong>
                  </div>
                </div>
                <div className="list-bottom-text">
                  <div className="list-bottom-text_description">
                    취업난으로 힘들어하는 청년들에게 일자리 희망을 주기 위해
                    설립된 청년재단. 사회를 향해 힘찬 첫 발걸음을 내딛는 주인공
                    다운의 이야기를 웹드라마에 담았다.
                  </div>
                  <div className="list-bottom-text_designer-studio">
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
              <div className="list-bottom-text_designer-768-studio">
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
                <div className="list-top-time">19 : 25 - 25 : 05</div>
                <div className="list-top-title">
                  <strong>내일</strong>
                </div>
              </div>
              <div className="MM-list-bottom">
                <div className="list-bottom-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/features/MM/5_studio_thumbnail.png`}
                    alt="thumbnail"
                  />
                  <div className="list-top-time-mobile">
                    19 : 25 - 25 : 05
                    <br />
                    <strong>내일</strong>
                  </div>
                </div>
                <div className="list-bottom-text">
                  <div className="list-bottom-text_description">
                    내일을 걱정하며 하루를 버티는 여성 가장의 삶을 보여주며,
                    주변의 시선과 편견 속에서 사회적 약자가 될 수밖에 없는
                    오늘보다 더 나은 내일을 그려가는 여성 가장의 이야기이다.
                  </div>
                  <div className="list-bottom-text_designer-studio">
                    <div className="list-designer">
                      <strong>김현수</strong>
                      <br />
                      Kim Hyunsoo
                      <br />
                      hyun98soo@naver.com
                    </div>
                    <div className="list-designer">
                      <strong>마준</strong>
                      <br />
                      Ma Jun
                      <br />
                      junhong0815@gmaiil.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-bottom-text_designer-768-studio">
                <div className="list-designer">
                  <strong>김현수</strong>
                  <br />
                  Kim Hyunsoo
                  <br />
                  hyun98soo@naver.com
                </div>
                <div className="list-designer">
                  <strong>마준</strong>
                  <br />
                  Ma Jun
                  <br />
                  junhong0815@gmaiil.com
                </div>
              </div>
            </div>
            <div className="MM-contents-list">
              <div className="MM-list-top">
                <div className="list-top-time">25 : 15 - 30 : 00</div>
                <div className="list-top-title">
                  <strong>춘;몽</strong>
                </div>
              </div>
              <div className="MM-list-bottom">
                <div className="list-bottom-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/features/MM/4_studio_thumbnail.png`}
                    alt="thumbnail"
                  />
                  <div className="list-top-time-mobile">
                    25 : 15 - 30 : 00
                    <br />
                    <strong>춘;몽</strong>
                  </div>
                </div>
                <div className="list-bottom-text">
                  <div className="list-bottom-text_description">
                    젊은 시절의 기억을 품고 살아가는 노인들, 아름다웠던 젊은
                    시절을 봄날에 꾼 꿈에 비유하여겉모습은 노인이지만 나이가
                    들어도 변하지 않는 마음을 전달하고자 한다.
                  </div>
                  <div className="list-bottom-text_designer-studio">
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
              <div className="list-bottom-text_designer-768-studio">
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
            <div className="MM-contents-list">
              <div className="MM-list-top">
                <div className="list-top-time">30 : 12 - 37 : 40</div>
                <div className="list-top-title">
                  <strong>딸기</strong>
                </div>
              </div>
              <div className="MM-list-bottom">
                <div className="list-bottom-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/features/MM/2_studio_thumbnail.png`}
                    alt="thumbnail"
                  />
                  <div className="list-top-time-mobile">
                    30 : 12 - 37 : 40
                    <br />
                    <strong>딸기</strong>
                  </div>
                </div>
                <div className="list-bottom-text">
                  <div className="list-bottom-text_description">
                    환경문제가 극에달한 2035년 충만은 우연한 계기로 과거로
                    가게된다. 그곳에서 자연에 소중함을 깨닫게 되고 미래를
                    바꾸겠다는 다짐을 하게되는데...
                  </div>
                  <div className="list-bottom-text_designer-studio">
                    <div className="list-designer">
                      <strong>김병준</strong>
                      <br />
                      Kim Byeongjun
                      <br />
                      cjs_end2@naver.com
                    </div>
                    <div className="list-designer">
                      <strong>이진호</strong>
                      <br />
                      Lee Jinho
                      <br />
                      leejh6873@naver.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-bottom-text_designer-768-studio">
                <div className="list-designer">
                  <strong>김병준</strong>
                  <br />
                  Kim Byeongjun
                  <br />
                  cjs_end2@naver.com
                </div>
                <div className="list-designer">
                  <strong>이진호</strong>
                  <br />
                  Lee Jinho
                  <br />
                  leejh6873@naver.com
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
