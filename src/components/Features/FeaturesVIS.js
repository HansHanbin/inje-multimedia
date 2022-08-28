import React from "react";
import { Link } from "react-router-dom";

import FeaturesItem from "./FeaturesItem";
import "./Features.scss";
import Header from "../../components/HeaderDark";

import nayoung from "../../assets/features/DC/김나영/김나영_research_thumbnail.png";
import nayoungHeader from "../../assets/features/DC/김나영/김나영_research_header.png";
import mingyu from "../../assets/features/DC/박민규/박민규_research_thumbnail.png";
import mingyuHeader from "../../assets/features/DC/박민규/박민규_research_header.png";
import bohyeon from "../../assets/features/DC/서보현/서보현_research_thumbnail.png";
import bohyeonHeader from "../../assets/features/DC/서보현/서보현_research_header.png";
import youngmin from "../../assets/features/DC/이영민/이영민_research_thumbnail.png";
//import youngminHeader from "../../assets/features/DC/박민규/박민규_research_header.png";
import seongrae from "../../assets/features/DC/조성래/조성래_research_thumbnail.png";
import seongraeHeader from "../../assets/features/DC/조성래/조성래_research_header.png";
import img1 from "../../assets/features/DC/조성래/조성래_research_thumbnail.png";

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
                  src={img1}
                  name={"구혜진"}
                  description={"NEXITY"}
                  path="/2022/project/dc/:Hyejin"
                />
                <FeaturesItem
                  src={img1}
                  name={"김기성"}
                  description={"NEXITY"}
                  path="/2022/project/dc/:Kiseong"
                />
                <FeaturesItem
                  src={nayoung}
                  name={"김나영"}
                  description={"X RONE"}
                  header={nayoungHeader}
                  featureName={"X RONE"}
                  featureDescription={
                    "지능형 무인 비행체인 ‘액체 수소 드론’을 이용한 드론 호출 서비스로 향후 기후변화 대응을 위한 중요 추세인 탄소 중립 실천이 가능한 서비스입니다. 드론을 이용하여 온실가스 감축, 미세먼지 저감, 해외 에너지 의존도를 감소하며 스마트 물류 플랫폼의 지속 가능한 가치와 미래의 새로운 비전 제시가 가능하다고 생각하여 서비스를 제작하였습니다."
                  }
                  profileName={"김나영"}
                  profileEng={"Kim Nayoung"}
                  path="/2022/project/dc/:Nayoung"
                />
                <FeaturesItem
                  src={img1}
                  name={"김문주"}
                  description={"NEXITY"}
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
                  src={img1}
                  name={"안도연"}
                  description={"NEXITY"}
                  path="/2022/project/dc/:Doyeon"
                />
                <FeaturesItem
                  src={img1}
                  name={"이도현"}
                  description={"NEXITY"}
                  path="/2022/project/dc/:Dohyeon"
                />
                <FeaturesItem
                  src={img1}
                  name={"이승연"}
                  description={"NEXITY"}
                  path="/2022/project/dc/:Seungyeon"
                />
                <FeaturesItem
                  src={youngmin}
                  name={"이영민"}
                  description={"또바기"}
                  featureName="또바기"
                  featureDescription="반려동물을 키우는 가구가 늘어나는 추세에 동물병원 진료비용에 부담을 가지고, 어느 병원에서 진료받아야 할지 찾는 분들에게 사용자에게 필요한 병원을 알려주고, 사용자 위치 근처에 있는 병원과 병원마다의 가격 및 리뷰 등의 정보를 제공하며 진료 가능 여부를 알려주는 애플리케이션입니다."
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
                  src={img1}
                  name={"장은교"}
                  description={"NEXITY"}
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
                  description={"Hi, Tap"}
                  header={seongraeHeader}
                  featureName="Hi, Tap"
                  featureDescription="치매노인 부양이 힘드신가요? 치매노인이 걱정된다면 웨어러블 디바이스를 연결 후 치매노인의 현 위치, 건강 상태를 실시간으로 확인하세요 보호자와 치매노인은 관계 및 소통이 가장 중요한 만큼 Hi, Tap에선 일정 알림, 돌보미 매칭, 돌봄 일지 관리 등 다양한 콘텐츠가 준비되어 있습니다 지금부터 앱을 소개합니다!"
                  profileName="조성래"
                  profileEng="Cho Seongrae"
                  path="/2022/project/dc/:Seongrae"
                />
                <FeaturesItem
                  src={img1}
                  name={"조이현"}
                  description={"NEXITY"}
                  path="/2022/project/dc/:Yihyeon"
                />
                <FeaturesItem
                  src={img1}
                  name={"지창현"}
                  description={"NEXITY"}
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
