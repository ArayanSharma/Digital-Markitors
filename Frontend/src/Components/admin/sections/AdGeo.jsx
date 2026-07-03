import { useState, useEffect, useCallback } from "react";
import { loadPageContent, savePageContent } from "../../../utils/pageApi";
import { uid } from "../../../utils/uid";
import { useToast } from "../../../context/ToastContext";
import LeadForm from "../LeadForm";
import {
  Section,
  Field,
  TextInput,
  TextArea,
  ButtonFields,
  ImageInput,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "GEO";

const initialData = {
  banner: {
    title: "GEO SEO Agency That Drives Traffic, Trust, and Conversions",
    description: "Digicore Inc. is the best GEO SEO agency in India. We provide highest quality GEO SEO services in the region, ensure your success and growth in this new, AI-powered search era.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/seo-results" },
    backgroundImage: "",
  },
  about: {
    heading: "GEO SEO - Optimizing Brands For Platforms That Matter",
    body: "Search is no longer limited to links. Today, it is shaped by intelligence. At Digicore Inc., we operate beyond traditional SEO, beyond links, beyond keywords to create authority that sustains an AI-first search world.",
  },
  visibility: {
    heading: "Become Visible, Trusted & Relevant With Digicore Inc. – Most Trusted GEO SEO Agency in India",
    body: "Search behavior is changing very quickly. Instead of clicking multiple links, users today prefer AI assistants and generative search results. This makes investing in GEO SEO services crucial than ever.",
    image: "",
  },
  video: {
    title: "GEO SEO places your business on the map for local queries across AI searches.",
    url: "https://www.youtube.com/embed/RugY9uuIJhY",
  },
  performance: {
    labelTrack: "TRACK",
    labelAnalyze: "ANALYZE",
    labelScale: "SCALE",
    labelRepeat: "REPEAT",
    image: "",
  },
  seoAgency: {
    heading: "Why You Need a GEO SEO Agency",
    description: "",
    problemTitle: "The Problem",
    problemText: "Traditional SEO is not just enough to thrive in this new, AI-driven search era. With only traditional SEO, you risk becoming invisible on places where your customers are searching – that’s AI-powered engines.",
    solutionTitle: "The Solution",
    solutionText: "The solution is simple and clear – evolve beyond traditional SEO. GEO SEO is your only support system here.",
    rightParagraph1: "The way people discover information is changing. AI-powered search engines like ChatGPT, Gemini, and Google’s Search Generative Experience do more than just showing links. They understand what people are really looking for. They summarize information and even suggest solutions – fundamentally changing how search works. Businesses that rely only on traditional SEO are sure to lose the game.",
    rightParagraph2: "Traditional SEO isn’t enough to keep your brand visible in this new, AI-first world. A trustworthy GEO SEO agency in Delhi ensures your content is written not just for people, but also it is created to be comprehended, trusted and recommended by AI systems. At Digicore Inc., we help businesses stay visible across AI-driven platforms along with traditional search engines. We build real authority so AI recognizes your expertise and relevance and attract the right traffic to your site.",
  },
  discover: {
    heading: "Our GEO SEO Services",
    description: "Our GEO SEO services are designed to help your brand stay visible, credible and recommended on AI-powered search engines, including ChatGPT, Gemini and Google’s Search Generative Experience.",
  },
  services: [
    {
      id: uid(),
      icon: "",
      title: "GENERATIVE AI RESULT & CITATION ANALYSIS",
      description: "We analyze AI-generated results to uncover visibility gaps, identify citation opportunities, and improve how AI engines reference and recommend your content.",
    },
    {
      id: uid(),
      icon: "",
      title: "AI-friendly Keyword Enhancement",
      description: "We optimize keywords for real user intent and AI understanding so that your content never gets overlooked in relevant AI answers and recommendations.",
    },
    {
      id: uid(),
      icon: "",
      title: "Topical Authority Building",
      description: "With Topical Authority Building, we position your brand as the go-to expert so that AI systems and other search platforms rank it first in front of your audience.",
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
    description: "Digicore Inc. is a trustworthy GEO SEO company in the Delhi-NCR region. We help businesses thrive in the AI-first search era.",
    cards: [
      {
        id: uid(),
        icon: "",
        title: "Get Measurable Results",
        desc: "We ensure your business get more and more leads through our expertly managed digital marketing services.",
      },
      {
        id: uid(),
        icon: "",
        title: "Drive High-Intent Traffic",
        desc: "We help you convert maximum possible leads into sales and grow your business faster.",
      },
      {
        id: uid(),
        icon: "",
        title: "Build Brand Authority",
        desc: "We help your brand gain strong recognition across digital platforms globally.",
      },
      {
        id: uid(),
        icon: "",
        title: "Get Maximum Visibility",
        desc: "Improve your team capabilities with advanced marketing strategies and guidance.",
      },
    ],
  },
  whyBusiness: {
    heading: "Why Choose Digicore Inc. as YOUR GEO SEO AGENCY",
    description: "Digicore Inc. is a leading GEO SEO Company in Delhi. Businesses choose us because we think outside-the-box and go beyond traditional optimization techniques.",
    image: "",
    features: [
      { id: uid(), text: "We are a team of highly expert and professional GEO SEO specialists." },
      { id: uid(), text: "We build strategies that keep your brand visible, relevant and future-ready." },
      { id: uid(), text: "All our strategies are backed by real insights, analytics and performance data." },
      { id: uid(), text: "Our strategies are curated for today’s search and tomorrow’s growth." },
      { id: uid(), text: "We help businesses move forward in this AI-powered search era." },
      { id: uid(), text: "Measurable results are guaranteed with us that drive real business growth." },
    ],
  },
  industries: [
    {
      image: "",
      title: "B2B",
      desc: "We combine in-depth keyword research, competitive analysis and content optimization to ensure your brand appears in front of the audiences that matter most.",
      readMoreBtn: { text: "Read More", link: "/B2B" },
    },
    {
      image: "",
      title: "Financial & Professional",
      desc: "We optimize your website for search engines with authoritative content & high-intent keywords so you can build credibility, attract leads and drive engagement.",
      readMoreBtn: { text: "Read More", link: "/Financial-&-Professional" },
    },
    {
      image: "",
      title: "Healthcare",
      desc: "Providing AI-driven SEO Strategies to help marketplaces and retailers with improved rankings, increased sales and elevated brand’s online presence.",
      readMoreBtn: { text: "Read More", link: "/Healthcare" },
    },
  ],
  faq: [
    {
      id: uid(),
      question: "What is GEO, and why does my business need it now?",
      answer: "The time a website takes to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include your industry competition, SEO efforts and content quality.",
    },
  ],
};

export default function AdGeo() {
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
      showToast("GEO page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10">
      <form onSubmit={handleSave} className="w-full">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-brand-primary">GEO Page Content — Admin</h1>
        </div>

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

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

        <Section title="Video Section" open={openSection === "video"} onToggle={() => toggle("video")}>
          <Field label="Video Title">
            <TextInput value={pageData.video.title || ""} onChange={(e) => updateSection("video", "title", e.target.value)} placeholder="Video heading / title" />
          </Field>
          <Field label="Video URL">
            <TextInput value={pageData.video.url} onChange={(e) => updateSection("video", "url", e.target.value)} placeholder="YouTube embed URL or page video URL" />
          </Field>
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

        <Section title="GEO SEO Agency Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
          <Field label="Heading">
            <TextInput value={pageData.seoAgency.heading} onChange={(e) => updateSection("seoAgency", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.seoAgency.description} onChange={(e) => updateSection("seoAgency", "description", e.target.value)} rows={6} placeholder="Section description" />
          </Field>
          <Field label="Problem Title">
            <TextInput value={pageData.seoAgency.problemTitle} onChange={(e) => updateSection("seoAgency", "problemTitle", e.target.value)} placeholder="Problem title" />
          </Field>
          <Field label="Problem Text">
            <TextArea value={pageData.seoAgency.problemText} onChange={(e) => updateSection("seoAgency", "problemText", e.target.value)} rows={6} placeholder="Problem text" />
          </Field>
          <Field label="Solution Title">
            <TextInput value={pageData.seoAgency.solutionTitle} onChange={(e) => updateSection("seoAgency", "solutionTitle", e.target.value)} placeholder="Solution title" />
          </Field>
          <Field label="Solution Text">
            <TextArea value={pageData.seoAgency.solutionText} onChange={(e) => updateSection("seoAgency", "solutionText", e.target.value)} rows={6} placeholder="Solution text" />
          </Field>
          <Field label="Right Paragraph 1">
            <TextArea value={pageData.seoAgency.rightParagraph1 || ""} onChange={(e) => updateSection("seoAgency", "rightParagraph1", e.target.value)} rows={6} placeholder="Right side paragraph 1" />
          </Field>
          <Field label="Right Paragraph 2">
            <TextArea value={pageData.seoAgency.rightParagraph2 || ""} onChange={(e) => updateSection("seoAgency", "rightParagraph2", e.target.value)} rows={6} placeholder="Right side paragraph 2" />
          </Field>
        </Section>

        <Section title="Discover Services Section" open={openSection === "discover"} onToggle={() => toggle("discover")}>
          <Field label="Heading">
            <TextInput value={pageData.discover.heading} onChange={(e) => updateSection("discover", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.discover.description} onChange={(e) => updateSection("discover", "description", e.target.value)} rows={6} placeholder="Section paragraph" />
          </Field>
        </Section>

        <Section title="Services Cards" open={openSection === "services"} onToggle={() => toggle("services")}>
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
            <TextArea value={pageData.dominate.description} onChange={(e) => updateSection("dominate", "description", e.target.value)} rows={6} placeholder="Section description" />
          </Field>
          <LeadForm
            title="Help Cards"
            addLabel="Add Card"
            items={pageData.dominate.cards}
            onChange={(next) => updateSection("dominate", "cards", next)}
            fields={[
              { name: "icon", label: "Card Icon", type: "image" },
              { name: "title", label: "Card Title", type: "text", placeholder: "Title", required: true },
              { name: "desc", label: "Card Description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Why Business Section" open={openSection === "whyBusiness"} onToggle={() => toggle("whyBusiness")}>
          <Field label="Heading">
            <TextInput value={pageData.whyBusiness.heading} onChange={(e) => updateSection("whyBusiness", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.whyBusiness.description} onChange={(e) => updateSection("whyBusiness", "description", e.target.value)} rows={8} placeholder="Section description" />
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

        <Section title="FAQ Section" open={openSection === "faq"} onToggle={() => toggle("faq")}>
          <LeadForm
            title="FAQ Items"
            addLabel="Add FAQ"
            items={pageData.faq}
            onChange={(next) => updateArray("faq", next)}
            fields={[
              { name: "question", label: "FAQ Question", type: "text", placeholder: "Question", required: true },
              { name: "answer", label: "FAQ Answer", type: "textarea" },
            ]}
          />
        </Section>

        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
