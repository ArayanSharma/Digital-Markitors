import mongoose from "mongoose";

const linkItemSchema = new mongoose.Schema({
  label: { type: String, required: true },
  url: { type: String, default: "#" },
});

const linkColumnSchema = new mongoose.Schema({
  title: { type: String, required: true },
  links: [linkItemSchema],
});

const footerSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      default: "",
    },

    companyName: {
      type: String,
      default: "Digicore Inc.",
    },

    address: {
      type: String,
      default: "Digicore Inc. 438C, Panki Road, Kalyanpur, Kanpur 208017 UP",
    },

    phone: {
      type: String,
      default: "+91 9818888064",
    },

    email: {
      type: String,
      default: "support@digicore.co.in",
    },

    socialLinks: {
      facebook: { type: String, default: "https://www.facebook.com/digitalmarkitors/" },
      twitter: { type: String, default: "https://x.com/digitalmarkitor" },
      linkedin: { type: String, default: "https://www.linkedin.com/company/digitalmarkitors/" },
      instagram: { type: String, default: "https://www.instagram.com/digitalmarkitorsofficial/" },
      pinterest: { type: String, default: "" },
    },

    linkColumns: {
      type: [linkColumnSchema],
      default: [
        {
          title: "SEO",
          links: [
            { label: "SEO Services", url: "#" },
            { label: "AI SEO Services", url: "#" },
            { label: "GEO", url: "#" },
            { label: "AEO", url: "#" },
            { label: "Technical SEO", url: "#" },
            { label: "Ecommerce SEO", url: "#" },
            { label: "SEO Reseller", url: "#" },
          ],
        },
        {
          title: "PPC",
          links: [
            { label: "PPC", url: "#" },
            { label: "Google Shopping Ads", url: "#" },
            { label: "Display Ads", url: "#" },
            { label: "Amazon Ads", url: "#" },
            { label: "Meta/Facebook Ads", url: "#" },
            { label: "Instagram Ads", url: "#" },
            { label: "YouTube Ads", url: "#" },
            { label: "LinkedIn Ads", url: "#" },
          ],
        },
        {
          title: "SMM",
          links: [
            { label: "Social Media Marketing", url: "#" },
            { label: "Facebook Marketing", url: "#" },
            { label: "Social Media Marketing Packages", url: "#" },
          ],
        },
        {
          title: "Location",
          links: [
            { label: "Noida", url: "#" },
            { label: "Lucknow", url: "#" },
            { label: "Gurgaon", url: "#" },
          ],
        },
        {
          title: "Industries",
          links: [
            { label: "Education", url: "#" },
            { label: "Healthcare", url: "#" },
            { label: "B2B", url: "#" },
            { label: "Hospitality", url: "#" },
            { label: "Ecommerce", url: "#" },
            { label: "Travel", url: "#" },
            { label: "Financial & Professional", url: "#" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Contact", url: "#" },
            { label: "Privacy Policy", url: "#" },
            { label: "AI Reference", url: "#" },
            { label: "Terms & Conditions", url: "#" },
            { label: "Career", url: "#" },
            { label: "Blog", url: "#" },
          ],
        },
      ],
    },

    copyrightText: {
      type: String,
      default: "© 2016-2026 Digicore Inc. - Digital Marketing Company Kanpur | Website designed by Digicore Inc.",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Footer", footerSchema);