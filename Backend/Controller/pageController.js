import PageContent from "../Model/PageContent.js";

export const getPage = async (req, res) => {
  try {
    const { pageId } = req.params;
    const page = await PageContent.findOne({ pageId });
    if (!page) return res.status(404).json({ message: "Page not found" });
    res.json(page.content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const savePage = async (req, res) => {
  try {
    const { pageId } = req.params;
    const content = req.body;
    console.log("savePage: received pageId=", pageId);
    // log summary keys to avoid huge dumps
    console.log("savePage: incoming keys:", Object.keys(content || {}));
    const page = await PageContent.findOneAndUpdate(
      { pageId },
      { content },
      { upsert: true, new: true }
    );
    res.json({ message: "Saved successfully", updatedAt: page.updatedAt });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
