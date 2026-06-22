import { useState, useRef, useEffect } from "react";
import {
Search,
Bell,
ChevronDown,
LogOut,
User,
Settings
} from "lucide-react";

import "../Styles/Navbar.css";

export default function Navbar() {
const [dropdownOpen, setDropdownOpen] = useState(false);

const dropdownRef = useRef(null);

useEffect(() => {
const handleClickOutside = (event) => {
if (
dropdownRef.current &&
!dropdownRef.current.contains(event.target)
) {
setDropdownOpen(false);
}
};


document.addEventListener(
  "mousedown",
  handleClickOutside
);

return () =>
  document.removeEventListener(
    "mousedown",
    handleClickOutside
  );


}, []);

const handleLogout = () => {
localStorage.removeItem("token");


window.location.href = "/login";


};

return ( <header className="navbar">


  <div className="navbar-left">
    <h2>Admin Dashboard</h2>
    <p>Welcome back, Admin</p>
  </div>

  <div className="navbar-right">

    <div className="search-box">
      <Search size={18} />
      <input
        type="text"
        placeholder="Search here..."
      />
    </div>

    <button className="notification-btn">
      <Bell size={20} />

      <span className="notification-badge">
        3
      </span>
    </button>

    <div
      className="user-dropdown"
      ref={dropdownRef}
    >
      <button
        className="user-btn"
        onClick={() =>
          setDropdownOpen(!dropdownOpen)
        }
      >
        <div className="user-avatar">
          A
        </div>

        <div className="user-info">
          <h4>Admin</h4>
          <span>Super Admin</span>
        </div>

        <ChevronDown size={18} />
      </button>

      {dropdownOpen && (
        <div className="dropdown-menu">

          <button>
            <User size={16} />
            Profile
          </button>

          <button>
            <Settings size={16} />
            Settings
          </button>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            Logout
          </button>

        </div>
      )}
    </div>

  </div>
</header>

);
}
