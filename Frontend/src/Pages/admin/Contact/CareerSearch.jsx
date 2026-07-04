import { Search, X } from "lucide-react";

export default function CareerSearch({ value, onChange }) {
  return (
    <div className="relative group flex h-full items-center">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 transition-colors group-focus-within:text-blue-600">
        <Search size={18} />
      </div>
      <input
        type="text"
        placeholder="Search candidate by name, email or position..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-full min-h-[58px] w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-10 text-sm shadow-sm placeholder-slate-400 transition-all duration-300 hover:border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
        style={{ paddingLeft: "3rem" }}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 transition-colors hover:text-slate-600"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
