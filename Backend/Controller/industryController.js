import mongoose from "mongoose";
import Industry from "../Model/Industry.js";

// CREATE Industry
export const createIndustry = async (req, res) => {
  try {
    const industry = await Industry.create(req.body);

    res.status(201).json({
      success: true,
      message: "Industry created successfully",
      industry,
    });
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "An industry with this slug already exists",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET All Industries
export const getIndustries = async (req, res) => {
  try {
    const { search, active } = req.query;
    const filter = {};

    if (active !== undefined) {
      filter.active = active === "true";
    }

    if (search) {
      const regex = new RegExp(search, "i");
      filter.$or = [{ title: regex }, { description: regex }];
    }

    const industries = await Industry.find(filter).sort({
      sortOrder: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: industries.length,
      industries,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET Single Industry (by id or slug)
export const getIndustryById = async (req, res) => {
  try {
    const { id } = req.params;

    const industry = mongoose.Types.ObjectId.isValid(id)
      ? await Industry.findById(id)
      : await Industry.findOne({ slug: id });

    if (!industry) {
      return res.status(404).json({
        success: false,
        message: "Industry not found",
      });
    }

    res.status(200).json({
      success: true,
      industry,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// UPDATE Industry
export const updateIndustry = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid industry id",
      });
    }

    const industry = await Industry.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!industry) {
      return res.status(404).json({
        success: false,
        message: "Industry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Industry updated successfully",
      industry,
    });
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "An industry with this slug already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// TOGGLE Industry Active Status
export const toggleIndustryStatus = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid industry id",
      });
    }

    const industry = await Industry.findById(id);

    if (!industry) {
      return res.status(404).json({
        success: false,
        message: "Industry not found",
      });
    }

    industry.active = !industry.active;
    await industry.save();

    res.status(200).json({
      success: true,
      message: "Industry status updated successfully",
      industry,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// DELETE Industry
export const deleteIndustry = async (req, res) => {
  try {
    const industry = await Industry.findById(req.params.id);

    if (!industry) {
      return res.status(404).json({
        success: false,
        message: "Industry not found",
      });
    }

    await Industry.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Industry deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
