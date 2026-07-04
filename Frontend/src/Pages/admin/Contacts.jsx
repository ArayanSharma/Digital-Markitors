import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Trash2,
  Mail,
  User,
  X,
  Check,
  Edit,
  ArrowLeft,
  Plus,
  Phone,
  Calendar,
  Compass,
  ArrowRight,
  TrendingUp,
  Inbox
} from "lucide-react";
import { loadStoredContacts } from "../../utils/appStorage";
import Modal from "../../Components/admin/ui/Modal";
import {
  TextInput,
  TextArea,
  SelectInput,
  PrimaryButton,
  SecondaryButton,
  DangerButton
} from "../../Components/admin/sections/common/FormKit";

export default function Contacts() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  
  // Modals
  const [editContact, setEditContact] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
    setCurrentPage(1);
  }, [search, contacts]);

  const startEdit = (contact) => {
    setEditContact({ ...contact });
    setStatus("");
  };

  const cancelEdit = () => {
    setEditContact(null);
    setStatus("");
  };

  const saveContact = async (e) => {
    e.preventDefault();
    if (!editContact?._id) return;

    setStatus("saving");
    try {
      const res = await fetch(
        `http://localhost:5000/api/contact/${editContact._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editContact),
        }
      );

      if (!res.ok) throw new Error("Save failed");

      const updated = await res.json();
      setContacts((prev) =>
        prev.map((item) =>
          item._id === updated.contact._id ? updated.contact : item
        )
      );
      setSuccessMessage("Enquiry updated successfully.");
      setEditContact(null);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const createContact = async (e) => {
    e.preventDefault();
    setStatus("saving");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact)
      });
      if (!res.ok) throw new Error("Creation failed");
      
      const created = await res.json();
      setContacts((prev) => [created.contact, ...prev]);
      setNewContact({ name: "", email: "", phone: "", service: "", message: "" });
      setIsCreateOpen(false);
      setSuccessMessage("Enquiry created successfully.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
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
        setSuccessMessage("Enquiry removed.");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Pagination helper
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContacts = filteredContacts.slice(startIndex, startIndex + itemsPerPage);

  const getServiceBadgeClass = (service) => {
    const s = (service || "").toLowerCase();
    if (s.includes("seo")) {
      return "bg-blue-50 text-blue-600 border border-blue-100";
    } else if (s.includes("web") || s.includes("dev")) {
      return "bg-purple-50 text-purple-600 border border-purple-100";
    } else if (s.includes("social") || s.includes("market") || s.includes("listen")) {
      return "bg-emerald-50 text-emerald-600 border border-emerald-100";
    }
    return "bg-amber-50 text-amber-600 border border-amber-100";
  };

  return (
    <div className="space-y-6 px-4 md:px-8 text-slate-800 pb-16 adm-fade-in max-w-7xl mx-auto">
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
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="hover:text-slate-600 transition-colors cursor-pointer" onClick={() => navigate("/admin")}>Dashboard</span>
            <span>/</span>
            <span className="text-blue-600 font-extrabold">Enquiries</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">Contact Enquiries</h1>
        </div>

        <button
          onClick={() => setIsCreateOpen(true)}
          className="h-10 px-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer text-xs uppercase tracking-wider"
        >
          <Plus size={14} />
          Create
        </button>
      </div>

      {/* Stats and Search grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Statistics Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.02)] flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
            <Mail size={20} />
          </div>
          <div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Total Enquiries</span>
            <h2 className="text-2xl font-extrabold text-slate-950 mt-1.5 leading-none">{contacts.length}</h2>
          </div>
        </div>

        {/* Modern Search Field */}
        <div className="md:col-span-2 relative flex items-center h-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-full min-h-[68px] pl-12 pr-10 rounded-2xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/5 transition-all text-sm placeholder-slate-450 bg-white shadow-sm hover:border-slate-350"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-450 hover:text-slate-650"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Main Table Wrapper */}
      <div className="adm-card overflow-hidden">
        {loading ? (
          <div className="text-center py-16 text-slate-400 font-semibold animate-pulse">
            Loading Contacts...
          </div>
        ) : paginatedContacts.length === 0 ? (
          /* Premium Empty State */
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="w-20 h-20 bg-blue-50/50 rounded-full flex items-center justify-center mb-4 text-blue-500">
              <Inbox size={32} />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">No contact enquiries found</h3>
            <p className="text-xs font-semibold text-slate-400 max-w-sm mb-6">
              There are no contact enquiries to display.
            </p>
            <button
              onClick={() => setIsCreateOpen(true)}
              className="h-10 px-5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all duration-250 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
            >
              <Plus size={14} /> Create Enquiry
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="adm-stagger">
                {paginatedContacts.map((contact) => (
                  <tr
                    key={contact._id}
                    className="cursor-pointer group"
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-sm">
                          {contact.name ? contact.name.charAt(0).toUpperCase() : "?"}
                        </div>
                        <div>
                          <span className="block text-sm font-semibold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                            {contact.name}
                          </span>
                          <span className="text-xs text-slate-400 font-medium mt-0.5 block">Customer</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                        <Mail size={14} className="text-slate-400" />
                        <span>{contact.email}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
                        <Phone size={14} className="text-slate-400" />
                        <span>{contact.phone}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${getServiceBadgeClass(contact.service)}`}>
                        {contact.service || "General"}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 text-sm text-slate-500 font-semibold">
                        <Calendar size={14} className="text-slate-400" />
                        <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); startEdit(contact); }}
                          className="adm-icon-btn"
                          title="Edit"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); deleteContact(contact._id); }}
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

        {/* Pagination footer */}
        {!loading && (
          <div className="bg-white border-t border-slate-100 px-6 py-4 flex items-center justify-end gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Page</span>
            <input
              type="text"
              value={currentPage}
              readOnly
              className="w-8 h-8 rounded border border-slate-200 text-center text-slate-800 font-bold bg-slate-50 outline-none"
            />
            <span>of {totalPages || 1}</span>
          </div>
        )}
      </div>

      {/* Create Modal */}
      <Modal open={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create New Enquiry">
        <form onSubmit={createContact} className="space-y-4 p-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Name</label>
            <TextInput
              icon={User}
              type="text"
              required
              placeholder="e.g. John Doe"
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Email</label>
              <TextInput
                icon={Mail}
                type="email"
                required
                placeholder="e.g. john@example.com"
                value={newContact.email}
                onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Phone</label>
              <TextInput
                icon={Phone}
                type="tel"
                required
                placeholder="Numbers only"
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value.replace(/[^0-9]/g, "") })}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Service</label>
            <SelectInput
              icon={Compass}
              value={newContact.service}
              onChange={(e) => setNewContact({ ...newContact, service: e.target.value })}
              options={[
                { label: "Choose Service", value: "" },
                { label: "SEO Services", value: "SEO" },
                { label: "Web Development", value: "Web Development" },
                { label: "Social Media Marketing", value: "Social Media Marketing" }
              ]}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Message</label>
            <TextArea
              required
              placeholder="Enquiry message..."
              value={newContact.message}
              onChange={(e) => setNewContact({ ...newContact, message: e.target.value })}
              rows={4}
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <SecondaryButton onClick={() => setIsCreateOpen(false)}>
              Cancel
            </SecondaryButton>
            <PrimaryButton type="submit" loading={status === "saving"}>
              Create Enquiry
            </PrimaryButton>
          </div>
        </form>
      </Modal>

      {/* Edit Modal */}
      <Modal open={!!editContact} onClose={cancelEdit} title="Edit Contact Info">
        {editContact && (
          <form onSubmit={saveContact} className="space-y-4 p-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Name</label>
              <TextInput
                icon={User}
                type="text"
                required
                value={editContact.name || ""}
                onChange={(e) => setEditContact({ ...editContact, name: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Email</label>
                <TextInput
                  icon={Mail}
                  type="email"
                  required
                  value={editContact.email || ""}
                  onChange={(e) => setEditContact({ ...editContact, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Phone</label>
                <TextInput
                  icon={Phone}
                  type="tel"
                  required
                  value={editContact.phone || ""}
                  onChange={(e) => setEditContact({ ...editContact, phone: e.target.value.replace(/[^0-9]/g, "") })}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Service Requested</label>
              <SelectInput
                icon={Compass}
                value={editContact.service || ""}
                onChange={(e) => setEditContact({ ...editContact, service: e.target.value })}
                options={[
                  { label: "Choose Service", value: "" },
                  { label: "SEO Services", value: "SEO" },
                  { label: "Web Development", value: "Web Development" },
                  { label: "Social Media Marketing", value: "Social Media Marketing" }
                ]}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Message</label>
              <TextArea
                required
                value={editContact.message || ""}
                onChange={(e) => setEditContact({ ...editContact, message: e.target.value })}
                rows={4}
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <SecondaryButton onClick={cancelEdit}>
                Close
              </SecondaryButton>
              <PrimaryButton type="submit" loading={status === "saving"}>
                Save Changes
              </PrimaryButton>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}