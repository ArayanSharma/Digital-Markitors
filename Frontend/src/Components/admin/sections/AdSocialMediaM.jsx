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

const PAGE_SLUG = "SocialMediaM";

const initialData = {
  banner: {
    title: "Social Media Marketing Agency in Delhi for Brands That Want Results",
    description: "Digicore Inc., the best Social Media Marketing agency in Delhi focuses on the latest trends of engaging the audience on various platforms. We improve the digital presence of your brand through our data-driven social media marketing services.",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/services" },
    backgroundImage: "",
  },
  about: {
    heading: "Best Social Media Marketing Company in Delhi",
    body: "Being the best social media marketing agency based in Delhi known for our customized strategies, we are preferred by all-sized businesses and startups. To get our client’s brand consistently succeed in the social media segment, we prioritize social listening, response management, and social media marketing. Among our chief objectives, we maximize revenue by identifying the strategies of sales conversion. Being the top social media marketing agency in Delhi, our seasoned professionals employ best practices to target the potential customers through two-way communication. At Digicore Inc., we blend expertise, updated knowledge and strategic execution to identify the type of content that works for the clients. From telling the brand story, providing business insights to creation of best content, our social media marketing services are aimed at driving quality leads.",
  },
  visibility: {
    heading: "Improve your digital presence with Delhi’s most trusted SMM agency",
    body: "It is important to work on active and positive brand image to reach targeted audience from the 3 billion social media users. The scope of getting the content viral with the help of content shared among the contacts is always high on social media platforms, we address the best strategies customized according to the nature of business. With our exclusively planned social media marketing services, we ensure the industry-wise standards, platform specific techniques and trends to attract targeted audience.",
    image: "",
  },
  counter: {
    count1: 50,
    count2: 52,
    count3: 61,
    count4: 44,
    item1: "of Indian shoppers check online before making an actual purchase.",
    item2: "of Indian shoppers now start their product searches on Instagram, YouTube, or Amazon.",
    item3: "of Indian users trust Google results for brands that shine on social media platforms.",
    item4: "of young users turn to AI-generated overviews instead of scrolling through traditional search results.",
  },
  workSection: {
    heading: "OUR SOCIAL MEDIA WORK",
    body: "We are one of the best social media marketing agencies in Delhi, assisting small businesses, medium enterprises, and big brands to flourish in the digital marketing space. We specialize in social media management, social listening and response management, Google advertisements, and a variety of other services.",
    videoUrl: "https://www.youtube.com/embed/RugY9uuIJhY?si=Fo5RhkPp1OCzm0jH",
  },
  performance: {
    label1: "TRACK",
    label2: "ANALYZE",
    label3: "SCALE",
    label4: "REPEAT",
    image: "",
  },
  seoAgency: {
    heading: "Why Do I Need an social Media Marketing Agency in Delhi?",
    intro: "Over 60% of active users of social media platforms who rely on business information prefer Instagram, Facebook, YouTube, X and WhatsApp. Apart from just posting the content on the respective platform, it is essential to create viral, engaging and trending posts. From reels, stories, and other content that help social media users in accessing the information on the subject of their choice has to be prioritized. At Digicore Inc., we use creative and business-oriented social media marketing strategy to generate leads, improve brand’s visibility and drive business growth. Our top social media marketing services are business-oriented and data-driven to attract high-quality traffic. We also focus on converting the leads through result-driven SMM practices.",
    problemTitle: "The Problem",
    problemBody: "At present, most of the businesses rely on in-house social media plans and post content without strategic implementation. This may show the business profile active on the respective social media platform, but, may not attract audience or deliver quality leads. Besides, the engagement rate is also low due to inconsistent content strategy. This is where social media marketing becomes tough due to the constant algorithm changes, increasing ad cost, industry competition, and other factors.",
    solutionTitle: "The Solution",
    solutionBody: "It is advisable to hire the top social media marketing professionals in Delhi who will apply expertise, creativity, and offer customized solution. At Digicore Inc., the top Social Media Marketing Agency in Delhi, we focus on the goal-specific, creative content, and engaging strategy according to the daily budget of the client. Besides, our A/B testing improves the visibility of brand, further attracting target audience on various social media platforms.",
    rightBody: "The prevalence of AI has impacted the user behaviour of users. It is not necessary that a social media marketing plan that was successful last year will perform the same way. However, when you count on Digicore Inc. to customize SMM plan, our social media marketing experts use AI tools and follow latest trends to optimize your campaign. Backed by data and insights, we address business growth factors to improve visibility of your brand through organic and paid social media marketing services.",
  },
  discover: {
    heading: "Our Social Media Marketing Services in Delhi",
    description: "At Digicore Inc., we offer comprehensive SMM services keeping in mind the trends, changing dynamics of social media and business goals of clients. We harness the power of AI and also focus on the modern approach to promote business through interactive and relevant content posted strategically.",
  },
  services: [
    {
      icon: "",
      title: "Social Media Advertising",
      description: "Digicore Inc. empowers robust data-driven social media marketing services aimed at improving brand’s visibility in national search results. Our best SMM practices attract high-quality traffic and address conversion goals.",
    },
    {
      icon: "",
      title: "Instagram Marketing Services",
      description: "With AI-powered keyword research, insights and other technical social media marketing strategies, we drive real-time engagement for Instagram.",
    },
    {
      icon: "",
      title: "Meta Marketing Services",
      description: "Keeping in mind, the metrics of Facebook, trends, analytics, and the latest social media marketing strategies, we recommend the result-driven solution to clients.",
    },
    {
      icon: "",
      title: "LinkedIn Marketing Services",
      description: "From creating LinkedIn ad campaigns, executing the ads, audience targeting and segmentation to achieving measurable goals, our best social media marketing services in Delhi make brand’s growth simplified.",
    },
    {
      icon: "",
      title: "Video Marketing",
      description: "Delivering high-quality social media video content and campaigns to help brands stand out with strong visual storytelling.",
    },
    {
      icon: "",
      title: "Influencer Marketing",
      description: "Helping brands tell their story in a unique way and forge deeper connections with audiences through our high-quality content marketing services.",
    },
    {
      icon: "",
      title: "E-commerce Meta Ads",
      description: "Whether you want to promote your e-commerce business, boost sales or uncover the top strategies to attract target audience to your online store, our e-commerce social media marketing services will deliver a customized solution.",
    },
    {
      icon: "",
      title: "Social Listening Services",
      description: "Manage your brand’s reputation, evaluate the reviews of users regarding your business, and know how to implement the reputation management plan with our SMM experts. Based on the assessment, we offer you the customized solution.",
    },
    {
      icon: "",
      title: "Performance Tracking & Analytics",
      description: "Our best social media marketing services are focused on telling brand’s story and connecting the brand with the wider audience through performance tracking & analytics.",
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
    description: "We have used the best SEO practices to help our clients succeed in organic search marketing. Our dedicated support all round the year, aligned with robust SEO efforts has made it easier for their target customers to find them online.",
    items: [
      {
        title: "The Moto Men Car Detailing Meta Ads Case Study: From 40% to 100% Location-Relevant Leads",
        image: "",
        descriptions: [
          "When The Moto Men approached us for Meta Ads, the challenge wasn’t lead volume – it was lead relevance. Many enquiries were coming from outside serviceable locations, impacting conversions and efficiency. The objective was to improve lead quality without increasing budgets or volumes. By implementing a location-first Meta Ads strategy and refining targeting and creatives, the campaigns began delivering only location-relevant, high-intent enquiries. As a result, lead quality improved significantly, conversions increased, and advertising spend became far more efficient with reduced wastage.",
        ],
        primaryBtn: { text: "View Case Study", link: "/case-study/moto-men" },
        secondaryBtn: { text: "View Our Latest Work", link: "/work" },
      },
    ],
  },
  dominate: {
    heading: "How Can We Help You Grow",
    description: "Digicore Inc. is the top social media marketing agency in Delhi that helps all-sized business in improving their brand awareness, driving website traffic & generating leads and sales. Besides, a loyal community of users can be engaged by sharing the strategically planned content on social media platforms. Our seasoned social media marketing professionals ensure cost-effective strategies to attract potential customers through viral content. Our customized social media marketing services ensure improved brand visibility, improve customer engagement and generate measurable ROI.",
    cards: [
      { icon: "", title: "Improve Brand Awareness", desc: "We ensure your business get more and more leads through our expertly managed digital marketing services." },
      { icon: "", title: "Drive Website Traffic", desc: "We help you convert maximum possible leads into sales and grow your business faster." },
      { icon: "", title: "Generate Leads", desc: "We help your brand gain strong recognition across digital platforms globally." },
      { icon: "", title: "Increase Measurable ROI", desc: "Improve your team capabilities with advanced marketing strategies and guidance." },
    ],
  },
  whyBusiness: {
    heading: "Why Choose Digicore Inc. as YOUR SOCIAL MEDIA MARKETING AGENCY IN DELHI",
    description: "Digicore Inc. is a trusted social media marketing agency that addresses the long-term goals of all-sized businesses in Delhi NCR. We provide cost-effective and well-tailored SMM strategies based on the social media trends, updates and requirements. We address the social media marketing goals comprehensively for platforms including Instagram, LinkedIn, X, Twitter and WhatsApp through AI-powered methodology. Our proven strategies and expertise make us the reputable social media marketing agency in Delhi. The other reasons that make our brand reliable for social media maketing include:",
    image: "",
    features: [
      { text: "We have a team of experienced SMM experts to tailor social media marketing strategies and solutions." },
      { text: "With our growth-specific mindset, we target measurable results for all-sized business through customized SMM services." },
      { text: "Our transparent and clear reporting system keeps clients updated about the project success." },
      { text: "Digicore Inc. offers result-oriented and customized social media marketing services to achieve effortless business growth." },
      { text: "We achieve all our SMM targets efficiently through growth-driven and future-ready mindset." },
      { text: "We serve multiple industries and address their SMM goals with our business excellence and expertise." },
      { text: "Proven experience and expertise across multiple industries." },
      { text: "We focus on helping brands in achieving improved visibility, brand engagement, and improved ROI." },
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
      { question: "How can social media marketing add value to my business?", answer: "The increased leads & conversion rate, improved credibility, brand awareness and attracting targeted customers are some of the benefits of social medial marketing that add value to your business." },
      { question: "What are the real benefits of social media marketing?", answer: "From strategic planning, content creation, performance assessment to optimization of campaigns, the social media marketing agency offers customized services to achieve clients’ business goals." },
      { question: "How does a social media marketing agency actually work?", answer: "With our customized social media marketing services, we help businesses in reaching targeted audiences, drive website traffic, strengthen brand credibility and boost sales effectively." },
    ],
  },
};

export default function AdSocialMediaM() {
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
      showToast("Social Media Marketing page saved successfully");
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
      
        <PageHeader title="Social Media Marketing Page - Admin" description="Edit all Social page sections from the admin panel." status={status} />
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

        <Section title="Counter Section" open={openSection === "counter"} onToggle={() => toggle("counter")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Count 1 Value">
              <TextInput type="number" value={pageData.counter.count1} onChange={(e) => updateSection("counter", "count1", e.target.value)} placeholder="50" />
            </Field>
            <Field label="Count 1 Text">
              <TextInput value={pageData.counter.item1} onChange={(e) => updateSection("counter", "item1", e.target.value)} placeholder="Count description" />
            </Field>
            <Field label="Count 2 Value">
              <TextInput type="number" value={pageData.counter.count2} onChange={(e) => updateSection("counter", "count2", e.target.value)} placeholder="52" />
            </Field>
            <Field label="Count 2 Text">
              <TextInput value={pageData.counter.item2} onChange={(e) => updateSection("counter", "item2", e.target.value)} placeholder="Count description" />
            </Field>
            <Field label="Count 3 Value">
              <TextInput type="number" value={pageData.counter.count3} onChange={(e) => updateSection("counter", "count3", e.target.value)} placeholder="61" />
            </Field>
            <Field label="Count 3 Text">
              <TextInput value={pageData.counter.item3} onChange={(e) => updateSection("counter", "item3", e.target.value)} placeholder="Count description" />
            </Field>
            <Field label="Count 4 Value">
              <TextInput type="number" value={pageData.counter.count4} onChange={(e) => updateSection("counter", "count4", e.target.value)} placeholder="44" />
            </Field>
            <Field label="Count 4 Text">
              <TextInput value={pageData.counter.item4} onChange={(e) => updateSection("counter", "item4", e.target.value)} placeholder="Count description" />
            </Field>
          </div>
        </Section>

        <Section title="Work Section" open={openSection === "workSection"} onToggle={() => toggle("workSection")}>
          <Field label="Section Heading">
            <TextInput value={pageData.workSection.heading} onChange={(e) => updateSection("workSection", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Body">
            <TextArea value={pageData.workSection.body} onChange={(e) => updateSection("workSection", "body", e.target.value)} rows={6} placeholder="Section body" />
          </Field>
          <Field label="Video URL">
            <TextInput value={pageData.workSection.videoUrl} onChange={(e) => updateSection("workSection", "videoUrl", e.target.value)} placeholder="YouTube embed URL or video URL" />
          </Field>
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

        <Section title="Social Media Agency Section" open={openSection === "seoAgency"} onToggle={() => toggle("seoAgency")}>
          <Field label="Heading">
            <TextInput value={pageData.seoAgency.heading} onChange={(e) => updateSection("seoAgency", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Intro text">
            <TextArea value={pageData.seoAgency.intro} onChange={(e) => updateSection("seoAgency", "intro", e.target.value)} rows={8} placeholder="Intro paragraph" />
          </Field>
          <Field label="Problem title">
            <TextInput value={pageData.seoAgency.problemTitle} onChange={(e) => updateSection("seoAgency", "problemTitle", e.target.value)} placeholder="Problem title" />
          </Field>
          <Field label="Problem body">
            <TextArea value={pageData.seoAgency.problemBody} onChange={(e) => updateSection("seoAgency", "problemBody", e.target.value)} rows={6} placeholder="Problem paragraph" />
          </Field>
          <Field label="Solution title">
            <TextInput value={pageData.seoAgency.solutionTitle} onChange={(e) => updateSection("seoAgency", "solutionTitle", e.target.value)} placeholder="Solution title" />
          </Field>
          <Field label="Solution body">
            <TextArea value={pageData.seoAgency.solutionBody} onChange={(e) => updateSection("seoAgency", "solutionBody", e.target.value)} rows={6} placeholder="Solution paragraph" />
          </Field>
          <Field label="Right side paragraph">
            <TextArea value={pageData.seoAgency.rightBody} onChange={(e) => updateSection("seoAgency", "rightBody", e.target.value)} rows={8} placeholder="Right side paragraph" />
          </Field>
        </Section>

        <Section title="Discover Services Section" open={openSection === "discover"} onToggle={() => toggle("discover")}>
          <Field label="Heading">
            <TextInput value={pageData.discover.heading} onChange={(e) => updateSection("discover", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.discover.description} onChange={(e) => updateSection("discover", "description", e.target.value)} rows={6} placeholder="Section description" />
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



        <Section title="Dominate Section" open={openSection === "dominate"} onToggle={() => toggle("dominate")}>
          <Field label="Heading">
            <TextInput value={pageData.dominate.heading} onChange={(e) => updateSection("dominate", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.dominate.description} onChange={(e) => updateSection("dominate", "description", e.target.value)} rows={8} placeholder="Section description" />
          </Field>
          <LeadForm
            title="Dominate Cards"
            addLabel="Add Card"
            items={pageData.dominate.cards}
            onChange={(next) => updateSection("dominate", "cards", next)}
            fields={[
              { name: "icon", label: "Card icon image", type: "image" },
              { name: "title", label: "Card title", required: true },
              { name: "desc", label: "Card description", type: "textarea" },
            ]}
          />
        </Section>

        <Section title="Why Business Section" open={openSection === "whyBusiness"} onToggle={() => toggle("whyBusiness")}>
          <Field label="Heading">
            <TextInput value={pageData.whyBusiness.heading} onChange={(e) => updateSection("whyBusiness", "heading", e.target.value)} placeholder="Section heading" />
          </Field>
          <Field label="Description">
            <TextArea value={pageData.whyBusiness.description} onChange={(e) => updateSection("whyBusiness", "description", e.target.value)} rows={8} placeholder="Section description" />
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
