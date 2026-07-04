import { useRef, useState } from "react";
import {
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  Save,
  Image as ImageIcon,
  Loader2,
  Upload,
  AlertCircle,
  FileText,
  Calendar,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { uploadFile } from "../../../../utils/pageApi";
export const inputCls =
  "w-full bg-white border border-slate-200 rounded-xl px-4 h-[50px] text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all duration-200 hover:border-slate-400";

// Premium form card wrapper
export const FormCard = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,.06)] hover:shadow-[0_18px_45px_rgba(37,99,235,.12)] transition-all duration-300 p-8 mb-6 ${className}`}>
    {children}
  </div>
);

// SectionCard: Collapsible card section with styling (same as footer section head)
export const Section = ({ title, children, open, onToggle, icon: Icon, description }) => {
  const ActiveIcon = Icon || Sparkles;
  return (
    <div className="border border-slate-200 rounded-2xl mb-6 bg-white overflow-hidden shadow-[0_4px_16px_rgba(15,23,42,0.04)] w-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)]">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 hover:bg-slate-50/50 transition-colors border-b border-slate-100"
        style={{ padding: "1.5rem" }}
      >
        <div className="flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
            <ActiveIcon size={22} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base tracking-tight uppercase">
              {title ? title.replace(/^\d+\.\s*/, "") : ""}
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              {description || "Click to expand/collapse this page section."}
            </p>
          </div>
        </div>
        {open ? (
          <ChevronUp size={20} className="text-blue-600" />
        ) : (
          <ChevronDown size={20} className="text-slate-400" />
        )}
      </button>
      {open && (
        <div
          className="adm-section-grid grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 items-start bg-slate-50/20"
          style={{ padding: "2rem" }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const SectionCard = Section;

// Inputs with icons and focus states
export const TextInput = ({ icon: Icon, error, ...props }) => {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <input
        {...props}
        className={`w-full bg-white border ${error ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-slate-200 focus:ring-blue-500/10 focus:border-blue-600"} rounded-xl ${Icon ? "pl-11" : "px-4"} h-[50px] text-sm shadow-sm focus:outline-none focus:ring-4 transition-all duration-200 hover:border-slate-400`}
        style={{ paddingLeft: Icon ? "2.75rem" : "1rem", paddingRight: "1rem" }}
      />
    </div>
  );
};

export const TextArea = ({ icon: Icon, error, rows, ...props }) => {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute top-3 left-0 pl-3.5 flex items-start pointer-events-none text-slate-400">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <textarea
        {...props}
        rows={rows || 4}
        className={`w-full bg-white border ${error ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-slate-200 focus:ring-blue-500/10 focus:border-blue-600"} rounded-xl ${Icon ? "pl-11" : "px-4"} py-3 text-sm shadow-sm focus:outline-none focus:ring-4 transition-all duration-200 hover:border-slate-400 min-h-[140px]`}
        style={{ paddingLeft: Icon ? "2.75rem" : "1rem", paddingRight: "1rem", paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
      />
    </div>
  );
};

export const SelectInput = ({ options = [], icon: Icon, error, ...props }) => {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <select
        {...props}
        className={`w-full bg-white border appearance-none ${error ? "border-red-500 focus:ring-red-500/10 focus:border-red-500" : "border-slate-200 focus:ring-blue-500/10 focus:border-blue-600"} rounded-xl ${Icon ? "pl-11 pr-10" : "pl-4 pr-10"} h-[50px] text-sm shadow-sm focus:outline-none focus:ring-4 transition-all duration-200 hover:border-slate-400`}
      >
        {options.map((opt, i) => (
          <option key={i} value={typeof opt === "object" ? opt.value : opt}>
            {typeof opt === "object" ? opt.label : opt}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
        <ChevronDown size={18} />
      </div>
    </div>
  );
};

export const DateInput = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
        {Icon ? <Icon className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
      </div>
      <input
        type="date"
        {...props}
        className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 h-[50px] text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all duration-200 hover:border-slate-400"
      />
    </div>
  );
};

// Checkbox, Radio, and Switch (iOS toggle)
export const Checkbox = ({ label, checked, onChange, ...props }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className="relative flex items-center justify-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
        className="sr-only"
      />
      <div className={`w-5 h-5 rounded border transition-all duration-200 flex items-center justify-center ${checked ? "bg-blue-600 border-blue-600 shadow-sm" : "bg-white border-slate-300 group-hover:border-slate-400"}`}>
        {checked && (
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </div>
    {label && <span className="text-sm font-medium text-slate-700 select-none">{label}</span>}
  </label>
);

export const Switch = ({ label, checked, onChange, ...props }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className="relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
        className="sr-only"
      />
      <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${checked ? "bg-blue-600" : "bg-slate-200"}`} />
      <div className={`absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-sm transition-transform duration-200 ${checked ? "translate-x-5" : ""}`} />
    </div>
    {label && <span className="text-sm font-medium text-slate-700 select-none">{label}</span>}
  </label>
);

export const Radio = ({ label, checked, onChange, name, value, ...props }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div className="relative flex items-center justify-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
        className="sr-only"
      />
      <div className={`w-5 h-5 rounded-full border transition-all duration-200 flex items-center justify-center ${checked ? "border-blue-600" : "bg-white border-slate-300 group-hover:border-slate-400"}`}>
        {checked && <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-scale-in" />}
      </div>
    </div>
    {label && <span className="text-sm font-medium text-slate-700 select-none">{label}</span>}
  </label>
);

// Buttons
export const PrimaryButton = ({ children, loading, disabled, icon: Icon, onClick, ...props }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled || loading}
    {...props}
    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 text-white text-sm font-semibold h-12 px-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-[1px] active:scale-[0.98] transition-all duration-200 cursor-pointer"
  >
    {loading ? (
      <Loader2 className="w-4 h-4 animate-spin" />
    ) : Icon ? (
      <Icon className="w-4 h-4" />
    ) : null}
    {children}
  </button>
);

export const SecondaryButton = ({ children, icon: Icon, onClick, ...props }) => (
  <button
    type="button"
    onClick={onClick}
    {...props}
    className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold h-12 px-6 rounded-xl shadow-sm hover:-translate-y-[1px] active:scale-[0.98] transition-all duration-200 cursor-pointer"
  >
    {Icon && <Icon className="w-4 h-4 text-slate-500" />}
    {children}
  </button>
);

export const DangerButton = ({ children, icon: Icon, onClick, ...props }) => (
  <button
    type="button"
    onClick={onClick}
    {...props}
    className="inline-flex items-center justify-center gap-2 bg-red-50 border border-red-200 hover:bg-red-100 text-red-600 text-sm font-semibold h-12 px-6 rounded-xl shadow-sm hover:-translate-y-[1px] active:scale-[0.98] transition-all duration-200 cursor-pointer"
  >
    {Icon && <Icon className="w-4 h-4 text-red-600" />}
    {children}
  </button>
);

export const ValidationMessage = ({ message }) => {
  if (!message) return null;
  return (
    <div className="flex items-center gap-1.5 text-xs text-red-600 mt-1 animate-pulse">
      <AlertCircle className="w-3.5 h-3.5" />
      <span>{message}</span>
    </div>
  );
};

export const Field = ({ label, children, full }) => {
  const isFull = full ?? children?.type !== TextInput;
  return (
    <label className={`block ${isFull ? "md:col-span-2" : ""}`} style={{ marginBottom: "1.25rem", display: "block" }}>
      <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider" style={{ marginBottom: "0.5rem", display: "block" }}>
        {label}
      </span>
      {children}
    </label>
  );
};

export const ButtonFields = ({ label, value, onChange }) => (
  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200">
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
  <div className="md:col-span-2 flex items-center justify-between py-2 border-b border-slate-100 mb-2">
    <h4 className="text-sm font-bold text-slate-800 tracking-wide uppercase">{title}</h4>
    <button
      type="button"
      onClick={onAdd}
      className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 px-4.5 py-2 rounded-full transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
    >
      <Plus size={14} /> Add Card
    </button>
  </div>
);

export const RemoveBtn = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors cursor-pointer"
    title="Remove"
  >
    <Trash2 size={16} />
  </button>
);

// Premium Drag-and-Drop Image Uploader with progress bar and success animations
export const ImageInput = ({ label, value, onChange }) => {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handleFile = async (file) => {
    if (!file) return;
    setUploading(true);
    setError("");
    setProgress(15);
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 10 : prev));
    }, 150);

    try {
      const url = await uploadFile(file);
      clearInterval(interval);
      setProgress(100);
      onChange({ target: { value: url } });
    } catch (err) {
      console.error(err);
      setError(err.message || "Upload failed");
    } finally {
      clearInterval(interval);
      setTimeout(() => {
        setUploading(false);
        setProgress(0);
      }, 500);
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
    e.target.value = "";
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <Field label={label}>
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={`relative flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl transition-all duration-300 bg-white ${dragActive
            ? "border-blue-600 bg-blue-50/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
            : "border-slate-200 hover:border-blue-500 hover:bg-slate-50/50"
          }`}
      >
        {value ? (
          <div className="w-full flex flex-col items-center gap-4">
            <div className="relative group w-32 h-32 rounded-xl overflow-hidden border border-slate-200 shadow-md">
              <img src={value} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => onChange({ target: { value: "" } })}
                  className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-transform hover:scale-110 shadow-lg cursor-pointer"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-slate-700 flex items-center justify-center gap-1">
                <CheckCircle size={14} className="text-green-500" />
                Upload Successful
              </p>
              <button
                type="button"
                onClick={() => fileRef.current && fileRef.current.click()}
                className="text-xs text-blue-600 hover:underline mt-1 font-medium cursor-pointer"
              >
                Replace Image
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center cursor-pointer" onClick={() => fileRef.current && fileRef.current.click()}>
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Upload size={20} />
            </div>
            <p className="text-sm font-semibold text-slate-800">
              Drag & drop image here or <span className="text-blue-600 hover:underline">browse</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">Supports PNG, JPG, WEBP, SVG</p>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          onChange={onFileChange}
          className="hidden"
        />

        {uploading && (
          <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-6 rounded-2xl animate-fade-in">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-3" />
            <p className="text-sm font-semibold text-slate-800">Uploading Image...</p>
            <div className="w-48 bg-slate-100 rounded-full h-1.5 mt-3 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
      {error && <span className="block text-xs text-red-500 mt-2 font-medium">{error}</span>}
    </Field>
  );
};

export const FileUploader = ImageInput;
export const ImageUploader = ImageInput;

// Premium custom form header
export const PageHeader = ({ icon: Icon, title, description, breadcrumbs = [], actions = null }) => (
  <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4" style={{ marginBottom: "2rem" }}>
    <div className="flex items-center gap-4">
      {Icon && (
        <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div>
        {breadcrumbs.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1 font-medium">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-slate-300">/</span>}
                <span>{b}</span>
              </span>
            ))}
          </div>
        )}
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{title}</h2>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>
    </div>
    {actions && <div className="flex items-center gap-3">{actions}</div>}
  </div>
);

export const PageStatusBanner = ({ loading, error, onRetry }) => {
  if (!error) return null;
  return (
    <div
      className={`mb-6 rounded-2xl border px-5 py-4 text-sm flex items-center justify-between gap-3 ${error
          ? "border-red-200 bg-red-50 text-red-600"
          : "border-slate-200 bg-slate-50 text-slate-600"
        }`}
    >
      <span className="flex items-center gap-2 font-semibold">
        {loading && <Loader2 size={16} className="animate-spin" />}
        {loading ? "Loading content..." : error}
      </span>
      {error && onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="text-xs font-bold text-red-600 hover:text-red-700 underline shrink-0 cursor-pointer"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export const SaveBar = ({ status, onSave, label = "Save All Changes" }) => (
  <div className="fixed bottom-6 right-8 z-50">
    <button
      type="button"
      onClick={onSave}
      disabled={status === "saving"}
      className="h-[40px] px-10 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:opacity-70 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-[1px] active:scale-[0.98] shadow-sm cursor-pointer"
    >
      {status === "saving" && <Loader2 size={16} className="animate-spin" />}
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
