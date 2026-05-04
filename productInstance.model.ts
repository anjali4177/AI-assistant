import mongoose from "mongoose";

const productInstanceSchema = new mongoose.Schema({
  projectId: String,
  name: String,
  type: String,
  integrations: {
    shopify: { type: Boolean, default: false },
    crm: { type: Boolean, default: false },
  },
});

export const ProductInstance =
  mongoose.models.ProductInstance ||
  mongoose.model("ProductInstance", productInstanceSchema);