import { useState, useEffect, useCallback } from "react";
import { loadPageContent, savePageContent } from "../../../utils/pageApi";
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

const PAGE_SLUG = "Technical-SEO";

const initialData = {
  banner: {
    title: "Technical SEO That Enhances Speed, Crawlability & UX",
    description: "We are Digicore Inc. – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing high intent commercial keywords for your business.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/Services" },
    backgroundImage: "",
  },
  about: {
    heading: "Technical SEO Services from India’s Fastest Growing SEO Agency",
    body: "We have seasoned technical SEO experts who collaboratively work with the clients to resolve technical issues of the website. At Digicore Inc., we believe in constantly identifying, evaluating and addressing the technical issues of your website. Based on the type of issue, we offer customized technical SEO services to all-sized businesses. After removing all the issues, the website’s performance can be improved thereby, increasing its search visibility.",
  },
  visibility: {
    heading: "Improve your website’s performance with the top technical SEO services in Delhi",
    body: "Digicore Inc., a trusted SEO agency in India with a profound experience focuses on improving website’s performance through best technical SEO services. Being the Google Premier partner, we blend SEO expertise with the world-class AI technologies to address the technical issues of our client’s website. Whether it is in terms of site visibility, user experience or speed, we focus on all the technical issues of the website comprehensively. Our team of SEO professionals comprises of technical SEO experts, data analysts, and content strategists who work harmoniously to address the critical site issues, thereby, offering optimal crawling, indexing, and better ranking. Our diverse technical SEO services include structure optimization, comprehensive site audit, site speed enhancement, and working over the mobile-friendliness of the website. Based on the customized business requirements of our clients, we tailor technical SEO services to maximize website performance while boosting its search engine rankings.",
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
    heading: "Why Do I Need a Technical SEO Agency in India?",
    description: "At Digicore Inc., we rely on innovative SEO practices, thereby, optimally utilizing data insights, automation tools and other best-in-class services to help our clients stay ahead in the market. From driving relevant traffic to improving ROI, our technical SEO experts ensure transparent reporting and long-term website success. Despite the type of business, consistent results and customized solutions have always improved our credibility as the best SEO company for technical fixes!",
  },
  discover: {
    heading: "Technical SEO Services",
    description: "At Digicore Inc., apart from offering just technical SEO services—we intend to become a trusted digital growth partner for business growth. After gaining prominence in the digital marketing segment, we have consistently blended AI-powered SEO strategies and data-driven solutions and connected them with the target audience.",
  },
  services: [
    {
      icon: "",
      title: "Technical SEO Audit",
      description: "With our expertise and updated skills, our technical SEO team focuses on the assessment of the core vitals of the website. From checking the crawlability, and indexing to aligning the site structure fixes, we look for the scope of improvement in the website.",
    },
    {
      icon: "",
      title: "Competitor Analysis",
      description: "We evaluate your website according to the site of your competitors before applying the technical SEO strategies. As a part of this process, we explore the improved conversion opportunity to attract target audience and improve brand awareness in the respective industry.",
    },
    {
      icon: "",
      title: "Page Speed Optimization",
      description: "Ranking in the search results is majorly influenced by the page load speed. At Digicore Inc., we ensure image optimization, server optimization and code minification are properly aligned to optimize all your web pages. This helps in offering a seamless and fast user experience.",
    },
  ],

  whyChoose: {
    heading: "Ready for More Traffic, Leads & Sales? Start SEO Now.",
    backgroundImage: "",
    button1: { text: "+91 98188 88064", link: "tel:+919818888064" },
    button2: { text: "REQUEST A CALLBACK", link: "/contact" },
  },
  dominate: {
    heading: "How Can We Help You Grow",
    description: "At Digicore Inc., our technical SEO services include data-driven approach for optimization of website performance and ensure higher search engine visibility. As a part of these services, we conduct constant audits, optimization and advanced analytics to help brands attain long-term and sustainable success.",
    cards: [
      {
        icon: "",
        title: "Discover",
        desc: "We ensure your business get more and more leads through our expertly managed digital marketing services.",
      },
      {
        icon: "",
        title: "Analyze",
        desc: "We help you convert maximum possible leads into sales and grow your business faster.",
      },
      {
        icon: "",
        title: "Strategize",
        desc: "We help your brand gain strong recognition across digital platforms globally.",
      },
      {
        icon: "",
        title: "Maximizing ROI",
        desc: "Improve your team capabilities with advanced marketing strategies and guidance.",
      },
    ],
  },
  whyBusiness: {
    heading: "Why Choose Digicore Inc. as YOUR TECHNICAL SEO SERVICES AGENCY",
    description: "Digicore Inc. employs cutting-edge practices to customized technical SEO services for all-sized businesses. Based on the nature of business, type of technical SEO issues, long-term business goals, page speed optimization, and improved user experience, we ensure the well-tailored plan is assured to the clients. With our best technical SEO services, we implement industry-specific expertise to fix the issues of website, thereby, troubleshooting them through suitable remedies. Here are some of the reasons that make us the preferred partner for technical SEO services:",
    image: "",
    features: [
      { text: "We have a team of certified SEO professionals including technical SEO experts, digital marketers, and content strategists with more than a decade’s experience." },
      { text: "We offer industry-specific and comprehensive solution to fix technical issues." },
      { text: "Detailed guidance and consistent monitoring of the website help client in achieving the diverse technical SEO goals." },
      { text: "Digicore Inc. is a certified Google partner that helps you in fixing all the technical SEO issues efficiently." },
      { text: "We offer measurable results and assure transparency and clarity in our services." },
    ],
  },
  faqSection: {
    heading: "PPC AGENCY DELHI FAQS",
    faq: [
      {
        question: "What is the cost of technical SEO services?",
        answer: "The complexity of the website and the scope of improving the technical errors are evaluated to finalize the cost of technical SEO services. Besides, the competitive nature of business and industry-wise excellence required to fix the technical issues also influence the final cost estimate. For a further breakdown and exact price related to technical SEO services, you can connect with our experts.",
      },
      {
        question: "Can I expect faster results through technical SEO services?",
        answer: "The factors including the current state of the website, effectiveness of the implemented strategies and the current scope of improvement of website influence the final result derived from technical SEO services. On an average, the noticeable results can be seen in 3-4 weeks, but, at times, it may take up to several months to deliver significant outcome. But, our technical SEO experts focus on long-term and sustainable results by fixing all the issues of the website.",
      },
    ],
  },
};

export default function AdTechSEO() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("banner");
  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const [pageData, setPageData] = useState(initialData);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

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

  /* ---------- LOAD existing content on mount ---------- */
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
      setPageData((current) => ({ ...current, ...d }));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, [load]);

  /* ---------- SAVE ---------- */
  const handleSave = async (e) => {
    e?.preventDefault();
    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, pageData);
      setStatus("saved");
      showToast("Technical SEO page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <PageHeader title="Technical SEO Page Content - Admin" description="Edit all Technical page sections from the admin panel." status={status} />
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="Banner Section" open={openSection === "banner"} onToggle={() => toggle("banner")}>
          <Field label="Title">
            <TextInput value={pageData.banner.title} onChange={(e) => updateSection("banner", "title", e.target.value)} placeholder="Banner title" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.banner.description} onChange={(e) => updateSection("banner", "description", e.target.value)} rows={6} placeholder="Banner description" />
          </Field>
          <ButtonFields label="Primary Button" value={pageData.banner.primaryBtn} onChange={(v) => updateSection("banner", "primaryBtn", v)} />
          <ButtonFields label="Secondary Button" value={pageData.banner.secondaryBtn} onChange={(v) => updateSection("banner", "secondaryBtn", v)} />
          <ImageInput label="Banner Background Image" value={pageData.banner.backgroundImage} onChange={(e) => updateSection("banner", "backgroundImage", e.target.value)} />
        </Section>

        <Section title="About Section" open={openSection === "about"} onToggle={() => toggle("about")}>
          <Field label="Heading">
            <TextInput value={pageData.about.heading} onChange={(e) => updateSection("about", "heading", e.target.value)} placeholder="About heading" />
          </Field>
          <Field label="Body">
            <TextArea value={pageData.about.body} onChange={(e) => updateSection("about", "body", e.target.value)} rows={8} placeholder="About paragraph" />
          </Field>
        </Section>

        <Section title="Visibility Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
          <Field label="Heading">
            <TextInput value={pageData.visibility.heading} onChange={(e) => updateSection("visibility", "heading", e.target.value)} placeholder="Visibility heading" />
          </Field>
          <Field label="Body">
            <TextArea value={pageData.visibility.body} onChange={(e) => updateSection("visibility", "body", e.target.value)} rows={8} placeholder="Visibility paragraph" />
          </Field>
          <ImageInput label="Visibility Image" value={pageData.visibility.image} onChange={(e) => updateSection("visibility", "image", e.target.value)} />
        </Section>

        <Section title="Performance Section" open={openSection === "performance"} onToggle={() => toggle("performance")}>
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

        <Section title="Technical SEO Agency Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
          <Field label="Heading">
            <TextInput value={pageData.seoAgency.heading} onChange={(e) => updateSection("seoAgency", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.seoAgency.description} onChange={(e) => updateSection("seoAgency", "description", e.target.value)} rows={8} placeholder="Section description" />
          </Field>
        </Section>

        <Section title="Discover Services Section" open={openSection === "discover"} onToggle={() => toggle("discover")}>
          <Field label="Heading">
            <TextInput value={pageData.discover.heading} onChange={(e) => updateSection("discover", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.discover.description} onChange={(e) => updateSection("discover", "description", e.target.value)} rows={8} placeholder="Section paragraph" />
          </Field>
        </Section>

        <Section title="Service Cards" open={openSection === "services"} onToggle={() => toggle("services")}>
          <LeadForm
            title="Services"
            addLabel="Add Service"
            items={pageData.services}
            onChange={(next) => updateArray("services", next)}
            fields={[
              { name: "icon", label: "Icon Image", type: "image" },
              { name: "title", label: "Service Title", type: "text", required: true },
              { name: "description", label: "Service Description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Why Choose Section" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
          <Field label="Heading">
            <TextInput value={pageData.whyChoose.heading} onChange={(e) => updateSection("whyChoose", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <ImageInput label="Background Image" value={pageData.whyChoose.backgroundImage} onChange={(e) => updateSection("whyChoose", "backgroundImage", e.target.value)} />
          <ButtonFields label="Button 1" value={pageData.whyChoose.button1} onChange={(v) => updateSection("whyChoose", "button1", v)} />
          <ButtonFields label="Button 2" value={pageData.whyChoose.button2} onChange={(v) => updateSection("whyChoose", "button2", v)} />
        </Section>

        <Section title="How Can We Help You Grow Section" open={openSection === "dominate"} onToggle={() => toggle("dominate")}>
          <Field label="Heading">
            <TextInput value={pageData.dominate.heading} onChange={(e) => updateSection("dominate", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.dominate.description} onChange={(e) => updateSection("dominate", "description", e.target.value)} rows={8} placeholder="Section description" />
          </Field>
          <LeadForm
            title="Help Cards"
            addLabel="Add Card"
            items={pageData.dominate.cards}
            onChange={(next) => updateSection("dominate", "cards", next)}
            fields={[
              { name: "icon", label: "Card Icon Image", type: "image" },
              { name: "title", label: "Card Title", type: "text", required: true },
              { name: "desc", label: "Card Description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Why Business Section" open={openSection === "whyBusiness"} onToggle={() => toggle("whyBusiness")}>
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
            fields={[{ name: "text", label: "Feature Text", type: "textarea", required: true }]}
          />
        </Section>

        <Section title="FAQ Section" open={openSection === "faqSection"} onToggle={() => toggle("faqSection")}>
          <Field label="FAQ Heading">
            <TextInput value={pageData.faqSection.heading} onChange={(e) => updateSection("faqSection", "heading", e.target.value)} placeholder="FAQ heading" />
          </Field>
          <LeadForm
            title="FAQs"
            addLabel="Add FAQ"
            items={pageData.faqSection.faq}
            onChange={(next) => updateSection("faqSection", "faq", next)}
            fields={[
              { name: "question", label: "FAQ Question", type: "text", required: true },
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
