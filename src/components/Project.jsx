import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { useState, useContext } from "react";

export default function Project() {
  const navigate = useNavigate();
  const { projects, setProjects, idxCount, setIdxCount, setDBChange } =
    useContext(AppContext);

  let { pid } = useParams();
  pid = parseInt(pid);

  // declare project
  let project, project_id;
  if (pid) {
    // check if param exist
    // find project in projects where id = pid
    project = { ...projects.find((project, i) => i === pid - 1) };
    project_id = pid;
  } else {
    //new project template
    project_id = projects.length + 1;
    project = { title: "", description: "" };
  }
  //set project
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

    //check if projects index matches pid parameter
    const checkUpdate = projects.find((p, i) => i === pid - 1);
    let url, method;
    if (checkUpdate) {
      url = `${proj._id}`;
      method = "PUT";
    } else {
      // push new project into projecs
      url = "";
      method = "POST";
    }
    console.log(proj);
    fetch(`/api/projects/${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(proj),
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        setDBChange(true);
      })
      .catch((err) => {
        // Code called when an error occurs during the request
        console.log(err.message);
      });

    navigate("/projects"); // return to projects
  };

  return (
    <>
      <h1>Project Form</h1>
      <form onSubmit={projectSubmit}>
        <div className="input">
          <label>ID: </label>
          <input type="text" value={project_id} disabled />
        </div>
        <div className="input">
          <label>Title </label>
          <input
            type="text"
            defaultValue={project.title}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="input">
          <label>Description </label>
          <input
            type="text"
            defaultValue={project.description}
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
