import { useContext } from "react";
import { AppContext } from "../App";
import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";

export default function Projects() {
  const { projects } = useContext(AppContext);

  return (
    <>
      <h1>Your Projects</h1>
      <Link to="new">
        <button>Add New Project</button>
      </Link>
      <hr />
      <table style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, i) => (
            <ProjectItem key={project._id} project={project} id={i} />
          ))}
        </tbody>
      </table>
    </>
  );
}
