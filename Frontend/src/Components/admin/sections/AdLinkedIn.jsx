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

const PAGE_SLUG = "linkedin-ads";

export default function AdLinkedIn() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("banner");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [banner, setBanner] = useState({
    title: "LinkedIn Marketing Agency in India",
    description:
      "At Digicore Inc., we provide comprehensively planned LinkedIn Marketing services to build brand awareness, drive website traffic and generate quality leads. Our seasoned professionals identify your target audience, and accordingly create LinkedIn campaigns and compelling posts to improve brand presence. We offer tailored LinkedIn marketing services all-sized businesses according to their long-term business goals.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "" },
    secondaryBtn: { text: "Our Services", link: "" },
    backgroundImageUrl: "",
  });



  const [aboutSection, setAboutSection] = useState({
    title: "LinkedIn Marketing Services in India",
    description:
      "The experienced LinkedIn marketing specialists at Digicore Inc. build trust and attract quality leads for diverse businesses based on their preferences. With our LinkedIn story-telling approach, we believe in engaging the targeted audience through meaningful stories aligning them with brand’s voice. Besides, our experts strategize to create reliable connections, drive business growth and strengthen credibility through experience-driven and impactful LinkedIn content. Our proven marketing strategies, consistent market presence and data-driven LinkedIn marketing services in India enable us to offer sustainable as well as value-adding results to our clients.",
  });

  const [visibilitySection, setVisibilitySection] = useState({
    title: "Why is LinkedIn Marketing agency beneficial for business growth?",
    description:
      "With the help of well-tailored LinkedIn marketing services, Digicore Inc. fuels B2B business growth through professional connections, targeting decision-makers and strengthen brand authority. Our experienced marketers optimally utilize though-leadership content, data-driven campaigns, and LinkedIn’s precise targeting increase brand visibility. Besides, we also help businesses in generating qualified B2B leads and convert connections into ROI prospects through long-term trust.",
    imageUrl: "",
  });

  const [performanceSection, setPerformanceSection] = useState({
    items: ["TRACK", "ANALYZE", "SCALE", "REPEAT"],
    imageUrl: "",
  });

  const [seoAgencySection, setSeoAgencySection] = useState({
    title: "Why do I need LinkedIn marketing services?",
    description:
      "LinkedIn marketing services help B2B businesses connect with the celebrities, influencers, decision-makers and the other high-intent users through top B2B leads. At Digicore Inc., we enable our clients to optimally utilize LinkedIn’s ecosystem through profile optimization, data-driven campaigns and targeted content. We ensure that our LinkedIn marketing services reach right target audience at the right time while positioning businesses ahead of their competitors. Whether it is through consistent value-driven messaging or engaging potential prospects through creative posts, our seasoned professionals focus on lead-generation and building long-term connections. Invest in the tailored services of Digicore Inc., the best LinkedIn marketing agency in India and experience the business growth, improved visibility, and achieve sustainable results.",
  });

  const [servicesSection, setServicesSection] = useState({
    heading: "LinkedIn Marketing services",
    description:
      "Apart from being the social platform, LinkedIn is the resourceful network to connect with businesses that align with your future marketing goals. From connecting with the B2B decision makers to discussing business growth plans with founders, Digicore Inc. steps in with the top LinkedIn marketing services backed by real-time updates. With our tailored marketing strategies, we ensure campaigns are consistently monitored for lead generation and help businesses build brand authority. Our experts offer B2B marketing results and consistently improve strategies to address sustainable business growth objectives.",
  });

  const [services, setServices] = useState([
    {
      id: uid(),
      iconUrl: "",
      title: "LinkedIn Ad Campaign Management",
      description:
        "As a part of LinkedIn ad campaign management, planning, execution and optimization of targeted ads is focused on by our experts. We help businesses connect with the A-class decision maker, generate high-quality leads that attract measurable ROI and improve brand visibility through these services.",
    },
    {
      id: uid(),
      iconUrl: "",
      title: "Audience Targeting & Segmentation",
      description:
        "In this phase of LinkedIn marketing services, professionals based on their industry are identified and segmented by their seniority, job role and interests. This is further beneficial in execution of campaign to reach the high-intent prospects through personalized messaging. The objective of these services is to drive higher engagement and better conversion.",
    },
    {
      id: uid(),
      iconUrl: "",
      title: "LinkedIn Copywriting",
      description:
        "With the help of LinkedIn copywriting, brand-specific posts, and engaging ad copies to boost visibility of business while connecting them with professionals. The idea behind these services is to strengthen audience connection, attract engagement, build trust and provide better conversion through thought-provoking and strategic messaging.",
    },
    {
      id: uid(),
      iconUrl: "",
      title: "Company Page Optimization",
      description:
        "Our experienced marketers improve your LinkedIn profile by optimization of visuals, key details and strategic messaging. All these steps are aligned with the improved discoverability of your profile, strengthening brand identity and attract the right audience. Experience the improved credibility and greater engagement with Digicore Inc..",
    },
    {
      id: uid(),
      iconUrl: "",
      title: "LinkedIn Lead Generation",
      description:
        "With the help of LinkedIn lead generation services, we target B2B prospects by using compelling CTAs, optimized ads, forms and outreach to connect with top decision-makers. These services are beneficial in improving lead generation and boost sales of your B2B business.",
    },
    {
      id: uid(),
      iconUrl: "",
      title: "Analytics & Performance Reporting",
      description:
        "This segment of our LinkedIn marketing services monitors campaign results, tracks key metrics and shares detailed insights. As a result, marketing strategy, improved engagement and maximized ROI are achieved through informed and B2B data-driven decisions.",
    },
  ]);

  const [whyChooseSection, setWhyChooseSection] = useState({
    title: "Ready for More Traffic, Leads & Sales? Start SEO Now.",
    backgroundImageUrl: "",
  });

  const [whyChooseButtons, setWhyChooseButtons] = useState([
    { id: uid(), text: "+91 98188 88064", link: "tel:+919818888064", iconUrl: "" },
    { id: uid(), text: "REQUEST A CALLBACK", link: "/contact", iconUrl: "" },
  ]);

  const [timelineSection, setTimelineSection] = useState({
    imageUrl: "",
  });

  const [timelineItems, setTimelineItems] = useState([
    { id: uid(), title: "Contact Us", description: "Reach out to us via email, phone or our website." },
    {
      id: uid(),
      title: "SEO and PPC",
      description: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review.",
    },
    { id: uid(), title: "Share Your Goals:", description: "Share your challenges and objectives." },
    {
      id: uid(),
      title: "Consultation:",
      description: "Our experts will craft SEO strategies tailored to your needs.",
    },
    {
      id: uid(),
      title: "Tailored Plan:",
      description: "Get a customized plan with clear strategies and outcomes.",
    },
    { id: uid(), title: "Out Turn:", description: "Achieve measurable results in record time." },
  ]);


  const [whyChooseDigicoreSection, setWhyChooseDigicoreSection] = useState({
    title: "Why choose Digicore Inc. as your LinkedIn Marketing agency in India?",
    description:
      "Experience the power of results-driven and focused approach of LinkedIn marketing services by choosing Digicore Inc.. Our highly qualified and experienced professionals help you in reaching the right audience, generate quality B2B and build credibility. Besides, we create compelling and meaningful content while optimizing LinkedIn company profile aligned with business growth objectives. From managing ad campaigns to tracking the performance and optimizing the content, we have turned out to be the best LinkedIn marketing agency in India known for simple yet strategic methodology.",
    points: [
      "Our highly qualified and experienced professionals tailor and execute LinkedIn marketing campaigns",
      "With our growth-first mindset, we cater to the advanced LinkedIn marketing goals of all-sized businesses",
      "We present detailed and factual report while maintaining transparency in the marketing plan to help businesses stay ahead in the market",
      "Our result-driven and data-driven LinkedIn marketing strategies help them in maximizing ROI and boost sales",
      "All our B2B strategies are future-ready and address the sustainable business growth of clients",
      "With more than a decade’s excellence, we incorporate B2B tactics to achieve bespoke marketing objectives",
      "We identify and target the right audience, generate quality B2B leads and build awareness to address long-term business goals of clients.",
    ],
    imageUrl: "",
  });

  const [faqSection, setFaqSection] = useState({
    heading: "FAQ",
  });

  const [faqItems, setFaqItems] = useState([
    {
      id: uid(),
      question: "How long will it take for my website to start ranking on Google?",
      answer:
        "The time a website to rank on Google varies between 3 – 6 months. The major components that affect your website ranking and timeline include, your industry competition, SEO efforts and content quality.",
    },
    {
      id: uid(),
      question: "How many keywords will you work on as part of my SEO campaign?",
      answer:
        "The number of keywords will depend on the type of your business, industry, market trends and your competitors. We choose ROI-driven and high-intent and commercial keywords for your site to attract high-quality B2B traffic.",
    },
    {
      id: uid(),
      question: "Do you offer monthly, quarterly, or custom SEO payment plans?",
      answer:
        "Yes, we have all sort of SEO payment plans. However, to understand our plans, you are advised to connect with us via email or phone.",
    },
    {
      id: uid(),
      question: "What is the size of your in-house SEO and digital marketing team?",
      answer:
        "Our in-house SEO and digital marketing team comprises experienced professionals across strategy, content, social media, PPC, analytics, development and design, working hand-in-hand to deliver B2B digital solutions.",
    },
  ]);

  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const updatePerformanceItem = (index, value) =>
    setPerformanceSection({
      ...performanceSection,
      items: performanceSection.items.map((item, i) => (i === index ? value : item)),
    });

  const updatePoint = (index, value) =>
    setWhyChooseDigicoreSection({
      ...whyChooseDigicoreSection,
      points: whyChooseDigicoreSection.points.map((p, i) => (i === index ? value : p)),
    });
  const addPoint = () =>
    setWhyChooseDigicoreSection({
      ...whyChooseDigicoreSection,
      points: [...whyChooseDigicoreSection.points, ""],
    });
  const removePoint = (index) =>
    setWhyChooseDigicoreSection({
      ...whyChooseDigicoreSection,
      points: whyChooseDigicoreSection.points.filter((_, i) => i !== index),
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
      if (data.banner) setBanner(data.banner);
      if (data.aboutSection) setAboutSection(data.aboutSection);
      if (data.visibilitySection) setVisibilitySection(data.visibilitySection);
      if (data.performanceSection) setPerformanceSection(data.performanceSection);
      if (data.seoAgencySection) setSeoAgencySection(data.seoAgencySection);
      if (data.servicesSection) setServicesSection(data.servicesSection);
      if (data.servicesSection?.services) setServices(data.servicesSection.services);
      if (data.whyChooseSection) setWhyChooseSection(data.whyChooseSection);
      if (data.whyChooseSection?.buttons) setWhyChooseButtons(data.whyChooseSection.buttons);
      if (data.timelineSection) setTimelineSection(data.timelineSection);
      if (data.timelineSection?.items) setTimelineItems(data.timelineSection.items);
      if (data.whyChooseDigicoreSection) setWhyChooseDigicoreSection(data.whyChooseDigicoreSection);
      if (data.faqSection) setFaqSection(data.faqSection);
      if (data.faqSection?.faqItems) setFaqItems(data.faqSection.faqItems);
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
      banner,
      aboutSection,
      visibilitySection,
      performanceSection,
      seoAgencySection,
      servicesSection: { ...servicesSection, services },
      whyChooseSection: { ...whyChooseSection, buttons: whyChooseButtons },
      timelineSection: { ...timelineSection, items: timelineItems },
      whyChooseDigicoreSection,
      faqSection: { ...faqSection, faqItems },
    };

    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("LinkedIn Ads page saved successfully");
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
            <h1 className="text-xl font-bold text-brand-primary">LinkedIn Ads Page Content — Admin</h1>
            <p className="text-sm text-text-muted">Edit all LinkedIn Ads page sections from the admin panel.</p>
          </div>
        </div>
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="1. Banner Section" open={openSection === "banner"} onToggle={() => toggle("banner")}>
          <Field label="Title">
            <TextInput value={banner.title} onChange={(e) => setBanner({ ...banner, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={5} value={banner.description} onChange={(e) => setBanner({ ...banner, description: e.target.value })} />
          </Field>
          <ButtonFields label="Primary Button" value={banner.primaryBtn} onChange={(v) => setBanner({ ...banner, primaryBtn: v })} />
          <ButtonFields label="Secondary Button" value={banner.secondaryBtn} onChange={(v) => setBanner({ ...banner, secondaryBtn: v })} />
          <ImageInput label="Banner Background Image" value={banner.backgroundImageUrl} onChange={(e) => setBanner({ ...banner, backgroundImageUrl: e.target.value })} />
        </Section>


        <Section title="3. About Section" open={openSection === "aboutSection"} onToggle={() => toggle("aboutSection")}>
          <Field label="Heading">
            <TextInput value={aboutSection.title} onChange={(e) => setAboutSection({ ...aboutSection, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={aboutSection.description} onChange={(e) => setAboutSection({ ...aboutSection, description: e.target.value })} />
          </Field>
        </Section>

        <Section title="4. Visibility Section" open={openSection === "visibilitySection"} onToggle={() => toggle("visibilitySection")}>
          <Field label="Title">
            <TextInput value={visibilitySection.title} onChange={(e) => setVisibilitySection({ ...visibilitySection, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={5} value={visibilitySection.description} onChange={(e) => setVisibilitySection({ ...visibilitySection, description: e.target.value })} />
          </Field>
          <ImageInput label="Section Image" value={visibilitySection.imageUrl} onChange={(e) => setVisibilitySection({ ...visibilitySection, imageUrl: e.target.value })} />
        </Section>

        <Section title="5. Performance Section" open={openSection === "performanceSection"} onToggle={() => toggle("performanceSection")}>
          <Field label="Performance Item 1">
            <TextInput value={performanceSection.items[0]} onChange={(e) => updatePerformanceItem(0, e.target.value)} placeholder="TRACK" />
          </Field>
          <Field label="Performance Item 2">
            <TextInput value={performanceSection.items[1]} onChange={(e) => updatePerformanceItem(1, e.target.value)} placeholder="ANALYZE" />
          </Field>
          <Field label="Performance Item 3">
            <TextInput value={performanceSection.items[2]} onChange={(e) => updatePerformanceItem(2, e.target.value)} placeholder="SCALE" />
          </Field>
          <Field label="Performance Item 4">
            <TextInput value={performanceSection.items[3]} onChange={(e) => updatePerformanceItem(3, e.target.value)} placeholder="REPEAT" />
          </Field>
          <ImageInput label="Performance Image" value={performanceSection.imageUrl} onChange={(e) => setPerformanceSection({ ...performanceSection, imageUrl: e.target.value })} />
        </Section>

        <Section title="6. Why do I need LinkedIn marketing services? Section" open={openSection === "seoAgencySection"} onToggle={() => toggle("seoAgencySection")}>
          <Field label="Title">
            <TextInput value={seoAgencySection.title} onChange={(e) => setSeoAgencySection({ ...seoAgencySection, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={seoAgencySection.description} onChange={(e) => setSeoAgencySection({ ...seoAgencySection, description: e.target.value })} />
          </Field>
        </Section>

        <Section title="7. Services Section" open={openSection === "servicesSection"} onToggle={() => toggle("servicesSection")}>
          <Field label="Services Heading">
            <TextInput value={servicesSection.heading} onChange={(e) => setServicesSection({ ...servicesSection, heading: e.target.value })} />
          </Field>
          <Field label="Services Description">
            <TextArea rows={4} value={servicesSection.description} onChange={(e) => setServicesSection({ ...servicesSection, description: e.target.value })} />
          </Field>
          <LeadForm
            title="Service Cards"
            addLabel="Add Service"
            items={services}
            onChange={setServices}
            fields={[
              { name: "iconUrl", label: "Icon", type: "image" },
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea", rows: 4 },
            ]}
          />
        </Section>

        <Section title="8. Why Choose CTA Section" open={openSection === "whyChooseSection"} onToggle={() => toggle("whyChooseSection")}>
          <Field label="Section Title">
            <TextInput value={whyChooseSection.title} onChange={(e) => setWhyChooseSection({ ...whyChooseSection, title: e.target.value })} />
          </Field>
          <ImageInput label="Background Image" value={whyChooseSection.backgroundImageUrl} onChange={(e) => setWhyChooseSection({ ...whyChooseSection, backgroundImageUrl: e.target.value })} />
          <LeadForm
            title="CTA Buttons"
            addLabel="Add Button"
            items={whyChooseButtons}
            onChange={setWhyChooseButtons}
            fields={[
              { name: "text", label: "Button Text", type: "text", required: true },
              { name: "link", label: "Button Link", type: "text" },
              { name: "iconUrl", label: "Icon URL (optional)", type: "image" },
            ]}
          />
        </Section>

        <Section title="9. Timeline Section" open={openSection === "timelineSection"} onToggle={() => toggle("timelineSection")}>
          <ImageInput label="Timeline Image" value={timelineSection.imageUrl} onChange={(e) => setTimelineSection({ ...timelineSection, imageUrl: e.target.value })} />
          <LeadForm
            title="Timeline Items"
            addLabel="Add Item"
            items={timelineItems}
            onChange={setTimelineItems}
            fields={[
              { name: "title", label: "Title", type: "text", required: true },
              { name: "description", label: "Description", type: "textarea", rows: 3 },
            ]}
          />
        </Section>


        <Section title="12. Why choose Digicore Section" open={openSection === "whyChooseDigicoreSection"} onToggle={() => toggle("whyChooseDigicoreSection")}>
          <Field label="Heading">
            <TextInput value={whyChooseDigicoreSection.title} onChange={(e) => setWhyChooseDigicoreSection({ ...whyChooseDigicoreSection, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={whyChooseDigicoreSection.description} onChange={(e) => setWhyChooseDigicoreSection({ ...whyChooseDigicoreSection, description: e.target.value })} />
          </Field>
          <ImageInput label="Why Choose Image" value={whyChooseDigicoreSection.imageUrl} onChange={(e) => setWhyChooseDigicoreSection({ ...whyChooseDigicoreSection, imageUrl: e.target.value })} />
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="Bullet Points" onAdd={addPoint} />
            {whyChooseDigicoreSection.points.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-1">
                  <TextInput value={point} onChange={(e) => updatePoint(index, e.target.value)} />
                </div>
                <RemoveBtn onClick={() => removePoint(index)} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="13. FAQ Section" open={openSection === "faqSection"} onToggle={() => toggle("faqSection")}>
          <Field label="Section Title">
            <TextInput value={faqSection.heading} onChange={(e) => setFaqSection({ ...faqSection, heading: e.target.value })} />
          </Field>
          <LeadForm
            title="FAQ Items"
            addLabel="Add FAQ"
            items={faqItems}
            onChange={setFaqItems}
            fields={[
              { name: "question", label: "Question", type: "text", required: true },
              { name: "answer", label: "Answer", type: "textarea", rows: 3 },
            ]}
          />
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
