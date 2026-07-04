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

const PAGE_SLUG = "seo-service";

const initialData = {
  banner: {
    title: "SEO Agency in Delhi That Drives Traffic, Trust, and Conversions",
    description: "We are Digicore Inc – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing high intent commercial keywords for your business.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/seo-results" },
    backgroundImage: "",
  },
  about: {
    heading: "Best SEO Company in Delhi NCR",
    body: "Digicore Inc is a leading SEO company in Delhi NCR, helping brands become unmissable on every online and social media platform. We offer end-to-end SEO solutions to ensure your brand doesn't just exist but it shines where it matters most.",
  },
  visibility: {
    heading: "Lead Every Search with Delhi's Most Trusted SEO Agency",
    body: "Search behaviour has changed dramatically! Consumers now search brands through multiple channels, including Google, social media platforms, marketplaces, video content and even AI-powered recommendations. To be visible everywhere is the need of this hour. Digicore Inc – the best SEO company in Delhi, NCR, deliver tailored SEO solutions fitting to your brand's need to ensure measurable outcomes. We build visibility that compounds over time.",
    image: "",
  },
  counters: [],
  video: {
    url: "https://www.youtube.com/embed/RugY9uuIJhY",
    title: "",
  },
  performance: {
    labelTrack: "TRACK",
    labelAnalyze: "ANALYZE",
    labelScale: "SCALE",
    labelRepeat: "REPEAT",
    image: "",
  },
  seoAgency: {
    heading: "WHY DO I NEED AN SEO AGENCY IN DELHI?",
    description: "In today's digital era, Delhi has become one of the most competitive markets, and it is very difficult for new businesses to visible organically, get clients and sales.",
    problemTitle: "The Problem",
    problemText: "Most businesses still rely only on traditional SEO, assuming it is enough to get visibility online. However, with AI-powered search engines like ChatGPT, Gemini, and Perplexity, users now receive direct answers instead of browsing multiple websites.",
    solutionTitle: "The Solution",
    solutionText: "SEO is the foundation that powers both AEO and GEO. When combined with structured content, clear answers, and strong authority signals, SEO helps your brand get recognized by AI engines.",
    rightParagraph1: "AI, ever-changing algorithms and shifting consumer buying behaviours are all redefining digital marketing in this era. To stay ahead, brands must adapt quickly, think strategically and remain visible across every channel.",
    rightParagraph2: "A forward-thinking SEO agency can help you keep up with the change and cut through the noise. Whether you're a startup looking to establish presence or an established brand aiming to scale, we can help you with unmatchable SEO strategies.",
  },
  discover: {
    heading: "SEO Services in Delhi",
    description: "At Digicore Inc., we don't just offer SEO services—we become your trusted digital growth partner. As pioneers in the digital marketing landscape, we've been empowering brands with our AI-powered, data-driven SEO services.",
  },
  services: [],
  whyChoose: {
    heading: "Stop Guessing. Start Growing. Book Your Strategy Call Now.",
    backgroundImage: "",
    button1: { text: "+91 98188 88064", link: "tel:+919818888064" },
    button2: { text: "REQUEST A CALLBACK", link: "/contact" },
  },
  impact: {
    image: "",
    timeline: [],
  },
  // industries and caseStudies removed per admin simplification
  dominate: {
    heading: "How Can We Help You Grow",
    description: "Digicore Inc. is a leading SEO agency in Delhi. We help businesses evolve by providing them with the best SEO strategies and solutions designed specifically to improve visibility.",
    cards: [],
  },
  whyBusiness: {
    heading: "Why Choose Digicore Inc AS YOUR SEO COMPANY IN DELHI",
    description: "Digicore Inc. is a leading SEO agency serving businesses across Delhi NCR, offering cost-effective SEO services for small, medium, and large businesses.",
    image: "",
    features: [],
  },
  faq: [],
};

export default function AdSeoService() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("banner");
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
    
    // Initialize empty arrays with defaults
    const ensureArrays = (data) => {
      if (!data.counters || !Array.isArray(data.counters) || data.counters.length === 0) {
        data.counters = [
          { id: uid(), value: 50, description: "of Indian shoppers check online before making an actual purchase." },
          { id: uid(), value: 52, description: "of Indian shoppers now start their product searches on Instagram, YouTube, or Amazon." },
          { id: uid(), value: 61, description: "of Indian users trust Google results for brands that shine on social media platforms." },
          { id: uid(), value: 44, description: "of young users turn to AI-generated overviews instead of scrolling through traditional search results." },
        ];
      }
      if (!data.services || !Array.isArray(data.services) || data.services.length === 0) {
        data.services = [
          { id: uid(), icon: "", title: "Enterprise SEO", description: "Offering tailored SEO strategies to help enterprises boost their online presence." },
          { id: uid(), icon: "", title: "Global SEO", description: "Helping brands rank higher in search engines globally." },
          { id: uid(), icon: "", title: "E-commerce SEO", description: "Helping online stores maximize visibility and drive sales." },
        ];
      }
      if (!data.impact?.timeline || !Array.isArray(data.impact?.timeline) || data.impact.timeline.length === 0) {
        data.impact = data.impact || {};
        data.impact.timeline = [
          { id: uid(), title: "Contact Us", description: "Reach out to us via email, phone or our website." },
          { id: uid(), title: "SEO and PPC", description: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review." },
          { id: uid(), title: "Share Your Goals", description: "Share your challenges and objectives." },
          { id: uid(), title: "Consultation", description: "Our experts will craft SEO strategies tailored to your needs." },
          { id: uid(), title: "Tailored Plan", description: "Get a customized plan with clear strategies and outcomes." },
          { id: uid(), title: "Outcome", description: "Achieve measurable results in record time." },
        ];
      }
      if (!data.dominate?.cards || !Array.isArray(data.dominate?.cards) || data.dominate.cards.length === 0) {
        data.dominate = data.dominate || {};
        data.dominate.cards = [
          { id: uid(), icon: "", title: "Get More Leads", desc: "We ensure your business get more and more leads." },
          { id: uid(), icon: "", title: "Make More Sales", desc: "We help you convert maximum possible leads into sales." },
          { id: uid(), icon: "", title: "Build Brand Awareness", desc: "We help your brand gain strong recognition." },
          { id: uid(), icon: "", title: "Upskill Your Team", desc: "Improve your team capabilities with advanced strategies." },
        ];
      }
      if (!data.whyBusiness?.features || !Array.isArray(data.whyBusiness?.features) || data.whyBusiness.features.length === 0) {
        data.whyBusiness = data.whyBusiness || {};
        data.whyBusiness.features = [
          { id: uid(), text: "All our SEO strategies are tailored by seasoned SEO specialists." },
          { id: uid(), text: "Growth-first mindset with measurable results." },
          { id: uid(), text: "Clear, transparent reporting system." },
          { id: uid(), text: "Result-oriented customized strategies." },
          { id: uid(), text: "Masters of keyword and intent-based content optimization." },
          { id: uid(), text: "Growth-driven, future-ready mindset." },
          { id: uid(), text: "Proven experience across multiple industries." },
          { id: uid(), text: "Help brands rank higher with long-term success." },
        ];
      }
      if (!data.faq || !Array.isArray(data.faq) || data.faq.length === 0) {
        data.faq = [
          { id: uid(), question: "How long will it take for my website to start ranking on Google?", answer: "3 – 6 months depending on competition, SEO efforts and content quality." },
        ];
      }
      return data;
    };
    
    if (d) {
      d = ensureArrays(d);
      setPageData((current) => ({ ...current, ...d }));
    } else {
      // Use initial data with defaults ensured
      const defaultData = ensureArrays({ ...initialData });
      setPageData(defaultData);
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
      showToast("SEO Service page saved successfully");
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    } finally {
      setTimeout(() => setStatus(""), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10">
      <form onSubmit={handleSave} className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-brand-primary">SEO Service Page — Admin</h1>
        </div>

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        {/* BANNER */}
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="1. Banner Section" open={openSection === "banner"} onToggle={() => toggle("banner")}>
          <Field label="Title">
            <TextInput value={pageData.banner.title} onChange={(e) => updateSection("banner", "title", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.banner.description} onChange={(e) => updateSection("banner", "description", e.target.value)} />
          </Field>
          <ImageInput label="Banner Background Image" value={pageData.banner.backgroundImage} onChange={(e) => updateSection("banner", "backgroundImage", e.target.value)} />
          <ButtonFields label="Primary Button" value={pageData.banner.primaryBtn} onChange={(v) => updateSection("banner", "primaryBtn", v)} />
          <ButtonFields label="Secondary Button" value={pageData.banner.secondaryBtn} onChange={(v) => updateSection("banner", "secondaryBtn", v)} />
        </Section>

        {/* ABOUT */}
        <Section title="2. About Section" open={openSection === "about"} onToggle={() => toggle("about")}>
          <Field label="Heading">
            <TextInput value={pageData.about.heading} onChange={(e) => updateSection("about", "heading", e.target.value)} />
          </Field>
          <Field label="Body">
            <TextArea rows={8} value={pageData.about.body} onChange={(e) => updateSection("about", "body", e.target.value)} />
          </Field>
        </Section>

        {/* VISIBILITY */}
        <Section title="3. Visibility Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
          <Field label="Heading">
            <TextInput value={pageData.visibility.heading} onChange={(e) => updateSection("visibility", "heading", e.target.value)} />
          </Field>
          <Field label="Body">
            <TextArea rows={8} value={pageData.visibility.body} onChange={(e) => updateSection("visibility", "body", e.target.value)} />
          </Field>
          <ImageInput label="Visibility Image" value={pageData.visibility.image} onChange={(e) => updateSection("visibility", "image", e.target.value)} />
        </Section>

        {/* COUNTERS */}
        <Section title="4. Counters Section" open={openSection === "counters"} onToggle={() => toggle("counters")}>
          <LeadForm
            title="Counter"
            addLabel="Add Counter"
            items={pageData.counters}
            onChange={(next) => setPageData((current) => ({ ...current, counters: next }))}
            fields={[
              { name: "value", label: "Counter Value", type: "number", required: true },
              { name: "description", label: "Description", type: "textarea", rows: 2 },
            ]}
            getCardTitle={(item) => `${item.value}%`}
            getCardSubtitle={(item) => item.description}
          />
        </Section>

        {/* VIDEO */}
        <Section title="5. Video Section" open={openSection === "video"} onToggle={() => toggle("video")}>
          <Field label="Video Title">
            <TextInput value={pageData.video.title} onChange={(e) => updateSection("video", "title", e.target.value)} placeholder="Optional video title" />
          </Field>
          <Field label="Video URL">
            <TextInput value={pageData.video.url} onChange={(e) => updateSection("video", "url", e.target.value)} placeholder="YouTube embed URL or video page URL" />
          </Field>
        </Section>

        {/* PERFORMANCE */}
        <Section title="6. Performance Section (Track/Analyze/Scale/Repeat)" open={openSection === "performance"} onToggle={() => toggle("performance")}>
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
        <Section title="7. SEO Agency Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
          <Field label="Heading">
            <TextInput value={pageData.seoAgency.heading} onChange={(e) => updateSection("seoAgency", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.seoAgency.description} onChange={(e) => updateSection("seoAgency", "description", e.target.value)} />
          </Field>
          <Field label="Problem Title">
            <TextInput value={pageData.seoAgency.problemTitle} onChange={(e) => updateSection("seoAgency", "problemTitle", e.target.value)} />
          </Field>
          <Field label="Problem Text">
            <TextArea rows={6} value={pageData.seoAgency.problemText} onChange={(e) => updateSection("seoAgency", "problemText", e.target.value)} />
          </Field>
          <Field label="Solution Title">
            <TextInput value={pageData.seoAgency.solutionTitle} onChange={(e) => updateSection("seoAgency", "solutionTitle", e.target.value)} />
          </Field>
          <Field label="Solution Text">
            <TextArea rows={6} value={pageData.seoAgency.solutionText} onChange={(e) => updateSection("seoAgency", "solutionText", e.target.value)} />
          </Field>
          <Field label="Right Paragraph 1">
            <TextArea rows={5} value={pageData.seoAgency.rightParagraph1} onChange={(e) => updateSection("seoAgency", "rightParagraph1", e.target.value)} />
          </Field>
          <Field label="Right Paragraph 2">
            <TextArea rows={5} value={pageData.seoAgency.rightParagraph2} onChange={(e) => updateSection("seoAgency", "rightParagraph2", e.target.value)} />
          </Field>
        </Section>

        {/* DISCOVER */}
        <Section title="8. Discover Services Section" open={openSection === "discover"} onToggle={() => toggle("discover")}>
          <Field label="Heading">
            <TextInput value={pageData.discover.heading} onChange={(e) => updateSection("discover", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.discover.description} onChange={(e) => updateSection("discover", "description", e.target.value)} />
          </Field>
        </Section>

        {/* SERVICES */}
        <Section title="9. Service Cards" open={openSection === "services"} onToggle={() => toggle("services")}>
          <LeadForm
            title="Service"
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
        <Section title="10. Why Choose Section" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
          <Field label="Heading">
            <TextInput value={pageData.whyChoose.heading} onChange={(e) => updateSection("whyChoose", "heading", e.target.value)} />
          </Field>
          <ImageInput label="Background Image" value={pageData.whyChoose.backgroundImage} onChange={(e) => updateSection("whyChoose", "backgroundImage", e.target.value)} />
          <ButtonFields label="Button 1" value={pageData.whyChoose.button1} onChange={(v) => updateSection("whyChoose", "button1", v)} />
          <ButtonFields label="Button 2" value={pageData.whyChoose.button2} onChange={(v) => updateSection("whyChoose", "button2", v)} />
        </Section>

        {/* IMPACT / TIMELINE */}
        <Section title="11. Impact Timeline Section" open={openSection === "impact"} onToggle={() => toggle("impact")}>
          <ImageInput label="Impact Section Image" value={pageData.impact.image} onChange={(e) => updateSection("impact", "image", e.target.value)} />
          <LeadForm
            title="Timeline Step"
            addLabel="Add Step"
            items={pageData.impact.timeline}
            onChange={(next) => updateSection("impact", "timeline", next)}
            fields={[
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "text" },
            ]}
          />
        </Section>

        {/* INDUSTRIES removed per request */}

        {/* CASE STUDIES removed per request */}

        {/* HOW CAN WE HELP YOU GROW */}
        <Section title="14. How Can We Help You Grow Section" open={openSection === "dominate"} onToggle={() => toggle("dominate")}>
          <Field label="Heading">
            <TextInput value={pageData.dominate.heading} onChange={(e) => updateSection("dominate", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.dominate.description} onChange={(e) => updateSection("dominate", "description", e.target.value)} />
          </Field>
          <LeadForm
            title="Help Card"
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
        <Section title="15. Why Business Section" open={openSection === "whyBusiness"} onToggle={() => toggle("whyBusiness")}>
          <Field label="Heading">
            <TextInput value={pageData.whyBusiness.heading} onChange={(e) => updateSection("whyBusiness", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={8} value={pageData.whyBusiness.description} onChange={(e) => updateSection("whyBusiness", "description", e.target.value)} />
          </Field>
          <ImageInput label="Why Business Image" value={pageData.whyBusiness.image} onChange={(e) => updateSection("whyBusiness", "image", e.target.value)} />
          <LeadForm
            title="Feature Bullet"
            addLabel="Add Feature"
            items={pageData.whyBusiness.features}
            onChange={(next) => updateSection("whyBusiness", "features", next)}
            fields={[{ name: "text", label: "Text", type: "textarea", required: true }]}
          />
        </Section>

        {/* FAQ */}
        <Section title="16. FAQ Section" open={openSection === "faq"} onToggle={() => toggle("faq")}>
          <LeadForm
            title="FAQ"
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
