import express from "express";
import { getPage505, updatePage505 } from "../Controller/page505Controller.js";

const router = express.Router();

router.get("/", getPage505);
router.put("/", updatePage505);

export default router;
