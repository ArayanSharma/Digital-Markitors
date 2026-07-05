import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Plus,
  GripVertical,
  Sparkles,
  Braces,
  Workflow,
  CheckSquare,
  FolderKanban,
  BarChart3,
  Megaphone,
  Search as SearchIcon,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import { loadPageContent, savePageContent } from "../../../utils/pageApi";
import { uid } from "../../../utils/uid";
import { useToast } from "../../../context/ToastContext";
import EmptyState from "../ui/EmptyState";
import Skeleton from "../ui/Skeleton";
import {
  PageHeader,
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

const PAGE_SLUG = "full-stack-development";

const SUPPORTED_TECH_HINT =
  "Auto-matches a logo for: MongoDB, Express.js, React, Node.js, Next.js, Python, Django, JavaScript, HTML5, CSS3, Java.";

const FEATURE_ICON_OPTIONS = [
  "Smartphone",
  "Zap",
  "Search",
  "ShieldCheck",
  "Webhook",
  "LayoutDashboard",
  "Cloud",
  "Wrench",
  "Sparkles",
];

const TABS = [
  { value: "hero", label: "Hero", icon: Sparkles },
  { value: "technologies", label: "Technologies", icon: Braces },
  { value: "process", label: "Process", icon: Workflow },
  { value: "features", label: "Features", icon: CheckSquare },
  { value: "projects", label: "Projects", icon: FolderKanban },
  { value: "statistics", label: "Statistics", icon: BarChart3 },
  { value: "faq", label: "FAQ", icon: HelpCircle },
  { value: "seo", label: "SEO", icon: SearchIcon },
];

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
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${inputCls} pl-10`}
    />
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

export default function AdFullStack() {
  const showToast = useToast();
  const [activeTab, setActiveTab] = useState("hero");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [hero, setHero] = useState({
    visible: true,
    subtitle: "",
    title: "",
    description: "",
    primaryBtn: { text: "", link: "" },
    secondaryBtn: { text: "", link: "" },
    backgroundImage: "",
  });

  const [technologies, setTechnologies] = useState([]);
  const [techSearch, setTechSearch] = useState("");
  const [dragIndex, setDragIndex] = useState(null);

  const [process, setProcess] = useState([]);
  const [features, setFeatures] = useState([]);

  const [projects, setProjects] = useState([]);
  const [projectSearch, setProjectSearch] = useState("");

  const [statistics, setStatistics] = useState({
    projects: { value: "", label: "" },
    clients: { value: "", label: "" },
    technologies: { value: "", label: "" },
    experience: { value: "", label: "" },
  });

  const [faq, setFaq] = useState([]);

  const [seo, setSeo] = useState({
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    ogImage: "",
  });

  /* ---------- Technologies ---------- */
  const addTechnology = () =>
    setTechnologies([
      ...technologies,
      { id: uid(), name: "", description: "", experience: "", logo: "", visible: true, featured: false },
    ]);
  const updateTechnology = (id, field, value) =>
    setTechnologies(technologies.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  const removeTechnology = (id, name) => {
    if (!window.confirm(`Remove "${name || "this technology"}"?`)) return;
    setTechnologies(technologies.filter((t) => t.id !== id));
    showToast("Technology removed");
  };
  const handleDrop = (targetIndex) => {
    if (dragIndex === null || dragIndex === targetIndex) return;
    const updated = [...technologies];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(targetIndex, 0, moved);
    setTechnologies(updated);
    setDragIndex(null);
  };

  const filteredTechnologies = useMemo(
    () =>
      technologies
        .map((t, i) => ({ ...t, __index: i }))
        .filter((t) => t.name?.toLowerCase().includes(techSearch.toLowerCase())),
    [technologies, techSearch]
  );
  const techPagination = usePagination(filteredTechnologies, 6);

  /* ---------- Process ---------- */
  const addProcessStep = () => setProcess([...process, { id: uid(), title: "", desc: "" }]);
  const updateProcessStep = (id, field, value) =>
    setProcess(process.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  const removeProcessStep = (id) => {
    if (!window.confirm("Remove this process step?")) return;
    setProcess(process.filter((p) => p.id !== id));
    showToast("Process step removed");
  };

  /* ---------- Features ---------- */
  const addFeature = () =>
    setFeatures([...features, { id: uid(), icon: FEATURE_ICON_OPTIONS[0], title: "", desc: "" }]);
  const updateFeature = (id, field, value) =>
    setFeatures(features.map((f) => (f.id === id ? { ...f, [field]: value } : f)));
  const removeFeature = (id) => {
    if (!window.confirm("Remove this feature?")) return;
    setFeatures(features.filter((f) => f.id !== id));
    showToast("Feature removed");
  };

  /* ---------- Projects ---------- */
  const addProject = () =>
    setProjects([
      ...projects,
      { id: uid(), name: "", description: "", coverImage: "", tags: [], github: "", live: "", featured: false },
    ]);
  const updateProject = (id, field, value) =>
    setProjects(projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  const removeProject = (id, name) => {
    if (!window.confirm(`Remove "${name || "this project"}"?`)) return;
    setProjects(projects.filter((p) => p.id !== id));
    showToast("Project removed");
  };

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.name?.toLowerCase().includes(projectSearch.toLowerCase())),
    [projects, projectSearch]
  );
  const projectPagination = usePagination(filteredProjects, 4);

  /* ---------- FAQ ---------- */
  const addFaqItem = () => setFaq([...faq, { id: uid(), question: "", answer: "", visible: true }]);
  const updateFaqItem = (id, field, value) =>
    setFaq(faq.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  const removeFaqItem = (id) => {
    if (!window.confirm("Remove this FAQ item?")) return;
    setFaq(faq.filter((item) => item.id !== id));
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
      if (data.technologies) setTechnologies(data.technologies);
      if (data.process) setProcess(data.process);
      if (data.features) setFeatures(data.features);
      if (data.projects) setProjects(data.projects);
      if (data.statistics) setStatistics((prev) => ({ ...prev, ...data.statistics }));
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
    const payload = { hero, technologies, process, features, projects, statistics, faq, seo };
    setStatus("saving");
    try {
      await savePageContent(PAGE_SLUG, payload);
      setStatus("saved");
      showToast("Full Stack page saved successfully");
      setTimeout(() => setStatus(""), 2000);
    } catch {
      setStatus("error");
      showToast("Failed to save — please retry", "error");
    }
  };

  return (
    <div className="min-h-screen bg-bg-card py-8 px-4 md:px-8 lg:px-10 flex flex-col gap-6">
      <PageHeader
        title="Full Stack Development Page — Admin"
        description="Manage every section of the Full Stack Development page from one place."
        status={status}
      />

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
                <Field label="Hero Visibility" full>
                  <Switch
                    label={hero.visible ? "Hero section is visible" : "Hero section is hidden"}
                    checked={hero.visible !== false}
                    onChange={(e) => setHero({ ...hero, visible: e.target.checked })}
                  />
                </Field>
                <Field label="Subtitle">
                  <TextInput value={hero.subtitle} onChange={(e) => setHero({ ...hero, subtitle: e.target.value })} />
                </Field>
                <Field label="Title">
                  <TextInput value={hero.title} onChange={(e) => setHero({ ...hero, title: e.target.value })} />
                </Field>
                <Field label="Description" full>
                  <TextArea rows={4} value={hero.description} onChange={(e) => setHero({ ...hero, description: e.target.value })} />
                </Field>
                <ButtonFields label="CTA Button — Start Project" value={hero.primaryBtn} onChange={(v) => setHero({ ...hero, primaryBtn: v })} />
                <ButtonFields label="CTA Button — View Portfolio" value={hero.secondaryBtn} onChange={(v) => setHero({ ...hero, secondaryBtn: v })} />
                <ImageInput label="Background Image" value={hero.backgroundImage} onChange={(e) => setHero({ ...hero, backgroundImage: e.target.value })} />
              </TabPanel>
            </TabsContent>

            {/* ================= TECHNOLOGIES ================= */}
            <TabsContent value="technologies">
              <TabPanel>
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
                        onDragStart={() => setDragIndex(tech.__index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(tech.__index)}
                        className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 cursor-grab active:cursor-grabbing"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                            <GripVertical size={14} className="text-slate-400" />
                            Order #{tech.__index + 1}
                          </span>
                          <RemoveBtn onClick={() => removeTechnology(tech.id, tech.name)} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field label="Technology Name">
                            <TextInput
                              value={tech.name}
                              onChange={(e) => updateTechnology(tech.id, "name", e.target.value)}
                              placeholder="e.g. MongoDB"
                            />
                          </Field>
                          <Field label="Years of Experience">
                            <TextInput
                              value={tech.experience}
                              onChange={(e) => updateTechnology(tech.id, "experience", e.target.value)}
                              placeholder="e.g. 5+ Yrs"
                            />
                          </Field>
                        </div>
                        <p className="text-xs text-slate-400 -mt-2">{SUPPORTED_TECH_HINT}</p>

                        <Field label="Short Description">
                          <TextArea
                            rows={2}
                            value={tech.description}
                            onChange={(e) => updateTechnology(tech.id, "description", e.target.value)}
                          />
                        </Field>

                        <ImageInput
                          label="Logo Upload (optional override)"
                          value={tech.logo}
                          onChange={(e) => updateTechnology(tech.id, "logo", e.target.value)}
                        />

                        <div className="flex items-center gap-8">
                          <Switch
                            label="Visible"
                            checked={tech.visible !== false}
                            onChange={(e) => updateTechnology(tech.id, "visible", e.target.checked)}
                          />
                          <Switch
                            label="Featured"
                            checked={!!tech.featured}
                            onChange={(e) => updateTechnology(tech.id, "featured", e.target.checked)}
                          />
                        </div>
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
                          <span className="w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                            {index + 1}
                          </span>
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

            {/* ================= FEATURES ================= */}
            <TabsContent value="features">
              <TabPanel>
                <ListHeader title="Feature Cards" count={features.length} onAdd={addFeature} addLabel="Add Feature" />
                {features.length === 0 ? (
                  <div className="md:col-span-2">
                    <EmptyState message='No features yet — click "Add Feature" to create the first one.' />
                  </div>
                ) : (
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((f) => (
                      <div key={f.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-slate-500">Feature</span>
                          <RemoveBtn onClick={() => removeFeature(f.id)} />
                        </div>
                        <Field label="Icon">
                          <SelectInput
                            options={FEATURE_ICON_OPTIONS}
                            value={f.icon}
                            onChange={(e) => updateFeature(f.id, "icon", e.target.value)}
                          />
                        </Field>
                        <Field label="Title">
                          <TextInput value={f.title} onChange={(e) => updateFeature(f.id, "title", e.target.value)} />
                        </Field>
                        <Field label="Description">
                          <TextArea rows={2} value={f.desc} onChange={(e) => updateFeature(f.id, "desc", e.target.value)} />
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
                <ListHeader title="Project Showcase" count={projects.length} onAdd={addProject} addLabel="Add Project" />
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
                        <Field label="Project Name">
                          <TextInput value={project.name} onChange={(e) => updateProject(project.id, "name", e.target.value)} />
                        </Field>
                        <Field label="Description">
                          <TextArea rows={3} value={project.description} onChange={(e) => updateProject(project.id, "description", e.target.value)} />
                        </Field>
                        <ImageInput
                          label="Cover Image"
                          value={project.coverImage}
                          onChange={(e) => updateProject(project.id, "coverImage", e.target.value)}
                        />
                        <Field label="Technology Tags (comma separated)">
                          <TextInput
                            value={(project.tags || []).join(", ")}
                            onChange={(e) =>
                              updateProject(
                                project.id,
                                "tags",
                                e.target.value.split(",").map((t) => t.trim()).filter(Boolean)
                              )
                            }
                            placeholder="React, Node.js, MongoDB"
                          />
                        </Field>
                        <Field label="Github Link">
                          <TextInput value={project.github} onChange={(e) => updateProject(project.id, "github", e.target.value)} placeholder="https://github.com/..." />
                        </Field>
                        <Field label="Live Demo Link">
                          <TextInput value={project.live} onChange={(e) => updateProject(project.id, "live", e.target.value)} placeholder="https://..." />
                        </Field>
                        <Switch
                          label="Featured Project"
                          checked={!!project.featured}
                          onChange={(e) => updateProject(project.id, "featured", e.target.checked)}
                        />
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
                {[
                  { key: "projects", title: "Projects Counter" },
                  { key: "clients", title: "Happy Clients Counter" },
                  { key: "technologies", title: "Technologies Counter" },
                  { key: "experience", title: "Years Experience Counter" },
                ].map(({ key, title }) => (
                  <div key={key} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <h4 className="text-sm font-bold text-slate-700">{title}</h4>
                    <Field label="Value">
                      <TextInput
                        type="number"
                        value={statistics[key].value}
                        onChange={(e) => setStatistics({ ...statistics, [key]: { ...statistics[key], value: e.target.value } })}
                      />
                    </Field>
                    <Field label="Label">
                      <TextInput
                        value={statistics[key].label}
                        onChange={(e) => setStatistics({ ...statistics, [key]: { ...statistics[key], label: e.target.value } })}
                      />
                    </Field>
                  </div>
                ))}
              </TabPanel>
            </TabsContent>

            {/* ================= FAQ ================= */}
            <TabsContent value="faq">
              <TabPanel>
                <div className="md:col-span-2 flex items-center gap-4 pb-5 mb-1 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                    <HelpCircle size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base tracking-tight">FAQ</h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">Manage the frequently asked questions shown on the public page.</p>
                  </div>
                </div>
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
                          <span className="text-xs font-semibold text-slate-500">FAQ Item</span>
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
