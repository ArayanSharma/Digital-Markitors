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
  CardListHeader,
  RemoveBtn,
  ImageInput,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "google-shopping-ads";

/* ------------------------------------------------------------------ */
/*  Initial data (mirrors current GoogleAd.jsx hardcoded content)      */
/* ------------------------------------------------------------------ */

const initialData = {
  hero: {
    title: "Google Shopping Ads Management Services",
    description:
      "At Digicore Inc., we use strategically planned Google shopping ads management services that help ecommerce business owners to connect with the high-intent shoppers. Be it through improved product visibility, better conversion or using data-driven services, the idea is to drive more sales through shopping ad management services.",
    primaryBtnText: "Speak to an SEO Expert",
    primaryBtnLink: "",
    secondaryBtnText: "Our Services",
    secondaryBtnLink: "",
    backgroundImage: "",
  },
  about: {
    heading: "Best Google Shopping Ads Management Agency",
    paragraph:
      "The ecommerce brands planning to improve their business and boost sales through strategic inventory management require professional assistance. At Digicore Inc., we employ targeting capabilities and well-planned shopping ads management services to help businesses connect with their audience while they are searching for their products.\n\nBeing the trusted Google shopping ads management agency, our comprehensive campaign assessment is aimed at bridging the gaps between targeted audience and the brand. Whether it is converting the improved product visibility into sales growth or relying on ecommerce trends to optimizing ad placements, we use real-time data to deliver customized outcome for business growth.",
  },
  visibility: {
    heading: "Why Google Shopping Ads Management Is Important for Business Growth?",
    paragraph:
      "Most of the users count on Google initially in order to address their shopping requirements. At Digicore Inc., we believe shopping ads are among the powerful tools for the success of ecommerce. From attracting qualified traffic, improving conversion to working on enhancing product visibility, we customize ad campaign aligned with your business goals. Our comprehensive approach of Google shopping ads management services includes product feed optimization, optimizing ad placements, bidding assessment and tracking results. Keeping in mind the objectives of clients, we analyse product range, understand the customer journey to finalize the ad campaign.",
    image: "",
  },
  performance: {
    label1: "TRACK",
    label2: "ANALYZE",
    label3: "SCALE",
    label4: "REPEAT",
    image: "",
  },
  seoAgency: {
    heading: "Why Do I Need Google Shopping Ads Management Services?",
    paragraph:
      "With the help of our well-planned Google shopping ads management services, we help you in reaching customers who are interested in purchasing your products. By working on the details of the products ranging from images, price, specifications, and overall optimization of products, our ads drive high-intent shoppers and qualified traffic. Our professional ad management services keep the campaigns structured, maintain accurate product feeds and allocate the budget related to campaign effectively. This continuous optimization and performance tracking helps our Google ad management experts in reduction of waste ad spend, enhancing product visibility and increasing conversions. If you want to experience the consistent growth of your ecommerce business, then, continuous sales, better returns and optimized business profile will be possible through our Google shopping ads.",
  },
  discoverServices: {
    heading: "Google Shopping Ads Services",
    paragraph:
      "At Digicore Inc., we provide tailored strategies related to Google shopping ads management services to increase conversions and maximize ROI. Our campaign management experts focus on boosting the product visibility, drive high-intent buyers and attract qualified users to your ecommerce store. Our methodology includes bid management, consistent performance tracking, product feed optimization and campaign setup. We target the right shoppers through our strategically planned ads management.",
    services: [
      {
        icon: "",
        title: "Merchant Center Setup",
        description:
          "A Google Merchant Center account is set up by our experts to maintain accuracy of products being listed and recommended in Google shopping results to the users.",
      },
      {
        icon: "",
        title: "GCampaign Setup",
        description:
          "As a part of this step, smart bidding and targeting are attained through well-planned shopping campaigns. The objective is to improve conversions and attract high-intent traffic.",
      },
      {
        icon: "",
        title: "Feed Optimisation",
        description:
          "The product feed is regularly updated by our campaign managers to maintain accuracy and consistency of listings. This step is aimed at avoiding errors in the product listings.",
      },
    ].map((s) => ({ id: uid(), ...s })),
  },
  ctaSection: {
    heading: "Ready for More Traffic, Leads & Sales? Start SEO Now.",
    backgroundImage: "",
    whatsappIcon: "",
    whatsappText: "+91 98188 88064",
    whatsappLink: "",
    callbackBtnText: "REQUEST A CALLBACK",
    callbackBtnLink: "",
  },
  impact: {
    image: "",
    timeline: [
      { title: "Contact Us", description: "Reach out to us via email, phone or our website." },
      {
        title: "SEO and PPC",
        description: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review.",
      },
      { title: "Share Your Goals:", description: "Share your challenges and objectives." },
      {
        title: "Consultation:",
        description: "Our experts will craft SEO strategies tailored to your needs.",
      },
      {
        title: "Tailored Plan:",
        description: "Get a customized plan with clear strategies and outcomes.",
      },
      { title: "Out Turn:", description: "Achieve measurable results in record time." },
    ].map((t) => ({ id: uid(), ...t })),
  },
  industries: {
    heading: "INDUSTRY WE WORK WITH",
    items: [
      {
        image: "",
        title: "Healthcare",
        desc: "We provide specialized digital marketing solutions to hospitals, clinics and other health institutions to help them build trust and grow their brand.",
      },
      {
        image: "",
        title: "E-Commerce",
        desc: "We help online retailers and marketplaces with robust strategies to elevate their online presence and turn casual browsers into loyal customers.",
      },
      {
        image: "",
        title: "Travel",
        desc: "We offer a complete suite of digital marketing solutions for travel brands, helping them showcase their offerings in a unique way and drive bookings.",
      },
    ].map((i) => ({ id: uid(), ...i })),
  },
  caseStudies: {
    heading: "Case Studies",
    items: [
      {
        title: "The Moto Men – High-Intent Google Ads Leads with 12.5% Conversion",
        image: "",
        descriptions: [
          "For The Moto Men, we executed a Noida-focused PPC campaign to drive high-intent enquiries for premium car detailing services. Nearly 80% of the enquiries were highly relevant, aligned with both location and service intent.",
        ],
        primaryBtnText: "View Case Study",
        primaryBtnLink: "",
        secondaryBtnText: "View Our Latest Work",
        secondaryBtnLink: "",
      },
    ].map((c) => ({ id: uid(), ...c })),
  },
  whyChooseDigicore: {
    heading: "Why Choose Digicore Inc. for Google Shopping Ads Management Services?",
    paragraph:
      "With the result-driven Google shopping ads management services, Digicore Inc. focuses on innovative and world-class techniques to scale your e-commerce business. Our campaign experts optimize product feeds, target shoppers with high-intent to purchase products from your online store, refine bidding strategies and lower cost per conversion.",
    image: "",
    points: [
      "Our seasoned professionals with profound experience tailors and execute Google shopping ad campaigns",
      "We address the ad management requirements of all-sized business and deliver unmatched results",
      "Our Google shopping ads management services maintain transparency and clarity in the reporting system through competitor analysis insights",
    ],
  },
  faq: {
    heading: "FAQ",
    items: [
      {
        question: "How long will it take for my website to start ranking on Google?",
        answer:
          "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
      },
      {
        question: "How many keywords will you work on as part of my SEO campaign?",
        answer:
          "The number of keywords will depend on the type of your business, industry, market trends and your competitors.",
      },
    ].map((f) => ({ id: uid(), ...f })),
  },
};

/* ------------------------------------------------------------------ */
/*  Main Admin Form                                                     */
/* ------------------------------------------------------------------ */

export default function AdminGoogleAdForm() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("hero");
  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [data, setData] = useState(initialData);

  const updateField = (section, field, value) => {
    setData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const updateButtonPair = (section, textKey, linkKey, v) =>
    setData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [textKey]: v.text, [linkKey]: v.link },
    }));

  const updateArrayItem = (section, arrayKey, id, field, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayKey]: prev[section][arrayKey].map((it) => (it.id === id ? { ...it, [field]: value } : it)),
      },
    }));
  };

  const updateItemButtonPair = (section, arrayKey, id, textKey, linkKey, v) =>
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayKey]: prev[section][arrayKey].map((it) =>
          it.id === id ? { ...it, [textKey]: v.text, [linkKey]: v.link } : it
        ),
      },
    }));

  const addArrayItem = (section, arrayKey, emptyItem) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayKey]: [...prev[section][arrayKey], { id: uid(), ...emptyItem }],
      },
    }));
  };

  const removeArrayItem = (section, arrayKey, id) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [arrayKey]: prev[section][arrayKey].filter((it) => it.id !== id),
      },
    }));
  };

  /* Case study descriptions (nested array of plain strings inside an array item) */
  const updateCaseDescription = (caseId, descIndex, value) => {
    setData((prev) => ({
      ...prev,
      caseStudies: {
        ...prev.caseStudies,
        items: prev.caseStudies.items.map((it) =>
          it.id === caseId
            ? { ...it, descriptions: it.descriptions.map((d, i) => (i === descIndex ? value : d)) }
            : it
        ),
      },
    }));
  };

  const addCaseDescription = (caseId) => {
    setData((prev) => ({
      ...prev,
      caseStudies: {
        ...prev.caseStudies,
        items: prev.caseStudies.items.map((it) =>
          it.id === caseId ? { ...it, descriptions: [...it.descriptions, ""] } : it
        ),
      },
    }));
  };

  const removeCaseDescription = (caseId, descIndex) => {
    setData((prev) => ({
      ...prev,
      caseStudies: {
        ...prev.caseStudies,
        items: prev.caseStudies.items.map((it) =>
          it.id === caseId
            ? { ...it, descriptions: it.descriptions.filter((_, i) => i !== descIndex) }
            : it
        ),
      },
    }));
  };

  /* Why Choose Digicore bullet points (plain string array) */
  const updatePoint = (i, value) =>
    setData((prev) => ({
      ...prev,
      whyChooseDigicore: {
        ...prev.whyChooseDigicore,
        points: prev.whyChooseDigicore.points.map((p, idx) => (idx === i ? value : p)),
      },
    }));

  const addPoint = () =>
    setData((prev) => ({
      ...prev,
      whyChooseDigicore: { ...prev.whyChooseDigicore, points: [...prev.whyChooseDigicore.points, ""] },
    }));

  const removePoint = (i) =>
    setData((prev) => ({
      ...prev,
      whyChooseDigicore: {
        ...prev.whyChooseDigicore,
        points: prev.whyChooseDigicore.points.filter((_, idx) => idx !== i),
      },
    }));

  /* ---------- Load existing content on mount ---------- */
  const load = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    try {
      const d = await loadPageContent(PAGE_SLUG);
      if (d) {
        setData((current) => ({ ...current, ...d }));
      }
    } catch (err) {
      setLoadError(err.message);
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
      showToast("Google Shopping Ads page saved successfully");
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
          <h1 className="text-xl font-bold text-brand-primary">
            Google Shopping Ads Page — Admin
          </h1>
        </div>

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        {/* HERO */}
        <Section title="1. Hero / Banner" open={openSection === "hero"} onToggle={() => toggle("hero")}>
          <Field label="Title">
            <TextInput value={data.hero.title} onChange={(e) => updateField("hero", "title", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={5} value={data.hero.description} onChange={(e) => updateField("hero", "description", e.target.value)} />
          </Field>
          <ButtonFields
            label="Primary Button"
            value={{ text: data.hero.primaryBtnText, link: data.hero.primaryBtnLink }}
            onChange={(v) => updateButtonPair("hero", "primaryBtnText", "primaryBtnLink", v)}
          />
          <ButtonFields
            label="Secondary Button"
            value={{ text: data.hero.secondaryBtnText, link: data.hero.secondaryBtnLink }}
            onChange={(v) => updateButtonPair("hero", "secondaryBtnText", "secondaryBtnLink", v)}
          />
          <ImageInput label="Background Image" value={data.hero.backgroundImage} onChange={(e) => updateField("hero", "backgroundImage", e.target.value)} />
        </Section>

        {/* ABOUT */}
        <Section title="2. About / Intro Section" open={openSection === "about"} onToggle={() => toggle("about")}>
          <Field label="Heading">
            <TextInput value={data.about.heading} onChange={(e) => updateField("about", "heading", e.target.value)} />
          </Field>
          <Field label="Paragraph">
            <TextArea rows={6} value={data.about.paragraph} onChange={(e) => updateField("about", "paragraph", e.target.value)} />
          </Field>
        </Section>

        {/* VISIBILITY */}
        <Section title="3. Why It's Important Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
          <Field label="Heading">
            <TextInput value={data.visibility.heading} onChange={(e) => updateField("visibility", "heading", e.target.value)} />
          </Field>
          <Field label="Paragraph">
            <TextArea rows={5} value={data.visibility.paragraph} onChange={(e) => updateField("visibility", "paragraph", e.target.value)} />
          </Field>
          <ImageInput label="Side Image" value={data.visibility.image} onChange={(e) => updateField("visibility", "image", e.target.value)} />
        </Section>

        {/* PERFORMANCE */}
        <Section title="4. Performance Banner" open={openSection === "performance"} onToggle={() => toggle("performance")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Label 1">
              <TextInput value={data.performance.label1} onChange={(e) => updateField("performance", "label1", e.target.value)} />
            </Field>
            <Field label="Label 2">
              <TextInput value={data.performance.label2} onChange={(e) => updateField("performance", "label2", e.target.value)} />
            </Field>
            <Field label="Label 3">
              <TextInput value={data.performance.label3} onChange={(e) => updateField("performance", "label3", e.target.value)} />
            </Field>
            <Field label="Label 4">
              <TextInput value={data.performance.label4} onChange={(e) => updateField("performance", "label4", e.target.value)} />
            </Field>
          </div>
          <ImageInput label="Image" value={data.performance.image} onChange={(e) => updateField("performance", "image", e.target.value)} />
        </Section>

        {/* SEO AGENCY */}
        <Section title="5. Why Do I Need These Services? Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
          <Field label="Heading">
            <TextInput value={data.seoAgency.heading} onChange={(e) => updateField("seoAgency", "heading", e.target.value)} />
          </Field>
          <Field label="Paragraph">
            <TextArea rows={6} value={data.seoAgency.paragraph} onChange={(e) => updateField("seoAgency", "paragraph", e.target.value)} />
          </Field>
        </Section>

        {/* DISCOVER SERVICES */}
        <Section title="6. Google Shopping Ads Services" open={openSection === "discoverServices"} onToggle={() => toggle("discoverServices")}>
          <Field label="Heading">
            <TextInput value={data.discoverServices.heading} onChange={(e) => updateField("discoverServices", "heading", e.target.value)} />
          </Field>
          <Field label="Paragraph">
            <TextArea rows={4} value={data.discoverServices.paragraph} onChange={(e) => updateField("discoverServices", "paragraph", e.target.value)} />
          </Field>
          <LeadForm
            title="Service Cards"
            addLabel="Add Service"
            items={data.discoverServices.services}
            onChange={(next) => updateField("discoverServices", "services", next)}
            fields={[
              { name: "icon", label: "Icon", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea" },
            ]}
          />
        </Section>

        {/* CTA STRIP */}
        <Section title="7. Call-To-Action Strip" open={openSection === "ctaSection"} onToggle={() => toggle("ctaSection")}>
          <Field label="Heading">
            <TextInput value={data.ctaSection.heading} onChange={(e) => updateField("ctaSection", "heading", e.target.value)} />
          </Field>
          <ImageInput label="Background Image" value={data.ctaSection.backgroundImage} onChange={(e) => updateField("ctaSection", "backgroundImage", e.target.value)} />
          <ImageInput label="WhatsApp Icon" value={data.ctaSection.whatsappIcon} onChange={(e) => updateField("ctaSection", "whatsappIcon", e.target.value)} />
          <ButtonFields
            label="WhatsApp Button"
            value={{ text: data.ctaSection.whatsappText, link: data.ctaSection.whatsappLink }}
            onChange={(v) => updateButtonPair("ctaSection", "whatsappText", "whatsappLink", v)}
          />
          <ButtonFields
            label="Callback Button"
            value={{ text: data.ctaSection.callbackBtnText, link: data.ctaSection.callbackBtnLink }}
            onChange={(v) => updateButtonPair("ctaSection", "callbackBtnText", "callbackBtnLink", v)}
          />
        </Section>

        {/* IMPACT / TIMELINE */}
        <Section title="8. Impact / Process Timeline" open={openSection === "impact"} onToggle={() => toggle("impact")}>
          <ImageInput label="Image" value={data.impact.image} onChange={(e) => updateField("impact", "image", e.target.value)} />
          <LeadForm
            title="Timeline Steps"
            addLabel="Add Step"
            items={data.impact.timeline}
            onChange={(next) => updateField("impact", "timeline", next)}
            fields={[
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea", rows: 2 },
            ]}
          />
        </Section>

        {/* INDUSTRIES */}
        <Section title="9. Industries We Work With" open={openSection === "industries"} onToggle={() => toggle("industries")}>
          <Field label="Heading">
            <TextInput value={data.industries.heading} onChange={(e) => updateField("industries", "heading", e.target.value)} />
          </Field>
          <LeadForm
            title="Industry Cards"
            addLabel="Add Industry"
            items={data.industries.items}
            onChange={(next) => updateField("industries", "items", next)}
            fields={[
              { name: "image", label: "Image", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "desc", label: "Description", type: "textarea" },
            ]}
          />
        </Section>

        {/* CASE STUDIES */}
        <Section title="10. Case Studies" open={openSection === "caseStudies"} onToggle={() => toggle("caseStudies")}>
          <Field label="Heading">
            <TextInput value={data.caseStudies.heading} onChange={(e) => updateField("caseStudies", "heading", e.target.value)} />
          </Field>
          <div className="md:col-span-2 space-y-3">
            <CardListHeader
              title="Case Study Slides"
              onAdd={() =>
                addArrayItem("caseStudies", "items", {
                  title: "",
                  image: "",
                  descriptions: [""],
                  primaryBtnText: "View Case Study",
                  primaryBtnLink: "",
                  secondaryBtnText: "View Our Latest Work",
                  secondaryBtnLink: "",
                })
              }
            />
            {data.caseStudies.items.map((item, i) => (
              <div key={item.id} className="p-3 bg-bg-secondary rounded-2xl border border-brand-primary/15 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-text-muted">Slide {i + 1}</span>
                  <RemoveBtn onClick={() => removeArrayItem("caseStudies", "items", item.id)} />
                </div>
                <Field label="Title">
                  <TextInput value={item.title} onChange={(e) => updateArrayItem("caseStudies", "items", item.id, "title", e.target.value)} />
                </Field>
                <ImageInput label="Image" value={item.image} onChange={(e) => updateArrayItem("caseStudies", "items", item.id, "image", e.target.value)} />

                <Field label="Description Paragraphs">
                  <div className="space-y-2">
                    {item.descriptions.map((desc, di) => (
                      <div key={di} className="flex gap-2">
                        <TextArea rows={3} value={desc} onChange={(e) => updateCaseDescription(item.id, di, e.target.value)} />
                        <RemoveBtn onClick={() => removeCaseDescription(item.id, di)} />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addCaseDescription(item.id)}
                      className="flex items-center gap-1 text-xs font-medium text-brand-accent hover:text-brand-accent bg-brand-primary/10 hover:bg-brand-primary/20 px-3 py-1.5 rounded-full transition-colors"
                    >
                      + Add Paragraph
                    </button>
                  </div>
                </Field>

                <ButtonFields
                  label="Primary Button"
                  value={{ text: item.primaryBtnText, link: item.primaryBtnLink }}
                  onChange={(v) => updateItemButtonPair("caseStudies", "items", item.id, "primaryBtnText", "primaryBtnLink", v)}
                />
                <ButtonFields
                  label="Secondary Button"
                  value={{ text: item.secondaryBtnText, link: item.secondaryBtnLink }}
                  onChange={(v) => updateItemButtonPair("caseStudies", "items", item.id, "secondaryBtnText", "secondaryBtnLink", v)}
                />
              </div>
            ))}
          </div>
        </Section>

        {/* WHY CHOOSE DIGICORE */}
        <Section title="11. Why Choose Digicore Inc. Section" open={openSection === "whyChooseDigicore"} onToggle={() => toggle("whyChooseDigicore")}>
          <Field label="Heading">
            <TextInput value={data.whyChooseDigicore.heading} onChange={(e) => updateField("whyChooseDigicore", "heading", e.target.value)} />
          </Field>
          <Field label="Paragraph">
            <TextArea rows={5} value={data.whyChooseDigicore.paragraph} onChange={(e) => updateField("whyChooseDigicore", "paragraph", e.target.value)} />
          </Field>
          <ImageInput label="Side Image" value={data.whyChooseDigicore.image} onChange={(e) => updateField("whyChooseDigicore", "image", e.target.value)} />
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="Bullet Points" onAdd={addPoint} />
            {data.whyChooseDigicore.points.map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <TextInput value={point} onChange={(e) => updatePoint(i, e.target.value)} />
                <RemoveBtn onClick={() => removePoint(i)} />
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section title="12. FAQ Section" open={openSection === "faq"} onToggle={() => toggle("faq")}>
          <Field label="Heading">
            <TextInput value={data.faq.heading} onChange={(e) => updateField("faq", "heading", e.target.value)} />
          </Field>
          <LeadForm
            title="FAQ Items"
            addLabel="Add FAQ"
            items={data.faq.items}
            onChange={(next) => updateField("faq", "items", next)}
            fields={[
              { name: "question", label: "Question", type: "text", required: true },
              { name: "answer", label: "Answer", type: "textarea", rows: 3 },
            ]}
          />
        </Section>

        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
