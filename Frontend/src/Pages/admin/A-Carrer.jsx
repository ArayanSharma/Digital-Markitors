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

export default function Career() {
  const [careers, setCareers] = useState([]);
  const [filteredCareers, setFilteredCareers] =
    useState([]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCareers();
  }, []);

const fetchCareers = async () => {
  try {
    const localCareers = loadStoredCareers();
    const res = await fetch(
      "http://localhost:5000/api/career"
    );

    const data = await res.json();

    const serverCareers = Array.isArray(data.careers) ? data.careers : [];
    const mergedCareers = [...localCareers, ...serverCareers].filter(
      (item, index, self) => self.findIndex((entry) => entry._id === item._id) === index
    );

    setCareers(mergedCareers);
    setFilteredCareers(mergedCareers);
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

                  <td>

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