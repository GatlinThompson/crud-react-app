import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function ProjectItem(props) {
  const { projects, setProjects } = useContext(AppContext);
  const navigate = useNavigate();

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const editProject = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <tr>
      <td>{props.project.id}</td>
      <td>{props.project.title}</td>
      <td>{props.project.description}</td>
      <td>
        <button onClick={() => editProject(props.project.id)}>Edit</button>
      </td>
      <td>
        <button onClick={() => deleteProject(props.project.id)}>Delete</button>
      </td>
    </tr>
  );
}
