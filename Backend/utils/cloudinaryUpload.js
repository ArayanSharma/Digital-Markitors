import cloudinary from "../Config/cloudinary.js";
import streamifier from "streamifier";

/**
 * Default Cloudinary folder prefix for all uploads.
 */
const DEFAULT_FOLDER = "digital-markitors";

/**
 * Upload a file buffer to Cloudinary using upload_stream.
 *
 * @param {Buffer} fileBuffer - The file buffer from multer memory storage.
 * @param {Object} options    - Override Cloudinary upload options.
 * @returns {Promise<Object>} - Normalized upload result.
 */
export const uploadToCloudinary = (fileBuffer, options = {}) => {
  return new Promise((resolve, reject) => {
    const uploadOptions = {
      folder: DEFAULT_FOLDER,
      resource_type: "auto",
      quality: "auto",
      fetch_format: "auto",
      ...options,
    };

    const uploadStream = cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve({
          url: result.secure_url,
          publicId: result.public_id,
          resourceType: result.resource_type,
          format: result.format,
          bytes: result.bytes,
          width: result.width || null,
          height: result.height || null,
          duration: result.duration || null,
        });
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(uploadStream);
  });
};

/**
 * Delete an asset from Cloudinary by public_id.
 *
 * @param {string} publicId     - The Cloudinary public_id.
 * @param {string} resourceType - "image" or "video".
 * @returns {Promise<Object>}   - Cloudinary deletion result.
 */
export const deleteFromCloudinary = async (publicId, resourceType = "image") => {
  if (!publicId) {
    throw new Error("public_id is required to delete from Cloudinary");
  }

  const result = await cloudinary.uploader.destroy(publicId, {
    resource_type: resourceType,
  });

  return result;
};

/**
 * Replace an existing Cloudinary asset: delete old, upload new.
 *
 * @param {string} oldPublicId     - public_id of the file to replace.
 * @param {string} oldResourceType - resource_type of the old file.
 * @param {Buffer} newFileBuffer   - New file buffer to upload.
 * @param {Object} options         - Cloudinary upload options.
 * @returns {Promise<Object>}      - Normalized upload result for the new file.
 */
export const updateOnCloudinary = async (
  oldPublicId,
  oldResourceType,
  newFileBuffer,
  options = {}
) => {
  // Delete old asset (don't block on failure — the old file may already be gone)
  try {
    await deleteFromCloudinary(oldPublicId, oldResourceType);
  } catch (err) {
    console.warn(
      `Warning: Failed to delete old Cloudinary asset ${oldPublicId}:`,
      err.message
    );
  }

  // Upload new asset
  return uploadToCloudinary(newFileBuffer, options);
};
