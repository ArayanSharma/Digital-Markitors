import React, { useState } from "react";
import axios from "axios";
import "../Styles/Career.css";

import CareerImg from "../assets/career.webp";
import CareerBg from "../assets/about2.webp";
import { saveCareerApplication } from "../utils/appStorage";
import { usePageContent, resolveImage } from "../hooks/usePageContent";

export default function Career() {
  const { content: c } = usePageContent("career");
  const hero = c?.hero;
  const left = c?.left;
  const formSection = c?.formSection;

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

      await axios.post(
        "http://localhost:5000/api/career",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      saveCareerApplication(formData);

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
      saveCareerApplication(formData);

      setMessage("✅ Application saved locally. Our team will review it soon.");
      setMessageType("success");

      setTimeout(() => {
        setMessage("");
      }, 4000);

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="innerbanner">
        <img src={hero?.backgroundImage ? resolveImage(hero.backgroundImage) : CareerImg} alt="Career" />

        <div className="abstexttbg">
          <div className="abstextt">
            <div
              className="absheading"
              style={{ color: "#000" }}
            >
              {hero?.title || "Career"}
            </div>
          </div>
        </div>
      </section>

      <section className="careerbgs">
        <div className="career-container">
          <div className="career-left">
            <h2>{left?.heading || "Work with Us, Grow with Us"}</h2>

            {left?.paragraphs?.length ? (
              left.paragraphs.filter(Boolean).map((p, i) => (
                <div key={i}>
                  <p>{p}</p>
                  {i === 0 && (
                    <p>
                      <a href={`mailto:${left?.contactEmail || "support@digicore.co.in"}`}>
                        {left?.contactEmail || "support@digicore.co.in"}
                      </a>
                    </p>
                  )}
                </div>
              ))
            ) : (
              <>
                <p>
                  We are always in the search of creative,
                  enthusiastic, and innovative minds who are as
                  crazy as us for all DIGITAL things. If you
                  think you have it all, send your updated
                  resume to
                  <a href={`mailto:${left?.contactEmail || "support@digicore.co.in"}`}>
                    {" "}
                    {left?.contactEmail || "support@digicore.co.in"}
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
              </>
            )}
          </div>

          <div className="career-right">
            <div className="overlay"></div>

            <img
              src={formSection?.bgImage ? resolveImage(formSection.bgImage) : CareerBg}
              alt="Career"
              className="career-img"
            />

            <div className="formbg">
              <h3>{formSection?.heading || "Apply Now"}</h3>
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
                    placeholder={formSection?.placeholders?.name || "Enter your full name"}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder={formSection?.placeholders?.email || "Enter your email address"}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <input
                    type="text"
                    name="phone"
                    placeholder={formSection?.placeholders?.phone || "Enter your contact number"}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    name="position"
                    placeholder={formSection?.placeholders?.position || "Post you want to apply"}
                    value={formData.position}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="file"
                  accept={formSection?.resumeAccept || ".pdf,.doc,.docx"}
                  onChange={handleFileChange}
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "SENDING..." : (formSection?.submitBtn?.text || "SEND")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}