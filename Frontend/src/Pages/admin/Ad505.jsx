 import React, { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function ServiceUnavailableForm() {
  const [formData, setFormData] = useState({
    statusCode: "503",
    title: "Service Unavailable",
    message: "The server is temporarily busy, try again later!",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  // Fetch existing data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API}/api/page505`);
        if (res.ok) {
          const data = await res.json();
          setFormData({
            statusCode: data.statusCode || "503",
            title: data.title || "Service Unavailable",
            message: data.message || "The server is temporarily busy, try again later!",
          });
        }
      } catch (err) {
        console.error("Failed to fetch Page505 data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg("");
    try {
      const res = await fetch(`${API}/api/page505`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSaveMsg("Saved successfully!");
      } else {
        setSaveMsg("Failed to save.");
      }
    } catch (err) {
      console.error("Failed to save Page505 data:", err);
      setSaveMsg("Error saving data.");
    } finally {
      setSaving(false);
      setTimeout(() => setSaveMsg(""), 2500);
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <p style={{ textAlign: "center", color: "#9ca3af" }}>Loading…</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>503 Service Unavailable Page</h2>

      <div style={styles.formGroup}>
        <label style={styles.label}>Status Code</label>
        <input
          type="text"
          name="statusCode"
          value={formData.statusCode}
          onChange={handleChange}
          placeholder="503"
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Page Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Service Unavailable"
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="The server is temporarily busy, try again later!"
          rows={4}
          style={styles.textarea}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button style={styles.button} onClick={handleSave} disabled={saving}>
          {saving ? "Saving…" : "Save Changes"}
        </button>
        {saveMsg && (
          <span style={{ fontSize: "14px", color: saveMsg.includes("success") ? "#22c55e" : "#ef4444" }}>
            {saveMsg}
          </span>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "24px",
    background: "rgba(24, 24, 27, 0.7)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(124, 58, 237, 0.25)",
    borderRadius: "16px",
    color: "#ffffff",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "24px",
    fontWeight: "600",
    color: "#ffffff",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: "#d1d5db",
  },
  input: {
    width: "100%",
    padding: "11px 14px",
    border: "1.5px solid rgba(124, 58, 237, 0.25)",
    borderRadius: "12px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
    background: "rgba(255, 255, 255, 0.03)",
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    padding: "11px 14px",
    border: "1.5px solid rgba(124, 58, 237, 0.25)",
    borderRadius: "12px",
    fontSize: "15px",
    resize: "vertical",
    outline: "none",
    boxSizing: "border-box",
    background: "rgba(255, 255, 255, 0.03)",
    color: "#ffffff",
  },
  button: {
    padding: "12px 24px",
    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    boxShadow: "0 8px 20px rgba(124, 58, 237, 0.35)",
  },
};