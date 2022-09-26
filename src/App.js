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
          <Route path="/2022" element={<Home />} />
          <Route path="/2022" element={<Home />} />
          {/* <Route path="/2022/project/dc" element={<ProjectDcontents />} />
          <Route path="/2022/project/mm" element={<ProjectMcontents />} />
          <Route path="/2022/project/vi" element={<ProjectVcontents />} /> */}
          <Route path="/2022/project" element={<Project />} />
          <Route path="/2022/about" element={<About />} />
          <Route path="/2022/designer" element={<Designer />} />
          {/* <Route path="/2022/designer/:id" element={<DesignerProfile />} /> */}
          <Route path="/2022/project/dc/studio" element={<FeaturesDCS />} />
          <Route path="/2022/project/dc/research" element={<FeaturesDCR />} />
          <Route path="/2022/project/mm/studio" element={<FeaturesMMS />} />
          <Route path="/2022/project/mm/research" element={<FeaturesMMR />} />
          <Route path="/2022/project/vi/studio" element={<FeaturesVIS />} />
          <Route path="/2022/project/vi/research" element={<FeatruesVIR />} />
          <Route
            path="/2022/project/dc/studio/:id"
            element={<FeaturesPresentation />}
          />
          <Route
            path="/2022/project/dc/research/:id"
            element={<FeaturesPresentation />}
          />
          <Route
            path="/2022/project/vi/studio/:id"
            element={<FeaturesPresentation />}
          />
          <Route
            path="/2022/project/vi/research/:id"
            element={<FeaturesPresentation />}
          />
          <Route
            path="/2022/project/mm/:id"
            element={<FeaturesPresentation />}
          />
          <Route
            path="/2022/designer/KangSumin"
            element={<DesignerProfileKangSumin />}
          />
          <Route
            path="/2022/designer/KangJueon"
            element={<DesignerProfileJueon />}
          />
          <Route
            path="/2022/designer/Hyobin"
            element={<DesignerProfileHyobin />}
          />
          <Route
            path="/2022/designer/Yunseok"
            element={<DesignerProfileYunseok />}
          />
          <Route
            path="/2022/designer/Hyejin"
            element={<DesignerProfileHyejin />}
          />
          <Route
            path="/2022/designer/Kiseon"
            element={<DesignerProfileKiseong />}
          />
          <Route
            path="/2022/designer/Nayoung"
            element={<DesignerProfileNayoung />}
          />
          <Route
            path="/2022/designer/Moonju"
            element={<DesignerProfileMoonju />}
          />
          <Route
            path="/2022/designer/Byeongjun"
            element={<DesignerProfileByeongjun />}
          />
          <Route
            path="/2022/designer/Sieun"
            element={<DesignerProfileSieun />}
          />
          <Route
            path="/2022/designer/Yeawon"
            element={<DesignerProfileYeawon />}
          />
          <Route
            path="/2022/designer/Chohee"
            element={<DesignerProfileChohee />}
          />
          <Route
            path="/2022/designer/Hyunsoo"
            element={<DesignerProfileHyunsoo />}
          />
          <Route
            path="/2022/designer/Yeonhui"
            element={<DesignerProfileYeonhui />}
          />
          <Route path="/2022/designer/Jun" element={<DesignerProfileJun />} />
          <Route
            path="/2022/designer/Sunghee"
            element={<DesignerProfileSunghee />}
          />
          <Route
            path="/2022/designer/Mingyu"
            element={<DesignerProfileMingyu />}
          />
          <Route
            path="/2022/designer/Seongho"
            element={<DesignerProfileSeongho />}
          />
          <Route
            path="/2022/designer/ParkSumin"
            element={<DesignerProfileParkSumin />}
          />
          <Route
            path="/2022/designer/Eunsu"
            element={<DesignerProfileEunsu />}
          />
          <Route
            path="/2022/designer/Jeonghun"
            element={<DesignerProfileJeonghun />}
          />
          <Route
            path="/2022/designer/Jaehoon"
            element={<DesignerProfileJaehoon />}
          />
          <Route
            path="/2022/designer/Soeun"
            element={<DesignerProfileSoeun />}
          />
          <Route
            path="/2022/designer/Boeun"
            element={<DesignerProfileBoeun />}
          />
          <Route
            path="/2022/designer/Bohyeon"
            element={<DesignerProfileBohyun />}
          />
          <Route
            path="/2022/designer/Arteleva"
            element={<DesignerProfileArteleva />}
          />
          <Route
            path="/2022/designer/Doyeon"
            element={<DesignerProfileDoyeon />}
          />
          <Route
            path="/2022/designer/Jiyeon"
            element={<DesignerProfileJiyeon />}
          />
          <Route
            path="/2022/designer/Dohyeon"
            element={<DesignerProfileDohyun />}
          />
          <Route
            path="/2022/designer/Minju"
            element={<DesignerProfileMinju />}
          />
          <Route
            path="/2022/designer/Seoyeon"
            element={<DesignerProfileSeoyeon />}
          />
          <Route
            path="/2022/designer/Youngmin"
            element={<DesignerProfileYoungmin />}
          />
          <Route
            path="/2022/designer/Jaehee"
            element={<DesignerProfileJaehee />}
          />
          <Route
            path="/2022/designer/Jinho"
            element={<DesignerProfileJinho />}
          />
          <Route
            path="/2022/designer/Hanbin"
            element={<DesignerProfileHanbin />}
          />
          <Route
            path="/2022/designer/Hyeonwoo"
            element={<DesignerProfileHyeonwoo />}
          />
          <Route
            path="/2022/designer/Suyoung"
            element={<DesignerProfileSuyoung />}
          />
          <Route
            path="/2022/designer/Eunkyo"
            element={<DesignerProfileEunkyo />}
          />
          <Route
            path="/2022/designer/Jaeseok"
            element={<DesignerProfileJaeseok />}
          />
          <Route
            path="/2022/designer/Seongjin"
            element={<DesignerProfileSeongjin />}
          />
          <Route
            path="/2022/designer/Juhyun"
            element={<DesignerProfileJuhyun />}
          />
          <Route
            path="/2022/designer/Seongrae"
            element={<DesignerProfileSeongrae />}
          />
          <Route
            path="/2022/designer/Yihyeon"
            element={<DesignerProfileYihyeon />}
          />
          <Route
            path="/2022/designer/Kiseong"
            element={<DesignerProfileKiseong />}
          />
          <Route
            path="/2022/designer/Kangwon"
            element={<DesignerProfileKangwon />}
          />
          <Route
            path="/2022/designer/Changhyun"
            element={<DesignerProfileChanghyun />}
          />
          <Route
            path="/2022/designer/Yosep"
            element={<DesignerProfileYosep />}
          />
          <Route
            path="/2022/designer/Yujin"
            element={<DesignerProfileYujin />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
