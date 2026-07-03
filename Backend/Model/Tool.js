import mongoose from "mongoose";

const toolSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    altText: {
      type: String,
      default: "tool",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tool", toolSchema);
