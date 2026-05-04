import { connectDB } from "../../../app/lib/db/connect";

export async function GET() {
  await connectDB();
  return Response.json({ message: "DB Connected" });
}