import express from "express";
import upload from "../Middleware/upload.js";

import {
  createCareer,
  getCareers,
  getCareerById,
  deleteCareer,
} from "../Controller/careerController.js";

const router = express.Router();

router.post(
  "/",
  upload.single("resume"),
  createCareer
);

router.get("/", getCareers);

router.get("/:id", getCareerById);

router.delete("/:id", deleteCareer);

export default router;