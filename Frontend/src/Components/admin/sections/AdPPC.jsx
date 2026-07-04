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
  CardListHeader,
  RemoveBtn,
  ImageInput,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "PPC";

/* ----------------------------------------------------------------
   Generic list helpers built on the shared FormKit primitives
---------------------------------------------------------------- */

// Array of plain strings (e.g. bullet-style text items)
const StringList = ({ title, items, onChange, rows = 3 }) => {
  const updateItem = (index, val) => onChange(items.map((it, i) => (i === index ? val : it)));
  const removeItem = (index) => onChange(items.filter((_, i) => i !== index));
  const addItem = () => onChange([...items, ""]);

  return (
    <div className="md:col-span-2 space-y-3">
      <CardListHeader title={title} onAdd={addItem} />
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-12 gap-3 items-end p-3 bg-bg-secondary rounded-2xl border border-brand-primary/15">
          <div className="col-span-11">
            <TextArea rows={rows} value={item} onChange={(e) => updateItem(index, e.target.value)} />
          </div>
          <div className="col-span-1 flex justify-center pb-2">
            <RemoveBtn onClick={() => removeItem(index)} />
          </div>
        </div>
      ))}
    </div>
  );
};

/* ----------------------------------------------------------------
   Default data shape
---------------------------------------------------------------- */

const initialData = {
  banner: {
    title: "PPC Agency in Delhi That Drives Traffic, Trust, and Conversions",
    description: "We are Digicore Inc. — The Best SEO Company in Delhi NCR. SEO runs in our DNA.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/services" },
    backgroundImageUrl: "",
  },
  aboutSection: {
    title: "Best PPC Company in Delhi NCR",
    description: "",
  },
  visibilitySection: {
    title: "Why PPC Is More Than Just Running Ads",
    description: "",
    imageUrl: "",
  },
  performanceSection: {
    items: ["TRACK", "ANALYZE", "SCALE", "REPEAT"],
    imageUrl: "",
  },
  whyPPCSection: {
    heading: "Why Do I Need a PPC Agency in Delhi?",
    headingDescription: "",
    problemTitle: "The Problem",
    problemDescription: "",
    solutionTitle: "The Solution",
    solutionDescription: "",
    additionalDescription: "",
  },
  services: [
    { iconUrl: "", title: "Paid Search", description: "" },
  ],
  whyChooseSection: {
    title: "Ready for More Traffic, Leads & Sales? Start SEO Now.",
    buttons: [
      { text: "+91 98188 88064", link: "tel:+919818888064", iconUrl: "" },
      { text: "REQUEST A CALLBACK", link: "/contact", iconUrl: "" },
    ],
    backgroundImageUrl: "",
  },
  timelineSection: {
    items: [
      { title: "Contact Us", description: "Reach out to us via email, phone or our website." },
      { title: "SEO and PPC", description: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review." },
      { title: "Share Your Goals:", description: "Share your challenges and objectives." },
      { title: "Consultation:", description: "Our experts will craft SEO strategies tailored to your needs." },
      { title: "Tailored Plan:", description: "Get a customized plan with clear strategies and outcomes." },
      { title: "Out Turn:", description: "Achieve measurable results in record time." },
    ],
    imageUrl: "",
  },
  ppcManagementSection: {
    title: "HOW DO WE MANAGE PPC CAMPAIGNS",
    description: "",
    leftItems: [""],
    rightItems: [""],
  },
  helpCardsSection: {
    heading: "How Can We Help You Grow",
    helpCards: [
      { iconUrl: "", title: "Targeted Advertising", desc: "" },
    ],
  },
  whyChooseDigicoreSection: {
    title: "Why Choose Digicore Inc. as YOUR PPC AGENCY IN DELHI",
    description: "",
    imageUrl: "",
    points: [""],
  },
  faqSection: {
    title: "SEO AGENCY DELHI FAQS",
    faqItems: [
      { question: "", answer: "" },
    ],
  },
};

export default function AdPPC() {
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

  const getByPath = (object, path) => path.split(".").reduce((current, key) => current?.[key], object);

  const setByPath = (object, path, updater) => {
    const keys = path.split(".");
    const [first, ...rest] = keys;
    if (!rest.length) {
      return { ...object, [first]: updater(object?.[first]) };
    }
    return { ...object, [first]: setByPath(object?.[first] || {}, rest.join("."), updater) };
  };

  const setList = (listPath, next) => {
    setPageData((current) => setByPath(current, listPath, () => next));
  };

  const setTop = (key, value) => setPageData((current) => ({ ...current, [key]: value }));

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
      if (d.banner) setTop("banner", d.banner);
      if (d.aboutSection) setTop("aboutSection", d.aboutSection);
      if (d.visibilitySection) setTop("visibilitySection", d.visibilitySection);
      if (d.performanceSection) setTop("performanceSection", d.performanceSection);
      if (d.whyPPCSection) setTop("whyPPCSection", d.whyPPCSection);
      if (d.services) setTop("services", d.services);
      if (d.whyChooseSection) setTop("whyChooseSection", d.whyChooseSection);
      if (d.timelineSection) setTop("timelineSection", d.timelineSection);
      if (d.ppcManagementSection) setTop("ppcManagementSection", d.ppcManagementSection);
      if (d.helpCardsSection) setTop("helpCardsSection", d.helpCardsSection);
      if (d.whyChooseDigicoreSection) setTop("whyChooseDigicoreSection", d.whyChooseDigicoreSection);
      if (d.faqSection) setTop("faqSection", d.faqSection);
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
      showToast("PPC page saved successfully");
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
        <PageHeader title="PPC Page Content - Admin" description="Edit every PPC section, including buttons, links, addable cards, and video URL." status={status} />

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="Banner Section" open={openSection === "banner"} onToggle={() => toggle("banner")}>
          <Field label="Title">
            <TextInput value={pageData.banner.title} onChange={(e) => updateSection("banner", "title", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={5} value={pageData.banner.description} onChange={(e) => updateSection("banner", "description", e.target.value)} />
          </Field>
          <ButtonFields label="Primary Button" value={pageData.banner.primaryBtn} onChange={(next) => updateSection("banner", "primaryBtn", next)} />
          <ButtonFields label="Secondary Button" value={pageData.banner.secondaryBtn} onChange={(next) => updateSection("banner", "secondaryBtn", next)} />
          <ImageInput label="Banner Background Image" value={pageData.banner.backgroundImageUrl} onChange={(e) => updateSection("banner", "backgroundImageUrl", e.target.value)} />
        </Section>


        <Section title="About Section" open={openSection === "about"} onToggle={() => toggle("about")}>
          <Field label="Heading">
            <TextInput value={pageData.aboutSection.title} onChange={(e) => updateSection("aboutSection", "title", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.aboutSection.description} onChange={(e) => updateSection("aboutSection", "description", e.target.value)} />
          </Field>
        </Section>

        <Section title="Visibility Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
          <Field label="Title">
            <TextInput value={pageData.visibilitySection.title} onChange={(e) => updateSection("visibilitySection", "title", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={5} value={pageData.visibilitySection.description} onChange={(e) => updateSection("visibilitySection", "description", e.target.value)} />
          </Field>
          <ImageInput label="Section Image" value={pageData.visibilitySection.imageUrl} onChange={(e) => updateSection("visibilitySection", "imageUrl", e.target.value)} />
        </Section>

        <Section title="Performance Section" open={openSection === "performance"} onToggle={() => toggle("performance")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {pageData.performanceSection.items.map((word, i) => (
              <Field key={i} label={`Performance Item ${i + 1}`}>
                <TextInput
                  value={word}
                  onChange={(e) =>
                    updateSection(
                      "performanceSection",
                      "items",
                      pageData.performanceSection.items.map((w, idx) => (idx === i ? e.target.value : w))
                    )
                  }
                />
              </Field>
            ))}
          </div>
          <ImageInput label="Performance Image" value={pageData.performanceSection.imageUrl} onChange={(e) => updateSection("performanceSection", "imageUrl", e.target.value)} />
        </Section>

        <Section title="Why PPC Section" open={openSection === "whyPPC"} onToggle={() => toggle("whyPPC")}>
          <Field label="Heading">
            <TextInput value={pageData.whyPPCSection.heading} onChange={(e) => updateSection("whyPPCSection", "heading", e.target.value)} />
          </Field>
          <Field label="Heading Description">
            <TextArea rows={5} value={pageData.whyPPCSection.headingDescription} onChange={(e) => updateSection("whyPPCSection", "headingDescription", e.target.value)} />
          </Field>
          <Field label="Problem Title">
            <TextInput value={pageData.whyPPCSection.problemTitle} onChange={(e) => updateSection("whyPPCSection", "problemTitle", e.target.value)} />
          </Field>
          <Field label="Problem Description">
            <TextArea rows={5} value={pageData.whyPPCSection.problemDescription} onChange={(e) => updateSection("whyPPCSection", "problemDescription", e.target.value)} />
          </Field>
          <Field label="Solution Title">
            <TextInput value={pageData.whyPPCSection.solutionTitle} onChange={(e) => updateSection("whyPPCSection", "solutionTitle", e.target.value)} />
          </Field>
          <Field label="Solution Description">
            <TextArea rows={5} value={pageData.whyPPCSection.solutionDescription} onChange={(e) => updateSection("whyPPCSection", "solutionDescription", e.target.value)} />
          </Field>
          <Field label="Additional Description">
            <TextArea rows={5} value={pageData.whyPPCSection.additionalDescription} onChange={(e) => updateSection("whyPPCSection", "additionalDescription", e.target.value)} />
          </Field>
        </Section>

        <Section title="Services Section" open={openSection === "services"} onToggle={() => toggle("services")}>
          <LeadForm
            title="Services"
            addLabel="Add Service"
            items={pageData.services}
            onChange={(next) => setList("services", next)}
            fields={[
              { name: "iconUrl", label: "Icon URL", type: "image" },
              { name: "title", label: "Title", required: true },
              { name: "description", label: "Description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Why Choose CTA Section" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
          <Field label="Section Title">
            <TextInput value={pageData.whyChooseSection.title} onChange={(e) => updateSection("whyChooseSection", "title", e.target.value)} />
          </Field>
          <ImageInput label="Background Image" value={pageData.whyChooseSection.backgroundImageUrl} onChange={(e) => updateSection("whyChooseSection", "backgroundImageUrl", e.target.value)} />
          <LeadForm
            title="CTA Buttons"
            addLabel="Add Button"
            items={pageData.whyChooseSection.buttons}
            onChange={(next) => setList("whyChooseSection.buttons", next)}
            fields={[
              { name: "text", label: "Button Text", required: true },
              { name: "link", label: "Button Link", placeholder: "https:// or /path" },
              { name: "iconUrl", label: "Icon URL (optional)", type: "image" },
            ]}
          />
        </Section>

        <Section title="Timeline Section" open={openSection === "timeline"} onToggle={() => toggle("timeline")}>
          <ImageInput label="Timeline Image" value={pageData.timelineSection.imageUrl} onChange={(e) => updateSection("timelineSection", "imageUrl", e.target.value)} />
          <LeadForm
            title="Timeline Items"
            addLabel="Add Step"
            items={pageData.timelineSection.items}
            onChange={(next) => setList("timelineSection.items", next)}
            fields={[
              { name: "title", label: "Title", required: true },
              { name: "description", label: "Description", type: "textarea" },
            ]}
          />
        </Section>


        <Section title="PPC Management Section" open={openSection === "ppcManagement"} onToggle={() => toggle("ppcManagement")}>
          <Field label="Section Title">
            <TextInput value={pageData.ppcManagementSection.title} onChange={(e) => updateSection("ppcManagementSection", "title", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={5} value={pageData.ppcManagementSection.description} onChange={(e) => updateSection("ppcManagementSection", "description", e.target.value)} />
          </Field>
          <StringList
            title="Left Column Items"
            items={getByPath(pageData, "ppcManagementSection.leftItems") || []}
            onChange={(next) => setList("ppcManagementSection.leftItems", next)}
          />
          <StringList
            title="Right Column Items"
            items={getByPath(pageData, "ppcManagementSection.rightItems") || []}
            onChange={(next) => setList("ppcManagementSection.rightItems", next)}
          />
        </Section>

        <Section title="Help Cards Section" open={openSection === "helpCards"} onToggle={() => toggle("helpCards")}>
          <Field label="Section Heading">
            <TextInput value={pageData.helpCardsSection.heading} onChange={(e) => updateSection("helpCardsSection", "heading", e.target.value)} />
          </Field>
          <LeadForm
            title="Help Cards"
            addLabel="Add Card"
            items={pageData.helpCardsSection.helpCards}
            onChange={(next) => setList("helpCardsSection.helpCards", next)}
            fields={[
              { name: "iconUrl", label: "Icon URL", type: "image" },
              { name: "title", label: "Title", required: true },
              { name: "desc", label: "Description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Why Choose Digicore Section" open={openSection === "whyChooseDigicore"} onToggle={() => toggle("whyChooseDigicore")}>
          <Field label="Heading">
            <TextInput value={pageData.whyChooseDigicoreSection.title} onChange={(e) => updateSection("whyChooseDigicoreSection", "title", e.target.value)} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={pageData.whyChooseDigicoreSection.description} onChange={(e) => updateSection("whyChooseDigicoreSection", "description", e.target.value)} />
          </Field>
          <ImageInput label="Why Choose Digicore Image" value={pageData.whyChooseDigicoreSection.imageUrl || ""} onChange={(e) => updateSection("whyChooseDigicoreSection", "imageUrl", e.target.value)} />
          <StringList
            title="Feature Bullet"
            items={pageData.whyChooseDigicoreSection.points || []}
            onChange={(next) => updateSection("whyChooseDigicoreSection", "points", next)}
          />
        </Section>

        <Section title="FAQ Section" open={openSection === "faq"} onToggle={() => toggle("faq")}>
          <Field label="Section Title">
            <TextInput value={pageData.faqSection.title} onChange={(e) => updateSection("faqSection", "title", e.target.value)} />
          </Field>
          <LeadForm
            title="FAQ Items"
            addLabel="Add FAQ"
            items={pageData.faqSection.faqItems}
            onChange={(next) => setList("faqSection.faqItems", next)}
            fields={[
              { name: "question", label: "Question", required: true },
              { name: "answer", label: "Answer", type: "textarea" },
            ]}
          />
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} label="Save PPC Page Data" />
      </form>
    </div>
  );
}
