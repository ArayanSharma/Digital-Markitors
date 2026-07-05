import { useState, useCallback, useEffect } from "react";
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

const PAGE_SLUG = "b2b";

const initialData = {
  hero: {
    title: "B2B SEO Agency That Drives Traffic, Trust, and Conversions",
    description:
      "To address the challenges of B2B SEO, it is ideal to partner with the trusted digital marketing agency. In order to incorporate AI-driven SEO practices, improve visibility in the digital landscape, the B2B SEO agency helps clients in attracting qualified leads. At Digicore Inc., we provide tailored experience of marketing to our clients by applying the expertise and new-age SEO practices.",
    backgroundImage: "",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/services" },
  },
  about: {
    heading: "B2B SEO Company",
    body:
      "At Digicore Inc., a trusted B2B SEO agency we believe in generating organic traffic for B2B companies. In this journey of consistent growth, we address all the complexities of the marketplace, and tailor the suitable solution for clients. Our seasoned SEO professionals focus on increasing the visibility, boost revenue, and generate leads through white-hat and ethical marketing practices. We ensure that our industry-wise practice for applying B2B SEO strategies along with technical SEO proficiency, content marketing integration, on-page & off-page SEO optimization to communication & collaboration altogether help us in speeding up the growth of business in the digital landscape. Our creative approach towards B2B SEO, marketing tools, and realistic data-driven solutions address the objectives of clients in a short span. In this AI-driven world, Digicore Inc. ensures technical audit, keyword research, B2B content marketing, link building and AI SEO services are aligned with the business objectives of clients. From Answer Search Optimization (AEO), Generative Engine Optimization (GEO), and ChatGPT optimization to other AI-personalization gets planned in our B2B SEO practices.",
  },
  visibility: {
    heading: "A client-centric and data-driven B2B SEO agency for all-sized businesses",
    paragraph1:
      "Digicore Inc. has attained a decade’s excellence in catering to the tailored objectives of B2B market. We understand the target audience of our clients, hence, formulate effective SEO strategies to optimize their website. We being with comprehensive technical audit to identify the scope of website optimization, thereby, improving the visibility of business in SERPs. Apart from the traditional search, the new-age voice search optimization, AI-friendly search results, local SEO, customized PPC campaigns and well-planned digital marketing services altogether help B2B businesses in staying ahead of their competitors. Our SEO specialists play a vital role in analyzing the performance of the marketing activities and prepare transparent report. This report is shared with the client to know the level of optimization, rank of website in SERPs, and the plan ahead for further optimization.",
    paragraph2:
      "Our proven strategies of B2B SEO services and digital marketing services improve the visibility of client’s website, thereby, enhancing the brand prominence. In fact, the other businesses can connect with the website that has been optimized according to products or services of their choice. At Digicore Inc. creates a practically-designed plan of B2B SEO to drive potential customers by focusing on content creation, landing page development, link profile management, technical website optimization, etc. As a result, the clients can engage businesses by clearly showcasing their products or services through optimized website ranked in the top search results. Being the trusted B2B SEO agency, we promise measurable growth results and provide detailed results in regular SEO report. We emphasize on improving leads, traffic, revenue for B2B, and sales to B2B businesses through our results-driven SEO services.",
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
    heading: "Why Do I Need a Healthcare SEO Agency",
    description:
      "Digicore Inc. is a 360 digital marketing agency in Delhi that is dedicated to helping brands develop, engage, and lead, while also supporting the success of your business. Over the years, we've been at the forefront of driving digital transformation through creativity, strategy, and technology to meet our clients' impactful requirements.",
    problemTitle: "The Problem",
    problemText:
      "AI has brought a lot of change in the way people search, discover, and buy. However, with it, the need to strengthen visibility has increased.",
    solutionTitle: "The Solution",
    solutionText:
      "From Google, Instagram and YouTube to marketplaces like Amazon and Flipkart, consumers are searching everywhere, and that's why it is important for your brand to be visible everywhere.",
    rightText1:
      "AI has brought a lot of change in the way people search, discover, and buy. However, with it, the need to strengthen visibility has increased. Today, ranking should not be only about Google; it should be about visibility wherever audiences are looking—like Google, Instagram, YouTube, LinkedIn, marketplaces, or even AI-generated results.",
    rightText2:
      "From Google, Instagram and YouTube to markeplaces like Amazon and Flipkart, consumers are searching everywhere, and that's why it is important for your brand to be visible everywhere. As we see Gen Z discovering brands first on social media and AI reshaping how people find and evaluate products, belonging to the future means that your brand is visible in the moment—wherever your consumer is.",
  },
  discover: {
    heading: "B2B SEO Services",
    description:
      "With the customized level of optimization, scope of improving the online visibility, and the efforts required to cater to industry-specific objectives, Digicore Inc. plans SEO services. From boosting the conversion and clickthrough rates to driving potential customers through organic traffic, our B2B SEO services deliver the measurable results backed by detailed report.",
  },
  services: [
    {
      icon: "",
      title: "SEO Audits",
      description:
        "The site health, performance, and structure are analyses to identify the scope of optimization & improvement.",
    },
    {
      icon: "",
      title: "B2B SEO Strategy Development",
      description:
        "The long-term SEO plans of B2B businesses according to their objectives, complex sales funnels, and buyer personas are tailored.",
    },
    {
      icon: "",
      title: "Competitor Analysis",
      description:
        "The search visibility and content issues of competitors are analysed to formulate a strategic SEO plan",
    },
    {
      icon: "",
      title: "Keyword Research & Mapping",
      description:
        "The long-tail, high-intent, and industry-specific keywords used by decision-makers are identified.",
    },
    {
      icon: "",
      title: "Content Optimization",
      description:
        "The SEO-friendly content of website is created or updated to improve relevance and rankings of the business.",
    },
    {
      icon: "",
      title: "B2B Content Strategy & Creation",
      description:
        "A variety of content including whitepapers, blogs, guides, and case studies are created in accordance to buyer’s search intent.",
    },
  ],
  whyChoose: {
    heading: "Scale Your Online Store with High-Performance E-commerce SEO.",
    backgroundImage: "",
    button1: { text: "+91 98188 88064", link: "tel:+919818888064" },
    button2: { text: "REQUEST A CALLBACK", link: "/contact" },
  },
  impact: {
    image: "",
    timeline: [
      {
        title: "Marketing companies",
        description:
          "We are currently rated Top 5 App Marketing Companies in 2019 by Clutch.co",
      },
      {
        title: "SEO and PPC",
        description:
          "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review.",
      },
      {
        title: "Google Premier Partner",
        description:
          "We are a Google Premier Partner since 2017. This means we’re are one of Top 50 PPC Companies in India from 4000 odd Digital Marketing agencies that have partnered with Google.",
      },
      {
        title: "Search engine optimization",
        description:
          "Our SEO professionals have decades of experience providing results to clients and sound knowledge of the latest search engine optimization trends.",
      },
    ],
  },
  caseStudies: [
    {
      title: "DHI International SEO Case Study: 190% Growth in Organic Traffic",
      image: "",
      descriptions: [
        "When DHI International partnered with us, the objective was clear – strengthen organic visibility in a highly competitive healthcare segment and drive consistent, high-intent patient enquiries through search. The website faced multiple technical SEO challenges, limited page-one keyword presence, and underutilised organic demand. Our focus was on fixing SEO foundations, improving keyword rankings, and building long-term authority across non-branded healthcare searches. Through a structured SEO strategy, DHI International achieved strong growth in organic traffic, keyword rankings, and search visibility – transforming SEO into a reliable lead-generation channel.",
      ],
      primaryBtn: { text: "View Case Study", link: "/case-study/dhi" },
      secondaryBtn: { text: "View Our Latest Work", link: "/work" },
    },
    {
      title: "Rizaries SEO Case Study: 613% Growth in Organic Traffic",
      image: "",
      descriptions: [
        "Rizaries is a Shopify-based home furnishings brand selling rugs, mats, and cushion covers. The objective was to increase organic traffic, improve keyword rankings, and scale SEO as a primary sales channel. At the start, organic visibility was limited and most keywords were ranking beyond the first page. We implemented a Shopify-focused SEO strategy to expand keyword coverage, strengthen collection and product page rankings, and capture high-intent non-branded searches. As a result, Rizaries saw a significant rise in organic traffic and page-one keyword dominance, helping organic search become a consistent revenue driver.",
      ],
      primaryBtn: { text: "View Case Study", link: "/case-study/rizaries" },
      secondaryBtn: { text: "View Our Latest Work", link: "/work" },
    },
    {
      title: "Moti Mahal Delux SEO Case Study: 100% Keyword Visibility",
      image: "",
      descriptions: [
        "When we started working on Moti Mahal Delux, none of the targeted franchise-related keywords were visible on Google. There were no dedicated SEO pages, limited content depth, and technical and on-page gaps restricting search visibility. Our team suggested new SEO-focused pages, created optimised content, fixed technical and on-page issues, and executed high-quality link building to strengthen authority. As a result, the website achieved 100% keyword visibility, with all targeted keywords now ranking on the first page of Google – most within the top 5 positions.",
      ],
      primaryBtn: { text: "View Case Study", link: "/case-study/moti-mahal" },
      secondaryBtn: { text: "View Our Latest Work", link: "/work" },
    },
  ],
  video: {
    title: "B2B SEO drives leads and revenue through organic search engine results.",
    url: "https://www.youtube.com/embed/RugY9uuIJhY",
  },
  dominate: {
    heading: "How We Grow Your E-commerce Sales & Revenue",
    description:
      "Since we Live ‘Digital’, Think ‘Digital’, Breathe ‘Digital’, and Understand ‘Digital’, each of our digital marketing solution is designed around a few yet important key elements or we better call them ‘building blocks’ for the digital business plan of our clients. We evaluate things and customize our solutions keeping your business goals, the current stage of the digital presence, and competitive landscape in mind. With our creative and result-oriented solutions, we ensure that you will:",
    cards: [
      {
        icon: "",
        title: "Get More Leads",
        desc: "We ensure your business get more and more leads through our expertly managed digital marketing services",
      },
      {
        icon: "",
        title: "Make More Sales",
        desc: "We help you convert maximum possible leads into sales and grow your business faster",
      },
      {
        icon: "",
        title: "Build Brand Awareness",
        desc: "We help your brand gain strong recognition across digital platforms globally",
      },
      {
        icon: "",
        title: "Upskill Your Team",
        desc: "Improve your team capabilities with advanced marketing strategies and guidance",
      },
    ],
  },
  whyBusiness: {
    heading: "Why choose Digicore Inc. for B2B SEO Services?",
    description:
      "Being the trusted B2B SEO agency, Digicore Inc. is familiar with the intricacies of the market faced by business owners in the B2B segment. To bridge the gap between potential buyers and business owner, we tailor the data-driven SEO strategies that not only boost the online visibility of the website, but also, increase its ROI. Besides, we focus on in-depth technical assessment of the client’s website to understand the scope of optimization and better positioning in the search engine. Whether you want to outrank your competitors, increase conversion rate or increase the quality of organic traffic, partnering with Digicore Inc. is the right choice.",
    image: "",
    features: [
      { text: "Expertise, industry-wise experience and proven excellence in offering customized SEO results" },
      { text: "Goal-oriented objectives related to the B2B industry, SEO strategies are realistically planned" },
      { text: "Comprehensive B2B SEO services aimed at increased traffic, better conversion rate & revenue are offered" },
      { text: "Dedicated SEO team provides regular report and proposes plan of action to improve website’s performance" },
      { text: "Search-friendliness of website is targeted through white-hat and AI-driven SEO practices" },
      { text: "Hassle-free accessibility to the new-age SEO practices offered at a competitive price" },
    ],
  },
  faqHeading: "FAQ",
  faq: [
    {
      question: "How long will it take for my website to start ranking on Google?",
      answer:
        "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
    },
    {
      question: "How many keywords will you work on as part of my SEO campaign?",
      answer:
        "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality traffic and convert it into lead. In addition, we keep on testing our keywords and optimize them according to the market scenario and Google trends so as to ensure your rankings on online platforms and visibility on social media handles stays consistently high.",
    },
  ],
};

export default function ADB2b() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("hero");
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

  /* ---------- Load existing content, merged over the defaults ---------- */
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
      setPageData((prev) => {
        const next = { ...prev };
        Object.keys(prev).forEach((key) => {
          if (d[key] !== undefined) next[key] = d[key];
        });
        return next;
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, [load]);

  /* ---------- Save ---------- */
  const handleSave = async (e) => {
    e?.preventDefault();
    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, pageData);
      setStatus("saved");
      showToast("B2B page saved successfully");
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
      
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-brand-primary">B2B Page Content — Admin</h1>
            <p className="text-sm text-text-muted">
              Edit the full B2B page structure, including addable lists for cards, case studies, timeline items, and FAQ.
            </p>
          </div>
        </div>
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="Hero / Banner Section" open={openSection === "hero"} onToggle={() => toggle("hero")}>
          <Field label="Title">
            <TextInput value={pageData.hero.title} onChange={(e) => updateSection("hero", "title", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.hero.description} onChange={(e) => updateSection("hero", "description", e.target.value)} />
          </Field>
          <ImageInput label="Background Image" value={pageData.hero.backgroundImage} onChange={(e) => updateSection("hero", "backgroundImage", e.target.value)} />
          <ButtonFields label="Primary Button" value={pageData.hero.primaryBtn} onChange={(value) => updateSection("hero", "primaryBtn", value)} />
          <ButtonFields label="Secondary Button" value={pageData.hero.secondaryBtn} onChange={(value) => updateSection("hero", "secondaryBtn", value)} />
        </Section>

        <Section title="About Section" open={openSection === "about"} onToggle={() => toggle("about")}>
          <Field label="Heading">
            <TextInput value={pageData.about.heading} onChange={(e) => updateSection("about", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={8} value={pageData.about.body} onChange={(e) => updateSection("about", "body", e.target.value)} />
          </Field>
        </Section>

        <Section title="Visibility Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
          <Field label="Heading">
            <TextInput value={pageData.visibility.heading} onChange={(e) => updateSection("visibility", "heading", e.target.value)} />
          </Field>
          <Field label="First paragraph">
            <TextArea rows={6} value={pageData.visibility.paragraph1} onChange={(e) => updateSection("visibility", "paragraph1", e.target.value)} />
          </Field>
          <Field label="Second paragraph">
            <TextArea rows={6} value={pageData.visibility.paragraph2} onChange={(e) => updateSection("visibility", "paragraph2", e.target.value)} />
          </Field>
          <ImageInput label="Right-side image" value={pageData.visibility.image} onChange={(e) => updateSection("visibility", "image", e.target.value)} />
        </Section>

        <Section title="Performance Section" open={openSection === "performance"} onToggle={() => toggle("performance")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Label 1">
              <TextInput value={pageData.performance.labelTrack} onChange={(e) => updateSection("performance", "labelTrack", e.target.value)} />
            </Field>
            <Field label="Label 2">
              <TextInput value={pageData.performance.labelAnalyze} onChange={(e) => updateSection("performance", "labelAnalyze", e.target.value)} />
            </Field>
            <Field label="Label 3">
              <TextInput value={pageData.performance.labelScale} onChange={(e) => updateSection("performance", "labelScale", e.target.value)} />
            </Field>
            <Field label="Label 4">
              <TextInput value={pageData.performance.labelRepeat} onChange={(e) => updateSection("performance", "labelRepeat", e.target.value)} />
            </Field>
          </div>
          <ImageInput label="Performance image" value={pageData.performance.image} onChange={(e) => updateSection("performance", "image", e.target.value)} />
        </Section>

        <Section title="SEO Agency Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
          <Field label="Heading">
            <TextInput value={pageData.seoAgency.heading} onChange={(e) => updateSection("seoAgency", "heading", e.target.value)} />
          </Field>
          <Field label="Short description">
            <TextArea rows={6} value={pageData.seoAgency.description} onChange={(e) => updateSection("seoAgency", "description", e.target.value)} />
          </Field>
          <Field label="Problem Title">
            <TextInput value={pageData.seoAgency.problemTitle} onChange={(e) => updateSection("seoAgency", "problemTitle", e.target.value)} />
          </Field>
          <Field label="Problem text">
            <TextArea rows={5} value={pageData.seoAgency.problemText} onChange={(e) => updateSection("seoAgency", "problemText", e.target.value)} />
          </Field>
          <Field label="Solution Title">
            <TextInput value={pageData.seoAgency.solutionTitle} onChange={(e) => updateSection("seoAgency", "solutionTitle", e.target.value)} />
          </Field>
          <Field label="Solution text">
            <TextArea rows={5} value={pageData.seoAgency.solutionText} onChange={(e) => updateSection("seoAgency", "solutionText", e.target.value)} />
          </Field>
          <Field label="Right paragraph 1">
            <TextArea rows={5} value={pageData.seoAgency.rightText1} onChange={(e) => updateSection("seoAgency", "rightText1", e.target.value)} />
          </Field>
          <Field label="Right paragraph 2">
            <TextArea rows={5} value={pageData.seoAgency.rightText2} onChange={(e) => updateSection("seoAgency", "rightText2", e.target.value)} />
          </Field>
        </Section>

        <Section title="Discover Services Section" open={openSection === "discover"} onToggle={() => toggle("discover")}>
          <Field label="Heading">
            <TextInput value={pageData.discover.heading} onChange={(e) => updateSection("discover", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.discover.description} onChange={(e) => updateSection("discover", "description", e.target.value)} />
          </Field>
        </Section>

        <Section title="Services Cards" open={openSection === "services"} onToggle={() => toggle("services")}>
          <LeadForm
            title="Service Cards"
            addLabel="Add Card"
            items={pageData.services}
            onChange={(next) => updateArray("services", next)}
            fields={[
              { name: "icon", label: "Icon URL", type: "image" },
              { name: "title", label: "Card title", placeholder: "Service title", required: true },
              { name: "description", label: "Card description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Why Choose Section" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
          <Field label="Heading">
            <TextInput value={pageData.whyChoose.heading} onChange={(e) => updateSection("whyChoose", "heading", e.target.value)} />
          </Field>
          <ImageInput label="Background image" value={pageData.whyChoose.backgroundImage} onChange={(e) => updateSection("whyChoose", "backgroundImage", e.target.value)} />
          <ButtonFields label="First button" value={pageData.whyChoose.button1} onChange={(value) => updateSection("whyChoose", "button1", value)} />
          <ButtonFields label="Second button" value={pageData.whyChoose.button2} onChange={(value) => updateSection("whyChoose", "button2", value)} />
        </Section>

        <Section title="Impact / Timeline Section" open={openSection === "impact"} onToggle={() => toggle("impact")}>
          <ImageInput label="Impact image" value={pageData.impact.image} onChange={(e) => updateSection("impact", "image", e.target.value)} />
          <LeadForm
            title="Timeline Items"
            addLabel="Add Step"
            items={pageData.impact.timeline}
            onChange={(next) => updateArray("impact", { ...pageData.impact, timeline: next })}
            fields={[
              { name: "title", label: "Timeline title", placeholder: "Item title", required: true },
              { name: "description", label: "Timeline description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Video Section" open={openSection === "video"} onToggle={() => toggle("video")}>
          <Field label="Video Title">
            <TextInput value={pageData.video.title || ""} onChange={(e) => updateSection("video", "title", e.target.value)} placeholder="Video heading / title" />
          </Field>
          <Field label="Video URL">
            <TextInput value={pageData.video.url} onChange={(e) => updateSection("video", "url", e.target.value)} placeholder="YouTube embed URL or page video URL" />
          </Field>
        </Section>

        <Section title="How We Grow Section" open={openSection === "dominate"} onToggle={() => toggle("dominate")}>
          <Field label="Heading">
            <TextInput value={pageData.dominate.heading} onChange={(e) => updateSection("dominate", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.dominate.description} onChange={(e) => updateSection("dominate", "description", e.target.value)} />
          </Field>
          <LeadForm
            title="Help Cards"
            addLabel="Add Card"
            items={pageData.dominate.cards}
            onChange={(next) => updateArray("dominate", { ...pageData.dominate, cards: next })}
            fields={[
              { name: "icon", label: "Icon URL", type: "image" },
              { name: "title", label: "Card title", placeholder: "Card title", required: true },
              { name: "desc", label: "Card description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Why Business Section" open={openSection === "whyBusiness"} onToggle={() => toggle("whyBusiness")}>
          <Field label="Heading">
            <TextInput value={pageData.whyBusiness.heading} onChange={(e) => updateSection("whyBusiness", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={8} value={pageData.whyBusiness.description} onChange={(e) => updateSection("whyBusiness", "description", e.target.value)} />
          </Field>
          <ImageInput label="Section image" value={pageData.whyBusiness.image} onChange={(e) => updateSection("whyBusiness", "image", e.target.value)} />
          <LeadForm
            title="Features"
            addLabel="Add Feature"
            items={pageData.whyBusiness.features}
            onChange={(next) => updateArray("whyBusiness", { ...pageData.whyBusiness, features: next })}
            fields={[{ name: "text", label: "Feature text", type: "textarea", required: true }]}
          />
        </Section>

        <Section title="FAQ Section" open={openSection === "faq"} onToggle={() => toggle("faq")}>
          <Field label="FAQ Heading">
            <TextInput value={pageData.faqHeading} onChange={(e) => updateArray("faqHeading", e.target.value)} />
          </Field>
          <LeadForm
            title="FAQ Items"
            addLabel="Add FAQ"
            items={pageData.faq}
            onChange={(next) => updateArray("faq", next)}
            fields={[
              { name: "question", label: "FAQ Question", placeholder: "Question", required: true },
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
