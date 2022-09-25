import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import ProjectDcontents from "./pages/Project/ProjectDcontents";
import ProjectMcontents from "./pages/Project/ProjectMcontents";
import ProjectVcontents from "./pages/Project/ProjectVcontents";
import Project from "./pages/Project/Project";
import About from "./pages/About";
import Designer from "./pages/Designer";
// import DesignerProfile from "./pages/DesignerProfile";
import FeaturesPresentation from "./components/Features/FeaturesPresentation";
import FeaturesDCS from "./components/Features/FeaturesDCS";
import FeaturesDCR from "./components/Features/FeaturesDCR";
import FeaturesMMS from "./components/Features/FeaturesMMS";
import FeaturesMMR from "./components/Features/FeaturesMMR";
import FeaturesVIS from "./components/Features/FeaturesVIS";
import FeatruesVIR from "./components/Features/FeaturesVIR";

import DesignerProfileArteleva from "../src/pages/Profile/DesignerProfileArteleva";
import DesignerProfileBoeun from "../src/pages/Profile/DesignerProfileBoeun";
import DesignerProfileBohyun from "../src/pages/Profile/DesignerProfileBohyun";
import DesignerProfileByeongjun from "../src/pages/Profile/DesignerProfileByeongjun";
import DesignerProfileChanghyun from "../src/pages/Profile/DesignerProfileChanghyun";
import DesignerProfileChohee from "../src/pages/Profile/DesignerProfileChohee";
import DesignerProfileDohyun from "../src/pages/Profile/DesignerProfileDohyun";
import DesignerProfileDoyeon from "../src/pages/Profile/DesignerProfileDoyeon";
import DesignerProfileEunkyo from "../src/pages/Profile/DesignerProfileEunkyo";
import DesignerProfileEunsu from "../src/pages/Profile/DesignerProfileEunsu";
import DesignerProfileHanbin from "../src/pages/Profile/DesignerProfileHanbin";
import DesignerProfileHyejin from "../src/pages/Profile/DesignerProfileHyejin";
import DesignerProfileHyeonwoo from "../src/pages/Profile/DesignerProfileHyeonwoo";
import DesignerProfileHyobin from "../src/pages/Profile/DesignerProfileHyobin";
import DesignerProfileHyunsoo from "../src/pages/Profile/DesignerProfileHyunsoo";
import DesignerProfileJaehee from "../src/pages/Profile/DesignerProfileJaehee";
import DesignerProfileJaehoon from "../src/pages/Profile/DesignerProfileJaehoon";
import DesignerProfileJaeseok from "../src/pages/Profile/DesignerProfileJaeseok";
import DesignerProfileJeonghun from "../src/pages/Profile/DesignerProfileJeonghun";
import DesignerProfileJinho from "../src/pages/Profile/DesignerProfileJinho";
import DesignerProfileJiyeon from "../src/pages/Profile/DesignerProfileJiyeon";
import DesignerProfileJueon from "../src/pages/Profile/DesignerProfileJueon";
import DesignerProfileJuhyun from "../src/pages/Profile/DesignerProfileJuhyun";
import DesignerProfileJun from "../src/pages/Profile/DesignerProfileJun";
import DesignerProfileKangSumin from "../src/pages/Profile/DesignerProfileKangSumin";
import DesignerProfileKangwon from "../src/pages/Profile/DesignerProfileKangwon";
import DesignerProfileKiseong from "../src/pages/Profile/DesignerProfileKiseong";
import DesignerProfileMingyu from "../src/pages/Profile/DesignerProfileMingyu";
import DesignerProfileMinju from "../src/pages/Profile/DesignerProfileMinju";
import DesignerProfileMoonju from "../src/pages/Profile/DesignerProfileMoonju";
import DesignerProfileNayoung from "../src/pages/Profile/DesignerProfileNayoung";
import DesignerProfileParkSumin from "../src/pages/Profile/DesignerProfileParkSumin";
import DesignerProfileSeongho from "../src/pages/Profile/DesignerProfileSeongho";
import DesignerProfileSeongjin from "../src/pages/Profile/DesignerProfileSeongjin";
import DesignerProfileSeongrae from "../src/pages/Profile/DesignerProfileSeongrae";
import DesignerProfileSeoyeon from "../src/pages/Profile/DesignerProfileSeoyeon";
import DesignerProfileSieun from "../src/pages/Profile/DesignerProfileSieun";
import DesignerProfileSoeun from "../src/pages/Profile/DesignerProfileSoeun";
import DesignerProfileSunghee from "../src/pages/Profile/DesignerProfileSunghee";
import DesignerProfileSuyoung from "../src/pages/Profile/DesignerProfileSuyoung";
import DesignerProfileYeawon from "../src/pages/Profile/DesignerProfileYeawon";
import DesignerProfileYeonhui from "../src/pages/Profile/DesignerProfileYeonhui";
import DesignerProfileYihyeon from "../src/pages/Profile/DesignerProfileYihyeon";
import DesignerProfileYosep from "../src/pages/Profile/DesignerProfileYosep";
import DesignerProfileYoungmin from "../src/pages/Profile/DesignerProfileYoungmin";
import DesignerProfileYujin from "../src/pages/Profile/DesignerProfileYujin";
import DesignerProfileYunseok from "../src/pages/Profile/DesignerProfileYunseok";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/project/dc" element={<ProjectDcontents />} />
          <Route path="/project/mm" element={<ProjectMcontents />} />
          <Route path="/project/vi" element={<ProjectVcontents />} /> */}
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/designer" element={<Designer />} />
          {/* <Route path="/designer/:id" element={<DesignerProfile />} /> */}
          <Route path="/project/dc/studio" element={<FeaturesDCS />} />
          <Route path="/project/dc/research" element={<FeaturesDCR />} />
          <Route path="/project/mm/studio" element={<FeaturesMMS />} />
          <Route path="/project/mm/research" element={<FeaturesMMR />} />
          <Route path="/project/vi/studio" element={<FeaturesVIS />} />
          <Route path="/project/vi/research" element={<FeatruesVIR />} />
          <Route
            path="/project/dc/studio/:id"
            element={<FeaturesPresentation />}
          />
          <Route
            path="/project/dc/research/:id"
            element={<FeaturesPresentation />}
          />
          <Route
            path="/project/vi/studio/:id"
            element={<FeaturesPresentation />}
          />
          <Route
            path="/project/vi/research/:id"
            element={<FeaturesPresentation />}
          />
          <Route path="/project/mm/:id" element={<FeaturesPresentation />} />
          <Route
            path="/designer/KangSumin"
            element={<DesignerProfileKangSumin />}
          />
          <Route
            path="/designer/KangJueon"
            element={<DesignerProfileJueon />}
          />
          <Route path="/designer/Hyobin" element={<DesignerProfileHyobin />} />
          <Route
            path="/designer/Yunseok"
            element={<DesignerProfileYunseok />}
          />
          <Route path="/designer/Hyejin" element={<DesignerProfileHyejin />} />
          <Route path="/designer/Kiseon" element={<DesignerProfileKiseong />} />
          <Route
            path="/designer/Nayoung"
            element={<DesignerProfileNayoung />}
          />
          <Route path="/designer/Moonju" element={<DesignerProfileMoonju />} />
          <Route
            path="/designer/Byeongjun"
            element={<DesignerProfileByeongjun />}
          />
          <Route path="/designer/Sieun" element={<DesignerProfileSieun />} />
          <Route path="/designer/Yeawon" element={<DesignerProfileYeawon />} />
          <Route path="/designer/Chohee" element={<DesignerProfileChohee />} />
          <Route
            path="/designer/Hyunsoo"
            element={<DesignerProfileHyunsoo />}
          />
          <Route
            path="/designer/Yeonhui"
            element={<DesignerProfileYeonhui />}
          />
          <Route path="/designer/Jun" element={<DesignerProfileJun />} />
          <Route
            path="/designer/Sunghee"
            element={<DesignerProfileSunghee />}
          />
          <Route path="/designer/Mingyu" element={<DesignerProfileMingyu />} />
          <Route
            path="/designer/Seongho"
            element={<DesignerProfileSeongho />}
          />
          <Route
            path="/designer/ParkSumin"
            element={<DesignerProfileParkSumin />}
          />
          <Route path="/designer/Eunsu" element={<DesignerProfileEunsu />} />
          <Route
            path="/designer/Jeonghun"
            element={<DesignerProfileJeonghun />}
          />
          <Route
            path="/designer/Jaehoon"
            element={<DesignerProfileJaehoon />}
          />
          <Route path="/designer/Soeun" element={<DesignerProfileSoeun />} />
          <Route path="/designer/Boeun" element={<DesignerProfileBoeun />} />
          <Route path="/designer/Bohyeon" element={<DesignerProfileBohyun />} />
          <Route
            path="/designer/Arteleva"
            element={<DesignerProfileArteleva />}
          />
          <Route path="/designer/Doyeon" element={<DesignerProfileDoyeon />} />
          <Route path="/designer/Jiyeon" element={<DesignerProfileJiyeon />} />
          <Route path="/designer/Dohyeon" element={<DesignerProfileDohyun />} />
          <Route path="/designer/Minju" element={<DesignerProfileMinju />} />
          <Route
            path="/designer/Seoyeon"
            element={<DesignerProfileSeoyeon />}
          />
          <Route
            path="/designer/Youngmin"
            element={<DesignerProfileYoungmin />}
          />
          <Route path="/designer/Jaehee" element={<DesignerProfileJaehee />} />
          <Route path="/designer/Jinho" element={<DesignerProfileJinho />} />
          <Route path="/designer/Hanbin" element={<DesignerProfileHanbin />} />
          <Route
            path="/designer/Hyeonwoo"
            element={<DesignerProfileHyeonwoo />}
          />
          <Route
            path="/designer/Suyoung"
            element={<DesignerProfileSuyoung />}
          />
          <Route path="/designer/Eunkyo" element={<DesignerProfileEunkyo />} />
          <Route
            path="/designer/Jaeseok"
            element={<DesignerProfileJaeseok />}
          />
          <Route
            path="/designer/Seongjin"
            element={<DesignerProfileSeongjin />}
          />
          <Route path="/designer/Juhyun" element={<DesignerProfileJuhyun />} />
          <Route
            path="/designer/Seongrae"
            element={<DesignerProfileSeongrae />}
          />
          <Route
            path="/designer/Yihyeon"
            element={<DesignerProfileYihyeon />}
          />
          <Route
            path="/designer/Kiseong"
            element={<DesignerProfileKiseong />}
          />
          <Route
            path="/designer/Kangwon"
            element={<DesignerProfileKangwon />}
          />
          <Route
            path="/designer/Changhyun"
            element={<DesignerProfileChanghyun />}
          />
          <Route path="/designer/Yosep" element={<DesignerProfileYosep />} />
          <Route path="/designer/Yujin" element={<DesignerProfileYujin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
