import { Routes, Route } from "react-router-dom";

import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Seo from "./Pages/Seo";
import Packages from "./Pages/Packages";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import SeoService from "./Pages/SeoService";
import Aiseo from "./Pages/AiSeo";
import Geo from "./Pages/Geo";
import Aeo from "./Pages/Aeo";
import TechSeo from "./Pages/TechSEO";
import EcoSeo from "./Pages/Ecoseo";
import SocialMediaM from "./Pages/SocialMediaM";
import InfluencerM from "./Pages/InfluencerM";
import SocialListening from "./Pages/SocialListening";
import PPC from "./Pages/PPC";
import GoogleAd from "./Pages/GoogleAd";
import DisplayAds from "./Pages/DisplayAds";
import AmazonAds from "./Pages/AmazonAds";
import MetaF from "./Pages/MetaF";
import Insta from "./Pages/Insta";
import LinkedIn from "./Pages/LinkedIn";
import Education from "./Pages/Education";
import Youtube from "./Pages/Youtube";
import Seoseller from "./Pages/Reseller";
import Healthcare from "./Pages/Healthcare";
import B2B from "./Pages/B2B";
import Hospitality from "./Pages/Hospitality";
import ECommerce from "./Pages/ECommerce";
import Travel from "./Pages/Travel";
import Financial from "./Pages/Financial";

import WordPress from "./Pages/WordPress"
import ShopifyDev from "./Pages/ShopifyDev"
import LaraveDevelopment from "./Pages/LaraveDevelopment"
import Woocommerce from "./Pages/Woocommerce"
import WixDev from "./Pages/WixDev"
import Websitemain from "./Pages/Websitemain"
import WebsiteDev from "./Pages/WebsiteDev"


import Login from "./Pages/admin/Login";
import Dashboard from "./Pages/admin/Dashboard";
import Contacts from "./Pages/admin/Contacts";
import Banner from "./Pages/admin/Banner";

import Reseller from "./Pages/Reseller"



function App() {
  return (
    <Routes>

      {/* User */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="seo-results" element={<Seo />} />
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

        <Route path="Reseller" element={<Reseller />} />
        







      </Route>

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="banner" element={<Banner />} />
      </Route>

    </Routes>
  );
}

export default App;