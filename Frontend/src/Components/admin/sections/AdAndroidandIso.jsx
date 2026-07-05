import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Plus,
  GripVertical,
  Sparkles,
  Boxes,
  Braces,
  Workflow,
  FolderKanban,
  BarChart3,
  MessageSquareText,
  HelpCircle,
  Search as SearchIcon,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import { loadPageContent, savePageContent } from "../../../utils/pageApi";
import { uid } from "../../../utils/uid";
import { useToast } from "../../../context/ToastContext";
import EmptyState from "../ui/EmptyState";
import Skeleton from "../ui/Skeleton";
import {
  Field,
  TextInput,
  TextArea,
  SelectInput,
  Switch,
  ButtonFields,
  RemoveBtn,
  ImageInput,
  PageStatusBanner,
  SaveBar,
  inputCls,
} from "./common/FormKit";

const PAGE_SLUG = "android-ios-development";

const SERVICE_ICON_OPTIONS = [
  "NativeAndroid",
  "NativeIOS",
  "CrossPlatform",
  "Flutter",
  "ReactNative",
  "UIUX",
  "Maintenance",
  "APIIntegration",
  "Firebase",
  "AppStoreDeployment",
  "GooglePlayPublishing",
  "EnterpriseApps",
  "EcommerceApps",
  "FoodDeliveryApps",
  "HealthcareApps",
  "FinTechApps",
  "BookingApps",
  "SocialMediaApps",
  "EducationApps",
  "CustomBusinessApps",
];

const SUPPORTED_TECH_HINT =
  "Auto-matches a logo for: Kotlin, Java, Swift, SwiftUI, Flutter, React Native, Node.js, Express, Django, MongoDB, MySQL, PostgreSQL, SQLite, AWS, Google Cloud, Firebase, Appwrite, Android Studio, Xcode, GitHub, Docker, Figma, Postman.";

const TABS = [
  { value: "hero", label: "Hero", icon: Sparkles },
  { value: "services", label: "Services", icon: Boxes },
  { value: "technologies", label: "Technologies", icon: Braces },
  { value: "process", label: "Process", icon: Workflow },
  { value: "projects", label: "Projects", icon: FolderKanban },
  { value: "statistics", label: "Statistics", icon: BarChart3 },
  { value: "testimonials", label: "Testimonials", icon: MessageSquareText },
  { value: "faq", label: "FAQ", icon: HelpCircle },
  { value: "seo", label: "SEO", icon: SearchIcon },
];

/* Premium card header — same visual language as the footer admin's section
   headers (icon badge + title + subtitle), reused here inside each tab. */
const TabSectionHeader = ({ icon: Icon, title, description }) => (
  <div className="md:col-span-2 flex items-center gap-4 pb-5 mb-1 border-b border-slate-100">
    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
      <Icon size={22} />
    </div>
    <div>
      <h3 className="font-bold text-slate-900 text-base tracking-tight">{title}</h3>
      <p className="text-xs font-semibold text-slate-500 mt-1">{description}</p>
    </div>
  </div>
);

const TabPanel = ({ children }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,.06)] p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 items-start">
    {children}
  </div>
);

const ListHeader = ({ title, count, onAdd, addLabel = "Add" }) => (
  <div className="md:col-span-2 flex items-center justify-between border-b border-slate-100 pb-3">
    <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
      {title} <span className="text-slate-400 font-medium normal-case">({count})</span>
    </h4>
    <button
      type="button"
      onClick={onAdd}
      className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 px-4 py-2 rounded-full transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
    >
      <Plus size={14} /> {addLabel}
    </button>
  </div>
);

const SearchBox = ({ value, onChange, placeholder }) => (
  <div className="md:col-span-2 relative">
    <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={`${inputCls} pl-10`} />
  </div>
);

function usePagination(items, pageSize) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pageItems = items.slice((safePage - 1) * pageSize, safePage * pageSize);
  return { page: safePage, setPage, totalPages, pageItems };
}

const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="md:col-span-2 flex items-center justify-center gap-3 pt-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 disabled:opacity-40 hover:bg-slate-50 cursor-pointer"
      >
        <ChevronLeft size={16} />
      </button>
      <span className="text-xs font-semibold text-slate-500">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 disabled:opacity-40 hover:bg-slate-50 cursor-pointer"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

const RatingInput = ({ value, onChange }) => (
  <div className="flex items-center gap-1.5">
    {[1, 2, 3, 4, 5].map((n) => (
      <button key={n} type="button" onClick={() => onChange(n)} className="cursor-pointer">
        <Star size={20} className={n <= (value || 5) ? "fill-amber-400 text-amber-400" : "text-slate-300"} />
      </button>
    ))}
  </div>
);

export default function AdAndroidandIso() {
  const showToast = useToast();
  const [activeTab, setActiveTab] = useState("hero");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [hero, setHero] = useState({
    visible: true,
    badge: "",
    title: "",
    description: "",
    heroImage: "",
    heroImage2: "",
    backgroundImage: "",
    primaryBtn: { text: "", link: "" },
    secondaryBtn: { text: "", link: "" },
  });

  const [servicesHeader, setServicesHeader] = useState({ heading: "", subheading: "" });
  const [services, setServices] = useState([]);
  const [serviceSearch, setServiceSearch] = useState("");
  const [serviceDragIndex, setServiceDragIndex] = useState(null);

  const [technologies, setTechnologies] = useState([]);
  const [techSearch, setTechSearch] = useState("");
  const [techDragIndex, setTechDragIndex] = useState(null);

  const [process, setProcess] = useState([]);

  const [projects, setProjects] = useState([]);
  const [projectSearch, setProjectSearch] = useState("");

  const [statistics, setStatistics] = useState({
    apps: { value: "", label: "" },
    clients: { value: "", label: "" },
    countries: { value: "", label: "" },
    satisfaction: { value: "", label: "" },
  });

  const [testimonials, setTestimonials] = useState([]);
  const [faq, setFaq] = useState([]);

  const [seo, setSeo] = useState({ metaTitle: "", metaDescription: "", keywords: "", ogImage: "" });

  /* ---------- Services ---------- */
  const addService = () =>
    setServices([...services, { id: uid(), icon: SERVICE_ICON_OPTIONS[0], iconImage: "", title: "", description: "", featured: false, visible: true }]);
  const updateService = (id, field, value) => setServices(services.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  const removeService = (id, title) => {
    if (!window.confirm(`Remove "${title || "this service"}"?`)) return;
    setServices(services.filter((s) => s.id !== id));
    showToast("Service removed");
  };
  const handleServiceDrop = (targetIndex) => {
    if (serviceDragIndex === null || serviceDragIndex === targetIndex) return;
    const updated = [...services];
    const [moved] = updated.splice(serviceDragIndex, 1);
    updated.splice(targetIndex, 0, moved);
    setServices(updated);
    setServiceDragIndex(null);
  };
  const filteredServices = useMemo(
    () => services.map((s, i) => ({ ...s, __index: i })).filter((s) => s.title?.toLowerCase().includes(serviceSearch.toLowerCase())),
    [services, serviceSearch]
  );
  const servicePagination = usePagination(filteredServices, 6);

  /* ---------- Technologies ---------- */
  const addTechnology = () => setTechnologies([...technologies, { id: uid(), name: "", description: "", logo: "", visible: true }]);
  const updateTechnology = (id, field, value) => setTechnologies(technologies.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  const removeTechnology = (id, name) => {
    if (!window.confirm(`Remove "${name || "this technology"}"?`)) return;
    setTechnologies(technologies.filter((t) => t.id !== id));
    showToast("Technology removed");
  };
  const handleTechDrop = (targetIndex) => {
    if (techDragIndex === null || techDragIndex === targetIndex) return;
    const updated = [...technologies];
    const [moved] = updated.splice(techDragIndex, 1);
    updated.splice(targetIndex, 0, moved);
    setTechnologies(updated);
    setTechDragIndex(null);
  };
  const filteredTechnologies = useMemo(
    () => technologies.map((t, i) => ({ ...t, __index: i })).filter((t) => t.name?.toLowerCase().includes(techSearch.toLowerCase())),
    [technologies, techSearch]
  );
  const techPagination = usePagination(filteredTechnologies, 6);

  /* ---------- Process ---------- */
  const addProcessStep = () => setProcess([...process, { id: uid(), title: "", desc: "" }]);
  const updateProcessStep = (id, field, value) => setProcess(process.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  const removeProcessStep = (id) => {
    if (!window.confirm("Remove this process step?")) return;
    setProcess(process.filter((p) => p.id !== id));
    showToast("Process step removed");
  };

  /* ---------- Projects ---------- */
  const addProject = () =>
    setProjects([
      ...projects,
      { id: uid(), name: "", category: "", description: "", coverImage: "", playStore: "", appStore: "", github: "", featured: false, visible: true },
    ]);
  const updateProject = (id, field, value) => setProjects(projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  const removeProject = (id, name) => {
    if (!window.confirm(`Remove "${name || "this project"}"?`)) return;
    setProjects(projects.filter((p) => p.id !== id));
    showToast("Project removed");
  };
  const filteredProjects = useMemo(() => projects.filter((p) => p.name?.toLowerCase().includes(projectSearch.toLowerCase())), [projects, projectSearch]);
  const projectPagination = usePagination(filteredProjects, 4);

  /* ---------- Testimonials ---------- */
  const addTestimonial = () =>
    setTestimonials([...testimonials, { id: uid(), name: "", company: "", avatar: "", review: "", rating: 5, visible: true }]);
  const updateTestimonial = (id, field, value) => setTestimonials(testimonials.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  const removeTestimonial = (id, name) => {
    if (!window.confirm(`Remove testimonial from "${name || "this client"}"?`)) return;
    setTestimonials(testimonials.filter((t) => t.id !== id));
    showToast("Testimonial removed");
  };

  /* ---------- FAQ ---------- */
  const addFaqItem = () => setFaq([...faq, { id: uid(), question: "", answer: "", visible: true }]);
  const updateFaqItem = (id, field, value) => setFaq(faq.map((f) => (f.id === id ? { ...f, [field]: value } : f)));
  const removeFaqItem = (id) => {
    if (!window.confirm("Remove this FAQ item?")) return;
    setFaq(faq.filter((f) => f.id !== id));
    showToast("FAQ item removed");
  };

  /* ---------- Load / Save ---------- */
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
      if (data.hero) setHero((prev) => ({ ...prev, ...data.hero }));
      if (data.servicesHeader) setServicesHeader((prev) => ({ ...prev, ...data.servicesHeader }));
      if (data.services) setServices(data.services);
      if (data.technologies) setTechnologies(data.technologies);
      if (data.process) setProcess(data.process);
      if (data.projects) setProjects(data.projects);
      if (data.statistics) setStatistics((prev) => ({ ...prev, ...data.statistics }));
      if (data.testimonials) setTestimonials(data.testimonials);
      if (data.faq) setFaq(data.faq);
      if (data.seo) setSeo((prev) => ({ ...prev, ...data.seo }));
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
    const payload = { hero, servicesHeader, services, technologies, process, projects, statistics, testimonials, faq, seo };
    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("Android & iOS Development page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch {
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      <div className="mb-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Android & iOS Development Page — Admin</h2>
        <p className="text-sm text-slate-500 mt-1">Manage every section of the Android &amp; iOS Development page from one place.</p>
      </div>

      <form onSubmit={handleSave} className="w-full">
        <PageStatusBanner loading={loading} error={loadError} onRetry={load} />

        <div className="sticky top-0 z-20 -mx-4 md:-mx-8 lg:-mx-10 px-4 md:px-8 lg:px-10 py-3 mb-6 bg-white/70 backdrop-blur-md border-b border-slate-200">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex-wrap h-auto gap-1 bg-slate-100/80">
              {TABS.map((t) => (
                <TabsTrigger key={t.value} value={t.value} className="gap-1.5">
                  <t.icon size={14} /> {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {loading ? (
          <Skeleton variant="card" count={3} />
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* ================= HERO ================= */}
            <TabsContent value="hero">
              <TabPanel>
                <TabSectionHeader icon={Sparkles} title="Hero Section" description="The first thing visitors see — badge, headline, and call-to-action." />
                <Field label="Hero Visibility" full>
                  <Switch label={hero.visible ? "Hero section is visible" : "Hero section is hidden"} checked={hero.visible !== false} onChange={(e) => setHero({ ...hero, visible: e.target.checked })} />
                </Field>
                <Field label="Badge">
                  <TextInput value={hero.badge} onChange={(e) => setHero({ ...hero, badge: e.target.value })} placeholder="📱 Android & iOS Development" />
                </Field>
                <Field label="Title">
                  <TextInput value={hero.title} onChange={(e) => setHero({ ...hero, title: e.target.value })} />
                </Field>
                <Field label="Subtitle / Description" full>
                  <TextArea rows={4} value={hero.description} onChange={(e) => setHero({ ...hero, description: e.target.value })} />
                </Field>
                <ButtonFields label="Primary Button" value={hero.primaryBtn} onChange={(v) => setHero({ ...hero, primaryBtn: v })} />
                <ButtonFields label="Secondary Button" value={hero.secondaryBtn} onChange={(v) => setHero({ ...hero, secondaryBtn: v })} />
                <ImageInput label="Hero Image (shown inside phone mockup)" value={hero.heroImage} onChange={(e) => setHero({ ...hero, heroImage: e.target.value })} />
                <ImageInput label="Hero Image 2 (shown inside phone mockup)" value={hero.heroImage2} onChange={(e) => setHero({ ...hero, heroImage2: e.target.value })} />
                <ImageInput label="Background Image (optional overlay)" value={hero.backgroundImage} onChange={(e) => setHero({ ...hero, backgroundImage: e.target.value })} />
              </TabPanel>
            </TabsContent>

            {/* ================= SERVICES ================= */}
            <TabsContent value="services">
              <TabPanel>
                <TabSectionHeader icon={Boxes} title="Services" description="The mobile app services grid shown on the public page." />
                <Field label="Section Heading">
                  <TextInput
                    value={servicesHeader.heading}
                    onChange={(e) => setServicesHeader({ ...servicesHeader, heading: e.target.value })}
                    placeholder="Everything Your Mobile Product Needs"
                  />
                </Field>
                <Field label="Section Subheading">
                  <TextInput
                    value={servicesHeader.subheading}
                    onChange={(e) => setServicesHeader({ ...servicesHeader, subheading: e.target.value })}
                    placeholder="From first sketch to store listing — a full-cycle mobile engineering team under one roof."
                  />
                </Field>
                <ListHeader title="Service Cards" count={services.length} onAdd={addService} addLabel="Add Service" />
                <SearchBox value={serviceSearch} onChange={setServiceSearch} placeholder="Search services by title..." />

                {services.length === 0 ? (
                  <div className="md:col-span-2">
                    <EmptyState message='No services yet — click "Add Service" to create the first one.' />
                  </div>
                ) : (
                  <div className="md:col-span-2 space-y-3">
                    {servicePagination.pageItems.map((service) => (
                      <div
                        key={service.id}
                        draggable
                        onDragStart={() => setServiceDragIndex(service.__index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleServiceDrop(service.__index)}
                        className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 cursor-grab active:cursor-grabbing"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                            <GripVertical size={14} className="text-slate-400" /> Order #{service.__index + 1}
                          </span>
                          <RemoveBtn onClick={() => removeService(service.id, service.title)} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field label="Service Icon">
                            <SelectInput options={SERVICE_ICON_OPTIONS} value={service.icon} onChange={(e) => updateService(service.id, "icon", e.target.value)} />
                          </Field>
                          <Field label="Title">
                            <TextInput value={service.title} onChange={(e) => updateService(service.id, "title", e.target.value)} placeholder="e.g. Native Android Development" />
                          </Field>
                        </div>

                        <ImageInput
                          label="Custom Icon Image (optional, overrides preset icon)"
                          value={service.iconImage}
                          onChange={(e) => updateService(service.id, "iconImage", e.target.value)}
                        />

                        <Field label="Description">
                          <TextArea rows={2} value={service.description} onChange={(e) => updateService(service.id, "description", e.target.value)} />
                        </Field>

                        <div className="flex items-center gap-8">
                          <Switch label="Visible" checked={service.visible !== false} onChange={(e) => updateService(service.id, "visible", e.target.checked)} />
                          <Switch label="Featured" checked={!!service.featured} onChange={(e) => updateService(service.id, "featured", e.target.checked)} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <Pagination page={servicePagination.page} totalPages={servicePagination.totalPages} onChange={servicePagination.setPage} />
              </TabPanel>
            </TabsContent>

            {/* ================= TECHNOLOGIES ================= */}
            <TabsContent value="technologies">
              <TabPanel>
                <TabSectionHeader icon={Braces} title="Technologies" description="The floating technology stack strip shown on the public page." />
                <ListHeader title="Technology Cards" count={technologies.length} onAdd={addTechnology} addLabel="Add Technology" />
                <SearchBox value={techSearch} onChange={setTechSearch} placeholder="Search technologies by name..." />

                {technologies.length === 0 ? (
                  <div className="md:col-span-2">
                    <EmptyState message='No technologies yet — click "Add Technology" to create the first one.' />
                  </div>
                ) : (
                  <div className="md:col-span-2 space-y-3">
                    {techPagination.pageItems.map((tech) => (
                      <div
                        key={tech.id}
                        draggable
                        onDragStart={() => setTechDragIndex(tech.__index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleTechDrop(tech.__index)}
                        className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 cursor-grab active:cursor-grabbing"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                            <GripVertical size={14} className="text-slate-400" /> Display Order #{tech.__index + 1}
                          </span>
                          <RemoveBtn onClick={() => removeTechnology(tech.id, tech.name)} />
                        </div>

                        <Field label="Technology Name">
                          <TextInput value={tech.name} onChange={(e) => updateTechnology(tech.id, "name", e.target.value)} placeholder="e.g. Flutter" />
                        </Field>
                        <p className="text-xs text-slate-400 -mt-2">{SUPPORTED_TECH_HINT}</p>

                        <Field label="Short Description">
                          <TextArea rows={2} value={tech.description} onChange={(e) => updateTechnology(tech.id, "description", e.target.value)} />
                        </Field>

                        <ImageInput label="Technology Logo (optional override)" value={tech.logo} onChange={(e) => updateTechnology(tech.id, "logo", e.target.value)} />

                        <Switch label="Visible" checked={tech.visible !== false} onChange={(e) => updateTechnology(tech.id, "visible", e.target.checked)} />
                      </div>
                    ))}
                  </div>
                )}
                <Pagination page={techPagination.page} totalPages={techPagination.totalPages} onChange={techPagination.setPage} />
              </TabPanel>
            </TabsContent>

            {/* ================= PROCESS ================= */}
            <TabsContent value="process">
              <TabPanel>
                <TabSectionHeader icon={Workflow} title="Development Process" description="The vertical step-by-step timeline shown on the public page." />
                <ListHeader title="Process Timeline" count={process.length} onAdd={addProcessStep} addLabel="Add Step" />
                {process.length === 0 ? (
                  <div className="md:col-span-2">
                    <EmptyState message='No process steps yet — click "Add Step" to create the first one.' />
                  </div>
                ) : (
                  <div className="md:col-span-2 space-y-3">
                    {process.map((step, index) => (
                      <div key={step.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">Step {index + 1}</span>
                          <RemoveBtn onClick={() => removeProcessStep(step.id)} />
                        </div>
                        <Field label="Step Title">
                          <TextInput value={step.title} onChange={(e) => updateProcessStep(step.id, "title", e.target.value)} />
                        </Field>
                        <Field label="Step Description">
                          <TextArea rows={2} value={step.desc} onChange={(e) => updateProcessStep(step.id, "desc", e.target.value)} />
                        </Field>
                      </div>
                    ))}
                  </div>
                )}
              </TabPanel>
            </TabsContent>

            {/* ================= PROJECTS ================= */}
            <TabsContent value="projects">
              <TabPanel>
                <TabSectionHeader icon={FolderKanban} title="App Showcase Projects" description="The phone-mockup portfolio shown on the public page." />
                <ListHeader title="Projects" count={projects.length} onAdd={addProject} addLabel="Add Project" />
                <SearchBox value={projectSearch} onChange={setProjectSearch} placeholder="Search projects by name..." />

                {projects.length === 0 ? (
                  <div className="md:col-span-2">
                    <EmptyState message='No projects yet — click "Add Project" to create the first one.' />
                  </div>
                ) : (
                  <div className="md:col-span-2 space-y-3">
                    {projectPagination.pageItems.map((project) => (
                      <div key={project.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-slate-500">{project.name || "Untitled Project"}</span>
                          <RemoveBtn onClick={() => removeProject(project.id, project.name)} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field label="Project Name">
                            <TextInput value={project.name} onChange={(e) => updateProject(project.id, "name", e.target.value)} />
                          </Field>
                          <Field label="Category">
                            <TextInput value={project.category} onChange={(e) => updateProject(project.id, "category", e.target.value)} placeholder="e.g. Health & Fitness" />
                          </Field>
                        </div>
                        <Field label="Description">
                          <TextArea rows={3} value={project.description} onChange={(e) => updateProject(project.id, "description", e.target.value)} />
                        </Field>
                        <ImageInput label="App Screenshot / Cover Image" value={project.coverImage} onChange={(e) => updateProject(project.id, "coverImage", e.target.value)} />
                        <Field label="Play Store Link">
                          <TextInput value={project.playStore} onChange={(e) => updateProject(project.id, "playStore", e.target.value)} placeholder="https://play.google.com/..." />
                        </Field>
                        <Field label="App Store Link">
                          <TextInput value={project.appStore} onChange={(e) => updateProject(project.id, "appStore", e.target.value)} placeholder="https://apps.apple.com/..." />
                        </Field>
                        <Field label="Github Link">
                          <TextInput value={project.github} onChange={(e) => updateProject(project.id, "github", e.target.value)} placeholder="https://github.com/..." />
                        </Field>
                        <div className="flex items-center gap-8">
                          <Switch label="Visible" checked={project.visible !== false} onChange={(e) => updateProject(project.id, "visible", e.target.checked)} />
                          <Switch label="Featured Project" checked={!!project.featured} onChange={(e) => updateProject(project.id, "featured", e.target.checked)} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <Pagination page={projectPagination.page} totalPages={projectPagination.totalPages} onChange={projectPagination.setPage} />
              </TabPanel>
            </TabsContent>

            {/* ================= STATISTICS ================= */}
            <TabsContent value="statistics">
              <TabPanel>
                <TabSectionHeader icon={BarChart3} title="Statistics" description="The animated counters shown on the public page." />
                {[
                  { key: "apps", title: "Apps Delivered Counter" },
                  { key: "clients", title: "Client Retention Counter" },
                  { key: "countries", title: "Countries Served Counter" },
                  { key: "satisfaction", title: "Years Experience Counter" },
                ].map(({ key, title }) => (
                  <div key={key} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <h4 className="text-sm font-bold text-slate-700">{title}</h4>
                    <Field label="Value">
                      <TextInput type="number" value={statistics[key].value} onChange={(e) => setStatistics({ ...statistics, [key]: { ...statistics[key], value: e.target.value } })} />
                    </Field>
                    <Field label="Label">
                      <TextInput value={statistics[key].label} onChange={(e) => setStatistics({ ...statistics, [key]: { ...statistics[key], label: e.target.value } })} />
                    </Field>
                  </div>
                ))}
              </TabPanel>
            </TabsContent>

            {/* ================= TESTIMONIALS ================= */}
            <TabsContent value="testimonials">
              <TabPanel>
                <TabSectionHeader icon={MessageSquareText} title="Testimonials" description="The auto-sliding client review carousel shown on the public page." />
                <ListHeader title="Client Testimonials" count={testimonials.length} onAdd={addTestimonial} addLabel="Add Testimonial" />
                {testimonials.length === 0 ? (
                  <div className="md:col-span-2">
                    <EmptyState message='No testimonials yet — click "Add Testimonial" to create the first one.' />
                  </div>
                ) : (
                  <div className="md:col-span-2 space-y-3">
                    {testimonials.map((t) => (
                      <div key={t.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-slate-500">{t.name || "Untitled Client"}</span>
                          <RemoveBtn onClick={() => removeTestimonial(t.id, t.name)} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field label="Client Name">
                            <TextInput value={t.name} onChange={(e) => updateTestimonial(t.id, "name", e.target.value)} />
                          </Field>
                          <Field label="Company">
                            <TextInput value={t.company} onChange={(e) => updateTestimonial(t.id, "company", e.target.value)} placeholder="e.g. Founder, FitTrack Pro" />
                          </Field>
                        </div>
                        <Field label="Review">
                          <TextArea rows={3} value={t.review} onChange={(e) => updateTestimonial(t.id, "review", e.target.value)} />
                        </Field>
                        <ImageInput label="Client Image" value={t.avatar} onChange={(e) => updateTestimonial(t.id, "avatar", e.target.value)} />
                        <Field label="Rating">
                          <RatingInput value={t.rating} onChange={(v) => updateTestimonial(t.id, "rating", v)} />
                        </Field>
                        <Switch label="Visible" checked={t.visible !== false} onChange={(e) => updateTestimonial(t.id, "visible", e.target.checked)} />
                      </div>
                    ))}
                  </div>
                )}
              </TabPanel>
            </TabsContent>

            {/* ================= FAQ ================= */}
            <TabsContent value="faq">
              <TabPanel>
                <TabSectionHeader icon={HelpCircle} title="FAQ" description="The accordion of frequently asked questions shown on the public page." />
                <ListHeader title="Questions" count={faq.length} onAdd={addFaqItem} addLabel="Add Question" />
                {faq.length === 0 ? (
                  <div className="md:col-span-2">
                    <EmptyState message='No questions yet — click "Add Question" to create the first one.' />
                  </div>
                ) : (
                  <div className="md:col-span-2 space-y-3">
                    {faq.map((item) => (
                      <div key={item.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-slate-500">FAQ</span>
                          <RemoveBtn onClick={() => removeFaqItem(item.id)} />
                        </div>
                        <Field label="Question">
                          <TextInput value={item.question} onChange={(e) => updateFaqItem(item.id, "question", e.target.value)} />
                        </Field>
                        <Field label="Answer">
                          <TextArea rows={3} value={item.answer} onChange={(e) => updateFaqItem(item.id, "answer", e.target.value)} />
                        </Field>
                        <Switch label="Visible" checked={item.visible !== false} onChange={(e) => updateFaqItem(item.id, "visible", e.target.checked)} />
                      </div>
                    ))}
                  </div>
                )}
              </TabPanel>
            </TabsContent>

            {/* ================= SEO ================= */}
            <TabsContent value="seo">
              <TabPanel>
                <TabSectionHeader icon={SearchIcon} title="SEO" description="Meta tags used for search engines and social sharing." />
                <Field label="Meta Title" full>
                  <TextInput value={seo.metaTitle} onChange={(e) => setSeo({ ...seo, metaTitle: e.target.value })} />
                </Field>
                <Field label="Meta Description" full>
                  <TextArea rows={3} value={seo.metaDescription} onChange={(e) => setSeo({ ...seo, metaDescription: e.target.value })} />
                </Field>
                <Field label="Keywords (comma separated)" full>
                  <TextInput value={seo.keywords} onChange={(e) => setSeo({ ...seo, keywords: e.target.value })} />
                </Field>
                <ImageInput label="OG Image" value={seo.ogImage} onChange={(e) => setSeo({ ...seo, ogImage: e.target.value })} />
              </TabPanel>
            </TabsContent>
          </Tabs>
        )}

        <SaveBar status={status} onSave={handleSave} />
      </form>
    </div>
  );
}
