import HeroForm from "../Components/admin/sections/HeroForm";
import AboutForm from "../Components/admin/sections/AboutForm";
import SeoAgencyForm from "../Components/admin/sections/SeoAgencyForm";
import VisibilityForm from "../Components/admin/sections/VisibilityForm";
import PerformanceForm from "../Components/admin/sections/PerformanceForm";
import ImpactForm from "../Components/admin/sections/ImpactForm";
import IndustryForm from "../Components/admin/sections/IndustryForm";
import CaseStudiesForm from "../Components/admin/sections/CaseStudiesForm";
import ContactFormSection from "../Components/admin/sections/ContactFormSection";
import PricingForm from "../Components/admin/sections/PricingForm";
import JobListingsForm from "../Components/admin/sections/JobListingsForm";

// Maps a section "type" string to the React form component that edits it.
// Add a new line here every time you build a new section form.

const sectionComponentMap = {
  hero: HeroForm,
  about: AboutForm,
  "seo-agency": SeoAgencyForm,
  visibility: VisibilityForm,
  performance: PerformanceForm,
  impact: ImpactForm,
  industry: IndustryForm,
  "case-studies": CaseStudiesForm,
  "contact-form": ContactFormSection,
  pricing: PricingForm,
  "job-listings": JobListingsForm,
};

export default sectionComponentMap;