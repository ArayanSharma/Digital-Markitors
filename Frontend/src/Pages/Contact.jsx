import React, { useState } from "react";
import axios from "axios";
import "../Styles/Contact.css";
import { Send } from "lucide-react";
import { saveContactSubmission } from "../utils/appStorage";
 
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    website: "",
    source: "",
    message: "",
  });
const [isChecked, setIsChecked] = useState(false);

const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );

      saveContactSubmission(formData);

      setMessage("✅ Contact submitted successfully!");
      setMessageType("success");

      setTimeout(() => {
        setMessage("");
      }, 3000);

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
      saveContactSubmission(formData);
      setMessage("✅ Contact saved locally. Our team will follow up soon.");
      setMessageType("success");

      setTimeout(() => {
        setMessage("");
      }, 4000);
    }
  };

  return (
    <>
      <section className="dm-contact-section">
        <div className="dm-contact-container">
          <div className="dm-contact-left" >
            <div className="dm-contact-icon">
              <Send size={20} />
            </div>

            <h3>READY FOR RESULTS?</h3>

            <h2>
              DROP US AN
              
              EMAIL:
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
             support@digicore.co.in
            </h3>
            <br />
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
              Talk to us: +919818888064
            </p>
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
              Email us:  support@digicore.co.in
            </p>
            <br />
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
              Digicore Inc.
              <br />
           438C, Panki Road,
            Kalyanpur,    <br />
            Kanpur 208017 UP 
            </p>
          </div>

          <div className="dm-contact-right">
            <div className="dm-contact-heading">
              <h4>It's time</h4>
              <h1>LET'S TALK</h1>
            </div>
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
                    placeholder="What is your name?"
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
                    placeholder="Can we have your email address?"
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
                    placeholder="What phone number can we reach you on?"
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

                    <option value="SEO">SEO</option>

                    <option value="Web Development">Web Development</option>

                    <option value="Social Media Marketing">
                      Social Media Marketing
                    </option>
                  </select>
                </div>

                <div className="dm-form-group">
                  <label>WEBSITE URL</label>

                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Your website link?"
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

                    <option value="Google">Google</option>

                    <option value="Facebook">Facebook</option>

                    <option value="Instagram">Instagram</option>
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
                  placeholder="How can we help?"
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
      We respect your privacy. By ticking this box, you agree that
      Digicore Inc. may contact you with relevant updates, insights,
      and services. You can unsubscribe at any time.
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
        <section className="touch-section">
          <div className="touch-container">
            <h2 className="touch-title">How to get in touch</h2>

            <div className="touch-grid">
              <div className="touch-card">
                <h3>OPPORTUNITIES AT FOUND</h3>
                <p>
                  For information regarding open positions, check out the
                  careers section.
                </p>
              </div>

              <div className="touch-card">
                <h3>
                  FOUND BUSINESS
                  <br />
                  PARTNERSHIPS
                </h3>
                <p>
                  For enquiries about business partnerships, email us at
                  <br />
                 support@digicore.co.in
                </p>
              </div>

              <div className="touch-card">
                <h3>EMAIL US</h3>
                <p>
                  Prefer to send us an email?
                  <br />
                  Email us at
                  <br />
                  support@digicore.co.in
                </p>
              </div>

              <div className="touch-card">
                <h3>CALL US</h3>
                <p>Call us on</p>
                <strong>+91 9818888064</strong>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <div className="map-container">
          <iframe
            title="Digicore Inc. Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7009.334881986703!2d77.250079!3d28.549714000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf0fa997a5%3A0x9f960e33bba19672!2sDigital%20Markitors%20-%20Best%20Digital%20Marketing%20and%20SEO%20Company%20in%20Kanpur!5e0!3m2!1sen!2sin!4v1780405452796!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
