import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  conversationId: String,
  role: String, // "user" or "assistant"
  content: String,
});

export const Message =
  mongoose.models.Message ||
  mongoose.model("Message", messageSchema);