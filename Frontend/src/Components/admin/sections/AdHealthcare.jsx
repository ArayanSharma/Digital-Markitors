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

export default function AdHealthcare() {
  const showToast = useToast();
  const pageKey = "Healthcare";
  const [openSection, setOpenSection] = useState("hero");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [hero, setHero] = useState({
    title: "Boost Your Medical Services With Healthcare SEO Services",
    description:
      "To succeed in business, you first need to succeed in search results. Our digital marketing and SEO services connect you with your customers’ journey from end to end – from discovery to retention.",
    backgroundImage: "",
    primaryBtnText: "Speak to an SEO Expert",
    primaryBtnLink: "/contact",
    secondaryBtnText: "Our Services",
    secondaryBtnLink: "/services",
  });

  const [aboutSection, setAboutSection] = useState({
    heading: "Best Healthcare SEO Company",
    description:
      "It is easier as well as affordable to increase rankings in the search engine and improve traffic on the healthcare website through SEO practices.",
  });

  const [visibilitySection, setVisibilitySection] = useState({
    heading: "Increase business visibility with the trusted healthcare SEO agency",
    description:
      "From speeding up the content production of the hospital to bringing in new patients, the top healthcare SEO agency, Digicore Inc. optimally utilizes the power of AI.",
    image: "",
  });

  const [performanceSection, setPerformanceSection] = useState({
    headingLines: ["TRACK", "ANALYZE", "SCALE", "REPEAT"],
    image: "",
  });

  const [seoSection, setSeoSection] = useState({
    heading: "Why Do I Need a Healthcare SEO Agency",
    description:
      "Trust is the key factor that engages user from converting as a patient for the healthcare institute.",
    problem: {
      heading: "The Problem",
      description:
        "The conversion of user into patient depends on the user-friendliness and AI-ready healthcare website.",
    },
    solution: {
      heading: "The Solution",
      description:
        "Local SEO is being reshaped through AI and the content for healthcare is being churned out efficiently.",
    },
    rightParagraphs: [
      "Content sensitivity and accuracy are prime considerations to be addressed while tailoring healthcare SEO services.",
      "Our SEO services for hospital’s website include local SEO services, medical website audit & fixes, on-page optimization, content marketing for healthcare, online reputation management and refining the website according to AI-standards.",
    ],
  });

  const [servicesSection, setServicesSection] = useState({
    heading: "Healthcare SEO Services",
    description:
      "Improve the digital presence of your healthcare business by partnering with Digicore Inc.. Being the trusted healthcare SEO agency, we optimize your website while fixing the technical issues and improving its user-friendliness.",
  });

  const [services, setServices] = useState([
    {
      id: uid(),
      icon: "",
      title: "Local Search Engine Optimization",
      description:
        "As a part of Local SEO services for healthcare, we provide Google Business Profile setup & optimization strategies and finalize location keywords and map rankings to optimize website locally.",
    },
    {
      id: uid(),
      icon: "",
      title: "Medical Website SEO Audit & Fixes",
      description:
        "As a part of these services, we conduct comprehensive website audit and identify issues pertaining to site speed, mobile usability, schema integration, broken links, poor structure etc.",
    },
    {
      id: uid(),
      icon: "",
      title: "On-Page Optimization",
      description:
        "We optimize service pages, create meta tags, description, and structured content to execute on-page optimization included in healthcare SEO services.",
    },
  ]);

  const [ctaBanner, setCtaBanner] = useState({
    heading: "Scale Your Online Store with High-Performance E-commerce SEO.",
    backgroundImage: "",
    buttons: [
      { id: uid(), text: "+91 98188 88064", link: "tel:+919818888064" },
      { id: uid(), text: "REQUEST A CALLBACK", link: "/contact" },
    ],
  });

  const [impactSection, setImpactSection] = useState({
    image: "",
    items: [
      {
        id: uid(),
        title: "Marketing companies",
        description: "We are currently rated Top 5 App Marketing Companies in 2019 by Clutch.co",
      },
      {
        id: uid(),
        title: "SEO and PPC",
        description: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review.",
      },
      {
        id: uid(),
        title: "Google Premier Partner",
        description: "We are a Google Premier Partner since 2017.",
      },
    ],
  });

  const [caseStudies, setCaseStudies] = useState([
    {
      id: uid(),
      title: "DHI International SEO Case Study: 190% Growth in Organic Traffic",
      image: "",
      descriptions: [
        "When DHI International partnered with us, the objective was clear – strengthen organic visibility in a highly competitive healthcare segment.",
      ],
      buttons: [
        { id: uid(), text: "View Case Study", link: "/case-studies" },
        { id: uid(), text: "View Our Latest Work", link: "/portfolio" },
      ],
    },
  ]);

  const [videoSection, setVideoSection] = useState({
    heading: "Healthcare SEO drives patients to your website through trust signals",
    description: "A strong healthcare SEO strategy helps your business build trust and improve visibility.",
    videoUrl: "https://www.youtube.com/embed/RugY9uuIJhY",
  });

  const [dominateSection, setDominateSection] = useState({
    heading: "How to Grow Sales & Revenue with Healthcare SEO agency",
    description:
      "Digicore Inc. enables businesses to achieve their sales and revenue growth goals by working on their website’s visibility.",
    cards: [
      {
        id: uid(),
        icon: "",
        title: "Get More Leads",
        description: "We ensure your business gets more and more leads through our expertly managed digital marketing services.",
      },
      {
        id: uid(),
        icon: "",
        title: "Make More Sales",
        description: "We help you convert maximum possible leads into sales and grow your business faster.",
      },
    ],
  });

  const [clientsSection, setClientsSection] = useState({
    heading: "Why Clients Choose Digicore Inc. for Healthcare SEO services?",
    description:
      "With utmost transparency, customized, and credible SEO practices aligned with the medical business requirements, Digicore Inc. provides results-driven strategies.",
    bullets: [
      "Seasoned SEO professionals apply expertise for SEO execution",
      "Website audit with 100% results-driven SEO plan is proposed",
      "Transparency is maintained while discussing the healthcare SEO report",
    ],
    image: "",
  });

  const [testimonialsSection, setTestimonialsSection] = useState({
    heading: "Testimonials",
    description: "See how our healthcare SEO strategies help brands grow.",
    items: [
      { id: uid(), name: "", designation: "", quote: "", image: "" },
    ],
  });

  const [toolsSection, setToolsSection] = useState({
    heading: "Tools",
    description: "The tools we use to improve visibility and performance.",
    items: [{ id: uid(), title: "", description: "", image: "" }],
  });

  const [brandsSection, setBrandsSection] = useState({
    heading: "Brands",
    description: "Trusted by leading healthcare and digital brands.",
    items: [{ id: uid(), title: "", logo: "" }],
  });

  const [blogsSection, setBlogsSection] = useState({
    heading: "Latest Blogs",
    description: "Helpful insights and updates from our healthcare SEO team.",
    items: [{ id: uid(), title: "", description: "", image: "", link: "" }],
  });

  const [faqTitle, setFaqTitle] = useState("FAQ");
  const [faqData, setFaqData] = useState([
    {
      id: uid(),
      question: "How long will it take for my website to start ranking on Google?",
      answer:
        "The time a website to rank on Google varies between 3 – 6 months depending on competition and SEO effort.",
    },
  ]);

  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const updateCaseStudy = (id, field, value) =>
    setCaseStudies(caseStudies.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  const addCaseStudy = () =>
    setCaseStudies([
      ...caseStudies,
      {
        id: uid(),
        title: "",
        image: "",
        descriptions: [""],
        buttons: [
          { id: uid(), text: "View Case Study", link: "" },
          { id: uid(), text: "View Our Latest Work", link: "" },
        ],
      },
    ]);
  const removeCaseStudy = (id) => setCaseStudies(caseStudies.filter((item) => item.id !== id));
  const updateCaseDescription = (studyId, index, value) =>
    setCaseStudies(
      caseStudies.map((study) =>
        study.id === studyId ? { ...study, descriptions: study.descriptions.map((item, itemIndex) => (itemIndex === index ? value : item)) } : study
      )
    );
  const addCaseDescription = (studyId) =>
    setCaseStudies(caseStudies.map((study) => (study.id === studyId ? { ...study, descriptions: [...study.descriptions, ""] } : study)));
  const removeCaseDescription = (studyId, index) =>
    setCaseStudies(
      caseStudies.map((study) =>
        study.id === studyId ? { ...study, descriptions: study.descriptions.filter((_, itemIndex) => itemIndex !== index) } : study
      )
    );

  const updateClientsBullets = (index, value) =>
    setClientsSection({ ...clientsSection, bullets: clientsSection.bullets.map((item, itemIndex) => (itemIndex === index ? value : item)) });
  const addClientsBullet = () =>
    setClientsSection({ ...clientsSection, bullets: [...clientsSection.bullets, ""] });
  const removeClientsBullet = (index) =>
    setClientsSection({ ...clientsSection, bullets: clientsSection.bullets.filter((_, itemIndex) => itemIndex !== index) });

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    let data = null;
    try {
      data = await loadPageContent(pageKey);
    } catch (err) {
      setLoadError(err.message);
    }
    if (data) {
      if (data.hero) setHero(data.hero);
      if (data.aboutSection) setAboutSection(data.aboutSection);
      if (data.visibilitySection) setVisibilitySection(data.visibilitySection);
      if (data.performanceSection) setPerformanceSection(data.performanceSection);
      if (data.seoSection) setSeoSection(data.seoSection);
      if (data.servicesSection) setServicesSection(data.servicesSection);
      if (data.services) setServices(data.services);
      if (data.ctaBanner) setCtaBanner(data.ctaBanner);
      if (data.impactSection) setImpactSection(data.impactSection);
      if (data.caseStudies) setCaseStudies(data.caseStudies);
      if (data.videoSection) setVideoSection(data.videoSection);
      if (data.dominateSection) setDominateSection(data.dominateSection);
      if (data.clientsSection) setClientsSection(data.clientsSection);
      if (data.testimonialsSection) setTestimonialsSection(data.testimonialsSection);
      if (data.toolsSection) setToolsSection(data.toolsSection);
      if (data.brandsSection) setBrandsSection(data.brandsSection);
      if (data.blogsSection) setBlogsSection(data.blogsSection);
      if (data.faqTitle) setFaqTitle(data.faqTitle);
      if (data.faqData) setFaqData(data.faqData);
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
      dominateSection,
      clientsSection,
      testimonialsSection,
      toolsSection,
      brandsSection,
      blogsSection,
      faqTitle,
      faqData,
    };
    setStatus("saving");
    try {
      await savePageContent(pageKey, payload);
      setStatus("saved");
      showToast("Healthcare page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <PageHeader title="Healthcare Page Content - Admin" description="Edit every section of the Healthcare page and save it to the database." status={status} />
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

        <Section title="5. Why Need Healthcare SEO" open={openSection === "seo"} onToggle={() => toggle("seo")}>
          <Field label="Heading">
            <TextInput value={seoSection.heading} onChange={(e) => setSeoSection({ ...seoSection, heading: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={seoSection.description} onChange={(e) => setSeoSection({ ...seoSection, description: e.target.value })} />
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
            title="Services"
            addLabel="Add Service"
            items={services}
            onChange={setServices}
            fields={[
              { name: "icon", label: "Icon", type: "image" },
              { name: "title", label: "Title", required: true },
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
            onChange={(next) => setCtaBanner({ ...ctaBanner, buttons: next })}
            fields={[
              { name: "text", label: "Button Text", required: true },
              { name: "link", label: "Button Link" },
            ]}
          />
        </Section>

        <Section title="8. Impact Section" open={openSection === "impact"} onToggle={() => toggle("impact")}>
          <ImageInput label="Main Image" value={impactSection.image} onChange={(e) => setImpactSection({ ...impactSection, image: e.target.value })} />
          <LeadForm
            title="Timeline Items"
            addLabel="Add Item"
            items={impactSection.items}
            onChange={(next) => setImpactSection({ ...impactSection, items: next })}
            fields={[
              { name: "title", label: "Title", required: true },
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

        <Section title="11. Dominate Section" open={openSection === "dominate"} onToggle={() => toggle("dominate")}>
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
            onChange={(next) => setDominateSection({ ...dominateSection, cards: next })}
            fields={[
              { name: "icon", label: "Icon", type: "image" },
              { name: "title", label: "Title", required: true },
              { name: "description", label: "Description", type: "textarea", rows: 3 },
            ]}
          />
        </Section>

        <Section title="12. Why Clients Choose Section" open={openSection === "clients"} onToggle={() => toggle("clients")}>
          <Field label="Heading">
            <TextInput value={clientsSection.heading} onChange={(e) => setClientsSection({ ...clientsSection, heading: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={4} value={clientsSection.description} onChange={(e) => setClientsSection({ ...clientsSection, description: e.target.value })} />
          </Field>
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="Bullet Points" onAdd={addClientsBullet} />
            {clientsSection.bullets.map((bullet, index) => (
              <div key={index} className="grid grid-cols-12 gap-3 items-end p-3 bg-bg-secondary rounded-2xl border border-brand-primary/15">
                <div className="col-span-11">
                  <TextInput value={bullet} onChange={(e) => updateClientsBullets(index, e.target.value)} />
                </div>
                <div className="col-span-1 flex justify-center pb-2">
                  <RemoveBtn onClick={() => removeClientsBullet(index)} />
                </div>
              </div>
            ))}
          </div>
          <ImageInput label="Right Image" value={clientsSection.image} onChange={(e) => setClientsSection({ ...clientsSection, image: e.target.value })} />
        </Section>

        <Section title="17. FAQ" open={openSection === "faq"} onToggle={() => toggle("faq")}>
          <Field label="Title">
            <TextInput value={faqTitle} onChange={(e) => setFaqTitle(e.target.value)} />
          </Field>
          <LeadForm
            title="FAQ Items"
            addLabel="Add FAQ"
            items={faqData}
            onChange={setFaqData}
            fields={[
              { name: "question", label: "Question", required: true },
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
