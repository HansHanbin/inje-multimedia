import React from "react";
import { Link } from "react-router-dom";
import "./Features.scss";
import imageDcs from "../../works/imageDcs";

import Footer from "../../components/Footer";
import FeaturesItem from "./FeaturesItem";
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
              <Link to="/project/dc/studio">
                <div className="major-dc active">Digital Contents</div>
                <div className="major-mobile active">D.C</div>
              </Link>
              <div>|</div>
              <Link to="/project/vi/studio">
                <div className="major-vi">Visual Information Design</div>
                <div className="major-mobile">V.I</div>
              </Link>
              <div>|</div>
              <Link to="/project/mm/studio">
                <div className="major-mm">Motion Media</div>
                <div className="major-mobile">M.M</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="project-class">
          <div className="class-wrapper">
            <div className="class-studio class class-active">
              <Link to="/project/dc/studio">디지털콘텐츠스튜디오</Link>
            </div>

            <div className="class-research class">
              <Link to="/project/dc/research">DC졸업연구</Link>
            </div>
          </div>
        </div>
        <div className="features-studio features-active">
          <div className="features-container">
            <div className="features-wrapper">
              <ul className="features-items">
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/18_studio_thumbnail.png`}
                  name={"지창현"}
                  description="HISMING"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/18_studio_header.png`}
                  featureName="HISMING"
                  featureDescription="히스밍은 자신을 가꾸고 관리하는 그루밍족을 위한 뷰티 가이드 서비스입니다. 매년 남성의 뷰티 관심도가 증가함에 따라,  남성 화장품 시장 또한 꾸준히 성장 중입니다. 히스밍은 남성 뷰티의 진입장벽을 낮추고 다양한 고민들을 해결할 수 있습니다. 그루밍족 대표 족장 ‘히스’에게 뷰티에 대한 모든 것을 전수받아 새로운 족장에 도전해 보세요."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC17.gif`}
                  profileName="지창현"
                  profileEng="Ji Changhyun"
                  profileMail="jchyundesign@gmail.com"
                  path="/project/dc/studio/:Changhyun"
                  work0={imageDcs.CHANGHYUN.work0}
                  work1={imageDcs.CHANGHYUN.work1}
                  work2={imageDcs.CHANGHYUN.work2}
                  work3={imageDcs.CHANGHYUN.work3}
                  work4={imageDcs.CHANGHYUN.work4}
                  work5={imageDcs.CHANGHYUN.work5}
                  lightMode={imageDcs.CHANGHYUN.lightMode}
                  darkMode={imageDcs.CHANGHYUN.darkMode}
                  link={
                    "https://cloud.protopie.io/p/447a7625ce?touchHint=true&ui=true&scaleToFit=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&playSpeed=1&playerAppPopup=true"
                  }
                  workVideo="https://www.youtube.com/embed/qXHlphxQQTo"
                  protopieVideo="https://www.youtube.com/embed/jmMlEZI8XPE"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/me_studio_thumbnail.png`}
                  name={"이한빈"}
                  description={"NEXITY"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/me_studio_header.png`}
                  featureName="NEXITY"
                  featureDescription="기후가 변하고 해수면이 상승, 지구의 온도가 지속적으로 높아지고 있는 현 시대에 다음 세대를 위한 준비와 고민은 불가피 합니다. NEXITY의 궁극적인 목표는 다음 세대를 위해 은하계 어딘가에 있을 또 다른 생명을 유지할 수 있는 행성을 찾고 이를 지구화 하는 것입니다. 무인 함선 시스템 SUNDAY는 우리의 임무를 보다 정확하고 효율적으로 도울 것 입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC12.gif`}
                  profileName="이한빈"
                  profileEng="Lee Hanbin"
                  profileMail="hans.hanbin.lee@gmail.com"
                  path="/project/dc/studio/:Hanbin"
                  work0={imageDcs.HANBIN.work0}
                  work1={imageDcs.HANBIN.work1}
                  lightMode={imageDcs.HANBIN.lightMode}
                  darkMode={imageDcs.HANBIN.darkMode}
                  link="https://cloud.protopie.io/p/cd4bdcb184"
                  workVideo="https://www.youtube.com/embed/OIVc79HMrIY"
                  protopieVideo="https://www.youtube.com/embed/KVXfLUno5kQ"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/5_studio_thumbnail.png`}
                  name={"김시은"}
                  description={"Pill-Me"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/5_studio_header.png`}
                  featureName="Pill-Me"
                  featureDescription="우리는 어른이나 아이 할 것 없이 매우 제한적인 형태의 알약을 먹습니다. 같은 약이지만 약효는 사람마다 다르고 부작용을 일으키기도 하죠. 3D프린터 기술은 이 문제를 해결하기 위해 개인 맞춤형 알약 조제를 목표로 하고 있습니다. Pill-Me은 이 기술이 활용될 미래에 도래했을 때, 대중들이 쉽게 사용할 수 있는 서비스를 제공합니다. "
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC5.gif`}
                  profileName="김시은"
                  profileEng="Kim Sieun"
                  profileMail="kns9559sn@gmail.com"
                  path="/project/dc/studio/:Sieun"
                  work0={imageDcs.SIEUN.work0}
                  work1={imageDcs.SIEUN.work1}
                  work2={imageDcs.SIEUN.work2}
                  work3={imageDcs.SIEUN.work3}
                  work4={imageDcs.SIEUN.work4}
                  work5={imageDcs.SIEUN.work5}
                  work6={imageDcs.SIEUN.work6}
                  work7={imageDcs.SIEUN.work7}
                  work8={imageDcs.SIEUN.work8}
                  work9={imageDcs.SIEUN.work9}
                  work10={imageDcs.SIEUN.work10}
                  work11={imageDcs.SIEUN.work11}
                  lightMode={imageDcs.SIEUN.lightMode}
                  darkMode={imageDcs.SIEUN.darkMode}
                  link="https://cloud.protopie.io/p/7f109309ef "
                  workVideo="https://www.youtube.com/embed/dAhx4nQqcMQ"
                  protopieVideo="https://www.youtube.com/embed/u6kRG-CbbzQ"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/15_studio_thumbnail.png`}
                  name={"정주현"}
                  description={"Moonshot"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/15_studio_header.png`}
                  featureName="Moonshot(문샷)"
                  featureDescription="‘생생하게 꿈꾸면 이루어진다.’ 하지만 이뤄본 적도 없는 꿈을 어떻게 생생하게 꿀 수 있을까요? 문샷에서는 현재 나의 꿈과 목표를 이뤄낸 미래 모습 아바타를 만날 수 있습니다. 미루고 싶은 오늘의 과제도 성공한 미래의 내 모습이 권유한다면 마냥 무시할 수는 없겠죠. 문샷 아바타와 함께 생생한 미래를 꿈꿔보세요."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC14.gif`}
                  profileName="정주현"
                  profileEng="Jung Juhyun"
                  profileMail="qwert911262@gmail.com"
                  path="/project/dc/studio/:Juhyun"
                  work0={imageDcs.JUHYUN.work0}
                  work1={imageDcs.JUHYUN.work1}
                  lightMode={imageDcs.JUHYUN.lightMode}
                  darkMode={imageDcs.JUHYUN.darkMode}
                  link="https://cloud.protopie.io/p/a0667d47db"
                  workVideo="https://www.youtube.com/embed/btdR06WBLCQ"
                  protopieVideo="https://www.youtube.com/embed/TxDqK5z9h5s"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/1_studio_thumbnail.png`}
                  name={"구혜진"}
                  description={"MARITY"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/1_studio_header.png`}
                  featureName="MARITY"
                  featureDescription="해수면의 상승으로 삶의 터전을 잃은 우리는 현재 해상 도시에 거주 중입니다. 한정된 자원 속에서 살아남기 위해 선택한 자급자족의 삶, 우리는 고도화된 인공지능을 활용해 해상 도시의 더 나은 미래를 만들어가려고 합니다. 머지않아 만나게 될 자급자족 뉴노멀 시대! 마리티와 함께 미리 만나 보아요! "
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC1.gif`}
                  profileName="구혜진"
                  profileEng="Gu Hyejin"
                  profileMail="fpqlt_326998@naver.com"
                  path="/project/dc/studio/:Hyejin"
                  work0={imageDcs.HYEJIN.work0}
                  work1={imageDcs.HYEJIN.work1}
                  work2={imageDcs.HYEJIN.work2}
                  work3={imageDcs.HYEJIN.work3}
                  work4={imageDcs.HYEJIN.work4}
                  work5={imageDcs.HYEJIN.work5}
                  work6={imageDcs.HYEJIN.work6}
                  work7={imageDcs.HYEJIN.work7}
                  work8={imageDcs.HYEJIN.work8}
                  work9={imageDcs.HYEJIN.work9}
                  work10={imageDcs.HYEJIN.work10}
                  work11={imageDcs.HYEJIN.work11}
                  work12={imageDcs.HYEJIN.work12}
                  work13={imageDcs.HYEJIN.work13}
                  work14={imageDcs.HYEJIN.work14}
                  work15={imageDcs.HYEJIN.work15}
                  work16={imageDcs.HYEJIN.work16}
                  work17={imageDcs.HYEJIN.work17}
                  work18={imageDcs.HYEJIN.work18}
                  work19={imageDcs.HYEJIN.work19}
                  work20={imageDcs.HYEJIN.work20}
                  work21={imageDcs.HYEJIN.work21}
                  work22={imageDcs.HYEJIN.work22}
                  work23={imageDcs.HYEJIN.work23}
                  work24={imageDcs.HYEJIN.work24}
                  work25={imageDcs.HYEJIN.work25}
                  work26={imageDcs.HYEJIN.work26}
                  work27={imageDcs.HYEJIN.work27}
                  lightMode={imageDcs.HYEJIN.lightMode}
                  darkMode={imageDcs.HYEJIN.darkMode}
                  link="https://cloud.protopie.io/p/434db47ec1"
                  workVideo="https://www.youtube.com/embed/4Kk_j-Va6Ts"
                  protopieVideo="https://www.youtube.com/embed/zO7n7g3z1r4"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/6_studio_thumbnail.png`}
                  name="박민규"
                  description="소담"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/6_studio_header.png`}
                  featureName="소담"
                  featureDescription="사춘기 혹은 성인이 되고서 가족 간의 소통이 점점 없어지는 가정이 늘어나고 있으며 그로 인해 가족이지만 불편함을 느끼거나 같은 공간에 있으면 어색함을 느끼는 사람도 증가하고 있습니다. 소담은 이러한 문제점을 해결하는 데 도움을 주는 애플리케이션이며 가족 간의 소통 개선을 목적으로 프로젝트를 시작하게 되었습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC6.gif`}
                  profileName="박민규"
                  profileEng={"Park Mingyu"}
                  profileMail="parkmin9yu@naver.com"
                  path="/project/dc/studio/:Mingyu"
                  work0={imageDcs.MINGYU.work0}
                  work1={imageDcs.MINGYU.work1}
                  work2={imageDcs.MINGYU.work2}
                  work3={imageDcs.MINGYU.work3}
                  work4={imageDcs.MINGYU.work4}
                  work5={imageDcs.MINGYU.work5}
                  work6={imageDcs.MINGYU.work6}
                  work7={imageDcs.MINGYU.work7}
                  work8={imageDcs.MINGYU.work8}
                  work9={imageDcs.MINGYU.work9}
                  work10={imageDcs.MINGYU.work10}
                  work11={imageDcs.MINGYU.work11}
                  work12={imageDcs.MINGYU.work12}
                  work13={imageDcs.MINGYU.work13}
                  work14={imageDcs.MINGYU.work14}
                  work15={imageDcs.MINGYU.work15}
                  work16={imageDcs.MINGYU.work16}
                  work17={imageDcs.MINGYU.work17}
                  lightMode={imageDcs.MINGYU.lightMode}
                  darkMode={imageDcs.MINGYU.darkMode}
                  link="https://cloud.protopie.io/p/8ad84e1d51"
                  workVideo="https://www.youtube.com/embed/zpK-4o1LtGM"
                  protopieVideo="https://www.youtube.com/embed/e06_a_WuFN8"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/2_studio_thumbnail.png`}
                  name="김기성"
                  description="PLANET"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/2_studio_header.png`}
                  featureName="PLANET"
                  featureDescription="첫 출시 당시엔 낯설게 다가왔던 스마트폰이 어느새 우리 생활 속에서 일상이 되었듯이, 가까운 시기에 메타버스가 새로운 일상이 될 것이며, 그 속에서 많은 시간을 보내게 될 것입니다. 사람들의 관심사와 콘텐츠 체류 시간에 따라 주목받는 소셜앱은 변화하고 진화해왔습니다. 메타버스 시대의 소셜앱은 어떤 기능이 필요하고 어떤 모습일까요?"
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC2.gif`}
                  profileName="김기성"
                  profileEng="Kim Kiseong"
                  profileMail="kimkiseong98@gmail.com"
                  path="/project/dc/studio/:Kiseong"
                  work0={imageDcs.KISEONG.work0}
                  work1={imageDcs.KISEONG.work1}
                  work2={imageDcs.KISEONG.work2}
                  work3={imageDcs.KISEONG.work3}
                  work4={imageDcs.KISEONG.work4}
                  work5={imageDcs.KISEONG.work5}
                  work6={imageDcs.KISEONG.work6}
                  work7={imageDcs.KISEONG.work7}
                  work8={imageDcs.KISEONG.work8}
                  work9={imageDcs.KISEONG.work9}
                  work10={imageDcs.KISEONG.work10}
                  work11={imageDcs.KISEONG.work11}
                  work12={imageDcs.KISEONG.work12}
                  work13={imageDcs.KISEONG.work13}
                  work14={imageDcs.KISEONG.work14}
                  work15={imageDcs.KISEONG.work15}
                  work16={imageDcs.KISEONG.work16}
                  work17={imageDcs.KISEONG.work17}
                  work18={imageDcs.KISEONG.work18}
                  work19={imageDcs.KISEONG.work19}
                  lightMode={imageDcs.KISEONG.lightMode}
                  darkMode={imageDcs.KISEONG.darkMode}
                  link="https://cloud.protopie.io/p/554c122585"
                  workVideo="https://www.youtube.com/embed/LwJJYbap774"
                  protopieVideo="https://www.youtube.com/embed/Ujb9hjFPLLA"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/10_studio_thumbnail.png`}
                  name={"이도현"}
                  description="AWAVE"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/10_studio_header.png`}
                  featureName="AWAVE"
                  featureDescription="사람들은 살면서 집중해야 하는 상황에 자주 놓이게 됩니다. 이러한 상황에서 효율을 높이고 싶지만 어떻게 해야 할지 모르는 사람들을 위해서 서비스를 기획하였습니다. AWAVE는 뇌파를 이용하는 BCI 기술과 가전을 제어하는 IoT 기술을 이용하여 실내 환경을 조절하여 사용자가 최상의 집중력을 낼 수 있도록 돕는 서비스입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC9.gif`}
                  profileName="이도현"
                  profileEng="Lee Dohyeon"
                  profileMail="hyeonn323@gmail.com"
                  path="/project/dc/studio/:Dohyeon"
                  work0={imageDcs.DH.work0}
                  work1={imageDcs.DH.work1}
                  work2={imageDcs.DH.work2}
                  work3={imageDcs.DH.work3}
                  work4={imageDcs.DH.work4}
                  work5={imageDcs.DH.work5}
                  work6={imageDcs.DH.work6}
                  work7={imageDcs.DH.work7}
                  work8={imageDcs.DH.work8}
                  work9={imageDcs.DH.work9}
                  work10={imageDcs.DH.work10}
                  work11={imageDcs.DH.work11}
                  work12={imageDcs.DH.work12}
                  work13={imageDcs.DH.work13}
                  work14={imageDcs.DH.work14}
                  work15={imageDcs.DH.work15}
                  work16={imageDcs.DH.work16}
                  work17={imageDcs.DH.work17}
                  lightMode={imageDcs.DH.lightMode}
                  darkMode={imageDcs.DH.darkMode}
                  link="https://cloud.protopie.io/p/942ad953a1"
                  workVideo="https://www.youtube.com/embed/xLDl0rAxxpA"
                  protopieVideo="https://www.youtube.com/embed/422Vo9axvSg"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/3_studio_thumbnail.png`}
                  name={"김나영"}
                  description="SPACE JANITOR"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/3_studio_header.png`}
                  featureName="SPACE JANITOR"
                  featureDescription="우주쓰레기를 처리하도록 도와주는 미래(2100년대) 우주쓰레기 수거 서비스로 우주쓰레기의 끝없는 증가로 발생하는 미래의 문제를 해결하기 위해 만들었습니다. 사용자는 우주선 조종 자격증 취득 인증 후 서비스 이용이 가능하며 우주선과 SPACE JANITOR의 태블릿을 연동하여 사용한다는 가정을 통해 서비스를 제작하였습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC3.gif`}
                  profileName={"김나영"}
                  profileEng={"Kim Nayoung"}
                  profileMail="sdf02033@gmail.com"
                  path="/project/dc/studio/:Nayoung"
                  work0={imageDcs.NAYOUNG.work0}
                  work1={imageDcs.NAYOUNG.work1}
                  work2={imageDcs.NAYOUNG.work2}
                  work3={imageDcs.NAYOUNG.work3}
                  work4={imageDcs.NAYOUNG.work4}
                  work5={imageDcs.NAYOUNG.work5}
                  work6={imageDcs.NAYOUNG.work6}
                  work7={imageDcs.NAYOUNG.work7}
                  work8={imageDcs.NAYOUNG.work8}
                  work9={imageDcs.NAYOUNG.work9}
                  work10={imageDcs.NAYOUNG.work10}
                  work11={imageDcs.NAYOUNG.work11}
                  work12={imageDcs.NAYOUNG.work12}
                  work13={imageDcs.NAYOUNG.work13}
                  work14={imageDcs.NAYOUNG.work14}
                  lightMode={imageDcs.NAYOUNG.lightMode}
                  darkMode={imageDcs.NAYOUNG.darkMode}
                  link="https://cloud.protopie.io/p/d490213dae"
                  workVideo="https://www.youtube.com/embed/fHpS1nphov8"
                  protopieVideo="https://www.youtube.com/embed/ATaM1WEAtqs"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/12_studio_thumbnail.png`}
                  name={"이영민"}
                  description={"HOMETUDY"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/12_studio_header.png`}
                  featureName="HOMETUDY"
                  featureDescription="'홈 스쿨링' 과 ‘그룹 스터디' 를 통해 학습에 대한 동기부여를 제공하여 본인 스스로 학습에 흥미를 느낄 수 있도록 하며, ‘게이미피케이션‘ 요소를 추가하여 애플리케이션 사용 시 흥미와 관심도를 높이고, 동기부여와 자발적 참여 의지를 극대화하여 스스로에게 원동력이 생기게 지원해주는 애플리케이션입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC11.gif`}
                  profileName="이영민"
                  profileEng="Lee Youngmin"
                  profileMail="rjscl343@naver.com"
                  path="/project/dc/studio/:Youngmin"
                  work0={imageDcs.YM.work0}
                  work1={imageDcs.YM.work1}
                  work2={imageDcs.YM.work2}
                  work3={imageDcs.YM.work3}
                  work4={imageDcs.YM.work4}
                  work5={imageDcs.YM.work5}
                  work6={imageDcs.YM.work6}
                  work7={imageDcs.YM.work7}
                  work8={imageDcs.YM.work8}
                  work9={imageDcs.YM.work9}
                  work10={imageDcs.YM.work10}
                  work11={imageDcs.YM.work11}
                  work12={imageDcs.YM.work12}
                  work13={imageDcs.YM.work13}
                  work14={imageDcs.YM.work14}
                  lightMode={imageDcs.YM.lightMode}
                  darkMode={imageDcs.YM.darkMode}
                  link="https://cloud.protopie.io/p/c76cb5bcde"
                  workVideo="https://www.youtube.com/embed/i87bnW_G6l0"
                  protopieVideo="https://www.youtube.com/embed/Iu0OxxyW3Ts"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/00_studio_thumbnail.png`}
                  name={"박성호"}
                  description={"혼플"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/00_studio_header.png`}
                  featureName={"혼플"}
                  featureDescription="혼자만의 삶을 즐기는 1인 가구가 계속 늘어나고 있는 현재 1인 가구를 위한 편의시설 상품, 서비스들이 다양하게 늘어나고 있어 성향과 선호도에 맞게 빠른 여행 일정을 세워주고 혼자 여행을 즐기면서도 나와 비슷한 취향과 선호도를 가진 사람들을 분석해 동행할 수 있는 매칭 서비스도 함께 제공하는 여행 플랜 서비스 앱 입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI6.gif`}
                  profileName="박성호"
                  profileEng="Park Seongho"
                  profileMail="atree3682@daum.net"
                  path="/project/dc/studio/:Seongho"
                  work0={imageDcs.SH.work0}
                  work1={imageDcs.SH.work1}
                  lightMode={imageDcs.SH.lightMode}
                  darkMode={imageDcs.SH.darkMode}
                  link="https://cloud.protopie.io/p/3c1949d257"
                  workVideo="https://www.youtube.com/embed/KaTumK1YRkg"
                  protopieVideo="https://www.youtube.com/embed/_hovr0H1yZg"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/14_studio_thumbnail.png`}
                  name={"장은교"}
                  description="WON:D"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/14_studio_header.png`}
                  featureName="WON:D"
                  featureDescription="비가 와 우중충한 상태를 좋아하는 사람, 천둥번개를 즐기는 사람, 구름 한 점 없는 쨍쨍한 햇빛을 좋아하는 사람 등 선호하는 기상 상태는 모두 다릅니다. 내가 가장 좋아하는 기상을 언제든 즐길 수 있는 방법은 없을까요? 그런 당신을 위한 기상상태 조절을 통한 여가 활동 서비스 WON:D와 함께라면 할 수 있습니다! "
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC13.gif`}
                  profileName="장은교"
                  profileEng="Jang Eunkyo"
                  profileMail="429650@gmail.com"
                  path="/project/dc/studio/:Eunkyo"
                  work0={imageDcs.EUNKYO.work0}
                  work1={imageDcs.EUNKYO.work1}
                  work2={imageDcs.EUNKYO.work2}
                  lightMode={imageDcs.EUNKYO.lightMode}
                  darkMode={imageDcs.EUNKYO.darkMode}
                  link="https://cloud.protopie.io/p/ed7365d26a"
                  workVideo="https://www.youtube.com/embed/-bHpNfaN8Lk"
                  protopieVideo="https://www.youtube.com/embed/PZUF2xgL7wA"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/8_studio_thumbnail.png`}
                  name={"서보현"}
                  description="Derong"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/8_studio_header.png`}
                  featureName="Derong"
                  featureDescription="데롱은 복잡한 오해를 심해라고 빗대어 표현하였습니다. 자신의 정보를 등록하여 나만의 심해 즉 데롱을 제작합니다. 이는 심해 속에 해파리가 있는 모습으로 제작이 되며 친구들의 데롱의 모습과 정보 또한 알 수 있습니다. 친구들과의 대화와 질문을 통해 서로를 알아가고 오해를 해결할 수 있도록 도와주는 서비스입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC7.gif`}
                  profileName="서보현"
                  profileEng="Seo Bohyeon"
                  profileMail="seobori2000@gmail.com"
                  path="/project/dc/studio/:Bohyeon"
                  work0={imageDcs.BH.work0}
                  work2={imageDcs.BH.work2}
                  lightMode={imageDcs.BH.lightMode}
                  darkMode={imageDcs.BH.darkMode}
                  link="https://cloud.protopie.io/p/d8e2d0fefa"
                  workVideo="https://www.youtube.com/embed/fAthydPOyWo"
                  protopieVideo="https://www.youtube.com/embed/0Pxnv7JIjD8"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/16_studio_thumbnail.png`}
                  name={"조성래"}
                  description={"OE WORLD"}
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/16_studio_header.png`}
                  featureName="OE WORLD"
                  featureDescription="비용, 팬데믹 등으로 인해 해외로 나가기 힘든 요즘 집에서도 해외여행을 즐길 수 있다? 여행 또는 해외출장을 위한 사전답사 및 비용에 대한 예산관리를 진행 OE WORLD의 메인 키워드는 ‘경험’이며 증강현실을 활용한 콘텐츠를 가상현실에서 즐길 수 있도록 준비했습니다. 이제 집에서 다른 나라의 문화, 쇼핑, 분위기 등을 경험하세요"
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC15.gif`}
                  profileName="조성래"
                  profileEng="Cho Seongrae"
                  profileMail="srj9704@naver.com"
                  path="/project/dc/studio/:Seongrae"
                  work0={imageDcs.SR.work0}
                  work1={imageDcs.SR.work1}
                  work2={imageDcs.SR.work2}
                  work3={imageDcs.SR.work3}
                  work4={imageDcs.SR.work4}
                  work5={imageDcs.SR.work5}
                  work6={imageDcs.SR.work6}
                  work7={imageDcs.SR.work7}
                  work8={imageDcs.SR.work8}
                  work9={imageDcs.SR.work9}
                  work10={imageDcs.SR.work10}
                  work11={imageDcs.SR.work11}
                  work12={imageDcs.SR.work12}
                  work13={imageDcs.SR.work13}
                  work14={imageDcs.SR.work14}
                  work15={imageDcs.SR.work15}
                  work16={imageDcs.SR.work16}
                  work17={imageDcs.SR.work17}
                  work18={imageDcs.SR.work18}
                  work19={imageDcs.SR.work19}
                  work20={imageDcs.SR.work20}
                  work21={imageDcs.SR.work21}
                  work22={imageDcs.SR.work22}
                  work23={imageDcs.SR.work23}
                  work24={imageDcs.SR.work24}
                  work25={imageDcs.SR.work25}
                  work26={imageDcs.SR.work26}
                  work27={imageDcs.SR.work27}
                  work28={imageDcs.SR.work28}
                  work29={imageDcs.SR.work29}
                  lightMode={imageDcs.SR.lightMode}
                  darkMode={imageDcs.SR.darkMode}
                  link="https://cloud.protopie.io/p/88604c81c3"
                  workVideo="https://www.youtube.com/embed/5JLMHgpqKl0"
                  protopieVideo="https://www.youtube.com/embed/ut3r227PPHk"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/4_studio_thumbnail.png`}
                  name="김문주"
                  description="Hey, MATE "
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/4_studio_header.png`}
                  featureName="Hey, MATE "
                  featureDescription="여러분은 소중한 사람과 어떻게 지내고 있나요? 헤이메이트는 기숙사 생활을 하면서 방을 같이 쓰는 친구이자 가족 같은 룸메이트와 함께 행복하게 생활하면서 좋은 추억을 쌓을 수 있도록 도와주는 앱입니다. 서로의 시간표를 공유하고 얼굴 보고 직접 하기 힘든 말을 전할 수 있으며 예전 룸메이트와의 소통을 통해 인연을 이어 나갈 수 있습니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC4.gif`}
                  profileName="김문주"
                  profileEng="Kim Moonju"
                  profileMail="m.jju422@gmail.com"
                  path="/project/dc/studio/:Moonju"
                  work0={imageDcs.MOONJU.work0}
                  work1={imageDcs.MOONJU.work1}
                  work2={imageDcs.MOONJU.work2}
                  work3={imageDcs.MOONJU.work3}
                  work4={imageDcs.MOONJU.work4}
                  work5={imageDcs.MOONJU.work5}
                  work6={imageDcs.MOONJU.work6}
                  work7={imageDcs.MOONJU.work7}
                  work8={imageDcs.MOONJU.work8}
                  work9={imageDcs.MOONJU.work9}
                  work10={imageDcs.MOONJU.work10}
                  work11={imageDcs.MOONJU.work11}
                  work12={imageDcs.MOONJU.work12}
                  work13={imageDcs.MOONJU.work13}
                  work14={imageDcs.MOONJU.work14}
                  work15={imageDcs.MOONJU.work15}
                  lightMode={imageDcs.MOONJU.lightMode}
                  darkMode={imageDcs.MOONJU.darkMode}
                  link="https://cloud.protopie.io/p/ebdc43c31d"
                  workVideo="https://www.youtube.com/embed/TlrNnE21BZo"
                  protopieVideo="https://www.youtube.com/embed/lAUZIKtuCeg"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/17_studio_thumbnail.png`}
                  name={"조이현"}
                  description="슬금슬금"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/17_studio_header.png`}
                  featureName="슬금슬금"
                  featureDescription="슬금슬금은 부담 없이 돌아다닐 수 있다는 장점을 가진 '동네'에 집중하여 사용자가 살고 있는 동네 주변의 다양한 핫플들을 소개하고 동네의 다양한 소식들을 사용자들끼리 주고받을 수 있는 앱 서비스입니다. 사용자 자신의 취향에 맞는 다양한 핫플들을 통해 그동안 미처 몰랐었던 동네의 새로운 재미를 찾을 수 있을 것입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC16.gif`}
                  profileName="조이현"
                  profileEng="Jo Yihyeon"
                  profileMail="j2hyun980@naver.com"
                  path="/project/dc/studio/:Yihyeon"
                  work0={imageDcs.IH.work0}
                  work1={imageDcs.IH.work1}
                  work2={imageDcs.IH.work2}
                  work3={imageDcs.IH.work3}
                  work4={imageDcs.IH.work4}
                  work5={imageDcs.IH.work5}
                  work6={imageDcs.IH.work6}
                  work7={imageDcs.IH.work7}
                  work8={imageDcs.IH.work8}
                  lightMode={imageDcs.IH.lightMode}
                  darkMode={imageDcs.IH.darkMode}
                  link="https://cloud.protopie.io/p/ac7da1d6b3"
                  workVideo="https://www.youtube.com/embed/WKW1Y1L0Sls"
                  protopieVideo="https://www.youtube.com/embed/wd8x8LmDvow"
                />
                <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/9_studio_thumbnail.png`}
                  name={"안도연"}
                  description="Assem"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/9_studio_header.png`}
                  featureName="Assem"
                  featureDescription="최근 1인 가구가 주된 가구 형태로 자리매김하면서 다양한 유형의 공유 주거 시설이 나타났습니다. 이에 따라, 공유 주거 시설을 선택하는 사람들이 증가하였습니다. 어셈(Assem)은 하우스메이트들과 일을 분담하고 수행하는 과정에서 소통에 도움을 주고, 공동구매 등 공유 주거 시설에서의 생활이 원활할 수 있도록 도와주는 어플리케이션입니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC8.gif`}
                  profileName="안도연"
                  profileEng="An Doyeon"
                  profileMail="rkornne@gmail.com"
                  path="/project/dc/studio/:Doyeon"
                  work0={imageDcs.DOYEON.work0}
                  work1={imageDcs.DOYEON.work1}
                  work2={imageDcs.DOYEON.work2}
                  work3={imageDcs.DOYEON.work3}
                  work4={imageDcs.DOYEON.work4}
                  work5={imageDcs.DOYEON.work5}
                  work6={imageDcs.DOYEON.work6}
                  work7={imageDcs.DOYEON.work7}
                  lightMode={imageDcs.DOYEON.lightMode}
                  darkMode={imageDcs.DOYEON.darkMode}
                  workVideo="https://www.youtube.com/embed/Bg3fo5wHWaA"
                  protopieVideo="https://www.youtube.com/embed/RIiXRnAAvcM"
                />

                {/* <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/7_studio_thumbnail.png`}
                  name={"백제훈"}
                  description="E.new"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/7_studio_header.png`}
                  featureName="E.new"
                  featureDescription="연애를 하게 되면 보통 권태기라는 기간이 찾아옵니다. 이 기간동안은 서로의 모습이 이유어 없이 짜증이 나거나 많은 연인들이 이 기간에 이별하곤 합니다. 이 앱은 그런 권태기를 여러기능으로 슬기롭게 극복할 수 있도록 도와줍니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/VI/VI백제훈.gif`}
                  profileName="백제훈"
                  profileEng="Baek Jaehoon"
                  profileMail="bjh990225@gmail.com"
                  path="/project/dc/studio/:Jaehoon"
                />
*/}

                {/* <FeaturesItem
                  src={`${process.env.PUBLIC_URL}/assets/features/DC/11_studio_thumbnail.png`}
                  name={"이승연"}
                  description="HAM:MILY"
                  header={`${process.env.PUBLIC_URL}/assets/features/DC/11_studio_header.png`}
                  featureName="HAM:MILY"
                  featureDescription="'HAM:MILY'는 햄스터 전문 펫 케어 서비스를 제공하는 앱입니다. 햄스터에 대한 지식, 육성 정보, 생활 속 서비스 등을 보입니다. '하루 기록'을 통해 상태와 일기를 남길 수 있어, 하루 기록 데이터를 바탕으로 IA가 주기적으로 분석하여 맞춤형 컨디션, 청결도 등을 포함한 건강 상태 정보를 제공합니다."
                  profileImage={`${process.env.PUBLIC_URL}/assets/images/ProfileImage/DC/DC10.gif`}
                  profileName="이승연"
                  profileEng="Lee Seoungyeon"
                  profileMail="lee40095617@gmail.com"
                  path="/project/dc/studio/:Seungyeon"
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
