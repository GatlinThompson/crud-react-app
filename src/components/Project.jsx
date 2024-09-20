import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { useState, useContext } from "react";

export default function Project() {
  const navigate = useNavigate();
  const { projects, setProjects, idxCount, setIdxCount } =
    useContext(AppContext);

  let { pid } = useParams();
  pid = parseInt(pid);

  // declare project
  let project;
  if (pid) {
    // check if param exist
    // find project in projects where id = pid
    project = { ...projects.find((project) => project.id === pid) }; //
  } else {
    //new project template
    project = { id: idxCount + 1, title: "", description: "" };
  }

  const [proj, setProj] = useState(project);

  const changeTitleHandler = (e) => {
    setProj({ ...proj, title: e.target.value });
  };

  const changeDescHandler = (e) => {
    setProj({ ...proj, description: e.target.value });
  };

  // form submisson
  const projectSubmit = (e) => {
    e.preventDefault();
    const checkUpdate = projects.find((p) => p.id === pid);

    //check if project already exists
    if (checkUpdate) {
      // change project where id = pid
      const updateProject = projects.map((p) => (p.id === pid ? proj : p));
      setProjects(updateProject); //set new projects
    } else {
      setProjects([...projects, proj]); // push new project into projecs
    }
    //increase idxCount
    setIdxCount(idxCount + 1);
    navigate("/projects"); // return to projects
  };

  return (
    <>
      <h1>Project Form</h1>
      <form onSubmit={projectSubmit}>
        <div className="input">
          <label>ID: </label>
          <input type="text" value={proj.id} disabled />
        </div>
        <div className="input">
          <label>Title </label>
          <input type="text" value={proj.title} onChange={changeTitleHandler} />
        </div>
        <div className="input">
          <label>Description </label>
          <input
            type="text"
            value={proj.description}
            onChange={changeDescHandler}
          />
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
