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

const PAGE_SLUG = "meta-facebook-ads";

export default function AdMetaF() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("banner");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [banner, setBanner] = useState({
    title: "Google Meta Facebook Ads Management Agency",
    description:
      "At Digicore Inc., we help you Meta Facebook Ads in front of your audience based on their browsing preferences. Experience the business growth through our strategically planned Google Meta Facebook Ads management services.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "" },
    secondaryBtn: { text: "Our Services", link: "" },
    backgroundImageUrl: "",
  });



  const [aboutSection, setAboutSection] = useState({
    title: "Best Google Meta Facebook Ads Management Services Agency",
    description:
      "Digicore Inc. is the best Google Meta Facebook Ads Management Agency that offers comprehensive display advertising plan to improve ROI of your digital marketing campaigns. We address the customized business goals of our clients while targeting the right audience. Experience the exceptional results to scale up your business with our result-driven display advertising services. Being the premier Google partner, Digicore Inc. focuses on your consistent success in the ecommerce segment and drive quality traffic to your website. Our seasoned professionals prepare captivating ads to attract high-intent shoppers according to their browsing preferences.",
  });

  const [visibilitySection, setVisibilitySection] = useState({
    title: "Why Google Display Ad management agency is a must for businesses?",
    description:
      "Get your brand noticed with Digicore Inc.’ top Google display ad management services customized according to your long-term advertising goals. At every stage of digital marketing, our display advertising campaigns help you in identifying new prospects, increasing brand awareness, and addressing the requirements of potential buyers. Being the trusted Google Display Ad management agency, we create uniquely tailored ad message and creative according to the search intent, user behaviour and the browsing history of your audience. These ads are targeted to reach potential customers wherever they have been looking for your services.",
    imageUrl: "",
  });

  const [performanceSection, setPerformanceSection] = useState({
    items: ["TRACK", "ANALYZE", "SCALE", "REPEAT"],
    imageUrl: "",
  });

  const [seoAgencySection, setSeoAgencySection] = useState({
    title: "Why do I need Google Display Ad management services?",
    description:
      "At Digicore Inc., we prioritize improved visibility and clarity of advertising. With our 360-degrees’ Google Display ad management services, we engage your targeted audience and captivate them right where they browse the most. Whether it is any specific application, website, search engine, YouTube, multiple platforms are covered in addressing the display advertising goals. Our seasoned display ad specialists play a vital role in boosting brand awareness, attracting engagement, driving conversion and nurture prospects. Digicore Inc. utilizes data-driven optimization to ensure ads perform in an exceptional manner and complements your paid media strategy. Besides, our display advertising management services offer sustainable business growth and improved ROI.",
  });

  const [servicesSection, setServicesSection] = useState({
    heading: "Google Display Ad Management Services",
    description:
      "Digicore Inc. offers you a cost-effective of reaching your potential customers and increase ROI through multi-layered Google display ad management services. Being the trusted paid media agency, we ensure targeting, ad placement, bidding and optimization, all the segments of display advertising are addressed by our professionals.",
    services: [
      {
        id: uid(),
        iconUrl: "",
        title: "Google Meta Facebook Ads Management",
        description:
          "With the help of Google Meta Facebook Ads management, we strategically use targeted visuals, smart ad placements and effective data-driven optimization to help you reach the right audience. The objective of these services is to boost conversion, brand awareness and engagement across the Google display network.",
      },
      {
        id: uid(),
        iconUrl: "",
        title: "Google Display Network (GDN) Advertising",
        description:
          "With the help of Google Display Network advertising, we promote your business across multiple websites and apps. As a part of this service, we use targeted banners and visuals in order to increase reach, engagement, brand awareness and conversions.",
      },
      {
        id: uid(),
        iconUrl: "",
        title: "Lead Generation Display Campaigns",
        description:
          "As a part of these campaigns, we capture high-quality prospects by working over Meta Facebook Ads, optimized placements, compelling creatives. The objective of these campaigns is to drive form submissions, conversions, and inquiries while maximizing ROI.",
      },
      {
        id: uid(),
        iconUrl: "",
        title: "Display Remarketing Campaigns",
        description:
          "With the help of personalized Meta Facebook Ads, we re-engage past website visitors by reminding them of your brand through these services. Besides, we encourage return visits, conversions and inquiries across the Google Displaay Network.",
      },
      {
        id: uid(),
        iconUrl: "",
        title: "Responsive Meta Facebook Ads",
        description:
          "With the help of these Google display ad management services, our professionals adapt headlines, campaign layouts, and images to fit any screen or placement. These services are aimed at improved engagement, wider reach, improved engagement and brand messaging along with better performance across the Google Display Network.",
      },
      {
        id: uid(),
        iconUrl: "",
        title: "Audience & Interest-Based Display Targeting",
        description:
          "These services are effectively design to reach users based on demographics, interests, search intent, user behaviour to ensure higher relevance, improved conversion rate, and better engagement.",
      },
    ],
  });

  const [whyChooseSection, setWhyChooseSection] = useState({
    title: "Ready for More Traffic, Leads & Sales? Start SEO Now.",
    buttons: [
      { id: uid(), text: "+91 98188 88064", link: "tel:+919818888064", iconUrl: "" },
      { id: uid(), text: "REQUEST A CALLBACK", link: "/contact", iconUrl: "" },
    ],
    backgroundImageUrl: "",
  });

  const [timelineSection, setTimelineSection] = useState({
    imageUrl: "",
    items: [
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
    ],
  });


  const [whyChooseDigicoreSection, setWhyChooseDigicoreSection] = useState({
    title: "Why choose Digicore Inc. for Google Display ad management services?",
    description:
      "At Digicore Inc., we employ data driven approach to implement Google Display ad management campaigns. We optimally utilize audience insights, performance analytics and conversion tracking to reach targeted users at the right time across relevant platforms. Our seasoned professionals consistently monitor clicks, impressions, and conversions to optimize creatives, ad placements and bids to attract maximum ROI. From remarkable expertise, transparent reporting and strategic A/B testing, Digicore Inc. assures improved brand visibility, measurable growth and consistent performance in the current ad spend according to your business goals.",
    points: [
      "Our seasoned professionals with profound experience tailors and execute Google shopping ad campaigns",
      "We prioritize growth-mindset to deliver data-driven and consistent advertising results for all-sized businesses",
      "Our reporting system maintains clarity and transparency to execute all the Google display ad campaigns according to competitor analysis",
      "We focus on client-centric and result-driven approach to target advertising goals in a specified time span",
      "All our Google display ad management services are sustainable and aimed at consistent business growth",
      "Our proven expertise of Google display ad management has helped businesses of diverse segments to achieve their advertising objectives.",
      "Partner with us to improve the engagement rate, visibility and performance of your business with our cost-effective Google Display ad management services",
    ],
    imageUrl: "",
  });

  const [faqSection, setFaqSection] = useState({
    heading: "FAQ",
    faqItems: [
      {
        id: uid(),
        question: "In how much time can I expect Google Meta Facebook Ads?",
        answer:
          "The initial results in terms of brand visibility reflect in a short span. However, the meaningful conversions and engagement take up to few weeks to improve through consistent optimization.",
      },
      {
        id: uid(),
        question: "Are Google Meta Facebook Ads beneficial for remarketing?",
        answer:
          "Yes! Google Meta Facebook Ads re-engage the visitors by showing them tailored ads of products & services they have browsed. This is one of the best ways to increase conversion opportunities and brand recall.",
      },
      {
        id: uid(),
        question: "Is it important to optimize Google Meta Facebook Ads frequently?",
        answer:
          "Yes! In order to achieve desirable results from Google display ad management services, it is essential to optimize the campaigns regularly. The performance reviews and bid adjustments of these ads should be weekly or consistently monitored.",
      },
      {
        id: uid(),
        question: "Why should I choose Digicore Inc. for Google display ad management services?",
        answer:
          "At Digicore Inc., continuous ad optimization, transparent reporting and data-driven targeting helps our seasoned Google display ad specialists in delivering measurable outcome. We ensure consistent performance and tailored advertising results",
      },
    ],
  });

  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  // ---- performanceSection.items (fixed 4-item array) ----
  const updatePerformanceItem = (index, value) =>
    setPerformanceSection({
      ...performanceSection,
      items: performanceSection.items.map((item, i) => (i === index ? value : item)),
    });

  // ---- whyChooseDigicoreSection.points (plain string array) ----
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
      if (data.whyChooseSection) setWhyChooseSection(data.whyChooseSection);
      if (data.timelineSection) setTimelineSection(data.timelineSection);
      if (data.whyChooseDigicoreSection) setWhyChooseDigicoreSection(data.whyChooseDigicoreSection);
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
      banner,
      aboutSection,
      visibilitySection,
      performanceSection,
      seoAgencySection,
      servicesSection,
      whyChooseSection,
      timelineSection,
      whyChooseDigicoreSection,
      faqSection,
    };

    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("Meta Facebook Ads page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      
        <PageHeader title="Meta Facebook Ads Page Content - Admin" description="Edit all Meta Facebook Ads page sections from the admin panel." status={status} />
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

        <Section title="6. Why Do I Need Google Display Ad Management Services? Section" open={openSection === "seoAgencySection"} onToggle={() => toggle("seoAgencySection")}>
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
            items={servicesSection.services}
            onChange={(next) => setServicesSection({ ...servicesSection, services: next })}
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
            items={whyChooseSection.buttons}
            onChange={(next) => setWhyChooseSection({ ...whyChooseSection, buttons: next })}
            fields={[
              { name: "text", label: "Button Text", required: true },
              { name: "link", label: "Button Link", placeholder: "/path or https://..." },
              { name: "iconUrl", label: "Icon (optional)", type: "image" },
            ]}
          />
        </Section>

        <Section title="9. Timeline Section" open={openSection === "timelineSection"} onToggle={() => toggle("timelineSection")}>
          <ImageInput label="Timeline Image" value={timelineSection.imageUrl} onChange={(e) => setTimelineSection({ ...timelineSection, imageUrl: e.target.value })} />
          <LeadForm
            title="Timeline Items"
            addLabel="Add Item"
            items={timelineSection.items}
            onChange={(next) => setTimelineSection({ ...timelineSection, items: next })}
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
            {whyChooseDigicoreSection.points.map((point, index) => (
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
            items={faqSection.faqItems}
            onChange={(next) => setFaqSection({ ...faqSection, faqItems: next })}
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
