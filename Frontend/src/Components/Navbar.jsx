import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  return (
    <header className="navbar">
    
      <div className="navbar__brand">
        <span className="navbar__brand-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </span>
        <div>
          <h2 className="navbar__title">Admin Dashboard</h2>
          <p className="navbar__subtitle">Management Console</p>
        </div>
      </div>

    
      <div className="navbar__actions">
      
        <button className="navbar__icon-btn" aria-label="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="navbar__badge" aria-label="3 notifications">3</span>
        </button>

      
        <span className="navbar__sep" aria-hidden="true" />

      
        <div className="navbar__user">
          <div className="navbar__avatar" aria-hidden="true">A</div>
          <span className="navbar__username">Admin</span>
        </div>

      
        <button className="navbar__logout" onClick={handleLogout}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;