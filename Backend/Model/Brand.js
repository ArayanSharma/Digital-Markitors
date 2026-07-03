import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    altText: {
      type: String,
      default: "brand",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Brand", brandSchema);
