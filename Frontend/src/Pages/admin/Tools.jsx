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
        <div className="w-16 h-16 rounded-lg border border-brand-primary/25 bg-bg-secondary flex items-center justify-center overflow-hidden shrink-0">
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
  image: "",
  altText: "tool",
};

export default function AdTools() {
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const fetchTools = async () => {
    try {
      const res = await fetch(`${API}/api/tools`);
      const data = await res.json();
      setTools(Array.isArray(data.tools) ? data.tools : []);
    } catch (err) {
      console.error("Failed to load tools:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTools();
  }, [API]);

  const openAdd = () => {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setForm({
      image: item.image || "",
      altText: item.altText || "tool",
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
      const res = await fetch(`${API}/api/tools${editingId ? `/${editingId}` : ""}`, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Save failed: ${res.status}`);
      setStatus("saved");
      cancelEdit();
      await fetchTools();
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this tool?")) return;
    try {
      const res = await fetch(`${API}/api/tools/${id}`, { method: "DELETE" });
      if (res.ok) {
        setTools((prev) => prev.filter((item) => item._id !== id));
        if (editingId === id) cancelEdit();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <PageHeader
        title="Tools"
        subtitle="Create, edit, and delete tool logos shown on the public site."
        action={
          <AdminButton variant="primary" icon={Plus} onClick={openAdd}>
            Add Tool
          </AdminButton>
        }
      />

      <Modal open={modalOpen} onClose={cancelEdit} title={editingId ? "Edit Tool" : "Add New Tool"}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <ImageInput label="Logo" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} api={API} />

          <Field label="Alt Text">
            <TextInput value={form.altText} onChange={(e) => setForm({ ...form, altText: e.target.value })} />
          </Field>

          <AdminButton type="submit" variant="primary" icon={editingId ? Save : Plus} loading={status === "saving"}>
            {status === "saved" ? "Saved ✓" : editingId ? "Update Tool" : "Add Tool"}
          </AdminButton>
        </form>
      </Modal>

      <AdminCard style={{ padding: 20 }}>
        <h2 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
          Tools ({tools.length})
        </h2>

        {loading ? (
          <Skeleton variant="card" count={4} />
        ) : tools.length === 0 ? (
          <EmptyState message="No tools yet." />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 adm-stagger">
            {tools.map((item) => (
              <AdminCard hover key={item._id} className="p-3 flex flex-col items-center gap-2">
                <div className="w-full h-16 rounded-lg border border-brand-primary/20 bg-bg-secondary flex items-center justify-center overflow-hidden">
                  {item.image ? <img src={item.image} alt={item.altText} className="max-w-full max-h-full object-contain" /> : <ImageIcon size={18} className="text-text-muted" />}
                </div>
                <p className="text-xs text-text-muted truncate w-full text-center">{item.altText}</p>
                <div className="flex items-center gap-3">
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
