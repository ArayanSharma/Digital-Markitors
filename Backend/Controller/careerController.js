import Career from "../Model/Career.js";

export const createCareer = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      phone,
      position,
    } = req.body;

    const career = await Career.create({
      name,
      email,
      phone,
      position,
      resume: req.file
        ? req.file.path
        : "",
    });

    res.status(201).json({
      success: true,
      message:
        "Application submitted successfully",
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