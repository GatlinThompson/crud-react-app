import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function ProjectItem(props) {
  const { setDBChange } = useContext(AppContext);
  const navigate = useNavigate();

  // delete project
  const deleteProject = (id) => {
    let url = "api/projects/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        setDBChange(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // navagiate to edit form
  const editProject = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <tr>
      <td>{props.id + 1}</td>
      <td>{props.project.title}</td>
      <td>{props.project.description}</td>
      <td>
        <button onClick={() => editProject(props.id + 1)}>Edit</button>
      </td>
      <td>
        <button onClick={() => deleteProject(props.project._id)}>Delete</button>
      </td>
    </tr>
  );
}
