import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: [true, "Cloudinary URL is required"],
    },

    publicId: {
      type: String,
      required: [true, "Cloudinary public_id is required"],
    },

    resourceType: {
      type: String,
      enum: {
        values: ["image", "video"],
        message: "Resource type must be either image or video",
      },
      required: [true, "Resource type is required"],
    },

    format: {
      type: String,
      default: "",
    },

    originalName: {
      type: String,
      default: "",
    },

    bytes: {
      type: Number,
      default: 0,
    },

    width: {
      type: Number,
      default: null,
    },

    height: {
      type: Number,
      default: null,
    },

    duration: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Media", mediaSchema);
