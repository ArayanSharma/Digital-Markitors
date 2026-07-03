import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    buttonText: {
      type: String,
      default: "Read More",
    },

    buttonLink: {
      type: String,
      default: "/seo-results",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
