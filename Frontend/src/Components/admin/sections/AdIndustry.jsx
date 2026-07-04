import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../ui/Modal";
import "../../../Styles/AdminForm.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Maps an industry's title to the pageId used by /admin/page-editor/:pageId
// (see Frontend/src/Pages/admin/PageEditor.jsx) for industries that have a
// dedicated page with its own case studies section.
const INDUSTRY_PAGE_EDITOR_MAP = {
  healthcare: "Healthcare",
  "e-commerce": "E-Commerce",
  ecommerce: "E-Commerce",
  b2b: "B2B",
  hospitality: "Hospitality",
  travel: "Travel",
  "financial & professional": "Financial-&-Professional",
  financial: "Financial-&-Professional",
  education: "Education",
};

const getPageEditorId = (industry) =>
  INDUSTRY_PAGE_EDITOR_MAP[(industry.title || "").trim().toLowerCase()];

const emptyForm = {
  title: "",
  slug: "",
  description: "",
  image: "",
  services: [],
  buttonText: "Read More",
  buttonLink: "",
  active: true,
  sortOrder: 0,
};

export default function AdIndustry() {
  const navigate = useNavigate();
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [imageUploading, setImageUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [serviceInput, setServiceInput] = useState("");

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const fetchIndustries = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API}/api/industries`);
      if (!res.ok) throw new Error(`Failed to load industries (${res.status})`);
      const data = await res.json();
      setIndustries(Array.isArray(data.industries) ? data.industries : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load industries. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIndustries();
  }, []);

  const filteredIndustries = industries.filter((item) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.title?.toLowerCase().includes(term) ||
      item.description?.toLowerCase().includes(term)
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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch(`${API}/api/upload`, { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.message || "Upload failed");
      const fullUrl = data.url.startsWith("http") ? data.url : `${API}${data.url}`;
      setFormData((prev) => ({ ...prev, image: fullUrl }));
      if (errors.image) {
        setErrors((prev) => ({ ...prev, image: "" }));
      }
    } catch (err) {
      console.error(err);
      setError("Image upload failed. Please try again.");
    } finally {
      setImageUploading(false);
    }
  };

  const addService = () => {
    const value = serviceInput.trim();
    if (!value) return;
    setFormData((prev) => ({ ...prev, services: [...prev.services, value] }));
    setServiceInput("");
  };

  const removeService = (index) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.image.trim()) newErrors.image = "Image is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
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
        `${API}/api/industries${editingId ? `/${editingId}` : ""}`,
        {
          method: editingId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Save failed");

      showMessage(
        editingId ? "Industry updated successfully!" : "Industry added successfully!"
      );
      closeModal();
      await fetchIndustries();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to save industry. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const openAddModal = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setErrors({});
    setServiceInput("");
    setIsModalOpen(true);
  };

  const openEditModal = (industry) => {
    setFormData({
      title: industry.title || "",
      slug: industry.slug || "",
      description: industry.description || "",
      image: industry.image || "",
      services: industry.services || [],
      buttonText: industry.buttonText || "Read More",
      buttonLink: industry.buttonLink || "",
      active: industry.active !== false,
      sortOrder: industry.sortOrder || 0,
    });
    setEditingId(industry._id);
    setErrors({});
    setServiceInput("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData(emptyForm);
    setEditingId(null);
    setErrors({});
    setServiceInput("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this industry?")) return;
    try {
      const res = await fetch(`${API}/api/industries/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");
      setIndustries((prev) => prev.filter((item) => item._id !== id));
      showMessage("Industry deleted successfully!");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to delete industry.");
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      const res = await fetch(`${API}/api/industries/${id}/status`, {
        method: "PATCH",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Status update failed");
      setIndustries((prev) =>
        prev.map((item) => (item._id === id ? data.industry : item))
      );
      showMessage("Industry status updated!");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to update status.");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <h1>Industries Management</h1>
          <p className="admin-subtitle">
            Manage the industry cards shown on your site
          </p>
        </div>
        <button type="button" className="btn-add-new" onClick={openAddModal}>
          + Add Industry
        </button>
      </div>

      {message && <div className="admin-message">{message}</div>}
      {error && <div className="admin-error">{error}</div>}

      <div className="admin-list">
        <div className="admin-toolbar">
          <h2 style={{ border: "none", padding: 0, margin: 0 }}>
            Industries List ({filteredIndustries.length})
          </h2>
          <input
            type="text"
            className="admin-search-input"
            placeholder="Search by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="admin-loading">Loading industries...</div>
        ) : filteredIndustries.length === 0 ? (
          <div className="empty-state">
            <p>
              {searchTerm
                ? "No industries match your search."
                : 'No industries yet. Click "Add Industry" to create one.'}
            </p>
          </div>
        ) : (
          <div className="case-study-list">
            {filteredIndustries.map((industry) => (
              <div key={industry._id} className="case-study-item">
                <div className="item-content-with-thumb">
                  {industry.image && (
                    <div className="thumb-image">
                      <img src={industry.image} alt={industry.title} />
                    </div>
                  )}
                  <div className="item-content">
                    <span
                      className={`status-badge ${industry.active ? "active" : "inactive"}`}
                    >
                      {industry.active ? "Active" : "Inactive"}
                    </span>
                    <h3>{industry.title}</h3>
                    <p className="image-name">
                      Sort: {industry.sortOrder}
                      {industry.services?.length > 0 &&
                        ` | Services: ${industry.services.length}`}
                    </p>
                    <p className="description-preview">{industry.description}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(industry._id)}
                    className="btn-toggle"
                  >
                    {industry.active ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    type="button"
                    onClick={() => openEditModal(industry)}
                    className="btn-edit"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(industry._id)}
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
        title={editingId ? "Edit Industry" : "Add New Industry"}
      >
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-group">
                <label>Industry Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Healthcare, E-Commerce, Travel"
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
                  placeholder="e.g. healthcare"
                />
              </div>

              <div className="form-group">
                <label>Industry Image</label>
                {formData.image && (
                  <div className="cover-preview">
                    <img src={formData.image} alt="Preview" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={errors.image ? "input-error" : ""}
                />
                {imageUploading && <p className="image-preview">Uploading...</p>}
                {errors.image && <span className="field-error">{errors.image}</span>}
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter industry description"
                  rows="5"
                  className={errors.description ? "input-error" : ""}
                />
                {errors.description && (
                  <span className="field-error">{errors.description}</span>
                )}
              </div>



              <div className="form-row">
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
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-submit" disabled={saving}>
                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Industry"
                    : "Add Industry"}
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
