import { useState } from "react";
import "../../Styles/Banner.css";

const initialBanners = [
  { id: 1, title: "Summer Sale 2024", subtitle: "Up to 50% off on all items", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80", status: "Active", link: "/sale", created: "2024-06-01" },
  { id: 2, title: "New Arrivals", subtitle: "Explore our latest collection", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80", status: "Active", link: "/new", created: "2024-05-20" },
  { id: 3, title: "Flash Deal Friday", subtitle: "24-hour deals, don't miss out!", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", status: "Inactive", link: "/flash", created: "2024-05-10" },
];

const emptyForm = { title: "", subtitle: "", image: "", link: "", status: "Active" };

function Banner() {
  const [banners, setBanners] = useState(initialBanners);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.title.trim()) return;
    if (editId !== null) {
      setBanners((p) => p.map((b) => (b.id === editId ? { ...b, ...form } : b)));
      setEditId(null);
    } else {
      setBanners((p) => [
        { id: Date.now(), ...form, created: new Date().toISOString().slice(0, 10) },
        ...p,
      ]);
    }
    setForm(emptyForm);
    setShowForm(false);
  };

  const handleEdit = (b) => {
    setForm({ title: b.title, subtitle: b.subtitle, image: b.image, link: b.link, status: b.status });
    setEditId(b.id);
    setShowForm(true);
    setPreview(null);
  };

  const handleDelete = (id) => {
    setBanners((p) => p.filter((b) => b.id !== id));
    if (preview?.id === id) setPreview(null);
  };

  const handleToggle = (id) => {
    setBanners((p) =>
      p.map((b) => (b.id === id ? { ...b, status: b.status === "Active" ? "Inactive" : "Active" } : b))
    );
  };

  return (
    <div className="banner-page">
      {/* Header */}
      <div className="bp__header">
        <div>
          <h1 className="bp__title">Banners</h1>
          <p className="bp__subtitle">{banners.length} banners · {banners.filter((b) => b.status === "Active").length} active</p>
        </div>
        <button className="bp__add-btn" onClick={() => { setShowForm(true); setEditId(null); setForm(emptyForm); }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Banner
        </button>
      </div>

      {/* Add / Edit form */}
      {showForm && (
        <div className="bp__form-card">
          <div className="bp__form-header">
            <h3 className="bp__form-title">{editId !== null ? "Edit Banner" : "New Banner"}</h3>
            <button className="bp__form-close" onClick={() => { setShowForm(false); setEditId(null); }}>✕</button>
          </div>
          <div className="bp__form-grid">
            <div className="bp__field">
              <label className="bp__label">Title *</label>
              <input className="bp__input" name="title" value={form.title} onChange={handleChange} placeholder="e.g. Summer Sale 2024" />
            </div>
            <div className="bp__field">
              <label className="bp__label">Subtitle</label>
              <input className="bp__input" name="subtitle" value={form.subtitle} onChange={handleChange} placeholder="Short description" />
            </div>
            <div className="bp__field bp__field--full">
              <label className="bp__label">Image URL</label>
              <input className="bp__input" name="image" value={form.image} onChange={handleChange} placeholder="https://…" />
            </div>
            <div className="bp__field">
              <label className="bp__label">Link</label>
              <input className="bp__input" name="link" value={form.link} onChange={handleChange} placeholder="/page-slug" />
            </div>
            <div className="bp__field">
              <label className="bp__label">Status</label>
              <select className="bp__input" name="status" value={form.status} onChange={handleChange}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div className="bp__form-actions">
            <button className="bp__cancel-btn" onClick={() => { setShowForm(false); setEditId(null); }}>Cancel</button>
            <button className="bp__save-btn" onClick={handleSubmit}>
              {editId !== null ? "Save Changes" : "Create Banner"}
            </button>
          </div>
        </div>
      )}

      {/* Banner cards grid */}
      <div className="bp__grid">
        {banners.map((b, i) => (
          <div className="bp__card" key={b.id} style={{ "--i": i }}>
            {/* Image preview */}
            <div className="bp__card-img-wrap" onClick={() => setPreview(b)}>
              {b.image ? (
                <img src={b.image} alt={b.title} className="bp__card-img" />
              ) : (
                <div className="bp__card-img-placeholder">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
                  </svg>
                </div>
              )}
              <span className={`bp__card-status ${b.status === "Active" ? "active" : "inactive"}`}>
                {b.status}
              </span>
              <div className="bp__card-overlay">
                <span>Preview</span>
              </div>
            </div>

            {/* Card body */}
            <div className="bp__card-body">
              <p className="bp__card-title">{b.title}</p>
              <p className="bp__card-sub">{b.subtitle}</p>
              <p className="bp__card-link">{b.link}</p>
            </div>

            {/* Card footer */}
            <div className="bp__card-footer">
              <span className="bp__card-date">{b.created}</span>
              <div className="bp__card-actions">
                {/* Toggle */}
                <button
                  className={`bp__toggle ${b.status === "Active" ? "on" : "off"}`}
                  onClick={() => handleToggle(b.id)}
                  title="Toggle status"
                >
                  <span className="bp__toggle-knob" />
                </button>
                {/* Edit */}
                <button className="bp__icon-btn edit" onClick={() => handleEdit(b)} title="Edit">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </button>
                {/* Delete */}
                <button className="bp__icon-btn del" onClick={() => handleDelete(b.id)} title="Delete">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox preview */}
      {preview && (
        <div className="bp__lightbox" onClick={() => setPreview(null)}>
          <div className="bp__lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="bp__lightbox-close" onClick={() => setPreview(null)}>✕</button>
            {preview.image && <img src={preview.image} alt={preview.title} className="bp__lightbox-img" />}
            <div className="bp__lightbox-info">
              <p className="bp__lightbox-title">{preview.title}</p>
              <p className="bp__lightbox-sub">{preview.subtitle}</p>
              <a className="bp__lightbox-link" href={preview.link} target="_blank" rel="noreferrer">{preview.link}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;