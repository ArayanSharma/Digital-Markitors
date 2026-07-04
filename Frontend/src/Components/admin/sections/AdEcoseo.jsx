import { useState, useEffect, useCallback } from "react";
import { loadPageContent, savePageContent } from "../../../utils/pageApi";
import { uid } from "../../../utils/uid";
import { useToast } from "../../../context/ToastContext";
import LeadForm from "../LeadForm";
import {
  PageHeader,
  Section,
  Field,
  TextInput,
  TextArea,
  ButtonFields,
  ImageInput,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "Eco-SEO";

const initialData = {
  banner: {
    title: "Best Ecommerce SEO Agency to convert traffic, drive revenue and build brand credibility",
    description: "Digitization of business is rapidly evolving to improve the user experience. No matter which stream of business you are in, reaching your target audience efficiently is crucial. This is where Digicore Inc., the best Ecommerce SEO company helps your company in top search results through tailored services.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/E-Commerce" },
    backgroundImage: "",
  },
  about: {
    heading: "Best ECOMMERCE SEO Agency",
    body: "In the digital landscape, it is essential for business to evolve online and adapt to the modern changes to strengthen business visibility. At Digicore Inc., we are a team of highly qualified Ecommerce SEO professionals that attracts potential customers further driving conversion, revenue and improved brand presence. With our result driven approach, we ensure your product or services appear online every time the user searches for a reliable brand. Being the trusted Ecommerce SEO agency with more than a decade’s experience and a consistent track record to deliver tailored SEO services, we continue to incorporate modern tools. From the optimal use of AI, and voice search optimization to image based searches, we cater to diverse ecommerce SEO requirements.",
  },
  visibility: {
    heading: "Build a great digital experience with Best Ecommerce SEO agency",
    body: "With the increase in the online shopping preferences, businesses need to keep their website updated and SEO-friendly. Besides, to address the efficient, easily navigable and productive browsing requirements of users, the new-age ecommerce SEO services need to be availed. Digicore Inc., the top Ecommerce SEO agency based in Delhi instils the power of AI in the SEO practices. The comprehensive strategies aimed at addressing smart search suggestions, improving engagement and providing real-time support make our ecommerce SEO services reliable.",
    image: "",
  },
  performance: {
    labelTrack: "TRACK",
    labelAnalyze: "ANALYZE",
    labelScale: "SCALE",
    labelRepeat: "REPEAT",
    image: "",
  },
  seoAgency: {
    heading: "Why Do I Need an E-commerce SEO Agency For My Online Store",
    description: "Digicore Inc. is the best Ecommerce SEO company in Delhi that helps clients in adapting new trends and buyer behaviour through data-driven services. We help all sized businesses in improving online visibility, optimize the website according to the search intent and incorporate the modern tools in the customized Ecommerce SEO services.",
    problemTitle: "The Problem",
    problemText: "Website has poor online visibility, lesser product discoverability, and low organic traffic that totally affects user experience.",
    solutionTitle: "The Solution",
    solutionText: "With the modern approach involving AI and the other advanced tools, Ecommerce SEO services address the visibility and product optimization. At Digicore Inc., we focus on improved engagement and brand building through 360-degree SEO methodology for ecommerce business.",
    rightParagraph: "We leverage the power of AI, visual search, smart search recommendations and optimize your Ecommerce business. At Digicore Inc., our professionals ensure the organic traffic, conversion and sales of your business increase consistently through the top Ecommerce SEO services. Considering the changing buyer preferences, we count on AI to innovate SEO tactics in Ecommerce. Apart from the excellent and consistent record in serving all-sized businesses, we also integrate the power of AI-driven methodology to deliver sustainable growth.",
  },
  discover: {
    heading: "AI Powered Ecommerce SEO Services",
    description: "Improve your brand visibility, product discoverability and boost sales through smart Ecommerce SEO services backed by AI and the modern tools. Partner with Digicore Inc. to optimally utilize the benefits of Artificial Intelligence, personalization and intelligent automation in Ecommerce. Optimize your Ecommerce business through the strategic implementation of AI-powered content creation and advanced SEO applications.",
  },
  services: [
    {
      id: uid(),
      icon: "",
      title: "Ecommerce Strategy",
      description: "After a comprehensive SEO audit, we recommend the tailored Ecommerce SEO services to our clients. The process involves product optimization, content optimization, and modern practices to improve website’s visibility.",
    },
    {
      id: uid(),
      icon: "",
      title: "Ecommerce SEO",
      description: "The process involves product optimization, link building, on-page optimization, and customized white-hat SEO strategies to improve the organic traffic of the website.",
    },
    {
      id: uid(),
      icon: "",
      title: "Shopping Ads",
      description: "With our well-optimized shopping ads, we ensure that the product visibility gets increased and high-intent buyers are attracted to your marketplace. We focus on improving organic traffic, boosted online sales and improved click-through rates.",
    },
  ],
  whyChoose: {
    heading: "Scale Your Online Store with High-Performance E-commerce SEO.",
    backgroundImage: "",
    button1: { text: "+91 98188 88064", link: "tel:+919818888064" },
    button2: { text: "REQUEST A CALLBACK", link: "/contact" },
  },
  impact: {
    items: [
      {
        id: uid(),
        title: "Marketing companies",
        desc: "We are currently rated Top 5 App Marketing Companies in 2019 by Clutch.co",
      },
      {
        id: uid(),
        title: "SEO and PPC",
        desc: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review.",
      },
      {
        id: uid(),
        title: "Google Premier Partner",
        desc: "We are a Google Premier Partner since 2017. This means we’re are one of Top 50 PPC Companies in India from 4000 odd Digital Marketing agencies that have partnered with Google.",
      },
      {
        id: uid(),
        title: "Search engine optimization",
        desc: "Our SEO professionals have decades of experience providing results to clients and sound knowledge of the latest search engine optimization trends.",
      },
    ],
  },
  video: {
    title: "SEO is not just about ranking on Google — it’s about connecting your brand across every platform where your customers search.",
    url: "",
  },
  dominate: {
    heading: "How We Grow Your E-commerce Sales & Revenue",
    description: "At Digicore Inc., we ensure data-driven Ecommerce SEO services to increases sales and revenue of all-sized Ecommerce businesses. With an objective to improve visibility, enhance traffic quality, and boost conversion rate, we optimize product pages and categories while fixing the technical issues of the website. Our professionals utilize conversion based UX improvements to improve the user experience and help then find the right product. Connect with us to benefit from competitor analysis, performance tracking and scalable SEO strategies for consistent ecommerce revenue growth.",
    cards: [
      {
        id: uid(),
        icon: "",
        title: "Get More Leads",
        desc: "We ensure your business get more and more leads through our expertly managed digital marketing services.",
      },
      {
        id: uid(),
        icon: "",
        title: "Make More Sales",
        desc: "We help you convert maximum possible leads into sales and grow your business faster.",
      },
      {
        id: uid(),
        icon: "",
        title: "Build Brand Awareness",
        desc: "We help your brand gain strong recognition across digital platforms globally.",
      },
      {
        id: uid(),
        icon: "",
        title: "Upskill Your Team",
        desc: "Improve your team capabilities with advanced marketing strategies and guidance.",
      },
    ],
  },
  whyBusiness: {
    heading: "Why Business Choose Digicore Inc. for Ecommerce SEO services?",
    description: "Digicore Inc. has an extensive industrial experience in Ecommerce SEO services with a consistent record of providing tailored services. With a comprehensive Ecommerce SEO audit, we ensure all the aspects of store optimization are properly aligned with the business goals of clients. From technical website analysis, link building, on-page optimisation and category & product optimisation to consistent performance tracking, our best Ecommerce SEO services address all the aspects. Experience the maximum transparency, client centric approach and choose affordable Ecommerce SEO packages by partnering with us!",
    image: "",
    features: [
      { id: uid(), text: "We provide customized Ecommerce SEO strategies." },
      { id: uid(), text: "Keeping in mind the business goals and target audience of clients." },
      { id: uid(), text: "We assure maximum transparency by informing clients about the status and measurable results." },
      { id: uid(), text: "Our SEO professionals strictly adhere to the white hat SEO guidelines." },
      { id: uid(), text: "We provide constant support and optimisation services for sustainable business growth." },
      { id: uid(), text: "Fully-managed Ecommerce SEO services we offer are competitively priced according to diverse business requirements and budget." },
      { id: uid(), text: "Result-driven Ecommerce SEO strategies with proven results and improved visibility are assured to clients." },
      { id: uid(), text: "Save time and money by availing our professional Ecommerce SEO services." },
      { id: uid(), text: "Strengthen your brand presence and improve mobile friendliness of your website." },
    ],
  },
  faqSection: {
    heading: "PPC AGENCY DELHI FAQS",
    faq: [
      {
        id: uid(),
        question: "What is Ecommerce SEO and why is it necessary for businesses?",
        answer: "The visibility of online store increases and organic traffic increases while improving the user experience when the Ecommerce SEO services are availed. The brand credibility, sales and conversion rate of business also improve through the consistent optimization.",
      },
      {
        id: uid(),
        question: "How soon can I expect results from Ecommerce SEO?",
        answer: "The timeline of SEO results is variable depending on the distinct business goals, scope of optimisation and long-term growth of Ecommerce businesses.",
      },
      {
        id: uid(),
        question: "What are the services offered by the best Ecommerce SEO agency in Delhi?",
        answer: "The best Ecommerce SEO agency in Delhi, Digicore Inc. provides on-page optimisation, product page optimisation, technical SEO audit, and link building services for improved visibility and consistent business growth.",
      },
      {
        id: uid(),
        question: "How does Digicore Inc. ensure growth with Ecommerce SEO?",
        answer: "At Digicore Inc., our seasoned professionals provide tailored Ecommerce SEO strategies to improve product visibility. We consistently track performance metrics, and boost organic traffic to increase conversion rate and revenue growth.",
      },
    ],
  },
};

export default function AdEcoseo() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("banner");
  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [pageData, setPageData] = useState(initialData);

  const updateSection = (section, key, value) => {
    setPageData((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [key]: value,
      },
    }));
  };

  const updateArray = (key, next) => {
    setPageData((current) => ({ ...current, [key]: next }));
  };

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    let d = null;
    try {
      d = await loadPageContent(PAGE_SLUG);
    } catch (err) {
      setLoadError(err.message);
    }
    if (d) {
      setPageData((prev) => ({ ...prev, ...d }));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, [load]);

  const handleSave = async (e) => {
    e?.preventDefault();
    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, pageData);
      setStatus("saved");
      showToast("Ecommerce SEO page saved successfully");
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    } finally {
      setTimeout(() => setStatus(""), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <PageHeader title="Ecommerce SEO Page - Admin" description="Edit all Ecommerce page sections from the admin panel." status={status} />
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        {/* BANNER */}
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="1. Banner Section" open={openSection === "banner"} onToggle={() => toggle("banner")}>
          <Field label="Title">
            <TextInput value={pageData.banner.title} onChange={(e) => updateSection("banner", "title", e.target.value)} placeholder="Banner title" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.banner.description} onChange={(e) => updateSection("banner", "description", e.target.value)} rows={6} placeholder="Banner description" />
          </Field>
          <ButtonFields label="Primary Button" value={pageData.banner.primaryBtn} onChange={(next) => updateSection("banner", "primaryBtn", next)} />
          <ButtonFields label="Secondary Button" value={pageData.banner.secondaryBtn} onChange={(next) => updateSection("banner", "secondaryBtn", next)} />
          <ImageInput label="Banner Background Image" value={pageData.banner.backgroundImage} onChange={(e) => updateSection("banner", "backgroundImage", e.target.value)} />
        </Section>

        {/* ABOUT */}
        <Section title="2. About Section" open={openSection === "about"} onToggle={() => toggle("about")}>
          <Field label="Heading">
            <TextInput value={pageData.about.heading} onChange={(e) => updateSection("about", "heading", e.target.value)} placeholder="About heading" />
          </Field>
          <Field label="Body">
            <TextArea value={pageData.about.body} onChange={(e) => updateSection("about", "body", e.target.value)} rows={8} placeholder="About paragraph" />
          </Field>
        </Section>

        {/* VISIBILITY */}
        <Section title="3. Visibility Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
          <Field label="Heading">
            <TextInput value={pageData.visibility.heading} onChange={(e) => updateSection("visibility", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Body">
            <TextArea value={pageData.visibility.body} onChange={(e) => updateSection("visibility", "body", e.target.value)} rows={8} placeholder="Section paragraph" />
          </Field>
          <ImageInput label="Visibility Image" value={pageData.visibility.image} onChange={(e) => updateSection("visibility", "image", e.target.value)} />
        </Section>

        {/* PERFORMANCE */}
        <Section title="4. Performance Section" open={openSection === "performance"} onToggle={() => toggle("performance")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Label 1">
              <TextInput value={pageData.performance.labelTrack} onChange={(e) => updateSection("performance", "labelTrack", e.target.value)} placeholder="TRACK" />
            </Field>
            <Field label="Label 2">
              <TextInput value={pageData.performance.labelAnalyze} onChange={(e) => updateSection("performance", "labelAnalyze", e.target.value)} placeholder="ANALYZE" />
            </Field>
            <Field label="Label 3">
              <TextInput value={pageData.performance.labelScale} onChange={(e) => updateSection("performance", "labelScale", e.target.value)} placeholder="SCALE" />
            </Field>
            <Field label="Label 4">
              <TextInput value={pageData.performance.labelRepeat} onChange={(e) => updateSection("performance", "labelRepeat", e.target.value)} placeholder="REPEAT" />
            </Field>
          </div>
          <ImageInput label="Performance Image" value={pageData.performance.image} onChange={(e) => updateSection("performance", "image", e.target.value)} />
        </Section>

        {/* SEO AGENCY */}
        <Section title="5. SEO Agency Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
          <Field label="Heading">
            <TextInput value={pageData.seoAgency.heading} onChange={(e) => updateSection("seoAgency", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.seoAgency.description} onChange={(e) => updateSection("seoAgency", "description", e.target.value)} rows={8} placeholder="Section description" />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Problem Title">
              <TextInput value={pageData.seoAgency.problemTitle} onChange={(e) => updateSection("seoAgency", "problemTitle", e.target.value)} placeholder="Problem title" />
            </Field>
            <Field label="Solution Title">
              <TextInput value={pageData.seoAgency.solutionTitle} onChange={(e) => updateSection("seoAgency", "solutionTitle", e.target.value)} placeholder="Solution title" />
            </Field>
          </div>
          <Field label="Problem Text">
            <TextArea value={pageData.seoAgency.problemText} onChange={(e) => updateSection("seoAgency", "problemText", e.target.value)} rows={6} placeholder="Problem text" />
          </Field>
          <Field label="Solution Text">
            <TextArea value={pageData.seoAgency.solutionText} onChange={(e) => updateSection("seoAgency", "solutionText", e.target.value)} rows={10} placeholder="Solution text" />
          </Field>
          <Field label="Right Paragraph">
            <TextArea value={pageData.seoAgency.rightParagraph} onChange={(e) => updateSection("seoAgency", "rightParagraph", e.target.value)} rows={10} placeholder="Right side paragraph" />
          </Field>
        </Section>

        {/* DISCOVER */}
        <Section title="6. Discover Services Section" open={openSection === "discover"} onToggle={() => toggle("discover")}>
          <Field label="Heading">
            <TextInput value={pageData.discover.heading} onChange={(e) => updateSection("discover", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.discover.description} onChange={(e) => updateSection("discover", "description", e.target.value)} rows={8} placeholder="Section description" />
          </Field>
        </Section>

        {/* SERVICE CARDS */}
        <Section title="7. Service Cards" open={openSection === "services"} onToggle={() => toggle("services")}>
          <LeadForm
            title="Service Cards"
            addLabel="Add Service"
            items={pageData.services}
            onChange={(next) => updateArray("services", next)}
            fields={[
              { name: "icon", label: "Icon Image", type: "image" },
              { name: "title", label: "Service Title", type: "text", placeholder: "Title", required: true },
              { name: "description", label: "Service Description", type: "textarea" },
            ]}
          />
        </Section>

        {/* WHY CHOOSE */}
        <Section title="8. Why Choose Section" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
          <Field label="Heading">
            <TextInput value={pageData.whyChoose.heading} onChange={(e) => updateSection("whyChoose", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <ImageInput label="Background Image" value={pageData.whyChoose.backgroundImage} onChange={(e) => updateSection("whyChoose", "backgroundImage", e.target.value)} />
          <ButtonFields label="Button 1" value={pageData.whyChoose.button1} onChange={(next) => updateSection("whyChoose", "button1", next)} />
          <ButtonFields label="Button 2" value={pageData.whyChoose.button2} onChange={(next) => updateSection("whyChoose", "button2", next)} />
        </Section>

        {/* IMPACT TIMELINE */}
        <Section title="9. Impact Timeline Section" open={openSection === "impact"} onToggle={() => toggle("impact")}>
          <LeadForm
            title="Timeline Items"
            addLabel="Add Timeline Item"
            items={pageData.impact.items}
            onChange={(next) => updateSection("impact", "items", next)}
            fields={[
              { name: "title", label: "Timeline Title", type: "text", placeholder: "Title", required: true },
              { name: "desc", label: "Timeline Description", type: "textarea" },
            ]}
          />
        </Section>

        {/* VIDEO */}
        <Section title="11. Video Section" open={openSection === "video"} onToggle={() => toggle("video")}>
          <Field label="Video Title">
            <TextInput value={pageData.video.title || ""} onChange={(e) => updateSection("video", "title", e.target.value)} placeholder="Video heading / title" />
          </Field>
          <Field label="Video URL">
            <TextInput value={pageData.video.url} onChange={(e) => updateSection("video", "url", e.target.value)} placeholder="YouTube embed URL or video URL" />
          </Field>
        </Section>

        {/* HOW WE GROW */}
        <Section title="13. How We Grow Section" open={openSection === "dominate"} onToggle={() => toggle("dominate")}>
          <Field label="Heading">
            <TextInput value={pageData.dominate.heading} onChange={(e) => updateSection("dominate", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.dominate.description} onChange={(e) => updateSection("dominate", "description", e.target.value)} rows={8} placeholder="Section description" />
          </Field>
          <LeadForm
            title="Dominate Cards"
            addLabel="Add Card"
            items={pageData.dominate.cards}
            onChange={(next) => updateSection("dominate", "cards", next)}
            fields={[
              { name: "icon", label: "Card Icon Image", type: "image" },
              { name: "title", label: "Card Title", type: "text", placeholder: "Title", required: true },
              { name: "desc", label: "Card Description", type: "textarea" },
            ]}
          />
        </Section>

        {/* WHY BUSINESS */}
        <Section title="14. Why Business Section" open={openSection === "whyBusiness"} onToggle={() => toggle("whyBusiness")}>
          <Field label="Heading">
            <TextInput value={pageData.whyBusiness.heading} onChange={(e) => updateSection("whyBusiness", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.whyBusiness.description} onChange={(e) => updateSection("whyBusiness", "description", e.target.value)} rows={10} placeholder="Section description" />
          </Field>
          <ImageInput label="Section Image" value={pageData.whyBusiness.image} onChange={(e) => updateSection("whyBusiness", "image", e.target.value)} />
          <LeadForm
            title="Features"
            addLabel="Add Feature"
            items={pageData.whyBusiness.features}
            onChange={(next) => updateSection("whyBusiness", "features", next)}
            fields={[{ name: "text", label: "Feature Text", type: "textarea", placeholder: "Feature text", required: true }]}
          />
        </Section>

        {/* FAQ */}
        <Section title="15. FAQ Section" open={openSection === "faqSection"} onToggle={() => toggle("faqSection")}>
          <Field label="FAQ Heading">
            <TextInput value={pageData.faqSection.heading} onChange={(e) => updateSection("faqSection", "heading", e.target.value)} placeholder="FAQ heading" />
          </Field>
          <LeadForm
            title="FAQ Items"
            addLabel="Add FAQ"
            items={pageData.faqSection.faq}
            onChange={(next) => updateSection("faqSection", "faq", next)}
            fields={[
              { name: "question", label: "FAQ Question", type: "text", placeholder: "Question", required: true },
              { name: "answer", label: "FAQ Answer", type: "textarea" },
            ]}
          />
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
