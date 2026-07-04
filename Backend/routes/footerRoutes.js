import express from "express";
import upload from "../middleware/upload.js";

import {
  getFooter,
  updateFooter,
  uploadFooterLogo,
} from "../Controller/footerController.js";

const router = express.Router();

router.get("/", getFooter);
router.put("/", updateFooter);
router.post("/logo", upload.single("logo"), uploadFooterLogo);

export default router;