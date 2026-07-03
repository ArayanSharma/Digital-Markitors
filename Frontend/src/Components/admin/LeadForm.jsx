import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Modal from "./ui/Modal";
import { Field, TextInput, TextArea, ImageInput, ButtonFields } from "./sections/common/FormKit";
import { useToast } from "../../context/ToastContext";
import { uid } from "../../utils/uid";

const emptyValueForField = (f) => {
  if (f.type === "multiline") return [];
  if (f.type === "button") return { text: "", link: "" };
  return f.defaultValue ?? "";
};

const emptyFromFields = (fields) =>
  fields.reduce((acc, f) => ({ ...acc, [f.name]: emptyValueForField(f) }), {});

/**
 * Reusable "repeatable card" editor for admin page sections (stats, industries,
 * FAQs, plans, case studies, etc). Renders existing cards in a grid, and
 * adds/edits a card through a modal instead of an inline always-expanded form.
 *
 * Field types: "text" (default), "textarea", "image", "multiline" (array of
 * strings edited as one newline-separated textarea), "button" (a {text, link}
 * pair via FormKit's ButtonFields).
 *
 * Editing is tracked by array index, not by item.id, so it works whether or
 * not the underlying array items carry a stable id. New cards are always
 * assigned one via uid().
 *
 * Singleton fields (hero title, single images, etc.) stay on FormKit's
 * Section/Field/TextInput directly — LeadForm only owns the repeating-card part.
 */
export default function LeadForm({
  title,
  items,
  onChange,
  fields,
  addLabel,
  emptyMessage = 'No cards yet — click "Add Card" to create the first one.',
  getCardTitle,
  getCardSubtitle,
}) {
  const showToast = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [draft, setDraft] = useState(() => emptyFromFields(fields));

  const captionFields = fields.filter((f) => f.type === "text" || f.type === "textarea");
  const titleFieldName = captionFields[0]?.name;
  const subtitleFieldName = captionFields[1]?.name;
  const imageField = fields.find((f) => f.type === "image");

  const openAdd = () => {
    setEditingIndex(null);
    setDraft(emptyFromFields(fields));
    setModalOpen(true);
  };

  const openEdit = (item, index) => {
    setEditingIndex(index);
    setDraft({ ...emptyFromFields(fields), ...item });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const setField = (name, value) => setDraft((prev) => ({ ...prev, [name]: value }));

  const handleSaveCard = (e) => {
    e?.preventDefault?.();
    if (editingIndex !== null) {
      onChange(items.map((item, idx) => (idx === editingIndex ? { ...draft } : item)));
      showToast(`${title} card updated`);
    } else {
      onChange([...items, { id: uid(), ...draft }]);
      showToast(`${title} card added`);
    }
    setModalOpen(false);
  };

  const handleDelete = (index, cardTitle) => {
    if (!window.confirm("Remove this card?")) return;
    onChange(items.filter((_, idx) => idx !== index));
    showToast(`${cardTitle || "Card"} removed`);
  };

  return (
    <div className="md:col-span-2 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-text-secondary">{title}</h4>
        <button
          type="button"
          onClick={openAdd}
          className="flex items-center gap-1 text-xs font-medium text-brand-primary hover:text-white bg-brand-primary/10 hover:bg-brand-primary px-3 py-1.5 rounded-full transition-colors"
        >
          <Plus size={14} /> {addLabel || "Add Card"}
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-xs text-text-muted italic px-1">{emptyMessage}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 adm-stagger">
          {items.map((item, index) => {
            const cardTitle = getCardTitle
              ? getCardTitle(item, index)
              : item[titleFieldName] || `Card ${index + 1}`;
            const cardSubtitle = getCardSubtitle ? getCardSubtitle(item) : item[subtitleFieldName];
            return (
              <div key={item.id ?? index} className="adm-card adm-card-hover p-4 flex gap-3">
                {imageField && (
                  <div className="w-11 h-11 rounded-xl border border-brand-primary/25 bg-bg-secondary flex items-center justify-center overflow-hidden shrink-0">
                    {item[imageField.name] ? (
                      <img src={item[imageField.name]} alt="" className="w-full h-full object-cover" />
                    ) : null}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-brand-primary truncate">{cardTitle || "Untitled"}</p>
                  {cardSubtitle && (
                    <p className="text-xs text-text-muted mt-1 line-clamp-2">{cardSubtitle}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => openEdit(item, index)}
                    className="adm-icon-btn"
                    aria-label={`Edit ${cardTitle || "card"}`}
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(index, cardTitle)}
                    className="adm-icon-btn danger"
                    aria-label={`Remove ${cardTitle || "card"}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Modal
        open={modalOpen}
        onClose={closeModal}
        title={`${editingIndex !== null ? "Edit" : "Add"} ${title} Card`}
        footer={
          <div className="flex justify-end gap-2 w-full">
            <button type="button" onClick={closeModal} className="adm-btn adm-btn-secondary">
              Cancel
            </button>
            <button type="button" onClick={handleSaveCard} className="adm-btn adm-btn-primary">
              {editingIndex !== null ? "Save Changes" : "Add Card"}
            </button>
          </div>
        }
      >
        <div id="lead-form-card" className="space-y-4">
          {fields.map((f) => {
            if (f.type === "image") {
              return (
                <ImageInput
                  key={f.name}
                  label={f.label}
                  value={draft[f.name]}
                  onChange={(e) => setField(f.name, e.target.value)}
                />
              );
            }
            if (f.type === "button") {
              return (
                <ButtonFields
                  key={f.name}
                  label={f.label}
                  value={draft[f.name]}
                  onChange={(v) => setField(f.name, v)}
                />
              );
            }
            if (f.type === "multiline") {
              return (
                <Field key={f.name} label={f.label}>
                  <TextArea
                    rows={f.rows || 4}
                    value={(draft[f.name] || []).join("\n")}
                    onChange={(e) => setField(f.name, e.target.value.split(/\r?\n/).filter(Boolean))}
                    placeholder={f.placeholder || "One item per line"}
                  />
                </Field>
              );
            }
            return (
              <Field key={f.name} label={f.label}>
                {f.type === "textarea" ? (
                  <TextArea
                    rows={f.rows || 3}
                    value={draft[f.name] || ""}
                    onChange={(e) => setField(f.name, e.target.value)}
                    placeholder={f.placeholder}
                  />
                ) : (
                  <TextInput
                    type="text"
                    value={draft[f.name] || ""}
                    onChange={(e) => setField(f.name, e.target.value)}
                    placeholder={f.placeholder}
                  />
                )}
              </Field>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
