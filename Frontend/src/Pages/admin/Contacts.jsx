import { useEffect, useState } from "react";
import {
  FiSearch,
  FiTrash2,
  FiMail,
  FiUser,
  FiX,
  FiCheck,
  FiEdit,
  FiArrowLeft
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { loadStoredContacts } from "../../utils/appStorage";
import Modal from "../../Components/admin/ui/Modal";

export default function Contacts() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editContact, setEditContact] = useState(null);
  const [editStatus, setEditStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact");
      const data = await res.json();
      const serverContacts = Array.isArray(data.contacts) ? data.contacts : [];
      setContacts(serverContacts);
      setFilteredContacts(serverContacts);
    } catch (err) {
      console.error(err);
      const localContacts = loadStoredContacts();
      setContacts(localContacts);
      setFilteredContacts(localContacts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter((contact) =>
      `${contact.name || ""} ${contact.email || ""} ${contact.phone || ""}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [search, contacts]);

  const startEdit = (contact) => {
    setEditContact({ ...contact });
    setEditStatus("");
  };

  const cancelEdit = () => {
    setEditContact(null);
    setEditStatus("");
  };

  const saveContact = async (e) => {
    e.preventDefault();
    if (!editContact?._id) return;

    setEditStatus("saving");
    try {
      const res = await fetch(
        `http://localhost:5000/api/contact/${editContact._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editContact),
        }
      );

      if (!res.ok) {
        throw new Error("Save failed");
      }

      const updated = await res.json();
      setContacts((prev) =>
        prev.map((item) =>
          item._id === updated.contact._id ? updated.contact : item
        )
      );
      setEditStatus("saved");
      setSuccessMessage("Details changed successfully.");
      setEditContact(null);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setEditStatus("error");
    }
  };

  const deleteContact = async (id) => {
    const confirmDelete = window.confirm("Delete this enquiry?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setContacts((prev) => prev.filter((item) => item._id !== id));
        if (editContact?._id === id) cancelEdit();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6 text-slate-800 animate-[fadeIn_0.4s_ease-out] pb-12 max-w-[1400px] mx-auto px-4 md:px-8 py-8">
      {/* Toast message */}
      {successMessage && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border bg-emerald-50 border-emerald-200 text-emerald-700">
          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
            <FiCheck size={14} />
          </div>
          <span className="text-sm font-semibold">{successMessage}</span>
        </div>
      )}

      {/* Header & Breadcrumb */}
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span className="hover:text-slate-600 cursor-pointer" onClick={() => navigate("/admin")}>Dashboard</span>
            <span>/</span>
            <span className="text-blue-600">Enquiries</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">Contact Enquiries</h1>
        </div>

        <button
          onClick={() => navigate("/admin")}
          className="self-start md:self-auto flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-sm"
        >
          <FiArrowLeft size={16} />
          Back to Dashboard
        </button>
      </div>

      {/* Stats and Search Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Stat card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <FiMail size={22} />
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Total Enquiries</span>
            <h2 className="text-2xl font-bold text-slate-950">{contacts.length}</h2>
          </div>
        </div>

        {/* Search input (occupies remaining columns) */}
        <div className="md:col-span-2 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <FiSearch size={18} />
          </div>
          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400 text-sm bg-white"
          />
        </div>
      </div>

      {/* Edit Modal (using premium form fields) */}
      <Modal open={!!editContact} onClose={cancelEdit} title="Edit Contact Info">
        {editContact && (
          <form onSubmit={saveContact} className="space-y-5 p-4 text-slate-700">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name</label>
              <input
                type="text"
                value={editContact.name || ""}
                onChange={(e) => setEditContact({ ...editContact, name: e.target.value })}
                required
                className="w-full h-11 px-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={editContact.email || ""}
                  onChange={(e) => setEditContact({ ...editContact, email: e.target.value })}
                  required
                  className="w-full h-11 px-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={editContact.phone || ""}
                  onChange={(e) => setEditContact({
                    ...editContact,
                    phone: e.target.value.replace(/[^0-9]/g, ""),
                  })}
                  placeholder="Numbers only"
                  className="w-full h-11 px-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Requested</label>
              <select
                value={editContact.service || ""}
                onChange={(e) => setEditContact({ ...editContact, service: e.target.value })}
                className="w-full h-11 px-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm bg-white"
              >
                <option value="">Choose Service</option>
                <option value="SEO">SEO Services</option>
                <option value="Web Development">Web Development</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
              <textarea
                rows={4}
                value={editContact.message || ""}
                onChange={(e) => setEditContact({ ...editContact, message: e.target.value })}
                required
                className="w-full p-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-sm resize-y"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={cancelEdit}
                className="px-4 py-2 text-sm font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-all"
              >
                {editStatus === "saving" ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Table Card container */}
      <div className="bg-white rounded-2xl border border-slate-200/85 shadow-sm overflow-hidden">
        {loading ? (
          <div className="text-center py-12 text-slate-400 font-semibold animate-pulse">
            Loading Contacts...
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="text-center py-12 text-slate-400 font-semibold">
            No Contacts Found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/75">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredContacts.map((contact) => (
                  <tr key={contact._id} className="hover:bg-slate-50/50 transition-colors duration-150 group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 font-bold text-xs">
                          <FiUser size={14} />
                        </div>
                        <span className="text-sm font-semibold text-slate-800">{contact.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{contact.email}</td>
                    <td className="px-6 py-4 text-sm text-slate-500 font-mono">{contact.phone}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-50 text-blue-600 border border-blue-100">
                        {contact.service || "General"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400 font-semibold">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2.5">
                        <button
                          type="button"
                          onClick={() => startEdit(contact)}
                          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <FiEdit size={15} />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteContact(contact._id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <FiTrash2 size={15} />
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