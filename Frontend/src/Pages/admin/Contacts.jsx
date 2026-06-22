import { useEffect, useState } from "react";
import {
  Search,
  Trash2,
  Mail,
  Phone,
  User,
  MoreVertical,
} from "lucide-react";

import "../../Styles/Contact.css";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

const fetchContacts = async () => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/contact"
    );

    const data = await res.json();

    console.log("CONTACT API:", data);

    setContacts(data.contacts || []);
    setFilteredContacts(data.contacts || []);

  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchContacts();
  }, []);

useEffect(() => {
  const filtered = contacts.filter((contact) =>
    `${contact.name} ${contact.email} ${contact.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  setFilteredContacts(filtered);
}, [search, contacts]);

  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this enquiry?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/contact/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setContacts((prev) =>
          prev.filter((item) => item._id !== id)
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="contacts-page">

      <div className="contacts-header">
        <h1>Contact Enquiries</h1>
        <p>
          {contacts.length} Total Contacts
        </p>
      </div>

      <div className="contact-stat-card">

        <div className="contact-stat-icon">
          <Mail size={22} />
        </div>

        <div>
          <span>Total Enquiries</span>
          <h2>{contacts.length}</h2>
        </div>

      </div>

      <div className="contact-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search by name, email or phone..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="contact-table-card">

        {loading ? (
          <div className="empty-state">
            Loading Contacts...
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="empty-state">
            No Contacts Found
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>SERVICE</th>
                <th>DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {Array.isArray(filteredContacts) &&
              filteredContacts.map((contact) => (
              
                <tr key={contact._id}>

                  <td>
                    <div className="user-cell">
                      <div className="user-avatar">
                        <User size={16} />
                      </div>

                      {contact.name}
                    </div>
                  </td>

                  <td>{contact.email}</td>

                  <td>{contact.phone}</td>

                  <td>
                    <span className="service-badge">
                      {contact.service}
                    </span>
                  </td>

                  <td>
                    {new Date(
                      contact.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteContact(
                          contact._id
                        )
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