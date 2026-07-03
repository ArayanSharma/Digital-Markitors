import mongoose from "mongoose";

const page505Schema = new mongoose.Schema(
  {
    pageKey: {
      type: String,
      default: "page505",
      unique: true,
    },
    statusCode: {
      type: String,
      default: "503",
    },
    title: {
      type: String,
      default: "Service Unavailable",
    },
    message: {
      type: String,
      default: "The server is temporarily busy, try again later!",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Page505", page505Schema);
