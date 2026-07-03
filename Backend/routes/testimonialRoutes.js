import express from "express";
import {
  createTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
} from "../Controller/testimonialController.js";

const router = express.Router();

router.post("/", createTestimonial);
router.get("/", getTestimonials);
router.get("/:id", getTestimonialById);
router.put("/:id", updateTestimonial);
router.delete("/:id", deleteTestimonial);

export default router;
