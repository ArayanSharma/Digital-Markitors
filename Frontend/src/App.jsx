import { Routes, Route } from "react-router-dom";

// Layouts
import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";

// User Pages - Core
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
import Packages from "./Pages/Packages";
import Education from "./Pages/Education";

// User Pages - SEO
import Seo from "./Pages/Seo";
import SeoResult from "./Pages/SeoResult";
import SeoService from "./Pages/SeoService";
import Aiseo from "./Pages/AiSeo";
import Geo from "./Pages/Geo";
import Aeo from "./Pages/Aeo";
import TechSeo from "./Pages/TechSEO";
import EcoSeo from "./Pages/Ecoseo";

// User Pages - Social Media
import SocialMediaM from "./Pages/SocialMediaM";
import InfluencerM from "./Pages/InfluencerM";
import SocialListening from "./Pages/SocialListening";
import Youtube from "./Pages/Youtube";

// User Pages - Advertising
import PPC from "./Pages/PPC";
import GoogleAd from "./Pages/GoogleAd";
import DisplayAds from "./Pages/DisplayAds";
import AmazonAds from "./Pages/AmazonAds";
import MetaF from "./Pages/MetaF";
import Insta from "./Pages/Insta";
import LinkedIn from "./Pages/LinkedIn";

// User Pages - Industries
import Seoseller from "./Pages/Reseller";
import Healthcare from "./Pages/Healthcare";
import B2B from "./Pages/B2B";
import Hospitality from "./Pages/Hospitality";
import ECommerce from "./Pages/ECommerce";
import Travel from "./Pages/Travel";
import Financial from "./Pages/Financial";
import Industries from "./Pages/Industries";
import IndustryDetails from "./Pages/IndustryDetails";

// User Pages - Website Development
import Websitemain from "./Pages/Websitemain";
import WebsiteDev from "./Pages/WebsiteDev";
import WordPress from "./Pages/WordPress";
import ShopifyDev from "./Pages/ShopifyDev";
import LaraveDevelopment from "./Pages/LaraveDevelopment";
import Woocommerce from "./Pages/Woocommerce";
import WixDev from "./Pages/WixDev";
import FullStack from "./Pages/FullStack";
import AndroidandIso from "./Pages/AndroidandIso";

// User Pages - Content
import AllBlogs from "./Pages/AllBlogs";
import BlogDetails from "./Pages/BlogDetails";
import CaseStudies from "./Pages/CaseStudies";
import CaseStudyDetails from "./Pages/CaseStudyDetails";

// User Pages - Misc
import Reseller from "./Pages/Reseller";

// Admin - Auth
import Login from "./Pages/admin/Login";

// Admin Pages
import Dashboard from "./Components/admin/Dashboard/Dashboard";
import Contacts from "./Pages/admin/Contacts";
import CareerAdmin from "./Pages/admin/Contact/A-Carrer";
import PageEditor from "./Pages/admin/PageEditor";
import Blog from "./Pages/admin/Blog";
import Brands from "./Pages/admin/Brands";
import Tools from "./Pages/admin/Tools";
import Ad505 from "./Pages/admin/Ad505";
import Adheader from "./Pages/admin/Adheader";
import Testimonial from "./Pages/admin/Testimonial";
import CreateService from "./Pages/admin/CreateService";
import FooterAdmin from "./Pages/admin/Afooter";

// Admin Components
import AdCasestudy from "./Components/admin/sections/AdCasestudy";
import AdIndustry from "./Components/admin/sections/AdIndustry";
import A505 from "./Components/Sections/A505";

function App() {
  return (
    <Routes>
      {/* ===== User Routes ===== */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="seo-results" element={<SeoResult />} />
        <Route path="packages" element={<Packages />} />
        <Route path="career" element={<Career />} />
        <Route path="seo-service" element={<SeoService />} />
        <Route path="ai-seo" element={<Aiseo />} />
        <Route path="GEO" element={<Geo />} />
        <Route path="AEO" element={<Aeo />} />
        <Route path="Technical-SEO" element={<TechSeo />} />
        <Route path="Eco-SEO" element={<EcoSeo />} />
        <Route path="social-media-marketing" element={<SocialMediaM />} />
        <Route path="influencer-marketing" element={<InfluencerM />} />
        <Route path="social-listening" element={<SocialListening />} />
        <Route path="Social-Media-Listening-&-Response-Management" element={<SocialListening />} />
        <Route path="social-media-listening-&-response-management" element={<SocialListening />} />
        <Route path="social-media-listening-and-response-management" element={<SocialListening />} />
        <Route path="Social-Media-Listening-Response-Management" element={<SocialListening />} />
        <Route path="social-media-listening-response-management" element={<SocialListening />} />
        <Route path="ppc" element={<PPC />} />
        <Route path="google-shopping-ads" element={<GoogleAd />} />
        <Route path="display-ads" element={<DisplayAds />} />
        <Route path="amazon-ads" element={<AmazonAds />} />
        <Route path="meta-facebook-ads" element={<MetaF />} />
        <Route path="instagram-ads" element={<Insta />} />
        <Route path="linkedin-ads" element={<LinkedIn />} />
        <Route path="Education" element={<Education />} />
        <Route path="youtube" element={<Youtube />} />
        <Route path="Seoseller" element={<Seoseller />} />
        <Route path="Healthcare" element={<Healthcare />} />
        <Route path="B2B" element={<B2B />} />
        <Route path="Hospitality" element={<Hospitality />} />
        <Route path="E-Commerce" element={<ECommerce />} />
        <Route path="Travel" element={<Travel />} />
        <Route path="Financial-&-Professional" element={<Financial />} />

        <Route path="website-development" element={<WebsiteDev />} />
        <Route path="wordpress-development" element={<WordPress />} />
        <Route path="shopify-development" element={<ShopifyDev />} />
        <Route path="laravel-development" element={<LaraveDevelopment />} />
        <Route path="woocommerce-development" element={<Woocommerce />} />
        <Route path="Wix-Development" element={<WixDev />} />
        <Route path="Website-Maintenance-Services" element={<Websitemain />} />
        <Route path="full-stack-development" element={<FullStack />} />
        <Route path="android-ios-development" element={<AndroidandIso />} />

        <Route path="Reseller" element={<Reseller />} />
        <Route path="A505" element={<A505 />} />

        <Route path="blogs" element={<AllBlogs />} />
        <Route path="blog/:slug" element={<BlogDetails />} />

        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="case-studies/:slug" element={<CaseStudyDetails />} />

        <Route path="industries" element={<Industries />} />
        <Route path="industries/:slug" element={<IndustryDetails />} />
      </Route>

      {/* ===== Login Route ===== */}
      <Route path="/login" element={<Login />} />

      {/* ===== Admin Routes ===== */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="page-editor/:pageId" element={<PageEditor />} />
        <Route path="career" element={<CareerAdmin />} />
        <Route path="blog" element={<Blog />} />
        <Route path="brands" element={<Brands />} />
        <Route path="tools" element={<Tools />} />
        <Route path="case-study" element={<AdCasestudy />} />
        <Route path="industry" element={<AdIndustry />} />
        <Route path="header" element={<Adheader />} />
        <Route path="505" element={<Ad505 />} />
        <Route path="testimonials" element={<Testimonial />} />
        <Route path="services/create" element={<CreateService />} />
        <Route path="footer" element={<FooterAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;