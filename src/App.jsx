import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import { createContext, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Project from "./components/Project";

export const AppContext = createContext();

//example projects
const projectArry = [
  {
    id: 1,
    title: "A Big Project",
    description: "foo bar tar",
  },
  {
    id: 2,
    title: "Another Big Project",
    description: "foo bar tar",
  },
];

export default function App() {
  const [projects, setProjects] = useState(projectArry);
  const [idxCount, setIdxCount] = useState(projectArry.length);

  return (
    <AppContext.Provider
      value={{ projects, setProjects, idxCount, setIdxCount }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="projects" element={<Projects />}></Route>
              <Route path="projects/:pid" element={<Project />}></Route>
              <Route path="projects/new" element={<Project />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}
