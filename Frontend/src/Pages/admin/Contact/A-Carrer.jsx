import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

import { loadStoredCareers } from "../../../utils/appStorage";
import CareerStats from "./CareerStats";
import CareerSearch from "./CareerSearch";
import CareerTable from "./CareerTable";
import EditCareerModal from "./EditCareerModal";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Career() {
  const navigate = useNavigate();
  const [careers, setCareers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [editCareer, setEditCareer] = useState(null);
  const [editStatus, setEditStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [newThisWeek, setNewThisWeek] = useState(0);

  const fetchCareers = async () => {
    try {
      const res = await fetch(`${API}/api/career`);
      const data = await res.json();
      setCareers(Array.isArray(data.careers) ? data.careers : []);
    } catch (error) {
      console.error(error);
      setCareers(loadStoredCareers());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  useEffect(() => {
    const weekAgo = Date.now() - 7 * 86400000;
    setNewThisWeek(
      careers.filter((item) => item.createdAt && new Date(item.createdAt).getTime() >= weekAgo)
        .length
    );
  }, [careers]);

  const filteredCareers = useMemo(() => {
    const q = search.toLowerCase();
    return careers.filter((item) =>
      `${item.name} ${item.email} ${item.position}`.toLowerCase().includes(q)
    );
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
      const res = await fetch(`${API}/api/career/${editCareer._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editCareer),
      });

      if (!res.ok) throw new Error("Save failed");

      const data = await res.json();
      setCareers((prev) =>
        prev.map((item) => (item._id === data.career._id ? data.career : item))
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
    if (!window.confirm("Delete this application?")) return;

    try {
      const res = await fetch(`${API}/api/career/${id}`, { method: "DELETE" });
      if (res.ok) {
        setCareers((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 px-4 md:px-8 pt-4 pb-16 max-w-7xl mx-auto adm-fade-in text-slate-800">
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed right-6 top-6 z-50 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3.5 text-emerald-700 shadow-xl"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
              <Check size={14} className="text-emerald-600" />
            </div>
            <span className="text-sm font-bold">{successMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span
              className="cursor-pointer transition-colors hover:text-slate-600"
              onClick={() => navigate("/admin")}
            >
              Dashboard
            </span>
            <span>/</span>
            <span className="text-blue-600">Careers</span>
          </div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Career Applications
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CareerStats total={careers.length} newThisWeek={newThisWeek} />
        </div>
        <CareerSearch value={search} onChange={setSearch} />
      </div>

      <EditCareerModal
        career={editCareer}
        status={editStatus}
        onChange={setEditCareer}
        onCancel={cancelEdit}
        onSave={saveCareer}
      />

      <CareerTable
        careers={filteredCareers}
        loading={loading}
        onEdit={startEdit}
        onDelete={deleteCareer}
      />
    </div>
  );
}
