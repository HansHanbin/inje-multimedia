import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import ProjectDcontents from "./pages/Project/ProjectDcontents";
import ProjectMcontents from "./pages/Project/ProjectMcontents";
import ProjectVcontents from "./pages/Project/ProjectVcontents";
import Project from "./pages/Project/Project";
import About from "./pages/About";
import Designer from "./pages/Designer";
import DesignerProfile from "./pages/DesignerProfile";
import FeaturesPresentation from "./components/Features/FeaturesPresentation";
import FeaturesDCS from "./components/Features/FeaturesDCS";
import FeaturesDCR from "./components/Features/FeaturesDCR";
import FeaturesMMS from "./components/Features/FeaturesMMS";
import FeaturesMMR from "./components/Features/FeaturesMMR";
import FeaturesVIS from "./components/Features/FeaturesVIS";
import FeatruesVIR from "./components/Features/FeaturesVIR";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/2022" element={<Home />} />
          {/* <Route path="/2022/project/dc" element={<ProjectDcontents />} />
          <Route path="/2022/project/mm" element={<ProjectMcontents />} />
          <Route path="/2022/project/vi" element={<ProjectVcontents />} /> */}
          <Route path="/2022/project" element={<Project />} />
          <Route path="/2022/about" element={<About />} />
          <Route path="/2022/designer" element={<Designer />} />
          <Route path="/2022/designer/:id" element={<DesignerProfile />} />
          <Route path="/2022/project/dc/studio" element={<FeaturesDCS />} />
          <Route path="/2022/project/dc/research" element={<FeaturesDCR />} />
          <Route path="/2022/project/mm/studio" element={<FeaturesMMS />} />
          <Route path="/2022/project/mm/research" element={<FeaturesMMR />} />
          <Route path="/2022/project/vi/studio" element={<FeaturesVIS />} />
          <Route path="/2022/project/vi/research" element={<FeatruesVIR />} />
          <Route
            path="/2022/project/dc/:id"
            element={<FeaturesPresentation />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
