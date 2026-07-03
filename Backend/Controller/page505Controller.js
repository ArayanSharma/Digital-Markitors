import Page505 from "../Model/Page505.js";

export const getPage505 = async (req, res) => {
  try {
    const page = await Page505.findOne({ pageKey: "page505" });
    if (!page) return res.status(404).json({ message: "Page505 config not found" });
    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePage505 = async (req, res) => {
  try {
    const { statusCode, title, message } = req.body;
    const page = await Page505.findOneAndUpdate(
      { pageKey: "page505" },
      { statusCode, title, message },
      { upsert: true, new: true }
    );
    res.json({ message: "Page505 saved successfully", updatedAt: page.updatedAt });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
