import { useEffect, useRef, useState } from "react";
import {
  Image as ImageIcon,
  MapPin,
  Phone,
  Share2,
  ListTree,
  FileText,
  Upload,
  Plus,
  Trash2,
  Eye,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "../../Styles/AFooter.css";

const API_BASE = "http://localhost:5000";
const API = `${API_BASE}/api/footer`;

const emptyFooter = {
  logo: "",
  companyName: "",
  address: "",
  phone: "",
  email: "",
  socialLinks: {
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    pinterest: "",
  },
  linkColumns: [],
  copyrightText: "",
};

const socialMeta = [
  { key: "facebook", label: "Facebook", icon: <FaFacebookF />, color: "#1877f2" },
  { key: "twitter", label: "Twitter / X", icon: <FaTwitter />, color: "#0f1419" },
  { key: "linkedin", label: "LinkedIn", icon: <FaLinkedinIn />, color: "#0a66c2" },
  { key: "instagram", label: "Instagram", icon: <FaInstagram />, color: "#e1306c" },
  { key: "pinterest", label: "Pinterest", icon: <FaPinterestP />, color: "#e60023" },
];

export default function Afooter() {
  const [form, setForm] = useState(emptyFooter);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchFooter();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const fetchFooter = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      if (data.footer) {
        setForm({
          logo: data.footer.logo || "",
          companyName: data.footer.companyName || "",
          address: data.footer.address || "",
          phone: data.footer.phone || "",
          email: data.footer.email || "",
          socialLinks: { ...emptyFooter.socialLinks, ...data.footer.socialLinks },
          linkColumns: data.footer.linkColumns || [],
          copyrightText: data.footer.copyrightText || "",
        });
      }
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "Could not reach the server. Is the backend running?" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSocialChange = (key, value) => {
    setForm((p) => ({ ...p, socialLinks: { ...p.socialLinks, [key]: value } }));
  };

  const handleLogoPick = () => fileInputRef.current?.click();

  const handleLogoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const body = new FormData();
      body.append("logo", file);

      const res = await fetch(`${API}/logo`, { method: "POST", body });
      const data = await res.json();

      if (data.success) {
        setForm((p) => ({ ...p, logo: data.path }));
      } else {
        setToast({ type: "error", message: "Logo upload failed" });
      }
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "Logo upload failed" });
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const addColumn = () => {
    setForm((p) => ({
      ...p,
      linkColumns: [...p.linkColumns, { title: "New Column", links: [] }],
    }));
  };

  const removeColumn = (colIndex) => {
    setForm((p) => ({
      ...p,
      linkColumns: p.linkColumns.filter((_, i) => i !== colIndex),
    }));
  };

  const updateColumnTitle = (colIndex, value) => {
    setForm((p) => ({
      ...p,
      linkColumns: p.linkColumns.map((c, i) => (i === colIndex ? { ...c, title: value } : c)),
    }));
  };

  const addLink = (colIndex) => {
    setForm((p) => ({
      ...p,
      linkColumns: p.linkColumns.map((c, i) =>
        i === colIndex ? { ...c, links: [...c.links, { label: "New Link", url: "#" }] } : c
      ),
    }));
  };

  const removeLink = (colIndex, linkIndex) => {
    setForm((p) => ({
      ...p,
      linkColumns: p.linkColumns.map((c, i) =>
        i === colIndex ? { ...c, links: c.links.filter((_, j) => j !== linkIndex) } : c
      ),
    }));
  };

  const updateLink = (colIndex, linkIndex, field, value) => {
    setForm((p) => ({
      ...p,
      linkColumns: p.linkColumns.map((c, i) =>
        i === colIndex
          ? {
              ...c,
              links: c.links.map((l, j) => (j === linkIndex ? { ...l, [field]: value } : l)),
            }
          : c
      ),
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(API, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setToast({ type: "success", message: "Footer updated successfully" });
      } else {
        setToast({ type: "error", message: data.message || "Failed to save footer" });
      }
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "Could not reach the server. Is the backend running?" });
    } finally {
      setSaving(false);
    }
  };

  const logoSrc = form.logo
    ? form.logo.startsWith("http")
      ? form.logo
      : `${API_BASE}${form.logo}`
    : "";

  if (loading) {
    return (
      <div className="af-page">
        <div className="af-card">Loading footer settings...</div>
      </div>
    );
  }

  return (
    <div className="af-page">
      <div className="af-header">
        <div>
          <h1>Footer Management</h1>
          <p>Control every part of the website footer — content, links and social handles.</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {toast && <span className={`af-toast ${toast.type}`}>{toast.message}</span>}
          <button 
            className="af-save-btn" 
            onClick={handleSave} 
            disabled={saving}
            style={{ position: "fixed", bottom: "24px", right: "32px", zIndex: 100, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.4)", padding: "0 40px" }}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Brand & Logo */}
      <div className="af-card">
        <div className="af-card-head">
          <div className="af-card-icon">
            <ImageIcon size={20} />
          </div>
          <div>
            <h3>Brand</h3>
            <p>Logo and company name shown in the footer</p>
          </div>
        </div>

        <div className="af-logo-row" style={{ marginBottom: 20 }}>
          <div className="af-logo-preview">
            {logoSrc ? <img src={logoSrc} alt="Footer logo" crossOrigin="anonymous" /> : <ImageIcon size={28} />}
          </div>

          <div>
            <button className="af-upload-btn" onClick={handleLogoPick} disabled={uploading}>
              <Upload size={14} />
              {uploading ? "Uploading..." : "Upload Logo"}
            </button>
            <p className="af-upload-hint">PNG or SVG recommended, transparent background.</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleLogoUpload}
            />
          </div>
        </div>

        <div className="af-grid">
          <div className="af-field af-field--full">
            <label className="af-label">Company Name</label>
            <input
              className="af-input"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="e.g. Digicore Inc."
            />
          </div>
        </div>
      </div>

      {/* Address & Contact */}
      <div className="af-card">
        <div className="af-card-head">
          <div className="af-card-icon">
            <MapPin size={20} />
          </div>
          <div>
            <h3>Office Address & Contact</h3>
            <p>Displayed under Office Address and Contact Us</p>
          </div>
        </div>

        <div className="af-grid">
          <div className="af-field af-field--full">
            <label className="af-label">Address</label>
            <textarea
              className="af-textarea"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Full office address"
            />
          </div>

          <div className="af-field">
            <label className="af-label">
              <Phone size={12} style={{ marginRight: 4, verticalAlign: "-2px" }} />
              Phone
            </label>
            <input
              className="af-input"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 9818888064"
            />
          </div>

          <div className="af-field">
            <label className="af-label">Email</label>
            <input
              className="af-input"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="support@digicore.co.in"
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="af-card">
        <div className="af-card-head">
          <div className="af-card-icon">
            <Share2 size={20} />
          </div>
          <div>
            <h3>Follow Us</h3>
            <p>Leave a field blank to hide that icon on the site</p>
          </div>
        </div>

        <div className="af-social-grid">
          {socialMeta.map((s) => (
            <div className="af-social-row" key={s.key}>
              <div className="af-social-icon" style={{ background: s.color }}>
                {s.icon}
              </div>
              <input
                value={form.socialLinks[s.key] || ""}
                onChange={(e) => handleSocialChange(s.key, e.target.value)}
                placeholder={`${s.label} URL`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Link Columns */}
      <div className="af-card">
        <div className="af-card-head">
          <div className="af-card-icon">
            <ListTree size={20} />
          </div>
          <div>
            <h3>Footer Link Columns</h3>
            <p>SEO, PPC, SMM, Location, Industries, Support — fully editable</p>
          </div>
        </div>

        <div className="af-columns-grid">
          {form.linkColumns.map((col, colIndex) => (
            <div className="af-column-card" key={col._id || colIndex}>
              <div className="af-column-title-row">
                <input
                  value={col.title}
                  onChange={(e) => updateColumnTitle(colIndex, e.target.value)}
                />
                <button
                  className="af-icon-btn remove"
                  onClick={() => removeColumn(colIndex)}
                  title="Remove column"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              {col.links.map((link, linkIndex) => (
                <div className="af-link-row" key={link._id || linkIndex}>
                  <input
                    value={link.label}
                    onChange={(e) => updateLink(colIndex, linkIndex, "label", e.target.value)}
                    placeholder="Label"
                  />
                  <input
                    value={link.url}
                    onChange={(e) => updateLink(colIndex, linkIndex, "url", e.target.value)}
                    placeholder="/link-url"
                  />
                  <button
                    className="af-icon-btn remove"
                    onClick={() => removeLink(colIndex, linkIndex)}
                    title="Remove link"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}

              <button className="af-icon-btn add-link" onClick={() => addLink(colIndex)}>
                <Plus size={13} />
                Add Link
              </button>
            </div>
          ))}

          <button className="af-add-column-btn" onClick={addColumn}>
            <Plus size={16} />
            Add Column
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="af-card">
        <div className="af-card-head">
          <div className="af-card-icon">
            <FileText size={20} />
          </div>
          <div>
            <h3>Bottom Bar</h3>
            <p>Copyright line shown at the very bottom of the footer</p>
          </div>
        </div>

        <div className="af-grid">
          <div className="af-field af-field--full">
            <label className="af-label">Copyright Text</label>
            <input
              className="af-input"
              name="copyrightText"
              value={form.copyrightText}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div className="af-card">
        <div className="af-card-head">
          <div className="af-card-icon">
            <Eye size={20} />
          </div>
          <div>
            <h3>Live Preview</h3>
            <p>Approximate rendering of the public footer with your changes</p>
          </div>
        </div>

        <div className="af-preview-wrap">
          <div className="af-preview-footer">
            <div className="af-preview-top">
              <div>
                <div className="af-preview-logo">
                  {logoSrc ? (
                    <img src={logoSrc} alt="" crossOrigin="anonymous" />
                  ) : (
                    <span className="af-preview-logo-fallback">{form.companyName || "Your Logo"}</span>
                  )}
                </div>
              </div>

              <div>
                <h4>Follow Us</h4>
                <div className="af-preview-social">
                  {socialMeta
                    .filter((s) => form.socialLinks[s.key])
                    .map((s) => (
                      <span key={s.key}>{s.icon}</span>
                    ))}
                </div>
              </div>

              <div>
                <h4>Office Address</h4>
                <p>{form.companyName}</p>
                <p>{form.address}</p>
              </div>

              <div>
                <h4>Contact Us</h4>
                <a href={`tel:${form.phone}`}>
                  <FaPhoneAlt /> {form.phone}
                </a>
                <a href={`mailto:${form.email}`}>
                  <FaEnvelope /> {form.email}
                </a>
              </div>
            </div>

            <div className="af-preview-line" />

            <div className="af-preview-links">
              {form.linkColumns.map((col, i) => (
                <div key={col._id || i}>
                  <h4>{col.title}</h4>
                  <ul>
                    {col.links.map((link, j) => (
                      <li key={link._id || j}>{link.label}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="af-preview-bottom">{form.copyrightText}</div>
        </div>
      </div>
    </div>
  );
}