import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./Config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());



app.use("/api/contact", contactRoutes);



app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});