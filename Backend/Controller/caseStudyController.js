import mongoose from "mongoose";
import CaseStudy from "../Model/CaseStudy.js";

// CREATE Case Study
export const createCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.create(req.body);

    res.status(201).json({
      success: true,
      message: "Case study created successfully",
      caseStudy,
    });
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "A case study with this slug already exists",
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

// GET All Case Studies
export const getCaseStudies = async (req, res) => {
  try {
    const { search, active } = req.query;
    const filter = {};

    if (active !== undefined) {
      filter.active = active === "true";
    }

    if (search) {
      const regex = new RegExp(search, "i");
      filter.$or = [
        { title: regex },
        { clientName: regex },
        { category: regex },
        { shortDescription: regex },
      ];
    }

    const caseStudies = await CaseStudy.find(filter).sort({
      sortOrder: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: caseStudies.length,
      caseStudies,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET Single Case Study (by id or slug)
export const getCaseStudyById = async (req, res) => {
  try {
    const { id } = req.params;

    const caseStudy = mongoose.Types.ObjectId.isValid(id)
      ? await CaseStudy.findById(id)
      : await CaseStudy.findOne({ slug: id });

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: "Case study not found",
      });
    }

    res.status(200).json({
      success: true,
      caseStudy,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// UPDATE Case Study
export const updateCaseStudy = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid case study id",
      });
    }

    const caseStudy = await CaseStudy.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: "Case study not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Case study updated successfully",
      caseStudy,
    });
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "A case study with this slug already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// TOGGLE Case Study Active Status
export const toggleCaseStudyStatus = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid case study id",
      });
    }

    const caseStudy = await CaseStudy.findById(id);

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: "Case study not found",
      });
    }

    caseStudy.active = !caseStudy.active;
    await caseStudy.save();

    res.status(200).json({
      success: true,
      message: "Case study status updated successfully",
      caseStudy,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// DELETE Case Study
export const deleteCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findById(req.params.id);

    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: "Case study not found",
      });
    }

    await CaseStudy.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Case study deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
