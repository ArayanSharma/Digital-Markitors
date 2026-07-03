import multer from "multer";

/**
 * Allowed MIME types for uploads.
 */
const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
];

const ALLOWED_VIDEO_TYPES = [
  "video/mp4",
  "video/webm",
  "video/quicktime",
  "video/x-msvideo",
];

const ALLOWED_TYPES = [...ALLOWED_IMAGE_TYPES, ...ALLOWED_VIDEO_TYPES];

/**
 * Maximum file size: 100 MB (to accommodate videos).
 * Finer per-type validation is done in the controller.
 */
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB

/**
 * File filter — rejects uploads with unsupported MIME types.
 */
const fileFilter = (req, file, cb) => {
  if (ALLOWED_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    const error = new Error(
      `Unsupported file type: ${file.mimetype}. ` +
        `Allowed types: ${ALLOWED_TYPES.join(", ")}`
    );
    error.code = "UNSUPPORTED_FILE_TYPE";
    cb(error, false);
  }
};

/**
 * Multer instance using memory storage (buffers stay in memory
 * and are piped directly to Cloudinary via streamifier).
 */
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
  },
});

/**
 * Middleware for single-file upload (field name: "file").
 */
export const uploadSingle = upload.single("file");

/**
 * Middleware for multi-file upload (field name: "files", max 10).
 */
export const uploadMultiple = upload.array("files", 10);

export default upload;