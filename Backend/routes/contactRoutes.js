import express from "express";
import {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} from "../Controller/contactController.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);
router.patch("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;
