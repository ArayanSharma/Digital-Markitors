import express from "express";
import {
  createIndustry,
  getIndustries,
  getIndustryById,
  updateIndustry,
  toggleIndustryStatus,
  deleteIndustry,
} from "../Controller/industryController.js";

const router = express.Router();

router.post("/", createIndustry);
router.get("/", getIndustries);
router.get("/:id", getIndustryById);
router.put("/:id", updateIndustry);
router.patch("/:id/status", toggleIndustryStatus);
router.delete("/:id", deleteIndustry);

export default router;
