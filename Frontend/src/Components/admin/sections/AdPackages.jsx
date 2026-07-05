import { useEffect, useState, useCallback } from "react";
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
  CardListHeader,
  RemoveBtn,
  ImageInput,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "packages";

export default function AdPackages() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("hero");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [hero, setHero] = useState({
    heading: "Affordable SEO Packages Plans & Pricing Delhi, India",
    description:
      "Take full advantage of Digicore Inc’s affordable yet professional SEO services to get more organic traffic on your website and grow your business immensely.",
    bullets: [
      "ROI-Driven SEO pricing packages that assure you top rankings",
      "Absolute adherence to Webmaster guidelines",
      "Handpicked monthly SEO packages in India starting @ 15000*",
    ],
    image: "",
  });

  const [seoSection, setSeoSection] = useState({
    heading: "Get the Best and Result-Oriented SEO Packages in India and Plans with Us",
    description:
      "Our SEO services are quite economical when compared with others. Digicore Inc, as the top digital marketing company in Delhi offer market-centric and result-oriented SEO services. We use White Hat techniques to ensure that your website’s ranking grows organically.",
  });

  const [plans, setPlans] = useState([
    { id: uid(), name: "STANDARD", keywords: "30 KEYWORDS", duration: "6 MONTHS", buttonText: "Enquire Now", buttonLink: "/contact" },
    { id: uid(), name: "PREMIUM", keywords: "50 KEYWORDS", duration: "6 MONTHS", buttonText: "Enquire Now", buttonLink: "/contact" },
    { id: uid(), name: "BUSINESS", keywords: "80 KEYWORDS", duration: "6 MONTHS", buttonText: "Enquire Now", buttonLink: "/contact" },
    { id: uid(), name: "PLATINUM", keywords: "150 KEYWORDS", duration: "6 MONTHS", buttonText: "Enquire Now", buttonLink: "/contact" },
  ]);

  const [features, setFeatures] = useState([
    {
      id: uid(),
      title: "Initial Review and Analysis",
      details: [
        "Local Optimization",
        "In-Depth Site Analysis",
        "Keyword Analysis",
        "Competitor Analysis",
      ],
    },
    {
      id: uid(),
      title: "On Page Optimization",
      details: [
        "Canonicalization",
        "Header Tags Optimization",
        "Internal Link Structuring & Optimization",
        "Existing Content Optimization",
      ],
    },
    {
      id: uid(),
      title: "Content Marketing",
      details: ["Blog Writing", "PDF Creation", "Press Release Writing", "Guest Post Writing"],
    },
  ]);

  const [whyChoose, setWhyChoose] = useState({
    heading: "Fulfill Your Dream of Number #1 Ranking with Our Local SEO Packages",
    paragraphs: [
      "Digicore Inc is one of the most reliable SEO companies in Delhi, India. Since our inception, we have worked on numerous challenging projects for both domestic and international clients. Our growing experience, expertise, and commitment to staying ahead of the competition help us deliver exceptional results.",
      "Whether you are an established market leader or a budding startup, generating calls and leads is essential for business success. If you're unsure where to begin, it's time to grow locally. Choose our affordable Local SEO Packages and let us enhance your website’s online visibility, credibility, and ability to attract more targeted customers.",
    ],
  });

  const [contactBanner, setContactBanner] = useState({
    phone: "9818888064",
    email: "hello@digitalmarkitors.com",
    logo: "",
  });

  const [testimonials, setTestimonials] = useState([
    {
      id: uid(),
      image: "",
      name: "Gursimran Jassal",
      designation: "Co-Founder - Skittles Productions",
      text: "We took SEO and digital services from Digicore Inc and that really boosted our sales. I must say Ram and his team is very efficient and professional.",
    },
    {
      id: uid(),
      image: "",
      name: "Pawandeep Singh",
      designation: "CEO - Signature Visas",
      text: "Choosing Digicore Inc was my best decision. Their team shortlisted the right keywords and within a few months most keywords started ranking on Google's first page.",
    },
    {
      id: uid(),
      image: "",
      name: "Dheeraj Kumar",
      designation: "Director - CEPL",
      text: "I approached Digicore Inc to improve my company's online presence. After a few months, my website started generating quality business and leads.",
    },
  ]);

  const [video, setVideo] = useState({ url: "", upload: "" });
  const [testimonialsTitle, setTestimonialsTitle] = useState("Testimonials");
  const [testimonialsHeading, setTestimonialsHeading] = useState("");
  const [featuresMeta, setFeaturesMeta] = useState({ heading1: "", heading2: "", mobile: "" });

  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const updateFeature = (id, field, value) => setFeatures(features.map((feature) => (feature.id === id ? { ...feature, [field]: value } : feature)));
  const addFeature = () => setFeatures([...features, { id: uid(), title: "", details: [""] }]);
  const removeFeature = (id) => setFeatures(features.filter((feature) => feature.id !== id));
  const addFeatureDetail = (featureId) =>
    setFeatures(
      features.map((feature) =>
        feature.id === featureId ? { ...feature, details: [...feature.details, ""] } : feature
      )
    );
  const updateFeatureDetail = (featureId, detailIndex, value) =>
    setFeatures(
      features.map((feature) =>
        feature.id === featureId
          ? {
              ...feature,
              details: feature.details.map((detail, index) => (index === detailIndex ? value : detail)),
            }
          : feature
      )
    );
  const removeFeatureDetail = (featureId, detailIndex) =>
    setFeatures(
      features.map((feature) =>
        feature.id === featureId
          ? {
              ...feature,
              details: feature.details.filter((_, index) => index !== detailIndex),
            }
          : feature
      )
    );

  const addWhyParagraph = () => setWhyChoose({ ...whyChoose, paragraphs: [...whyChoose.paragraphs, ""] });
  const updateWhyParagraph = (index, value) =>
    setWhyChoose({ ...whyChoose, paragraphs: whyChoose.paragraphs.map((paragraph, i) => (i === index ? value : paragraph)) });
  const removeWhyParagraph = (index) => setWhyChoose({ ...whyChoose, paragraphs: whyChoose.paragraphs.filter((_, i) => i !== index) });

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
      if (data.seoSection) setSeoSection(data.seoSection);
      if (data.plans) setPlans(data.plans);
      if (data.features) setFeatures(data.features);
      if (data.featuresMeta) setFeaturesMeta(data.featuresMeta);
      if (data.whyChoose) setWhyChoose(data.whyChoose);
      if (data.contactBanner) setContactBanner(data.contactBanner);
      if (data.testimonials) setTestimonials(data.testimonials);
      if (data.video) setVideo(data.video);
      if (data.testimonialsTitle) setTestimonialsTitle(data.testimonialsTitle);
      if (data.testimonialsHeading) setTestimonialsHeading(data.testimonialsHeading);
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
      seoSection,
      plans,
      features,
      whyChoose,
      featuresMeta,
      contactBanner,
      testimonials,
      video,
      testimonialsTitle,
      testimonialsHeading,
    };
    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("Packages page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-brand-primary">Packages Page Content — Admin</h1>
            <p className="text-sm text-text-muted">Manage every section of the Packages page from the admin panel.</p>
          </div>
        </div>
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="1. Hero Banner" open={openSection === "hero"} onToggle={() => toggle("hero")}>
          <Field label="Heading">
            <TextInput value={hero.heading} onChange={(e) => setHero({ ...hero, heading: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={hero.description} onChange={(e) => setHero({ ...hero, description: e.target.value })} />
          </Field>
          <div className="md:col-span-2 space-y-3">
            <CardListHeader
              title="Banner Bullet Points"
              onAdd={() => setHero({ ...hero, bullets: [...hero.bullets, ""] })}
            />
            {hero.bullets.map((bullet, index) => (
              <div key={index} className="grid grid-cols-12 gap-3 items-end p-3 bg-bg-secondary rounded-2xl border border-brand-primary/15">
                <div className="col-span-11">
                  <TextInput
                    value={bullet}
                    onChange={(e) =>
                      setHero({
                        ...hero,
                        bullets: hero.bullets.map((item, idx) => (idx === index ? e.target.value : item)),
                      })
                    }
                  />
                </div>
                <div className="col-span-1 flex justify-center pb-2">
                  <RemoveBtn onClick={() => setHero({ ...hero, bullets: hero.bullets.filter((_, idx) => idx !== index) })} />
                </div>
              </div>
            ))}
          </div>
          <ImageInput label="Banner Image" value={hero.image} onChange={(e) => setHero({ ...hero, image: e.target.value })} />
        </Section>

        <Section title="2. SEO Packages Intro" open={openSection === "seoSection"} onToggle={() => toggle("seoSection")}>
          <Field label="Heading">
            <TextInput value={seoSection.heading} onChange={(e) => setSeoSection({ ...seoSection, heading: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={seoSection.description} onChange={(e) => setSeoSection({ ...seoSection, description: e.target.value })} />
          </Field>
        </Section>

        <Section title="3. Plans Section" open={openSection === "plans"} onToggle={() => toggle("plans")}>
          <LeadForm
            title="Plans"
            addLabel="Add Plan"
            items={plans}
            onChange={setPlans}
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "keywords", label: "Keywords Label", type: "text" },
              { name: "duration", label: "Duration Text", type: "text" },
              { name: "buttonText", label: "Button Text", type: "text" },
              { name: "buttonLink", label: "Button Link", type: "text" },
            ]}
          />
        </Section>

        <Section title="4. Features Section" open={openSection === "features"} onToggle={() => toggle("features")}>
          <div className="md:col-span-2 space-y-3">
          <Field label="Features Heading 1">
            <TextInput value={featuresMeta.heading1} onChange={(e) => setFeaturesMeta({ ...featuresMeta, heading1: e.target.value })} />
          </Field>
          <Field label="Features Heading 2">
            <TextInput value={featuresMeta.heading2} onChange={(e) => setFeaturesMeta({ ...featuresMeta, heading2: e.target.value })} />
          </Field>
          <Field label="Features Mobile Text">
            <TextInput value={featuresMeta.mobile} onChange={(e) => setFeaturesMeta({ ...featuresMeta, mobile: e.target.value })} />
          </Field>
          <CardListHeader title="Feature Groups" onAdd={addFeature} />
          {features.map((feature, featureIndex) => (
            <div key={feature.id} className="p-4 bg-bg-secondary rounded-2xl border border-brand-primary/15 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-text-muted">Feature Group {featureIndex + 1}</span>
                <RemoveBtn onClick={() => removeFeature(feature.id)} />
              </div>
              <Field label="Group Title">
                <TextInput value={feature.title} onChange={(e) => updateFeature(feature.id, "title", e.target.value)} />
              </Field>
              <CardListHeader title="Details" onAdd={() => addFeatureDetail(feature.id)} />
              {feature.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="grid grid-cols-12 gap-3 items-end">
                  <div className="col-span-11">
                    <TextInput
                      value={detail}
                      onChange={(e) => updateFeatureDetail(feature.id, detailIndex, e.target.value)}
                    />
                  </div>
                  <div className="col-span-1 flex justify-center pb-2">
                    <RemoveBtn onClick={() => removeFeatureDetail(feature.id, detailIndex)} />
                  </div>
                </div>
              ))}
            </div>
          ))}
          </div>
        </Section>

        <Section title="5. Why Choose Us Section" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
          <Field label="Heading">
            <TextInput value={whyChoose.heading} onChange={(e) => setWhyChoose({ ...whyChoose, heading: e.target.value })} />
          </Field>
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="Paragraphs" onAdd={addWhyParagraph} />
            {whyChoose.paragraphs.map((paragraph, index) => (
              <div key={index} className="grid grid-cols-12 gap-3 items-end">
                <div className="col-span-11">
                  <TextArea
                    rows={3}
                    value={paragraph}
                    onChange={(e) => updateWhyParagraph(index, e.target.value)}
                  />
                </div>
                <div className="col-span-1 flex justify-center pb-2">
                  <RemoveBtn onClick={() => removeWhyParagraph(index)} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="6. Contact Banner" open={openSection === "contactBanner"} onToggle={() => toggle("contactBanner")}>
          <Field label="Phone Number">
            <TextInput value={contactBanner.phone} onChange={(e) => setContactBanner({ ...contactBanner, phone: e.target.value })} />
          </Field>
          <Field label="Email Address">
            <TextInput value={contactBanner.email} onChange={(e) => setContactBanner({ ...contactBanner, email: e.target.value })} />
          </Field>
          <ImageInput label="Logo Image" value={contactBanner.logo} onChange={(e) => setContactBanner({ ...contactBanner, logo: e.target.value })} />
        </Section>

        <Section title="7. Testimonials" open={openSection === "testimonials"} onToggle={() => toggle("testimonials")}>
          <Field label="Title">
            <TextInput value={testimonialsTitle} onChange={(e) => setTestimonialsTitle(e.target.value)} />
          </Field>
          <Field label="Section Heading">
            <TextInput value={testimonialsHeading} onChange={(e) => setTestimonialsHeading(e.target.value)} />
          </Field>
          <Field label="Video URL">
            <TextInput
              type="text"
              placeholder="https://..."
              value={video.url}
              onChange={(e) => setVideo({ ...video, url: e.target.value })}
            />
          </Field>
          <Field label="Upload Video">
            <ImageInput label="Upload Video (URL)" value={video.upload} onChange={(e) => setVideo({ ...video, upload: e.target.value })} />
          </Field>
          <LeadForm
            title="Testimonials"
            addLabel="Add Testimonial"
            items={testimonials}
            onChange={setTestimonials}
            fields={[
              { name: "image", label: "Image", type: "image" },
              { name: "name", label: "Name", type: "text", required: true },
              { name: "designation", label: "Designation", type: "text" },
              { name: "text", label: "Text", type: "textarea", rows: 4 },
            ]}
          />
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
