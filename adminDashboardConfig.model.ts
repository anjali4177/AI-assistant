import mongoose from "mongoose";

const AdminDashboardConfigSchema = new mongoose.Schema({
  projectId: String,
  sections: [
    {
      title: String,
      widgets: [String],
    },
  ],
});

export const AdminDashboardConfig =
  mongoose.models.AdminDashboardConfig ||
  mongoose.model("AdminDashboardConfig", AdminDashboardConfigSchema);