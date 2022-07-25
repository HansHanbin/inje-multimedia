import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import About from "./pages/About";

import ProjectDcontents from "./pages/ProjectDcontents";
import ProjectMcontents from "./pages/ProjectMcontents";
import ProjectVcontents from "./pages/ProjectVcontents";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/project/dc-studio" element={<ProjectDcontents />} />
          <Route path="/project/mm-studio" element={<ProjectMcontents />} />
          <Route path="/project/vi-studio" element={<ProjectVcontents />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
