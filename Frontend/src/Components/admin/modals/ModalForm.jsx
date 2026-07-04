import { useState } from "react";

export default function ModalForm({ isOpen, title, onClose, onSubmit, fields, initialData = {} }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialData);
  };

  const handleClose = () => {
    setFormData(initialData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="bg-bg-card rounded-2xl shadow-2xl max-w-md w-full border border-brand-primary/15">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-primary/10">
          <h2 className="text-lg font-semibold text-brand-primary">{title}</h2>
          <button
            onClick={handleClose}
            type="button"
            className="text-text-muted hover:text-brand-primary transition-colors text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4  bg-amber-900 ">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder || ""}
                  rows={field.rows || 3}
                  className="w-full px-3.5 py-2.5 bg-white border border-brand-primary/20 rounded-2xl text-text-primary placeholder-text-muted shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors resize-none"
                />
              ) : field.type === "checkbox" ? (
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name={field.name}
                    checked={formData[field.name] || false}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-brand-primary/25 text-brand-primary focus:ring-brand-primary/30"
                  />
                  <span className="text-sm text-text-secondary">{field.checkboxLabel}</span>
                </div>
              ) : (
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder || ""}
                  
                  className="w-full px-3.5 py-2.5 bg-white border border-brand-primary/20 rounded-2xl text-text-primary placeholder-text-muted shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
                />
              )}
              {field.hint && <p className="text-xs text-text-muted mt-1">{field.hint}</p>}
            </div>
          ))}

          {/* Actions */}
          <div className="flex gap-2 pt-4 border-t border-brand-primary/10">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2.5 rounded-2xl text-brand-primary hover:bg-brand-primary/5 border border-brand-primary/25 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 rounded-2xl bg-brand-primary text-white hover:bg-brand-secondary transition-colors font-medium shadow-sm"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
