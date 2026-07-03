import { useEffect, useState } from "react";
import {
  Search,
  Trash2,
  Briefcase,
  User,
  Mail,
} from "lucide-react";

import "../../Styles/A-Career.css";
import { loadStoredCareers } from "../../utils/appStorage";
import Modal from "../../Components/admin/ui/Modal";

export default function Career() {
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
    <div className="career-page">

      <div className="career-header">
        <h1>Career Applications</h1>
        <p>
          {careers.length} Total Applications
        </p>
      </div>

      <div className="career-stat-card">

        <div className="career-stat-icon">
          <Briefcase size={22} />
        </div>

        <div>
          <span>Total Applications</span>
          <h2>{careers.length}</h2>
        </div>

      </div>

      <div className="career-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search candidate..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      <Modal open={!!editCareer} onClose={cancelEdit} title="Edit Application">
        {editCareer && (
            <form
              className="career-edit-form"
              onSubmit={saveCareer}
            >
              <div className="form-row">
                <label>Name</label>
                <input
                  type="text"
                  value={editCareer.name || ""}
                  onChange={(e) =>
                    setEditCareer({
                      ...editCareer,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-row">
                <label>Email</label>
                <input
                  type="email"
                  value={editCareer.email || ""}
                  onChange={(e) =>
                    setEditCareer({
                      ...editCareer,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-row">
                <label>Phone</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={editCareer.phone || ""}
                  onChange={(e) =>
                    setEditCareer({
                      ...editCareer,
                      phone: e.target.value.replace(/[^0-9]/g, ""),
                    })
                  }
                  placeholder="Numbers only"
                />
              </div>
              <div className="form-row">
                <label>Position</label>
                <input
                  type="text"
                  value={editCareer.position || ""}
                  onChange={(e) =>
                    setEditCareer({
                      ...editCareer,
                      position: e.target.value,
                    })
                  }
                />
              </div>
              <div className="edit-actions">
                <button type="submit" className="save-btn">
                  {editStatus === "saving"
                    ? "Saving..."
                    : editStatus === "saved"
                    ? "Saved"
                    : "Save Changes"}
                </button>
                {editStatus === "error" && (
                  <span className="error-text">
                    Could not save. Please try again.
                  </span>
                )}
              </div>
            </form>
        )}
      </Modal>

      <div className="career-table-card">

        {loading ? (
          <div className="empty-state">
            Loading Applications...
          </div>
        ) : filteredCareers.length === 0 ? (
          <div className="empty-state">
            No Applications Found
          </div>
        ) : (
          <table>

            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>POSITION</th>
                <th>DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>

              {filteredCareers.map((item) => (
                <tr key={item._id}>

                  <td>
                    <div className="user-cell">
                      <div className="user-avatar">
                        <User size={16} />
                      </div>

                      {item.name}
                    </div>
                  </td>

                  <td>
                    <div className="email-cell">
                      <Mail size={14} />
                      {item.email}
                    </div>
                  </td>

                  <td>
                    <span className="position-badge">
                      {item.position}
                    </span>
                  </td>

                  <td>
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="action-buttons">
                    <button
                      type="button"
                      className="edit-btn"
                      onClick={() => startEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteCareer(item._id)
                      }
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        )}

      </div>

    </div>
  );
}