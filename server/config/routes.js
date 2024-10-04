import express from "express";
import {
  allProjectsAPI,
  postProjectAPI,
  deleteProjectAPI,
  updateProjectAPI,
} from "../controllers/projects.js";

let router = express.Router();

export const configureRoutes = (app) => {
  router.get("/api/projects", allProjectsAPI);
  router.post("/api/projects", postProjectAPI);
  router.delete("/api/projects/:id", deleteProjectAPI);
  router.put("/api/projects/:id", updateProjectAPI);
  app.use("/", router);
};
