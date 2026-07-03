import Media from "../Model/Media.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
  updateOnCloudinary,
} from "../utils/cloudinaryUpload.js";

/**
 * Per-type file size limits (in bytes).
 */
const SIZE_LIMITS = {
  image: 10 * 1024 * 1024, // 10 MB
  video: 100 * 1024 * 1024, // 100 MB
};

/**
 * Determine resource type from MIME type.
 */
const getResourceType = (mimetype) => {
  if (mimetype.startsWith("image/")) return "image";
  if (mimetype.startsWith("video/")) return "video";
  return "auto";
};

// ─── UPLOAD MEDIA ────────────────────────────────────────────────

export const uploadMedia = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded. Please attach a file under the 'file' field.",
      });
    }

    const { mimetype, buffer, originalname, size } = req.file;
    const resourceType = getResourceType(mimetype);

    // Enforce per-type size limit
    const maxSize = SIZE_LIMITS[resourceType];
    if (maxSize && size > maxSize) {
      const maxMB = (maxSize / (1024 * 1024)).toFixed(0);
      return res.status(400).json({
        success: false,
        message: `File too large. Maximum size for ${resourceType}s is ${maxMB} MB.`,
      });
    }

    // Upload to Cloudinary
    const result = await uploadToCloudinary(buffer, {
      resource_type: resourceType,
    });

    // Save metadata in MongoDB
    const media = await Media.create({
      url: result.url,
      publicId: result.publicId,
      resourceType: result.resourceType,
      format: result.format,
      originalName: originalname,
      bytes: result.bytes,
      width: result.width,
      height: result.height,
      duration: result.duration,
    });

    res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      url: media.url,
      data: media,
    });
  } catch (error) {
    console.error("Upload error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to upload file",
    });
  }
};

// ─── GET ALL MEDIA ───────────────────────────────────────────────

export const getAllMedia = async (req, res) => {
  try {
    const { type, page = 1, limit = 20 } = req.query;
    const filter = {};

    if (type && ["image", "video"].includes(type)) {
      filter.resourceType = type;
    }

    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
    const total = await Media.countDocuments(filter);

    const media = await Media.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit, 10));

    res.status(200).json({
      success: true,
      count: media.length,
      total,
      page: parseInt(page, 10),
      totalPages: Math.ceil(total / parseInt(limit, 10)),
      data: media,
    });
  } catch (error) {
    console.error("Get all media error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ─── GET MEDIA BY ID ─────────────────────────────────────────────

export const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

    if (!media) {
      return res.status(404).json({
        success: false,
        message: "Media not found",
      });
    }

    res.status(200).json({
      success: true,
      data: media,
    });
  } catch (error) {
    console.error("Get media error:", error);

    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid media ID",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ─── UPDATE MEDIA ────────────────────────────────────────────────

export const updateMedia = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded. Please attach a new file under the 'file' field.",
      });
    }

    const existingMedia = await Media.findById(req.params.id);

    if (!existingMedia) {
      return res.status(404).json({
        success: false,
        message: "Media not found",
      });
    }

    const { mimetype, buffer, originalname, size } = req.file;
    const resourceType = getResourceType(mimetype);

    // Enforce per-type size limit
    const maxSize = SIZE_LIMITS[resourceType];
    if (maxSize && size > maxSize) {
      const maxMB = (maxSize / (1024 * 1024)).toFixed(0);
      return res.status(400).json({
        success: false,
        message: `File too large. Maximum size for ${resourceType}s is ${maxMB} MB.`,
      });
    }

    // Delete old file from Cloudinary and upload new one
    const result = await updateOnCloudinary(
      existingMedia.publicId,
      existingMedia.resourceType,
      buffer,
      { resource_type: resourceType }
    );

    // Update MongoDB document
    existingMedia.url = result.url;
    existingMedia.publicId = result.publicId;
    existingMedia.resourceType = result.resourceType;
    existingMedia.format = result.format;
    existingMedia.originalName = originalname;
    existingMedia.bytes = result.bytes;
    existingMedia.width = result.width;
    existingMedia.height = result.height;
    existingMedia.duration = result.duration;

    await existingMedia.save();

    res.status(200).json({
      success: true,
      message: "Media updated successfully",
      data: existingMedia,
    });
  } catch (error) {
    console.error("Update media error:", error);

    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid media ID",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message || "Failed to update media",
    });
  }
};

// ─── DELETE MEDIA ────────────────────────────────────────────────

export const deleteMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

    if (!media) {
      return res.status(404).json({
        success: false,
        message: "Media not found",
      });
    }

    // Delete from Cloudinary
    await deleteFromCloudinary(media.publicId, media.resourceType);

    // Delete from MongoDB
    await Media.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Media deleted successfully",
    });
  } catch (error) {
    console.error("Delete media error:", error);

    if (error.kind === "ObjectId") {
      return res.status(400).json({
        success: false,
        message: "Invalid media ID",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete media",
    });
  }
};
