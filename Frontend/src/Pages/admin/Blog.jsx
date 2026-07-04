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
  title: "",
  description: "",
  image: "",
  buttonText: "Read More",
  buttonLink: "/seo-results",
};

const emptySection = {
  description: "An Amazing thought can build a brilliant world.\nHere are some of ours",
  buttonText: "View All Blogs",
  buttonLink: "/seo-results",
};

export default function AdBlog() {
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [section, setSection] = useState(emptySection);
  const [sectionStatus, setSectionStatus] = useState("");

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API}/api/blogs`);
      const data = await res.json();
      setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
    } catch (err) {
      console.error("Failed to load blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSection = async () => {
    try {
      const res = await fetch(`${API}/api/pages/blog`);
      if (!res.ok) return;
      const data = await res.json();
      // data may be the content object; support either direct keys or nested
      const desc = data.description || data.section?.description || data.header?.description;
      const btnText = data.buttonText || data.section?.buttonText || data.header?.buttonText;
      const btnLink = data.buttonLink || data.section?.buttonLink || data.header?.buttonLink;
      setSection({
        description: desc || emptySection.description,
        buttonText: btnText || emptySection.buttonText,
        buttonLink: btnLink || emptySection.buttonLink,
      });
    } catch (err) {
      console.error("Failed to load blog section:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchSection();
  }, [API]);

  const saveSection = async (e) => {
    e && e.preventDefault();
    setSectionStatus("saving");
    try {
      const res = await fetch(`${API}/api/pages/blog`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section }),
      });
      if (!res.ok) throw new Error("Save failed");
      setSectionStatus("saved");
      setTimeout(() => setSectionStatus(""), 1800);
    } catch (err) {
      console.error(err);
      setSectionStatus("error");
    }
  };

  const openAdd = () => {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const startEdit = (blog) => {
    setEditingId(blog._id);
    setForm({
      title: blog.title || "",
      description: blog.description || "",
      image: blog.image || "",
      buttonText: blog.buttonText || "Read More",
      buttonLink: blog.buttonLink || "/seo-results",
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
      const res = await fetch(`${API}/api/blogs${editingId ? `/${editingId}` : ""}`, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Save failed: ${res.status}`);
      setStatus("saved");
      cancelEdit();
      await fetchBlogs();
      setTimeout(() => setStatus(""), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog post?")) return;
    try {
      const res = await fetch(`${API}/api/blogs/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBlogs((prev) => prev.filter((item) => item._id !== id));
        if (editingId === id) cancelEdit();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <PageHeader
        title="Blog"
        subtitle="Create, edit, and delete blog posts shown on the public site."
        action={
          <AdminButton variant="primary" icon={Plus} onClick={openAdd}>
            Add Blog Post
          </AdminButton>
        }
      />



      <Modal open={modalOpen} onClose={cancelEdit} title={editingId ? "Edit Blog Post" : "Add New Blog Post"}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <ImageInput label="Image" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} api={API} />

          <Field label="Title">
            <TextInput required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </Field>

          <Field label="Description">
            <TextArea required rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </Field>



          <AdminButton type="submit" variant="primary" icon={editingId ? Save : Plus} loading={status === "saving"}>
            {status === "saved" ? "Saved ✓" : editingId ? "Update Blog" : "Add Blog"}
          </AdminButton>
        </form>
      </Modal>

      <AdminCard style={{ padding: 20 }}>
        <h2 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
          Blog Posts ({blogs.length})
        </h2>

        {loading ? (
          <Skeleton variant="card" count={4} />
        ) : blogs.length === 0 ? (
          <EmptyState message="No blog posts yet." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 adm-stagger">
            {blogs.map((blog) => (
              <AdminCard hover key={blog._id} className="p-4 flex gap-3">
                <div className="w-16 h-16 rounded-lg border border-brand-primary/25 bg-bg-secondary flex items-center justify-center overflow-hidden shrink-0">
                  {blog.image ? <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" /> : <ImageIcon size={18} className="text-text-muted" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white truncate">{blog.title}</h4>
                  <p className="text-xs text-text-muted line-clamp-2 mt-1">{blog.description}</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <button type="button" onClick={() => startEdit(blog)} className="adm-icon-btn" title="Edit">
                    <Pencil size={16} />
                  </button>
                  <button type="button" onClick={() => handleDelete(blog._id)} className="adm-icon-btn danger" title="Delete">
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
