import { useEffect, useState } from "react";
import "../../Styles/AdContact.css";

function AdminContact() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const getContactPhone = (contact) =>
    String(contact.phone || contact.mobile || contact.phoneNumber || "");

  const fetchContacts = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/contact"
      );

      const data = await res.json();

      if (data.success) {
        setContacts(data.contacts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/contact/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        fetchContacts();

        if (selected?._id === id) {
          setSelected(null);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filtered = contacts.filter(
    (contact) =>
      contact.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      contact.email
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      getContactPhone(contact)
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="contact-page">
      <div className="cp__header">
        <div>
          <h1 className="cp__title">
            Contact Enquiries
          </h1>

          <p className="cp__subtitle">
            {contacts.length} Total Contacts
          </p>
        </div>
      </div>

      <div className="cp__toolbar">
        <input
          type="text"
          className="cp__search"
          placeholder="Search by name, email or phone..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="cp__table-wrap">
        <table className="cp__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((contact) => (
                <tr
                  key={contact._id}
                  onClick={() =>
                    setSelected(contact)
                  }
                >
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{getContactPhone(contact) || "N/A"}</td>
                  <td>{contact.service}</td>

                  <td>
                    {new Date(
                      contact.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <button
                      className="cp__del-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(
                          contact._id
                        );
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Contact Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="cp__detail">
          <button
            className="cp__detail-close"
            onClick={() =>
              setSelected(null)
            }
          >
            ✕
          </button>

          <h2>{selected.name}</h2>

          <p>
            <strong>Email:</strong>{" "}
            {selected.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {getContactPhone(selected) || "N/A"}
          </p>

          <p>
            <strong>Service:</strong>{" "}
            {selected.service}
          </p> 

          <p>
            <strong>Website:</strong>{" "}
            {selected.website}
          </p>

          <p>
            <strong>Source:</strong>{" "}
            {selected.source}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>{selected.message}</p>
        </div>
      )}
    </div>
  );
}

export default AdminContact;

