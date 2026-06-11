import React from "react";
import "../Styles/Career.css";

import CareerImg from "../assets/career.webp";
import CareerBg from "../assets/about2.webp";
import about2 from "../assets/about2.webp";

export default function Career() {
  return (
    <>
      <section className="innerbanner">
  <img
    src={CareerImg}
    alt="Career"
  />

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
            We are always in the search of creative, enthusiastic, and
            innovative minds who are as crazy as us for all DIGITAL things.
            If you think you have it all, send your updated resume to
            <a href="mailto:support@digicore.co.in">
              {" "}support@digicore.co.in
            </a>
            .
          </p>

          <p>
            You can also apply by filling out the form given here. Our
            Digital Whizzes will assess your profile and capabilities.
            They will only contact you if they find you perfect for our team.
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

            <form>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Enter your full name"
                />

                <input
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-row">
                <input
                  type="text"
                  placeholder="Enter your contact number"
                  />

                <input
                  type="text"
                  placeholder="Post you want to apply"
                />
              </div>

              <input type="file" />

              <button type="submit">
                SEND
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}