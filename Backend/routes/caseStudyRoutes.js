import express from "express";
import {
  createCaseStudy,
  getCaseStudies,
  getCaseStudyById,
  updateCaseStudy,
  toggleCaseStudyStatus,
  deleteCaseStudy,
} from "../Controller/caseStudyController.js";

const router = express.Router();

router.post("/", createCaseStudy);
router.get("/", getCaseStudies);
router.get("/:id", getCaseStudyById);
router.put("/:id", updateCaseStudy);
router.patch("/:id/status", toggleCaseStudyStatus);
router.delete("/:id", deleteCaseStudy);

export default router;
