import { useEffect, useState, useCallback } from "react";
import { loadPageContent, savePageContent } from "../../../utils/pageApi";
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

const PAGE_SLUG = "wordpress-development";

export default function AdWordPress() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("hero");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [hero, setHero] = useState({
    title: "",
    description: "",
    primaryBtn: { text: "", link: "" },
    secondaryBtn: { text: "", link: "" },
    backgroundImage: "",
  });

  const [topContent, setTopContent] = useState({
    title: "",
    description: "",
  });

  const [helpCards, setHelpCards] = useState([]);

  const [webDesign, setWebDesign] = useState({
    title: "",
    description: "",
    image: "",
    heading: "",
    bodyText1: "",
    bodyText2: "",
  });

  const [cmsSection, setCmsSection] = useState({
    title: "",
    description: "",
  });

  const [cmsData, setCmsData] = useState([]);

  const [ourWork, setOurWork] = useState({
    title: "",
    description: "",
    image: "",
    workTitle: "",
    bullets: [],
    button: { text: "", link: "" },
  });

  const [builtSection, setBuiltSection] = useState({
    title: "",
    description: "",
  });

  const [services, setServices] = useState([]);

  const [connectSection, setConnectSection] = useState({
    title: "",
    description: "",
    button: { text: "", link: "" },
  });

  const [processHeader, setProcessHeader] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [processData, setProcessData] = useState([]);

  const [testimonialHeader, setTestimonialHeader] = useState({
    title: "",
    subtitle: "",
    videoUrl: "",
  });

  const [testimonials, setTestimonials] = useState([]);

  const [contactBanner, setContactBanner] = useState({
    phone: "",
    email: "",
    logo: "",
  });

  const [faqHeader, setFaqHeader] = useState({
    title: "",
    subtitle: "",
    image: "",
  });

  const [faqData, setFaqData] = useState([]);

  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  // Our Work bullets (plain string list)
  const updateOurWorkBullet = (index, value) =>
    setOurWork({
      ...ourWork,
      bullets: ourWork.bullets.map((b, i) => (i === index ? value : b)),
    });
  const addOurWorkBullet = () =>
    setOurWork({ ...ourWork, bullets: [...(ourWork.bullets || []), ""] });
  const removeOurWorkBullet = (index) =>
    setOurWork({ ...ourWork, bullets: ourWork.bullets.filter((_, i) => i !== index) });

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
      if (data.topContent) setTopContent(data.topContent);
      if (data.helpCards) setHelpCards(data.helpCards);
      if (data.webDesign) setWebDesign(data.webDesign);
      if (data.cmsSection) setCmsSection(data.cmsSection);
      if (data.cmsData) setCmsData(data.cmsData);
      if (data.ourWork) setOurWork(data.ourWork);
      if (data.builtSection) setBuiltSection(data.builtSection);
      if (data.services) setServices(data.services);
      if (data.connectSection) setConnectSection(data.connectSection);
      if (data.processHeader) setProcessHeader(data.processHeader);
      if (data.processData) setProcessData(data.processData);
      if (data.testimonialHeader) setTestimonialHeader(data.testimonialHeader);
      if (data.testimonials) setTestimonials(data.testimonials);
      if (data.contactBanner) setContactBanner(data.contactBanner);
      if (data.faqHeader) setFaqHeader(data.faqHeader);
      if (data.faqData) setFaqData(data.faqData);
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
    const payload = {
      hero,
      topContent,
      helpCards,
      webDesign,
      cmsSection,
      cmsData,
      ourWork,
      builtSection,
      services,
      connectSection,
      processHeader,
      processData,
      testimonialHeader,
      testimonials,
      contactBanner,
      faqHeader,
      faqData,
    };

    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("WordPress page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10">
      <form onSubmit={handleSave} className="w-full">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-brand-primary">WordPress Page Content — Admin</h1>
          <p className="text-sm text-text-muted">Edit all WordPress Development page sections from the admin panel.</p>
        </div>

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        <Section title="Hero Banner" open={openSection === "hero"} onToggle={() => toggle("hero")}>
          <Field label="Title">
            <TextInput value={hero.title} onChange={(e) => setHero({ ...hero, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={5} value={hero.description} onChange={(e) => setHero({ ...hero, description: e.target.value })} />
          </Field>
          <ButtonFields label="Primary Button" value={hero.primaryBtn} onChange={(v) => setHero({ ...hero, primaryBtn: v })} />
          <ButtonFields label="Secondary Button" value={hero.secondaryBtn} onChange={(v) => setHero({ ...hero, secondaryBtn: v })} />
          <ImageInput label="Background Image" value={hero.backgroundImage} onChange={(e) => setHero({ ...hero, backgroundImage: e.target.value })} />
        </Section>

        <Section title="Top Content" open={openSection === "topContent"} onToggle={() => toggle("topContent")}>
          <Field label="Title">
            <TextInput value={topContent.title} onChange={(e) => setTopContent({ ...topContent, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={topContent.description} onChange={(e) => setTopContent({ ...topContent, description: e.target.value })} />
          </Field>
        </Section>

        <Section title="Help Cards" open={openSection === "helpCards"} onToggle={() => toggle("helpCards")}>
          <LeadForm
            title="Help Cards"
            addLabel="Add Card"
            items={helpCards}
            onChange={setHelpCards}
            fields={[
              { name: "icon", label: "Icon", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "desc", label: "Description", type: "textarea", rows: 3 },
            ]}
          />
        </Section>

        <Section title="Web Design Section" open={openSection === "webDesign"} onToggle={() => toggle("webDesign")}>
          <Field label="Title">
            <TextInput value={webDesign.title} onChange={(e) => setWebDesign({ ...webDesign, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={webDesign.description} onChange={(e) => setWebDesign({ ...webDesign, description: e.target.value })} />
          </Field>
          <ImageInput label="Main Image" value={webDesign.image} onChange={(e) => setWebDesign({ ...webDesign, image: e.target.value })} />
          <Field label="Heading">
            <TextInput value={webDesign.heading} onChange={(e) => setWebDesign({ ...webDesign, heading: e.target.value })} />
          </Field>
          <Field label="Body Text 1">
            <TextArea rows={4} value={webDesign.bodyText1} onChange={(e) => setWebDesign({ ...webDesign, bodyText1: e.target.value })} />
          </Field>
          <Field label="Body Text 2">
            <TextArea rows={4} value={webDesign.bodyText2} onChange={(e) => setWebDesign({ ...webDesign, bodyText2: e.target.value })} />
          </Field>
        </Section>

        <Section title="CMS Section" open={openSection === "cmsSection"} onToggle={() => toggle("cmsSection")}>
          <Field label="Title">
            <TextInput value={cmsSection.title} onChange={(e) => setCmsSection({ ...cmsSection, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={cmsSection.description} onChange={(e) => setCmsSection({ ...cmsSection, description: e.target.value })} />
          </Field>

          <LeadForm
            title="CMS Cards"
            addLabel="Add Card"
            items={cmsData}
            onChange={setCmsData}
            fields={[
              { name: "icon", label: "Icon Name", type: "text" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "points", label: "Points", type: "multiline", rows: 4, placeholder: "One point per line" },
            ]}
          />
        </Section>

        <Section title="Our Work Section" open={openSection === "ourWork"} onToggle={() => toggle("ourWork")}>
          <Field label="Title">
            <TextInput value={ourWork.title} onChange={(e) => setOurWork({ ...ourWork, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={ourWork.description} onChange={(e) => setOurWork({ ...ourWork, description: e.target.value })} />
          </Field>
          <ImageInput label="Work Image" value={ourWork.image} onChange={(e) => setOurWork({ ...ourWork, image: e.target.value })} />
          <Field label="Work Title">
            <TextInput value={ourWork.workTitle} onChange={(e) => setOurWork({ ...ourWork, workTitle: e.target.value })} />
          </Field>
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="Bullets" onAdd={addOurWorkBullet} />
            {(ourWork.bullets || []).map((bullet, index) => (
              <div key={index} className="flex items-center gap-3">
                <TextInput value={bullet} onChange={(e) => updateOurWorkBullet(index, e.target.value)} />
                <RemoveBtn onClick={() => removeOurWorkBullet(index)} />
              </div>
            ))}
          </div>
          <ButtonFields label="Work Button" value={ourWork.button} onChange={(v) => setOurWork({ ...ourWork, button: v })} />
        </Section>

        <Section title="Built Section" open={openSection === "builtSection"} onToggle={() => toggle("builtSection")}>
          <Field label="Title">
            <TextInput value={builtSection.title} onChange={(e) => setBuiltSection({ ...builtSection, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={builtSection.description} onChange={(e) => setBuiltSection({ ...builtSection, description: e.target.value })} />
          </Field>
          <LeadForm
            title="Service Cards"
            addLabel="Add Service"
            items={services}
            onChange={setServices}
            fields={[
              { name: "image", label: "Service Image", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
            ]}
          />
        </Section>

        <Section title="Connect Section" open={openSection === "connectSection"} onToggle={() => toggle("connectSection")}>
          <Field label="Title">
            <TextInput value={connectSection.title} onChange={(e) => setConnectSection({ ...connectSection, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={connectSection.description} onChange={(e) => setConnectSection({ ...connectSection, description: e.target.value })} />
          </Field>
          <ButtonFields label="Submit Button" value={connectSection.button} onChange={(v) => setConnectSection({ ...connectSection, button: v })} />
        </Section>

        <Section title="Process Section" open={openSection === "processHeader"} onToggle={() => toggle("processHeader")}>
          <Field label="Title">
            <TextInput value={processHeader.title} onChange={(e) => setProcessHeader({ ...processHeader, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={processHeader.description} onChange={(e) => setProcessHeader({ ...processHeader, description: e.target.value })} />
          </Field>
          <ImageInput label="Process Image" value={processHeader.image} onChange={(e) => setProcessHeader({ ...processHeader, image: e.target.value })} />

          <LeadForm
            title="Process Steps"
            addLabel="Add Step"
            items={processData}
            onChange={setProcessData}
            fields={[
              { name: "title", label: "Title", type: "text", required: true },
              { name: "desc", label: "Description", type: "textarea", rows: 3 },
            ]}
          />
        </Section>

        <Section title="Testimonials Section" open={openSection === "testimonialHeader"} onToggle={() => toggle("testimonialHeader")}>
          <Field label="Title">
            <TextInput value={testimonialHeader.title} onChange={(e) => setTestimonialHeader({ ...testimonialHeader, title: e.target.value })} />
          </Field>
          <Field label="Subtitle">
            <TextArea rows={3} value={testimonialHeader.subtitle} onChange={(e) => setTestimonialHeader({ ...testimonialHeader, subtitle: e.target.value })} />
          </Field>
          <Field label="Video URL">
            <TextInput value={testimonialHeader.videoUrl} onChange={(e) => setTestimonialHeader({ ...testimonialHeader, videoUrl: e.target.value })} />
          </Field>

          <LeadForm
            title="Testimonials"
            addLabel="Add Testimonial"
            items={testimonials}
            onChange={setTestimonials}
            fields={[
              { name: "image", label: "Profile Image", type: "image" },
              { name: "name", label: "Name", type: "text", required: true },
              { name: "designation", label: "Designation", type: "text" },
              { name: "text", label: "Text", type: "textarea", rows: 3 },
            ]}
          />
        </Section>

        <Section title="Contact Banner" open={openSection === "contactBanner"} onToggle={() => toggle("contactBanner")}>
          <Field label="Phone">
            <TextInput value={contactBanner.phone} onChange={(e) => setContactBanner({ ...contactBanner, phone: e.target.value })} />
          </Field>
          <Field label="Email">
            <TextInput value={contactBanner.email} onChange={(e) => setContactBanner({ ...contactBanner, email: e.target.value })} />
          </Field>
          <ImageInput label="Logo" value={contactBanner.logo} onChange={(e) => setContactBanner({ ...contactBanner, logo: e.target.value })} />
        </Section>

        <Section title="FAQ Section" open={openSection === "faqHeader"} onToggle={() => toggle("faqHeader")}>
          <Field label="Title">
            <TextInput value={faqHeader.title} onChange={(e) => setFaqHeader({ ...faqHeader, title: e.target.value })} />
          </Field>
          <Field label="Subtitle">
            <TextArea rows={3} value={faqHeader.subtitle} onChange={(e) => setFaqHeader({ ...faqHeader, subtitle: e.target.value })} />
          </Field>
          <ImageInput label="FAQ Image" value={faqHeader.image} onChange={(e) => setFaqHeader({ ...faqHeader, image: e.target.value })} />

          <LeadForm
            title="FAQs"
            addLabel="Add FAQ"
            items={faqData}
            onChange={setFaqData}
            fields={[
              { name: "question", label: "Question", type: "text", required: true },
              { name: "answer", label: "Answer", type: "textarea", rows: 3 },
              { name: "answerList", label: "Answer Points", type: "multiline", rows: 4, placeholder: "One point per line" },
            ]}
          />
        </Section>

        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
