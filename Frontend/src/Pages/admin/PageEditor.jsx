import { useParams } from "react-router-dom";
import AdHome from "../../Components/admin/sections/AdHome";
import AdAbout from "../../Components/admin/sections/AdAbout";
import AdPackages from "../../Components/admin/sections/AdPackages";
import AdCareer from "../../Components/admin/sections/AdCareer";
import AdEduction from "../../Components/admin/sections/AdEduction";
import AdHealthcare from "../../Components/admin/sections/AdHealthcare";
import AdB2b from "../../Components/admin/sections/ADB2b";
import ADHospitality from "../../Components/admin/sections/ADHospitality";
import AdECommerce from "../../Components/admin/sections/AdECommerce";
import ADTravel from "../../Components/admin/sections/ADTravel";
import AdFinancial from "../../Components/admin/sections/AdFinancial";
import AdSeoService from "../../Components/admin/sections/AdSeoService";
import AdAiSeo from "../../Components/admin/sections/AdAiSeo";
import AdGeo from "../../Components/admin/sections/AdGeo";
import AdAeo from "../../Components/admin/sections/AdAeo";
import AdTechSEO from "../../Components/admin/sections/AdTechSEO";
import AdEcoseo from "../../Components/admin/sections/AdEcoseo";
import AdReseller from "../../Components/admin/sections/AdReseller";
import AdSocialMediaM from "../../Components/admin/sections/AdSocialMediaM";
import AdInfluencerM from "../../Components/admin/sections/AdInfluencerM";
import AdSocialListening from "../../Components/admin/sections/AdSocialListening";
import AdPPC from "../../Components/admin/sections/AdPPC";
import AdContact from "../../Components/admin/sections/AdContact";
import AdGoogleAd from "../../Components/admin/sections/AdGoogleAd";
import AdDisplayAds from "../../Components/admin/sections/AdDisplayAds";
import AdAmazonAds from "../../Components/admin/sections/AdAmazonAds";
import AdMetaF from "../../Components/admin/sections/AdMetaF";
import AdInsta from "../../Components/admin/sections/AdInsta";
import AdYoutube from "../../Components/admin/sections/AdYoutube";
import AdLinkedIn from "../../Components/admin/sections/AdLinkedIn";
import AdSeoResult from "../../Components/admin/sections/AdSeoResult";

import AdWebsiteDev from "../../Components/admin/sections/AdWebsiteDev";
import AdWordPress from "../../Components/admin/sections/AdWordPress";
import AdLaraveDevelopment from "../../Components/admin/sections/AdLaraveDevelopment";
import AdWoocommerce from "../../Components/admin/sections/AdWoocommerce";
import AdShopifyDev from "../../Components/admin/sections/AdShopifyDev";
import AdWixDev from "../../Components/admin/sections/AdWixDev";
import AdWebsitemain from "../../Components/admin/sections/AdWebsitemain";
import AdFullStack from "../../Components/admin/sections/AdFullStack";
import AdAndroidandIso from "../../Components/admin/sections/AdAndroidandIso";

export default function PageEditor() {
  const { pageId } = useParams();
  const normalizedPageId = (pageId || "").toLowerCase();

  return (
    <div className="w-full flex flex-col gap-6">

      {pageId === "home" ? (
        <AdHome />
      ) : pageId === "about" ? (
        <AdAbout />
      ) : pageId === "packages" ? (
        <AdPackages />
      ) : pageId === "career" ? (
        <AdCareer />
      ) : pageId === "Education" ? (
        <AdEduction />
      ) : pageId === "Healthcare" ? (
        <AdHealthcare />
      ) : normalizedPageId === "ecommerce" || normalizedPageId === "e-commerce" ? (
        <AdECommerce />
      ) : pageId === "B2B" ? (
        <AdB2b />
      ) : pageId === "Hospitality" ? (
        <ADHospitality />
      ) : pageId === "Travel" ? (
        <ADTravel />
      ) : pageId === "Financial-&-Professional" ? (
        <AdFinancial />
      ) : pageId === "seo-service" ? (
        <AdSeoService />
      ) : pageId === "ai-seo" ? (
        <AdAiSeo />
      ) : pageId === "GEO" ? (
        <AdGeo />
      ) : pageId === "AEO" ? (
        <AdAeo />
      ) : pageId === "Technical-SEO" ? (
        <AdTechSEO />
      ) : pageId === "Eco-SEO" ? (
        <AdEcoseo />
      ) : pageId === "Reseller" ? (
        <AdReseller />
      ) : pageId === "social-media-marketing" ? (
        <AdSocialMediaM />
      ) : pageId === "influencer-marketing" ? (
        <AdInfluencerM />
      ) : pageId === "social-listening" ? (
        <AdSocialListening />
      ) : pageId === "ppc" ? (
        <AdPPC />
      ) : pageId === "contact" ? (
        <AdContact />
      ) : pageId === "google-shopping-ads" ? (
        <AdGoogleAd />
      ) : pageId === "display-ads" ? (
        <AdDisplayAds />
      ) : pageId === "amazon-ads" ? (
        <AdAmazonAds />
      ) : pageId === "meta-facebook-ads" ? (
        <AdMetaF />
      ) : pageId === "instagram-ads" ? (
        <AdInsta />
      ) : pageId === "youtube" ? (
        <AdYoutube />
      ) : pageId === "linkedin-ads" ? (
        <AdLinkedIn />
      ) : pageId === "seo-results" ? (
        <AdSeoResult />
      ) : pageId === "website-development" ? (
        <AdWebsiteDev />
      ) : pageId === "wordpress-development" ? (
        <AdWordPress />
      ) : pageId === "laravel-development" ? (
        <AdLaraveDevelopment />
      ) : pageId === "woocommerce-development" ? (
        <AdWoocommerce />
      ) : pageId === "shopify-development" ? (
        <AdShopifyDev />
      ) : pageId === "Wix-Development" ? (
        <AdWixDev />
      ) : pageId === "Website-Maintenance-Services" ? (
        <AdWebsitemain />
      ) : pageId === "full-stack-development" ? (
        <AdFullStack />
      ) : pageId === "android-ios-development" ? (
        <AdAndroidandIso />
      ) : (
        <div style={{ marginTop: "24px" }}>
          <p>This page editor is not yet configured for this page.</p>
          <p>
            Implement the form component for <strong>{pageId}</strong> in
            <code>src/Components/admin/sections</code> and add it here.
          </p>
        </div>
      )}
    </div>
  );
}
