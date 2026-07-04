import Modal from "../../../Components/admin/ui/Modal";

export default function EditCareerModal({ career, status, onChange, onCancel, onSave }) {
  return (
    <Modal open={!!career} onClose={onCancel} title="Edit Application">
      {career && (
        <form className="space-y-5 p-6" onSubmit={onSave}>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Name
            </label>
            <input
              type="text"
              value={career.name || ""}
              onChange={(e) => onChange({ ...career, name: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition-all focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
                Email
              </label>
              <input
                type="email"
                value={career.email || ""}
                onChange={(e) => onChange({ ...career, email: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition-all focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                required
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
                Phone
              </label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={career.phone || ""}
                onChange={(e) =>
                  onChange({ ...career, phone: e.target.value.replace(/[^0-9]/g, "") })
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition-all focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                placeholder="Numbers only"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Position
            </label>
            <input
              type="text"
              value={career.position || ""}
              onChange={(e) => onChange({ ...career, position: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition-all focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-3">
            <button
              type="button"
              onClick={onCancel}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="cursor-pointer rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700"
            >
              {status === "saving" ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
