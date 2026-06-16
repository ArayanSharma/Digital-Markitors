import React, { useState } from "react";
import axios from "axios";
import "../Styles/Career.css";


import CareerImg from "../assets/career.webp";
import CareerBg from "../assets/about2.webp";

export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      alert("Please upload your resume");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("position", formData.position);
      data.append("resume", resume);

      const response = await axios.post(
        "http://localhost:5000/api/career",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

    setMessage("✅ Application submitted successfully!");
setMessageType("success");

setTimeout(() => {
  setMessage("");
}, 3000);


      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
      });

      setResume(null);

      e.target.reset();
    } catch (error) {
      console.error(error);

      setMessage("❌ Failed to submit application");
setMessageType("error");

setTimeout(() => {
  setMessage("");
}, 3000);

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="innerbanner">
        <img src={CareerImg} alt="Career" />

        <div className="abstexttbg">
          <div className="abstextt">
            <div
              className="absheading"
              style={{ color: "#000" }}
            >
              Career
            </div>
          </div>
        </div>
      </section>

      <section className="careerbgs">
        <div className="career-container">
          <div className="career-left">
            <h2>Work with Us, Grow with Us</h2>

            <p>
              We are always in the search of creative,
              enthusiastic, and innovative minds who are as
              crazy as us for all DIGITAL things. If you
              think you have it all, send your updated
              resume to
              <a href="mailto:support@digicore.co.in">
                {" "}
                support@digicore.co.in
              </a>
              .
            </p>

            <p>
              You can also apply by filling out the form
              given here. Our Digital Whizzes will assess
              your profile and capabilities. They will only
              contact you if they find you perfect for our
              team.
            </p>
          </div>

          <div className="career-right">
            <div className="overlay"></div>

            <img
              src={CareerBg}
              alt="Career"
              className="career-img"
            />

            <div className="formbg">
              <h3>Apply Now</h3>
{message && (
  <div
    className={`form-message ${messageType}`}
  >
    {message}
  </div>
)}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your contact number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    name="position"
                    placeholder="Post you want to apply"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "SENDING..." : "SEND"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}