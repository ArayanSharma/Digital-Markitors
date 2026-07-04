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

const PAGE_SLUG = "ai-seo";

const initialData = {
  banner: {
    title: "SEO Agency in Delhi That Drives Traffic, Trust, and Conversions",
    description: "We are Digicore Inc – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing high intent commercial keywords for your business.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/seo-results" },
    backgroundImage: "",
  },
  about: {
    heading: "AI SEO That Drives Measurable Business Growth",
    body: "Digicore Inc. is the best AI SEO company in Delhi. We provide the most advanced AI SEO services and help businesses improve their brand visibility in AI-powered searches.",
  },
  visibility: {
    heading: "Lead Every Search with Delhi’s Most Trusted SEO Agency",
    body: "In this era of AI a lot has changed, including the way people search online. Modern consumers just don’t rely on single platform for searching brands. They search across multiple touchpoints, such as Google, social media, online marketplaces, video platforms and even AI-powered recommendations. Being visible everywhere is now more important than ever.",
    image: "",
  },
  video: {
    title: "AI SEO drives organic trust, search engine discoverability and conversions.",
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
    heading: "Why Do I Need an AI SEO Agency",
    description: "In this era where AI is ruling the search platforms being visible wherever your customers are looking for you have become more important than ever.",
    problemTitle: "The Problem",
    problemText: "Today, search is no longer just typed—it’s asked, suggested and predicted. Study reveals that over 70% of users use AI tools to conduct online search.",
    solutionTitle: "The Solution",
    solutionText: "AI SEO is the only solution to stay ahead, stay competitive and stay relevant in this era. Being visible across multiple platforms, including AI-powered recommendations is especially important when people are comparing options and making decisions.",
    rightParagraph1: "Digicore Inc. is a leading AI SEO company in Delhi, NCR, providing top-notch AI SEO Services to businesses.",
    rightParagraph2: "By combining human insight with smart AI, we make sure your brand is seen at the right time, on the right platform and with the right message—today and always!",
  },
  discover: {
    heading: "Our AI SEO Services",
    description: "SEO is not just limited to Google Search at Digicore Inc.. We help business unlock their brand’s full digital potential by using AI-powered strategies and help them connect, engage and inspire their audience the right way and at the right platform.",
  },
  services: [
    {
      icon: "",
      title: "AI SEO STRATEGY",
      description: "We offer customized SEO strategies to help businesses improve their online presence, attract high-quality, relevant traffic and leave a lasting impression.",
    },
    {
      icon: "",
      title: "AI SEARCH CONSULTANCY",
      description: "We provide premium AI Search Consultancy services designed to elevate your brand’s visibility, boost rankings, and attract the right audience from around the world.",
    },
    {
      icon: "",
      title: "GEO SEO",
      description: "GEO SEO is for those who wish to maximize their store visibility, attract high-intent shoppers across various platforms and improve their ROI.",
    },
  ],
  whyChoose: {
    heading: "Stop Guessing. Start Growing. Book Your Strategy Call Now.",
    backgroundImage: "",
    button1: { text: "+91 98188 88064", link: "tel:+919818888064" },
    button2: { text: "REQUEST A CALLBACK", link: "/contact" },
  },

  dominate: {
    heading: "How Can We Help You Grow",
    description: "Digicore Inc. is a leading AI SEO company in Delhi, NCR. We craft unique AI SEO strategies for each of our clients to help them grow and thrive in highly competitive AI-driven search.",
    cards: [
      {
        icon: "",
        title: "Get More Leads",
        desc: "We ensure your business get more and more leads through our expertly managed digital marketing services.",
      },
      {
        icon: "",
        title: "Make More Sales",
        desc: "We help you convert maximum possible leads into sales and grow your business faster.",
      },
      {
        icon: "",
        title: "Build Brand Awareness",
        desc: "We help your brand gain strong recognition across digital platforms globally.",
      },
      {
        icon: "",
        title: "Upskill Your Team",
        desc: "Improve your team capabilities with advanced marketing strategies and guidance.",
      },
    ],
  },
  whyBusiness: {
    heading: "Why Choose Digicore Inc. as YOUR AI SEO AGENCY",
    description: "Digicore Inc. is a leading AI-first digital marketing company in Delhi NCR. We offer an extensive range of digital marketing and SEO services, including AI SEO.",
    image: "",
    features: [
      { text: "We design future-ready strategies to ensure long-term visibility and relevance." },
      { text: "All our strategies are curated by our highly skilled and experienced AI SEO experts." },
      { text: "We believe in pure work – every decision is powered by real insights, analytics and performance data." },
      { text: "We ensure your brand shows up across AI platforms, social channels and marketplaces." },
      { text: "We design SEO strategies with today’s search in focus and tomorrow’s opportunities in sight." },
      { text: "We deliver results you can trust and clearly measure." },
    ],
  },
  industries: [
    {
      image: "",
      title: "Healthcare",
      desc: "We provide specialized digital marketing solutions to hospitals, clinics and other health institutions to help them build trust and grow their brand.",
      readMoreBtn: { text: "Read More", link: "/healthcare" },
    },
    {
      image: "",
      title: "E-Commerce",
      desc: "We help online retailers and marketplaces with robust strategies to elevate their online presence and turn casual browsers into loyal customers.",
      readMoreBtn: { text: "Read More", link: "/e-commerce" },
    },
    {
      image: "",
      title: "Travel",
      desc: "We offer a complete suite of digital marketing solutions for travel brands, helping them showcase their offerings in a unique way and drive bookings.",
      readMoreBtn: { text: "Read More", link: "/travel" },
    },
  ],
  faq: [
    {
      question: "What is AI SEO and how is it different from traditional SEO?",
      answer: "The time a website takes to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include your industry competition, SEO efforts and content quality.",
    },
  ],
};

export default function AdAiSeo() {
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
      showToast("AI SEO page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <PageHeader title="AI SEO Page Content - Admin" description="Edit all AI page sections from the admin panel." status={status} />
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

        <Section title="AI SEO Agency Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
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
            <TextArea value={pageData.seoAgency.rightParagraph1} onChange={(e) => updateSection("seoAgency", "rightParagraph1", e.target.value)} rows={5} placeholder="Right paragraph 1" />
          </Field>
          <Field label="Right Paragraph 2">
            <TextArea value={pageData.seoAgency.rightParagraph2} onChange={(e) => updateSection("seoAgency", "rightParagraph2", e.target.value)} rows={5} placeholder="Right paragraph 2" />
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
            title="Services"
            addLabel="Add Service"
            items={pageData.services}
            onChange={(next) => updateArray("services", next)}
            fields={[
              { name: "icon", label: "Service Icon", type: "image" },
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
            <TextArea value={pageData.dominate.description} onChange={(e) => updateSection("dominate", "description", e.target.value)} rows={6} placeholder="Section description" />
          </Field>
          <LeadForm
            title="Help Cards"
            addLabel="Add Card"
            items={pageData.dominate.cards}
            onChange={(next) => updateSection("dominate", "cards", next)}
            fields={[
              { name: "icon", label: "Card Icon", type: "image" },
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
            <TextArea value={pageData.whyBusiness.description} onChange={(e) => updateSection("whyBusiness", "description", e.target.value)} rows={8} placeholder="Section description" />
          </Field>
          <ImageInput label="Why Business Image" value={pageData.whyBusiness.image} onChange={(e) => updateSection("whyBusiness", "image", e.target.value)} />
          <LeadForm
            title="Features"
            addLabel="Add Feature"
            items={pageData.whyBusiness.features}
            onChange={(next) => updateSection("whyBusiness", "features", next)}
            fields={[{ name: "text", label: "Feature Text", type: "textarea", required: true }]}
          />
        </Section>

        <Section title="Industry Cards Section" open={openSection === "industries"} onToggle={() => toggle("industries")}>
          <LeadForm
            title="Industries"
            addLabel="Add Industry"
            items={pageData.industries}
            onChange={(next) => updateArray("industries", next)}
            fields={[
              { name: "image", label: "Industry Image", type: "image" },
              { name: "title", label: "Industry Title", type: "text", required: true },
              { name: "desc", label: "Industry Description", type: "textarea" },
              { name: "readMoreBtn", label: "Read More Button", type: "button" },
            ]}
          />
        </Section>

        <Section title="FAQ Section" open={openSection === "faq"} onToggle={() => toggle("faq")}>
          <LeadForm
            title="FAQs"
            addLabel="Add FAQ"
            items={pageData.faq}
            onChange={(next) => updateArray("faq", next)}
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
