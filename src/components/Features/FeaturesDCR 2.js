import React from "react";
import { Link } from "react-router-dom";
import imageDcr from "../../works/imageDcr";

import FeaturesItem from "./FeaturesItem";
import "./Features.scss";
import Header from "../../components/HeaderDark";

function Features() {
  // 이 아래부터는 사실상 Html. 다른 파일도 마찬가지!
  return (
    <>
      <Header />

      <div className="project-contents">
        <div className="project-header">
          <div className="major-wrapper">
            <div className="header-major">
              <Link to="/2022/project/dc/studio">
                <div className="major-dc active">Digital Contents</div>
                <div className="major-mobile active">D.C</div>
              </Link>
              <div>|</div>
              <Link to="/2022/project/vi/studio">
                <div className="major-vi">Visual Information Design</div>
                <div className="major-mobile">V.I</div>
              </Link>
              <div>|</div>
              <Link to="/2022/project/mm/studio">
                <div className="major-mm">Motion Media</div>
                <div className="major-mobile">M.M</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="project-class">
          <div className="class-wrapper">
            <div className="class-studio class ">
              <Link to="/2022/project/dc/studio">디지털콘텐츠스튜디오</Link>
            </div>

            <div className="class-research class class-active">
              <Link to="/2022/project/dc/research">DC졸업연구</Link>
            </div>
          </div>
        </div>
        <div className="features-studio features-active">
          <div className="features-container">
            <div className="features-wrapper">
              <ul className="features-items">
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/1_research_thumbnail.png`}
                  name="구혜진"
                  description="IV"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/1_research_header.png`}
                  featureName="IV"
                  featureDescription="우주 산업이 나날이 발전하고 있는 지금, 기술의 발전으로 전문적으로 훈련받은 우주비행사 뿐만 아니라 민간인들도 우주에 갈 수 있게 되었습니다. 저는 더 발전된 미래에는 민간인이 우주왕복선을 개인소유할 수 있을 것이라고 상상했고, 일상에서도 쉽게 사용이 가능한 우주선 IOT 서비스를 만들어보고 싶어 이 프로젝트를 기획하게 되었습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC1.gif`}
                  profileName="구혜진"
                  profileEng="Gu Hyejin"
                  profileMail="fpqlt_326998@naver.com"
                  path="/2022/project/dc/:Hyejin"
                  work0={imageDcr.HYEJIN.work0}
                  work1={imageDcr.HYEJIN.work1}
                  work2={imageDcr.HYEJIN.work2}
                  work3={imageDcr.HYEJIN.work3}
                  work4={imageDcr.HYEJIN.work4}
                  work5={imageDcr.HYEJIN.work5}
                  work6={imageDcr.HYEJIN.work6}
                  work7={imageDcr.HYEJIN.work7}
                  work8={imageDcr.HYEJIN.work8}
                  work9={imageDcr.HYEJIN.work9}
                  work10={imageDcr.HYEJIN.work10}
                  work11={imageDcr.HYEJIN.work11}
                  work12={imageDcr.HYEJIN.work12}
                  work13={imageDcr.HYEJIN.work13}
                  work14={imageDcr.HYEJIN.work14}
                  work15={imageDcr.HYEJIN.work15}
                  work16={imageDcr.HYEJIN.work16}
                  work17={imageDcr.HYEJIN.work17}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/12_research_thumbnail.png`}
                  name={"이영민"}
                  description={"또바기"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/12_research_header.png`}
                  featureName="또바기"
                  featureDescription="반려동물을 키우는 가구가 늘어나는 추세에 동물병원 진료비용에 부담을 가지고, 어느 병원에서 진료받아야 할지 찾는 분들에게 사용자에게 필요한 병원을 알려주고, 사용자 위치 근처에 있는 병원과 병원마다의 가격 및 리뷰 등의 정보를 제공하며 어떤 진료가 가능한지 알려주는 애플리케이션입니다. "
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC11.gif`}
                  profileName="이영민"
                  profileEng="Lee Youngmin"
                  profileMail="rjscl343@naver.com"
                  path="/2022/project/dc/:Youngmin"
                  work0={imageDcr.YM.work0}
                  work1={imageDcr.YM.work1}
                  work2={imageDcr.YM.work2}
                  work3={imageDcr.YM.work3}
                  work4={imageDcr.YM.work4}
                  work5={imageDcr.YM.work5}
                  work6={imageDcr.YM.work6}
                  work7={imageDcr.YM.work7}
                  work8={imageDcr.YM.work8}
                  work9={imageDcr.YM.work9}
                  work10={imageDcr.YM.work10}
                  work11={imageDcr.YM.work11}
                  work12={imageDcr.YM.work12}
                  work13={imageDcr.YM.work13}
                  work14={imageDcr.YM.work14}
                  work15={imageDcr.YM.work15}
                  work16={imageDcr.YM.work16}
                  work17={imageDcr.YM.work17}
                  work18={imageDcr.YM.work18}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/2_research_thumbnail.png`}
                  name={"김기성"}
                  description="circular"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/2_research_header.png`}
                  featureName="circular"
                  featureDescription="다양한 브랜드들이 NFT를 긍정적으로 전개하고 있지만 판매는 대형 거래소에서, 혜택이나 커뮤니티 기능은 자사나 다른 플랫폼에서 이용하는 분산된 형태를 띠고 있습니다. 사용자 중점의 통합된 플랫폼을 구축하여 비즈니스 접근성을 높여 NFT의 가치 신뢰성을 확보하고자 circular 서비스를 제작하게 되었습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC2.gif`}
                  profileName="김기성"
                  profileEng="Kim Kiseong"
                  profileMail="kimkiseong98@gmail.com"
                  path="/2022/project/dc/:Kiseong"
                  work0={imageDcr.KISEONG.work0}
                  work1={imageDcr.KISEONG.work1}
                  work2={imageDcr.KISEONG.work2}
                  work3={imageDcr.KISEONG.work3}
                  work4={imageDcr.KISEONG.work4}
                  work5={imageDcr.KISEONG.work5}
                  work6={imageDcr.KISEONG.work6}
                  work7={imageDcr.KISEONG.work7}
                  work8={imageDcr.KISEONG.work8}
                  work9={imageDcr.KISEONG.work9}
                  work10={imageDcr.KISEONG.work10}
                  work11={imageDcr.KISEONG.work11}
                  work12={imageDcr.KISEONG.work12}
                  work13={imageDcr.KISEONG.work13}
                  work14={imageDcr.KISEONG.work14}
                  work15={imageDcr.KISEONG.work15}
                  work16={imageDcr.KISEONG.work16}
                  work17={imageDcr.KISEONG.work17}
                  work18={imageDcr.KISEONG.work18}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/15_research_thumbnail.png`}
                  name={"정주현"}
                  description={"Slue"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/15_research_header.png`}
                  featureName="Slue(슬루)"
                  featureDescription="매일 새롭게 넘쳐나는 정보들 속에서 우리에게는 진짜 정보와 가짜 정보를 구별하는 능력인 ‘디지털 리터러시’의 중요성이 커지고 있습니다. 슬루는 디지털 리터러시 교육이 가장 필요한 10-20대가 많이 이용하는 소셜 미디어 상의 이슈를 다양한 사람들과 소통하고, 자신의 의견을 펼치는 방식으로 정보 문해력을 기를 수 있도록 돕습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC14.gif`}
                  profileName="정주현"
                  profileEng="Jung Juhyun"
                  profileMail="qwert911262@gmail.com"
                  path="/2022/project/dc/:Juhyun"
                  work0={imageDcr.JUHYUN.work0}
                  work1={imageDcr.JUHYUN.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/14_research_thumbnail.png`}
                  name={"장은교"}
                  description="FING"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/14_research_header.png`}
                  featureName="FING"
                  featureDescription="코로나19의 영향으로 여행 서비스에도 많은 변화가 생겼습니다. 특히 나만의 시간을 보낼 수 있는 섬 혹은 소도시 등 색다른 여행지를 선호하고 있습니다. 이러한 트렌드에 맞춘 안심하고 여행을 떠날 수 있는 FING은 자율운항선박과 함께 나만의 여행을 만들며 특별한 경험을 만들 수 있는 서비스입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC13.gif`}
                  profileName="장은교"
                  profileEng="Jang Eunkyo"
                  profileMail="429650@gmail.com"
                  path="/2022/project/dc/:Eunkyo"
                  work0={imageDcr.EUNKYO.work0}
                  work1={imageDcr.EUNKYO.work1}
                  work2={imageDcr.EUNKYO.work2}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/5_research_thumbnaill.png`}
                  name={"김시은"}
                  description={"줍줍"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/5_research_header.png`}
                  featureName="줍줍"
                  featureDescription="나날이 심각해지는 환경 오염에 사람들은 심각성을 인지하고 다양한 환경 보호 활동을 하고 있습니다. 그런데도 환경 오염의 심각성은 지속되며, 더 많은 참여를 필요로 합니다. 여러분은 어떻게 대처하고 있나요? 환경 보호를 생각하곤 있지만, 막상 행동으로 실행하는 것이 어렵나요? 줍줍과 함께 환경 운동을 더 쉽고 재미있게 실천해보세요!"
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC5.gif`}
                  profileName="김시은"
                  profileEng="Kim Sieun"
                  profileMail="kns9559sn@gmail.com"
                  path="/2022/project/dc/:Sieun"
                  work0={imageDcr.SIEUN.work0}
                  work1={imageDcr.SIEUN.work1}
                  work2={imageDcr.SIEUN.work2}
                  work3={imageDcr.SIEUN.work3}
                  work4={imageDcr.SIEUN.work4}
                  work5={imageDcr.SIEUN.work5}
                  work6={imageDcr.SIEUN.work6}
                  work7={imageDcr.SIEUN.work7}
                  work8={imageDcr.SIEUN.work8}
                  work9={imageDcr.SIEUN.work9}
                  work10={imageDcr.SIEUN.work10}
                  work11={imageDcr.SIEUN.work11}
                  work12={imageDcr.SIEUN.work12}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/10_research_thumbnail.png`}
                  name={"이도현"}
                  description={"NOVER"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/10_research_header.png`}
                  featureName="NOVER"
                  featureDescription="현대 사회에서 디지털 시대에 적응하여 디지털 기기나 AI 스피커를 자주 사용하는 시니어가 증가하고 있습니다. NOVER는 이러한 시니어들이 노후를 즐기며 건강을 편리하게 관리할 수 있도록 웰니스를 '잘 먹기', '잘 움직이기', '잘 쉬기'  세 가지 카테고리로 나누어 관리하고, 개선 방향을 제시해주는 서비스입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC9.gif`}
                  profileName="이도현"
                  profileEng="Lee Dohyeon"
                  profileMail="hyeonn323@gmail.com"
                  path="/2022/project/dc/:Dohyeon"
                  work0={imageDcr.DOHYEON.work0}
                  work1={imageDcr.DOHYEON.work1}
                  work2={imageDcr.DOHYEON.work2}
                  work3={imageDcr.DOHYEON.work3}
                  work4={imageDcr.DOHYEON.work4}
                  work5={imageDcr.DOHYEON.work5}
                  work6={imageDcr.DOHYEON.work6}
                  work7={imageDcr.DOHYEON.work7}
                  work8={imageDcr.DOHYEON.work8}
                  work9={imageDcr.DOHYEON.work9}
                  work10={imageDcr.DOHYEON.work10}
                  work11={imageDcr.DOHYEON.work11}
                  work12={imageDcr.DOHYEON.work12}
                  work13={imageDcr.DOHYEON.work13}
                  work14={imageDcr.DOHYEON.work14}
                  work15={imageDcr.DOHYEON.work15}
                  work16={imageDcr.DOHYEON.work16}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/16_research_thumbnail.png`}
                  name={"조성래"}
                  description="Hi, Tap"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/16_research_header.png`}
                  featureName="Hi, Tap"
                  featureDescription="치매노인 부양이 힘드신가요? 치매노인이 걱정된다면 웨어러블 디바이스를 연결 후 치매노인의 현 위치, 건강 상태를 실시간으로 확인하세요 보호자와 치매노인은 관계 및 소통이 가장 중요한 만큼 Hi, Tap에선 일정 알림, 돌보미 매칭, 돌봄 일지 관리 등 다양한 콘텐츠가 준비되어 있습니다 지금부터 앱을 소개합니다!"
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC15.gif`}
                  profileName="조성래"
                  profileEng="Cho Seongrae"
                  profileMail="srj9704@naver.com"
                  path="/2022/project/dc/:Seongrae"
                  work0={imageDcr.SEONGRAE.work0}
                  work1={imageDcr.SEONGRAE.work1}
                  work2={imageDcr.SEONGRAE.work2}
                  work3={imageDcr.SEONGRAE.work3}
                  work4={imageDcr.SEONGRAE.work4}
                  work5={imageDcr.SEONGRAE.work5}
                  work6={imageDcr.SEONGRAE.work6}
                  work7={imageDcr.SEONGRAE.work7}
                  work8={imageDcr.SEONGRAE.work8}
                  work9={imageDcr.SEONGRAE.work9}
                  work10={imageDcr.SEONGRAE.work10}
                  work11={imageDcr.SEONGRAE.work11}
                  work12={imageDcr.SEONGRAE.work12}
                  work13={imageDcr.SEONGRAE.work13}
                  work14={imageDcr.SEONGRAE.work14}
                  work15={imageDcr.SEONGRAE.work15}
                  work16={imageDcr.SEONGRAE.work16}
                  work17={imageDcr.SEONGRAE.work17}
                  work18={imageDcr.SEONGRAE.work18}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/17_research_thumbnail.png`}
                  name={"조이현"}
                  description="FEELM"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/17_research_header.png`}
                  featureName="FEELM"
                  featureDescription="무수히 쏟아지는 방대한 양의 영상 콘텐츠 때문에 오히려 어떤 것을 보아야 할지 쉽게 선택하지 못하는 현상이 발생하고 있습니다. 필름(FEELM)은 철저히 사용자 개개인의 취향에 맞는 맞춤 콘텐츠를 추천하여 선택하는 과정을 최소화해주고 쉽게 추천 알고리즘을 수정할 수 있는 OTT 서비스입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC16.gif`}
                  profileName="조이현"
                  profileEng="Jo Yihyeon"
                  profileMail="j2hyun980@naver.com"
                  path="/2022/project/dc/:Yihyeon"
                  work0={imageDcr.YIHYEON.work0}
                  work1={imageDcr.YIHYEON.work1}
                  work2={imageDcr.YIHYEON.work2}
                  work3={imageDcr.YIHYEON.work3}
                  work4={imageDcr.YIHYEON.work4}
                  work5={imageDcr.YIHYEON.work5}
                  work6={imageDcr.YIHYEON.work6}
                  work7={imageDcr.YIHYEON.work7}
                  work8={imageDcr.YIHYEON.work8}
                  work9={imageDcr.YIHYEON.work9}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/3_research_thumbnail.png`}
                  name={"김나영"}
                  description={"X RONE"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/3_research_header.png`}
                  featureName="X RONE"
                  featureDescription={
                    "지능형 무인 비행체인 ‘액체 수소 드론’을 이용한 드론 호출 서비스로 향후 기후변화 대응을 위한 중요 추세인 탄소 중립 실천이 가능한 서비스입니다. 드론을 이용하여 온실가스 감축, 미세먼지 저감, 해외 에너지 의존도를 감소하며 스마트 물류 플랫폼의 지속 가능한 가치와 미래의 새로운 비전 제시가 가능하다고 생각하여 서비스를 제작하였습니다."
                  }
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC3.gif`}
                  profileName={"김나영"}
                  profileEng={"Kim Nayoung"}
                  profileMail="sdf02033@gmail.com"
                  path="/2022/project/dc/:Nayoung"
                  work0={imageDcr.NAYOUNG.work0}
                  work1={imageDcr.NAYOUNG.work1}
                  work2={imageDcr.NAYOUNG.work2}
                  work3={imageDcr.NAYOUNG.work3}
                  work4={imageDcr.NAYOUNG.work4}
                  work5={imageDcr.NAYOUNG.work5}
                  work6={imageDcr.NAYOUNG.work6}
                  work7={imageDcr.NAYOUNG.work7}
                  work8={imageDcr.NAYOUNG.work8}
                  work9={imageDcr.NAYOUNG.work9}
                  work10={imageDcr.NAYOUNG.work10}
                  work11={imageDcr.NAYOUNG.work11}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/4_research_thumbnail.png`}
                  name="김문주"
                  description="차곡차곡"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/4_research_header.png`}
                  featureName="차곡차곡"
                  featureDescription="차곡차곡은 돈을 차곡차곡 모으자는 의미로, 올바른 소비습관을 만들고 싶은 mz세대를 위한 앱입니다. 내가 어디에 돈을 썼는지 한 눈에 볼 수 있고 그룹원과 배틀을 통해 불필요한 소비를 하지 않게 도와줍니다. 앱 내의 페이 기능을 이용해 결제하면 지출 내역이 자동으로 기록되고 해당 기능들을 워치에서도 이용할 수 있도록 구성하였습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC4.gif`}
                  profileName="김문주"
                  profileEng="Kim Moonju"
                  profileMail="m.jju422@gmail.com"
                  path="/2022/project/dc/:Moonju"
                  work0={imageDcr.MOONJU.work0}
                  work1={imageDcr.MOONJU.work1}
                  work2={imageDcr.MOONJU.work2}
                  work3={imageDcr.MOONJU.work3}
                  work4={imageDcr.MOONJU.work4}
                  work5={imageDcr.MOONJU.work5}
                  work6={imageDcr.MOONJU.work6}
                  work7={imageDcr.MOONJU.work7}
                  work8={imageDcr.MOONJU.work8}
                  work9={imageDcr.MOONJU.work9}
                  work10={imageDcr.MOONJU.work10}
                  work11={imageDcr.MOONJU.work11}
                  work12={imageDcr.MOONJU.work12}
                  work13={imageDcr.MOONJU.work13}
                  work14={imageDcr.MOONJU.work14}
                  work15={imageDcr.MOONJU.work15}
                  work16={imageDcr.MOONJU.work16}
                  work17={imageDcr.MOONJU.work17}
                />

                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/7_research_thumbnail.png`}
                  name={"백제훈"}
                  description="손떽"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/7_research_header.png`}
                  featureName="손떽"
                  featureDescription="성인들도 많이 가지고 있는 손톱을 물어뜯는 버릇. 혼자선 의지력 부족등의 문제로 굉장히 그만두기 어려운 버릇이기도 합니다. 이 앱에서는 그 버릇을 여러가지 기능과 함께 극복에 도움을 줍니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI8.gif`}
                  profileName="백제훈"
                  profileEng="Baek Jaehoon"
                  profileMail="bjh990225@gmail.com"
                  path="/2022/project/dc/:Jaehoon"
                />

                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/8_research_thumbnail.png`}
                  name={"서보현"}
                  description={"BEBICARE"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/8_research_header.png`}
                  featureName="BEBICARE"
                  featureDescription="베비케어는 아토피 피부염에 걸린 아이를 키우고 있지만 병원에 방문할 시간이 마땅치 않거나 병원이 문을 열지 않은 시간에도 진료를 받고 싶거나, 아토피 케어를 하고 싶은 분들을 대상으로 제작되었습니다. 비대면 진료, AI 진료, 목욕을 관리해 줘 아이의 아토피에 대해 정확하고 빠른 케어할 수 있도록 도와주는 서비스입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC7.gif`}
                  profileName="서보현"
                  profileEng="Seo Bohyeon"
                  profileMail="seobori2000@gmail.com"
                  path="/2022/project/dc/:Bohyeon"
                  work0={imageDcr.BOHYEON.work0}
                  work1={imageDcr.BOHYEON.work1}
                  work2={imageDcr.BOHYEON.work2}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/me_research_thumbnail.png`}
                  name={"이한빈"}
                  description={"ROCAB"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/me_research_header.png`}
                  featureName="ROCAB"
                  featureDescription="우리는 소유의 시대를 넘어 공유의 시대를 살아가고 있습니다. 현대인들은 사무실, 주거공간, 이동 수단 등 다양한 재화를 공유 하며 살아가고 있습니다. 이러한 공유경제 시대에  'ROCAB'은 완전 자율주행 차량의 공유화를 목표로 합니다. ROCAB과 함께 이전에 경험하지 못한 새로운 차량 경험을 느껴보세요."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC12.gif`}
                  profileName="이한빈"
                  profileEng="Lee Hanbin"
                  profileMail="hans.hanbin.lee@gmail.com"
                  path="/2022/project/dc/:Hanbin"
                />
                {/* <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/9_research_thumbnail.png`}
                  name={"안도연"}
                  description="difume"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/9_research_header.png`}
                  featureName="difume"
                  featureDescription="향기는 비록 눈에 보이지 않지만 감정, 기억 등에 영향을 주며 우리 주변에 항상 존재합니다. 디퓸(difume)은 날씨에 맞게 향을 추천해 주고 날씨뿐만 아니라 공간을 스캔하여 공간에 맞는 향을 추천해 줍니다. 향, 발향 강도, 시간 등을 원격으로 제어할 수 있으며 자신만의 패턴을 설정하여 편리하게 사용할 수 있습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC8.gif`}
                  profileName="안도연"
                  profileEng="An Doyeon"
                  profileMail="rkornne@gmail.com"
                  path="/2022/project/dc/:Doyeon"
                /> */}
                {/* <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/11_research_thumbnail.png`}
                  name={"이승연"}
                  description={"I'M HERE"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/11_research_header.png`}
                  featureName="I'M HERE"
                  featureDescription="'I'M HERE'은 일상생활 속에서 물건 관리를 효율적으로 할 수 있는 앱입니다. 방식으로는 지도 거리뷰 원리와 QR코드를 이용합니다. 2차원 형태의 QR코드를 인식하여 좌표값을 3차원 상의 공간 좌표로 변환하고 QR코드의 모서리 위치와 중심 등 3차원으로 변환된 정보를 이용하여 각도와 거리 등을 파악하여 물건 위치를 알 수 있습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC10.gif`}
                  profileName="이승연"
                  profileEng="Lee Seoungyeon"
                  profileMail="lee40095617@gmail.com"
                  path="/2022/project/dc/:Seoungyeon"
                /> */}
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/18_research_thumbnail.png`}
                  name={"지창현"}
                  description="MUNASIS"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/18_research_header.png`}
                  featureName="MUNASIS"
                  featureDescription="문아시스는 공통의 관심사를 가진 사람들을 하나로 연결해 주는 서비스입니다. 메타버스 공간인 문아시스에서 다양한 사람들과 작품에 대해서 이야기하고 함께 작품을 쓸 수 있습니다. 또한 대사 사운드화로 생동감 있는 작품을 만들 수 있습니다. 창작이라는 벽 앞에서 잠시 쉬고 위안이 되는 오아시스 같은 곳이 되었으면 하는 고민이 담겨있습니다. "
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC17.gif`}
                  profileName="지창현"
                  profileEng="Ji Changhyun"
                  profileMail="jchyundesign@gmail.com"
                  path="/2022/project/dc/:Changhyun"
                  work0={imageDcr.CHANGHYUN.work0}
                  work1={imageDcr.CHANGHYUN.work1}
                  work2={imageDcr.CHANGHYUN.work2}
                  work3={imageDcr.CHANGHYUN.work3}
                  work4={imageDcr.CHANGHYUN.work4}
                  work5={imageDcr.CHANGHYUN.work5}
                  work6={imageDcr.CHANGHYUN.work6}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/6_research_thumbnail.png`}
                  name={"박민규"}
                  description={"나드리"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/6_research_header.png`}
                  featureName={"나드리"}
                  featureDescription={
                    "나드리는 교통약자들을 위한 길안내 서비스 입니다. 단순 길안내가 아닌 위험지역과 장애물을 피해 경로를 알려주며, 사용자 주변 편의시설의 위치와 예약이 가능한 콜택시 기능을 제공하고 있습니다. 그럼 지금 즐겁게 나드리를 떠나볼까요?﻿ "
                  }
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC6.gif`}
                  profileName={"박민규"}
                  profileEng={"Park Mingyu"}
                  profileMail="parkmin9yu@naver.com"
                  path="/2022/project/dc/:Mingyu"
                  work0={imageDcr.MINGYU.work0}
                  work1={imageDcr.MINGYU.work1}
                  work2={imageDcr.MINGYU.work2}
                  work3={imageDcr.MINGYU.work3}
                  work4={imageDcr.MINGYU.work4}
                  work5={imageDcr.MINGYU.work5}
                  work6={imageDcr.MINGYU.work6}
                  work7={imageDcr.MINGYU.work7}
                  work8={imageDcr.MINGYU.work8}
                  work9={imageDcr.MINGYU.work9}
                  work10={imageDcr.MINGYU.work10}
                  work11={imageDcr.MINGYU.work11}
                  work12={imageDcr.MINGYU.work12}
                  work13={imageDcr.MINGYU.work13}
                  work14={imageDcr.MINGYU.work14}
                  work15={imageDcr.MINGYU.work15}
                  work16={imageDcr.MINGYU.work16}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
