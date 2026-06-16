import express from "express";

import { createCareer }
from "../Controller/careerController.js";

import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/",
  upload.single("resume"),
  createCareer
);

export default router;