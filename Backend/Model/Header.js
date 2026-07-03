import mongoose from "mongoose";

const headerSchema = new mongoose.Schema(
  {
    configId: {
      type: String,
      default: "header",
      unique: true,
    },
    config: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Header", headerSchema);
