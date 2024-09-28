import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import { createContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Project from "./components/Project";

export const AppContext = createContext();

export default function App() {
  const [projects, setProjects] = useState([]);
  const [DBChange, setDBChange] = useState(false);

  useEffect(() => {
    fetch("/api/projects", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        setProjects(resp);
        setDBChange(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [DBChange]);

  return (
    <AppContext.Provider value={{ projects, setProjects, setDBChange }}>
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
