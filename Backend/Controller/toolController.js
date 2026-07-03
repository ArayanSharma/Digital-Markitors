import Tool from "../Model/Tool.js";

// CREATE Tool
export const createTool = async (req, res) => {
  try {
    const { image, altText } = req.body;

    const tool = await Tool.create({
      image,
      altText,
    });

    res.status(201).json({
      success: true,
      message: "Tool created successfully",
      tool,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET All Tools
export const getTools = async (req, res) => {
  try {
    const tools = await Tool.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: tools.length,
      tools,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET Single Tool
export const getToolById = async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);

    if (!tool) {
      return res.status(404).json({
        success: false,
        message: "Tool not found",
      });
    }

    res.status(200).json({
      success: true,
      tool,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// UPDATE Tool
export const updateTool = async (req, res) => {
  try {
    const tool = await Tool.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!tool) {
      return res.status(404).json({
        success: false,
        message: "Tool not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tool updated successfully",
      tool,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// DELETE Tool
export const deleteTool = async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);

    if (!tool) {
      return res.status(404).json({
        success: false,
        message: "Tool not found",
      });
    }

    await Tool.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Tool deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
