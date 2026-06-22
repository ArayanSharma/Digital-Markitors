import Career from "../Model/Career.js";

// CREATE Career
export const createCareer = async (req, res) => {
  try {
    const { name, email, phone, position } = req.body;

    const career = await Career.create({
      name,
      email,
      phone,
      position,
      resume: req.file ? req.file.path : "",
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      career,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET All Careers
export const getCareers = async (req, res) => {
  try {
    const careers = await Career.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: careers.length,
      careers,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET Single Career
export const getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(
      req.params.id
    );

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career application not found",
      });
    }

    res.status(200).json({
      success: true,
      career,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// DELETE Career
export const deleteCareer = async (
  req,
  res
) => {
  try {
    const career = await Career.findById(
      req.params.id
    );

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career application not found",
      });
    }

    await Career.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Career application deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};