import React from "react";
import { Link } from "react-router-dom";

import FeaturesItem from "./FeaturesItem";
import "./Features.scss";
import Header from "../../components/HeaderDark";

import hyejin from "../../assets/features/DC/구혜진/구혜진_research_thumbnail.png";
import hyejinHeader from "../../assets/features/DC/구혜진/구혜진_research_header.png";
import moonju from "../../assets/features/DC/김문주/김문주_research_thumbnail.png";
import moonjuHeader from "../../assets/features/DC/김문주/김문주_research_header.png";
import kiseong from "../../assets/features/DC/김기성/김기성_research_thumbnail.png";
import kiseongHeader from "../../assets/features/DC/김기성/김기성_research_header.png";
import nayoung from "../../assets/features/DC/김나영/김나영_research_thumbnail.png";
import nayoungHeader from "../../assets/features/DC/김나영/김나영_research_header.png";
import mingyu from "../../assets/features/DC/박민규/박민규_research_thumbnail.png";
import mingyuHeader from "../../assets/features/DC/박민규/박민규_research_header.png";
import bohyeon from "../../assets/features/DC/서보현/서보현_research_thumbnail.png";
import bohyeonHeader from "../../assets/features/DC/서보현/서보현_research_header.png";
import dohyeon from "../../assets/features/DC/이도현/이도현_research_thumbnail.png";
import dohyeonHeader from "../../assets/features/DC/이도현/이도현_research_header.png";
import seounyeon from "../../assets/features/DC/이승연/이승연_research_thumbnail.png";
import seounyeonHeader from "../../assets/features/DC/이승연/이승연_research_header.png";
import youngmin from "../../assets/features/DC/이영민/이영민_research_thumbnail.png";
import youngminHeader from "../../assets/features/DC/이영민/이영민_research_header.png";
import seongrae from "../../assets/features/DC/조성래/조성래_research_thumbnail.png";
import seongraeHeader from "../../assets/features/DC/조성래/조성래_research_header.png";
import img1 from "../../assets/features/DC/조성래/조성래_studio_thumbnail.png";

import doyeon from "../../assets/features/DC/안도연/안도연_research_thumbnail.png";
import doyeonHeader from "../../assets/features/DC/안도연/안도연_research_header.png";
import eunkyo from "../../assets/features/DC/장은교/장은교_research_thumbnail.png";
import eunkyoHeader from "../../assets/features/DC/장은교/장은교_research_header.png";
import yihyeon from "../../assets/features/DC/조이현/조이현_research_thumbnail.png";
import yihyeonHeader from "../../assets/features/DC/조이현/조이현_research_header.png";
import changhyun from "../../assets/features/DC/지창현/지창현_research_thumbnail.png";
import changhyunHeader from "../../assets/features/DC/지창현/지창현_research_header.png";

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
                <div className="major-vi">Visual Infomation Design</div>
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
                  src={hyejin}
                  name="구혜진"
                  description="IV"
                  header={hyejinHeader}
                  featureName="IV"
                  featureDescription="우주 산업이 나날이 발전하고 있는 지금, 기술의 발전으로 전문적으로 훈련받은 우주비행사 뿐만 아니라 민간인들도 우주에 갈 수 있게 되었습니다. 저는 더 발전된 미래에는 민간인이 우주왕복선을 개인소유할 수 있을 것이라고 상상했고, 일상에서도 쉽게 사용이 가능한 우주선 IOT 서비스를 만들어보고 싶어 이 프로젝트를 기획하게 되었습니다."
                  profileName="구혜진"
                  profileEng="Gu Heyjin"
                  path="/2022/project/dc/:Hyejin"
                />
                <FeaturesItem
                  src={kiseong}
                  name={"김기성"}
                  description="NEXITY"
                  header={kiseongHeader}
                  featureName="circular"
                  featureDescription="다양한 브랜드들이 NFT를 긍정적으로 전개하고 있지만 판매는 대형 거래소에서, 혜택이나 커뮤니티 기능은 자사나 다른 플랫폼에서 이용하는 분산된 형태를 띠고 있습니다. 사용자 중점의 통합된 플랫폼을 구축하여 비즈니스 접근성을 높여 NFT의 가치 신뢰성을 확보하고자 circular 서비스를 제작하게 되었습니다."
                  profileName="김기성"
                  profileEng="Kim Kiseong"
                  path="/2022/project/dc/:Kiseong"
                />
                <FeaturesItem
                  src={nayoung}
                  name={"김나영"}
                  description={"X RONE"}
                  header={nayoungHeader}
                  featureName="X RONE"
                  featureDescription={
                    "지능형 무인 비행체인 ‘액체 수소 드론’을 이용한 드론 호출 서비스로 향후 기후변화 대응을 위한 중요 추세인 탄소 중립 실천이 가능한 서비스입니다. 드론을 이용하여 온실가스 감축, 미세먼지 저감, 해외 에너지 의존도를 감소하며 스마트 물류 플랫폼의 지속 가능한 가치와 미래의 새로운 비전 제시가 가능하다고 생각하여 서비스를 제작하였습니다."
                  }
                  profileName={"김나영"}
                  profileEng={"Kim Nayoung"}
                  path="/2022/project/dc/:Nayoung"
                />
                <FeaturesItem
                  src={moonju}
                  name="김문주"
                  description="차곡차곡"
                  header={moonjuHeader}
                  featureName="차곡차곡"
                  featureDescription="차곡차곡은 돈을 차곡차곡 모으자는 의미로, 올바른 소비습관을 만들고 싶은 mz세대를 위한 앱입니다. 내가 어디에 돈을 썼는지 한 눈에 볼 수 있고 그룹원과 배틀을 통해 불필요한 소비를 하지 않게 도와줍니다. 앱 내의 페이 기능을 이용해 결제하면 지출 내역이 자동으로 기록되고 해당 기능들을 워치에서도 이용할 수 있도록 구성하였습니다."
                  profileName="김문주"
                  profileEng="Kim Moonju"
                  path="/2022/project/dc/:Moonju"
                />
                <FeaturesItem
                  src={img1}
                  name={"김시은"}
                  description={"NEXITY"}
                  path="/2022/project/dc/:Sieun"
                />
                <FeaturesItem
                  src={mingyu}
                  name={"박민규"}
                  description={"나드리"}
                  header={mingyuHeader}
                  featureName={"나드리"}
                  featureDescription={
                    "나드리는 교통약자들을 위한 길안내 서비스 입니다. 단순 길안내가 아닌 위험지역과 장애물을 피해 경로를 알려주며, 사용자 주변 편의시설의 위치와 예약이 가능한 콜택시 기능을 제공하고 있습니다. 그럼 지금 즐겁게 나드리를 떠나볼까요?﻿ "
                  }
                  profileName={"박민규"}
                  profileEng={"Park Mingyu"}
                  path="/2022/project/dc/:Mingyu"
                />
                <FeaturesItem
                  src={bohyeon}
                  name={"서보현"}
                  description={"베비케어"}
                  header={bohyeonHeader}
                  featureName="베비케어"
                  featureDescription="베비케어는 아토피 피부염에 걸린 아이를 키우고 있지만 병원에 방문할 시간이 마땅치 않거나 병원이 문을 열지 않은 시간에도 진료를 받고 싶거나, 아토피 케어를 하고 싶은 분들을 대상으로 제작되었습니다. 비대면 진료, AI 진료, 목욕을 관리해 줘 아이의 아토피에 대해 정확하고 빠른 케어할 수 있도록 도와주는 서비스입니다."
                  profileName="서보현"
                  profileEng="Seo Bohyeon"
                  path="/2022/project/dc/:Bohyeon"
                />
                <FeaturesItem
                  src={doyeon}
                  name={"안도연"}
                  description="difume"
                  header={doyeonHeader}
                  featureName="difume"
                  featureDescription="향기는 비록 눈에 보이지 않지만 감정, 기억 등에 영향을 주며 우리 주변에 항상 존재합니다. 디퓸(difume)은 날씨에 맞게 향을 추천해 주고 날씨뿐만 아니라 공간을 스캔하여 공간에 맞는 향을 추천해 줍니다. 향, 발향 강도, 시간 등을 원격으로 제어할 수 있으며 자신만의 패턴을 설정하여 편리하게 사용할 수 있습니다."
                  profileName="안도연"
                  profileEng="An Doyeon"
                  path="/2022/project/dc/:Doyeon"
                />
                <FeaturesItem
                  src={dohyeon}
                  name={"이도현"}
                  description={"NOVER"}
                  header={dohyeonHeader}
                  featureName="NOVER"
                  featureDescription="현대 사회에서 디지털 시대에 적응하여 디지털 기기나 AI 스피커를 자주 사용하는 시니어가 증가하고 있습니다. NOVER는 이러한 시니어들이 노후를 즐기며 건강을 편리하게 관리할 수 있도록 웰니스를 '잘 먹기', '잘 움직이기', '잘 쉬기'  세 가지 카테고리로 나누어 관리하고, 개선 방향을 제시해주는 서비스입니다."
                  profileName="이도현"
                  profileEng="Lee Dohyeon"
                  path="/2022/project/dc/:Dohyeon"
                />
                <FeaturesItem
                  src={seounyeon}
                  name={"이승연"}
                  description={"I'M HERE"}
                  header={seounyeonHeader}
                  featureName="I'M HERE"
                  featureDescription="'I'M HERE'은 일상생활 속에서 물건 관리를 효율적으로 할 수 있는 앱입니다. 방식으로는 지도 거리뷰 원리와 QR코드를 이용합니다. 2차원 형태의 QR코드를 인식하여 좌표값을 3차원 상의 공간 좌표로 변환하고 QR코드의 모서리 위치와 중심 등 3차원으로 변환된 정보를 이용하여 각도와 거리 등을 파악하여 물건 위치를 알 수 있습니다."
                  profileName="이승연"
                  profileEng="Lee Seoungyeon"
                  path="/2022/project/dc/:Seoungyeon"
                />

                <FeaturesItem
                  src={youngmin}
                  name={"이영민"}
                  description={"또바기"}
                  header={youngminHeader}
                  featureName="또바기"
                  featureDescription="반려동물을 키우는 가구가 늘어나는 추세에 동물병원 진료비용에 부담을 가지고, 어느 병원에서 진료받아야 할지 찾는 분들에게 사용자에게 필요한 병원을 알려주고, 사용자 위치 근처에 있는 병원과 병원마다의 가격 및 리뷰 등의 정보를 제공하며 어떤 진료가 가능한지 알려주는 애플리케이션입니다. "
                  profileName="이영민"
                  profileEng="Lee Youngmin"
                  path="/2022/project/dc/:Youngmin"
                />

                <FeaturesItem
                  src={img1}
                  name={"이한빈"}
                  description={"NEXITY"}
                  path="/2022/project/dc/:Hanbin"
                />

                <FeaturesItem
                  src={eunkyo}
                  name={"장은교"}
                  description="FING"
                  header={eunkyoHeader}
                  featureName="FING"
                  featureDescription="코로나19의 영향으로 여행 서비스에도 많은 변화가 생겼습니다. 특히 나만의 시간을 보낼 수 있는 섬 혹은 소도시 등 색다른 여행지를 선호하고 있습니다. 이러한 트렌드에 맞춘 안심하고 여행을 떠날 수 있는 FING은 자율운항선박과 함께 나만의 여행을 만들며 특별한 경험을 만들 수 있는 서비스입니다."
                  profileName="장은교"
                  profileEng="Jang Eunkyo"
                  path="/2022/project/dc/:Eunkyo"
                />

                <FeaturesItem
                  src={img1}
                  name={"정주현"}
                  description={"NEXITY"}
                  path="/2022/project/dc/:Juhyun"
                />

                <FeaturesItem
                  src={seongrae}
                  name={"조성래"}
                  description="Hi, Tap"
                  header={seongraeHeader}
                  featureName="Hi, Tap"
                  featureDescription="치매노인 부양이 힘드신가요? 치매노인이 걱정된다면 웨어러블 디바이스를 연결 후 치매노인의 현 위치, 건강 상태를 실시간으로 확인하세요 보호자와 치매노인은 관계 및 소통이 가장 중요한 만큼 Hi, Tap에선 일정 알림, 돌보미 매칭, 돌봄 일지 관리 등 다양한 콘텐츠가 준비되어 있습니다 지금부터 앱을 소개합니다!"
                  profileName="조성래"
                  profileEng="Cho Seongrae"
                  path="/2022/project/dc/:Seongrae"
                />

                <FeaturesItem
                  src={yihyeon}
                  name={"조이현"}
                  description="슬금슬금"
                  header={yihyeonHeader}
                  featureName="슬금슬금"
                  featureDescription="슬금슬금은 부담 없이 돌아다닐 수 있다는 장점을 가진 '동네'에 집중하여 사용자가 살고 있는 동네 주변의 다양한 핫플들을 소개하고 동네의 다양한 소식들을 사용자들끼리 주고받을 수 있는 앱 서비스입니다. 사용자 자신의 취향에 맞는 다양한 핫플들을 통해 그동안 미처 몰랐었던 동네의 새로운 재미를 찾을 수 있을 것입니다."
                  profileName="조이현"
                  profileEng="Jo Yihyeon"
                  path="/2022/project/dc/:Yihyeon"
                />
                <FeaturesItem
                  src={changhyun}
                  name={"지창현"}
                  description="MONASIS"
                  header={changhyunHeader}
                  featureName="MONASIS"
                  featureDescription="문아시스는 공통의 관심사를 가진 사람들을 하나로 연결해 주는 서비스입니다. 메타버스 공간인 문아시스에서 다양한 사람들과 작품에 대해서 이야기하고 함께 작품을 쓸 수 있습니다. 또한 대사 사운드화로 생동감 있는 작품을 만들 수 있습니다. 창작이라는 벽 앞에서 잠시 쉬고 위안이 되는 오아시스 같은 곳이 되었으면 하는 고민이 담겨있습니다. "
                  profileName="지창현"
                  profileEng="Ji Changhyun"
                  path="/2022/project/dc/:Changhyun"
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
