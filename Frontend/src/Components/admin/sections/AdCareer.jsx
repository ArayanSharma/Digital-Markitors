import { useEffect, useState, useCallback } from "react";
import { loadPageContent, savePageContent } from "../../../utils/pageApi";
import { useToast } from "../../../context/ToastContext";
import {
  PageHeader,
  Section,
  Field,
  TextInput,
  TextArea,
  ImageInput,
  RemoveBtn,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "career";

export default function AdCareer() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("hero");
  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [hero, setHero] = useState({ title: "Career", subtitle: "", backgroundImage: "", primaryBtn: { text: "", link: "" } });

  const [left, setLeft] = useState({ heading: "Work with Us, Grow with Us", paragraphs: ["", ""], contactEmail: "support@digicore.co.in" });

  const [formSection, setFormSection] = useState({ bgImage: "", overlayText: "", heading: "Apply Now", message: "", placeholders: { name: "", email: "", phone: "", position: "" }, resumeAccept: ".pdf,.doc,.docx", submitBtn: { text: "SEND", link: "" } });

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    let data = null;
    try {
      data = await loadPageContent(PAGE_SLUG);
    } catch (err) {
      setLoadError(err.message);
    }
    if (data) {
      if (data.hero) setHero(data.hero);
      if (data.left) setLeft(data.left);
      if (data.formSection) setFormSection(data.formSection);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, [load]);

  const handleSave = async (e) => {
    e?.preventDefault();
    setStatus("saving");
    try {
      const payload = { hero, left, formSection };
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("Career page saved successfully");
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
      
        <PageHeader title="Career Page - Admin" description="Edit all Career page sections from the admin panel." status={status} />
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="Hero / Banner" open={openSection === "hero"} onToggle={() => toggle("hero")}>
          <Field label="Title">
            <TextInput value={hero.title} onChange={(e) => setHero({ ...hero, title: e.target.value })} />
          </Field>
          <ImageInput label="Background Image" value={hero.backgroundImage} onChange={(e) => setHero({ ...hero, backgroundImage: e.target.value })} />
        </Section>

        <Section title="Left Content" open={openSection === "left"} onToggle={() => toggle("left")}>
          <Field label="Heading">
            <TextInput value={left.heading} onChange={(e) => setLeft({ ...left, heading: e.target.value })} />
          </Field>
          <Field label="Paragraphs">
            <div className="space-y-2">
              {left.paragraphs.map((p, i) => (
                <div key={i} className="grid grid-cols-12 gap-3 items-end">
                  <div className="col-span-11">
                    <TextArea
                      value={p}
                      onChange={(e) => setLeft({ ...left, paragraphs: left.paragraphs.map((pp, idx) => (idx === i ? e.target.value : pp)) })}
                    />
                  </div>
                  <div className="col-span-1 flex justify-center pb-2">
                    <RemoveBtn onClick={() => setLeft({ ...left, paragraphs: left.paragraphs.filter((_, idx) => idx !== i) })} />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setLeft({ ...left, paragraphs: [...left.paragraphs, ""] })}
                className="flex items-center gap-1 text-xs font-medium text-brand-accent hover:text-brand-accent bg-brand-primary/10 hover:bg-brand-primary/20 px-3 py-1.5 rounded-full transition-colors"
              >
                Add paragraph
              </button>
            </div>
          </Field>
          <Field label="Contact Email">
            <TextInput value={left.contactEmail} onChange={(e) => setLeft({ ...left, contactEmail: e.target.value })} />
          </Field>
        </Section>

        <Section title="Form Section" open={openSection === "form"} onToggle={() => toggle("form")}>
          <Field label="Heading">
            <TextInput value={formSection.heading} onChange={(e) => setFormSection({ ...formSection, heading: e.target.value })} />
          </Field>
          <ImageInput label="Form Background" value={formSection.bgImage} onChange={(e) => setFormSection({ ...formSection, bgImage: e.target.value })} />
          <Field label="Name Placeholder">
            <TextInput value={formSection.placeholders.name} onChange={(e) => setFormSection({ ...formSection, placeholders: { ...formSection.placeholders, name: e.target.value } })} />
          </Field>
          <Field label="Email Placeholder">
            <TextInput value={formSection.placeholders.email} onChange={(e) => setFormSection({ ...formSection, placeholders: { ...formSection.placeholders, email: e.target.value } })} />
          </Field>
          <Field label="Phone Placeholder">
            <TextInput value={formSection.placeholders.phone} onChange={(e) => setFormSection({ ...formSection, placeholders: { ...formSection.placeholders, phone: e.target.value } })} />
          </Field>
          <Field label="Position Placeholder">
            <TextInput value={formSection.placeholders.position} onChange={(e) => setFormSection({ ...formSection, placeholders: { ...formSection.placeholders, position: e.target.value } })} />
          </Field>
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
