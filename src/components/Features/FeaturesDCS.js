import React from "react";
import { Link } from "react-router-dom";
import "./Features.scss";

import Footer from "../../components/Footer";
import FeaturesItem from "./FeaturesItem";
import Header from "../../components/HeaderDark";

// profile image

import GuHyejin from "../../assets/images/ProfileImage/DC/DC구혜진.gif";
import KimKiseong from "../../assets/images/ProfileImage/DC/DC김기성.gif";
import KimNayoung from "../../assets/images/ProfileImage/DC/DC김나영.gif";
import KimMoonju from "../../assets/images/ProfileImage/DC/DC김문주.gif";
import KimSieun from "../../assets/images/ProfileImage/DC/DC김시은.gif";
import ParkMingyu from "../../assets/images/ProfileImage/DC/DC박민규.gif";
import ParkSeongho from "../../assets/images/ProfileImage/VI/VI박성호.gif";
import BaekJaehoon from "../../assets/images/ProfileImage/VI/VI백제훈.gif";
import SeoBohyeon from "../../assets/images/ProfileImage/DC/DC서보현.gif";
import AnDoyeon from "../../assets/images/ProfileImage/DC/DC안도연.gif";
import LeeDohyeon from "../../assets/images/ProfileImage/DC/DC이도현.gif";
import LeeSeungyeon from "../../assets/images/ProfileImage/DC/DC이승연.gif";
import LeeYoungmin from "../../assets/images/ProfileImage/DC/DC이영민.gif";
import LeeHanbin from "../../assets/images/ProfileImage/DC/DC이한빈.gif";
import JangEunkyo from "../../assets/images/ProfileImage/DC/DC장은교.gif";
import JeongJuhyun from "../../assets/images/ProfileImage/DC/DC정주현.gif";
import ChoSeongRae from "../../assets/images/ProfileImage/DC/DC조성래.gif";
import JoYihyeon from "../../assets/images/ProfileImage/DC/DC조이현.gif";
import JiChanghyun from "../../assets/images/ProfileImage/DC/DC지창현.gif";

// thumbnail & header image

import hyejin from "../../assets/features/DC/구혜진/구혜진_studio_thumbnail.png";
import hyejinHeader from "../../assets/features/DC/구혜진/구혜진_studio_header.png";
import moonju from "../../assets/features/DC/김문주/김문주_studio_thumbnail.png";
import moonjuHeader from "../../assets/features/DC/김문주/김문주_studio_header.png";
import kiseong from "../../assets/features/DC/김기성/김기성_studio_thumbnail.png";
import kiseongHeader from "../../assets/features/DC/김기성/김기성_studio_header.png";
import nayoung from "../../assets/features/DC/김나영/김나영_studio_thumbnail.png";
import nayoungHeader from "../../assets/features/DC/김나영/김나영_studio_header.png";
import mingyu from "../../assets/features/DC/박민규/박민규_studio_thumbnail.png";
import mingyuHeader from "../../assets/features/DC/박민규/박민규_studio_header.png";
import seongho from "../../assets/features/DC/박성호/박성호_studio_thumbnail.png";
import seonghoHeader from "../../assets/features/DC/박성호/박성호_studio_header.png";
import bohyeon from "../../assets/features/DC/서보현/서보현_studio_thumbnail.png";
import bohyeonHeader from "../../assets/features/DC/서보현/서보현_studio_header.png";
import dohyeon from "../../assets/features/DC/이도현/이도현_studio_thumbnail.png";
import dohyeonHeader from "../../assets/features/DC/이도현/이도현_studio_header.png";
import seounyeon from "../../assets/features/DC/이승연/이승연_studio_thumbnail.png";
import seounyeonHeader from "../../assets/features/DC/이승연/이승연_studio_header.png";
import youngmin from "../../assets/features/DC/이영민/이영민_studio_thumbnail.png";
import youngminHeader from "../../assets/features/DC/이영민/이영민_studio_header.png";
import seongrae from "../../assets/features/DC/조성래/조성래_studio_thumbnail.png";
import seongraeHeader from "../../assets/features/DC/조성래/조성래_studio_header.png";
import img1 from "../../assets/features/DC/조성래/조성래_studio_thumbnail.png";

import doyeon from "../../assets/features/DC/안도연/안도연_studio_thumbnail.png";
import doyeonHeader from "../../assets/features/DC/안도연/안도연_studio_header.png";
import eunkyo from "../../assets/features/DC/장은교/장은교_studio_thumbnail.png";
import eunkyoHeader from "../../assets/features/DC/장은교/장은교_studio_header.png";
import yihyeon from "../../assets/features/DC/조이현/조이현_studio_thumbnail.png";
import yihyeonHeader from "../../assets/features/DC/조이현/조이현_studio_header.png";
import changhyun from "../../assets/features/DC/지창현/지창현_studio_thumbnail.png";
import changhyunHeader from "../../assets/features/DC/지창현/지창현_studio_header.png";

import jaehoon from "../../assets/features/DC/백제훈/백제훈_studio_thumbnail.png";
import jaehoonHeader from "../../assets/features/DC/백제훈/백제훈_studio_header.png";

import sieun from "../../assets/features/DC/김시은/김시은_studio_thumbnail.png";
import sieunHeader from "../../assets/features/DC/김시은/김시은_studio_header.png";

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
            <div className="class-studio class class-active">
              <Link to="/2022/project/dc/studio">디지털콘텐츠스튜디오</Link>
            </div>

            <div className="class-research class">
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
                  name={"구혜진"}
                  description={"MARITY"}
                  header={hyejinHeader}
                  featureName="MARITY"
                  featureDescription="해수면의 상승으로 삶의 터전을 잃은 우리는 현재 해상 도시에 거주 중입니다. 한정된 자원 속에서 살아남기 위해 선택한 자급자족의 삶, 우리는 고도화된 인공지능을 활용해 해상 도시의 더 나은 미래를 만들어가려고 합니다. 머지않아 만나게 될 자급자족 뉴노멀 시대! 마리티와 함께 미리 만나 보아요! "
                  profileImage={GuHyejin}
                  profileName="구혜진"
                  profileEng="Gu Hyejin"
                  profileMail="fpqlt_326998@naver.com"
                  path="/2022/project/dc/:Hyejin"
                />
                <FeaturesItem
                  src={kiseong}
                  name="김기성"
                  description="PLANET"
                  header={kiseongHeader}
                  featureName="PLANET"
                  featureDescription="첫 출시 당시엔 낯설게 다가왔던 스마트폰이 어느새 우리 생활 속에서 일상이 되었듯이, 가까운 시기에 메타버스가 새로운 일상이 될 것이며, 그 속에서 많은 시간을 보내게 될 것입니다. 사람들의 관심사와 콘텐츠 체류 시간에 따라 주목받는 소셜앱은 변화하고 진화해왔습니다. 메타버스 시대의 소셜앱은 어떤 기능이 필요하고 어떤 모습일까요?"
                  profileImage={KimKiseong}
                  profileName="김기성"
                  profileEng="Kim Kiseong"
                  profileMail="kimkiseong98@gmail.com"
                  path="/2022/project/dc/:Kiseong"
                />
                <FeaturesItem
                  src={nayoung}
                  name={"김나영"}
                  description="SPACE JANITOR"
                  header={nayoungHeader}
                  featureName="SPACE JANITOR"
                  featureDescription="우주쓰레기를 처리하도록 도와주는 미래(2100년대) 우주쓰레기 수거 서비스로 우주쓰레기의 끝없는 증가로 발생하는 미래의 문제를 해결하기 위해 만들었습니다. 사용자는 우주선 조종 자격증 취득 인증 후 서비스 이용이 가능하며 우주선과 SPACE JANITOR의 태블릿을 연동하여 사용한다는 가정을 통해 서비스를 제작하였습니다."
                  profileImage={KimNayoung}
                  profileName={"김나영"}
                  profileEng={"Kim Nayoung"}
                  profileMail="sdf02033@gmail.com"
                  path="/2022/project/dc/:Nayoung"
                />
                <FeaturesItem
                  src={moonju}
                  name="김문주"
                  description="Hey, MATE "
                  header={moonjuHeader}
                  featureName="Hey, MATE "
                  featureDescription="여러분은 소중한 사람과 어떻게 지내고 있나요? 헤이메이트는 기숙사 생활을 하면서 방을 같이 쓰는 친구이자 가족 같은 룸메이트와 함께 행복하게 생활하면서 좋은 추억을 쌓을 수 있도록 도와주는 앱입니다. 서로의 시간표를 공유하고 얼굴 보고 직접 하기 힘든 말을 전할 수 있으며 예전 룸메이트와의 소통을 통해 인연을 이어 나갈 수 있습니다."
                  profileImage={KimMoonju}
                  profileName="김문주"
                  profileEng="Kim Moonju"
                  profileMail="m.jju422@gmail.com"
                  path="/2022/project/dc/:Moonju"
                />
                <FeaturesItem
                  src={sieun}
                  name={"김시은"}
                  description={"Pill-Me"}
                  header={sieunHeader}
                  featureName="Pill-Me"
                  featureDescription="우리는 어른이나 아이 할 것 없이 매우 제한적인 형태의 알약을 먹습니다. 같은 약이지만 약효는 사람마다 다르고 부작용을 일으키기도 하죠. 3D프린터 기술은 이 문제를 해결하기 위해 개인 맞춤형 알약 조제를 목표로 하고 있습니다. Pill-Me은 이 기술이 활용될 미래에 도래했을 때, 대중들이 쉽게 사용할 수 있는 서비스를 제공합니다. "
                  profileImage={KimSieun}
                  profileName="김시은"
                  profileEng="Kim Sieun"
                  profileMail="kns9559sn@gmail.com"
                  path="/2022/project/dc/:Sieun"
                />
                <FeaturesItem
                  src={mingyu}
                  name="박민규"
                  description="소담"
                  header={mingyuHeader}
                  featureName="소담"
                  featureDescription="사춘기 혹은 성인이 되고서 가족 간의 소통이 점점 없어지는 가정이 늘어나고 있으며 그로 인해 가족이지만 불편함을 느끼거나 같은 공간에 있으면 어색함을 느끼는 사람도 증가하고 있습니다. 소담은 이러한 문제점을 해결하는 데 도움을 주는 애플리케이션이며 가족 간의 소통 개선을 목적으로 프로젝트를 시작하게 되었습니다."
                  profileImage={ParkMingyu}
                  profileName="박민규"
                  profileEng={"Park Mingyu"}
                  profileMail="parkmin9yu@naver.com"
                  path="/2022/project/dc/:Mingyu"
                />
                <FeaturesItem
                  src={seongho}
                  name={"박성호"}
                  description={"혼플"}
                  header={seonghoHeader}
                  featureName={"혼플"}
                  featureDescription="혼자만의 삶을 즐기는 1인 가구가 계속 늘어나고 있는 현재 1인 가구를 위한 편의시설 상품, 서비스들이 다양하게 늘어나고 있어 성향과 선호도에 맞게 빠른 여행 일정을 세워주고 혼자 여행을 즐기면서도 나와 비슷한 취향과 선호도를 가진 사람들을 분석해 동행할 수 있는 매칭 서비스도 함께 제공하는 여행 플랜 서비스 앱 입니다."
                  profileImage={ParkSeongho}
                  profileName="박성호"
                  profileEng="Park Seongho"
                  profileMail="atree3682@daum.net"
                  path="/2022/project/dc/:Seongho"
                />
                <FeaturesItem
                  src={jaehoon}
                  name={"백제훈"}
                  description="E.new"
                  header={jaehoonHeader}
                  featureName="E.new"
                  featureDescription="연애를 하게 되면 보통 권태기라는 기간이 찾아옵니다. 이 기간동안은 서로의 모습이 이유어 없이 짜증이 나거나 많은 연인들이 이 기간에 이별하곤 합니다. 이 앱은 그런 권태기를 여러기능으로 슬기롭게 극복할 수 있도록 도와줍니다."
                  profileImage={BaekJaehoon}
                  profileName="백제훈"
                  profileEng="Baek Jaehoon"
                  profileMail="bjh990225@gmail.com"
                  path="/2022/project/dc/:Jaehoon"
                />
                <FeaturesItem
                  src={bohyeon}
                  name={"서보현"}
                  description="데롱"
                  header={bohyeonHeader}
                  featureName="데롱"
                  featureDescription="데롱은 복잡한 오해를 심해라고 빗대어 표현하였습니다. 자신의 정보를 등록하여 나만의 심해 즉 데롱을 제작합니다. 이는 심해 속에 해파리가 있는 모습으로 제작이 되며 친구들의 데롱의 모습과 정보 또한 알 수 있습니다. 친구들과의 대화와 질문을 통해 서로를 알아가고 오해를 해결할 수 있도록 도와주는 서비스입니다."
                  profileImage={SeoBohyeon}
                  profileName="서보현"
                  profileEng="Seo Bohyeon"
                  profileMail="seobori2000@gmail.com"
                  path="/2022/project/dc/:Bohyeon"
                />
                <FeaturesItem
                  src={doyeon}
                  name={"안도연"}
                  description="Assem"
                  header={doyeonHeader}
                  featureName="Assem"
                  featureDescription="최근 1인 가구가 주된 가구 형태로 자리매김하면서 다양한 유형의 공유 주거 시설이 나타났습니다. 이에 따라, 공유 주거 시설을 선택하는 사람들이 증가하였습니다. 어셈(Assem)은 하우스메이트들과 일을 분담하고 수행하는 과정에서 소통에 도움을 주고, 공동구매 등 공유 주거 시설에서의 생활이 원활할 수 있도록 도와주는 어플리케이션입니다."
                  profileImage={AnDoyeon}
                  profileName="안도연"
                  profileEng="An Doyeon"
                  profileMail="rkornne@gmail.com"
                  path="/2022/project/dc/:Doyeon"
                />
                <FeaturesItem
                  src={dohyeon}
                  name={"이도현"}
                  description="AWAVE"
                  header={dohyeonHeader}
                  featureName="AWAVE"
                  featureDescription="사람들은 살면서 집중해야 하는 상황에 자주 놓이게 됩니다. 이러한 상황에서 효율을 높이고 싶지만 어떻게 해야 할지 모르는 사람들을 위해서 서비스를 기획하였습니다. AWAVE는 뇌파를 이용하는 BCI 기술과 가전을 제어하는 IoT 기술을 이용하여 실내 환경을 조절하여 사용자가 최상의 집중력을 낼 수 있도록 돕는 서비스입니다."
                  profileImage={LeeDohyeon}
                  profileName="이도현"
                  profileEng="Lee Dohyeon"
                  profileMail="hyeonn323@gmail.com"
                  path="/2022/project/dc/:Dohyeon"
                />
                <FeaturesItem
                  src={seounyeon}
                  name={"이승연"}
                  description="HAM:MILY"
                  header={seounyeonHeader}
                  featureName="HAM:MILY"
                  featureDescription="'HAM:MILY'는 햄스터 전문 펫 케어 서비스를 제공하는 앱입니다. 햄스터에 대한 지식, 육성 정보, 생활 속 서비스 등을 보입니다. '하루 기록'을 통해 상태와 일기를 남길 수 있어, 하루 기록 데이터를 바탕으로 IA가 주기적으로 분석하여 맞춤형 컨디션, 청결도 등을 포함한 건강 상태 정보를 제공합니다."
                  profileImage={LeeSeungyeon}
                  profileName="이승연"
                  profileEng="Lee Seoungyeon"
                  profileMail="lee40095617@gmail.com"
                  path="/2022/project/dc/:Seungyeon"
                />
                <FeaturesItem
                  src={youngmin}
                  name={"이영민"}
                  description={"HOMETUDY"}
                  header={youngminHeader}
                  featureName="HOMETUDY"
                  featureDescription="'홈 스쿨링' 과 ‘그룹 스터디' 를 통해 학습에 대한 동기부여를 제공하여 본인 스스로 학습에 흥미를 느낄 수 있도록 하며, ‘게이미피케이션‘ 요소를 추가하여 애플리케이션 사용 시 흥미와 관심도를 높이고, 동기부여와 자발적 참여 의지를 극대화하여 스스로에게 원동력이 생기게 지원해주는 애플리케이션입니다."
                  profileImage={LeeYoungmin}
                  profileName="이영민"
                  profileEng="Lee Youngmin"
                  profileMail="rjscl343@naver.com"
                  path="/2022/project/dc/:Youngmin"
                />
                <FeaturesItem
                  src={img1}
                  name={"이한빈"}
                  description={"NEXITY"}
                  header={eunkyoHeader}
                  featureName="NEXITY"
                  featureDescription="비가 와 우중충한 상태를 좋아하는 사람, 천둥번개를 즐기는 사람, 구름 한 점 없는 쨍쨍한 햇빛을 좋아하는 사람 등 선호하는 기상 상태는 모두 다릅니다. 내가 가장 좋아하는 기상을 언제든 즐길 수 있는 방법은 없을까요? 그런 당신을 위한 기상상태 조절을 통한 여가 활동 서비스 WON:D와 함께라면 할 수 있습니다! "
                  profileImage={LeeHanbin}
                  profileName="이한빈"
                  profileEng="Lee Hanbin"
                  profileMail="hans.hanbin.lee@gmail.com"
                  path="/2022/project/dc/:Hanbin"
                />
                <FeaturesItem
                  src={eunkyo}
                  name={"장은교"}
                  description="FING"
                  header={eunkyoHeader}
                  featureName="WON:D"
                  featureDescription="비가 와 우중충한 상태를 좋아하는 사람, 천둥번개를 즐기는 사람, 구름 한 점 없는 쨍쨍한 햇빛을 좋아하는 사람 등 선호하는 기상 상태는 모두 다릅니다. 내가 가장 좋아하는 기상을 언제든 즐길 수 있는 방법은 없을까요? 그런 당신을 위한 기상상태 조절을 통한 여가 활동 서비스 WON:D와 함께라면 할 수 있습니다! "
                  profileImage={JangEunkyo}
                  profileName="장은교"
                  profileEng="Jang Eunkyo"
                  profileMail="429650@gmail.com"
                  path="/2022/project/dc/:Eunkyo"
                />
                <FeaturesItem
                  src={img1}
                  name={"정주현"}
                  description={"NEXITY"}
                  header={eunkyoHeader}
                  featureName="WON:D"
                  featureDescription="비가 와 우중충한 상태를 좋아하는 사람, 천둥번개를 즐기는 사람, 구름 한 점 없는 쨍쨍한 햇빛을 좋아하는 사람 등 선호하는 기상 상태는 모두 다릅니다. 내가 가장 좋아하는 기상을 언제든 즐길 수 있는 방법은 없을까요? 그런 당신을 위한 기상상태 조절을 통한 여가 활동 서비스 WON:D와 함께라면 할 수 있습니다! "
                  profileImage={JeongJuhyun}
                  profileName="정주현"
                  profileEng="Jung Juhyun"
                  profileMail="qwert911262@gmail.com"
                  path="/2022/project/dc/:Juhyun"
                />
                <FeaturesItem
                  src={seongrae}
                  name={"조성래"}
                  description={"Hi, Tap"}
                  header={seongraeHeader}
                  featureName="Hi, Tap"
                  featureDescription="치매노인 부양이 힘드신가요? 치매노인이 걱정된다면 웨어러블 디바이스를 연결 후 치매노인의 현 위치, 건강 상태를 실시간으로 확인하세요 보호자와 치매노인은 관계 및 소통이 가장 중요한 만큼 Hi, Tap에선 일정 알림, 돌보미 매칭, 돌봄 일지 관리 등 다양한 콘텐츠가 준비되어 있습니다 지금부터 앱을 소개합니다!"
                  profileImage={ChoSeongRae}
                  profileName="조성래"
                  profileEng="Cho Seongrae"
                  profileMail="srj9704@naver.com"
                  path="/2022/project/dc/:Seongrae"
                />
                <FeaturesItem
                  src={yihyeon}
                  name={"조이현"}
                  description="FEELM"
                  header={yihyeonHeader}
                  featureName="FEELM"
                  featureDescription="무수히 쏟아지는 방대한 양의 영상 콘텐츠 때문에 오히려 어떤 것을 보아야 할지 쉽게 선택하지 못하는 현상이 발생하고 있습니다. 필름(FEELM)은 철저히 사용자 개개인의 취향에 맞는 맞춤 콘텐츠를 추천하여 선택하는 과정을 최소화해주고 쉽게 추천 알고리즘을 수정할 수 있는 OTT 서비스입니다."
                  profileImage={JoYihyeon}
                  profileName="조이현"
                  profileEng="Jo Yihyeon"
                  profileMail="j2hyun980@naver.com"
                  path="/2022/project/dc/:Yihyeon"
                />
                <FeaturesItem
                  src={changhyun}
                  name={"지창현"}
                  description="HISMING"
                  header={changhyunHeader}
                  featureName="HISMING"
                  featureDescription="히스밍은 자신을 가꾸고 관리하는 그루밍족을 위한 뷰티 가이드 서비스입니다. 매년 남성의 뷰티 관심도가 증가함에 따라,  남성 화장품 시장 또한 꾸준히 성장 중입니다. 히스밍은 남성 뷰티의 진입장벽을 낮추고 다양한 고민들을 해결할 수 있습니다. 그루밍족 대표 족장 ‘히스’에게 뷰티에 대한 모든 것을 전수받아 새로운 족장에 도전해 보세요."
                  profileImage={JiChanghyun}
                  profileName="지창현"
                  profileEng="Ji Changhyun"
                  profileMail="jchyundesign@gmail.com"
                  path="/2022/project/dc/:Changhyun"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Features;
