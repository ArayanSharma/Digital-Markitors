import "dotenv/config";
import express from "express";
import cors from "cors";
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import connectDB from "./Config/db.js";
import "./Config/cloudinary.js";
import contactRoutes from "./routes/contactRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import pageRoutes from "./routes/pageRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import brandRoutes from "./routes/brandRoutes.js";
import toolRoutes from "./routes/toolRoutes.js";
import caseStudyRoutes from "./routes/caseStudyRoutes.js";
import industryRoutes from "./routes/industryRoutes.js";
import headerRoutes from "./routes/headerRoutes.js";
import page505Routes from "./routes/page505Routes.js";
import footerRoutes from "./routes/footerRoutes.js";

connectDB();

const app = express();

app.use(cors());

app.use(express.json());



app.use("/api/career", careerRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/pages", pageRoutes);
app.use("/api/contact", contactRoutes);

app.use("/uploads", express.static("uploads"));
app.use("/api/upload", uploadRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/tools", toolRoutes);
app.use("/api/casestudies", caseStudyRoutes);
app.use("/api/industries", industryRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/page505", page505Routes);


app.get("/", (req, res) => {
  res.send("API Running...");
});

// ─── Global Error Handler ────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);

  // Multer file-size limit exceeded
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "File too large. Maximum allowed size is 100 MB.",
    });
  }

  // Custom unsupported file type error from our fileFilter
  if (err.code === "UNSUPPORTED_FILE_TYPE") {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  // Multer unexpected field
  if (err.code === "LIMIT_UNEXPECTED_FILE") {
    return res.status(400).json({
      success: false,
      message: "Unexpected file field. Use 'file' for single uploads or 'files' for multiple.",
    });
  }

  // Fallback
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});