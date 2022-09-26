import React from "react";
import { Link } from "react-router-dom";
import imageVis from "../../works/imageVis";
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
                <div className="major-vi active">Visual Information Design</div>
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
            <div className="class-studio class class-active">
              <Link to="/2022/project/vi/studio">비주얼인포메이션스튜디오</Link>
            </div>

            <div className="class-research class">
              <Link to="/2022/project/vi/research">VI졸업연구</Link>
            </div>
          </div>
        </div>
        <div className="features-studio features-active">
          <div className="features-container">
            <div className="features-wrapper">
              <ul className="features-items">
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/19_studio_thumbnail.png`}
                  name={"허유진"}
                  description="비건 복합문화공간 오롯"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/19_studio_header.png`}
                  featureName="비건 복합문화공간 오롯"
                  featureDescription="우리 사회는 비건 마케팅 선호를 넘어 이제는 소비자가 적극적으로 각자만의 베지테리언 생활과 문화에 정착하고 있습니다. 이를 통해 기본적인 스토어에 오로지 베지테리언 상품만을 카테고리별로 판매하는 구매 서비스와 더불어 베지테리언 유형별로 채식 관련 문화도 경험할 수 있는 베지테리언 복합문화공간 ‘오롯’을 만들게 되었습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI17.gif`}
                  profileName="허유진"
                  profileEng="Heo Yujin"
                  profileMail="heoyujin9041@gmail.com"
                  path="/2022/project/vi/studio/:Yujin"
                  work1={imageVis.YUJIN.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/18_studio_thumbnail.png`}
                  name={"최요셉"}
                  description="식용곤충 브랜드 디자인"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/18_studio_header.png`}
                  featureName="식용곤충 브랜드 디자인"
                  featureDescription="2050년에는 90억 명에 이를 것으로 전망된다. 현재보다 2배 정도의 식량이 더 필요하다 미래의 기아 퇴치, 영양보충, 환경오염 등을 위한 대비로 전 세계가 식용 곤충을 주목하게 되었다 지구촌 모두가 걱정없이 먹을 수 있는 식품을 만들겠다는 열정과 실력으로 만들어진 대한민국 대표 친환경 단백질식품소재회사로서 우수한 품질의 소재 및 식품을 선보이고 있다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI16.gif`}
                  profileName="최요셉"
                  profileEng="Choi Yosep"
                  profileMail="tozerothree@gmail.com"
                  path="/2022/project/vi/studio/:Yosep"
                  work1={imageVis.YOSEP.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/5_studio_thumbnail.png`}
                  name="노연희"
                  description="함께 읽는 북코드"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/5_studio_header.png`}
                  featureName="함께 읽는 북코드"
                  featureDescription=" '독서는 중요하다!' 는 말은 이 프로젝트를 통해 가장 먼저 전달하고 싶은 이야기입니다. '인스타그래머블 책', '북스타그램', '책사기로 스트레스 풀기' 등 책에 대한 관심이 늘어나고 있지만 실생활에서 독서를 실천하는 '실제 독서율'은 점점 줄어들고 있습니다. 북코드는 독서를 방해하는 요인 분석을 통해 밀착 독서 서비스를 제공합니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI5.gif`}
                  profileName="노연희"
                  profileEng={"Noh Yeonhui"}
                  profileMail="wkdch5538@naver.com"
                  path="/2022/project/vi/studio/:Yeonhui"
                  work1={imageVis.YEONHUI.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/8_studio_thumbnail.png`}
                  name={"서보은"}
                  description="딴 짓"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/8_studio_header.png`}
                  featureName="딴 짓"
                  featureDescription="정보 통신의 발달과 디지털 기기의 보급화로 인해 스마트폰을 과의존 하게 되면서 기억력이 감퇴하는 디지털 치매 현상이 나타나기 시작했다. 이를 해결하기 위해 제작된 '딴짓' 은 어떤일을 하고 있을때 그 일과 관계없는 행동을 하는 것으로, 디지털 기기에서 벗어나 전혀 관계없는 아날로그 행위로 치유하자는 뜻을 담은 브랜드라 할 수있다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI9.gif`}
                  profileName="서보은"
                  profileEng="Seo Boeun"
                  profileMail="sbe3410@naver.com"
                  path="/2022/project/vi/studio/:Boeun"
                  work1={imageVis.BOEUN.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/00_studio_thumbnail.png`}
                  name="박성호"
                  description="우지구직서"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/00_studio_header.png`}
                  featureName="우지구직서"
                  featureDescription="활발히 늘어나고 있는 우주산업으로 우주쓰레기가 늘어나고 있는 현재 지구로 떨어지고 있는 우주 낙하물에 대한 정보와 우주 낙하물이 지구로부터 떨어지고 있는 문제점을 재미있게 표현하고 우주 환경문제에 대한 관심을 전달하기 위해 우주 낙하물로부터 지구를 구할 새로운 직업과 서비스를 제공하는 가이드북입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI6.gif`}
                  profileName="박성호"
                  profileEng={"Park Seongho"}
                  profileMail="atree3682@daum.net"
                  path="/2022/project/vi/studio/:Seongho"
                  work1={imageVis.SEONGHO.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/2_studio_thumbnail.png`}
                  name="공효빈"
                  description="마약은 당신을 [          ] 한다."
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/2_studio_header.png`}
                  featureName="마약은 당신을 [          ] 한다."
                  featureDescription="마약이 어느 날부터 우리 사회 곳곳에 파고들었다. 마약떡볶이, 마약베게 등 마약 관련 단어가 무분별하게 남용되고 있으며 인터넷과 암호화폐의 발달로 인해 마약을 구하기 더 쉬워졌다. 이에 따라 젊은 층 특히 20-30대 마약사범 수가 증가하고 있다. 마약에 경각심을 가지기 위해 마약의 부정적 측면을 강화한 포스터 디자인을 제안하게 되었다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI2.gif`}
                  profileName="공효빈"
                  profileEng="Gong Hyobin"
                  profileMail="hyob1130@naver.com"
                  path="/2022/project/vi/studio/:Hyobin"
                  work1={imageVis.HYOBIN.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/16_studio_thumbnail.png`}
                  name={"정주현"}
                  description={"Fortention"}
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/16_studio_header.png`}
                  featureName="Fortention(포텐션)"
                  featureDescription="포텐션은 산불 피해 지역 지원을 위한 사용자 참여형 모바일 어플리케이션입니다. 산불이 발생할 때마다 피해 입은 자연과 거주민들을 위한 기부가 이어지지만 일시적인 관심이 갖는 한계가 있습니다. 이 문제에서 출발하여, 사용자의 일상 활동 통해 산불 위험 지역에 지속적인 관심을 가지고 실질적 도움까지 제공할 수있는 디자인을 제안합니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC14.gif`}
                  profileName="정주현"
                  profileEng="Jung Juhyun"
                  profileMail="qwert911262@gmail.com"
                  path="/2022/project/vi/studio/:Juhyun"
                  work1={imageVis.JUHYUN.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/15_studio_thumbnail.png`}
                  name={"정성진"}
                  description={"메타버스 회의방법"}
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/15_studio_header.png`}
                  featureName="메타버스 회의방법"
                  featureDescription="다양한 회의 방식과 기술의 발전에 따른 회의의 변화를 살펴보고 사람들에게 알려줌으로써 회의에 대한 관심을 이끌고 상황에 맞는 적절한 방식을 선택할 수 있도록 돕습니다. 메타버스 플랫폼 ‘게더타운’을 이용한 메타버스 회의장을 제작하여 온라인상에서 사람들이 필요 방식에 맞는 회의장을 메타버스 안에서 이용할 수 있도록 제작했습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI15.gif`}
                  profileName="정성진"
                  profileEng="Jeong Seongjin"
                  profileMail="jsjpati@naver.com"
                  path="/2022/project/vi/studio/:Seongjin"
                  work1={imageVis.SEONGJIN.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/10_studio_thumbnail.png`}
                  name={"이민주"}
                  description="COMMON SPACE DAY"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/10_studio_header.png`}
                  featureName="COMMON SPACE DAY"
                  featureDescription="정부 주도의 우주 경쟁을 펼치던 과거와 다르게 민간이 우주 사업을 주도하는 뉴 스페이스 시대가 다가왔습니다. 우주에서 새로운 비즈니스 기회가 열리고 있으며, 이에 따라 커먼 스페이스 데이를 새롭게 기획하였습니다. 우주 비즈니스 정보와 관련 포스터 등으로 누구에게나 열려있는 우주, 조금 더 친근하게 우주를 느낄 수 있도록 했습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI11.gif`}
                  profileName="이민주"
                  profileEng="Lee Minju"
                  profileMail="m06090@naver.com"
                  path="/2022/project/vi/studio/:Minju"
                  work1={imageVis.MINJU.work1}
                />

                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/17_studio_thumbnail.png`}
                  name={"지강원"}
                  description="동물복지 인증배지"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/17_studio_header.png`}
                  featureName="동물복지 인증배지"
                  featureDescription="안전한 먹거리와 생명존중 측면에서 동물복지의 필요성은 점점 증가하고 있습니다. 하지만 시중에서 동물복지를 마주하는 건 쉽지 않습니다. 그렇기에 누구나 쉽게 인식할 수 있는 동물복지 인증배지를 디자인했습니다. 그리고 이를 농가, 기업, 식당에서 사용해 소비자의 동물복지 인지가 높아지길 희망합니다. "
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI19.gif`}
                  profileName="지강원"
                  profileEng="Ji Kangwon"
                  profileMail="wlrkddnjs777@naver.com"
                  path="/2022/project/vi/studio/:Kangwon"
                  work1={imageVis.KANGWON.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/11_studio_thumbnail.png`}
                  name={"이재희"}
                  description={"녹색위선"}
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/11_studio_header.png`}
                  featureName="녹색위선"
                  featureDescription="<녹색위선>은 친환경 정책을 표방하지만 실제로는 환경을 파괴하고 있는 기업들의 '그린 워싱'을 고발하고 소비자들의 경각심을 고취하기 위한 캠페인입니다. 이미지 포스터와 인포그래픽을 제작하여 그린 워싱에 대한 개념을 설명하고 실제 사례에 대한 정보를 쉽게 알 수 있도록 그래픽과 사진을 활용해 디자인 했습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI12.gif`}
                  profileName="이재희"
                  profileEng="Lee Jaehee"
                  profileMail="leejh6873@naver.com"
                  path="/2022/project/vi/studio/:Jaehee"
                  work1={imageVis.JAEHEE.work1}
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
                  path="/2022/project/vi/research/:Jeonghun"
                  work1={imageVir.JEONGHUN.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/3_studio_thumbnail.png`}
                  name={"곽윤석"}
                  description="A.C(Area Character)"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/3_studio_header.png`}
                  featureName="A.C(Area Character)"
                  featureDescription="A.C는 지자체 캐릭터라는 뜻을 가졌으며 지금까지 수없이 많이 나온 지자체 캐릭터 들이 잊혀 가고 있는 것을 방지하고자 카카오톡과 연동하여 카카오톡에서는 지자체 캐릭터를 이모티콘으로 다운을 받을 수 있고 캐릭터를 이용한 퀴즈를 맞히면 포인트 를 적립하여 포인트가 누적되면 지역상품권을 구매할 수 있도록 제작되었습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI3.gif`}
                  profileName={"곽윤석"}
                  profileEng={"Kwak Yunseok"}
                  profileMail="dbstjr_98@naver.com"
                  path="/2022/project/vi/studio/:Yunseok"
                  work1={imageVis.YUNSEOK.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/4_studio_thumbnail.png`}
                  name="김초희"
                  description="PLANTRIUM "
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/4_studio_header.png`}
                  featureName="PLANTRIUM "
                  featureDescription="플랜트리움은 증강현실 AR를 활용하여 현재 식물을 키우고 있거나 키울 예정인 사용자들을 위해 인테리어의 정보와 직접 배치해볼 수 있는 기회를 제공하고, 누구나 쉽게 식물을 활용하여 집을 새롭게 변화시키고 또 나만의 식물까지 구매할 수 있는 AR 식물 인테리어 구독 서비스 플랫폼을 제작하고자 합니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI4.gif`}
                  profileName="김초희"
                  profileEng="Kim Chohee"
                  profileMail="kch1571@daum.net"
                  path="/2022/project/vi/studio/:Chohee"
                  work1={imageVis.CHOHEE.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/1_studio_thumbnail.png`}
                  name={"강주언"}
                  description={"나의 푸드 마일리지는?"}
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/1_studio_header.png`}
                  featureName="나의 푸드 마일리지는?"
                  featureDescription="먹은 음식의 푸드 마일리지가 종류 별로 얼마나 쌓여있는지 나타내어주어 환경을 한번 더 생각하며 먹은 음식 영양분을 분석하여 식습관을 체크 해줍니다. 푸드 마일리지를 입력하였을 때 먹은 음식 정보을 분석하여 피부 미용이나 다이어트 등 여러 건강에 관한 앱들과 연동하여서 다양한 정보를 제공해준는 서비스를 구성하려합니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI1.gif`}
                  profileName="강주언"
                  profileEng="Kang Jueon"
                  profileMail="3349520@naver.com"
                  path="/2022/project/vi/studio/:Jueon"
                  work1={imageVis.JUEON.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/9_studio_thumbnail.png`}
                  name={"유지연"}
                  description="ZEROIN"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/9_studio_header.png`}
                  featureName="ZEROIN"
                  featureDescription="제로인은 나에게 적합한 맞춤형 제로 웨이스트 미션을 받고 실천하는 제로 웨이스트 주간 미션 플랫폼입니다. 주어진 미션을 달성하는 도전 의식을 통해 일상에서 제로 웨이스트를 실천하도록 유도합니다. 지속적인 실천을 위해 주마다 미션이 바뀌고, 주어진 기간동안 부담없이 편리하게 제로 웨이스트를 실천할 수 있습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI10.gif`}
                  profileName="유지연"
                  profileEng="Yu Jiyeon"
                  profileMail="wcdg1017@naver.com"
                  path="/2022/project/vi/studio/:Jiyeon"
                  work1={imageVis.JIYEON.work1}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/12_studio_thumbnail.png`}
                  name={"임현우"}
                  description="Cheers to 'Active Senior'"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/12_studio_header.png`}
                  featureName="Cheers to 'Active Senior'"
                  featureDescription="이 작품들은 모두 노인들을 위한 ‘실버 디자인’입니다. 다양한 타겟을 고려해 여러 가지 스타일의 작품을 제작했습니다. 젊은 층들이 보기 쉬운 인포그래픽 포스터를 시작으로 중후한 매력을 뽐내는 복지 인증 서비스 제도, 모두가 부담 없이 접근할 수 있는 실버 매장 스티커들까지 한 주제로 컨셉이 다른 다양한 작품을 시도했습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI13.gif`}
                  profileName="임현우"
                  profileEng="Lim Hyeonwoo"
                  profileMail="gkrktk123@naver.com"
                  path="/2022/project/vi/studio/:Hyeonwoo"
                  work1={imageVis.HYEONWOO.work1}
                  work2={imageVis.HYEONWOO.work2}
                  work3={imageVis.HYEONWOO.work3}
                  work4={imageVis.HYEONWOO.work4}
                  work5={imageVis.HYEONWOO.work5}
                  work6={imageVis.HYEONWOO.work6}
                  work7={imageVis.HYEONWOO.work7}
                  work8={imageVis.HYEONWOO.work8}
                  work9={imageVis.HYEONWOO.work9}
                  work10={imageVis.HYEONWOO.work10}
                  work11={imageVis.HYEONWOO.work11}
                  work12={imageVis.HYEONWOO.work12}
                  work13={imageVis.HYEONWOO.work13}
                  work14={imageVis.HYEONWOO.work14}
                  work15={imageVis.HYEONWOO.work15}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/7_studio_thumbnail.png`}
                  name={"백제훈"}
                  description="당신은 왜 당신이 싫은가"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/7_studio_header.png`}
                  featureName="당신은 왜 당신이 싫은가"
                  featureDescription="자존감이랑 자신을 얼마나 존중하냐에 대한 감정을 다루는 단어입니다. 흔히들 자존감이 높은 것이 좋고 그렇게 되기 위해 노력을 하라곤 하죠. 하지만 꼭 그럴 필요가 있을까요? 이 간단한 테스트는 자존감 저하를 하나의 성격유형으로 취급하고 또 그에 따른 다양한 장점을 소개해줍니다. 그 모습도 다양한 사람들의 다양한 성향중 하나일뿐 애써 바꿔나갈 필요는 없으니까요."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI8.gif`}
                  profileName="백제훈"
                  profileEng="Baek Jaehoon"
                  profileMail="bjh990225@gmail.com"
                  path="/2022/project/vi/studio/:Jaehoon"
                  work1={imageVis.JAEHOON.work1}
                  work2={imageVis.JAEHOON.work2}
                  work3={imageVis.JAEHOON.work3}
                  work4={imageVis.JAEHOON.work4}
                  work5={imageVis.JAEHOON.work5}
                  work6={imageVis.JAEHOON.work6}
                  work7={imageVis.JAEHOON.work7}
                  work8={imageVis.JAEHOON.work8}
                  work9={imageVis.JAEHOON.work9}
                  work10={imageVis.JAEHOON.work10}
                  work11={imageVis.JAEHOON.work11}
                  work12={imageVis.JAEHOON.work12}
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/14_studio_thumbnail.png`}
                  name={"장재석"}
                  description={"NFT 아트의 흥행 비결"}
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/14_studio_header.png`}
                  featureName="NFT 아트의 흥행 비결"
                  featureDescription="NFT는 2017년부터 가상화폐와 함께 화제가 되며 미술 시장의 새 패러다임을 제시하였으며 NFT 시장의 트렌드는 아트와 사진에서 PFP로, 그리고 더 나아가 기업형 NFT로 나아가고 있습니다. 시장의 흐름과 NFT 가치의 핵심인 커뮤니티에 대해 정리해보았습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI18.gif`}
                  profileName="장재석"
                  profileEng="Jang Jaeseok"
                  profileMail="bm34c@naver.com"
                  path="/2022/project/vi/studio/:Jaeseok"
                  work1={imageVis.JAESEOK.work1}
                />
                {/* <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/VI/13_studio_thumbnail.png`}
                  name={"장수영"}
                  description="HANDS UP"
                  header={`${process.env.PUBLIC_URL}/assets/features/VI/13_studio_header.png`}
                  featureName="HANDS UP"
                  featureDescription="HANDS UP은 청소년의 무면허 캠페인입니다. 점점 사고가 일어난 사건 중에 차 사고가 자주 일어났습니다. 그중에 청소년 무면허를 했다는 것입니다. 청소년의 부모님이 관심을 가져야 하고 한눈에 보일 수 있도록 하였습니다. 그래서 내비게이션의 첫 시작 페이지, 자동차 스티커 등을 제작하였습니다. 캠페인을 통해 완화되는 게 목표입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI14.gif`}
                  profileName="장수영"
                  profileEng="Jang Suyoung"
                  profileMail="wkdtndud0426@naver.com"
                  path="/2022/project/vi/studio/:Suyoung"
                  work1={imageVis.SUYOUNG.work1}
                /> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
