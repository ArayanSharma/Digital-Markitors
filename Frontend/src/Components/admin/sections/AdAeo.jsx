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

const PAGE_SLUG = "Aeo";

const initialData = {
  banner: {
    title: "AEO SEO Agency That Improve visibility, Traffic, and Conversion",
    description: "Being the best SEO company in Delhi NCR – Digicore Inc. integrates AI-powered solutions to improve the visibility of brands in AI-generated search results through best AEO SEO practices.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/seo-services" },
    backgroundImage: "",
  },
  about: {
    heading: "AEO SEO AGENCY FOR AIO",
    body: "At Digicore Inc., we emphasize on the growing requirements of digital marketing. To address the queries of users directly, our AEO SEO services are aimed at improving the search visibility of websites. Be it the structured content, informative snippet, summaries available on Google or AI-powered platforms, the whole idea of AEO is to provide direct answers to the users. However, it is important for the search engine to interpret the optimized information precisely. This is where the expertise of Digicore Inc. helps clients in improving the quality of answers shared online. We ensure that the top AEO SEO services boost the quality of structured answers, provide content clarity and thereby, improving the credibility of the brand.",
  },
  visibility: {
    heading: "Stay on top in the search results with AEO SEO Agency",
    body: "With the rapidly evolving changes in the digital marketing segment, AI SEO practices add clarity to the search results. We blend our decade’s excellence and the new-age AI standards to improve the visibility of website on the multiple search platforms and AI websites. We constantly help our clients to connect with the potential customers by interpreting their queries through exact information. Apart from the traditional SEO services, we are integrating the power of AI to drive conversion efficiently. Being the top AEO SEO agency in Delhi, Digicore Inc. focuses on consistently improving the brand’s ranking by understanding the query of users and optimizing the search results, accordingly. Our organic search results are not limited to multiple leads, instead, focused and result-driven approach of AEO services are offered to the clients. In short, knowing what customers are looking for in your brand is clearly optimized through diverse AEO services.",
    image: "",
  },

  video: {
    title: "AEO SEO optimizes your brand's presence in conversational answer engines.",
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
    heading: "Why is AEO SEO necessary for all-sized businesses?",
    description: "Digicore Inc. is a leading SEO company in Delhi, NCR. We help brands in their journey from being invisible to become unmissable. We deliver AI-powered SEO strategies that help brands lead the market and stay ahead in a constantly evolving digital landscape.",
    problemTitle: "The Problem",
    problemText: "Most of the businesses often face challenges in improving brand’s visibility in AI-search results. The need to provide direct answers to users relying on AI-platforms like ChatGPT, Gemini or Perplexity, for brand information.",
    solutionTitle: "The Solution",
    solutionText: "We provide customized Answer Engine Optimization (AEO) services by structuring content for commonly asked questions. We focus on direct answers and authoritative signals to improve the visibility and trust factor of brand in AI-generated responses. Digicore Inc. follows updated algorithms, user behaviour shifts and AI-search optimization to improve brand’s visibility. We help brands by implementing the well-tailored AEO SEO plan. Our experts also ensure the brand is discoverable on AI-search websites and applications.",
    rightParagraph1: "Our AEO SEO service targets long-term visibility to improve content clarity and credibility. All our strategies are backed by real-time search behavior, performance insights and structured content. We focus on boosting your brand's potential and prospects for AI-search visibility.",
    rightParagraph2: "Our top AEO SEO services are aligned with the client’s business growth goals of different industries. Apart from the excellent and consistent record in serving all-sized businesses, we also integrate the power of AI. We complement AEO SEO practices with our unmatched and ethical digital marketing services, backed by insights, analytics, and performance data. We emphasize on the sustainable growth of brands by aligning SEO with AEO and GEO strategies. Our data-driven approach improves brand’s search visibility in AI-generated summaries, comparisons and answers.",
  },
  discover: {
    heading: "AEO SEO Services",
    description: "At Digicore Inc., we don’t just offer SEO services—we become your trusted digital growth partner. As pioneers in the digital marketing landscape, we’ve been empowering brands with our AI-powered, data-driven SEO services and helping them connect and engage the right audience.",
  },
  services: [
    {
      icon: "",
      title: "Understand AI Search",
      description: "After auditing the website’s visibility on AI platforms, we create informative, yet problem-solving content with improved citations while checking the competitors’ positioning to deliver AI optimized search results.",
    },
    {
      icon: "",
      title: "Question-Based Content Optimization",
      description: "Unlike the traditional content focusing on the business information, our AEO SEO experts cover possible queries asked by the users. Depending on the nature of business, we figure out how the website should cover the relevant business details related to the localized questions.",
    },
    {
      icon: "",
      title: "Featured Snippet Optimization",
      description: "We prepare featured snippets under 50 words, bulleted information, avoiding jargons, and maintaining conversational language to make AEO SEO services beneficial for business growth.",
    },
    {
      icon: "",
      title: "Schema & Structured Data Implementation",
      description: "Our strategically planned Schema Markup enables the search engine to interpret the business information accurately. This improves the quality of search results when product schema, FAQ and local target audience are worked over.",
    },
    {
      icon: "",
      title: "Voice Search Optimization",
      description: "Our best AEO SEO services ensure the content is optimized in conversational and engaging style to address voice-based queries. This improves brand’s visibility in AI search results and voice searches.",
    },
    {
      icon: "",
      title: "Technical SEO",
      description: "We resolve all the technical SEO issues of the website according to Google’s AI Parameters to index webpages and crawling properly.",
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
    description: "Digicore Inc. is a top AEO SEO agency in India known for its business excellence and result-driven approach. Our seasoned SEO professionals provide customized solutions aimed at improving online visibility of the brand. Apart from using the best-in-class and ethical SEO practices, we recommend the top AEO plan to our client based on their business requirements. We offer the best AEO SEO services by incorporating technical SEO, refining the content clarity, strategic link building and delivering the answer-focused content. We rely on data-driven and the other cutting-edge AEO SEO practices to make clients’ business growth consistent & efficient.",
    cards: [
      {
        icon: "",
        title: "Get More Leads",
        desc: "We ensure your business get more and more leads through our expertly managed digital marketing services.",
      },
      {
        icon: "",
        title: "Increased sales",
        desc: "We help you convert maximum possible leads into sales and grow your business faster.",
      },
      {
        icon: "",
        title: "Improved Brand Awareness",
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
    heading: "Why Choose Digicore Inc. as YOUR AEO SEO AGENCY",
    description: "Digital Marketing is a Delhi-based AEO SEO company that leverages the power of AI to provide comprehensive digital marketing services. We focus on the long-term SEO practices rather than assuring the short-term brand positioning or better rankings. Our data-driven and cutting-edge AEO SEO services ensure consistent higher visibility in the search results and on AI platforms. Our 360-degree search optimization helps brands in connecting with their audience irrespective of the diverse platforms used. From Google to social media, AI-search applications to online marketplaces, we blend best AEO SEO strategies and industry-wise excellence to enhance the visibility of business. Our transparent and sure-shot search optimization practices have helped us in gaining the trust of our clients. The list of reasons that contribute to our credibility and prominence in the digital marketing landscape include:",
    image: "",
    features: [
      { text: "Seasoned SEO specialists with extensive experience customize the SEO solutions according to the clients’ business requirements." },
      { text: "We ensure the measurable results are blended with the latest SEO practices to optimally improve brand’s visibility." },
      { text: "Our transparency, clarity and goal-focused approach keeps the clients updated through data-driven report of AEO SEO progress." },
      { text: "We ensure result-driven and customized AEO SEO services to efficiently address the business goals." },
      { text: "Our high-quality keyword research and answer-focused content optimization makes us the reliable AEO SEO experts." },
      { text: "We serve diverse industry while targeting the competitors positioning to improve the visibility of brand through AI-powered SEO services." },
      { text: "Our AI-integrated SEO practices help businesses in improving trust-factor, higher ranks and prominent authority and consistent business growth." },
    ],
  },
  faq: [
    {
      question: "What is Aeo, and why does my business need it now?",
      answer: "The time a website takes to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include your industry competition, SEO efforts and content quality.",
    },
    {
      question: "If my website already ranks on Google, why should I invest in Aeo?",
      answer: "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality traffic and convert it into lead. In addition, we keep on testing our keywords and optimize them according to the market scenario and Google trends so as to ensure your rankings on online platforms and visibility on social media handles stays consistently high.",
    },
    {
      question: "How long does it take to see results from Aeo SEO services?",
      answer: "Yes, we have all sort of SEO payment plans. However, to understand our plans, you are advised to connect with us via email or phone. Our experts will first understand your business, digital marketing goals and challenges that you are facing to curate an appropriate payment plan according to your business needs and budget.",
    },
    {
      question: "Is Aeo SEO suitable for small and mid-sized businesses?",
      answer: "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    },
    {
      question: "Can Aeo actually generate leads, or is it only for visibility?",
      answer: "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    },
    {
      question: "How does Digital Makitors track Aeo performance?",
      answer: "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    },
    {
      question: "Is Aeo SEO effective for service-based businesses like agencies or consultants?",
      answer: "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver comprehensive digital solutions and help you achieve unforgettable outcomes.",
    },
  ],
};

export default function AdAeo() {
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
      showToast("AEO page saved successfully");
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
        <PageHeader title="AEO Page Content - Admin" description="Edit all AEO page sections from the admin panel." status={status} />

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
            <TextArea value={pageData.about.body} onChange={(e) => updateSection("about", "body", e.target.value)} rows={8} placeholder="About body" />
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
            <TextInput value={pageData.video.url} onChange={(e) => updateSection("video", "url", e.target.value)} placeholder="YouTube embed URL or video URL" />
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

        <Section title="AEO SEO Agency Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
          <Field label="Heading">
            <TextInput value={pageData.seoAgency.heading} onChange={(e) => updateSection("seoAgency", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.seoAgency.description} onChange={(e) => updateSection("seoAgency", "description", e.target.value)} rows={8} placeholder="Section description" />
          </Field>
          <Field label="Problem Title">
            <TextInput value={pageData.seoAgency.problemTitle} onChange={(e) => updateSection("seoAgency", "problemTitle", e.target.value)} placeholder="Problem title" />
          </Field>
          <Field label="Problem Text">
            <TextArea value={pageData.seoAgency.problemText} onChange={(e) => updateSection("seoAgency", "problemText", e.target.value)} rows={8} placeholder="Problem text" />
          </Field>
          <Field label="Solution Title">
            <TextInput value={pageData.seoAgency.solutionTitle} onChange={(e) => updateSection("seoAgency", "solutionTitle", e.target.value)} placeholder="Solution title" />
          </Field>
          <Field label="Solution Text">
            <TextArea value={pageData.seoAgency.solutionText} onChange={(e) => updateSection("seoAgency", "solutionText", e.target.value)} rows={10} placeholder="Solution text" />
          </Field>
          <Field label="Right Paragraph 1">
            <TextArea value={pageData.seoAgency.rightParagraph1 || ""} onChange={(e) => updateSection("seoAgency", "rightParagraph1", e.target.value)} rows={8} placeholder="Right side paragraph 1" />
          </Field>
          <Field label="Right Paragraph 2">
            <TextArea value={pageData.seoAgency.rightParagraph2 || ""} onChange={(e) => updateSection("seoAgency", "rightParagraph2", e.target.value)} rows={8} placeholder="Right side paragraph 2" />
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
              { name: "description", label: "Service Description", type: "textarea", rows: 4 },
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
              { name: "desc", label: "Card Description", type: "textarea", rows: 3 },
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
            fields={[{ name: "text", label: "Feature Text", type: "textarea", rows: 3 }]}
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
              { name: "answer", label: "FAQ Answer", type: "textarea", rows: 3 },
            ]}
          />
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
