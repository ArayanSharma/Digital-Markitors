import { useEffect, useState, useCallback } from "react";
import { loadPageContent, savePageContent, uploadFile } from "../../../utils/pageApi";
import { uid } from "../../../utils/uid";
import { Plus } from "lucide-react";
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
  inputCls,
} from "./common/FormKit";

const CMS_ICON_OPTIONS = ["WordPress", "Shopify", "Magento", "BigCommerce"];

const AddRowBtn = ({ onClick, label = "Add" }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center gap-1 text-xs font-medium text-brand-accent hover:text-brand-accent bg-brand-primary/10 hover:bg-brand-primary/20 px-3 py-1.5 rounded-full transition-colors"
  >
    <Plus size={14} /> {label}
  </button>
);

const PAGE_SLUG = "shopify-development";

export default function AdShopifyDev() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("hero");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [hero, setHero] = useState({
    subtitle: "",
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
  const updateCmsCard = (id, field, value) =>
    setCmsData(cmsData.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  const addCmsCard = () =>
    setCmsData([...cmsData, { id: uid(), icon: CMS_ICON_OPTIONS[0], title: "", points: [] }]);
  const removeCmsCard = (id) => setCmsData(cmsData.filter((item) => item.id !== id));
  const updateCmsPoint = (id, index, value) =>
    setCmsData(
      cmsData.map((item) =>
        item.id === id
          ? { ...item, points: item.points.map((p, i) => (i === index ? value : p)) }
          : item
      )
    );
  const addCmsPoint = (id) =>
    setCmsData(
      cmsData.map((item) => (item.id === id ? { ...item, points: [...item.points, ""] } : item))
    );
  const removeCmsPoint = (id, index) =>
    setCmsData(
      cmsData.map((item) =>
        item.id === id ? { ...item, points: item.points.filter((_, i) => i !== index) } : item
      )
    );

  const [ourWork, setOurWork] = useState({
    title: "",
    description: "",
    image: "",
    workTitle: "",
    bullets: [],
    button: { text: "", link: "" },
  });
  const updateOurWorkBullet = (index, value) =>
    setOurWork({ ...ourWork, bullets: ourWork.bullets.map((b, i) => (i === index ? value : b)) });
  const addOurWorkBullet = () => setOurWork({ ...ourWork, bullets: [...ourWork.bullets, ""] });
  const removeOurWorkBullet = (index) =>
    setOurWork({ ...ourWork, bullets: ourWork.bullets.filter((_, i) => i !== index) });

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
    videoUpload: "",
    videoImage: "",
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
  const updateFaq = (id, field, value) =>
    setFaqData(faqData.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  const addFaq = () =>
    setFaqData([
      ...faqData,
      { id: uid(), question: "", isList: false, answerText: "", answerList: [] },
    ]);
  const removeFaq = (id) => setFaqData(faqData.filter((item) => item.id !== id));
  const updateFaqAnswerPoint = (id, index, value) =>
    setFaqData(
      faqData.map((item) => {
        if (item.id !== id) return item;
        const answerList = [...(item.answerList || [])];
        answerList[index] = value;
        return { ...item, answerList };
      })
    );
  const addFaqAnswerPoint = (id) =>
    setFaqData(
      faqData.map((item) =>
        item.id === id ? { ...item, answerList: [...(item.answerList || []), ""] } : item
      )
    );
  const removeFaqAnswerPoint = (id, index) =>
    setFaqData(
      faqData.map((item) =>
        item.id === id
          ? { ...item, answerList: (item.answerList || []).filter((_, i) => i !== index) }
          : item
      )
    );

  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

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
      if (data.testimonialHeader) {
        setTestimonialHeader({
          title: data.testimonialHeader.title || "",
          subtitle: data.testimonialHeader.subtitle || "",
          videoUrl: data.testimonialHeader.videoUrl || "",
          videoUpload: data.testimonialHeader.videoUpload || "",
          videoImage: data.testimonialHeader.videoImage || "",
        });
      }
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
      showToast("Shopify Development page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-brand-primary">Shopify Development Page Content — Admin</h1>
            <p className="text-sm text-text-muted">Edit all Shopify Development page sections from the admin panel.</p>
          </div>
        </div>
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="Hero Banner" open={openSection === "hero"} onToggle={() => toggle("hero")}>
          <Field label="Subtitle">
            <TextInput value={hero.subtitle} onChange={(e) => setHero({ ...hero, subtitle: e.target.value })} />
          </Field>
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
            title="Help Card"
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
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="CMS Cards" onAdd={addCmsCard} />
            {cmsData.map((item, index) => (
              <div key={item.id} className="p-4 bg-bg-secondary rounded-2xl border border-brand-primary/25 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-text-muted">CMS Card {index + 1}</span>
                  <RemoveBtn onClick={() => removeCmsCard(item.id)} />
                </div>
                <Field label="Icon">
                  <select
                    className={inputCls}
                    value={item.icon}
                    onChange={(e) => updateCmsCard(item.id, "icon", e.target.value)}
                  >
                    {CMS_ICON_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Title">
                  <TextInput value={item.title} onChange={(e) => updateCmsCard(item.id, "title", e.target.value)} />
                </Field>
                <Field label="Points">
                  <div className="space-y-2">
                    {(item.points || []).map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center gap-3">
                        <TextInput value={point} onChange={(e) => updateCmsPoint(item.id, pointIndex, e.target.value)} />
                        <RemoveBtn onClick={() => removeCmsPoint(item.id, pointIndex)} />
                      </div>
                    ))}
                    <AddRowBtn label="Add Point" onClick={() => addCmsPoint(item.id)} />
                  </div>
                </Field>
              </div>
            ))}
          </div>
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
            {ourWork.bullets.map((bullet, index) => (
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
            title="Service"
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
            title="Process Step"
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
          <Field label="Video URL (YouTube link)">
            <TextInput value={testimonialHeader.videoUrl} onChange={(e) => setTestimonialHeader({ ...testimonialHeader, videoUrl: e.target.value })} />
          </Field>
          <Field label="Upload Video File">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 flex-1">
                <input
                  type="file"
                  accept="video/*"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      try {
                        const url = await uploadFile(file);
                        setTestimonialHeader({ ...testimonialHeader, videoUpload: url });
                        showToast("Video uploaded successfully");
                      } catch (err) {
                        showToast(err.message || "Video upload failed", "error");
                      }
                    }
                  }}
                  className={inputCls}
                />
              </div>
              {testimonialHeader.videoUpload && (
                <span className="text-xs text-brand-primary truncate max-w-xs">{testimonialHeader.videoUpload}</span>
              )}
            </div>
          </Field>
          <Field label="Upload Video Thumbnail / Placeholder Image">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl border border-brand-primary/25 bg-bg-secondary flex items-center justify-center overflow-hidden shrink-0">
                {testimonialHeader.videoImage ? (
                  <img src={testimonialHeader.videoImage} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-text-muted">No Image</span>
                )}
              </div>
              <div className="flex items-center gap-2 flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      try {
                        const url = await uploadFile(file);
                        setTestimonialHeader({ ...testimonialHeader, videoImage: url });
                        showToast("Thumbnail uploaded successfully");
                      } catch (err) {
                        showToast(err.message || "Thumbnail upload failed", "error");
                      }
                    }
                  }}
                  className={inputCls}
                />
              </div>
            </div>
          </Field>
          <LeadForm
            title="Testimonial"
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
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="FAQ Items" onAdd={addFaq} />
            {faqData.map((item, index) => (
              <div key={item.id} className="p-4 bg-bg-secondary rounded-2xl border border-brand-primary/25 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-text-muted">FAQ {index + 1}</span>
                  <RemoveBtn onClick={() => removeFaq(item.id)} />
                </div>
                <Field label="Question">
                  <TextInput value={item.question} onChange={(e) => updateFaq(item.id, "question", e.target.value)} />
                </Field>
                <label className="flex items-center gap-2 text-sm text-text-secondary">
                  <input
                    type="checkbox"
                    checked={!!item.isList}
                    onChange={(e) => updateFaq(item.id, "isList", e.target.checked)}
                  />
                  Show answer as a bullet list
                </label>
                {item.isList ? (
                  <Field label="Answer Points">
                    <div className="space-y-2">
                      {(item.answerList || []).map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center gap-3">
                          <TextInput value={point} onChange={(e) => updateFaqAnswerPoint(item.id, pointIndex, e.target.value)} />
                          <RemoveBtn onClick={() => removeFaqAnswerPoint(item.id, pointIndex)} />
                        </div>
                      ))}
                      <AddRowBtn label="Add Point" onClick={() => addFaqAnswerPoint(item.id)} />
                    </div>
                  </Field>
                ) : (
                  <Field label="Answer Text">
                    <TextArea rows={3} value={item.answerText} onChange={(e) => updateFaq(item.id, "answerText", e.target.value)} />
                  </Field>
                )}
              </div>
            ))}
          </div>
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
