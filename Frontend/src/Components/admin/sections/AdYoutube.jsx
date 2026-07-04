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

const PAGE_SLUG = "youtube";

export default function AdYoutube() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("banner");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  /* ---------- BANNER ---------- */
  const [banner, setBanner] = useState({
    title: "Google Display Ads Management Agency",
    description:
      "We are  Digicore Inc – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "" },
    secondaryBtn: { text: "Our Services", link: "" },
    backgroundImageUrl: "",
  });



  /* ---------- ABOUT SECTION ---------- */
  const [aboutSection, setAboutSection] = useState({
    title: "Best Google Display Ads Management Agency",
    description:
      "Digicore Inc is the best PPC company in Delhi-NCR, that delivers performance-driven Pay-Per-Click campaigns customized to attain measurable business growth. Our PPC strategy includes strong groundwork—competitor analysis, audience assessment, and clarity of conversion objectives. Our expertly designed PPC campaigns are aimed at attracting high-intent users, that eventually turn clicks into leads and sales. With consistent performance throughout the past few years, our PPC specialists focus on the optimal use of data-driven Google and Meta ad campaigns for multiple industries ranging from Ecommerce, B2B, Travel, Healthcare, Hospitality, and Education. From keyword strategy and finalizing ad copy to optimization of landing page and conversion tracking,  Digicore Inc plays a vital role in helping businesses benefit from ROI-focused PPC advertising.",
  });

  /* ---------- VISIBILITY SECTION ---------- */
  const [visibilitySection, setVisibilitySection] = useState({
    title: "Why PPC Is More Than Just Running Ads",
    description:
      "PPC is strategic solution aimed at making for business growth consistent in digital marketing. At  Digicore Inc, a leading PPC agency in Delhi, we count on data-driven techniques to reach targeted audiences, optimally utilize every campaign element, and constantly optimize ad performance to ensure sustainable growth and higher ROI for client’s business.",
    videoUrl: "",
  });

  /* ---------- PERFORMANCE SECTION ---------- */
  const [performanceSection, setPerformanceSection] = useState({
    items: ["TRACK", "ANALYZE", "SCALE", "REPEAT"],
    imageUrl: "",
  });

  /* ---------- SEO AGENCY SECTION ---------- */
  const [seoAgencySection, setSeoAgencySection] = useState({
    title: "Why Do I Need Google Shopping Ads Management Services?",
    description:
      "It is quite tough for businesses to generate quality leads at present due to the increased competition. PPC is one of the efficient ways to target potential customers, only if the campaign has been executed in a strategic way. Keeping in mind the increased competition, constantly upgrading algorithms, higher bid costs,  Digicore Inc, the top PPC agency in Delhi NCR employs well-planned strategy for ongoing campaign optimization. Besides, we ensure the data-driven insights, expertise in generating quality leads, driving sales, and improving the brand awareness through campaigns are aligned according to business goals of clients.",
  });

  /* ---------- SERVICES SECTION ---------- */
  const [servicesSection, setServicesSection] = useState({
    heading: "Google Display Ad Management Services",
    description:
      "At  Digicore Inc, apart from offering just PPC services—we intend to become a trusted digital growth partner for business growth. After gaining prominence in the digital marketing segment, we have consistently blended AI-powered PPC strategies and data-driven solutions and connected them with the target audience.",
  });
  const [services, setServices] = useState([
    { id: uid(), iconUrl: "", title: "Search Engine Optimization", description: "Boost your visibility and drive targeted traffic with our data-driven search strategies. We help clients strengthen their online presence through expert SEO strategies and tailored services." },
    { id: uid(), iconUrl: "", title: "Social Media Marketing", description: "We offer tailored social media strategies to ensure your brand stands out on all social media platforms, including Instagram, Facebook, LinkedIn, YouTube, and more." },
    { id: uid(), iconUrl: "", title: "PPC & Performance Marketing", description: "Partner with us to unlock the full potential of paid advertising, maximize your revenue and accelerate business growth with our expertly crafted, results-driven PPC campaigns." },
    { id: uid(), iconUrl: "", title: "Website Design & Development", description: "We offer website design and development services to help clients have fast, responsive, user-friendly and search engine optimized websites to attract and engage audience." },
    { id: uid(), iconUrl: "", title: "Content Marketing", description: "We help businesses bring their brands to life with our expertly crafted content that tells their story to the world in an exciting and engaging way." },
    { id: uid(), iconUrl: "", title: "Online Reputation Management", description: "Our comprehensive Online Reputation Management (ORM) services are designed to help you monitor, manage, and shape your digital presence more effectively and intelligently." },
    { id: uid(), iconUrl: "", title: "Social Media Listening", description: "Monitor your online conversations like never before. We offer specialized social media listening services to help you track your brand, product or industry across social media platforms." },
    { id: uid(), iconUrl: "", title: "Conversion Rate Optimisation", description: "We offer Conversion Rate Optimization (CRO) services designed specifically to elevate your website’s user experience and turn your potential customers into actual ones effortlessly." },
    { id: uid(), iconUrl: "", title: "AEO + AIO + GEO", description: "TIMING MATTERS! Our AEO+AIO+GEO services are designed to optimize search engines for the right responses based on user intent and location to provide your audience with timely responses and build trust." },
  ]);

  /* ---------- WHY CHOOSE (CTA) SECTION ---------- */
  const [whyChooseSection, setWhyChooseSection] = useState({
    title: "Ready for More Traffic, Leads & Sales? Start SEO Now.",
    backgroundImageUrl: "",
  });
  const [whyChooseButtons, setWhyChooseButtons] = useState([
    { id: uid(), text: "+91 98188 88064", link: "tel:+919818888064", iconUrl: "" },
    { id: uid(), text: "REQUEST A CALLBACK", link: "/contact", iconUrl: "" },
  ]);

  /* ---------- TIMELINE SECTION ---------- */
  const [timelineSection, setTimelineSection] = useState({ imageUrl: "" });
  const [timelineItems, setTimelineItems] = useState([
    { id: uid(), title: "Contact Us", description: "Get in touch with us via email, phone or website." },
    { id: uid(), title: "Share Your Goals", description: "Tell us about your business and marketing goals." },
    { id: uid(), title: "Consultation", description: "Our expert will discuss strategies tailored to your business." },
    { id: uid(), title: "Proposal & Plan", description: "We provide a customized strategy and roadmap." },
    { id: uid(), title: "Partner & Grow", description: "Drive high-impact traffic and measurable growth." },
  ]);


  /* ---------- WHY CHOOSE DIGICORE SECTION ---------- */
  const [whyChooseDigicoreSection, setWhyChooseDigicoreSection] = useState({
    title: "Why Choose  Digicore Inc as YOUR PPC AGENCY IN DELHI",
    description:
      "Digicore Inc is a leading PPC company serving businesses across Delhi NCR. We help brands generate qualified leads and conversions through carefully planned, data-driven paid advertising strategies. We don’t believe in running ads randomly or chasing short term goals. Every PPC campaign is built around business goals, audience intent, and measurable outcomes. From keyword selection to bid optimisation and conversion tracking, our approach is structured, transparent, and performance-led. Our PPC strategies are designed to maximise returns, manage ad spend, and deliver consistent results across platforms like Google Ads and social media advertising. Here’s why businesses trust  Digicore Inc for PPC management:",
    imageUrl: "",
  });
  const [points, setPoints] = useState([
    "We design future-ready strategies to ensure long-term visibility and relevance.",
    "All our strategies are curated by our highly skilled and experienced AI SEO experts.",
    "We believe in pure work – every decision is powered by real insights, analytics and performance data.",
    "We ensure your brand shows up across AI platforms, social channels and marketplaces.",
    "We design SEO strategies with today’s search in focus and tomorrow’s opportunities in sight.",
    "We deliver results you can trust and clearly measure.",
  ]);

  /* ---------- FAQ SECTION ---------- */
  const [faqSection, setFaqSection] = useState({ heading: "FAQ" });
  const [faqItems, setFaqItems] = useState([
    { id: uid(), question: "In how much time can I expect Google display ads?", answer: "The initial results in terms of brand visibility reflect in a short span. However, the meaningful conversions and engagement take up to few weeks to improve through consistent optimization." },
    { id: uid(), question: "Are Google display ads beneficial for remarketing?", answer: "Yes! Google display ads re-engage the visitors by showing them tailored ads of products & services they have browsed. This is one of the best ways to increase conversion opportunities and brand recall." },
    { id: uid(), question: "Is it important to optimize Google display ads frequently?", answer: "Yes! In order to achieve desirable results from Google display ad management services, it is essential to optimize the campaigns regularly. The performance reviews and bid adjustments of these ads should be weekly or consistently monitored." },
    { id: uid(), question: "Why should I choose Digicore Inc. for Google display ad management services?", answer: "At Digicore Inc., continuous ad optimization, transparent reporting and data-driven targeting helps our seasoned Google display ad specialists in delivering measurable outcome. We ensure consistent performance and tailored advertising results" },
  ]);

  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  /* ---------- list helpers ---------- */
  const updatePoint = (index, value) =>
    setPoints(points.map((item, i) => (i === index ? value : item)));
  const addPoint = () => setPoints([...points, ""]);
  const removePoint = (index) => setPoints(points.filter((_, i) => i !== index));

  const updatePerformanceItem = (index, value) =>
    setPerformanceSection({
      ...performanceSection,
      items: performanceSection.items.map((item, i) => (i === index ? value : item)),
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
      if (data.servicesSection) {
        setServicesSection({
          heading: data.servicesSection.heading,
          description: data.servicesSection.description,
        });
        if (data.servicesSection.services) {
          setServices(data.servicesSection.services.map((item) => ({ id: uid(), ...item })));
        }
      }
      if (data.whyChooseSection) {
        setWhyChooseSection({
          title: data.whyChooseSection.title,
          backgroundImageUrl: data.whyChooseSection.backgroundImageUrl,
        });
        if (data.whyChooseSection.buttons) {
          setWhyChooseButtons(data.whyChooseSection.buttons.map((item) => ({ id: uid(), ...item })));
        }
      }
      if (data.timelineSection) {
        setTimelineSection({ imageUrl: data.timelineSection.imageUrl });
        if (data.timelineSection.items) {
          setTimelineItems(data.timelineSection.items.map((item) => ({ id: uid(), ...item })));
        }
      }
      if (data.whyChooseDigicoreSection) {
        setWhyChooseDigicoreSection({
          title: data.whyChooseDigicoreSection.title,
          description: data.whyChooseDigicoreSection.description,
          imageUrl: data.whyChooseDigicoreSection.imageUrl,
        });
        if (data.whyChooseDigicoreSection.points) setPoints(data.whyChooseDigicoreSection.points);
      }
      if (data.faqSection) {
        setFaqSection({ heading: data.faqSection.heading });
        if (data.faqSection.faqItems) {
          setFaqItems(data.faqSection.faqItems.map((item) => ({ id: uid(), ...item })));
        }
      }
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
      whyChooseDigicoreSection: { ...whyChooseDigicoreSection, points },
      faqSection: { ...faqSection, faqItems },
    };

    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("YouTube Ads page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <PageHeader title="YouTube Ads Page Content - Admin" description="Edit all YouTube Ads page sections from the admin panel." status={status} />
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
          <Field label="Video URL (Visibility Section Video)">
            <TextInput value={visibilitySection.videoUrl} onChange={(e) => setVisibilitySection({ ...visibilitySection, videoUrl: e.target.value })} placeholder="Visibility section video URL/path" />
          </Field>
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

        <Section title="6. Why Do I Need Google Shopping Ads Management Services? Section" open={openSection === "seoAgencySection"} onToggle={() => toggle("seoAgencySection")}>
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
            title="Services"
            addLabel="Add Service"
            items={services}
            onChange={setServices}
            fields={[
              { name: "iconUrl", label: "Icon", type: "image" },
              { name: "title", label: "Title", required: true },
              { name: "description", label: "Description", type: "textarea", rows: 3 },
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
              { name: "text", label: "Button Text", required: true },
              { name: "link", label: "Button Link", placeholder: "/path or https://..." },
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
              { name: "title", label: "Title", required: true },
              { name: "description", label: "Description", type: "textarea", rows: 3 },
            ]}
          />
        </Section>


        <Section title="12. Why Choose Digicore Section" open={openSection === "whyChooseDigicoreSection"} onToggle={() => toggle("whyChooseDigicoreSection")}>
          <Field label="Heading">
            <TextInput value={whyChooseDigicoreSection.title} onChange={(e) => setWhyChooseDigicoreSection({ ...whyChooseDigicoreSection, title: e.target.value })} />
          </Field>
          <Field label="Description">
            <TextArea rows={6} value={whyChooseDigicoreSection.description} onChange={(e) => setWhyChooseDigicoreSection({ ...whyChooseDigicoreSection, description: e.target.value })} />
          </Field>
          <ImageInput label="Why Choose Image" value={whyChooseDigicoreSection.imageUrl} onChange={(e) => setWhyChooseDigicoreSection({ ...whyChooseDigicoreSection, imageUrl: e.target.value })} />
          <div className="md:col-span-2 space-y-3">
            <CardListHeader title="Bullet Points" onAdd={addPoint} />
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <TextInput value={point} onChange={(e) => updatePoint(index, e.target.value)} />
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
              { name: "question", label: "Question", required: true },
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
