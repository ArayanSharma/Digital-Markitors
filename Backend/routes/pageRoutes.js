import express from "express";
import { getPage, savePage } from "../Controller/pageController.js";

const router = express.Router();

router.get("/:pageId", getPage);
router.put("/:pageId", savePage);

export default router;
