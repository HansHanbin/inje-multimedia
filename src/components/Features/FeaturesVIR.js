import React from "react";
import { Link } from "react-router-dom";
import imageVir from "../../works/imageVir";

import FeaturesItem from "./FeaturesItem";
import "./Features.scss";
import Header from "../../components/HeaderDark";

// profile image

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
                <div className="major-dc">Digital Contents</div>
                <div className="major-mobile">D.C</div>
              </Link>
              <div>|</div>
              <Link to="/2022/project/vi/studio">
                <div className="major-vi active">Visual Infomation Design</div>
                <div className="major-mobile active">V.I</div>
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
            <div className="class-studio class">
              <Link to="/2022/project/vi/studio">비주얼인포메이션스튜디오</Link>
            </div>

            <div className="class-research class class-active">
              <Link to="/2022/project/vi/research">VI졸업연구</Link>
            </div>
          </div>
        </div>
        <div className="features-studio features-active">
          <div className="features-container">
            <div className="features-wrapper">
              <ul className="features-items">
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/1_research_thumbnail.png`}
                  name={"강주언"}
                  description={"봉황문 인문보"}
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/1_research_header.png`}
                  featureName="봉황문 인문보"
                  featureDescription="종이 화병이란 재활용으로 모아둔 병, 캔 등을 화병으로 사용할 때 쓸 수 있는 종이로 된 커버입니다. 종이 화병에 일러스트로 그린 그림은 봉황문인문보 (鳳凰紋引紋袱)를 모티브로 하여 디자인 하였습니다. 봉황문인문보는 조선 왕실에서는 귀중한 물건을 포장한 비단 보자기중 하나로 부귀, 장수 등 염원을 담고 있습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI1.gif`}
                  profileName="강주언"
                  profileEng="Kang Jueon"
                  profileMail="3349520@naver.com"
                  path="/2022/project/vi/:Jueon"
                  work1={imageVir.JUEON.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/2_research_thumbnail.png`}
                  name="공효빈"
                  description="우리바다 함께海"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/2_research_header.png`}
                  featureName="우리바다 함께海"
                  featureDescription="우리 모두는 서로 유기적으로 연결되어 있으며 원인이 있으면 결과가 있는 인과관계 속에서 살아간다. 즉, 우리는 혼자 살아갈 수 없으며 수레바퀴에 맞물리듯 서로에게 영향을 준다. 한쪽의 균형이 무너진다면 다른 쪽도 무너질 수밖에 없다. 이와 같은 생각하에 조화롭게 살아가고자 하는 염원을 담아 ‘공존(共存)’이라는 주제를 선정하게 되었다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI2.gif`}
                  profileName="공효빈"
                  profileEng="Gong Hyobin"
                  profileMail="hyob1130@naver.com"
                  path="/2022/project/vi/:Hyobin"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/3_research_thumbnail.png`}
                  name={"곽윤석"}
                  description="Bum Stay"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/3_research_header.png`}
                  featureName="Bum Stay"
                  featureDescription="다양한 콘셉트들의 카페들이 인기를 끌고 있는 가운데 범 스테이는 카페에 픽셀이라 는 콘셉트를 접목시켜 픽셀이 위주가 되는 카페이며 종이를 이용한 패키지와 주된 범 캐릭터(캐릭터의 호랑이는 98년생의 범띠에서 따온 캐릭터)를 이용한 종이접기를 이 용해 볼 수 있으며 온라인에서도 게더타운을 이용하여 메타버스로 즐길 수 있다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI3.gif`}
                  profileName={"곽윤석"}
                  profileEng={"Kwak Yunseok"}
                  profileMail="dbstjr_98@naver.com"
                  path="/2022/project/vi/:Yunseok"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/4_research_thumbnail.png`}
                  name="김초희"
                  description="언더더씨 "
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/4_research_header.png`}
                  featureName="언더더씨 "
                  featureDescription="언더더씨 캠페인은 식량이나 기름, 환경 등의 이유로 멸종 위기에 처한 해양 동물들을 다시 상기시켜주고 보호하기 위해서 시작한 캠페인 입니다. 그래서 대표 해양 동물로 북극곰, 푸른바다거북, 해달, 상괭이, 점박이 물범을 미니멀하게 캐릭터를 디자인하여 환경 캠페인의 캐릭터를 개발하였습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI4.gif`}
                  profileName="김초희"
                  profileEng="Kim Chohee"
                  profileMail="kch1571@daum.net"
                  path="/2022/project/vi/:Chohee"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/5_research_thumbnail.png`}
                  name="노연희"
                  description="아름다운 바다 상점"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/5_research_header.png`}
                  featureName="아름다운 바다 상점"
                  featureDescription="해양 오염 문제는 더이상 외면할 수 없는 심각한 문제고, 쓰레기로 인해 다양한 해양 생물이 고통 속에서 죽어가고 있습니다. 바다 상점에서는 해양 오염의 원인이 되는 미세 플라스틱, 폐그물에 대한 이야기를 담은 친환경 타이벡 가방을 제작해 해양 오염에 대한 경각심을 주고, 사람들에게 해양 오염에 관심을 갖자는 메세지를 전달하고자 합니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI5.gif`}
                  profileName="노연희"
                  profileEng={"Noh Yeonhui"}
                  profileMail="wkdch5538@naver.com"
                  path="/2022/project/vi/:Yeonhui"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/00_research_thumbnail.png`}
                  name="박성호"
                  description="만들지"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/00_research_header.png`}
                  featureName="만들지"
                  featureDescription="무언가를 꾸미며 만들기를 좋아하거나 자신만의 제품을 만들어 나가고 싶어 하는 사람들을 위해 종이를 활용한 제품과 다양한 문구를 직접 커스텀하고 꾸밀 수 있는 공간이 있으면 좋겠다고 생각을 하여 종이로 만들어진 다양한 제품들을 활용해 마음껏 표현해 볼 수 있는 만들지 페이퍼 숍 입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI6.gif`}
                  profileName="박성호"
                  profileEng={"Park Seongho"}
                  profileMail="atree3682@daum.net"
                  path="/2022/project/vi/:Seongho"
                />

                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/6_research_thumbnail.png`}
                  name={"백정훈"}
                  description="GAP"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/6_studio_header.png`}
                  featureName="GAP"
                  featureDescription="프로젝트 네임 'GAP'은 현시대 게임 중독의 추세와 개념을 알려주고 게임 중독 테스트를 통해서 자신의 게임 중독지수를 판단할 수 있게, 그리고 중독 유형을 분리하고 분석해서 게임마다 어느 중독 유형을 가지고 있는지를 중독 유형 픽토그램을 통해서 알려줘서 스스로 게임 중독에 대해 경계할 수 있는 기회를 제시하는 프로젝트입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI7.gif`}
                  profileName="백정훈"
                  profileEng="Baek Jeonghun"
                  profileMail="duemno99@naver.com"
                  path="/2022/project/vi/:Jeonghun"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/7_research_thumbnail.png`}
                  name={"백제훈"}
                  description="Shall we play?"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/7_research_header.png`}
                  featureName="Shall we play?"
                  featureDescription="플레잉 카드. 카드놀이 혹은 마술에 사용되는 트럼프 카드라고도 불리는 이 카드들은 오늘 날 다양한 컨셉, 다양한 디자인을 선보이기도 합니다. 카드놀이뿐만 아니라 수집, 전시용으로 사용되기도 합니다. 이 트럼프 카드 세트는 약간의 무서움, 약간의 기괴함을 보여줍니다. 놀이용으로도 가능하지만 장식용으로 사용하게 될 경우 이 무시무시한 카드는 진가를 발휘하게 될 것입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI8.gif`}
                  profileName="백제훈"
                  profileEng="Baek Jaehoon"
                  profileMail="bjh990225@gmail.com"
                  path="/2022/project/vi/:Jaehoon"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/8_research_thumbnail.png`}
                  name={"서보은"}
                  description="Gardoom"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/8_research_header.png`}
                  featureName="Gardoom"
                  featureDescription="가둠은 홈가드닝의 어려움을 겪고 있는 초보자들의 입장에서 생각한 브랜드로, 어떻게 하면 쉽고 간단히 관리 할 수 있을지를 중점적으로 고민하여 제작한 식물 키트 서비스이다. 가둠은 Gardeen+Room의 합성어로, 내 방에 작은 정원을 가둔다는 의미를 담고 있으며, 소비자들의 인테리어와 가드닝을 동시에 만족시키는 브랜드라 할 수 있다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI9.gif`}
                  profileName="서보은"
                  profileEng="Seo Boeun"
                  profileMail=""
                  path="/2022/project/vi/:Boeun"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/9_research_thumbnail.png`}
                  name={"유지연"}
                  description="PETTAM"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/9_research_header.png`}
                  featureName="PETTAM"
                  featureDescription="사람들은 살면서 집중해야 하는 상황에 자주 놓이게 됩니다. 이러한 상황에서 효율을 높이고 싶지만 어떻게 해야 할지 모르는 사람들을 위해서 서비스를 기획하였습니다. AWAVE는 뇌파를 이용하는 BCI 기술과 가전을 제어하는 IoT 기술을 이용하여 실내 환경을 조절하여 사용자가 최상의 집중력을 낼 수 있도록 돕는 서비스입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI10.gif`}
                  profileName="유지연"
                  profileEng="Yu Jiyeon"
                  profileMail="sbe3410@naver.com"
                  path="/2022/project/vi/:Jiyeon"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/10_research_thumbnail.png`}
                  name={"이민주"}
                  description="쓰담해"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/10_research_header.png`}
                  featureName="쓰담해"
                  featureDescription="기후 위기와 각종 오염이 심각한 상황에서 환경 보호와 함께 지구의 건강, 나의 건강을 둘 다 챙길 수 있는 쓰담해 플로깅 키트를 제작하고 디자인했습니다. 누구나 언제든지 쉽게 플로깅을 할 수 있으며 지구 캐릭터로 친근함을 더하고자 했습니다. 쓰담해 플로깅 키트로 지구와 나의 건강을 함께 챙겨 보는 것은 어떨까요?"
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI11.gif`}
                  profileName="이민주"
                  profileEng="Lee Minju"
                  profileMail="m06090@naver.com"
                  path="/2022/project/vi/:Minju"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/11_research_thumbnail.png`}
                  name={"이재희"}
                  description={"NO ONE HAS SAME IDENTITY"}
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/11_research_header.png`}
                  featureName="NO ONE HAS SAME IDENTITY"
                  featureDescription="'<NO ONE HAS SAME IDENTITY>는 직접 제작한 3,000,000개의 NFT 아바타 이미지 중 365개를 선정해서 일 단위 달력을 디자인 해보는 프로젝트입니다. “가장 디지털적인 요소인 NFT를 이용해 가장 아날로그적인 달력을 만들어 본다”는 행위에서 오는 아이러니가 본 프로젝트의 매력이자 재미입니다. "
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI12.gif`}
                  profileName="이재희"
                  profileEng="Lee Jaehee"
                  profileMail="leejh6873@naver.com"
                  path="/2022/project/vi/:Jaehee"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/12_research_thumbnail.png`}
                  name={"임현우"}
                  description="Lily's Dream"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/12_research_header.png`}
                  featureName="Lily's Dream"
                  featureDescription="‘릴리의 꿈’은 어른들을 위한 동화입니다. 동화는 항상 아름다운 이야기들이 주로 이룹니다. 그러나 이 동화책은 아름답지 않은 현실의 이야기를 신비한 판타지적 요소들을 통해 풀어냈습니다. 빈번하게 일어나는 아동학대의 모습을 상징적인 형태와 보여주며 경각심을 일깨웁니다. 이 책이 많은 이들의 지침서가 되었으면 하는 마음으로 제작했습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI13.gif`}
                  profileName="임현우"
                  profileEng="Lim Hyeonwoo"
                  profileMail="gkrktk123@naver.com"
                  path="/2022/project/vi/:Hyeonwoo"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/13_research_thumbnail.png`}
                  name={"장수영"}
                  description="Whale with 하나"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/13_research_header.png`}
                  featureName="Whale with 하나"
                  featureDescription="'Whale with 하나' 고래 멸종 위기 캠페인입니다. 고래 중에서 급격히 대형 고래 종이 멸종 위기가 많다고 합니다. 디자인은 포장 박스를 통해서 대형 고래를 죽어 나가는 외로움을 막기 위해서입니다. 대형 고래는 자주 볼 수 있는 동물이 아니기 때문에 친근함이 될 수 있도록 합니다. 캠페인을 통해 완화되는 게 목표입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI14.gif`}
                  profileName="장수영"
                  profileEng="Jang Suyoung"
                  profileMail="wkdtndud0426@naver.com"
                  path="/2022/project/vi/:Suyoung"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/14_research_thumbnail.png`}
                  name={"장재석"}
                  description={"Instant Tale"}
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/14_research_header.png`}
                  featureName="Instant Tale"
                  featureDescription="요즘 미술관에 가면 대부분의 사람들이 유명한 작가들의 작품을 찾아 다니며 자신이 작품과 함께 찍은 사진을 SNS에 업로드 함으로서 지적인 이미지를 만들어낸다. 과연 이들은 무엇을 위해 이미지를 만들고 예술을 감상하는가. 경쟁이 과열된 현대사회에서 내재되어 있는 지적 허영심의 근원을 추적하고 앞으로 어떻게 다룰지 생각하는 계기가 되었으면 한다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI15.gif`}
                  profileName="장재석"
                  profileEng="Jang Jaeseok"
                  profileMail="bm34c@naver.com"
                  path="/2022/project/vi/:Jaeseok"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/15_research_thumbnail.png`}
                  name={"정성진"}
                  description={"책이에어"}
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/15_research_header.png`}
                  featureName="책이에어"
                  featureDescription="사람들은 저마다의 다른 목적을 가지고 여행을 떠납니다. 여행은 과거의 힘든 일을 잊게 하고 미래를 나아갈 활력을 우리에게 줍니다. 하지만 일상을 벗어나 나를 위한 시간을 가진다는 것이 대부분의 사람들에게는 쉽지 않은 일입니다. 책이에어는 비행기를 컨셉으로 하여 사람들에게 익숙한 공간인 카페에서 책을 통해여행의 활력을 느낄 수 있게 해줍니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI16.gif`}
                  profileName="정성진"
                  profileEng="Jeong Seongjin"
                  profileMail="jsjpati@naver.com"
                  path="/2022/project/vi/:Seongjin"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/16_research_thumbnail.png`}
                  name={"정주현"}
                  description={"Project : E.V.E"}
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/16_research_header.png`}
                  featureName="Project : E.V.E"
                  featureDescription="먼 미래, 외계인들은 자신들의 행성에서 벗어나 이주할 행성으로 지구를 선택했습니다. 이들은 은밀하고 철저한 분석을 통해 지구인을 현혹시키고 지구를 침공할 수 있는 방법을 생각해냈죠. 그러나 역설적이게도, 이들의 계략에 말려들면 오염된 지구를 다시 깨끗하게 되돌릴 수도 있게 됩니다. 자, 앞으로 지구인들은 어떤 운명이 맞이하게 될까요?"
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC14.gif`}
                  profileName="정주현"
                  profileEng="Jung Juhyun"
                  profileMail="qwert911262@gmail.com"
                  path="/2022/project/vi/:Juhyun"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/17_research_thumbnail.png`}
                  name={"지강원"}
                  description="헤픈(happen)여자"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/17_research_header.png`}
                  featureName="헤픈(happen)여자"
                  featureDescription="헤픈여자는 보통의 상태보다 더 많이 닳은 상태의 의미와 ‘일어나다’를 의미하는 영어 단어 happen에서 그 제목을 차용했습니다. 닳아버린 그녀에게는 도대체 무슨 일이 있었을까요. 이 짧은 단행본은 화려한 앞모습에 가려진 뒷모습에 관한 이야기입니다. 그리고 그 뒷모습을 감싸고 싶었던 한 남자의 시선을 담았습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI18.gif`}
                  profileName="지강원"
                  profileEng="Ji Kangwon"
                  profileMail="wlrkddnjs777@naver.com"
                  path="/2022/project/vi/:Kangwon"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/18_research_thumbnail.png`}
                  name={"최요셉"}
                  description="감싸다"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/18_research_header.png`}
                  featureName="감싸다"
                  featureDescription="날카로운 물건을 버리는 방법이 알려지지 않아 버리는 방식도 제각각이다. 인간의 편의를 위해 만들어진 물건이 고유한 역할이나 기능을 완수하고 인간의 곁을 떠날 때 나타나는 불편함을 감싸주는 것으로 제 기능을 다 한 물건이 타인에게 큰 위협으로 다가올 수 있음을 알리고, 사고를 미연에 방지하기 위한 타인을 향한 작은 손짓과 같은 캠페인이다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI19.gif`}
                  profileName="최요셉"
                  profileEng="Choi Yosep"
                  profileMail="tozerothree@gmail.com"
                  path="/2022/project/vi/:Yosep"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/19_research_thumbnail.png`}
                  name={"허유진"}
                  description="OROT"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/19_research_header.png`}
                  featureName="OROT"
                  featureDescription="유혹은 유(You)+혹(惑) ‘너를 혹하게 한다’라는 매혹적인 메시지를 담은 인센스 브랜드입니다. 유혹의 인센스 향을 맡으면 자신도 모르게 홀릴 정도로 치명적이다는 이미지를 신화 속에 나오는 ‘세이렌’으로 설정하였습니다. 세이렌과 항해사 둘 사이에 펼쳐지는 새로운 이야기와 일러스트를 담은 인센스를 느껴보세요. "
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI20.gif`}
                  profileName="허유진"
                  profileEng="Heo Yujin"
                  profileMail="heoyujin9041@gmail.com"
                  path="/2022/project/vi/:Yujin"
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
