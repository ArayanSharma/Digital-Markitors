import { v2 as cloudinary } from "cloudinary";

// Validate required environment variables
const requiredVars = [
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];

for (const varName of requiredVars) {
  if (!process.env[varName]) {
    throw new Error(
      `Missing environment variable: ${varName}. ` +
        `Please add it to your .env file.`
    );
  }
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

console.log("✓ Cloudinary configured successfully");

export default cloudinary;
