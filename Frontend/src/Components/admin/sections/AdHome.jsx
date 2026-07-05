import { useState, useEffect, useCallback } from "react";
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
  ImageInput,
  PageStatusBanner,
  SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "home";

export default function HomeAdminForm() {
  const showToast = useToast();
  const [openSection, setOpenSection] = useState("hero");
  const toggle = (key) => setOpenSection(openSection === key ? "" : key);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  /* ---------- HERO / BANNER ---------- */
  const [hero, setHero] = useState({
    heading: "",
    title: "B2B SEO Agency That Drives Traffic, Trust, and Conversions",
    description:
      "To address the challenges of B2B SEO, it is ideal to partner with the trusted digital marketing agency...",
    backgroundImage: "",
    primaryBtn: { text: "Speak to an SEO Expert", link: "/contact" },
    secondaryBtn: { text: "Our Services", link: "/services" },
  });

  /* ---------- ABOUT SECTION ---------- */
  const [about, setAbout] = useState({
    heading:
      "A Results-Driven Digital Marketing Company in Kanpur for Growing Brands",
    body: "Digicore Inc. is a leading digital marketing services company in Kanpur...",
  });

  /* ---------- VISIBILITY SECTION ---------- */
  const [visibility, setVisibility] = useState({
    heading: "But what hasn't changed is the value of Visibility",
    paragraph1:
      "The search you knew for decades has changed and nothing is same anymore...",
    paragraph2:
      "Modern shoppers, especially Gen Z research products thoroughly on social platforms...",
    image: "",
  });

  /* ---------- COUNTER SECTION ---------- */
  const [counters, setCounters] = useState([
    { id: uid(), value: 55, label: "of Indian shoppers check online before making an actual purchase." },
    { id: uid(), value: 68, label: "of Indian shoppers now start their product searches on Instagram, YouTube, or Amazon." },
    { id: uid(), value: 88, label: "of Indian users trust Google results for brands that shine on social media platforms." },
    { id: uid(), value: 76, label: "of young users turn to AI-generated overviews instead of scrolling through traditional search results." },
  ]);

  /* ---------- PERFORMANCE SECTION (TRACK/ANALYZE/SCALE/REPEAT) ---------- */
  const [performance, setPerformance] = useState({
    words: ["TRACK", "ANALYZE", "SCALE", "REPEAT"],
    image: "",
  });

  const updatePerfWord = (i, val) => {
    const words = [...performance.words];
    words[i] = val;
    setPerformance({ ...performance, words });
  };

  /* ---------- DISCOVER (loss) SECTION ---------- */
  const [discover, setDiscover] = useState({
    line1: "If your brand isn't discoverable,",
    line2: "you're already losing at search.",
    paragraph:
      "Being present on every platform is the need of an hour...",
  });

  /* ---------- SERVICES SECTION ---------- */
  const [servicesHeading, setServicesHeading] = useState({
    heading: "Discover Our Services in\nKanpur\nfor Faster Business Growth",
    paragraph:
      "We offer customized digital marketing solutions to help our clients engage their audience and build a strong brand presence across all platforms.",
  });

  const [services, setServices] = useState([
    { id: uid(), icon: "", title: "Search Engine Optimization", description: "Boost your visibility and drive targeted traffic..." },
    { id: uid(), icon: "", title: "Social Media Marketing", description: "We offer tailored social media strategies..." },
    { id: uid(), icon: "", title: "PPC & Performance Marketing", description: "Partner with us to unlock the full potential of paid advertising..." },
  ]);

  /* ---------- WHY CHOOSE US (CTA strip) ---------- */
  const [whyChoose, setWhyChoose] = useState({
    heading: "Stop Guessing. Start Growing. Book Your Strategy Call Now.",
    backgroundIcon: "",
    whatsappBtn: { text: "+91 98188 88064", link: "https://wa.me/919818888064" },
    callbackBtn: { text: "REQUEST A CALLBACK", link: "/contact" },
  });

  /* ---------- IMPACT / TIMELINE SECTION ---------- */
  const [impactImage, setImpactImage] = useState("");
  const [timeline, setTimeline] = useState([
    { id: uid(), title: "Contact Us", desc: "Get in touch with us via email, phone or website." },
    { id: uid(), title: "Share Your Goals", desc: "Tell us about your business and marketing goals." },
    { id: uid(), title: "Consultation", desc: "Our expert will discuss strategies tailored to your business." },
    { id: uid(), title: "Proposal & Plan", desc: "We provide a customized strategy and roadmap." },
    { id: uid(), title: "Partner & Grow", desc: "Drive high-impact traffic and measurable growth." },
  ]);

  /* ---------- INDUSTRY SECTION ---------- */
  const [industries, setIndustries] = useState([
    { id: uid(), image: "", title: "Healthcare", desc: "We provide specialized digital marketing solutions to hospitals, clinics...", readMoreLink: "/industries/healthcare" },
    { id: uid(), image: "", title: "E-Commerce", desc: "We help online retailers and marketplaces with robust strategies...", readMoreLink: "/industries/ecommerce" },
    { id: uid(), image: "", title: "Travel", desc: "We offer a complete suite of digital marketing solutions for travel brands...", readMoreLink: "/industries/travel" },
  ]);

  /* ---------- CASE STUDY SECTION ---------- */
  const [caseStudies, setCaseStudies] = useState([
    {
      id: uid(),
      title: "DHI International SEO Case Study: 190% Growth in Organic Traffic",
      image: "",
      description: "When DHI International partnered with us, the objective was clear...",
      viewCaseStudyBtn: { text: "View Case Study", link: "/case-studies/dhi" },
      viewLatestWorkBtn: { text: "View Our Latest Work", link: "/portfolio" },
    },
  ]);

  /* ---------- DOMINATE / HELP CARDS SECTION ---------- */
  const [dominate, setDominate] = useState({
    heading: "DOMINATE YOUR INDUSTRY WITH US",
    paragraph:
      "We are a team of highly skilled and expert digital marketers. All our solutions are crafted thoughtfully to ensure your digital presence is strong, engaging and impactful.",
  });

  const [helpCards, setHelpCards] = useState([
    { id: uid(), icon: "", title: "Get More Leads", desc: "We ensure your business get more and more leads..." },
    { id: uid(), icon: "", title: "Make More Sales", desc: "We help you convert maximum possible leads into sales..." },
    { id: uid(), icon: "", title: "Build Brand Awareness", desc: "We help your brand gain strong recognition..." },
    { id: uid(), icon: "", title: "Upskill Your Team", desc: "Improve your team capabilities with advanced marketing strategies..." },
  ]);

  /* ---------- WHY BUSINESSES CHOOSE US SECTION ---------- */
  const [whyBusiness, setWhyBusiness] = useState({
    heading: "Why Businesses Choose Digicore Inc.",
    paragraph:
      "Digicore Inc. is the most trusted and AI-first digital marketing agency in Kanpur, India...",
    image: "",
  });

  const [whyBusinessBullets, setWhyBusinessBullets] = useState([
    "Team of experienced digital marketing experts",
    "Result-oriented strategies tailored to your brand",
    "Transparent reporting system for every campaign",
    "Improve brand visibility across all platforms",
    "Strong SEO strategies for better search rankings",
    "Save time, effort and operational costs",
    "Convert opportunities into measurable growth",
    "Growth-focused strategies for startups & businesses",
  ].map((t) => ({ id: uid(), text: t })));

  /* ---------- FAQ SECTION ---------- */
  const [faqs, setFaqs] = useState([
    { id: uid(), question: "Will I have a dedicated point of contact or account manager?", answer: "Of course, you will! At Digicore Inc., we assign a dedicated account manager..." },
  ]);

  /* ---------- CONTACT SECTION ---------- */
  const [contact, setContact] = useState({
    heading: "",
    phone: "",
    email: "",
    address: "",
    submitBtn: { text: "Send Message", link: "" },
  });

  /* ---------- LOAD existing content on mount ---------- */
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
      if (d.hero) setHero(d.hero);
      if (d.about) setAbout(d.about);
      if (d.visibility) setVisibility(d.visibility);
      if (d.counters) setCounters(d.counters);
      if (d.performance) setPerformance(d.performance);
      if (d.discover) setDiscover(d.discover);
      if (d.servicesHeading) setServicesHeading(d.servicesHeading);
      if (d.services) setServices(d.services);
      if (d.whyChoose) setWhyChoose(d.whyChoose);
      if (d.impactImage !== undefined) setImpactImage(d.impactImage);
      if (d.timeline) setTimeline(d.timeline);
      if (d.industries) setIndustries(d.industries);
      if (d.caseStudies) setCaseStudies(d.caseStudies);
      if (d.dominate) setDominate(d.dominate);
      if (d.helpCards) setHelpCards(d.helpCards);
      if (d.whyBusiness) setWhyBusiness(d.whyBusiness);
      if (d.whyBusinessBullets) setWhyBusinessBullets(d.whyBusinessBullets);
      if (d.faqs) setFaqs(d.faqs);
      if (d.contact) setContact(d.contact);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, [load]);

  /* ---------- SAVE ---------- */
  const handleSave = async (e) => {
    e?.preventDefault();
    const payload = {
      hero,
      about,
      visibility,
      counters,
      performance,
      discover,
      servicesHeading,
      services,
      whyChoose,
      impactImage,
      timeline,
      industries,
      caseStudies,
      dominate,
      helpCards,
      whyBusiness,
      whyBusinessBullets,
      faqs,
      contact,
    };
    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("Home page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <PageHeader title="Home Page Content - Admin" description="Edit all Home page sections from the admin panel." status={status} />
      <form onSubmit={handleSave} className="w-full">
        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        <div className="space-y-6 mt-6">
          <Section title="1. Hero / Banner" open={openSection === "hero"} onToggle={() => toggle("hero")}>
            <Field label="Heading">
              <TextInput value={hero.heading} onChange={(e) => setHero({ ...hero, heading: e.target.value })} />
            </Field>
            <Field label="Title">
              <TextInput value={hero.title} onChange={(e) => setHero({ ...hero, title: e.target.value })} />
            </Field>
            <Field label="Description">
              <TextArea value={hero.description} onChange={(e) => setHero({ ...hero, description: e.target.value })} />
            </Field>
            <ImageInput label="Background Image" value={hero.backgroundImage} onChange={(e) => setHero({ ...hero, backgroundImage: e.target.value })} />
            <ButtonFields label="Primary Button" value={hero.primaryBtn} onChange={(v) => setHero({ ...hero, primaryBtn: v })} />
            <ButtonFields label="Secondary Button" value={hero.secondaryBtn} onChange={(v) => setHero({ ...hero, secondaryBtn: v })} />
          </Section>

          <Section title="2. About Section" open={openSection === "about"} onToggle={() => toggle("about")}>
            <Field label="Heading">
              <TextInput value={about.heading} onChange={(e) => setAbout({ ...about, heading: e.target.value })} />
            </Field>
            <Field label="Body Text">
              <TextArea rows={6} value={about.body} onChange={(e) => setAbout({ ...about, body: e.target.value })} />
            </Field>
          </Section>

          <Section title="3. Visibility Section" open={openSection === "visibility"} onToggle={() => toggle("visibility")}>
            <Field label="Heading">
              <TextInput value={visibility.heading} onChange={(e) => setVisibility({ ...visibility, heading: e.target.value })} />
            </Field>

            <Field label="Paragraph 1">
              <TextArea value={visibility.paragraph1} onChange={(e) => setVisibility({ ...visibility, paragraph1: e.target.value })} />
            </Field>

            <Field label="Paragraph 2">
              <TextArea value={visibility.paragraph2} onChange={(e) => setVisibility({ ...visibility, paragraph2: e.target.value })} />
            </Field>
            <ImageInput label="Graph Image" value={visibility.image} onChange={(e) => setVisibility({ ...visibility, image: e.target.value })} />
          </Section>

          <Section title="4. Counter Section" open={openSection === "counters"} onToggle={() => toggle("counters")}>
            <LeadForm
              title="Counters"
              addLabel="Add Counter"
              items={counters}
              onChange={setCounters}
              fields={[
                { name: "value", label: "Value (%)", type: "text", required: true },
                { name: "label", label: "Label Text", type: "textarea" },
              ]}
            />
          </Section>

          <Section title="5. Performance Section (Track/Analyze/Scale/Repeat)" open={openSection === "performance"} onToggle={() => toggle("performance")}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {performance.words.map((w, i) => (
                <Field key={i} label={`Word ${i + 1}`}>
                  <TextInput value={w} onChange={(e) => updatePerfWord(i, e.target.value)} />
                </Field>
              ))}
            </div>
            <ImageInput label="Right-side Image" value={performance.image} onChange={(e) => setPerformance({ ...performance, image: e.target.value })} />
          </Section>

          <Section title="6. Discover Section" open={openSection === "discover"} onToggle={() => toggle("discover")}>
            <Field label="Line 1 (small heading)">
              <TextInput value={discover.line1} onChange={(e) => setDiscover({ ...discover, line1: e.target.value })} />
            </Field>
            <Field label="Line 2 (accent heading)">
              <TextInput value={discover.line2} onChange={(e) => setDiscover({ ...discover, line2: e.target.value })} />
            </Field>
            <Field label="Paragraph">
              <TextArea rows={5} value={discover.paragraph} onChange={(e) => setDiscover({ ...discover, paragraph: e.target.value })} />
            </Field>
          </Section>

          <Section title="7. Services Section" open={openSection === "services"} onToggle={() => toggle("services")}>
            <Field label="Section Heading">
              <TextArea rows={3} value={servicesHeading.heading} onChange={(e) => setServicesHeading({ ...servicesHeading, heading: e.target.value })} />
            </Field>
            <Field label="Section Paragraph">
              <TextArea value={servicesHeading.paragraph} onChange={(e) => setServicesHeading({ ...servicesHeading, paragraph: e.target.value })} />
            </Field>
            <LeadForm
              title="Services"
              addLabel="Add Service"
              items={services}
              onChange={setServices}
              fields={[
                { name: "icon", label: "Icon", type: "image" },
                { name: "title", label: "Title", required: true },
                { name: "description", label: "Description", type: "textarea" },
              ]}
            />
          </Section>

          <Section title="8. Strategy Call CTA Strip" open={openSection === "whyChoose"} onToggle={() => toggle("whyChoose")}>
            <Field label="Heading">
              <TextInput value={whyChoose.heading} onChange={(e) => setWhyChoose({ ...whyChoose, heading: e.target.value })} />
            </Field>
            <ImageInput label="Background Icon/Pattern" value={whyChoose.backgroundIcon} onChange={(e) => setWhyChoose({ ...whyChoose, backgroundIcon: e.target.value })} />
            <ButtonFields label="WhatsApp Button" value={whyChoose.whatsappBtn} onChange={(v) => setWhyChoose({ ...whyChoose, whatsappBtn: v })} />
            <ButtonFields label="Callback Button" value={whyChoose.callbackBtn} onChange={(v) => setWhyChoose({ ...whyChoose, callbackBtn: v })} />
          </Section>

          <Section title="9. Impact / Process Timeline" open={openSection === "impact"} onToggle={() => toggle("impact")}>
            <ImageInput label="Impact Image" value={impactImage} onChange={(e) => setImpactImage(e.target.value)} />
            <LeadForm
              title="Timeline Steps"
              addLabel="Add Step"
              items={timeline}
              onChange={setTimeline}
              fields={[
                { name: "title", label: "Title", required: true },
                { name: "desc", label: "Description", type: "textarea" },
              ]}
            />
          </Section>

          <Section title="12. Dominate Your Industry" open={openSection === "dominate"} onToggle={() => toggle("dominate")}>
            <Field label="Heading">
              <TextInput value={dominate.heading} onChange={(e) => setDominate({ ...dominate, heading: e.target.value })} />
            </Field>
            <Field label="Paragraph">
              <TextArea value={dominate.paragraph} onChange={(e) => setDominate({ ...dominate, paragraph: e.target.value })} />
            </Field>
            <LeadForm
              title="Help Cards"
              addLabel="Add Card"
              items={helpCards}
              onChange={setHelpCards}
              fields={[
                { name: "icon", label: "Icon", type: "image" },
                { name: "title", label: "Title", required: true },
                { name: "desc", label: "Description", type: "textarea" },
              ]}
            />
          </Section>

          <Section title="13. Why Businesses Choose Us" open={openSection === "whyBusiness"} onToggle={() => toggle("whyBusiness")}>
            <Field label="Heading">
              <TextInput value={whyBusiness.heading} onChange={(e) => setWhyBusiness({ ...whyBusiness, heading: e.target.value })} />
            </Field>
            <Field label="Paragraph">
              <TextArea rows={4} value={whyBusiness.paragraph} onChange={(e) => setWhyBusiness({ ...whyBusiness, paragraph: e.target.value })} />
            </Field>
            <ImageInput label="Right-side Image" value={whyBusiness.image} onChange={(e) => setWhyBusiness({ ...whyBusiness, image: e.target.value })} />
            <LeadForm
              title="Bullet Points"
              addLabel="Add Bullet"
              items={whyBusinessBullets}
              onChange={setWhyBusinessBullets}
              fields={[{ name: "text", label: "Bullet Text", required: true }]}
            />
          </Section>

          <Section title="18. FAQ" open={openSection === "faqs"} onToggle={() => toggle("faqs")}>
            <LeadForm
              title="FAQ Items"
              addLabel="Add FAQ"
              items={faqs}
              onChange={setFaqs}
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
