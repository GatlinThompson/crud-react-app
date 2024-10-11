import { Project } from "../models/project.js";

//Get Method
export const allProjectsAPI = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects); //return projects
  } catch (err) {
    res.json({
      success: false,
      message: "GET Query Failed",
      error: err.message,
    });
  }
};

//Post Method
export const postProjectAPI = async (req, res) => {
  try {
    //new project object
    let newProject = {
      title: req.body.title,
      description: req.body.description,
    };

    const project = await Project.create(newProject); //create project
    res.json({
      success: true,
      method: "POST",
      message: "POST Query Success",
      id_created: project._id,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "POST Query Failed",
      error: err.message,
    });
  }
};

// Delete Method
export const deleteProjectAPI = async (req, res, next) => {
  try {
    const { id } = req.params; // get project id
    const project = await Project.deleteOne({ _id: id }); //delete where _id = id
    res.json({
      success: true,
      method: "DELETE",
      message: "DELETE Query Success",
      id_created: project._id,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "DELETE Query Failed",
      error: err.message,
    });
  }
};

//Put Method
export const updateProjectAPI = async (req, res, next) => {
  try {
    const { id } = req.params; // get id

    const project = await Project.updateOne(
      { _id: id },
      { title: req.body.title, description: req.body.description }
    );
    res.status.json({
      success: true,
      method: "PUT",
      message: "PUT Query Success",
      id_created: project._id,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "PUT Query Failed",
      error: err.message,
    });
  }
};
