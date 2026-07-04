import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Trash2,
  Briefcase,
  User,
  Mail,
  Edit,
  X,
  Check
} from "lucide-react";

import "../../Styles/A-Career.css";
import { loadStoredCareers } from "../../utils/appStorage";
import Modal from "../../Components/admin/ui/Modal";

export default function Career() {
  const navigate = useNavigate();
  const [careers, setCareers] = useState([]);
  const [filteredCareers, setFilteredCareers] =
    useState([]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [editCareer, setEditCareer] = useState(null);
  const [editStatus, setEditStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchCareers();
  }, []);

const fetchCareers = async () => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/career"
    );

    const data = await res.json();

    const serverCareers = Array.isArray(data.careers) ? data.careers : [];

    setCareers(serverCareers);
    setFilteredCareers(serverCareers);
  } catch (error) {
    console.error(error);
    const localCareers = loadStoredCareers();
    setCareers(localCareers);
    setFilteredCareers(localCareers);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    const filtered = careers.filter((item) =>
      `${item.name} ${item.email} ${item.position}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredCareers(filtered);
  }, [search, careers]);

  const startEdit = (career) => {
    setEditCareer({ ...career });
    setEditStatus("");
  };

  const cancelEdit = () => {
    setEditCareer(null);
    setEditStatus("");
  };

  const saveCareer = async (e) => {
    e.preventDefault();
    if (!editCareer?._id) return;

    setEditStatus("saving");

    try {
      const res = await fetch(
        `http://localhost:5000/api/career/${editCareer._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editCareer),
        }
      );

      if (!res.ok) {
        throw new Error("Save failed");
      }

      const data = await res.json();
      setCareers((prev) =>
        prev.map((item) =>
          item._id === data.career._id ? data.career : item
        )
      );
      setFilteredCareers((prev) =>
        prev.map((item) =>
          item._id === data.career._id ? data.career : item
        )
      );
      setSuccessMessage("Application details updated successfully.");
      setEditStatus("saved");
      setEditCareer(null);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error(error);
      setEditStatus("error");
    }
  };

  const deleteCareer = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this application?"
      );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/career/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setCareers((prev) =>
          prev.filter((item) => item._id !== id)
        );
        setFilteredCareers((prev) =>
          prev.filter((item) => item._id !== id)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-8 px-4 md:px-8 text-slate-800 pb-16 adm-fade-in max-w-7xl mx-auto">
      {/* Toast Notification */}
      {successMessage && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl border bg-emerald-50 border-emerald-200 text-emerald-700 adm-scale-in">
          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
            <Check size={14} className="text-emerald-600" />
          </div>
          <span className="text-sm font-bold">{successMessage}</span>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <span className="hover:text-slate-600 transition-colors cursor-pointer" onClick={() => navigate("/admin")}>Dashboard</span>
            <span>/</span>
            <span className="text-blue-600">Careers</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">Career Applications</h1>
        </div>
      </div>

      {/* Stats and Search grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Statistics Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,.04)] hover:shadow-[0_20px_45px_rgba(37,99,235,.08)] transition-all duration-300 flex items-center gap-5 group relative overflow-hidden">
          <div className="absolute right-0 top-0 -mt-4 -mr-4 w-28 h-28 rounded-full bg-blue-50/20 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <Briefcase size={22} className="group-hover:rotate-6 transition-transform duration-300" />
          </div>
          <div className="flex-1 z-10">
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">Total Applications</span>
            <div className="flex items-baseline gap-2.5 mt-2">
              <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-none">{careers.length}</h2>
            </div>
          </div>
        </div>

        {/* Modern Search Field */}
        <div className="relative group flex items-center h-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors duration-200">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search candidate by name, email or position..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-full min-h-[58px] pl-11 pr-10 rounded-2xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder-slate-400 text-sm bg-white shadow-sm hover:border-slate-350"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <Modal open={!!editCareer} onClose={cancelEdit} title="Edit Application">
        {editCareer && (
          <form className="space-y-5 p-6" onSubmit={saveCareer}>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Name</label>
              <input
                type="text"
                value={editCareer.name || ""}
                onChange={(e) => setEditCareer({ ...editCareer, name: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  value={editCareer.email || ""}
                  onChange={(e) => setEditCareer({ ...editCareer, email: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Phone</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={editCareer.phone || ""}
                  onChange={(e) => setEditCareer({ ...editCareer, phone: e.target.value.replace(/[^0-9]/g, "") })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all"
                  placeholder="Numbers only"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Position</label>
              <input
                type="text"
                value={editCareer.position || ""}
                onChange={(e) => setEditCareer({ ...editCareer, position: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={cancelEdit}
                className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all duration-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 cursor-pointer"
              >
                {editStatus === "saving" ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Main Table Wrapper */}
      <div className="adm-card overflow-hidden">
        {loading ? (
          <div className="text-center py-16 text-slate-400 font-semibold animate-pulse">
            Loading Applications...
          </div>
        ) : filteredCareers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Briefcase size={36} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No Applications Found</h3>
            <p className="text-sm text-slate-500 max-w-sm">
              There are currently no career applications available.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>POSITION</th>
                  <th>DATE</th>
                  <th className="text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="adm-stagger">
                {filteredCareers.map((item) => (
                  <tr key={item._id} className="cursor-pointer group">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-sm">
                          {item.name ? item.name.charAt(0).toUpperCase() : "?"}
                        </div>
                        <div>
                          <span className="block text-sm font-semibold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">Applicant</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Mail size={14} className="text-slate-400" />
                        <span>{item.email}</span>
                      </div>
                    </td>
                    <td>
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-600 border border-purple-100 shadow-sm">
                        {item.position || "General"}
                      </span>
                    </td>
                    <td>
                      <div className="text-sm text-slate-500 font-semibold">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(item)}
                          className="adm-icon-btn"
                          title="Edit"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteCareer(item._id)}
                          className="adm-icon-btn danger"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}