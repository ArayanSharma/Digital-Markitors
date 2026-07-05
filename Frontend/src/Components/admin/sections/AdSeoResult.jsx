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
    ImageInput,
    PageStatusBanner,
    SaveBar,
} from "./common/FormKit";

const PAGE_SLUG = "seo-results";

export default function AdSeoResult() {
    const showToast = useToast();
    const [openSection, setOpenSection] = useState("hero");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");

    const [hero, setHero] = useState({
        subtitle: "We make your brand UNMISSABLE",
        title: "Turning Visibility into Growth. Turning Brands into Market Leaders",
        description:
            "We are Digicore Inc – The Best SEO Company in Kanpur NCR. SEO runs in our DNA. We deliver powerful, sustainable organic traffic, relevant leads by choosing high intent commercial keywords for your business.",
        backgroundImage: "",
        image: "",
        primaryBtn: { text: "Speak to Our Experts", link: "/contact" },
        secondaryBtn: { text: "Our Services", link: "/seo-results" },
    });

    const [aboutSection, setAboutSection] = useState({
        heading: "A Results-Driven Digital Marketing Company in Kanpur for Growing Brands",
        body:
            "Digicore Inc. is a leading digital marketing services company in Kanpur, created to help ambitious brands to conquer every searchable platform in this age of AI and response marketing. We utilize the most advanced and cutting-edge digital marketing tools and techniques to elevate your social media listings and online performance across platforms. From PPC and AI SEO to social media, content, website development, social listening and influencer marketing, we blend data and technology to help brands make smarter decisions and unlock new opportunities. Incepted in the year 2016, Digicore Inc. has been shaping the digital marketing space with creative solutions. We can help you as well – to evolve, elevate and lead in this digital-first world.",
        paragraph1: "",
        paragraph2: "",
        image: "",
    });

    const [betterSection, setBetterSection] = useState({
        heading: "What Makes Us Better than Others?",
        description:
            "Digicore Inc. has been creating value for its domestic and global clients from the last many years. Our team of highly dedicated professionals trained in digital marketing caters to countless projects every month.",
    });

    const [stats, setStats] = useState([
        {
            id: uid(),
            icon: "",
            title: "Client",
            count: "100+",
            desc: "We are serving our flawless digital marketing services and impressive solutions to more than 165 clients worldwide.",
        },
        {
            id: uid(),
            icon: "",
            title: "Experience",
            count: "10+",
            desc: "Digicore Inc. is one of the leading market players with years of experience in digital marketing and related practices.",
        },
        {
            id: uid(),
            icon: "",
            title: "Delivered Project",
            count: "100+",
            desc: "Our team works from start to finish. We have successfully delivered more than 100 projects till now.",
        },
        {
            id: uid(),
            icon: "",
            title: "Offices",
            count: "3+",
            desc: "Our services are not restricted to one place only. We have branch offices in Kanpur, Noida, and Lucknow.",
        },
    ]);

    const [contactBanner, setContactBanner] = useState({
        phone: "9818888064",
        email: "support@digicore.co.in",
        logo: "",
    });

    const [industriesTitle, setIndustriesTitle] = useState("Industries We Serve");

    const [industries, setIndustries] = useState([
        {
            id: uid(),
            title: "EDUCATION",
            desc: "We provide schools, colleges, universities, edtech companies and training institutes with data-driven digital marketing strategies to build a strong institutional brand.",
            icon: "",
        },
        {
            id: uid(),
            title: "Healthcare",
            desc: "We provide specialized digital marketing solutions to hospitals, clinics and other health institutions to help them build trust and grow their brand.",
            icon: "",
        },
        {
            id: uid(),
            title: "B2B",
            desc: "Our B2B digital marketing strategies are designed to help businesses generate high-quality leads, engage prospects and achieve measurable results.",
            icon: "",
        },
        {
            id: uid(),
            title: "Hospitality",
            desc: "We offer highly specialized service-oriented digital marketing strategies to help brands stay ahead in today's highly competitive online market.",
            icon: "",
        },
        {
            id: uid(),
            title: "eCommerce",
            desc: "We help online retailers and marketplaces with robust strategies to elevate their online presence and turn casual browsers into loyal customers.",
            icon: "",
        },
        {
            id: uid(),
            title: "Travel",
            desc: "We offer a complete suite of digital marketing solutions for tour and travel companies, helping them showcase their offerings and drive bookings.",
            icon: "",
        },
        {
            id: uid(),
            title: "FINANCIAL",
            desc: "We provide banks and other financial institutions with tailored digital marketing strategies to help them connect with their audience and drive engagement.",
            icon: "",
        },
    ]);

    const [missionSection, setMissionSection] = useState({
        heading: "Our Mission",
        intro:
            "It is an obvious fact that professional digital marketing services are not always expensive and expensive services are not always good.",
        body:
            "It is an obvious fact that professional digital marketing services are not always expensive and expensive services are not always good. With a manual approach, we bring personal touch and logic behind every strategy while the other approach helps us evaluate and compare the results achieved.",
        image: "",
    });

    const [visionSection, setVisionSection] = useState({
        heading: "Our Vision",
        intro:
            "With evolving reliance on virtual platforms, every business wants to create a robust foothold in their respective market.",
        body:
            "Getting new customers and captivating their attention all the time is the key to success in the market. Hence, it becomes even more important for you to rank on the top of popular search engines. The highly professional and dedicated team of Digicore Inc. has a vision of helping their clients achieve the best search engine ranking.",
        image: "",
    });

    const toggle = (key) => setOpenSection(openSection === key ? "" : key);

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
            if (data.aboutSection) setAboutSection(data.aboutSection);
            if (data.betterSection) setBetterSection(data.betterSection);
            if (data.stats) setStats(data.stats);
            if (data.contactBanner) setContactBanner(data.contactBanner);
            if (data.industriesTitle) setIndustriesTitle(data.industriesTitle);
            if (data.industries) setIndustries(data.industries);
            if (data.missionSection) setMissionSection(data.missionSection);
            if (data.visionSection) setVisionSection(data.visionSection);
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
            aboutSection,
            betterSection,
            stats,
            contactBanner,
            industriesTitle,
            industries,
            missionSection,
            visionSection,
        };

        setStatus("saving");
        try {
            await savePageContent(PAGE_SLUG, payload);
            setStatus("saved");
            showToast("Seo Result page saved successfully");
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
                        <h1 className="text-xl font-bold text-brand-primary">Seo Result Page Content — Admin</h1>
                        <p className="text-sm text-text-muted">Edit all Seo Result Page sections from the admin panel.</p>
                    </div>
                </div>
      <form onSubmit={handleSave} className="w-full">

                <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

                
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_16px_36px_rgba(37,99,235,.10)] transition-all duration-300 p-8 space-y-8 mt-8">
          <Section title="1. Hero / Banner" open={openSection === "hero"} onToggle={() => toggle("hero")}>
                    <Field label="Subtitle">
                        <TextInput value={hero.subtitle} onChange={(e) => setHero({ ...hero, subtitle: e.target.value })} />
                    </Field>
                    <Field label="Title">
                        <TextInput value={hero.title} onChange={(e) => setHero({ ...hero, title: e.target.value })} />
                    </Field>
                    <Field label="Description">
                        <TextArea rows={5} value={hero.description} onChange={(e) => setHero({ ...hero, description: e.target.value })} />
                    </Field>
                    <ImageInput label="Hero Background Image" value={hero.backgroundImage} onChange={(e) => setHero({ ...hero, backgroundImage: e.target.value })} />
                    <ButtonFields label="Primary Button" value={hero.primaryBtn} onChange={(v) => setHero({ ...hero, primaryBtn: v })} />
                    <ButtonFields label="Secondary Button" value={hero.secondaryBtn} onChange={(v) => setHero({ ...hero, secondaryBtn: v })} />
                </Section>

                <Section title="2. About Overview" open={openSection === "aboutSection"} onToggle={() => toggle("aboutSection")}>
                    <Field label="Section Heading">
                        <TextInput value={aboutSection.heading} onChange={(e) => setAboutSection({ ...aboutSection, heading: e.target.value })} />
                    </Field>
                    <Field label="Body Text">
                        <TextArea rows={7} value={aboutSection.body} onChange={(e) => setAboutSection({ ...aboutSection, body: e.target.value })} />
                    </Field>
                    <Field label="Paragraph 1">
                        <TextArea rows={4} value={aboutSection.paragraph1} onChange={(e) => setAboutSection({ ...aboutSection, paragraph1: e.target.value })} />
                    </Field>
                    <Field label="Paragraph 2">
                        <TextArea rows={4} value={aboutSection.paragraph2} onChange={(e) => setAboutSection({ ...aboutSection, paragraph2: e.target.value })} />
                    </Field>
                    <ImageInput label="About Section Image" value={aboutSection.image} onChange={(e) => setAboutSection({ ...aboutSection, image: e.target.value })} />
                </Section>

                <Section title="3. Better Section" open={openSection === "betterSection"} onToggle={() => toggle("betterSection")}>
                    <Field label="Section Heading">
                        <TextInput value={betterSection.heading} onChange={(e) => setBetterSection({ ...betterSection, heading: e.target.value })} />
                    </Field>
                    <Field label="Section Description">
                        <TextArea rows={4} value={betterSection.description} onChange={(e) => setBetterSection({ ...betterSection, description: e.target.value })} />
                    </Field>
                    <LeadForm
                        title="Stats"
                        addLabel="Add Stat"
                        items={stats}
                        onChange={setStats}
                        fields={[
                            { name: "icon", label: "Icon", type: "image" },
                            { name: "title", label: "Title", type: "text", required: true },
                            { name: "count", label: "Count", type: "text", placeholder: "100+" },
                            { name: "desc", label: "Description", type: "textarea", rows: 3 },
                        ]}
                    />
                </Section>

                <Section title="4. Contact Banner" open={openSection === "contactBanner"} onToggle={() => toggle("contactBanner")}>
                    <Field label="Phone Number">
                        <TextInput value={contactBanner.phone} onChange={(e) => setContactBanner({ ...contactBanner, phone: e.target.value })} />
                    </Field>
                    <Field label="Email Address">
                        <TextInput value={contactBanner.email} onChange={(e) => setContactBanner({ ...contactBanner, email: e.target.value })} />
                    </Field>
                    <ImageInput label="Logo Image" value={contactBanner.logo} onChange={(e) => setContactBanner({ ...contactBanner, logo: e.target.value })} />
                </Section>

                <Section title="5. Industries Section" open={openSection === "industries"} onToggle={() => toggle("industries")}>
                    <Field label="Section Title">
                        <TextInput value={industriesTitle} onChange={(e) => setIndustriesTitle(e.target.value)} />
                    </Field>
                    <LeadForm
                        title="Industry"
                        addLabel="Add Industry"
                        items={industries}
                        onChange={setIndustries}
                        fields={[
                            { name: "icon", label: "Icon", type: "image" },
                            { name: "title", label: "Title", type: "text", required: true },
                            { name: "desc", label: "Description", type: "textarea", rows: 3 },
                        ]}
                    />
                </Section>

                <Section title="6. Mission Section" open={openSection === "missionSection"} onToggle={() => toggle("missionSection")}>
                    <Field label="Heading">
                        <TextInput value={missionSection.heading} onChange={(e) => setMissionSection({ ...missionSection, heading: e.target.value })} />
                    </Field>
                    <Field label="Intro Text">
                        <TextInput value={missionSection.intro} onChange={(e) => setMissionSection({ ...missionSection, intro: e.target.value })} />
                    </Field>
                    <Field label="Body Text">
                        <TextArea rows={5} value={missionSection.body} onChange={(e) => setMissionSection({ ...missionSection, body: e.target.value })} />
                    </Field>
                    <ImageInput label="Mission Image" value={missionSection.image} onChange={(e) => setMissionSection({ ...missionSection, image: e.target.value })} />
                </Section>

                <Section title="7. Vision Section" open={openSection === "visionSection"} onToggle={() => toggle("visionSection")}>
                    <Field label="Heading">
                        <TextInput value={visionSection.heading} onChange={(e) => setVisionSection({ ...visionSection, heading: e.target.value })} />
                    </Field>
                    <Field label="Intro Text">
                        <TextInput value={visionSection.intro} onChange={(e) => setVisionSection({ ...visionSection, intro: e.target.value })} />
                    </Field>
                    <Field label="Body Text">
                        <TextArea rows={5} value={visionSection.body} onChange={(e) => setVisionSection({ ...visionSection, body: e.target.value })} />
                    </Field>
                    <ImageInput label="Vision Image" value={visionSection.image} onChange={(e) => setVisionSection({ ...visionSection, image: e.target.value })} />
                </Section>
        </div>


                <SaveBar status={status} onSave={handleSave} />
            </form>
        </div>
    );
}