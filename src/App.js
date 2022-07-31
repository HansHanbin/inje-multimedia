import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import ProjectDcontents from "./pages/Project/ProjectDcontents";
import ProjectMcontents from "./pages/Project/ProjectMcontents";
import ProjectVcontents from "./pages/Project/ProjectVcontents";
import Project from "./pages/Project/Project";
import About from "./pages/About";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/2022" element={<Home />} />
          <Route path="/2022/project/dc" element={<ProjectDcontents />} />
          <Route path="/2022/project/mm" element={<ProjectMcontents />} />
          <Route path="/2022/project/vi" element={<ProjectVcontents />} />
          <Route path="/2022/project" element={<Project />} />
          <Route path="/2022/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
