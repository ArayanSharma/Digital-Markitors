import { useRef, useState } from "react";
import {
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  Save,
  Image as ImageIcon,
  Loader2,
} from "lucide-react";
import { uploadFile } from "../../../../utils/pageApi";

export const inputCls =
  "w-full bg-white border border-brand-primary/20 rounded-2xl px-3.5 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors";

export const Section = ({ title, children, open, onToggle }) => (
  <div className="border border-brand-primary/15 rounded-2xl mb-5 bg-bg-card overflow-hidden shadow-sm w-full">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between px-5 py-4 bg-bg-secondary hover:bg-brand-primary/5 transition-colors"
    >
      <span className="font-semibold text-brand-primary text-sm tracking-wide uppercase">
        {title}
      </span>
      {open ? (
        <ChevronUp size={18} className="text-brand-primary" />
      ) : (
        <ChevronDown size={18} className="text-text-muted" />
      )}
    </button>
    {open && (
      <div className="adm-section-grid p-5 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 items-start">
        {children}
      </div>
    )}
  </div>
);

export const TextInput = (props) => {
  const { required, ...rest } = props;
  return <input {...rest} className={inputCls} />;
};

export const TextArea = (props) => {
  const { required, rows, ...rest } = props;
  return <textarea {...rest} rows={rows || 3} className={inputCls} />;
};

// Short atomic inputs (a bare TextInput) sit at half width on desktop so two
// can share a row; anything richer (textarea, custom composite content) spans
// the full row so it never gets squeezed into a half-width column.
export const Field = ({ label, children, full }) => {
  const isFull = full ?? children?.type !== TextInput;
  return (
    <label className={`block ${isFull ? "md:col-span-2" : ""}`}>
      <span className="block text-xs font-medium text-text-muted mb-1">
        {label}
      </span>
      {children}
    </label>
  );
};

export const ButtonFields = ({ label, value, onChange }) => (
  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-bg-secondary rounded-2xl border border-brand-primary/15">
    <Field label={`${label} — Text`} full={false}>
      <TextInput
        type="text"
        value={value?.text || ""}
        onChange={(e) => onChange({ ...value, text: e.target.value })}
      />
    </Field>
    <Field label={`${label} — Link`} full={false}>
      <TextInput
        type="text"
        placeholder="/path or https://..."
        value={value?.link || ""}
        onChange={(e) => onChange({ ...value, link: e.target.value })}
      />
    </Field>
  </div>
);

export const CardListHeader = ({ title, onAdd }) => (
  <div className="md:col-span-2 flex items-center justify-between">
    <h4 className="text-sm font-semibold text-text-secondary">{title}</h4>
    <button
      type="button"
      onClick={onAdd}
      className="flex items-center gap-1 text-xs font-medium text-brand-primary hover:text-white bg-brand-primary/10 hover:bg-brand-primary px-3 py-1.5 rounded-full transition-colors"
    >
      <Plus size={14} /> Add Card
    </button>
  </div>
);

export const RemoveBtn = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-text-muted hover:text-red-500 transition-colors"
    title="Remove"
  >
    <Trash2 size={16} />
  </button>
);

export const ImageInput = ({ label, value, onChange }) => {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (file) => {
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const url = await uploadFile(file);
      onChange({ target: { value: url } });
    } catch (err) {
      console.error(err);
      setError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
    e.target.value = "";
  };

  return (
    <Field label={label}>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl border border-brand-primary/25 bg-bg-secondary flex items-center justify-center overflow-hidden shrink-0">
          {value ? (
            <img src={value} alt="" className="w-full h-full object-cover" />
          ) : (
            <ImageIcon size={18} className="text-text-muted" />
          )}
        </div>
        <div className="flex items-center gap-2 flex-1">
          {/* hide the text input; only provide upload control (no filename shown) */}
          <input
            type="file"
            accept="image/*"
            ref={fileRef}
            onChange={onFileChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileRef.current && fileRef.current.click()}
            disabled={uploading}
            className="px-3 py-2 bg-bg-secondary rounded-md border border-brand-primary/25 text-sm text-text-secondary hover:bg-bg-card disabled:opacity-60 shrink-0"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
      {error && <span className="block text-xs text-red-500 mt-1">{error}</span>}
    </Field>
  );
};

export const PageStatusBanner = ({ loading, error, onRetry }) => {
  if (!error) return null;
  return (
    <div
      className={`mb-4 rounded-2xl border px-4 py-3 text-sm flex items-center justify-between gap-3 ${
        error
          ? "border-red-500/30 bg-red-500/10 text-red-400"
          : "border-brand-primary/25 bg-bg-secondary text-text-secondary"
      }`}
    >
      <span className="flex items-center gap-2">
        {loading && <Loader2 size={14} className="animate-spin" />}
        {loading ? "Loading saved content..." : error}
      </span>
      {error && onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="text-xs font-semibold text-red-400 hover:text-red-300 underline shrink-0"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export const SaveBar = ({ status, onSave, label = "Save All Changes" }) => (
  <div className="sticky bottom-0 -mx-4 mt-6 border-t border-brand-primary/25 bg-bg-card/95 backdrop-blur px-4 py-3 flex justify-end shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
    <button
      type="button"
      onClick={onSave}
      disabled={status === "saving"}
      className="flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary disabled:opacity-70 text-white text-sm font-semibold px-6 py-3 rounded-2xl transition-colors"
    >
      <Save size={16} />
      {status === "saving"
        ? "Saving..."
        : status === "saved"
        ? "Saved ✓"
        : status === "error"
        ? "Save failed — Retry"
        : label}
    </button>
  </div>
);
