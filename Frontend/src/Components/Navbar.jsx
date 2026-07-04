import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut, User, Settings, PanelLeft } from "lucide-react";

import { useAdminUI } from "../context/AdminUIContext";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { toggleSidebar } = useAdminUI();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="adm-navbar">
      <div className="navbar-left">
        <button
          type="button"
          className="sidebar-collapse-btn"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <PanelLeft size={18} />
        </button>

        <div>
          <h2>Admin Dashboard</h2>
          <p>Welcome back, Admin</p>
        </div>
      </div>

      <div className="navbar-right">
        <div className="user-dropdown" ref={dropdownRef}>
          <button className="user-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="user-avatar">A</div>

            <div className="user-info">
              <h4>Admin</h4>
              <span>Super Admin</span>
            </div>

            <ChevronDown size={18} className={dropdownOpen ? "chevron-open" : ""} />
          </button>

          <div className={`dropdown-menu ${dropdownOpen ? "dropdown-menu-open" : ""}`}>
            

            <button type="button" className="logout-btn" onClick={handleLogout}>
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
