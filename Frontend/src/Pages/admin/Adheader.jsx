import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  Link as LinkIcon,
  Tag,
  Image as ImageIcon,
  Upload,
  Save,
  Trash2,
  GripVertical,
  ChevronRight,
  ChevronDown,
  Settings,
  Plus,
  Menu,
  Check,
  X,
  ExternalLink,
  FolderOpen,
  Copy,
  Globe,
  FileText,
  Building2,
  Briefcase,
  PhoneCall,
  HelpCircle
} from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaGlobe
} from "react-icons/fa";
import gsap from "gsap";
import Modal from "../../Components/admin/ui/Modal";

const getSocialIcon = (platform) => {
  const p = (platform || "").toLowerCase();
  if (p.includes("facebook") || p === "fb") return <FaFacebook className="text-[#1877F2] shrink-0" size={18} />;
  if (p.includes("twitter") || p === "tw" || p === "x") return <FaTwitter className="text-[#1DA1F2] shrink-0" size={18} />;
  if (p.includes("linkedin") || p === "li") return <FaLinkedin className="text-[#0A66C2] shrink-0" size={18} />;
  if (p.includes("instagram") || p === "ig") return <FaInstagram className="text-[#E1306C] shrink-0" size={18} />;
  if (p.includes("youtube") || p === "yt") return <FaYoutube className="text-[#FF0000] shrink-0" size={18} />;
  if (p.includes("pinterest") || p === "pin") return <FaPinterest className="text-[#BD081C] shrink-0" size={18} />;
  return <FaGlobe className="text-slate-400 shrink-0" size={18} />;
};

const getSocialIconBlock = (platform) => {
  const p = (platform || "").toLowerCase();
  let bg = "bg-slate-400";
  let Icon = FaGlobe;

  if (p.includes("facebook") || p === "fb") {
    bg = "bg-[#1877F2]";
    Icon = FaFacebook;
  } else if (p.includes("twitter") || p === "tw" || p === "x") {
    bg = "bg-black";
    Icon = FaTwitter;
  } else if (p.includes("linkedin") || p === "li") {
    bg = "bg-[#0A66C2]";
    Icon = FaLinkedin;
  } else if (p.includes("instagram") || p === "ig") {
    bg = "bg-[#E1306C]";
    Icon = FaInstagram;
  } else if (p.includes("pinterest") || p === "pin") {
    bg = "bg-[#BD081C]";
    Icon = FaPinterest;
  } else if (p.includes("youtube") || p === "yt") {
    bg = "bg-[#FF0000]";
    Icon = FaYoutube;
  }

  return (
    <div className={`w-[36px] h-[36px] rounded-lg ${bg} text-white flex items-center justify-center shrink-0`}>
      <Icon size={16} />
    </div>
  );
};

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const defaultConfig = {
  logo: { url: "/assets/digicore-logo.svg", alt: "Digicore", link: "/" },
  phone: "+91 9818888064",
  email: "hello@digitalmarkitors.com",
  ctaButton: { label: "Free Consultation", link: "/free-consultation" },
  socialLinks: [
    { id: "fb", platform: "Facebook", url: "https://facebook.com/digicore" },
    { id: "tw", platform: "Twitter", url: "https://twitter.com/digicore" },
    { id: "li", platform: "LinkedIn", url: "https://linkedin.com/company/digicore" },
    { id: "ig", platform: "Instagram", url: "https://instagram.com/digicore" },
  ],
  rootTabs: [
    {
      id: "company",
      label: "Company",
      type: "simpleDropdown",
      isActive: true,
      promoImage: {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
        alt: "Looking ahead",
        link: "",
      },
      items: [
        { id: "about-us", label: "About Us", link: "/about-us", isActive: true },
        { id: "seo-results", label: "SEO Results", link: "/seo-results", isActive: true },
        { id: "packages", label: "Packages", link: "/packages", isActive: true },
        { id: "career", label: "Career", link: "/career", isActive: true },
      ],
    },
    {
      id: "our-services",
      label: "Our Services",
      type: "categorizedDropdown",
      isActive: true,
      categories: [
        {
          id: "seo",
          name: "SEO",
          isActive: true,
          promoImage: {
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
            alt: "ROI jo bole paisa vasool",
            link: "",
          },
          items: [
            { id: "seo-services", label: "SEO Services", link: "/seo-services", isActive: true },
            { id: "ai-seo-services", label: "AI SEO Services", link: "/ai-seo-services", isActive: true },
          ],
        },
      ],
    },
    {
      id: "industry",
      label: "Industry",
      type: "simpleDropdown",
      isActive: true,
      promoImage: {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
        alt: "Looking ahead",
        link: "",
      },
      items: [
        { id: "education", label: "Education", link: "/industry/education", isActive: true },
      ],
    },
    { id: "blog", label: "Blog", type: "direct", isActive: true, directLink: "/blog" },
    { id: "contact", label: "Contact", type: "direct", isActive: true, directLink: "/contact" },
  ],
};

/* ------------------------------------------------------------------ */
/*  CRM Micro Components                                              */
/* ------------------------------------------------------------------ */

function InputField({ label, icon: Icon, value, onChange, placeholder, subtitle }) {
  const containerRef = useRef(null);

  const handleFocus = () => {
    gsap.to(containerRef.current, { borderColor: "#3b82f6", boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1)", duration: 0.2 });
  };

  const handleBlur = () => {
    gsap.to(containerRef.current, { borderColor: "#e2e8f0", boxShadow: "none", duration: 0.2 });
  };

  return (
    <div className="flex flex-col w-full" style={{ gap: "0.4rem", marginBottom: "1.5rem" }}>
      {label && <span className="text-xs font-bold text-slate-700 tracking-wide" style={{ marginBottom: "0.2rem", display: "block" }}>{label}</span>}
      <div
        ref={containerRef}
        className="flex items-center h-[48px] rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300"
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        {Icon && <Icon size={16} className="text-slate-400 mr-2.5 shrink-0" />}
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder-slate-400 font-medium"
        />
      </div>
      {subtitle && <span className="text-[11px] text-slate-400 font-medium leading-none" style={{ marginTop: "0.2rem" }}>{subtitle}</span>}
    </div>
  );
}

function ToggleSwitch({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 focus:outline-none cursor-pointer ${
        checked ? "bg-blue-600" : "bg-slate-200"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function ConfirmDeleteDialog({ onConfirm, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}>{children}</div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm Delete">
        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-600 font-medium">
            Are you sure you want to delete this item? This action is irreversible.
          </p>
          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                setIsOpen(false);
              }}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all cursor-pointer"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Editable nested layout items                                       */
/* ------------------------------------------------------------------ */

function NavItemRow({ item, onChange, onDelete }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50" style={{ marginBottom: "0.75rem" }}>
      <InputField
        value={item.label}
        onChange={(v) => onChange({ ...item, label: v })}
        placeholder="Link Name"
      />
      <InputField
        value={item.link}
        onChange={(v) => onChange({ ...item, link: v })}
        placeholder="Redirection Link"
      />
      <div className="flex items-center gap-4 shrink-0">
        <ToggleSwitch checked={item.isActive} onChange={(v) => onChange({ ...item, isActive: v })} />
        <ConfirmDeleteDialog onConfirm={onDelete}>
          <button className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer">
            <Trash2 size={15} />
          </button>
        </ConfirmDeleteDialog>
      </div>
    </div>
  );
}

function CategoryEditorBlock({ category, onChange, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const updateItem = (idx, updated) =>
    onChange({ ...category, items: category.items.map((it, i) => (i === idx ? updated : it)) });
  const deleteItem = (idx) =>
    onChange({ ...category, items: category.items.filter((_, i) => i !== idx) });

  return (
    <div className="border border-slate-200 rounded-xl bg-white" style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
          >
            {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          <span className="font-bold text-xs text-slate-700">{category.name || "Unnamed Category"}</span>
        </div>
        <div className="flex items-center gap-3">
          <ToggleSwitch checked={category.isActive} onChange={(v) => onChange({ ...category, isActive: v })} />
          <ConfirmDeleteDialog onConfirm={onDelete}>
            <button className="p-1 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 cursor-pointer">
              <Trash2 size={15} />
            </button>
          </ConfirmDeleteDialog>
        </div>
      </div>

      {expanded && (
        <div className="pt-3 border-t border-slate-100" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="Category Name"
              value={category.name}
              onChange={(v) => onChange({ ...category, name: v })}
            />
            <InputField
              label="Promo Image Link URL"
              value={category.promoImage?.url}
              onChange={(v) => onChange({ ...category, promoImage: { ...category.promoImage, url: v } })}
            />
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Category Sub-items</span>
            {category.items.map((item, idx) => (
              <NavItemRow
                key={item.id}
                item={item}
                onChange={(updated) => updateItem(idx, updated)}
                onDelete={() => deleteItem(idx)}
              />
            ))}
            <button
              onClick={() => onChange({ ...category, items: [...category.items, { id: `item-${Date.now()}`, label: "New Link", link: "/", isActive: true }] })}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:border-slate-350 rounded-lg text-[11px] font-semibold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
            >
              <Plus size={12} /> Add Category Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const getTabMeta = (tabId, label) => {
  const id = (tabId || "").toLowerCase();
  const lbl = (label || "").toLowerCase();

  if (id.includes("company") || lbl.includes("company")) {
    return {
      Icon: Building2,
      bg: "bg-blue-50 text-blue-600",
      defaultDesc: "Information about our company"
    };
  }
  if (id.includes("services") || lbl.includes("services")) {
    return {
      Icon: Briefcase,
      bg: "bg-blue-50 text-blue-600",
      defaultDesc: "Explore our services"
    };
  }
  if (id.includes("industry") || lbl.includes("industry")) {
    return {
      Icon: Building2,
      bg: "bg-purple-50 text-purple-600",
      defaultDesc: "Industries we serve"
    };
  }
  if (id.includes("blog") || lbl.includes("blog")) {
    return {
      Icon: FileText,
      bg: "bg-orange-50 text-orange-600",
      defaultDesc: "Latest news and articles"
    };
  }
  if (id.includes("contact") || lbl.includes("contact")) {
    return {
      Icon: PhoneCall,
      bg: "bg-teal-50 text-teal-600",
      defaultDesc: "Get in touch with us"
    };
  }

  return {
    Icon: HelpCircle,
    bg: "bg-slate-50 text-slate-600",
    defaultDesc: "Custom navigation link"
  };
};

function NavigationCardRow({ tab, onChange, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const updateItem = (idx, updated) =>
    onChange({ ...tab, items: tab.items.map((it, i) => (i === idx ? updated : it)) });
  const deleteItem = (idx) => onChange({ ...tab, items: tab.items.filter((_, i) => i !== idx) });

  const updateCategory = (idx, updated) =>
    onChange({ ...tab, categories: tab.categories.map((c, i) => (i === idx ? updated : c)) });
  const deleteCategory = (idx) =>
    onChange({ ...tab, categories: tab.categories.filter((_, i) => i !== idx) });

  const { Icon, bg, defaultDesc } = getTabMeta(tab.id, tab.label);
  const desc = tab.description || defaultDesc;

  return (
    <div className="border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between gap-4 p-5">
        <div className="flex items-center gap-4">
          <div className="text-slate-400 cursor-grab shrink-0">
            <GripVertical size={16} />
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors shrink-0"
          >
            {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          
          <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center shrink-0`}>
            <Icon size={18} />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-slate-800 text-sm">{tab.label}</span>
            <span className="text-[11px] font-semibold text-slate-400 mt-0.5">{desc}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {tab.type === "direct" && (
            <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-purple-50 text-purple-600 border border-purple-100 flex items-center gap-1.5 shrink-0">
              Direct Link <ChevronDown size={11} />
            </span>
          )}
          {tab.type === "simpleDropdown" && (
            <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center gap-1.5 shrink-0">
              Dropdown List <ChevronDown size={11} />
            </span>
          )}
          {tab.type === "categorizedDropdown" && (
            <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center gap-1.5 shrink-0">
              Category Dropdown <ChevronDown size={11} />
            </span>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="w-9 h-9 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center border border-slate-200 transition-all shrink-0 cursor-pointer"
            title="Edit Layout Structure"
          >
            <Settings size={15} />
          </button>

          <ToggleSwitch checked={tab.isActive} onChange={(v) => onChange({ ...tab, isActive: v })} />

          <ConfirmDeleteDialog onConfirm={onDelete}>
            <button className="w-9 h-9 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl flex items-center justify-center border border-red-100 transition-all shrink-0 cursor-pointer">
              <Trash2 size={15} />
            </button>
          </ConfirmDeleteDialog>
        </div>
      </div>

      {expanded && (
        <div className="bg-slate-50/30" style={{ padding: "1.5rem", borderTop: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Tab Title Label"
              value={tab.label}
              onChange={(v) => onChange({ ...tab, label: v })}
            />
            <InputField
              label="Tab Description"
              value={tab.description || ""}
              onChange={(v) => onChange({ ...tab, description: v })}
              placeholder="e.g. Information about our company"
            />
            {tab.type === "direct" && (
              <InputField
                label="Direct Redirection Path URL"
                value={tab.directLink}
                onChange={(v) => onChange({ ...tab, directLink: v })}
              />
            )}
          </div>

          {tab.type === "simpleDropdown" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Promo Image Alt"
                  value={tab.promoImage?.alt}
                  onChange={(v) => onChange({ ...tab, promoImage: { ...tab.promoImage, alt: v } })}
                />
                <InputField
                  label="Promo Image URL"
                  value={tab.promoImage?.url}
                  onChange={(v) => onChange({ ...tab, promoImage: { ...tab.promoImage, url: v } })}
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Dropdown List Items</span>
                {tab.items.map((item, idx) => (
                  <NavItemRow
                    key={item.id}
                    item={item}
                    onChange={(updated) => updateItem(idx, updated)}
                    onDelete={() => deleteItem(idx)}
                  />
                ))}
                <button
                  onClick={() => onChange({ ...tab, items: [...tab.items, { id: `item-${Date.now()}`, label: "New Item", link: "/", isActive: true }] })}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:border-slate-350 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <Plus size={14} /> Add Dropdown Link
                </button>
              </div>
            </div>
          )}

          {tab.type === "categorizedDropdown" && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Mega Menu Categories</span>
              {tab.categories.map((category, idx) => (
                <CategoryEditorBlock
                  key={category.id}
                  category={category}
                  onChange={(updated) => updateCategory(idx, updated)}
                  onDelete={() => deleteCategory(idx)}
                />
              ))}
              <button
                onClick={() => onChange({ ...tab, categories: [...tab.categories, { id: `cat-${Date.now()}`, name: "New Category", isActive: true, items: [], promoImage: { url: "", alt: "", link: "" } }] })}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:border-slate-350 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <Plus size={14} /> Add Mega Menu Category
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component Editor                                             */
/* ------------------------------------------------------------------ */

export default function HeaderNavEditor() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savedFlash, setSavedFlash] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const containerRef = useRef(null);
  const saveBtnRef = useRef(null);
  const fileRef = useRef(null);

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await fetch(`${API}/api/header`);
        if (res.ok) {
          const data = await res.json();
          setConfig(data.config || defaultConfig);
        } else {
          setConfig(defaultConfig);
        }
      } catch (err) {
        console.error("Failed to fetch header config:", err);
        setConfig(defaultConfig);
      } finally {
        setLoading(false);
      }
    };
    fetchHeader();
  }, []);

  useEffect(() => {
    if (!loading && containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll(".section-card-anim"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, [loading]);

  const updateRootTab = (idx, updated) =>
    setConfig((prev) => ({ ...prev, rootTabs: prev.rootTabs.map((t, i) => (i === idx ? updated : t)) }));
  
  const deleteRootTab = (idx) =>
    setConfig((prev) => ({ ...prev, rootTabs: prev.rootTabs.filter((_, i) => i !== idx) }));

  const updateSocialLink = (idx, updated) =>
    setConfig((prev) => ({ ...prev, socialLinks: prev.socialLinks.map((s, i) => (i === idx ? updated : s)) }));

  const deleteSocialLink = (idx) =>
    setConfig((prev) => ({ ...prev, socialLinks: prev.socialLinks.filter((_, i) => i !== idx) }));

  const handleLogoUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch(`${API}/api/upload`, {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        const fullUrl = data.url.startsWith("http") ? data.url : `${API}${data.url}`;
        setConfig((prev) => ({ ...prev, logo: { ...prev.logo, url: fullUrl } }));
      } else {
        alert("Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    
    // Save button click animation
    gsap.timeline()
      .to(saveBtnRef.current, { scale: 0.95, duration: 0.1 })
      .to(saveBtnRef.current, { scale: 1.05, duration: 0.15, ease: "power2.out" })
      .to(saveBtnRef.current, { scale: 1, duration: 0.1 });

    try {
      const res = await fetch(`${API}/api/header`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config }),
      });
      if (res.ok) {
        setSavedFlash(true);
        setTimeout(() => setSavedFlash(false), 2000);
      } else {
        alert("Failed to save header config.");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving header config.");
    } finally {
      setSaving(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("URL Copied!");
  };

  if (loading || !config) {
    return (
      <div className="flex items-center justify-center py-20 bg-transparent">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-semibold text-slate-500">Loading Configuration...</span>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto pb-16" style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "2rem" }}>
      
      {/* Header Bar */}
      <div className="section-card-anim flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Header Navigation</h1>
          <p className="text-sm text-slate-400 mt-2 font-medium">
            Edit labels, links, categories, and visibility. Inactive items redirect visitors to <code className="rounded bg-white border border-slate-200 px-1.5 py-0.5 text-xs">/A505</code>.
          </p>
        </div>
        
        <button
          ref={saveBtnRef}
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="fixed bottom-6 right-8 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold h-[42px] px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 z-50 hover:-translate-y-[2px]"
        >
          {savedFlash ? "Saved" : (saving ? "Saving..." : "Save Changes")}
        </button>
      </div>

      {/* Main Settings Card */}
      <div className="section-card-anim bg-white rounded-3xl border border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,.05)] space-y-6" style={{ padding: "2rem" }}>
        
        {/* Row 1: Logo configurations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start" style={{ marginBottom: "1.5rem" }}>
          
          {/* Logo Image Box */}
          <div className="flex flex-col gap-2" style={{ marginBottom: "1.5rem" }}>
            <span className="text-xs font-bold text-slate-700 tracking-wide">Logo Image</span>
            <div className="flex items-center gap-3">
              <div className="h-16 w-32 border border-slate-200 bg-slate-50 rounded-xl flex items-center justify-center p-2 overflow-hidden">
                {config.logo.url ? (
                  <img src={config.logo.url} alt="Logo" className="h-full object-contain" />
                ) : (
                  <ImageIcon size={20} className="text-slate-400" />
                )}
              </div>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="h-11 px-4 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
              >
                <Upload size={14} />
                {uploading ? "Uploading..." : "Upload Image"}
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileRef}
                className="hidden"
                onChange={(e) => handleLogoUpload(e.target.files?.[0])}
              />
            </div>
            
            {/* Logo Image URL Input with Copy Icon */}
            {config.logo.url && (
              <div className="flex items-center h-[48px] rounded-xl border border-slate-200 bg-slate-50/50 mt-1.5" style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
                <input
                  type="text"
                  value={config.logo.url}
                  readOnly
                  className="w-full bg-transparent text-[11px] text-slate-500 font-mono outline-none"
                />
                <button
                  type="button"
                  onClick={() => copyToClipboard(config.logo.url)}
                  className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
                  title="Copy URL"
                >
                  <Copy size={13} />
                </button>
              </div>
            )}
            <span className="text-[11px] text-slate-400 font-semibold mt-1">Image uploaded</span>
          </div>

          <InputField
            label="Logo Alt Text"
            value={config.logo.alt}
            onChange={(v) => setConfig({ ...config, logo: { ...config.logo, alt: v } })}
            placeholder="Digicore"
            subtitle="Helps with accessibility and SEO."
          />

          <InputField
            label="Logo Link"
            value={config.logo.link}
            onChange={(v) => setConfig({ ...config, logo: { ...config.logo, link: v } })}
            placeholder="/"
            icon={LinkIcon}
            subtitle="Redirects to this URL on logo click."
          />
        </div>

        {/* Row 2: Phone, Email, CTA Label */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: "1.5rem" }}>
          <InputField
            label="Phone Number"
            value={config.phone}
            onChange={(v) => setConfig({ ...config, phone: v })}
            placeholder="+91 9818888064"
            icon={Phone}
            subtitle="Display phone number in header."
          />

          <InputField
            label="Email"
            value={config.email}
            onChange={(v) => setConfig({ ...config, email: v })}
            placeholder="hello@digitalmarkitors.com"
            icon={Mail}
            subtitle="Display email in header."
          />

          <InputField
            label="CTA Button Label"
            value={config.ctaButton.label}
            onChange={(v) => setConfig({ ...config, ctaButton: { ...config.ctaButton, label: v } })}
            placeholder="Free Consultation"
            icon={Tag}
            subtitle="Text for the main call-to-action button."
          />
        </div>

        {/* Row 3: CTA Link and Social Links Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start" style={{ marginBottom: "1.5rem" }}>
          <InputField
            label="CTA Button Link"
            value={config.ctaButton.link}
            onChange={(v) => setConfig({ ...config, ctaButton: { ...config.ctaButton, link: v } })}
            placeholder="/free-consultation"
            icon={LinkIcon}
            subtitle="Redirects when CTA button is clicked."
          />

          {/* Social Links Sub-Card */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-700 tracking-wide">Social Links</span>
            
            <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50/50 space-y-4">
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                  gap: "1rem" 
                }}
              >
                {config.socialLinks.map((s, idx) => (
                  <div 
                    key={s.id} 
                    className="flex items-center gap-3 bg-white px-3 py-2.5 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200"
                  >
                    {getSocialIconBlock(s.platform)}
                    
                    <div className="flex-1 flex items-center">
                      <input
                        type="text"
                        value={s.url}
                        onChange={(e) => updateSocialLink(idx, { ...s, url: e.target.value })}
                        placeholder={`${s.platform} URL`}
                        className="w-full bg-transparent text-xs text-slate-700 font-semibold outline-none border-none p-0 focus:ring-0"
                        style={{ border: "none", outline: "none", boxShadow: "none" }}
                      />
                    </div>

                    <ConfirmDeleteDialog onConfirm={() => deleteSocialLink(idx)}>
                      <button
                        type="button"
                        className="p-1.5 text-slate-400 hover:text-red-600 border border-slate-200 hover:border-red-200 hover:bg-red-50 rounded-lg cursor-pointer shrink-0 transition-colors"
                        title="Delete social link"
                      >
                        <Trash2 size={13} />
                      </button>
                    </ConfirmDeleteDialog>
                  </div>
                ))}
              </div>

              {/* <button
                type="button"
                onClick={() => setConfig({ ...config, socialLinks: [...config.socialLinks, { id: `social-${Date.now()}`, platform: "New Link", url: "https://" }] })}
                className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 hover:border-slate-350 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-lg transition-all cursor-pointer shadow-sm"
              >
                <Plus size={14} /> Add Social Channel
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Card */}
      <div className="section-card-anim bg-white rounded-3xl border border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,.05)] space-y-4" style={{ paddingLeft: "2rem", paddingRight: "2rem", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <h2 className="text-lg font-bold text-slate-900 tracking-tight" style={{ marginBottom: "1.5rem" }}>Navigation Tabs</h2>
        
        <div className="space-y-3" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {config.rootTabs.map((tab, idx) => (
            <NavigationCardRow
              key={tab.id}
              tab={tab}
              onChange={(updated) => updateRootTab(idx, updated)}
              onDelete={() => deleteRootTab(idx)}
            />
          ))}
        </div>

        {/* <div 
          className="flex flex-wrap gap-3 p-4 bg-slate-50/50 rounded-2xl " 
          style={{ border: "1px dashed #cbd5e1", marginTop: "1.5rem" }}
        >
          <button
            onClick={() => setConfig({ ...config, rootTabs: [...config.rootTabs, { id: `tab-${Date.now()}`, label: "New Link", type: "direct", isActive: true, directLink: "/" }] })}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
          >
            <Plus size={14} /> Add Link Tab
          </button>
          <button
            onClick={() => setConfig({ ...config, rootTabs: [...config.rootTabs, { id: `tab-${Date.now()}`, label: "New Dropdown", type: "simpleDropdown", isActive: true, items: [], promoImage: { url: "", alt: "", link: "" } }] })}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
          >
            <Plus size={14} /> Add Dropdown Tab
          </button>
          <button
            onClick={() => setConfig({ ...config, rootTabs: [...config.rootTabs, { id: `tab-${Date.now()}`, label: "New Mega Menu", type: "categorizedDropdown", isActive: true, categories: [] }] })}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
          >
            <Plus size={14} /> Add Mega Menu Tab
          </button>
        </div> */}
      </div>
    </div>
  );
}