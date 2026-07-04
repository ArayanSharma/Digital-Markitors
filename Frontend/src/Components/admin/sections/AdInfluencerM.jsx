import { useState, useEffect, useCallback } from "react";
import { loadPageContent, savePageContent } from "../../../utils/pageApi";
import { useToast } from "../../../context/ToastContext";
import LeadForm from "../LeadForm";
import {
  PageHeader,
  Section,
  Field,
  TextInput,
  TextArea,
  ButtonFields,
  ImageInput,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "InfluencerM";

const initialData = {
  banner: {
    title: "Google Display Ads Management Agency",
    description: "At Digicore Inc., we help you display ads in front of your audience based on their browsing preferences. Experience the business growth through our strategically planned Google Display ads management services.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/services" },
    backgroundImage: "",
  },
  about: {
    heading: "Best Google Display Ads Management Services Agency",
    body: "Digicore Inc. is the best Google Display Ads Management Agency that offers comprehensive display advertising plan to improve ROI of your digital marketing campaigns. We address the customized business goals of our clients while targeting the right audience. Experience the exceptional results to scale up your business with our result-driven display advertising services. Being the premier Google partner, Digicore Inc. focuses on your consistent success in the ecommerce segment and drive quality traffic to your website. Our seasoned professionals prepare captivating ads to attract high-intent shoppers according to their browsing preferences.",
  },
  visibility: {
    heading: "Why Google Display Ad management agency is a must for businesses?",
    body: "Get your brand noticed with Digicore Inc.’ top Google display ad management services customized according to your long-term advertising goals. At every stage of digital marketing, our display advertising campaigns help you in identifying new prospects, increasing brand awareness, and addressing the requirements of potential buyers. Being the trusted Google Display Ad management agency, we create uniquely tailored ad message and creative according to the search intent, user behaviour and the browsing history of your audience. These ads are targeted to reach potential customers wherever they have been looking for your services.",
    image: "",
  },
  performance: {
    label1: "TRACK",
    label2: "ANALYZE",
    label3: "SCALE",
    label4: "REPEAT",
    image: "",
  },
  seoAgency: {
    heading: "Why do I need Google Display Ad management services?",
    body: "At Digicore Inc., we prioritize improved visibility and clarity of advertising. With our 360-degrees’ Google Display ad management services, we engage your targeted audience and captivate them right where they browse the most. Whether it is any specific application, website, search engine, YouTube, multiple platforms are covered in addressing the display advertising goals. Our seasoned display ad specialists play a vital role in boosting brand awareness, attracting engagement, driving conversion and nurture prospects. Digicore Inc. utilizes data-driven optimization to ensure ads perform in an exceptional manner and complements your paid media strategy. Besides, our display advertising management services offer sustainable business growth and improved ROI.",
  },
  discover: {
    heading: "Google Display Ad Management Services",
    description: "Digicore Inc. offers you a cost-effective of reaching your potential customers and increase ROI through multi-layered Google display ad management services. Being the trusted paid media agency, we ensure targeting, ad placement, bidding and optimization, all the segments of display advertising are addressed by our professionals.",
  },
  services: [
    {
      icon: "",
      title: "Google Display Ads Management",
      description: "With the help of Google Display ads management, we strategically use targeted visuals, smart ad placements and effective data-driven optimization to help you reach the right audience. The objective of these services is to boost conversion, brand awareness and engagement across the Google display network.",
    },
    {
      icon: "",
      title: "Google Display Network (GDN) Advertising",
      description: "With the help of Google Display Network advertising, we promote your business across multiple websites and apps. As a part of this service, we use targeted banners and visuals in order to increase reach, engagement, brand awareness and conversions.",
    },
    {
      icon: "",
      title: "Brand Awareness Display Campaigns",
      description: "In order to increase your brand’s visibility across the Google Display Network, we create well-tailored campaigns keeping in mind the potential customers. From the use of creative creation & optimization to targeting metrics, we boost engagement and lasting impressions.",
    },
    {
      icon: "",
      title: "Lead Generation Display Campaigns",
      description: "As a part of these campaigns, we capture high-quality prospects by working over display ads, optimized placements, compelling creatives. The objective of these campaigns is to drive form submissions, conversions, and inquiries while maximizing ROI.",
    },
    {
      icon: "",
      title: "Display Remarketing Campaigns",
      description: "With the help of personalized display ads, we re-engage past website visitors by reminding them of your brand through these services. Besides, we encourage return visits, conversions and inquiries across the Google Display Network.",
    },
    {
      icon: "",
      title: "Responsive Display Ads",
      description: "With the help of these Google display ad management services, our professionals adapt headlines, campaign layouts, and images to fit any screen or placement. These services are aimed at improved engagement, wider reach, improved engagement and brand messaging along with better performance across the Google Display Network.",
    },
    {
      icon: "",
      title: "Audience & Interest-Based Display Targeting",
      description: "These services are effectively design to reach users based on demographics, interests, search intent, user behaviour to ensure higher relevance, improved conversion rate, and better engagement.",
    },
    {
      icon: "",
      title: "Creative Banner Design for Display Ads",
      description: "In order to grab attention of potential customers, eye-catching ad banners and communicate your message instantly and drive clicks, we create compelling visuals. These banners also include call-to-action and strong branding for maximum campaign performance.",
    },
    {
      icon: "",
      title: "Conversion Tracking & Performance Optimization",
      description: "We enable our clients to track every impression, click and conversion accurately through Google display advertising. These campaigns are helpful in improving performance, reduction of costs and thereby, maximize ROI through strategic adjustments and data-driven insights.",
    },
  ],
  whyChoose: {
    heading: "Ready for More Traffic, Leads & Sales? Start SEO Now.",
    backgroundImage: "",
    button1: { text: "+91 98188 88064", link: "tel:+919818888064" },
    button2: { text: "REQUEST A CALLBACK", link: "/contact" },
  },
  impact: {
    image: "",
    items: [
      { title: "Contact Us", desc: "Reach out to us via email, phone or our website." },
      { title: "SEO and PPC", desc: "We were rated the Top SEO and PPC Company of the Year in 2014 by CIO Review." },
      { title: "Share Your Goals:", desc: "Share your challenges and objectives." },
      { title: "Consultation:", desc: "Our experts will craft SEO strategies tailored to your needs." },
      { title: "Tailored Plan:", desc: "Get a customized plan with clear strategies and outcomes." },
      { title: "Out Turn:", desc: "Achieve measurable results in record time." },
    ],
  },
  industriesSection: {
    heading: "Industry we work with",
  },
  industries: [
    { image: "", title: "Healthcare", desc: "We provide specialized digital marketing solutions to hospitals, clinics and other health institutions to help them build trust and grow their brand.", button: { text: "Read More", link: "/healthcare" } },
    { image: "", title: "E-Commerce", desc: "We help online retailers and marketplaces with robust strategies to elevate their online presence and turn casual browsers into loyal customers.", button: { text: "Read More", link: "/E-Commerce" } },
    { image: "", title: "Travel", desc: "We offer a complete suite of digital marketing solutions for travel brands, helping them showcase their offerings in a unique way and drive bookings.", button: { text: "Read More", link: "/Travel" } },
  ],
  caseStudies: {
    heading: "Case Studies",
    items: [
      {
        title: "The Moto Men – High-Intent Google Ads Leads with 12.5% Conversion",
        image: "",
        descriptions: [
          "For The Moto Men, we executed a Noida-focused PPC campaign to drive high-intent enquiries for premium car detailing services. Nearly 80% of the enquiries were highly relevant, aligned with both location and service intent. From these qualified enquiries, the campaign achieved a conversion rate of up to 12.5%, delivering consistent and measurable business impact. The strategy focused on precise location targeting, intent-driven keywords, and continuous optimisation to maintain lead quality while minimising wasted ad spend.",
        ],
        primaryBtn: { text: "View Case Study", link: "/case-study/moto-men" },
        secondaryBtn: { text: "View Our Latest Work", link: "/work" },
      },
      {
        title: "Trusted Hair Transplant Clinic – PPC Performance Case Study (14.52% Conversion)",
        image: "",
        descriptions: [
          "We executed a high-intent Google Search Ads campaign for a hair transplant clinic, targeting users actively searching for treatment-related queries. The campaign delivered a conversion rate of 14.52%, indicating strong intent alignment and effective ad optimisation. The strategy focused on quality enquiries and consistent performance rather than inflated traffic, helping the clinic generate relevant leads and measurable growth.",
        ],
        primaryBtn: { text: "View Case Study", link: "/case-study/hair-transplant" },
        secondaryBtn: { text: "View Our Latest Work", link: "/work" },
      },
      {
        title: "IOD Global – Display Campaign Case Study",
        image: "",
        descriptions: [
          "For IOD Global, we executed a Google Display Campaign focused on increasing brand visibility and recall among the right audience segments. The campaign was designed to build consistent exposure through targeted placements and audience-based targeting. The strategy prioritised relevant impressions, controlled reach, and brand presence. Continuous optimisation ensured stable performance and efficient delivery aligned with the brand’s objectives while avoiding irrelevant traffic.",
        ],
        primaryBtn: { text: "View Case Study", link: "/case-study/iod-global" },
        secondaryBtn: { text: "View Our Latest Work", link: "/work" },
      },
    ],
  },
  whyBusiness: {
    heading: "Why choose Digicore Inc. for Google Display ad management services?",
    description: "At Digicore Inc., we employ data driven approach to implement Google Display ad management campaigns. We optimally utilize audience insights, performance analytics and conversion tracking to reach targeted users at the right time across relevant platforms. Our seasoned professionals consistently monitor clicks, impressions, and conversions to optimize creatives, ad placements and bids to attract maximum ROI. From remarkable expertise, transparent reporting and strategic A/B testing, Digicore Inc. assures improved brand visibility, measurable growth and consistent performance in the current ad spend according to your business goals.",
    image: "",
    features: [
      { text: "Our team of seasoned professionals with in-depth knowledge of Google display advertising customizes campaigns for measurable growth" },
      { text: "We prioritize growth-mindset to deliver data-driven and consistent advertising results for all-sized businesses" },
      { text: "Our reporting system maintains clarity and transparency to execute all the Google display ad campaigns according to competitor analysis" },
      { text: "We focus on client-centric and result-driven approach to target advertising goals in a specified time span" },
      { text: "All our Google display ad management services are sustainable and aimed at consistent business growth" },
      { text: "Our proven expertise of Google display ad management has helped businesses of diverse segments to achieve their advertising objectives." },
      { text: "Partner with us to improve the engagement rate, visibility and performance of your business with our cost-effective Google Display ad management services" },
    ],
  },
  faqSection: {
    heading: "SEO AGENCY DELHI FAQS",
    items: [
      { question: "Does social media marketing work for all businesses?", answer: "Social media marketing is beneficial for all-sized businesses, but results are variable based on goals, target audience, nature of business, and constant strategy execution." },
      { question: "Does social media marketing work for Delhi-based businesses?", answer: "Yes! But, it depends on the audience targeting, content approach, industry, business goals, and the type of industry." },
      { question: "Can social media help me get local leads in Delhi?", answer: "Yes, local leads based in Delhi can be generated through social media through location-specific content, local engagement with nearby customers and targeted ads." },
      { question: "Which platforms work best for Delhi businesses?", answer: "Instagram, Google Business Profile, Facebook, and WhatsApp are ideal for Delhi-based businesses for improving local visibility and lead generation." },
      { question: "Why do I need social media marketing for my business?", answer: "Customer engagement and brand visibility increase while building trust and generating quality leads in a cost-effective manner through social media marketing. ROI also increases through professional SMM services." },
      { question: "How can social media marketing add value to my business?", answer: "The increased leads & conversion rate, improved credibility, brand awareness and attracting targeted customers are some of the benefits of social media marketing that add value to your business." },
      { question: "What are the real benefits of social media marketing?", answer: "From strategic planning, content creation, performance assessment to optimization of campaigns, the social media marketing agency offers customized services to achieve clients’ business goals." },
      { question: "How does a social media marketing agency actually work?", answer: "With our customized social media marketing services, we help businesses in reaching targeted audiences, drive website traffic, strengthen brand credibility and boost sales effectively." },
    ],
  },
};

export default function AdInfluencerM() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("banner");
  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [pageData, setPageData] = useState(initialData);

  const updateSection = (section, key, value) => {
    setPageData((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [key]: value,
      },
    }));
  };

  const updateArray = (section, next) => {
    setPageData((current) => ({ ...current, [section]: next }));
  };

  const load = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    let d = null;
    try {
      d = await loadPageContent(PAGE_SLUG);
    } catch (err) {
      setLoadError(err.message);
    }
    if (d) {
      setPageData((prev) => ({ ...prev, ...d }));
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
      await savePageContent(PAGE_SLUG, pageData);
      setStatus("saved");
      showToast("Influencer Marketing page saved successfully");
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
      
        <PageHeader title="Influencer Marketing Page - Admin" description="Edit all Influencer page sections from the admin panel." status={status} />
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="Banner Section" open={openSection === "banner"} onToggle={() => toggle("banner")}>
          <Field label="Title">
            <TextInput value={pageData.banner.title} onChange={(e) => updateSection("banner", "title", e.target.value)} placeholder="Banner title" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.banner.description} onChange={(e) => updateSection("banner", "description", e.target.value)} rows={6} placeholder="Banner description" />
          </Field>
          <ButtonFields label="Primary Button" value={pageData.banner.primaryBtn} onChange={(next) => updateSection("banner", "primaryBtn", next)} />
          <ButtonFields label="Secondary Button" value={pageData.banner.secondaryBtn} onChange={(next) => updateSection("banner", "secondaryBtn", next)} />
          <ImageInput label="Banner Background Image" value={pageData.banner.backgroundImage} onChange={(e) => updateSection("banner", "backgroundImage", e.target.value)} />
        </Section>

        <Section title="About Section" open={openSection === "about"} onToggle={() => toggle("about")}>
          <Field label="Heading">
            <TextInput value={pageData.about.heading} onChange={(e) => updateSection("about", "heading", e.target.value)} placeholder="About heading" />
          </Field>
          <Field label="Body">
            <TextArea value={pageData.about.body} onChange={(e) => updateSection("about", "body", e.target.value)} rows={8} placeholder="About text" />
          </Field>
        </Section>

        <Section title="Visibility Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
          <Field label="Heading">
            <TextInput value={pageData.visibility.heading} onChange={(e) => updateSection("visibility", "heading", e.target.value)} placeholder="Visibility heading" />
          </Field>
          <Field label="Body">
            <TextArea value={pageData.visibility.body} onChange={(e) => updateSection("visibility", "body", e.target.value)} rows={8} placeholder="Visibility text" />
          </Field>
          <ImageInput label="Visibility Image" value={pageData.visibility.image} onChange={(e) => updateSection("visibility", "image", e.target.value)} />
        </Section>

        <Section title="Performance Section" open={openSection === "performance"} onToggle={() => toggle("performance")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Label 1">
              <TextInput value={pageData.performance.label1} onChange={(e) => updateSection("performance", "label1", e.target.value)} placeholder="TRACK" />
            </Field>
            <Field label="Label 2">
              <TextInput value={pageData.performance.label2} onChange={(e) => updateSection("performance", "label2", e.target.value)} placeholder="ANALYZE" />
            </Field>
            <Field label="Label 3">
              <TextInput value={pageData.performance.label3} onChange={(e) => updateSection("performance", "label3", e.target.value)} placeholder="SCALE" />
            </Field>
            <Field label="Label 4">
              <TextInput value={pageData.performance.label4} onChange={(e) => updateSection("performance", "label4", e.target.value)} placeholder="REPEAT" />
            </Field>
          </div>
          <ImageInput label="Performance Image" value={pageData.performance.image} onChange={(e) => updateSection("performance", "image", e.target.value)} />
        </Section>

        <Section title="Google Display Agency Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
          <Field label="Heading">
            <TextInput value={pageData.seoAgency.heading} onChange={(e) => updateSection("seoAgency", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Body">
            <TextArea value={pageData.seoAgency.body} onChange={(e) => updateSection("seoAgency", "body", e.target.value)} rows={10} placeholder="Section body" />
          </Field>
        </Section>

        <Section title="Discover Services Section" open={openSection === "discover"} onToggle={() => toggle("discover")}>
          <Field label="Heading">
            <TextInput value={pageData.discover.heading} onChange={(e) => updateSection("discover", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.discover.description} onChange={(e) => updateSection("discover", "description", e.target.value)} rows={8} placeholder="Section description" />
          </Field>
        </Section>

        <Section title="Services Cards" open={openSection === "services"} onToggle={() => toggle("services")}>
          <LeadForm
            title="Services"
            addLabel="Add Service"
            items={pageData.services}
            onChange={(next) => updateArray("services", next)}
            fields={[
              { name: "icon", label: "Icon image URL", type: "image" },
              { name: "title", label: "Service title", required: true },
              { name: "description", label: "Service description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Why Choose Section" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
          <Field label="Heading">
            <TextInput value={pageData.whyChoose.heading} onChange={(e) => updateSection("whyChoose", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <ImageInput label="Background image" value={pageData.whyChoose.backgroundImage} onChange={(e) => updateSection("whyChoose", "backgroundImage", e.target.value)} />
          <ButtonFields label="Button 1" value={pageData.whyChoose.button1} onChange={(next) => updateSection("whyChoose", "button1", next)} />
          <ButtonFields label="Button 2" value={pageData.whyChoose.button2} onChange={(next) => updateSection("whyChoose", "button2", next)} />
        </Section>

        <Section title="Impact Timeline Section" open={openSection === "impact"} onToggle={() => toggle("impact")}>
          <ImageInput label="Impact image" value={pageData.impact.image} onChange={(e) => updateSection("impact", "image", e.target.value)} />
          <LeadForm
            title="Timeline Items"
            addLabel="Add Item"
            items={pageData.impact.items}
            onChange={(next) => updateSection("impact", "items", next)}
            fields={[
              { name: "title", label: "Timeline title", required: true },
              { name: "desc", label: "Timeline description", type: "textarea" },
            ]}
          />
        </Section>



        <Section title="Why Business Section" open={openSection === "whyBusiness"} onToggle={() => toggle("whyBusiness")}>
          <Field label="Heading">
            <TextInput value={pageData.whyBusiness.heading} onChange={(e) => updateSection("whyBusiness", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.whyBusiness.description} onChange={(e) => updateSection("whyBusiness", "description", e.target.value)} rows={10} placeholder="Section description" />
          </Field>
          <ImageInput label="Section image" value={pageData.whyBusiness.image} onChange={(e) => updateSection("whyBusiness", "image", e.target.value)} />
          <LeadForm
            title="Features"
            addLabel="Add Feature"
            items={pageData.whyBusiness.features}
            onChange={(next) => updateSection("whyBusiness", "features", next)}
            fields={[{ name: "text", label: "Feature text", type: "textarea", required: true }]}
          />
        </Section>

        <Section title="FAQ Section" open={openSection === "faqSection"} onToggle={() => toggle("faqSection")}>
          <Field label="FAQ Heading">
            <TextInput value={pageData.faqSection.heading} onChange={(e) => updateSection("faqSection", "heading", e.target.value)} placeholder="FAQ heading" />
          </Field>
          <LeadForm
            title="FAQs"
            addLabel="Add FAQ"
            items={pageData.faqSection.items}
            onChange={(next) => updateSection("faqSection", "items", next)}
            fields={[
              { name: "question", label: "FAQ question", required: true },
              { name: "answer", label: "FAQ answer", type: "textarea" },
            ]}
          />
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
