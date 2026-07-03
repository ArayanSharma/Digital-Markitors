import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronRight,
  Trash2,
  Image as ImageIcon,
  Link2,
  Save,
  Check,
  X,
} from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

/* ------------------------------------------------------------------ */
/*  Default config — used as fallback when no DB document exists yet   */
/* ------------------------------------------------------------------ */

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
            { id: "geo", label: "GEO", link: "/geo", isActive: true },
            { id: "aeo", label: "AEO", link: "/aeo", isActive: true },
            { id: "technical-seo", label: "Technical SEO", link: "/technical-seo", isActive: true },
            { id: "ecommerce-seo", label: "Ecommerce SEO", link: "/ecommerce-seo", isActive: true },
            { id: "seo-audit", label: "SEO Audit", link: "/seo-audit", isActive: true },
            { id: "link-building", label: "Link Building", link: "/link-building", isActive: true },
            { id: "seo-reseller", label: "SEO Reseller", link: "/seo-reseller", isActive: true },
          ],
        },
        {
          id: "smo",
          name: "SMO",
          isActive: true,
          promoImage: {
            url: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&q=80",
            alt: "SMO",
            link: "",
          },
          items: [
            { id: "smo-services", label: "SMO Services", link: "/smo-services", isActive: true },
            { id: "social-media-mgmt", label: "Social Media Management", link: "/social-media-management", isActive: true },
          ],
        },
        {
          id: "performance-marketing",
          name: "Performance Marketing",
          isActive: true,
          promoImage: {
            url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&q=80",
            alt: "Performance Marketing",
            link: "",
          },
          items: [
            { id: "ppc", label: "PPC / Google Ads", link: "/ppc", isActive: true },
            { id: "meta-ads", label: "Meta Ads", link: "/meta-ads", isActive: true },
          ],
        },
        {
          id: "web-design",
          name: "Web Design",
          isActive: true,
          promoImage: {
            url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80",
            alt: "Web Design",
            link: "",
          },
          items: [
            { id: "web-design-dev", label: "Web Design & Development", link: "/web-design-development", isActive: true },
            { id: "ui-ux", label: "UI/UX Design", link: "/ui-ux-design", isActive: true },
          ],
        },
        {
          id: "orm",
          name: "ORM",
          isActive: true,
          promoImage: {
            url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
            alt: "ORM",
            link: "",
          },
          items: [
            { id: "orm-services", label: "ORM Services", link: "/orm-services", isActive: true },
            { id: "review-management", label: "Review Management", link: "/review-management", isActive: true },
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
        { id: "healthcare", label: "Healthcare", link: "/industry/healthcare", isActive: true },
        { id: "b2b", label: "B2B", link: "/industry/b2b", isActive: true },
        { id: "hospitality", label: "Hospitality", link: "/industry/hospitality", isActive: true },
        { id: "ecommerce-industry", label: "E-Commerce", link: "/industry/ecommerce", isActive: true },
        { id: "travel", label: "Travel", link: "/industry/travel", isActive: false },
        { id: "financial-professional", label: "Financial & Professional", link: "/industry/financial-professional", isActive: true },
      ],
    },
    { id: "blog", label: "Blog", type: "direct", isActive: true, directLink: "/blog" },
    { id: "contact", label: "Contact", type: "direct", isActive: true, directLink: "/contact" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Small reusable pieces                                              */
/* ------------------------------------------------------------------ */

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-success ${
        checked ? "bg-success" : "bg-brand-primary/30"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-bg-card shadow transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function ConfirmDeleteButton({ onConfirm, title = "Delete this?" }) {
  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <div className="flex items-center gap-1 rounded-md bg-danger/10 px-1.5 py-1">
        <span className="text-xs text-danger mr-1 hidden sm:inline">{title}</span>
        <button
          type="button"
          onClick={() => {
            onConfirm();
            setConfirming(false);
          }}
          className="rounded bg-danger p-1 text-black hover:bg-danger"
          aria-label="Confirm delete"
        >
          <Check size={13} />
        </button>
        <button
          type="button"
          onClick={() => setConfirming(false)}
          className="rounded bg-brand-primary/20 p-1 text-black hover:bg-brand-primary/30"
          aria-label="Cancel delete"
        >
          <X size={13} />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setConfirming(true)}
      className="rounded-md p-1.5 text-black hover:bg-danger/10 hover:text-black"
      aria-label="Delete"
    >
      <Trash2 size={15} />
    </button>
  );
}

function TextField({ label, value, onChange, placeholder, icon }) {
  return (
    <label className="flex flex-col gap-1">
        <span className="text-xs font-medium text-black">{label}</span>
      <div className="flex items-center gap-1.5 rounded-2xl border border-brand-primary/25 bg-bg-card px-2.5 py-1.5 focus-within:border-brand-secondary">
        {icon}
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm text-black outline-none placeholder:text-black"
        />
      </div>
    </label>
  );
}

function ImageUploadField({ label, value, onChange }) {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (file) => {
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
        onChange(fullUrl);
      } else {
        alert("Upload failed: " + (data.message || JSON.stringify(data)));
      }
    } catch (err) {
      console.error("Image upload failed:", err);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <label className="flex flex-col gap-1">
        <span className="text-xs font-medium text-black">{label}</span>
      <div className="flex flex-col gap-2 rounded-2xl border border-brand-primary/25 bg-bg-card px-2.5 py-2">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 overflow-hidden rounded-2xl border border-brand-primary/25 bg-bg-secondary">
            {value ? (
              <img src={value} alt={label} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-black">
                <ImageIcon size={18} />
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="rounded-md bg-bg-card px-3 py-2 text-sm text-black hover:bg-brand-primary/20"
          >
            {uploading ? "Uploading..." : "Upload image"}
          </button>
        </div>
        <input
          type="text"
          value={value || ""}
          placeholder="Image URL or uploaded path"
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border border-brand-primary/25 bg-bg-secondary px-3 py-2 text-sm text-black outline-none focus:border-brand-secondary"
        />
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>
    </label>
  );
}

/* ------------------------------------------------------------------ */
/*  Item row — the leaf-level editable nav entry                       */
/* ------------------------------------------------------------------ */

function createNewNavItem() {
  return {
    id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
    label: "New item",
    link: "/",
    isActive: true,
  };
}

function ItemRow({ item, onChange, onDelete }) {
  return (
    <div
      className={`grid grid-cols-[1fr_1fr_auto_auto] items-center gap-2 rounded-2xl border px-2.5 py-2 transition-opacity ${
        item.isActive ? "border-brand-primary/25 bg-bg-card" : "border-brand-primary/25 bg-bg-secondary opacity-60"
      }`}
    >
      <input
        type="text"
        value={item.label}
        onChange={(e) => onChange({ ...item, label: e.target.value })}
        className="min-w-0 rounded-md border border-transparent bg-transparent px-1.5 py-1 text-sm text-black outline-none hover:border-brand-primary/25 focus:border-brand-secondary"
      />
      <input
        type="text"
        value={item.link}
        onChange={(e) => onChange({ ...item, link: e.target.value })}
        className="min-w-0 rounded-md border border-transparent bg-transparent px-1.5 py-1 text-sm text-black outline-none hover:border-brand-primary/25 focus:border-brand-secondary"
      />
      <Toggle checked={item.isActive} onChange={(v) => onChange({ ...item, isActive: v })} />
      <ConfirmDeleteButton onConfirm={onDelete} title="Delete item?" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Category block — SEO / SMO / etc inside "Our Services"             */
/* ------------------------------------------------------------------ */

function CategoryBlock({ category, onChange, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const updateItem = (idx, updated) =>
    onChange({ ...category, items: category.items.map((it, i) => (i === idx ? updated : it)) });
  const deleteItem = (idx) =>
    onChange({ ...category, items: category.items.filter((_, i) => i !== idx) });

  return (
    <div className={`rounded-2xl border ${category.isActive ? "border-brand-primary/25" : "border-brand-primary/25 bg-bg-secondary/60"}`}>
      <div className="flex items-center gap-2 px-3 py-2.5">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="rounded p-0.5 text-black hover:bg-bg-card"
        >
          {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        <input
          type="text"
          value={category.name}
          onChange={(e) => onChange({ ...category, name: e.target.value })}
          className="min-w-0 flex-1 rounded-md border border-transparent bg-transparent px-1.5 py-1 text-sm font-semibold text-black outline-none hover:border-brand-primary/25 focus:border-brand-secondary"
        />
        <span className="text-xs text-black hidden sm:inline">
          {category.items.length} item{category.items.length !== 1 ? "s" : ""}
        </span>
        <Toggle checked={category.isActive} onChange={(v) => onChange({ ...category, isActive: v })} />
        <ConfirmDeleteButton onConfirm={onDelete} title="Delete category?" />
      </div>

      {expanded && (
        <div className="space-y-3 border-t border-brand-primary/20 px-3 py-3">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <ImageUploadField
              label="Promo image"
              value={category.promoImage?.url || ""}
              onChange={(v) => onChange({ ...category, promoImage: { ...category.promoImage, url: v } })}
            />
            <TextField
              label="Image alt text"
              value={category.promoImage?.alt || ""}
              onChange={(v) => onChange({ ...category, promoImage: { ...category.promoImage, alt: v } })}
            />
            <TextField
              label="Image link (optional)"
              value={category.promoImage?.link || ""}
              onChange={(v) => onChange({ ...category, promoImage: { ...category.promoImage, link: v } })}
              icon={<Link2 size={13} className="text-black" />}
            />
          </div>

          <div className="space-y-1.5">
            <div className="grid grid-cols-[1fr_1fr_auto_auto] gap-2 px-2.5 text-xs font-medium text-black">
              <span>Label</span>
              <span>Link</span>
              <span>Active</span>
              <span></span>
            </div>
            {category.items.map((item, idx) => (
              <ItemRow
                key={item.id}
                item={item}
                onChange={(updated) => updateItem(idx, updated)}
                onDelete={() => deleteItem(idx)}
              />
            ))}
            <button
              type="button"
              onClick={() => onChange({ ...category, items: [...category.items, createNewNavItem()] })}
              className="rounded-md border border-brand-primary/25 bg-bg-secondary px-3 py-2 text-sm font-medium text-black hover:bg-bg-card"
            >
              + Add item
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root tab card — Company / Our Services / Industry / Blog / Contact */
/* ------------------------------------------------------------------ */

function RootTabCard({ tab, onChange, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const updateItem = (idx, updated) =>
    onChange({ ...tab, items: tab.items.map((it, i) => (i === idx ? updated : it)) });
  const deleteItem = (idx) => onChange({ ...tab, items: tab.items.filter((_, i) => i !== idx) });

  const updateCategory = (idx, updated) =>
    onChange({ ...tab, categories: tab.categories.map((c, i) => (i === idx ? updated : c)) });
  const deleteCategory = (idx) =>
    onChange({ ...tab, categories: tab.categories.filter((_, i) => i !== idx) });

  const typeLabel =
    tab.type === "direct" ? "Direct link" : tab.type === "simpleDropdown" ? "Dropdown list" : "Category dropdown";

  return (
    <div className={`rounded-2xl border bg-bg-card shadow-sm ${tab.isActive ? "border-brand-primary/25" : "border-brand-primary/25 bg-bg-secondary/50"}`}>
      <div className="flex items-center gap-3 px-4 py-3.5">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="rounded p-1 text-black hover:bg-bg-card"
        >
          {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>

        <input
          type="text"
          value={tab.label}
          onChange={(e) => onChange({ ...tab, label: e.target.value })}
          className="min-w-0 flex-1 rounded-md border border-transparent bg-transparent px-2 py-1 text-base font-semibold text-black outline-none hover:border-brand-primary/25 focus:border-brand-secondary"
        />

        <span className="hidden rounded-full bg-bg-card px-2.5 py-1 text-xs font-medium text-black sm:inline">
          {typeLabel}
        </span>

        <Toggle checked={tab.isActive} onChange={(v) => onChange({ ...tab, isActive: v })} />
        <ConfirmDeleteButton onConfirm={onDelete} title="Delete this tab?" />
      </div>

      {expanded && (
        <div className="space-y-4 border-t border-brand-primary/20 px-4 py-4">
          {tab.type === "direct" && (
            <TextField
              label="Link"
              value={tab.directLink}
              onChange={(v) => onChange({ ...tab, directLink: v })}
              icon={<Link2 size={13} className="text-black" />}
            />
          )}

          {tab.type === "simpleDropdown" && (
            <>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                <ImageUploadField
                  label="Promo image"
                  value={tab.promoImage?.url || ""}
                  onChange={(v) => onChange({ ...tab, promoImage: { ...tab.promoImage, url: v } })}
                />
                <TextField
                  label="Image alt text"
                  value={tab.promoImage?.alt || ""}
                  onChange={(v) => onChange({ ...tab, promoImage: { ...tab.promoImage, alt: v } })}
                />
                <TextField
                  label="Image link (optional)"
                  value={tab.promoImage?.link || ""}
                  onChange={(v) => onChange({ ...tab, promoImage: { ...tab.promoImage, link: v } })}
                  icon={<Link2 size={13} className="text-text-muted" />}
                />
              </div>

              <div className="space-y-1.5">
                <div className="grid grid-cols-[1fr_1fr_auto_auto] gap-2 px-2.5 text-xs font-medium text-black">
                  <span>Label</span>
                  <span>Link</span>
                  <span>Active</span>
                  <span></span>
                </div>
                {tab.items.map((item, idx) => (
                  <ItemRow
                    key={item.id}
                    item={item}
                    onChange={(updated) => updateItem(idx, updated)}
                    onDelete={() => deleteItem(idx)}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => onChange({ ...tab, items: [...tab.items, createNewNavItem()] })}
                  className="rounded-md border border-brand-primary/25 bg-bg-secondary px-3 py-2 text-sm font-medium text-black hover:bg-bg-card"
                >
                  + Add item
                </button>
              </div>
            </>
          )}

          {tab.type === "categorizedDropdown" && (
            <div className="space-y-3">
              {tab.categories.map((category, idx) => (
                <CategoryBlock
                  key={category.id}
                  category={category}
                  onChange={(updated) => updateCategory(idx, updated)}
                  onDelete={() => deleteCategory(idx)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Global header settings — logo, contact, CTA, socials               */
/* ------------------------------------------------------------------ */

function GlobalSettings({ config, onChange }) {
  const updateSocial = (idx, updated) =>
    onChange({ ...config, socialLinks: config.socialLinks.map((s, i) => (i === idx ? updated : s)) });
  const deleteSocial = (idx) =>
    onChange({ ...config, socialLinks: config.socialLinks.filter((_, i) => i !== idx) });

  return (
    <div className="rounded-2xl border border-brand-primary/25 bg-bg-card p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-white">Global header settings</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ImageUploadField
          label="Logo image"
          value={config.logo.url}
          onChange={(url) => onChange({ ...config, logo: { ...config.logo, url: url } })}
        />
        <TextField
          label="Logo alt text"
          value={config.logo.alt}
          onChange={(v) => onChange({ ...config, logo: { ...config.logo, alt: v } })}
        />
        <TextField
          label="Logo link"
          value={config.logo.link}
          onChange={(v) => onChange({ ...config, logo: { ...config.logo, link: v } })}
          icon={<Link2 size={13} className="text-text-muted" />}
        />

        <TextField
          label="Phone number"
          value={config.phone}
          onChange={(v) => onChange({ ...config, phone: v })}
        />
        <TextField
          label="Email"
          value={config.email}
          onChange={(v) => onChange({ ...config, email: v })}
        />
        <TextField
          label="CTA button label"
          value={config.ctaButton.label}
          onChange={(v) => onChange({ ...config, ctaButton: { ...config.ctaButton, label: v } })}
        />
        <TextField
          label="CTA button link"
          value={config.ctaButton.link}
          onChange={(v) => onChange({ ...config, ctaButton: { ...config.ctaButton, link: v } })}
          icon={<Link2 size={13} className="text-text-muted" />}
        />
      </div>

      <div className="mt-4">
        <span className="mb-1.5 block text-xs font-medium text-text-muted">Social links</span>
        <div className="space-y-1.5">
          {config.socialLinks.map((s, idx) => (
            <div key={s.id} className="grid grid-cols-[110px_1fr_auto] items-center gap-2 rounded-2xl border border-brand-primary/25 px-2.5 py-1.5">
              <input
                type="text"
                value={s.platform}
                onChange={(e) => updateSocial(idx, { ...s, platform: e.target.value })}
                className="min-w-0 rounded-md border border-transparent bg-transparent px-1.5 py-1 text-sm font-medium text-black outline-none hover:border-brand-primary/25 focus:border-brand-secondary"
              />
              <input
                type="text"
                value={s.url}
                onChange={(e) => updateSocial(idx, { ...s, url: e.target.value })}
                className="min-w-0 rounded-md border border-transparent bg-transparent px-1.5 py-1 text-sm text-black outline-none hover:border-brand-primary/25 focus:border-brand-secondary"
              />
              <ConfirmDeleteButton onConfirm={() => deleteSocial(idx)} title="Delete?" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export default function HeaderNavEditor() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savedFlash, setSavedFlash] = useState(false);
  const [saving, setSaving] = useState(false);

  // Fetch existing header config on mount
  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await fetch(`${API}/api/header`);
        if (res.ok) {
          const data = await res.json();
          setConfig(data.config || defaultConfig);
        } else {
          // No document in DB yet — use defaults
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

  const updateRootTab = (idx, updated) =>
    setConfig((prev) => ({ ...prev, rootTabs: prev.rootTabs.map((t, i) => (i === idx ? updated : t)) }));
  const deleteRootTab = (idx) =>
    setConfig((prev) => ({ ...prev, rootTabs: prev.rootTabs.filter((_, i) => i !== idx) }));

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`${API}/api/header`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config }),
      });
      if (res.ok) {
        setSavedFlash(true);
        setTimeout(() => setSavedFlash(false), 1800);
      } else {
        alert("Failed to save header config.");
      }
    } catch (err) {
      console.error("Failed to save header config:", err);
      alert("Error saving header config.");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !config) {
    return (
      <div className="min-h-screen bg-bg-secondary flex items-center justify-center">
        <p className="text-text-muted">Loading header config…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-secondary px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-white">Header navigation</h1>
            <p className="text-sm text-text-muted">
              Edit labels, links, categories, and visibility. Inactive items redirect visitors to{" "}
              <code className="rounded bg-bg-card px-1 py-0.5 text-xs">/A505</code>.
            </p>
          </div>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-1.5 rounded-2xl bg-danger px-4 py-2 text-sm font-semibold text-white hover:bg-danger disabled:opacity-60"
          >
            {savedFlash ? <Check size={15} /> : <Save size={15} />}
            {savedFlash ? "Saved" : saving ? "Saving…" : "Save changes"}
          </button>
        </div>

        <div className="space-y-6">
          <GlobalSettings config={config} onChange={setConfig} />

          <div>
            <h2 className="mb-2 text-sm font-semibold text-white">Navigation tabs</h2>
            <div className="space-y-3">
              {config.rootTabs.map((tab, idx) => (
                <RootTabCard
                  key={tab.id}
                  tab={tab}
                  onChange={(updated) => updateRootTab(idx, updated)}
                  onDelete={() => deleteRootTab(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}