import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  role: {
    type: String,
    enum: ["admin", "member"],
  },
  projectId: String,
});

export const User =
  mongoose.models.User || mongoose.model("User", UserSchema);