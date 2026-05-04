import { connectDB } from "@/app/lib/db/connect";
import { Conversation } from "@/app/lib/models/conversation.model";
import { Message } from "@/app/lib/models/message.model";

export const sendMessageService = async ({
  projectId,
  productInstanceId,
  message,
}: {
  projectId: string;
  productInstanceId: string;
  message: string;
}) => {
  await connectDB();

  // find or create conversation
  let convo = await Conversation.findOne({
    projectId,
    productInstanceId,
  });

  if (!convo) {
    convo = await Conversation.create({
      projectId,
      productInstanceId,
    });
  }

  // save user message
  await Message.create({
    conversationId: convo._id,
    projectId,
    productInstanceId,
    role: "user",
    content: message,
  });

  // fake AI
  const reply = await fakeAIResponse(message);

  // save assistant reply
  await Message.create({
    conversationId: convo._id,
    projectId,
    productInstanceId,
    role: "assistant",
    content: reply,
  });

  return reply;
};

// AI mock
async function fakeAIResponse(msg: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      const text = msg.toLowerCase();

      if (text.includes("hello") || text.includes("hi")) {
        resolve("Hi! 👋 How can I help you?");
      } else if (text.includes("price")) {
        resolve("💰 Pricing starts from ₹999/month.");
      } else if (text.includes("help")) {
        resolve("🛠 I can help you with your project.");
      } else if (text.includes("bye")) {
        resolve("👋 Goodbye!");
      } else {
        resolve("🤖 I’m here to help!");
      }
    }, 400);
  });
}