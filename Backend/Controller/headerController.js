import Header from "../Model/Header.js";

// Default header config used when none exists in DB
const DEFAULT_CONFIG = {
  logo: { url: "/assets/digicore-logo.svg", alt: "Digicore", link: "/" },
  phone: "+91 9818888064",
  email: "hello@digitalmarkitors.com",
  ctaButton: { label: "Free Consultation", link: "/free-consultation" },
  socialLinks: [
    { id: "fb", platform: "Facebook", url: "https://facebook.com/digicore" },
    { id: "tw", platform: "Twitter", url: "https://twitter.com/digicore" },
    { id: "li", platform: "LinkedIn", url: "https://linkedin.com/company/digicore" },
    { id: "ig", platform: "Instagram", url: "https://instagram.com/digicore" },
  ],
  rootTabs: [
    {
      id: "company",
      label: "Company",
      type: "simpleDropdown",
      isActive: true,
      promoImage: { url: "", alt: "", link: "" },
      items: [
        { id: "about-us", label: "About Us", link: "/about-us", isActive: true },
      ],
    },
  ],
};

export const getHeader = async (req, res) => {
  try {
    let header = await Header.findOne({ configId: "header" });
    if (!header) {
      // create a default config so frontend always receives a full config object
      header = await Header.create({ configId: "header", config: DEFAULT_CONFIG });
    }
    res.json(header);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateHeader = async (req, res) => {
  try {
    const { config } = req.body;
    const header = await Header.findOneAndUpdate(
      { configId: "header" },
      { config },
      { upsert: true, new: true }
    );
    res.json({ message: "Header saved successfully", updatedAt: header.updatedAt });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
