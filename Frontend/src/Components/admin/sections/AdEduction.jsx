import { useState, useCallback, useEffect } from "react";
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

const PAGE_SLUG = "Education";

const initialData = {
  hero: {
    title: "EDUCATION SEO AGENCY FOR Universities, Colleges & Educational Institutes",
    description:
      "To succeed in business, you first need to succeed in search results. Our digital marketing services connect you with your customers' journey from end to end – from discovery to retention.",
    backgroundImage: "",
    primaryBtnText: "Speak to an SEO Expert",
    primaryBtnLink: "/contact",
    secondaryBtnText: "Our Services",
    secondaryBtnLink: "/services",
  },

  about: {
    heading: "Best Healthcare SEO Company",
    description:
      "Digicore Inc. is a 360 digital marketing agency in Delhi that is dedicated to helping brands develop, engage, and lead, while also supporting the success of your business.",
  },

  visibility: {
    heading: "Lead Every Search with Delhi's Most Trusted SEO Agency",
    description:
      "AI has brought a lot of change in the way people search, discover, and buy. However, with it, the need to strengthen visibility has increased.",
    image: "",
  },

  counters: [
    { id: uid(), label: "Count 1", value: "50" },
    { id: uid(), label: "Count 2", value: "52" },
    { id: uid(), label: "Count 3", value: "61" },
    { id: uid(), label: "Count 4", value: "44" },
  ],

  performance: {
    labelTrack: "TRACK",
    labelAnalyze: "ANALYZE",
    labelScale: "SCALE",
    labelRepeat: "REPEAT",
    image: "",
  },

  discover: {
    heading: "SEO Services in Delhi",
    description:
      "At Digicore Inc., we don't just offer SEO services—we become your trusted digital growth partner.",
  },

  services: [
    {
      id: uid(),
      icon: "",
      title: "Enterprise SEO",
      description:
        "Offering tailored SEO strategies to help enterprises boost their online presence, attract high-quality, relevant traffic.",
    },
  ],

  ctaStrip: {
    heading: "Scale Your Online Store with High-Performance E-commerce SEO.",
    backgroundImage: "",
    whatsappText: "+91 98188 88064",
    whatsappLink: "#",
    secondaryBtnText: "REQUEST A CALLBACK",
    secondaryBtnLink: "#",
  },

  impact: {
    image: "",
    timeline: [
      {
        id: uid(),
        title: "Marketing companies",
        description: "We are currently rated Top 5 App Marketing Companies in 2019 by Clutch.co",
      },
    ],
  },

  seoAgencySection: {
    heading: "WHY DO I NEED AN SEO AGENCY IN DELHI?",
    description: "in today's digital era, Delhi has become one of the most competitive markets, and it is very difficult for new businesses to visible organically, get clients and sales. Businesses across every industry compete for the same audience, locations, and keywords. As a result, it is difficult to be visible on the first page of search results and in AI answers without a targeted SEO strategy. Ranking a website is not a one-day game. It requires a clear and data based SEO strategy. A trusted and professional SEO company in Delhi can help your business rank locally, attract high-intent commercial organic traffic, and generate consistent, quality lead.",
    problemTitle: "The Problem",
    problemText: "Most businesses still rely only on traditional SEO, assuming it is enough to get visibility online. However, with AI-powered search engines like ChatGPT, Gemini, and Perplexity, users now receive direct answers instead of browsing multiple websites. As a result, many brands struggle to appear in AI-generated recommendations, summaries, and answers.",
    solutionTitle: "The Solution",
    solutionText: "SEO is the foundation that powers both AEO and GEO. When combined with structured content, clear answers, and strong authority signals, SEO helps your brand get recognized by AI engines. By aligning SEO with AEO and GEO strategies, your business becomes discoverable not just on Google—but also inside AI-generated answers, summaries, and comparisons.",
    rightParagraph1: "AI, ever-changing algorithms and shifting consumer buying behaviours are all redefining digital marketing in this era. To stay ahead, brands must adapt quickly, think strategically and remain visible across every channel. That's when Digicore Inc., the trusted SEO company in Delhi steps in.",
    rightParagraph2: "A forward-thinking SEO agency can help you keep up with the change and cut through the noise. Whether you’re a startup looking to establish presence or an established brand aiming to scale, we can help you with unmatchable SEO strategies so that you can grow with confidence. Every strategy we deploy is backed by insights, analytics, and performance data. We have experience across multiple industries and we utilize cutting-edge tools and technology to deliver sustainable growth. Turn every click, search and interaction into real growth with Digicore Inc.!"
  },

  videoSection: {
    title: "Digicore Inc Video",
    videoUrl: "https://www.youtube.com/embed/RugY9uuIJhY",
  },

  dominate: {
    heading: "How We Grow Your E-commerce Sales & Revenue",
    description:
      "Since we Live 'Digital', Think 'Digital', Breathe 'Digital', and Understand 'Digital', each of our digital marketing solutions is designed around a few key building blocks.",
    cards: [
      {
        id: uid(),
        icon: "",
        title: "Get More Leads",
        desc: "We ensure your business gets more and more leads through our expertly managed digital marketing services.",
      },
    ],
  },

  whyChoose: {
    heading: "Why business choose Digicore Inc.",
    description:
      "Digicore Inc., the leading digital marketing agency in Delhi extends assistance and 360 degree digital marketing strategies to all sized businesses.",
    image: "",
    points: [
      { id: uid(), text: "Provide your business with a dedicated account manager and team" },
      { id: uid(), text: "Guidance for the betterment of startup!" },
    ],
  },

  testimonials: {
    heading: "What Our Clients Say",
    items: [
      {
        id: uid(),
        image: "",
        name: "Client Name",
        designation: "Founder, Company Name",
        rating: "5",
        review: "Working with this team transformed our SEO performance within months.",
      },
    ],
  },

  faq: {
    heading: "PPC AGENCY DELHI FAQS",
    items: [
      {
        id: uid(),
        question: "How long will it take for my website to start ranking on Google?",
        answer:
          "The time a website takes to rank on Google varies between 3 – 6 months, depending on industry competition, SEO efforts and content quality.",
      },
    ],
  },
};

export default function EducationAdminForm() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("hero");
  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const updateField = (section, key, value) => {
    setData((prev) => ({ ...prev, [section]: { ...prev[section], [key]: value } }));
  };

  const updateArraySection = (section, value) => {
    setData((prev) => ({ ...prev, [section]: value }));
  };

  const updateNestedArray = (section, key, value) => {
    setData((prev) => ({ ...prev, [section]: { ...prev[section], [key]: value } }));
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
      setData((prev) => {
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
      await savePageContent(PAGE_SLUG, data);
      setStatus("saved");
      showToast("Education page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-brand-primary">Education Page Content — Admin</h1>
        </div>
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        {/* 1. HERO / BANNER */}
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="1. Hero / Banner" open={openSection === "hero"} onToggle={() => toggle("hero")}>
          <Field label="Title">
            <TextInput value={data.hero.title} onChange={(e) => updateField("hero", "title", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea value={data.hero.description} onChange={(e) => updateField("hero", "description", e.target.value)} />
          </Field>
          <ImageInput label="Background Image" value={data.hero.backgroundImage} onChange={(e) => updateField("hero", "backgroundImage", e.target.value)} />
          <ButtonFields
            label="Primary Button"
            value={{ text: data.hero.primaryBtnText, link: data.hero.primaryBtnLink }}
            onChange={(v) => setData((prev) => ({ ...prev, hero: { ...prev.hero, primaryBtnText: v.text, primaryBtnLink: v.link } }))}
          />
          <ButtonFields
            label="Secondary Button"
            value={{ text: data.hero.secondaryBtnText, link: data.hero.secondaryBtnLink }}
            onChange={(v) => setData((prev) => ({ ...prev, hero: { ...prev.hero, secondaryBtnText: v.text, secondaryBtnLink: v.link } }))}
          />
        </Section>

        {/* 2. ABOUT SECTION */}
        <Section title="2. About Section" open={openSection === "about"} onToggle={() => toggle("about")}>
          <Field label="Heading">
            <TextInput value={data.about.heading} onChange={(e) => updateField("about", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={data.about.description} onChange={(e) => updateField("about", "description", e.target.value)} />
          </Field>
        </Section>

        {/* 3. VISIBILITY SECTION */}
        <Section title="3. Visibility Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
          <Field label="Heading">
            <TextInput value={data.visibility.heading} onChange={(e) => updateField("visibility", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={5} value={data.visibility.description} onChange={(e) => updateField("visibility", "description", e.target.value)} />
          </Field>
          <ImageInput label="Image" value={data.visibility.image} onChange={(e) => updateField("visibility", "image", e.target.value)} />
        </Section>

        {/* 5. PERFORMANCE SECTION */}
        <Section title="5. Performance Section (Track/Analyze/Scale/Repeat)" open={openSection === "performance"} onToggle={() => toggle("performance")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Label 1">
              <TextInput value={data.performance.labelTrack} onChange={(e) => updateField("performance", "labelTrack", e.target.value)} />
            </Field>
            <Field label="Label 2">
              <TextInput value={data.performance.labelAnalyze} onChange={(e) => updateField("performance", "labelAnalyze", e.target.value)} />
            </Field>
            <Field label="Label 3">
              <TextInput value={data.performance.labelScale} onChange={(e) => updateField("performance", "labelScale", e.target.value)} />
            </Field>
            <Field label="Label 4">
              <TextInput value={data.performance.labelRepeat} onChange={(e) => updateField("performance", "labelRepeat", e.target.value)} />
            </Field>
          </div>
          <ImageInput label="Image" value={data.performance.image} onChange={(e) => updateField("performance", "image", e.target.value)} />
        </Section>

        {/* 7. SERVICES SECTION */}
        <Section title="7. Services Section" open={openSection === "services"} onToggle={() => toggle("services")}>
          <LeadForm
            title="Service Cards"
            addLabel="Add Service"
            items={data.services}
            onChange={(v) => updateArraySection("services", v)}
            fields={[
              { name: "icon", label: "Icon", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea" },
            ]}
          />
        </Section>

        {/* 7. SEO AGENCY SECTION */}
        <Section title="7. SEO Agency Section" open={openSection === "seoAgencySection"} onToggle={() => toggle("seoAgencySection")}>
          <Field label="Heading">
            <TextInput value={data.seoAgencySection?.heading || ""} onChange={(e) => updateField("seoAgencySection", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={data.seoAgencySection?.description || ""} onChange={(e) => updateField("seoAgencySection", "description", e.target.value)} />
          </Field>
          <Field label="Problem Title">
            <TextInput value={data.seoAgencySection?.problemTitle || ""} onChange={(e) => updateField("seoAgencySection", "problemTitle", e.target.value)} />
          </Field>
          <Field label="Problem Text">
            <TextArea rows={4} value={data.seoAgencySection?.problemText || ""} onChange={(e) => updateField("seoAgencySection", "problemText", e.target.value)} />
          </Field>
          <Field label="Solution Title">
            <TextInput value={data.seoAgencySection?.solutionTitle || ""} onChange={(e) => updateField("seoAgencySection", "solutionTitle", e.target.value)} />
          </Field>
          <Field label="Solution Text">
            <TextArea rows={4} value={data.seoAgencySection?.solutionText || ""} onChange={(e) => updateField("seoAgencySection", "solutionText", e.target.value)} />
          </Field>
          <Field label="Right Paragraph 1">
            <TextArea rows={4} value={data.seoAgencySection?.rightParagraph1 || ""} onChange={(e) => updateField("seoAgencySection", "rightParagraph1", e.target.value)} />
          </Field>
          <Field label="Right Paragraph 2">
            <TextArea rows={4} value={data.seoAgencySection?.rightParagraph2 || ""} onChange={(e) => updateField("seoAgencySection", "rightParagraph2", e.target.value)} />
          </Field>
        </Section>

        {/* 8. STRATEGY CALL CTA STRIP */}
        <Section title="8. Strategy Call CTA Strip" open={openSection === "ctaStrip"} onToggle={() => toggle("ctaStrip")}>
          <Field label="Heading">
            <TextInput value={data.ctaStrip.heading} onChange={(e) => updateField("ctaStrip", "heading", e.target.value)} />
          </Field>
          <ImageInput label="Background Icon / Image" value={data.ctaStrip.backgroundImage} onChange={(e) => updateField("ctaStrip", "backgroundImage", e.target.value)} />
          <ButtonFields
            label="WhatsApp Button"
            value={{ text: data.ctaStrip.whatsappText, link: data.ctaStrip.whatsappLink }}
            onChange={(v) => setData((prev) => ({ ...prev, ctaStrip: { ...prev.ctaStrip, whatsappText: v.text, whatsappLink: v.link } }))}
          />
          <ButtonFields
            label="Secondary Button"
            value={{ text: data.ctaStrip.secondaryBtnText, link: data.ctaStrip.secondaryBtnLink }}
            onChange={(v) => setData((prev) => ({ ...prev, ctaStrip: { ...prev.ctaStrip, secondaryBtnText: v.text, secondaryBtnLink: v.link } }))}
          />
        </Section>

        {/* 9. IMPACT / PROCESS TIMELINE */}
        <Section title="9. Impact / Process Timeline" open={openSection === "impact"} onToggle={() => toggle("impact")}>
          <ImageInput label="Side Image" value={data.impact.image} onChange={(e) => updateField("impact", "image", e.target.value)} />
          <LeadForm
            title="Timeline Items"
            addLabel="Add Step"
            items={data.impact.timeline}
            onChange={(v) => updateNestedArray("impact", "timeline", v)}
            fields={[
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea" },
            ]}
          />
        </Section>

        {/* 12. VIDEO SECTION */}
        <Section title="12. Video Section" open={openSection === "video"} onToggle={() => toggle("video")}>
          <Field label="Video Title">
            <TextInput value={data.videoSection.title} onChange={(e) => updateField("videoSection", "title", e.target.value)} />
          </Field>
          <Field label="YouTube Embed URL">
            <TextInput
              value={data.videoSection.videoUrl}
              onChange={(e) => updateField("videoSection", "videoUrl", e.target.value)}
              placeholder="https://www.youtube.com/embed/VIDEO_ID"
            />
          </Field>
          {data.videoSection.videoUrl && (
            <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden border border-brand-primary/25">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={data.videoSection.videoUrl}
                title={data.videoSection.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Section>

        {/* 13. DOMINATE YOUR INDUSTRY */}
        <Section title="13. Dominate Your Industry" open={openSection === "dominate"} onToggle={() => toggle("dominate")}>
          <Field label="Heading">
            <TextInput value={data.dominate.heading} onChange={(e) => updateField("dominate", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea value={data.dominate.description} onChange={(e) => updateField("dominate", "description", e.target.value)} />
          </Field>
          <LeadForm
            title="Help Cards"
            addLabel="Add Card"
            items={data.dominate.cards}
            onChange={(v) => updateNestedArray("dominate", "cards", v)}
            fields={[
              { name: "icon", label: "Icon", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "desc", label: "Description", type: "textarea" },
            ]}
          />
        </Section>

        {/* 14. WHY BUSINESSES CHOOSE US */}
        <Section title="14. Why Businesses Choose Us" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
          <Field label="Heading">
            <TextInput value={data.whyChoose.heading} onChange={(e) => updateField("whyChoose", "heading", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={data.whyChoose.description} onChange={(e) => updateField("whyChoose", "description", e.target.value)} />
          </Field>
          <ImageInput label="Image" value={data.whyChoose.image} onChange={(e) => updateField("whyChoose", "image", e.target.value)} />
          <LeadForm
            title="Bullet Points"
            addLabel="Add Point"
            items={data.whyChoose.points}
            onChange={(v) => updateNestedArray("whyChoose", "points", v)}
            fields={[{ name: "text", label: "Point", type: "text", required: true }]}
          />
        </Section>

        {/* 16. FAQ */}
        <Section title="16. FAQ Section" open={openSection === "faq"} onToggle={() => toggle("faq")}>
          <Field label="Heading">
            <TextInput value={data.faq.heading} onChange={(e) => updateField("faq", "heading", e.target.value)} />
          </Field>
          <LeadForm
            title="FAQ Items"
            addLabel="Add FAQ"
            items={data.faq.items}
            onChange={(v) => updateNestedArray("faq", "items", v)}
            fields={[
              { name: "question", label: "Question", type: "text", required: true },
              { name: "answer", label: "Answer", type: "textarea" },
            ]}
          />
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
