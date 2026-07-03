import mongoose from "mongoose";

const caseStudySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    shortDescription: {
      type: String,
      required: true,
    },

    fullDescription: {
      type: String,
      default: "",
    },

    coverImage: {
      type: String,
      default: "",
    },

    clientName: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "",
    },

    technologies: {
      type: [String],
      default: [],
    },

    challenge: {
      type: String,
      default: "",
    },

    solution: {
      type: String,
      default: "",
    },

    result: {
      type: String,
      default: "",
    },

    galleryImages: {
      type: [String],
      default: [],
    },

    featured: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },

    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

caseStudySchema.pre("validate", function (next) {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
  next();
});

export default mongoose.model("CaseStudy", caseStudySchema);
