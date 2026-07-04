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
  CardListHeader,
  RemoveBtn,
  ImageInput,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "Reseller";

/* Kept only for the "Case Studies" rankings field below, which needs a
   bespoke keyword|rank line-parsing field type that LeadForm doesn't
   generalize. Every other repeatable list in this file uses LeadForm. */
const AddableList = ({ items, onChange, fields, addLabel = "Items" }) => {
  const updateItem = (index, key, next) => {
    const updated = items.map((item, idx) => (idx === index ? { ...item, [key]: next } : item));
    onChange(updated);
  };

  const addItem = () => {
    const emptyItem = fields.reduce((acc, field) => ({ ...acc, [field.key]: field.defaultValue ?? "" }), {});
    onChange([...items, emptyItem]);
  };

  const removeItem = (index) => {
    onChange(items.filter((_, idx) => idx !== index));
  };

  return (
    <div className="md:col-span-2 space-y-3">
      <CardListHeader title={addLabel} onAdd={addItem} />
      {items.map((item, index) => (
        <div key={index} className="p-3 bg-bg-secondary rounded-2xl border border-brand-primary/25 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-text-muted">Item {index + 1}</span>
            <RemoveBtn onClick={() => removeItem(index)} />
          </div>
          {fields.map((field) => {
            if (field.type === "textarea") {
              return (
                <Field key={field.key} label={field.label}>
                  <TextArea
                    value={item[field.key] || ""}
                    onChange={(e) => updateItem(index, field.key, e.target.value)}
                    placeholder={field.placeholder}
                    rows={field.rows || 4}
                  />
                </Field>
              );
            }
            if (field.type === "multiline") {
              return (
                <Field key={field.key} label={field.label}>
                  <TextArea
                    value={(item[field.key] || []).join("\n")}
                    onChange={(e) => updateItem(index, field.key, e.target.value.split(/\r?\n/).filter(Boolean))}
                    placeholder={field.placeholder}
                    rows={field.rows || 4}
                  />
                </Field>
              );
            }
            if (field.type === "keyValueLines") {
              const linesValue = (item[field.key] || [])
                .map((r) => `${r.keyword} | ${r.rank}`)
                .join("\n");
              const parseLines = (text) =>
                text
                  .split(/\r?\n/)
                  .filter(Boolean)
                  .map((line) => {
                    const [keyword, rank] = line.split("|").map((part) => part.trim());
                    return { keyword: keyword || "", rank: Number(rank) || 0 };
                  });
              return (
                <Field key={field.key} label={field.label}>
                  <TextArea
                    value={linesValue}
                    onChange={(e) => updateItem(index, field.key, parseLines(e.target.value))}
                    placeholder={field.placeholder}
                    rows={field.rows || 6}
                  />
                </Field>
              );
            }
            if (field.type === "image") {
              return (
                <ImageInput
                  key={field.key}
                  label={field.label}
                  value={item[field.key]}
                  onChange={(e) => updateItem(index, field.key, e.target.value)}
                />
              );
            }
            if (field.type === "button") {
              return (
                <ButtonFields
                  key={field.key}
                  label={field.label}
                  value={item[field.key] || { text: "", link: "" }}
                  onChange={(next) => updateItem(index, field.key, next)}
                />
              );
            }
            return (
              <Field key={field.key} label={field.label}>
                <TextInput
                  value={item[field.key] || ""}
                  onChange={(e) => updateItem(index, field.key, e.target.value)}
                  placeholder={field.placeholder}
                />
              </Field>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const initialData = {
  banner: {
    subtitle: "We make your brand UNMISSABLE",
    title: "Turning Visibility into Growth. Turning Brands into Market Leaders",
    description: "We are Digicore Inc. – The Best SEO Company in Delhi NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing hight intent commercial keywords for your business.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/services" },
    backgroundImage: "",
  },
  seoResellerIntro: {
    title: "SEO Reseller Services & Program Available for Agencies",
    subtitle: "Join our White Label SEO Services Program to Become a ‘Reseller’",
    paragraphs: [
      "When looking for a partner to provide your SEO reseller services in India, picking someone genuine and trustworthy is essential. The market is swamped with innumerable SEO reseller service providers, with all of them claiming to be the best in the business. Nevertheless, picking a business associate that you can rely on to do what’s right for both of you is the best choice you can make for your company. After all, you are looking for high-quality SEO reseller services that help you achieve your goals. When it comes to the best SEO Reseller company, Digicore Inc. tops the list.",
      "Digicore Inc. is one of the leading SEO reseller companies in India. We provide the most all-encompassing SEO reseller services.",
      "Now, you can focus on expanding your SEO agency without worrying about meeting your clients’ vast SEO requirements because we will handle all of that for you. We can help your newly founded SEO agency reach new heights in its development. We provide first-rate SEO services to a wide range of companies in a variety of industry sectors. We offer the best SEO reseller packages and services that are Reliable, Profitable, and Hassle-Free.",
      "Digicore Inc.’ team consists of qualified specialists who operate in the background to offer customers high-quality outcomes while they remain unaware of their involvement. With Digital Markitors, you’ll have access to the very best writers, editors, and publishers. If you wish to utilize first-rate white label SEO services in India, then Digicore Inc. should be your go-to company! We can help you fulfill all your customers’ needs at the most competitive prices!",
    ],
  },
  resellerSection: {
    heading: "How Can We Help You Expand Your Business With Our SEO Reseller Services?",
    paragraphs: [
      "When looking for a partner to provide your SEO reseller services in India, picking someone genuine and trustworthy is essential. The market is swamped with innumerable SEO reseller service providers, with all of them claiming to be the best in the business. Nevertheless, picking a business associate that you can rely on to do what's right for both of you is the best choice you can make for your company. After all, you are looking for high-quality SEO reseller services that help you achieve your goals. When it comes to the best SEO Reseller company, Digicore Inc. tops the list. Digicore Inc. is one of the leading SEO reseller companies in India. We provide the most all-encompassing SEO reseller services",
      "Now, you can focus on expanding your SEO agency without worrying about meeting your clients' vast SEO requirements because we will handle all of that for you. We can help your newly founded SEO agency reach new heights in its development. We provide first-rate SEO services to a wide range of companies in a variety of industry sectors. We offer the best SEO reseller packages and services that are Reliable, Profitable, and Hassle-Free.",
      "Digicore Inc.' team consists of qualified specialists who operate in the background to offer customers high-quality outcomes while they remain unaware of their involvement. With Digicore Inc., you'll have access to the very best writers, editors, and publishers. If you wish to utilize first-rate white label SEO services in India, then Digicore Inc. should be your go-to company! We can help you fulfill all your customers' needs at the most competitive prices!",
    ],
  },
  benefits: [
    { icon: "FaSearch", title: "SEO", active: false },
    { icon: "FaChartLine", title: "Improved Ranking", active: false },
    { icon: "FaBullseye", title: "Relevant Traffic", active: true },
    { icon: "FaFilter", title: "More Leads", active: false },
    { icon: "FaArrowUp", title: "Increased ROI", active: false },
  ],
  servicesSection: {
    heading: "Our Result Oriented SEO Reseller Services",
  },
  services: [
    {
      image: "",
      title: "Local SEO Reseller",
      desc: "We will assist you in achieving dominance in the local SEO market. We will monitor your website's content, social accounts, and regional & professional directories and ensure that they are kept up to date.",
    },
    {
      image: "",
      title: "White Label SEO",
      desc: "Our in-house SEO experts and copywriters adhere to a set of criteria that are designed to increase the likelihood that Google and its search partners will index our material.",
    },
    {
      image: "",
      title: "White Label Web Designing",
      desc: "Our team of specialists will construct user-friendly, visually appealing, and SEO-compatible websites for your customers that feature interactive elements.",
    },
    {
      image: "",
      title: "Link Building",
      desc: "Our in-house SEO specialists will build backlinks from websites with a high Domain Authority by engaging in genuine outreach methods.",
    },
    {
      image: "",
      title: "PPC Reseller",
      desc: "We can help you bring instant traffic to your website by using pay-per-click (PPC) marketing using Google Ads.",
    },
    {
      image: "",
      title: "White Label SMO",
      desc: "By sticking to the tactics devised by our in-house team of skilled social media marketers, you may boost your brand's visibility.",
    },
  ],
  dmBanner: {
    heading: "We are Digicore Inc.",
    description: "We Help Businesses Reach Their Full DIGITAL Potential by Implementing Customized Yet Robust SEO Services",
    button: { text: "+91 9818888064", link: "tel:+919818888064" },
    image: "",
  },
  seoTeam: {
    heading: "We Have an Expert and Specialized SEO Team",
    intro: "Our SEO Reseller team consists of highly seasoned industry professionals, content writers, editors, and publishers who can provide significant value to your company. Google search algorithms are always being improved to provide the greatest possible experience for users. Our SEO specialists stay current on all of the most recent algorithm upgrades to provide your clients with the best outcomes and help you STAND OUT! We only hire experts and seasoned SEO specialists, content writers, and editors in our team. Also, we conduct proper training so as to make sure they are well-versed with the minutest of the upgrades in Google algorithms. With us, you can be certain of 100% result driven SEO Reseller Services and Complete Transparency.",
    image: "",
    paragraphs: [
      "We have the essential knowledge, experience, and expertise to ensure that your SEO plans operate as expected for your clients and help them rank higher and bring relevant traffic to their website regardless of their industry, business size, degree of competition, or goal.",
      "Our only objective is to position ourselves as India's most knowledgeable and trustworthy SEO agency, and by taking a unique approach to our work, we are able to continue delivering outstanding results for your business.",
    ],
  },
  solutionsSection: {
    heading: "OUR 360-DEGREE SEO RESELLER SOLUTIONS",
    subtitle: "We offer customized SEO Reseller solutions that are unique, industry-focused, and efficient in terms of cost. We have a team of specialists who work hard to ensure that they meet the needs of your precious customers in every possible way.",
  },
  solutions: [
    {
      icon: "",
      title: "Website Audit",
      description: "Before our specialists begin to work, they first audit your clients' websites so as to make sure the right strategies are curated to help your clients attain their goals and help you STAND OUT!",
    },
    {
      icon: "",
      title: "Keyword Research and Analysis",
      description: "At the core of our services are our comprehensive and painstaking research and analysis of keywords. We are better able to identify our audience with the assistance of the keywords that we target, which in turn helps us bring relevant traffic to your website.",
    },
    {
      icon: "",
      title: "Link Building",
      description: "It is one of the most important and effective strategies to have a positive impact on the performance of your clients' websites in the online environment. When it comes to link building, we are fully aware of both what should and should not be done.",
    },
    {
      icon: "",
      title: "Keyword and URL Optimization",
      description: "We will assist you in optimizing the keywords and URLs of your client's website in order to maximize the possibility that it will be discovered by search engines while also including keywords that are relevant to your services.",
    },
    {
      icon: "",
      title: "SEO Optimized Content",
      description: "The readability of the content is a crucial aspect of search engine optimization. Our team of expert content writers will generate and optimize content for your client's website to make it more readable, hence boosting the time each visitor spends on your website.",
    },
    {
      icon: "",
      title: "Reporting and Analysis",
      description: "Data plays an indispensable role in the success of any company. As an established SEO Reseller Company, we keep things transparent by providing you with monthly reports on analytics, visibility, and conversions.",
    },
  ],
  seoCase: {
    heading: "Case Studies",
    description: "We have used the best SEO practices to help our clients succeed in organic search marketing. Our dedicated support all round the year, aligned with robust SEO efforts has made it easier for their target customers to find them online.",
    caseStudies: [
      {
        logo: "",
        poster: "",
        rankings: [
          { keyword: "Keyword 1", rank: 1 },
          { keyword: "Keyword 2", rank: 2 },
          { keyword: "Keyword 3", rank: 3 },
          { keyword: "Keyword 4", rank: 4 },
          { keyword: "Keyword 5", rank: 5 },
        ],
      },
    ],
  },
  outsourcing: {
    heading: "Save Your Time and Agency Cost with SEO Outsourcing",
    paragraphs: [
      "Every business wants to be on the top of search engine results. But how many of them actually get that spot? Maybe very little! It is because your presence on the 1st page completely depends on your SEO efforts and strategies. SEO is the most essential part of any digital marketing plan. It includes several things including keyword research, content optimization, On-page SEO, link building, analytics, and much more. Our industry-focused and ROI-oriented SEO services are the best to increase your website visibility, traffic, conversions, and revenue. Simply put, our SEO services will help you tell search engines who you are, what you are selling, why your products/services matter, etc.",
      "No other digital marketing tactic is better than SEO if done correctly. We are saying this because your conversion rate can be between 14% and 28% if you choose professional SEO agency just like Digicore Inc.. Opt for our services and we will help you leave your competitors behind by getting the spot on the 1st page. If you do not want to harm your business, drop current ranking, and keep technical issues at bay, it is important to stay away from wrong SEO strategies and plan.",
    ],
  },
  otherServices: {
    heading: "OTHER RESELLER SERVICES OF Digicore Inc. IN WHICH YOU MIGHT BE INTERESTED",
    subtitle: "There are unlimited benefits to opting for SEO Resellers; here are the TOP ONES:",
    image: "",
    leftItems: [
      {
        title: "PPC Reseller",
        desc: "If you have PPC projects, don't think twice to outsource them to us. We are experts in managing the various technicalities of PPC projects to help your clients receive voluminous traffic and considerable sales.",
      },
      {
        title: "Social Media Marketing Reseller",
        desc: "It is essential to leverage the potential of different social media platforms to get more digital visibility and engage your target audience. We manage the social media pages and official profiles of your clients, making their digital presence stronger.",
      },
    ],
    rightItems: [
      {
        title: "Web Design & Development",
        desc: "When you have the responsibility to design and build websites for your clients, you can confidently rely on our extensive skills to deliver custom website designs and development services as a trusted Reseller. We deliver cost-effective solutions without any compromise on quality front.",
      },
      {
        title: "Enterprise SEO",
        desc: "As a marketing agency you can depend on our prolific expertise in efficiently handling all aspects of Enterprise SEO projects. We deliver robust SEO solutions at enterprise level, keeping businesses highly functional at large scale.",
      },
      {
        title: "Monetary Benefits",
        desc: "You get monetary benefits. Last but not least, the monetary benefits. Of course, we all wish to improve our revenues, and opting for reputable SEO Resellers lets you have immense monetary benefits. Buying SEO tools is a pricey affair; with an SEO Reseller, you don't need to invest in expensive tools. A reputable SEO reseller company provides you with everything in their packages.",
      },
    ],
  },
  additionalBanner: {
    description: "We Help Businesses Reach Their Full DIGITAL Potential by Implementing Customized Yet Robust SEO Services",
    button: { text: "+91 9818888064", link: "tel:+919818888064" },
    image: "",
  },
  benefitsProgram: {
    heading: "THE BENEFITS OF OUR SEO RESELLER PROGRAM",
    subtitle: "Digicore Inc. offer \"on-demand\" SEO Reseller services. This means that you only pay for what you require when you require it. This, in turn, leads to reduced overhead expenses and increased profitability.",
    image: "",
    items: [
      { text: "Emphasis on Quality SEO Services: Quality speaks loudly for itself. So, we not only provide you with measurable results but deliver high-quality results to boost your organic search rankings." },
      { text: "No Technical Jargons: We do not bore our clients by giving them boring lectures. Rather, we let our work do the talking." },
      { text: "Fair and Clear Costing: Our services are affordable and you always get what you have paid for. We don’t believe in ‘sticker-shocking’ hidden charges." },
      { text: "Reliability and Transparency: In our opinion, you must always be in the loop to how we are propagating and establishing things for your business. Hence, we keep you updated with everything." },
      { text: "360-Degree Solutions: For us, SEO is a combination of art and science. Hence, we balance various things to provide you with the best yet long-lasting results." },
    ],
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "Check out what our clients say about our top digital marketing solutions",
    videoImage: "",
    videoUrl: "",
    items: [
      {
        image: "",
        name: "Gursimran Jassal",
        designation: "Co-Founder - Skittles Productions",
        text: "We took SEO and digital services from Digicore Inc and that really boosted our sales. I must say Ram and his team is very efficient and professional.",
      },
      {
        image: "",
        name: "Pawandeep Singh",
        designation: "CEO - Signature Visas",
        text: "Choosing Digicore Inc was my best decision. Their team shortlisted the right keywords and within a few months most keywords started ranking on Google's first page.",
      },
      {
        image: "",
        name: "Dheeraj Kumar",
        designation: "Director - CEPL",
        text: "I approached Digicore Inc to improve my company's online presence. After a few months, my website started generating quality business and leads.",
      },
    ],
  },
  brands: {
    heading: "SOME OF THE BRANDS WE WORK WITH",
    brandLogos: Array.from({ length: 18 }, () => ({ url: "" })),
  },
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1781175524873!5m2!1sen!2sus",
  },
};

export default function AdReseller() {
  const showToast = useToast();
  const [pageData, setPageData] = useState(initialData);

  const [openSection, setOpenSection] = useState("banner");
  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

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
      showToast("SEO Reseller page saved successfully");
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
      
        <PageHeader title="SEO Reseller Page - Admin" description="Edit all SEO page sections from the admin panel." status={status} />
      <form onSubmit={handleSave} className="w-full">

        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="Banner Section" open={openSection === "banner"} onToggle={() => toggle("banner")}>
          <Field label="Subtitle">
            <TextInput value={pageData.banner.subtitle} onChange={(e) => updateSection("banner", "subtitle", e.target.value)} placeholder="Banner subtitle" />
          </Field>
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

        <Section title="SEO Reseller Intro" open={openSection === "seoResellerIntro"} onToggle={() => toggle("seoResellerIntro")}>
          <Field label="Title">
            <TextInput value={pageData.seoResellerIntro.title} onChange={(e) => updateSection("seoResellerIntro", "title", e.target.value)} placeholder="Section title" />
          </Field>
          <Field label="Subtitle">
            <TextInput value={pageData.seoResellerIntro.subtitle} onChange={(e) => updateSection("seoResellerIntro", "subtitle", e.target.value)} placeholder="Section subtitle" />
          </Field>
          <LeadForm
            title="Intro Paragraphs"
            addLabel="Add Paragraph"
            items={pageData.seoResellerIntro.paragraphs.map((text) => ({ text }))}
            onChange={(next) => updateSection("seoResellerIntro", "paragraphs", next.map((item) => item.text))}
            fields={[{ name: "text", label: "Paragraph text", type: "textarea", required: true }]}
          />
        </Section>

        <Section title="Reseller Help Section" open={openSection === "resellerSection"} onToggle={() => toggle("resellerSection")}>
          <Field label="Heading">
            <TextInput value={pageData.resellerSection.heading} onChange={(e) => updateSection("resellerSection", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <LeadForm
            title="Paragraphs"
            addLabel="Add Paragraph"
            items={pageData.resellerSection.paragraphs.map((text) => ({ text }))}
            onChange={(next) => updateSection("resellerSection", "paragraphs", next.map((item) => item.text))}
            fields={[{ name: "text", label: "Paragraph text", type: "textarea", required: true }]}
          />
        </Section>

        <Section title="Benefits Section" open={openSection === "benefits"} onToggle={() => toggle("benefits")}>
          <LeadForm
            title="Benefits"
            addLabel="Add Benefit"
            items={pageData.benefits}
            onChange={(next) => updateArray("benefits", next)}
            fields={[
              { name: "icon", label: "Icon name", placeholder: "Icon key or label" },
              { name: "title", label: "Benefit title", required: true },
              { name: "active", label: "Active", placeholder: "true/false" },
            ]}
          />
        </Section>

        <Section title="Reseller Services Section" open={openSection === "servicesSection"} onToggle={() => toggle("servicesSection")}>
          <Field label="Section heading">
            <TextInput value={pageData.servicesSection.heading} onChange={(e) => updateSection("servicesSection", "heading", e.target.value)} placeholder="Heading" />
          </Field>
          <LeadForm
            title="Services"
            addLabel="Add Service"
            items={pageData.services}
            onChange={(next) => updateArray("services", next)}
            fields={[
              { name: "image", label: "Service image", type: "image" },
              { name: "title", label: "Service title", required: true },
              { name: "desc", label: "Service description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="DM Banner Section" open={openSection === "dmBanner"} onToggle={() => toggle("dmBanner")}>
          <Field label="Heading">
            <TextInput value={pageData.dmBanner.heading} onChange={(e) => updateSection("dmBanner", "heading", e.target.value)} placeholder="Heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.dmBanner.description} onChange={(e) => updateSection("dmBanner", "description", e.target.value)} rows={4} placeholder="Description" />
          </Field>
          <ImageInput label="Banner Image" value={pageData.dmBanner.image || ""} onChange={(e) => updateSection("dmBanner", "image", e.target.value)} />
          <ButtonFields label="Button" value={pageData.dmBanner.button} onChange={(next) => updateSection("dmBanner", "button", next)} />
        </Section>

        <Section title="SEO Team Section" open={openSection === "seoTeam"} onToggle={() => toggle("seoTeam")}>
          <Field label="Heading">
            <TextInput value={pageData.seoTeam.heading} onChange={(e) => updateSection("seoTeam", "heading", e.target.value)} placeholder="Heading" />
          </Field>
          <Field label="Intro text">
            <TextArea value={pageData.seoTeam.intro} onChange={(e) => updateSection("seoTeam", "intro", e.target.value)} rows={8} placeholder="Intro paragraph" />
          </Field>
          <ImageInput label="Team image" value={pageData.seoTeam.image} onChange={(e) => updateSection("seoTeam", "image", e.target.value)} />
          <LeadForm
            title="Team Paragraphs"
            addLabel="Add Paragraph"
            items={pageData.seoTeam.paragraphs.map((text) => ({ text }))}
            onChange={(next) => updateSection("seoTeam", "paragraphs", next.map((item) => item.text))}
            fields={[{ name: "text", label: "Paragraph text", type: "textarea", required: true }]}
          />
        </Section>

        <Section title="SEO Solutions Section" open={openSection === "solutionsSection"} onToggle={() => toggle("solutionsSection")}>
          <Field label="Heading">
            <TextInput value={pageData.solutionsSection.heading} onChange={(e) => updateSection("solutionsSection", "heading", e.target.value)} placeholder="Heading" />
          </Field>
          <Field label="Subtitle">
            <TextInput value={pageData.solutionsSection.subtitle} onChange={(e) => updateSection("solutionsSection", "subtitle", e.target.value)} placeholder="Subtitle" />
          </Field>
          <LeadForm
            title="Solutions"
            addLabel="Add Solution"
            items={pageData.solutions}
            onChange={(next) => updateArray("solutions", next)}
            fields={[
              { name: "icon", label: "Icon image", type: "image" },
              { name: "title", label: "Solution title", required: true },
              { name: "description", label: "Solution description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Case Studies Section" open={openSection === "seoCase"} onToggle={() => toggle("seoCase")}>
          <Field label="Heading">
            <TextInput value={pageData.seoCase.heading} onChange={(e) => updateSection("seoCase", "heading", e.target.value)} placeholder="Heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.seoCase.description} onChange={(e) => updateSection("seoCase", "description", e.target.value)} rows={6} placeholder="Description" />
          </Field>
          <AddableList
            items={pageData.seoCase.caseStudies}
            onChange={(next) => updateSection("seoCase", "caseStudies", next)}
            addLabel="Case Studies"
            fields={[
              { key: "logo", label: "Logo image", type: "image" },
              { key: "poster", label: "Poster image", type: "image" },
              {
                key: "rankings",
                label: "Rankings",
                type: "keyValueLines",
                placeholder: "Keyword | rank on each line",
                rows: 6,
              },
            ]}
          />
        </Section>

        <Section title="Outsourcing Section" open={openSection === "outsourcing"} onToggle={() => toggle("outsourcing")}>
          <Field label="Heading">
            <TextInput value={pageData.outsourcing.heading} onChange={(e) => updateSection("outsourcing", "heading", e.target.value)} placeholder="Heading" />
          </Field>
          <LeadForm
            title="Paragraphs"
            addLabel="Add Paragraph"
            items={pageData.outsourcing.paragraphs.map((text) => ({ text }))}
            onChange={(next) => updateSection("outsourcing", "paragraphs", next.map((item) => item.text))}
            fields={[{ name: "text", label: "Paragraph text", type: "textarea", required: true }]}
          />
        </Section>

        <Section title="Other Reseller Services Section" open={openSection === "otherServices"} onToggle={() => toggle("otherServices")}>
          <Field label="Section heading">
            <TextInput value={pageData.otherServices.heading} onChange={(e) => updateSection("otherServices", "heading", e.target.value)} placeholder="Heading" />
          </Field>
          <Field label="Section subtitle">
            <TextArea value={pageData.otherServices.subtitle} onChange={(e) => updateSection("otherServices", "subtitle", e.target.value)} rows={4} placeholder="Subtitle" />
          </Field>
          <ImageInput label="Side Image" value={pageData.otherServices.image || ""} onChange={(e) => updateSection("otherServices", "image", e.target.value)} />
          <LeadForm
            title="Left Items"
            addLabel="Add Item"
            items={pageData.otherServices.leftItems}
            onChange={(next) => updateSection("otherServices", "leftItems", next)}
            fields={[
              { name: "title", label: "Item title", required: true },
              { name: "desc", label: "Item description", type: "textarea" },
            ]}
          />
          <LeadForm
            title="Right Items"
            addLabel="Add Item"
            items={pageData.otherServices.rightItems}
            onChange={(next) => updateSection("otherServices", "rightItems", next)}
            fields={[
              { name: "title", label: "Item title", required: true },
              { name: "desc", label: "Item description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Additional Banner Section" open={openSection === "additionalBanner"} onToggle={() => toggle("additionalBanner")}>
          <Field label="Description">
            <TextArea value={pageData.additionalBanner.description} onChange={(e) => updateSection("additionalBanner", "description", e.target.value)} rows={4} placeholder="Description" />
          </Field>
          <ImageInput label="Banner Image" value={pageData.additionalBanner.image || ""} onChange={(e) => updateSection("additionalBanner", "image", e.target.value)} />
          <ButtonFields label="Button" value={pageData.additionalBanner.button} onChange={(next) => updateSection("additionalBanner", "button", next)} />
        </Section>

        <Section title="Benefits Program Section" open={openSection === "benefitsProgram"} onToggle={() => toggle("benefitsProgram")}>
          <Field label="Heading">
            <TextInput value={pageData.benefitsProgram.heading} onChange={(e) => updateSection("benefitsProgram", "heading", e.target.value)} placeholder="Heading" />
          </Field>
          <Field label="Subtitle">
            <TextArea value={pageData.benefitsProgram.subtitle} onChange={(e) => updateSection("benefitsProgram", "subtitle", e.target.value)} rows={4} placeholder="Subtitle" />
          </Field>
          <ImageInput label="Side Image" value={pageData.benefitsProgram.image || ""} onChange={(e) => updateSection("benefitsProgram", "image", e.target.value)} />
          <LeadForm
            title="Benefit Program Items"
            addLabel="Add Item"
            items={pageData.benefitsProgram.items}
            onChange={(next) => updateSection("benefitsProgram", "items", next)}
            fields={[{ name: "text", label: "Item text", type: "textarea", required: true }]}
          />
        </Section>

        <Section title="Testimonials Section" open={openSection === "testimonials"} onToggle={() => toggle("testimonials")}>
          <Field label="Title">
            <TextInput value={pageData.testimonials.title} onChange={(e) => updateSection("testimonials", "title", e.target.value)} placeholder="Section title" />
          </Field>
          <Field label="Subtitle">
            <TextInput value={pageData.testimonials.subtitle} onChange={(e) => updateSection("testimonials", "subtitle", e.target.value)} placeholder="Section subtitle" />
          </Field>
          <ImageInput label="Video image" value={pageData.testimonials.videoImage} onChange={(e) => updateSection("testimonials", "videoImage", e.target.value)} />
          <Field label="Video URL">
            <TextInput value={pageData.testimonials.videoUrl} onChange={(e) => updateSection("testimonials", "videoUrl", e.target.value)} placeholder="Video URL" />
          </Field>
          <LeadForm
            title="Testimonials"
            addLabel="Add Testimonial"
            items={pageData.testimonials.items}
            onChange={(next) => updateSection("testimonials", "items", next)}
            fields={[
              { name: "image", label: "Profile image", type: "image" },
              { name: "name", label: "Name", required: true },
              { name: "designation", label: "Designation" },
              { name: "text", label: "Quote text", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Brands Section" open={openSection === "brands"} onToggle={() => toggle("brands")}>
          <Field label="Heading">
            <TextInput value={pageData.brands.heading} onChange={(e) => updateSection("brands", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <LeadForm
            title="Brand Logos"
            addLabel="Add Logo"
            items={pageData.brands.brandLogos}
            onChange={(next) => updateSection("brands", "brandLogos", next)}
            fields={[{ name: "url", label: "Brand logo URL", type: "image" }]}
          />
        </Section>

        <Section title="Map Section" open={openSection === "map"} onToggle={() => toggle("map")}>
          <Field label="Google map embed URL">
            <TextArea value={pageData.map.embedUrl} onChange={(e) => updateSection("map", "embedUrl", e.target.value)} rows={4} placeholder="Google maps embed URL" />
          </Field>
        </Section>
        </div>


        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
