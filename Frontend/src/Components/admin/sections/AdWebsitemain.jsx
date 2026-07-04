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

const PAGE_SLUG = "Website-Maintenance-Services";

export default function AdWebsitemain() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("banner");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  // BANNER SECTION STATE
  const [bannerData, setBannerData] = useState({
    subtitle: "",
    title: "",
    description: "",
    primaryBtnText: "",
    primaryBtnLink: "",
    secondaryBtnText: "",
    secondayBtnLink: "",
    backgroundImage: "",
  });

  // TOP CONTENT STATE
  const [topContent, setTopContent] = useState({
    h1: "",
    p: "",
  });

  // HELP CARDS STATE
  const [helpCards, setHelpCards] = useState([
    { id: uid(), icon: "", title: "", desc: "" },
    { id: uid(), icon: "", title: "", desc: "" },
    { id: uid(), icon: "", title: "", desc: "" },
    { id: uid(), icon: "", title: "", desc: "" },
  ]);

  // WEB DESIGN SECTION STATE
  const [webDesignSection, setWebDesignSection] = useState({
    h1: "",
    span: "",
    p1: "",
    p2: "",
    image: "",
    h2: "",
  });

  // CMS SECTION STATE
  const [cmsSection, setCmsSection] = useState({
    h2: "",
    span: "",
    p: "",
    cmsData: [
      { id: uid(), icon: "FaWordpress", title: "", points: ["", "", ""] },
      { id: uid(), icon: "SiShopify", title: "", points: ["", "", ""] },
      { id: uid(), icon: "FaMagento", title: "", points: ["", "", ""] },
      { id: uid(), icon: "SiBigcommerce", title: "", points: ["", "", ""] },
    ],
  });

  // OUR WORK SECTION STATE
  const [ourWorkSection, setOurWorkSection] = useState({
    h2: "",
    span: "",
    p: "",
    workImage: "",
    workDetails: {
      h3: "",
      list: ["", "", "", "", ""],
      viewWorkLink: "",
    },
  });

  // BUILT SECTION STATE
  const [builtSection, setBuiltSection] = useState({
    h2: "",
    span: "",
    p: "",
    services: ["Web Design", "Web Development", "Branding", "SEO", "Ecommerce"],
    servicesImage: "",
  });

  const [services, setServices] = useState([
    { id: uid(), image: "", title: "Web Design" },
    { id: uid(), image: "", title: "Web Development" },
    { id: uid(), image: "", title: "Branding" },
    { id: uid(), image: "", title: "SEO" },
    { id: uid(), image: "", title: "Ecommerce" },
  ]);



  // PROCESS SECTION STATE
  const [processSection, setProcessSection] = useState({
    h2: "",
    span: "",
    p: "",
    processImage: "",
    processData: [
      { id: uid(), title: "", desc: "" },
      { id: uid(), title: "", desc: "" },
      { id: uid(), title: "", desc: "" },
      { id: uid(), title: "", desc: "" },
      { id: uid(), title: "", desc: "" },
    ],
  });

  const [processData, setProcessData] = useState([
    { id: uid(), title: "ANALYSIS", desc: "" },
    { id: uid(), title: "YOUR TEAM", desc: "" },
    { id: uid(), title: "DESIGN STAGE", desc: "" },
    { id: uid(), title: "DEVELOPMENT STAGE", desc: "" },
    { id: uid(), title: "LAUNCH", desc: "" },
  ]);

  // TESTIMONIALS SECTION STATE
  const [testimonialsSection, setTestimonialsSection] = useState({
    title: "",
    subtitle: "",
    videoUrl: "",
    videoUpload: "",
    videoImage: "",
    testimonials: [
      { id: uid(), image: "", name: "", designation: "", text: "" },
      { id: uid(), image: "", name: "", designation: "", text: "" },
      { id: uid(), image: "", name: "", designation: "", text: "" },
    ],
  });

  // CONTACT BANNER STATE
  const [contactBanner, setContactBanner] = useState({
    phone: "",
    email: "",
    logo: "",
  });

  // FAQ SECTION STATE
  const [faqSection, setFaqSection] = useState({
    h2: "",
    p: "",
    faqImage: "",
    faqData: [
      { id: uid(), question: "", answer: ["", "", ""] },
      { id: uid(), question: "", answer: "" },
      { id: uid(), question: "", answer: "" },
      { id: uid(), question: "", answer: "" },
      { id: uid(), question: "", answer: "" },
    ],
  });

  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  // CMS DATA HELPERS
  const updateCmsItem = (id, field, value) =>
    setCmsSection({
      ...cmsSection,
      cmsData: cmsSection.cmsData.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    });
  const addCmsItem = () =>
    setCmsSection({
      ...cmsSection,
      cmsData: [...cmsSection.cmsData, { id: uid(), icon: CMS_ICON_OPTIONS[0], title: "", points: [] }],
    });
  const removeCmsItem = (id) =>
    setCmsSection({
      ...cmsSection,
      cmsData: cmsSection.cmsData.filter((item) => item.id !== id),
    });
  const updateCmsPoint = (id, pointIdx, value) =>
    setCmsSection({
      ...cmsSection,
      cmsData: cmsSection.cmsData.map((item) =>
        item.id === id
          ? { ...item, points: item.points.map((pt, i) => (i === pointIdx ? value : pt)) }
          : item
      ),
    });
  const addCmsPoint = (id) =>
    setCmsSection({
      ...cmsSection,
      cmsData: cmsSection.cmsData.map((item) =>
        item.id === id ? { ...item, points: [...(item.points || []), ""] } : item
      ),
    });
  const removeCmsPoint = (id, index) =>
    setCmsSection({
      ...cmsSection,
      cmsData: cmsSection.cmsData.map((item) =>
        item.id === id ? { ...item, points: (item.points || []).filter((_, i) => i !== index) } : item
      ),
    });

  // OUR WORK LIST HELPERS
  const updateOurWorkBullet = (index, value) => {
    const list = [...(ourWorkSection.workDetails.list || [])];
    list[index] = value;
    setOurWorkSection({
      ...ourWorkSection,
      workDetails: { ...ourWorkSection.workDetails, list },
    });
  };

  const addOurWorkBullet = () => {
    setOurWorkSection({
      ...ourWorkSection,
      workDetails: {
        ...ourWorkSection.workDetails,
        list: [...(ourWorkSection.workDetails.list || []), ""],
      },
    });
  };

  const removeOurWorkBullet = (index) => {
    setOurWorkSection({
      ...ourWorkSection,
      workDetails: {
        ...ourWorkSection.workDetails,
        list: (ourWorkSection.workDetails.list || []).filter((_, i) => i !== index),
      },
    });
  };





  // FAQ HELPERS
  const updateFaq = (id, field, value) =>
    setFaqSection({
      ...faqSection,
      faqData: faqSection.faqData.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    });
  const addFaq = () =>
    setFaqSection({
      ...faqSection,
      faqData: [...faqSection.faqData, { id: uid(), question: "", isList: false, answer: "", answerList: [] }],
    });
  const removeFaq = (id) =>
    setFaqSection({ ...faqSection, faqData: faqSection.faqData.filter((item) => item.id !== id) });

  const updateFaqAnswerPoint = (faqId, index, value) =>
    setFaqSection({
      ...faqSection,
      faqData: faqSection.faqData.map((item) => {
        if (item.id !== faqId) return item;
        const answerList = [...(item.answerList || [])];
        answerList[index] = value;
        return { ...item, answerList };
      }),
    });
  const addFaqAnswerPoint = (faqId) =>
    setFaqSection({
      ...faqSection,
      faqData: faqSection.faqData.map((item) =>
        item.id === faqId ? { ...item, answerList: [...(item.answerList || []), ""] } : item
      ),
    });
  const removeFaqAnswerPoint = (faqId, index) =>
    setFaqSection({
      ...faqSection,
      faqData: faqSection.faqData.map((item) =>
        item.id === faqId
          ? { ...item, answerList: (item.answerList || []).filter((_, i) => i !== index) }
          : item
      ),
    });

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
      if (data.bannerData) setBannerData(data.bannerData);
      if (data.topContent) setTopContent(data.topContent);
      if (data.helpCards) setHelpCards(data.helpCards);
      if (data.webDesignSection) setWebDesignSection(data.webDesignSection);
      if (data.cmsSection) setCmsSection(data.cmsSection);
      if (data.ourWorkSection) setOurWorkSection(data.ourWorkSection);
      if (data.builtSection) setBuiltSection(data.builtSection);
      if (data.services) setServices(data.services);
      if (data.connectSection) setConnectSection(data.connectSection);
      if (data.processSection) setProcessSection(data.processSection);
      if (data.processData) setProcessData(data.processData);
      if (data.testimonialsSection) {
        setTestimonialsSection({
          title: data.testimonialsSection.title || "",
          subtitle: data.testimonialsSection.subtitle || "",
          videoUrl: data.testimonialsSection.videoUrl || "",
          videoUpload: data.testimonialsSection.videoUpload || "",
          videoImage: data.testimonialsSection.videoImage || "",
          testimonials: data.testimonialsSection.testimonials || [],
        });
      }
      if (data.contactBanner) setContactBanner(data.contactBanner);
      if (data.faqSection) setFaqSection(data.faqSection);
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
      bannerData,
      topContent,
      helpCards,
      webDesignSection,
      cmsSection,
      ourWorkSection,
      builtSection,
      services,
      processSection,
      processData,
      testimonialsSection,
      contactBanner,
      faqSection,
    };

    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("Website Maintenance Services page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <PageHeader title="Website Maintenance Services Page Content - Admin" description="Edit all Website Maintenance Services page sections from the admin panel." status={status} />
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="HERO BANNER" open={openSection === "banner"} onToggle={() => toggle("banner")}>
          <Field label="Subtitle">
            <TextInput value={bannerData.subtitle} onChange={(e) => setBannerData({ ...bannerData, subtitle: e.target.value })} />
          </Field>
          <Field label="Title">
            <TextInput value={bannerData.title} onChange={(e) => setBannerData({ ...bannerData, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={bannerData.description} onChange={(e) => setBannerData({ ...bannerData, description: e.target.value })} />
          </Field>
          <ButtonFields
            label="Primary Button"
            value={{ text: bannerData.primaryBtnText, link: bannerData.primaryBtnLink }}
            onChange={(v) => setBannerData({ ...bannerData, primaryBtnText: v.text, primaryBtnLink: v.link })}
          />
          <ButtonFields
            label="Secondary Button"
            value={{ text: bannerData.secondaryBtnText, link: bannerData.secondayBtnLink }}
            onChange={(v) => setBannerData({ ...bannerData, secondaryBtnText: v.text, secondayBtnLink: v.link })}
          />
          <ImageInput label="Background Image" value={bannerData.backgroundImage} onChange={(e) => setBannerData({ ...bannerData, backgroundImage: e.target.value })} />
        </Section>

        <Section title="TOP CONTENT" open={openSection === "topContent"} onToggle={() => toggle("topContent")}>
          <Field label="Title">
            <TextInput value={topContent.h1} onChange={(e) => setTopContent({ ...topContent, h1: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={topContent.p} onChange={(e) => setTopContent({ ...topContent, p: e.target.value })} />
          </Field>
        </Section>

        <Section title="HELP CARDS" open={openSection === "helpCards"} onToggle={() => toggle("helpCards")}>
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

        <Section title="WEB DESIGN SECTION" open={openSection === "webDesignSection"} onToggle={() => toggle("webDesignSection")}>
          <Field label="Title">
            <TextInput value={webDesignSection.h1} onChange={(e) => setWebDesignSection({ ...webDesignSection, h1: e.target.value })} />
          </Field>
          <Field label="Highlighted Text (Span)">
            <TextInput value={webDesignSection.span} onChange={(e) => setWebDesignSection({ ...webDesignSection, span: e.target.value })} />
          </Field>
          <Field label="First Paragraph">
            <TextArea rows={3} value={webDesignSection.p1} onChange={(e) => setWebDesignSection({ ...webDesignSection, p1: e.target.value })} />
          </Field>
          <Field label="Second Paragraph">
            <TextArea rows={3} value={webDesignSection.p2} onChange={(e) => setWebDesignSection({ ...webDesignSection, p2: e.target.value })} />
          </Field>
          <ImageInput label="Image" value={webDesignSection.image} onChange={(e) => setWebDesignSection({ ...webDesignSection, image: e.target.value })} />
          <Field label="Second Title">
            <TextInput value={webDesignSection.h2} onChange={(e) => setWebDesignSection({ ...webDesignSection, h2: e.target.value })} />
          </Field>
        </Section>

        <Section title="CMS SECTION" open={openSection === "cmsSection"} onToggle={() => toggle("cmsSection")}>
          <Field label="Title">
            <TextInput value={cmsSection.h2} onChange={(e) => setCmsSection({ ...cmsSection, h2: e.target.value })} />
          </Field>
          <Field label="Highlighted Text (Span)">
            <TextInput value={cmsSection.span} onChange={(e) => setCmsSection({ ...cmsSection, span: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={3} value={cmsSection.p} onChange={(e) => setCmsSection({ ...cmsSection, p: e.target.value })} />
          </Field>
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="CMS Cards" onAdd={addCmsItem} />
            {cmsSection.cmsData.map((cms, index) => (
              <div key={cms.id} className="p-4 bg-bg-secondary rounded-2xl border border-brand-primary/25 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-text-muted">CMS Card {index + 1}</span>
                  <RemoveBtn onClick={() => removeCmsItem(cms.id)} />
                </div>
                <Field label="Icon">
                  <select
                    className={inputCls}
                    value={cms.icon || CMS_ICON_OPTIONS[0]}
                    onChange={(e) => updateCmsItem(cms.id, "icon", e.target.value)}
                  >
                    {CMS_ICON_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Title">
                  <TextInput value={cms.title} onChange={(e) => updateCmsItem(cms.id, "title", e.target.value)} />
                </Field>
                <Field label="Points">
                  <div className="space-y-2">
                    {(cms.points || []).map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center gap-3">
                        <TextInput value={point} onChange={(e) => updateCmsPoint(cms.id, pointIndex, e.target.value)} />
                        <RemoveBtn onClick={() => removeCmsPoint(cms.id, pointIndex)} />
                      </div>
                    ))}
                    <AddRowBtn label="Add Point" onClick={() => addCmsPoint(cms.id)} />
                  </div>
                </Field>
              </div>
            ))}
          </div>
        </Section>

        <Section title="OUR WORK SECTION" open={openSection === "ourWorkSection"} onToggle={() => toggle("ourWorkSection")}>
          <Field label="Title">
            <TextInput value={ourWorkSection.h2} onChange={(e) => setOurWorkSection({ ...ourWorkSection, h2: e.target.value })} />
          </Field>
          <Field label="Highlighted Text (Span)">
            <TextInput value={ourWorkSection.span} onChange={(e) => setOurWorkSection({ ...ourWorkSection, span: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={3} value={ourWorkSection.p} onChange={(e) => setOurWorkSection({ ...ourWorkSection, p: e.target.value })} />
          </Field>
          <ImageInput label="Work Image" value={ourWorkSection.workImage} onChange={(e) => setOurWorkSection({ ...ourWorkSection, workImage: e.target.value })} />
          <h4 className="text-sm font-semibold text-text-secondary">Work Details</h4>
          <Field label="Work Title">
            <TextInput
              value={ourWorkSection.workDetails.h3}
              onChange={(e) =>
                setOurWorkSection({
                  ...ourWorkSection,
                  workDetails: { ...ourWorkSection.workDetails, h3: e.target.value },
                })
              }
            />
          </Field>
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="Bullets" onAdd={addOurWorkBullet} />
            {(ourWorkSection.workDetails.list || []).map((bullet, index) => (
              <div key={index} className="flex items-center gap-2">
                <TextInput value={bullet} onChange={(e) => updateOurWorkBullet(index, e.target.value)} />
                <RemoveBtn onClick={() => removeOurWorkBullet(index)} />
              </div>
            ))}
          </div>
          <ButtonFields
            label="Work Button"
            value={{
              text: ourWorkSection.workDetails.buttonText || "View All Work",
              link: ourWorkSection.workDetails.viewWorkLink || "",
            }}
            onChange={(v) =>
              setOurWorkSection({
                ...ourWorkSection,
                workDetails: {
                  ...ourWorkSection.workDetails,
                  buttonText: v.text,
                  viewWorkLink: v.link,
                },
              })
            }
          />
        </Section>

        <Section title="BUILT SECTION" open={openSection === "builtSection"} onToggle={() => toggle("builtSection")}>
          <Field label="Title">
            <TextInput value={builtSection.h2} onChange={(e) => setBuiltSection({ ...builtSection, h2: e.target.value })} />
          </Field>
          <Field label="Highlighted Text (Span)">
            <TextInput value={builtSection.span} onChange={(e) => setBuiltSection({ ...builtSection, span: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={3} value={builtSection.p} onChange={(e) => setBuiltSection({ ...builtSection, p: e.target.value })} />
          </Field>
          <LeadForm
            title="Services"
            addLabel="Add Service"
            items={services}
            onChange={setServices}
            fields={[
              { name: "image", label: "Service Image", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
            ]}
          />
        </Section>



        <Section title="PROCESS SECTION" open={openSection === "processSection"} onToggle={() => toggle("processSection")}>
          <Field label="Title">
            <TextInput value={processSection.h2} onChange={(e) => setProcessSection({ ...processSection, h2: e.target.value })} />
          </Field>
          <Field label="Highlighted Text (Span)">
            <TextInput value={processSection.span} onChange={(e) => setProcessSection({ ...processSection, span: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={3} value={processSection.p} onChange={(e) => setProcessSection({ ...processSection, p: e.target.value })} />
          </Field>
          <ImageInput label="Process Image" value={processSection.processImage} onChange={(e) => setProcessSection({ ...processSection, processImage: e.target.value })} />
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

        <Section title="TESTIMONIALS SECTION" open={openSection === "testimonialsSection"} onToggle={() => toggle("testimonialsSection")}>
          <Field label="Title">
            <TextInput value={testimonialsSection.title} onChange={(e) => setTestimonialsSection({ ...testimonialsSection, title: e.target.value })} />
          </Field>
          <Field label="Subtitle">
            <TextArea rows={2} value={testimonialsSection.subtitle} onChange={(e) => setTestimonialsSection({ ...testimonialsSection, subtitle: e.target.value })} />
          </Field>
          <Field label="Video URL (YouTube link)">
            <TextInput value={testimonialsSection.videoUrl} onChange={(e) => setTestimonialsSection({ ...testimonialsSection, videoUrl: e.target.value })} />
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
                        setTestimonialsSection({ ...testimonialsSection, videoUpload: url });
                        showToast("Video uploaded successfully");
                      } catch (err) {
                        showToast(err.message || "Video upload failed", "error");
                      }
                    }
                  }}
                  className={inputCls}
                />
              </div>
              {testimonialsSection.videoUpload && (
                <span className="text-xs text-brand-primary truncate max-w-xs">{testimonialsSection.videoUpload}</span>
              )}
            </div>
          </Field>
          <Field label="Upload Video Thumbnail / Placeholder Image">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl border border-brand-primary/25 bg-bg-secondary flex items-center justify-center overflow-hidden shrink-0">
                {testimonialsSection.videoImage ? (
                  <img src={testimonialsSection.videoImage} alt="" className="w-full h-full object-cover" />
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
                        setTestimonialsSection({ ...testimonialsSection, videoImage: url });
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
            title="Testimonials"
            addLabel="Add Testimonial"
            items={testimonialsSection.testimonials}
            onChange={(v) => setTestimonialsSection({ ...testimonialsSection, testimonials: v })}
            fields={[
              { name: "image", label: "Client Image", type: "image" },
              { name: "name", label: "Client Name", type: "text", required: true },
              { name: "designation", label: "Designation/Company", type: "text" },
              { name: "text", label: "Testimonial Text", type: "textarea", rows: 3 },
            ]}
          />
        </Section>

        <Section title="CONTACT BANNER" open={openSection === "contactBanner"} onToggle={() => toggle("contactBanner")}>
          <Field label="Phone Number">
            <TextInput value={contactBanner.phone} onChange={(e) => setContactBanner({ ...contactBanner, phone: e.target.value })} />
          </Field>
          <Field label="Email Address">
            <TextInput type="email" value={contactBanner.email} onChange={(e) => setContactBanner({ ...contactBanner, email: e.target.value })} />
          </Field>
          <ImageInput label="Logo" value={contactBanner.logo} onChange={(e) => setContactBanner({ ...contactBanner, logo: e.target.value })} />
        </Section>

        <Section title="FAQ SECTION" open={openSection === "faqSection"} onToggle={() => toggle("faqSection")}>
          <Field label="Title">
            <TextInput value={faqSection.h2} onChange={(e) => setFaqSection({ ...faqSection, h2: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={2} value={faqSection.p} onChange={(e) => setFaqSection({ ...faqSection, p: e.target.value })} />
          </Field>
          <ImageInput label="FAQ Image" value={faqSection.faqImage} onChange={(e) => setFaqSection({ ...faqSection, faqImage: e.target.value })} />
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="FAQs" onAdd={addFaq} />
            {faqSection.faqData.map((faq, index) => (
              <div key={faq.id} className="p-4 bg-bg-secondary rounded-2xl border border-brand-primary/25 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-text-muted">FAQ {index + 1}</span>
                  <RemoveBtn onClick={() => removeFaq(faq.id)} />
                </div>
                <Field label="Question">
                  <TextArea rows={2} value={faq.question} onChange={(e) => updateFaq(faq.id, "question", e.target.value)} />
                </Field>
                <label className="flex items-center gap-2 text-sm text-text-secondary">
                  <input
                    type="checkbox"
                    checked={!!faq.isList}
                    onChange={(e) => updateFaq(faq.id, "isList", e.target.checked)}
                  />
                  Show answer as a bullet list
                </label>
                {faq.isList ? (
                  <Field label="Answer Points">
                    <div className="space-y-2">
                      {(faq.answerList || []).map((point, pointIdx) => (
                        <div key={pointIdx} className="flex items-center gap-3">
                          <TextInput value={point} onChange={(e) => updateFaqAnswerPoint(faq.id, pointIdx, e.target.value)} />
                          <RemoveBtn onClick={() => removeFaqAnswerPoint(faq.id, pointIdx)} />
                        </div>
                      ))}
                      <AddRowBtn label="Add Point" onClick={() => addFaqAnswerPoint(faq.id)} />
                    </div>
                  </Field>
                ) : (
                  <Field label="Answer Text">
                    <TextArea rows={3} value={faq.answer} onChange={(e) => updateFaq(faq.id, "answer", e.target.value)} />
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
