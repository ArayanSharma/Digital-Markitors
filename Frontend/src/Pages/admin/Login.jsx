import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your API login here

    navigate("/admin");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="overlay"></div>

        <div className="left-content">
          <div className="brand">
            <div className="logo">D</div>

            <div>
              <h1>Digicore</h1>
              <p>Digital Marketing Agency</p>
            </div>
          </div>

          <h2>
            Grow Brands With
            <span> Smart Marketing</span>
          </h2>

          <p>
            Manage SEO campaigns, social media,
            analytics, leads and clients from
            one powerful dashboard.
          </p>

          <div className="stats">
            <div>
              <h3>250+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>98%</h3>
              <span>Success Rate</span>
            </div>

            <div>
              <h3>50K+</h3>
              <span>Leads Generated</span>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Admin Login</h2>

          <p>
            Welcome back to Digicore Dashboard
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button type="submit">
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}