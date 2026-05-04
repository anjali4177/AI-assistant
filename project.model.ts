import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  slug: String,
});

export const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);