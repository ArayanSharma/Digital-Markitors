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
  CardListHeader,
  RemoveBtn,
  ImageInput,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "hospitality";

const initialData = {
  hero: {
    title: "Hospitality SEO Agency That Drives Traffic, Trust, and Conversions for Hotel & Restaurant",
    description: "To succeed in business, you first need to succeed in search results. Our digital marketing services connect you with your customers' journey from end to end – from discovery to retention.",
    backgroundImage: "",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/services" },
  },
  about: {
    heading: "Best Healthcare SEO Company",
    body: "Digicore Inc. is a 360 digital marketing agency in Delhi that is dedicated to helping brands develop, engage, and lead, while also supporting the success of your business. Over the years, we've been at the forefront of driving digital transformation through creativity, strategy, and technology to meet our clients' impactful requirements. We offer comprehensive services that include SEO, SMM, PPC, ORM, Social Listening, Content Strategy, Website Designing, Web Development, Influencer Marketing, and more to help brands create, use technology, and make data-based decisions to achieve an opportunity to thrive. As digital behaviour continues to evolve, the way users search and discover brands has also transformed, and staying visible everywhere has become essential.",
  },
  visibility: {
    heading: "Lead Every Search with Delhi's Most Trusted SEO Agency",
    paragraph1: "AI has brought a lot of change in the way people search, discover, and buy. However, with it, the need to strengthen visibility has increased. Today, ranking should not be only about Google; it should be about visibility wherever audiences are looking—like Google, Instagram, YouTube, LinkedIn, marketplaces, or even AI-generated results.",
    paragraph2: "From Google, Instagram and YouTube to marketplaces like Amazon and Flipkart, consumers are searching everywhere, and that's why it is important for your brand to be visible everywhere.",
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
    description: "Digicore Inc. is a 360 digital marketing agency in Delhi that is dedicated to helping brands develop, engage, and lead, while also supporting the success of your business. Over the years, we've been at the forefront of driving digital transformation through creativity, strategy, and technology to meet our clients' impactful requirements.",
    problemTitle: "The Problem",
    problemText: "AI has brought a lot of change in the way people search, discover, and buy. However, with it, the need to strengthen visibility has increased.",
    solutionTitle: "The Solution",
    solutionText: "From Google, Instagram and YouTube to marketplaces like Amazon and Flipkart, consumers are searching everywhere, and that's why it is important for your brand to be visible everywhere.",
    rightText1:
      "AI has brought a lot of change in the way people search, discover, and buy. However, with it, the need to strengthen visibility has increased. Today, ranking should not be only about Google; it should be about visibility wherever audiences are looking—like Google, Instagram, YouTube, LinkedIn, marketplaces, or even AI-generated results.",
    rightText2:
      "From Google, Instagram and YouTube to markeplaces like Amazon and Flipkart, consumers are searching everywhere, and that's why it is important for your brand to be visible everywhere. As we see Gen Z discovering brands first on social media and AI reshaping how people find and evaluate products, belonging to the future means that your brand is visible in the moment—wherever your consumer is.",
  },
  discover: {
    heading: "Hospitality SEO Services",
    description: "With the customized level of optimization, scope of improving the online visibility, and the efforts required to cater to industry-specific objectives, Digicore Inc. plans SEO services. From boosting the conversion and clickthrough rates to driving potential customers through organic traffic, our Hospitality SEO services deliver the measurable results backed by detailed report.",
  },
  services: [
    { id: uid(), icon: "", title: "SEO Audits", description: "The site health, performance, and structure are analyses to identify the scope of optimization & improvement." },
    { id: uid(), icon: "", title: "Hospitality SEO Strategy Development", description: "The long-term SEO plans of Hospitality businesses according to their objectives, complex sales funnels, and buyer personas are tailored." },
    { id: uid(), icon: "", title: "Competitor Analysis", description: "The search visibility and content issues of competitors are analysed to formulate a strategic SEO plan" },
    { id: uid(), icon: "", title: "Keyword Research & Mapping", description: "The long-tail, high-intent, and industry-specific keywords used by decision-makers are identified." },
    { id: uid(), icon: "", title: "Content Optimization", description: "The SEO-friendly content of website is created or updated to improve relevance and rankings of the business." },
    { id: uid(), icon: "", title: "Hospitality Content Strategy & Creation", description: "A variety of content including whitepapers, blogs, guides, and case studies are created in accordance to buyer's search intent." },
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
      { id: uid(), title: "Marketing companies", description: "We are currently rated Top 5 App Marketing Companies in 2019 by Clutch.co" },
      { id: uid(), title: "SEO and PPC", description: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review." },
      { id: uid(), title: "Google Premier Partner", description: "We are a Google Premier Partner since 2017. This means we're are one of Top 50 PPC Companies in India from 4000 odd Digital Marketing agencies that have partnered with Google." },
      { id: uid(), title: "Search engine optimization", description: "Our SEO professionals have decades of experience providing results to clients and sound knowledge of the latest search engine optimization trends." },
    ],
  },
  video: {
    title: "Hospitality SEO drives clients/guests to your website through search results.",
    url: "https://www.youtube.com/embed/RugY9uuIJhY",
  },
  dominate: {
    heading: "How We Grow Your E-commerce Sales & Revenue",
    description: "Since we Live 'Digital', Think 'Digital', Breathe 'Digital', and Understand 'Digital', each of our digital marketing solution is designed around a few yet important key elements or we better call them 'building blocks' for the digital business plan of our clients. We evaluate things and customize our solutions keeping your business goals, the current stage of the digital presence, and competitive landscape in mind. With our creative and result-oriented solutions, we ensure that you will:",
    cards: [
      { id: uid(), icon: "", title: "Get More Leads", desc: "We ensure your business get more and more leads through our expertly managed digital marketing services" },
      { id: uid(), icon: "", title: "Make More Sales", desc: "We help you convert maximum possible leads into sales and grow your business faster" },
      { id: uid(), icon: "", title: "Build Brand Awareness", desc: "We help your brand gain strong recognition across digital platforms globally" },
      { id: uid(), icon: "", title: "Upskill Your Team", desc: "Improve your team capabilities with advanced marketing strategies and guidance" },
    ],
  },
  whyBusiness: {
    heading: "Why business choose Digicore Inc.",
    description: "Digicore Inc., the leading digital marketing agency in Delhi extends assistance and 360 degree digital marketing strategies to all sized businesses. We have mastered industry wise excellence to become the stellar company committed towards brand building. We have adopted effective, innovative and relevant approach implement digital marketing plan. With problem solving and result-driven methods, we help clients attain their goal. Here are some of the key features of our services which make us the trusted digital marketing company in Delhi, India.",
    image: "",
    features: [
      { id: uid(), text: "Provide your business with a dedicated account manager and team" },
      { id: uid(), text: "Guidance for the betterment of startup!" },
      { id: uid(), text: "Deliver transparent bi-monthly reports to your team" },
      { id: uid(), text: "Build result-oriented customized strategies" },
      { id: uid(), text: "Save time and money by availing our services" },
      { id: uid(), text: "Get a comprehensive solution for 360° digital marketing strategy" },
      { id: uid(), text: "Expert guidance for strengthening brand presence of a startup!" },
      { id: uid(), text: "Increase search friendliness of your business with SEO services!" },
    ],
  },
  faqHeading: "FAQ",
  faq: [
    { id: uid(), question: "How long will it take for my website to start ranking on Google?", answer: "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality." },
  ],
};

export default function ADHospitality() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("hero");
  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [pageData, setPageData] = useState(initialData);

  const updateSection = (section, key, value) =>
    setPageData((current) => ({ ...current, [section]: { ...current[section], [key]: value } }));

  const updateArrayItem = (arrKey, id, key, value) =>
    setPageData((current) => ({
      ...current,
      [arrKey]: current[arrKey].map((item) => (item.id === id ? { ...item, [key]: value } : item)),
    }));

  const addArrayItem = (arrKey, empty) =>
    setPageData((current) => ({ ...current, [arrKey]: [...current[arrKey], { id: uid(), ...empty }] }));

  const removeArrayItem = (arrKey, id) =>
    setPageData((current) => ({ ...current, [arrKey]: current[arrKey].filter((item) => item.id !== id) }));

  /* ---------- Load existing content ---------- */
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

  /* ---------- Save ---------- */
  const handleSave = async (e) => {
    e?.preventDefault();
    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, pageData);
      setStatus("saved");
      showToast("Hospitality page saved successfully");
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
          <h1 className="text-xl font-bold text-brand-primary">Hospitality Page — Admin</h1>
        </div>
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        {/* HERO */}
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="1. Hero / Banner" open={openSection === "hero"} onToggle={() => toggle("hero")}>
          <Field label="Title">
            <TextInput value={pageData.hero.title} onChange={(e) => updateSection("hero", "title", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.hero.description} onChange={(e) => updateSection("hero", "description", e.target.value)} />
          </Field>
          <ImageInput label="Background Image" value={pageData.hero.backgroundImage} onChange={(e) => updateSection("hero", "backgroundImage", e.target.value)} />
          <ButtonFields label="Primary Button" value={pageData.hero.primaryBtn} onChange={(v) => updateSection("hero", "primaryBtn", v)} />
          <ButtonFields label="Secondary Button" value={pageData.hero.secondaryBtn} onChange={(v) => updateSection("hero", "secondaryBtn", v)} />
        </Section>

        {/* ABOUT */}
        <Section title="2. About Section" open={openSection === "about"} onToggle={() => toggle("about")}>
          <Field label="Heading">
            <TextInput value={pageData.about.heading} onChange={(e) => updateSection("about", "heading", e.target.value)} />
          </Field>
          <Field label="Body Text">
            <TextArea rows={8} value={pageData.about.body} onChange={(e) => updateSection("about", "body", e.target.value)} />
          </Field>
        </Section>

        {/* VISIBILITY */}
        <Section title="3. Visibility Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
          <Field label="Heading">
            <TextInput value={pageData.visibility.heading} onChange={(e) => updateSection("visibility", "heading", e.target.value)} />
          </Field>
          <Field label="Paragraph 1">
            <TextArea rows={6} value={pageData.visibility.paragraph1} onChange={(e) => updateSection("visibility", "paragraph1", e.target.value)} />
          </Field>
          <Field label="Paragraph 2">
            <TextArea rows={6} value={pageData.visibility.paragraph2} onChange={(e) => updateSection("visibility", "paragraph2", e.target.value)} />
          </Field>
          <ImageInput label="Right-side Image" value={pageData.visibility.image} onChange={(e) => updateSection("visibility", "image", e.target.value)} />
        </Section>

        {/* PERFORMANCE */}
        <Section title="4. Performance Section (Track/Analyze/Scale/Repeat)" open={openSection === "performance"} onToggle={() => toggle("performance")}>
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
          <ImageInput label="Performance Image" value={pageData.performance.image} onChange={(e) => updateSection("performance", "image", e.target.value)} />
        </Section>

        {/* SEO AGENCY */}
        <Section title="5. SEO Agency Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
          <Field label="Heading">
            <TextInput value={pageData.seoAgency.heading} onChange={(e) => updateSection("seoAgency", "heading", e.target.value)} />
          </Field>
          <Field label="Short Description">
            <TextArea rows={6} value={pageData.seoAgency.description} onChange={(e) => updateSection("seoAgency", "description", e.target.value)} />
          </Field>
          <Field label="Problem Title">
            <TextInput value={pageData.seoAgency.problemTitle} onChange={(e) => updateSection("seoAgency", "problemTitle", e.target.value)} />
          </Field>
          <Field label="Problem Text">
            <TextArea rows={5} value={pageData.seoAgency.problemText} onChange={(e) => updateSection("seoAgency", "problemText", e.target.value)} />
          </Field>
          <Field label="Solution Title">
            <TextInput value={pageData.seoAgency.solutionTitle} onChange={(e) => updateSection("seoAgency", "solutionTitle", e.target.value)} />
          </Field>
          <Field label="Solution Text">
            <TextArea rows={5} value={pageData.seoAgency.solutionText} onChange={(e) => updateSection("seoAgency", "solutionText", e.target.value)} />
          </Field>
          <Field label="Right paragraph 1">
            <TextArea rows={5} value={pageData.seoAgency.rightText1} onChange={(e) => updateSection("seoAgency", "rightText1", e.target.value)} />
          </Field>
          <Field label="Right paragraph 2">
            <TextArea rows={5} value={pageData.seoAgency.rightText2} onChange={(e) => updateSection("seoAgency", "rightText2", e.target.value)} />
          </Field>
        </Section>

        {/* DISCOVER */}
        <Section title="6. Discover Services Section" open={openSection === "discover"} onToggle={() => toggle("discover")}>
          <Field label="Heading">
            <TextInput value={pageData.discover.heading} onChange={(e) => updateSection("discover", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.discover.description} onChange={(e) => updateSection("discover", "description", e.target.value)} />
          </Field>
        </Section>

        {/* SERVICES */}
        <Section title="7. Services Cards" open={openSection === "services"} onToggle={() => toggle("services")}>
          <LeadForm
            title="Services"
            addLabel="Add Service"
            items={pageData.services}
            onChange={(next) => setPageData((current) => ({ ...current, services: next }))}
            fields={[
              { name: "icon", label: "Icon", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea" },
            ]}
          />
        </Section>

        {/* WHY CHOOSE */}
        <Section title="8. Why Choose Section" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
          <Field label="Heading">
            <TextInput value={pageData.whyChoose.heading} onChange={(e) => updateSection("whyChoose", "heading", e.target.value)} />
          </Field>
          <ImageInput label="Background Image" value={pageData.whyChoose.backgroundImage} onChange={(e) => updateSection("whyChoose", "backgroundImage", e.target.value)} />
          <ButtonFields label="First Button" value={pageData.whyChoose.button1} onChange={(v) => updateSection("whyChoose", "button1", v)} />
          <ButtonFields label="Second Button" value={pageData.whyChoose.button2} onChange={(v) => updateSection("whyChoose", "button2", v)} />
        </Section>

        {/* IMPACT / TIMELINE */}
        <Section title="9. Impact / Timeline Section" open={openSection === "impact"} onToggle={() => toggle("impact")}>
          <ImageInput label="Impact Image" value={pageData.impact.image} onChange={(e) => updateSection("impact", "image", e.target.value)} />
          <LeadForm
            title="Timeline Steps"
            addLabel="Add Step"
            items={pageData.impact.timeline}
            onChange={(next) => updateSection("impact", "timeline", next)}
            fields={[
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "text" },
            ]}
          />
        </Section>

        {/* VIDEO */}
        <Section title="12. Video Section" open={openSection === "video"} onToggle={() => toggle("video")}>
          <Field label="Video Title">
            <TextInput value={pageData.video.title || ""} onChange={(e) => updateSection("video", "title", e.target.value)} placeholder="Video heading / title" />
          </Field>
          <Field label="Video URL">
            <TextInput value={pageData.video.url} onChange={(e) => updateSection("video", "url", e.target.value)} placeholder="YouTube embed URL or page video URL" />
          </Field>
        </Section>

        {/* DOMINATE / HOW WE GROW */}
        <Section title="13. How We Grow Section" open={openSection === "dominate"} onToggle={() => toggle("dominate")}>
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
            onChange={(next) => updateSection("dominate", "cards", next)}
            fields={[
              { name: "icon", label: "Icon", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "desc", label: "Description", type: "textarea" },
            ]}
          />
        </Section>

        {/* WHY BUSINESS */}
        <Section title="14. Why Business Section" open={openSection === "whyBusiness"} onToggle={() => toggle("whyBusiness")}>
          <Field label="Heading">
            <TextInput value={pageData.whyBusiness.heading} onChange={(e) => updateSection("whyBusiness", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={8} value={pageData.whyBusiness.description} onChange={(e) => updateSection("whyBusiness", "description", e.target.value)} />
          </Field>
          <ImageInput label="Section Image" value={pageData.whyBusiness.image} onChange={(e) => updateSection("whyBusiness", "image", e.target.value)} />
          <LeadForm
            title="Feature Bullets"
            addLabel="Add Bullet"
            items={pageData.whyBusiness.features}
            onChange={(next) => updateSection("whyBusiness", "features", next)}
            fields={[{ name: "text", label: "Text", type: "text", required: true }]}
          />
        </Section>

        {/* FAQ */}
        <Section title="15. FAQ Section" open={openSection === "faq"} onToggle={() => toggle("faq")}>
          <Field label="FAQ Heading">
            <TextInput value={pageData.faqHeading} onChange={(e) => setPageData((current) => ({ ...current, faqHeading: e.target.value }))} />
          </Field>
          <LeadForm
            title="FAQ Items"
            addLabel="Add FAQ"
            items={pageData.faq}
            onChange={(next) => setPageData((current) => ({ ...current, faq: next }))}
            fields={[
              { name: "question", label: "Question", type: "text", required: true },
              { name: "answer", label: "Answer", type: "textarea", rows: 3 },
            ]}
          />
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
