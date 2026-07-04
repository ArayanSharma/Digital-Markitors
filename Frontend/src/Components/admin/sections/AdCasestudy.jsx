import React, { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import { ImageInput } from "./common/FormKit";
import "../../../Styles/AdminForm.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

const emptyForm = {
  title: "",
  slug: "",
  shortDescription: "",
  fullDescription: "",
  coverImage: "",
  clientName: "",
  category: "",
  technologies: [],
  challenge: "",
  solution: "",
  result: "",
  galleryImages: [],
  featured: false,
  active: true,
  sortOrder: 0,
};

export default function AdCasestudy() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [techInput, setTechInput] = useState("");
  const [coverUploading, setCoverUploading] = useState(false);
  const [galleryUploading, setGalleryUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const fetchCaseStudies = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API}/api/casestudies`);
      if (!res.ok) throw new Error(`Failed to load case studies (${res.status})`);
      const data = await res.json();
      setCaseStudies(Array.isArray(data.caseStudies) ? data.caseStudies : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load case studies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const filteredCaseStudies = caseStudies.filter((item) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.title?.toLowerCase().includes(term) ||
      item.clientName?.toLowerCase().includes(term) ||
      item.category?.toLowerCase().includes(term) ||
      item.shortDescription?.toLowerCase().includes(term)
    );
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const uploadImage = async (file) => {
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch(`${API}/api/upload`, { method: "POST", body: fd });
    const data = await res.json();
    if (!res.ok || !data.url) {
      throw new Error(data.message || "Upload failed");
    }
    return data.url.startsWith("http") ? data.url : `${API}${data.url}`;
  };

  const handleCoverImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setCoverUploading(true);
    try {
      const url = await uploadImage(file);
      setFormData((prev) => ({ ...prev, coverImage: url }));
      if (errors.coverImage) {
        setErrors((prev) => ({ ...prev, coverImage: "" }));
      }
    } catch (err) {
      console.error(err);
      setError("Cover image upload failed. Please try again.");
    } finally {
      setCoverUploading(false);
    }
  };

  const handleGalleryImagesChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setGalleryUploading(true);
    try {
      const urls = await Promise.all(files.map((file) => uploadImage(file)));
      setFormData((prev) => ({
        ...prev,
        galleryImages: [...prev.galleryImages, ...urls],
      }));
    } catch (err) {
      console.error(err);
      setError("Gallery image upload failed. Please try again.");
    } finally {
      setGalleryUploading(false);
    }
  };

  const removeGalleryImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((_, i) => i !== index),
    }));
  };

  const addTechnology = () => {
    const value = techInput.trim();
    if (!value) return;
    setFormData((prev) => ({
      ...prev,
      technologies: [...prev.technologies, value],
    }));
    setTechInput("");
  };

  const removeTechnology = (index) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.shortDescription.trim())
      newErrors.shortDescription = "Short description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSaving(true);
    setError("");
    try {
      const payload = { ...formData, sortOrder: Number(formData.sortOrder) || 0 };
      const res = await fetch(
        `${API}/api/casestudies${editingId ? `/${editingId}` : ""}`,
        {
          method: editingId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Save failed");

      showMessage(
        editingId
          ? "Case study updated successfully!"
          : "Case study added successfully!"
      );
      closeModal();
      await fetchCaseStudies();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to save case study. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const openAddModal = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setErrors({});
    setTechInput("");
    setIsModalOpen(true);
  };

  const openEditModal = (caseStudy) => {
    setFormData({
      title: caseStudy.title || "",
      slug: caseStudy.slug || "",
      shortDescription: caseStudy.shortDescription || "",
      fullDescription: caseStudy.fullDescription || "",
      coverImage: caseStudy.coverImage || "",
      clientName: caseStudy.clientName || "",
      category: caseStudy.category || "",
      technologies: caseStudy.technologies || [],
      challenge: caseStudy.challenge || "",
      solution: caseStudy.solution || "",
      result: caseStudy.result || "",
      galleryImages: caseStudy.galleryImages || [],
      featured: !!caseStudy.featured,
      active: caseStudy.active !== false,
      sortOrder: caseStudy.sortOrder || 0,
    });
    setEditingId(caseStudy._id);
    setErrors({});
    setTechInput("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData(emptyForm);
    setEditingId(null);
    setErrors({});
    setTechInput("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this case study?")) return;
    try {
      const res = await fetch(`${API}/api/casestudies/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");
      setCaseStudies((prev) => prev.filter((item) => item._id !== id));
      showMessage("Case study deleted successfully!");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to delete case study.");
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      const res = await fetch(`${API}/api/casestudies/${id}/status`, {
        method: "PATCH",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Status update failed");
      setCaseStudies((prev) =>
        prev.map((item) => (item._id === id ? data.caseStudy : item))
      );
      showMessage("Case study status updated!");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to update status.");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <h1>Case Studies Management</h1>
          <p className="admin-subtitle">
            Manage the case study cards shown on your site
          </p>
        </div>
        <button type="button" className="btn-add-new" onClick={openAddModal}>
          + Add Case Study
        </button>
      </div>

      {message && <div className="admin-message">{message}</div>}
      {error && <div className="admin-error">{error}</div>}

      <div className="admin-list">
        <div className="admin-toolbar">
          <h2 style={{ border: "none", padding: 0, margin: 0 }}>
            Case Studies List ({filteredCaseStudies.length})
          </h2>
          <input
            type="text"
            className="admin-search-input"
            placeholder="Search by title, client or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="admin-loading">Loading case studies...</div>
        ) : filteredCaseStudies.length === 0 ? (
          <div className="empty-state">
            <p>
              {searchTerm
                ? "No case studies match your search."
                : 'No case studies yet. Click "Add Case Study" to create one.'}
            </p>
          </div>
        ) : (
          <div className="case-study-list">
            {filteredCaseStudies.map((caseStudy) => (
              <div key={caseStudy._id} className="case-study-item">
                <div className="item-content-with-thumb">
                  <div className="item-content">
                    <span
                      className={`status-badge ${caseStudy.active ? "active" : "inactive"}`}
                    >
                      {caseStudy.active ? "Active" : "Inactive"}
                    </span>
                    <h3>{caseStudy.title}</h3>
                    <p className="image-name">
                      Client: {caseStudy.clientName || "—"} | Category:{" "}
                      {caseStudy.category || "—"} | Sort: {caseStudy.sortOrder}
                    </p>
                    <p className="description-preview">
                      {caseStudy.shortDescription?.substring(0, 100)}
                      {caseStudy.shortDescription?.length > 100 ? "..." : ""}
                    </p>
                  </div>
                </div>
                <div className="item-actions">
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(caseStudy._id)}
                    className="btn-toggle"
                  >
                    {caseStudy.active ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    type="button"
                    onClick={() => openEditModal(caseStudy)}
                    className="btn-edit"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(caseStudy._id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        title={editingId ? "Edit Case Study" : "Add New Case Study"}
      >
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter case study title"
                  className={errors.title ? "input-error" : ""}
                />
                {errors.title && <span className="field-error">{errors.title}</span>}
              </div>

              <div className="form-group">
                <label>Slug (optional, auto-generated from title)</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="e.g. rizaries-seo-case-study"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Client Name</label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    placeholder="Client name"
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="e.g. SEO, PPC"
                  />
                </div>
              </div>



              <div className="form-group">
                <label>Short Description</label>
                <textarea
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  placeholder="Enter a short summary"
                  rows="3"
                  className={errors.shortDescription ? "input-error" : ""}
                />
                {errors.shortDescription && (
                  <span className="field-error">{errors.shortDescription}</span>
                )}
              </div>

              <div className="form-group">
                <label>Full Description</label>
                <textarea
                  name="fullDescription"
                  value={formData.fullDescription}
                  onChange={handleInputChange}
                  placeholder="Enter full description"
                  rows="4"
                />
              </div>

              {/* Blog Image Section */}
              <div className="form-group border border-slate-200 rounded-2xl p-4 bg-slate-50/30">
                <ImageInput
                  label="Blog Image"
                  value={formData.coverImage}
                  onChange={(e) => setFormData((prev) => ({ ...prev, coverImage: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label>Technologies</label>
                <div className="description-input-group">
                  <input
                    type="text"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    placeholder="e.g. Shopify"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addTechnology();
                      }
                    }}
                  />
                  <button type="button" onClick={addTechnology} className="btn-add-description">
                    + Add
                  </button>
                </div>
                {formData.technologies.length > 0 && (
                  <div className="tag-list">
                    {formData.technologies.map((tech, index) => (
                      <span key={index} className="tag-chip">
                        {tech}
                        <button type="button" onClick={() => removeTechnology(index)}>
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>Challenge</label>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  placeholder="Describe the challenge"
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label>Solution</label>
                <textarea
                  name="solution"
                  value={formData.solution}
                  onChange={handleInputChange}
                  placeholder="Describe the solution"
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label>Result</label>
                <textarea
                  name="result"
                  value={formData.result}
                  onChange={handleInputChange}
                  placeholder="Describe the result"
                  rows="3"
                />
              </div>



              <div className="form-row">
                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="featured">Featured</label>
                </div>
                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="active"
                    name="active"
                    checked={formData.active}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="active">Active</label>
                </div>
              </div>

              <div className="form-group">
                <label>Sort Order</label>
                <input
                  type="number"
                  name="sortOrder"
                  value={formData.sortOrder}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit" disabled={saving}>
                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Case Study"
                    : "Add Case Study"}
                </button>
                <button type="button" onClick={closeModal} className="btn-cancel">
                  Cancel
                </button>
              </div>
            </form>
      </Modal>
    </div>
  );
}
