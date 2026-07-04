import React, { useState } from "react";
import axios from "axios";
import "../../Styles/Contact.css";
import { Send } from "lucide-react";
import { usePageContent } from "../../hooks/usePageContent";

const Contact = () => {
  const { content: c } = usePageContent("contact");
  const left = c?.left;
  const form = c?.form;
  const services = c?.services?.length ? c.services : ["SEO", "Web Development", "Social Media Marketing"];
  const hearOptions = c?.hearOptions?.length ? c.hearOptions : ["Google", "Facebook", "Instagram"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    website: "",
    source: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );

      setMessage("✅ Contact submitted successfully!");
      setMessageType("success");

      setTimeout(() => {
        setMessage("");
      }, 3000);

      console.log(res.data);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        website: "",
        source: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("❌ Submission failed");
      setMessageType("error");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <>
      <section className="dm-contact-section">
        <div className="dm-contact-container">
          <div className="dm-contact-left">
            <div className="dm-contact-icon" >
              <Send size={20} />
            </div>

            <h3>{left?.smallHeading || "READY FOR RESULTS?"}</h3>

            <h2 >
              {left?.title || "DROP US AN EMAIL:"}
            </h2>
            <h3
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "42px",
                color: "#fff",
              }}
            >
              {left?.email || "support@digicore.co.in"}
            </h3>
            <br />

            <p
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "28px",
                color: "#fff",
              }}
            >
              {left?.privacyText || "We respect your privacy. By ticking this box, you agree that Digicore Inc. may contact you with relevant updates, insights, and services. You can unsubscribe at any time."}
            </p>
          </div>

          <div className="dm-contact-right">
            {message && (
              <div className={`form-message ${messageType}`}>
                {message}
              </div>
            )}

            <form className="dm-contact-form" onSubmit={handleSubmit}>
              <div className="dm-form-grid">
                <div className="dm-form-group">
                  <label>NAME*</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={form?.placeholders?.name || "What is your name?"}
                    required
                  />
                </div>

                <div className="dm-form-group">
                  <label>EMAIL*</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={form?.placeholders?.email || "Can we have your email address?"}
                    required
                  />
                </div>

                <div className="dm-form-group">
                  <label>MOBILE NUMBER*</label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={form?.placeholders?.phone || "What phone number can we reach you on?"}
                    required
                  />
                </div>

                <div className="dm-form-group">
                  <label>CHOOSE SERVICE</label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Choose Service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="dm-form-group">
                  <label>WEBSITE URL</label>

                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder={form?.placeholders?.website || "Your website link?"}
                  />
                </div>

                <div className="dm-form-group">
                  <label>HOW DID YOU HEAR ABOUT US?</label>

                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                  >
                    <option value="">How did you hear about us?</option>
                    {hearOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="dm-form-group dm-full-width">
                <label>MESSAGE*</label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={form?.placeholders?.message || "How can we help?"}
                  required
                ></textarea>
              </div>
              <div className="privacy-box">
                <label className="privacy-label">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    required
                  />
                  <span className="privacy-text">
                    {form?.privacyText ||
                      "We respect your privacy. By ticking this box, you agree that Digicore Inc. may contact you with relevant updates, insights, and services. You can unsubscribe at any time."}
                  </span>
                </label>
              </div>
              <button type="submit" className="dm-submit-btn">
                Submit
              </button>
            </form>
          </div>

          <div></div>
        </div>
      </section>
      <div>
      </div>


    </>
  );
};

export default Contact;
