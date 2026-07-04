import React, { useEffect, useRef, useState } from "react";
import { Plus, Trash2, Pencil, Save, Image as ImageIcon } from "lucide-react";
import Modal from "../../Components/admin/ui/Modal";
import AdminButton from "../../Components/admin/ui/AdminButton";
import AdminCard from "../../Components/admin/ui/AdminCard";
import PageHeader from "../../Components/admin/ui/PageHeader";
import Skeleton from "../../Components/admin/ui/Skeleton";
import EmptyState from "../../Components/admin/ui/EmptyState";

const Field = ({ label, children }) => (
  <label className="block">
    <span className="adm-label">{label}</span>
    {children}
  </label>
);

const inputCls = "adm-input";

const TextInput = (props) => <input {...props} className={inputCls} />;
const TextArea = (props) => <textarea {...props} rows={props.rows || 3} className="adm-textarea" />;

const ImageInput = ({ label, value, onChange, api }) => {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch(`${api}/api/upload`, { method: "POST", body: fd });
      const data = await res.json();
      if (res.ok && data.url) {
        const fullUrl = data.url.startsWith("http") ? data.url : `${api}${data.url}`;
        onChange({ target: { value: fullUrl } });
      } else {
        alert("Upload failed: " + (data.message || JSON.stringify(data)));
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Field label={label}>
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-full border border-brand-primary/25 bg-bg-secondary flex items-center justify-center overflow-hidden shrink-0">
          {value ? <img src={value} alt="Preview" className="w-full h-full object-cover" /> : <ImageIcon size={18} className="text-text-muted" />}
        </div>
        <div className="flex items-center gap-2 flex-1">
          <TextInput type="text" placeholder="Image URL or upload path" value={value || ""} onChange={onChange} />
          <input type="file" accept="image/*" ref={fileRef} className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
          <AdminButton type="button" variant="secondary" onClick={() => fileRef.current && fileRef.current.click()} loading={uploading}>
            Upload
          </AdminButton>
        </div>
      </div>
    </Field>
  );
};

const emptyForm = {
  name: "",
  role: "",
  review: "",
  image: "",
  rating: 5,
};

export default function AdTestimonial() {
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch(`${API}/api/testimonials`);
      const data = await res.json();
      setTestimonials(Array.isArray(data.testimonials) ? data.testimonials : []);
    } catch (err) {
      console.error("Failed to load testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [API]);

  const openAdd = () => {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setForm({
      name: item.name || "",
      role: item.role || "",
      review: item.review || "",
      image: item.image || "",
      rating: item.rating || 5,
    });
    setModalOpen(true);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("saving");
    try {
      const res = await fetch(`${API}/api/testimonials${editingId ? `/${editingId}` : ""}`, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Save failed: ${res.status}`);
      setStatus("saved");
      cancelEdit();
      await fetchTestimonials();
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;
    try {
      const res = await fetch(`${API}/api/testimonials/${id}`, { method: "DELETE" });
      if (res.ok) {
        setTestimonials((prev) => prev.filter((item) => item._id !== id));
        if (editingId === id) cancelEdit();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <PageHeader
        title="Testimonials"
        subtitle="Create, edit, and delete client testimonials shown on the public site."
        action={
          <AdminButton variant="primary" icon={Plus} onClick={openAdd}>
            Add Testimonial
          </AdminButton>
        }
      />

      <Modal open={modalOpen} onClose={cancelEdit} title={editingId ? "Edit Testimonial" : "Add New Testimonial"}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <ImageInput label="Photo" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} api={API} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Name">
              <TextInput required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </Field>
            <Field label="Role / Designation">
              <TextInput value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
            </Field>
          </div>

          <Field label="Rating">
            <select
              className="adm-input bg-bg-secondary text-white border border-brand-primary/25 rounded-2xl w-full px-3 py-2 text-sm focus:outline-none"
              value={form.rating || 5}
              onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
            >
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </select>
          </Field>

          <Field label="Review">
            <TextArea required rows={4} value={form.review} onChange={(e) => setForm({ ...form, review: e.target.value })} />
          </Field>

          <AdminButton type="submit" variant="primary" icon={editingId ? Save : Plus} loading={status === "saving"}>
            {status === "saved" ? "Saved ✓" : editingId ? "Update Testimonial" : "Add Testimonial"}
          </AdminButton>
        </form>
      </Modal>

      <AdminCard style={{ padding: 20 }}>
        <h2 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
          Testimonials ({testimonials.length})
        </h2>

        {loading ? (
          <Skeleton variant="card" count={4} />
        ) : testimonials.length === 0 ? (
          <EmptyState message="No testimonials yet." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 adm-stagger">
            {testimonials.map((item) => (
              <AdminCard hover key={item._id} className="p-4 flex gap-3">
                <div className="w-14 h-14 rounded-full border border-brand-primary/25 bg-bg-secondary flex items-center justify-center overflow-hidden shrink-0">
                  {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> : <ImageIcon size={18} className="text-text-muted" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
                  <p className="text-xs text-text-muted">{item.role}</p>
                  <div className="text-xs text-yellow-400 mt-1">
                    {"★".repeat(item.rating || 5)}{"☆".repeat(5 - (item.rating || 5))}
                  </div>
                  <p className="text-xs text-text-muted line-clamp-2 mt-1">{item.review}</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <button type="button" onClick={() => startEdit(item)} className="adm-icon-btn" title="Edit">
                    <Pencil size={16} />
                  </button>
                  <button type="button" onClick={() => handleDelete(item._id)} className="adm-icon-btn danger" title="Delete">
                    <Trash2 size={16} />
                  </button>
                </div>
              </AdminCard>
            ))}
          </div>
        )}
      </AdminCard>
    </div>
  );
}
