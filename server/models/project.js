import mongoose from "mongoose";

const Schema = mongoose.Schema;

let projectSchema = new Schema({
  title: String,
  description: String,
});

export let Project = mongoose.model("Project", projectSchema);
