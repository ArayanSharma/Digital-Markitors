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
  ButtonFields,
  CardListHeader,
  RemoveBtn,
  ImageInput,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "ECommerce";

export default function AdECommerce() {
  const showToast = useToast();
  const pageKey = PAGE_SLUG;
  const [openSection, setOpenSection] = useState("hero");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [hero, setHero] = useState({
    title: "Best Ecommerce SEO Agency to convert traffic, drive revenue and build brand credibility",
    description:
      "Digitization of business is rapidly evolving to improve the user experience. No matter which stream of business you are in, reaching your target audience efficiently is crucial.",
    backgroundImage: "",
    primaryBtnText: "Speak to an SEO Expert",
    primaryBtnLink: "",
    secondaryBtnText: "Our Services",
    secondaryBtnLink: "",
  });

  const [aboutSection, setAboutSection] = useState({
    heading: "Best ECOMMERCE SEO Agency",
    description:
      "In the digital landscape, it is essential for business to evolve online and adapt to the modern changes to strengthen business visibility.",
    image: "",
  });

  const [visibilitySection, setVisibilitySection] = useState({
    heading: "Build a great digital experience with Best Ecommerce SEO agency",
    description: "With the increase in the online shopping preferences, businesses need to keep their website updated and SEO-friendly.",
    image: "",
  });

  const [performanceSection, setPerformanceSection] = useState({
    headingLines: ["TRACK", "ANALYZE", "SCALE", "REPEAT"],
    image: "",
  });

  const [seoSection, setSeoSection] = useState({
    heading: "Why Do I Need an E-commerce SEO Agency For My Online Store",
    description:
      "Digicore Inc. is the best Ecommerce SEO company in Delhi that helps clients in adapting new trends and buyer behavior through data-driven services.",
    problem: {
      heading: "The Problem",
      description: "Website has poor online visibility, lesser product discoverability, and low organic traffic that totally affects user experience.",
    },
    solution: {
      heading: "The Solution",
      description: "With the modern approach involving AI and advanced tools, Ecommerce SEO services address the visibility and product optimization.",
    },
    rightParagraphs: ["", ""],
  });

  const [servicesSection, setServicesSection] = useState({
    heading: "AI Powered Ecommerce SEO Services",
    description:
      "Improve your brand visibility, product discoverability and boost sales through smart Ecommerce SEO services backed by AI and the modern tools.",
  });

  const [services, setServices] = useState([
    { id: uid(), icon: "", title: "", description: "" },
  ]);

  const [ctaBanner, setCtaBanner] = useState({
    heading: "Scale Your Online Store with High-Performance E-commerce SEO.",
    backgroundImage: "",
    buttons: [
      { id: uid(), text: "+91 98188 88064", link: "" },
      { id: uid(), text: "REQUEST A CALLBACK", link: "" },
    ],
  });

  const [impactSection, setImpactSection] = useState({
    image: "",
    items: [
      { id: uid(), title: "Marketing companies", description: "We are currently rated Top 5 App Marketing Companies in 2019 by Clutch.co" },
    ],
  });

  const [caseStudies, setCaseStudies] = useState([
    {
      id: uid(),
      title: "DHI International SEO Case Study: 190% Growth in Organic Traffic",
      image: "",
      descriptions: [""],
      buttons: [
        { id: uid(), text: "View Case Study", link: "" },
        { id: uid(), text: "View Our Latest Work", link: "" },
      ],
    },
  ]);

  const [videoSection, setVideoSection] = useState({
    heading: "SEO is not just about ranking on Google — it’s about connecting your brand across every platform where your customers search.",
    description: "",
    videoUrl: "",
  });

  const [platformsSection, setPlatformsSection] = useState({
    heading: "Platforms we optimise FOR Your ECOMMERCE Store",
    description: "",
    cards: [{ id: uid(), image: "", title: "", description: "", buttonText: "Read More", buttonLink: "" }],
  });

  const [dominateSection, setDominateSection] = useState({
    heading: "How We Grow Your E-commerce Sales & Revenue",
    description:
      "At Digicore Inc., we ensure data-driven Ecommerce SEO services to increase sales and revenue of all-sized Ecommerce businesses.",
    cards: [{ id: uid(), icon: "", title: "", description: "" }],
  });

  const [whyChooseSection, setWhyChooseSection] = useState({
    heading: "Why Business Choose Digicore Inc. for Ecommerce SEO services?",
    description:
      "Digicore Inc. has an extensive industrial experience in Ecommerce SEO services with a consistent record of providing tailored services.",
    bullets: [""],
    image: "",
  });

  const [faqHeading, setFaqHeading] = useState("FAQ");
  const [faqData, setFaqData] = useState([{ id: uid(), question: "", answer: "" }]);

  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const updateCaseStudy = (id, field, value) => setCaseStudies(caseStudies.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  const addCaseStudy = () => setCaseStudies([...caseStudies, { id: uid(), title: "", image: "", descriptions: [""], buttons: [{ id: uid(), text: "", link: "" }] }]);
  const removeCaseStudy = (id) => setCaseStudies(caseStudies.filter((item) => item.id !== id));
  const updateCaseDescription = (studyId, index, value) => setCaseStudies(caseStudies.map((study) => (study.id === studyId ? { ...study, descriptions: study.descriptions.map((item, itemIndex) => (itemIndex === index ? value : item)) } : study)));
  const addCaseDescription = (studyId) => setCaseStudies(caseStudies.map((study) => (study.id === studyId ? { ...study, descriptions: [...study.descriptions, ""] } : study)));
  const removeCaseDescription = (studyId, index) => setCaseStudies(caseStudies.map((study) => (study.id === studyId ? { ...study, descriptions: study.descriptions.filter((_, itemIndex) => itemIndex !== index) } : study)));

  const updateWhyBullet = (index, value) => setWhyChooseSection({ ...whyChooseSection, bullets: whyChooseSection.bullets.map((item, itemIndex) => (itemIndex === index ? value : item)) });
  const addWhyBullet = () => setWhyChooseSection({ ...whyChooseSection, bullets: [...whyChooseSection.bullets, ""] });
  const removeWhyBullet = (index) => setWhyChooseSection({ ...whyChooseSection, bullets: whyChooseSection.bullets.filter((_, itemIndex) => itemIndex !== index) });

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    let d = null;
    try {
      d = await loadPageContent(pageKey);
    } catch (err) {
      setLoadError(err.message);
    }
    if (d) {
      if (d.hero) setHero(d.hero);
      if (d.aboutSection) setAboutSection(d.aboutSection);
      if (d.visibilitySection) setVisibilitySection(d.visibilitySection);
      if (d.performanceSection) setPerformanceSection(d.performanceSection);
      if (d.seoSection) setSeoSection(d.seoSection);
      if (d.servicesSection) setServicesSection(d.servicesSection);
      if (d.services) setServices(d.services);
      if (d.ctaBanner) setCtaBanner(d.ctaBanner);
      if (d.impactSection) setImpactSection(d.impactSection);
      if (d.caseStudies) setCaseStudies(d.caseStudies);
      if (d.videoSection) setVideoSection(d.videoSection);
      if (d.platformsSection) setPlatformsSection(d.platformsSection);
      if (d.dominateSection) setDominateSection(d.dominateSection);
      if (d.whyChooseSection) setWhyChooseSection(d.whyChooseSection);
      if (d.faqHeading) setFaqHeading(d.faqHeading);
      if (d.faqData) setFaqData(d.faqData);
    }
    setLoading(false);
  }, [pageKey]);

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, [load]);

  const handleSave = async (e) => {
    e?.preventDefault();
    const payload = {
      hero,
      aboutSection,
      visibilitySection,
      performanceSection,
      seoSection,
      servicesSection,
      services,
      ctaBanner,
      impactSection,
      caseStudies,
      videoSection,
      platformsSection,
      dominateSection,
      whyChooseSection,
      faqHeading,
      faqData,
    };
    setStatus("saving");
    try {
      await savePageContent(pageKey, payload);
      setStatus("saved");
      showToast("ECommerce page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <PageHeader title="ECommerce Page Content - Admin" description="Edit every section of the ECommerce page and save it to the database." status={status} />
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="1. Hero Banner" open={openSection === "hero"} onToggle={() => toggle("hero")}>
          <Field label="Title">
            <TextInput value={hero.title} onChange={(e) => setHero({ ...hero, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={hero.description} onChange={(e) => setHero({ ...hero, description: e.target.value })} />
          </Field>
          <ImageInput label="Background Image" value={hero.backgroundImage} onChange={(e) => setHero({ ...hero, backgroundImage: e.target.value })} />
          <ButtonFields label="Primary Button" value={{ text: hero.primaryBtnText, link: hero.primaryBtnLink }} onChange={(value) => setHero({ ...hero, primaryBtnText: value.text, primaryBtnLink: value.link })} />
          <ButtonFields label="Secondary Button" value={{ text: hero.secondaryBtnText, link: hero.secondaryBtnLink }} onChange={(value) => setHero({ ...hero, secondaryBtnText: value.text, secondaryBtnLink: value.link })} />
        </Section>

        <Section title="2. About Section" open={openSection === "about"} onToggle={() => toggle("about")}>
          <Field label="Heading">
            <TextInput value={aboutSection.heading} onChange={(e) => setAboutSection({ ...aboutSection, heading: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={aboutSection.description} onChange={(e) => setAboutSection({ ...aboutSection, description: e.target.value })} />
          </Field>
        </Section>

        <Section title="3. Visibility Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
          <Field label="Heading">
            <TextInput value={visibilitySection.heading} onChange={(e) => setVisibilitySection({ ...visibilitySection, heading: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={5} value={visibilitySection.description} onChange={(e) => setVisibilitySection({ ...visibilitySection, description: e.target.value })} />
          </Field>
          <ImageInput label="Image" value={visibilitySection.image} onChange={(e) => setVisibilitySection({ ...visibilitySection, image: e.target.value })} />
        </Section>

        <Section title="4. Performance Section" open={openSection === "performance"} onToggle={() => toggle("performance")}>
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="Heading Lines" onAdd={() => setPerformanceSection({ ...performanceSection, headingLines: [...performanceSection.headingLines, ""] })} />
            {performanceSection.headingLines.map((line, index) => (
              <div key={index} className="grid grid-cols-12 gap-3 items-end p-3 bg-bg-secondary rounded-2xl border border-brand-primary/15">
                <div className="col-span-11">
                  <TextInput value={line} onChange={(e) => setPerformanceSection({ ...performanceSection, headingLines: performanceSection.headingLines.map((item, itemIndex) => (itemIndex === index ? e.target.value : item)) })} />
                </div>
                <div className="col-span-1 flex justify-center pb-2">
                  <RemoveBtn onClick={() => setPerformanceSection({ ...performanceSection, headingLines: performanceSection.headingLines.filter((_, itemIndex) => itemIndex !== index) })} />
                </div>
              </div>
            ))}
          </div>
          <ImageInput label="Image" value={performanceSection.image} onChange={(e) => setPerformanceSection({ ...performanceSection, image: e.target.value })} />
        </Section>

        <Section title="5. SEO Section" open={openSection === "seo"} onToggle={() => toggle("seo")}>
          <Field label="Heading">
            <TextInput value={seoSection.heading} onChange={(e) => setSeoSection({ ...seoSection, heading: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={5} value={seoSection.description} onChange={(e) => setSeoSection({ ...seoSection, description: e.target.value })} />
          </Field>
          <Field label="Problem Heading">
            <TextInput value={seoSection.problem.heading} onChange={(e) => setSeoSection({ ...seoSection, problem: { ...seoSection.problem, heading: e.target.value } })} />
          </Field>
          <Field label="Problem Description">
            <TextArea rows={3} value={seoSection.problem.description} onChange={(e) => setSeoSection({ ...seoSection, problem: { ...seoSection.problem, description: e.target.value } })} />
          </Field>
          <Field label="Solution Heading">
            <TextInput value={seoSection.solution.heading} onChange={(e) => setSeoSection({ ...seoSection, solution: { ...seoSection.solution, heading: e.target.value } })} />
          </Field>
          <Field label="Solution Description">
            <TextArea rows={3} value={seoSection.solution.description} onChange={(e) => setSeoSection({ ...seoSection, solution: { ...seoSection.solution, description: e.target.value } })} />
          </Field>
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="Right Paragraphs" onAdd={() => setSeoSection({ ...seoSection, rightParagraphs: [...seoSection.rightParagraphs, ""] })} />
            {seoSection.rightParagraphs.map((paragraph, index) => (
              <div key={index} className="grid grid-cols-12 gap-3 items-end p-3 bg-bg-secondary rounded-2xl border border-brand-primary/15">
                <div className="col-span-11">
                  <TextArea rows={3} value={paragraph} onChange={(e) => setSeoSection({ ...seoSection, rightParagraphs: seoSection.rightParagraphs.map((item, itemIndex) => (itemIndex === index ? e.target.value : item)) })} />
                </div>
                <div className="col-span-1 flex justify-center pb-2">
                  <RemoveBtn onClick={() => setSeoSection({ ...seoSection, rightParagraphs: seoSection.rightParagraphs.filter((_, itemIndex) => itemIndex !== index) })} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="6. Services Section" open={openSection === "services"} onToggle={() => toggle("services")}>
          <Field label="Section Heading">
            <TextInput value={servicesSection.heading} onChange={(e) => setServicesSection({ ...servicesSection, heading: e.target.value })} />
          </Field>
          <Field label="Section Description">
            <TextArea rows={4} value={servicesSection.description} onChange={(e) => setServicesSection({ ...servicesSection, description: e.target.value })} />
          </Field>
          <LeadForm
            title="Service Cards"
            addLabel="Add Service"
            items={services}
            onChange={setServices}
            fields={[
              { name: "icon", label: "Icon", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea", rows: 4 },
            ]}
          />
        </Section>

        <Section title="7. CTA Banner" open={openSection === "cta"} onToggle={() => toggle("cta")}>
          <Field label="Heading">
            <TextInput value={ctaBanner.heading} onChange={(e) => setCtaBanner({ ...ctaBanner, heading: e.target.value })} />
          </Field>
          <ImageInput label="Background Image" value={ctaBanner.backgroundImage} onChange={(e) => setCtaBanner({ ...ctaBanner, backgroundImage: e.target.value })} />
          <LeadForm
            title="Buttons"
            addLabel="Add Button"
            items={ctaBanner.buttons}
            onChange={(buttons) => setCtaBanner({ ...ctaBanner, buttons })}
            fields={[
              { name: "text", label: "Button Text", type: "text", required: true },
              { name: "link", label: "Button Link", type: "text" },
            ]}
          />
        </Section>

        <Section title="8. Impact Section" open={openSection === "impact"} onToggle={() => toggle("impact")}>
          <ImageInput label="Main Image" value={impactSection.image} onChange={(e) => setImpactSection({ ...impactSection, image: e.target.value })} />
          <LeadForm
            title="Timeline Items"
            addLabel="Add Item"
            items={impactSection.items}
            onChange={(items) => setImpactSection({ ...impactSection, items })}
            fields={[
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea", rows: 3 },
            ]}
          />
        </Section>

        <Section title="10. Video Section" open={openSection === "video"} onToggle={() => toggle("video")}>
          <Field label="Heading">
            <TextInput value={videoSection.heading} onChange={(e) => setVideoSection({ ...videoSection, heading: e.target.value })} />
          </Field>
          <Field label="Video URL">
            <TextInput value={videoSection.videoUrl} placeholder="https://..." onChange={(e) => setVideoSection({ ...videoSection, videoUrl: e.target.value })} />
          </Field>
        </Section>

        <Section title="12. Dominate Section" open={openSection === "dominate"} onToggle={() => toggle("dominate")}>
          <Field label="Heading">
            <TextInput value={dominateSection.heading} onChange={(e) => setDominateSection({ ...dominateSection, heading: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={dominateSection.description} onChange={(e) => setDominateSection({ ...dominateSection, description: e.target.value })} />
          </Field>
          <LeadForm
            title="Cards"
            addLabel="Add Card"
            items={dominateSection.cards}
            onChange={(cards) => setDominateSection({ ...dominateSection, cards })}
            fields={[
              { name: "icon", label: "Icon", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea", rows: 3 },
            ]}
          />
        </Section>

        <Section title="13. Why Choose Section" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
          <Field label="Heading">
            <TextInput value={whyChooseSection.heading} onChange={(e) => setWhyChooseSection({ ...whyChooseSection, heading: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={whyChooseSection.description} onChange={(e) => setWhyChooseSection({ ...whyChooseSection, description: e.target.value })} />
          </Field>
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="Bullet Points" onAdd={addWhyBullet} />
            {whyChooseSection.bullets.map((bullet, index) => (
              <div key={index} className="grid grid-cols-12 gap-3 items-end p-3 bg-bg-secondary rounded-2xl border border-brand-primary/15">
                <div className="col-span-11">
                  <TextInput value={bullet} onChange={(e) => updateWhyBullet(index, e.target.value)} />
                </div>
                <div className="col-span-1 flex justify-center pb-2">
                  <RemoveBtn onClick={() => removeWhyBullet(index)} />
                </div>
              </div>
            ))}
          </div>
          <ImageInput label="Right Image" value={whyChooseSection.image} onChange={(e) => setWhyChooseSection({ ...whyChooseSection, image: e.target.value })} />
        </Section>

        <Section title="14. FAQ" open={openSection === "faq"} onToggle={() => toggle("faq")}>
          <Field label="FAQ Heading">
            <TextInput value={faqHeading} onChange={(e) => setFaqHeading(e.target.value)} />
          </Field>
          <LeadForm
            title="FAQ Items"
            addLabel="Add FAQ"
            items={faqData}
            onChange={setFaqData}
            fields={[
              { name: "question", label: "Question", type: "text", required: true },
              { name: "answer", label: "Answer", type: "textarea", rows: 4 },
            ]}
          />
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
