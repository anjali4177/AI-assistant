import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    productInstanceId: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Conversation =
  mongoose.models.Conversation ||
  mongoose.model("Conversation", conversationSchema);