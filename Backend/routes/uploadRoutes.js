import express from "express";
import { uploadSingle } from "../middleware/upload.js";
import {
  uploadMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
} from "../Controller/mediaController.js";

const router = express.Router();

// POST   /api/upload      → Upload a single file
router.post("/", uploadSingle, uploadMedia);

// GET    /api/upload      → List all media (supports ?type=image|video&page=1&limit=20)
router.get("/", getAllMedia);

// GET    /api/upload/:id  → Get single media by ID
router.get("/:id", getMediaById);

// PUT    /api/upload/:id  → Replace existing media with a new file
router.put("/:id", uploadSingle, updateMedia);

// DELETE /api/upload/:id  → Delete media from Cloudinary + MongoDB
router.delete("/:id", deleteMedia);

export default router;
