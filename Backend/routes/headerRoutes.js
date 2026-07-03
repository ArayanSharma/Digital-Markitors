import express from "express";
import { getHeader, updateHeader } from "../Controller/headerController.js";

const router = express.Router();

router.get("/", getHeader);
router.put("/", updateHeader);

export default router;
