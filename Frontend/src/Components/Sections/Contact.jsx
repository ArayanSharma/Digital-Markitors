import React, { useState } from "react";
import axios from "axios";
import "../../Styles/Contact.css";
import { Send } from "lucide-react";
 
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const [isChecked, setIsChecked] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );

      alert("Contact submitted successfully!");

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
      alert("Submission failed");
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

            <h3>READY FOR RESULTS?</h3>

            <h2 >
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
             
            <p
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "28px",
                color: "#fff",
              }}
            >
             We're committed to your privacy. We’ll never share your email with a 3rd party, and will only contact you with material or notice of meaningful content we personally curate.
            </p>
          </div>

          <div className="dm-contact-right">
             

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
               </div>

       
    </>
  );
};

export default Contact;
