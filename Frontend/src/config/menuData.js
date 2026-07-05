import {
  FiGrid,
  FiMail,
  FiBriefcase,
  FiFileText,
  FiPhoneCall,
  FiHome,
  FiLayout,
  FiStar,
  FiBookOpen,
  FiGlobe,
  FiTool,
  FiTag,
  FiBox,
  FiSearch,
  FiShare2,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";

const menuData = [
  { type: "item", label: "Dashboard", path: "/admin", icon: FiGrid },
  { type: "item", label: "Enquiries", path: "/admin/contacts", icon: FiMail },
  { type: "item", label: "Career", path: "/admin/career", icon: FiBriefcase },
  { type: "item", label: "Blog", path: "/admin/blog", icon: FiFileText },
  { type: "item", label: "Contact", path: "/admin/page-editor/contact", icon: FiPhoneCall },
  { type: "item", label: "Home", path: "/admin/page-editor/home", icon: FiHome },

  { type: "divider" },

  { type: "item", label: "Header", path: "/admin/header", icon: FiLayout },
  { type: "item", label: "Footer", path: "/admin/footer", icon: FiLayers },
  { type: "item", label: "Testimonials", path: "/admin/testimonials", icon: FiStar },
  { type: "item", label: "Case Studies", path: "/admin/case-study", icon: FiBookOpen },
  { type: "item", label: "Industry", path: "/admin/industry", icon: FiGlobe },
  { type: "item", label: "Tools", path: "/admin/tools", icon: FiTool },
  { type: "item", label: "Brands", path: "/admin/brands", icon: FiTag },

  { type: "divider" },

  {
    type: "dropdown",
    label: "Company",
    icon: FiBox,
    children: [
      { label: "About", path: "/admin/page-editor/about" },
      { label: "SEO Results", path: "/admin/page-editor/seo-results" },
      { label: "Packages", path: "/admin/page-editor/packages" },
      { label: "Career", path: "/admin/page-editor/career" },
    ],
  },

  { type: "title", label: "Our Services" },

  {
    type: "dropdown",
    label: "SEO",
    icon: FiSearch,
    children: [
      { label: "SEO Services", path: "/admin/page-editor/seo-service" },
      { label: "AI SEO Services", path: "/admin/page-editor/ai-seo" },
      { label: "GEO", path: "/admin/page-editor/GEO" },
      { label: "AEO", path: "/admin/page-editor/AEO" },
      { label: "Technical SEO", path: "/admin/page-editor/Technical-SEO" },
      { label: "Ecommerce SEO", path: "/admin/page-editor/Eco-SEO" },
      { label: "SEO Reseller", path: "/admin/page-editor/Reseller" },
    ],
  },
  {
    type: "dropdown",
    label: "SMO",
    icon: FiShare2,
    children: [
      { label: "Social Media Marketing", path: "/admin/page-editor/social-media-marketing" },
      { label: "Influencer Marketing", path: "/admin/page-editor/influencer-marketing" },
      { label: "Social Media Listening & Response Management", path: "/admin/page-editor/social-listening" },
    ],
  },
  {
    type: "dropdown",
    label: "Performance Marketing",
    icon: FiTrendingUp,
    children: [
      { label: "PPC", path: "/admin/page-editor/ppc" },
      { label: "Google Shopping Ads", path: "/admin/page-editor/google-shopping-ads" },
      { label: "Display Ads", path: "/admin/page-editor/display-ads" },
      { label: "Amazon Ads", path: "/admin/page-editor/amazon-ads" },
      { label: "Meta/Facebook Ads", path: "/admin/page-editor/meta-facebook-ads" },
      { label: "Instagram Ads", path: "/admin/page-editor/instagram-ads" },
      { label: "YouTube Ads", path: "/admin/page-editor/youtube" },
      { label: "LinkedIn Ads", path: "/admin/page-editor/linkedin-ads" },
    ],
  },
  {
    type: "dropdown",
    label: "Web Developement",
    icon: FiTrendingUp,
    children: [
      { label: "Website Development", path: "/admin/page-editor/website-development" },
      { label: "WordPress Development", path: "/admin/page-editor/wordpress-development" },
      { label: "Shopify Development", path: "/admin/page-editor/shopify-development" },
      { label: "Laravel Development", path: "/admin/page-editor/laravel-development" },
      { label: "Woocommerce Development", path: "/admin/page-editor/woocommerce-development" },
      { label: " Wix Development", path: "/admin/page-editor/Wix-Development" },
      { label: "Website Maintenance Services", path: "/admin/page-editor/Website-Maintenance-Services" },
      { label: "Full Stack Development", path: "/admin/page-editor/full-stack-development" },
      { label: "Android & iOS Development", path: "/admin/page-editor/android-ios-development" },
    ],
  },
  {
    type: "dropdown",
    label: "Industry",
    icon: FiGlobe,
    children: [
      { label: "Education", path: "/admin/page-editor/Education" },
      { label: "Healthcare", path: "/admin/page-editor/Healthcare" },
      { label: "B2B", path: "/admin/page-editor/B2B" },
      { label: "Hospitality", path: "/admin/page-editor/Hospitality" },
      { label: "Ecommerce", path: "/admin/page-editor/E-Commerce" },
      { label: "Travel", path: "/admin/page-editor/Travel" },
      { label: "Financial & Professional", path: "/admin/page-editor/Financial-&-Professional" },
    ],
  },
];

export default menuData;
