import { NavLink } from "react-router-dom";
import "../Styles/Sidebar.css";

const navItems = [
  {
    to: ".",
    end: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    label: "Dashboard",
  },
  {
    to: "banner",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    label: "Banner",
  },
  {
    to: "contacts",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Contact",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
    
      <div className="sidebar__orb" aria-hidden="true" />

    
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <span className="sidebar__logo-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </span>
          <div>
            <p className="sidebar__logo-title">Admin Panel</p>
            <p className="sidebar__logo-sub">Management System</p>
          </div>
        </div>
      </div>

  
      <div className="sidebar__divider" />

    
      <p className="sidebar__nav-label">Main Menu</p>

    
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {navItems.map(({ to, end, icon, label }, i) => (
            <li
              className="sidebar__item"
              key={to}
              style={{ "--delay": `${i * 80}ms` }}
            >
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `sidebar__link${isActive ? " sidebar__link--active" : ""}`
                }
              >
                <span className="sidebar__link-icon">{icon}</span>
                <span className="sidebar__link-text">{label}</span>
                <span className="sidebar__link-arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

    
      <div className="sidebar__footer">
        <div className="sidebar__divider" />
        <div className="sidebar__user">
          <div className="sidebar__avatar" aria-hidden="true">A</div>
          <div>
            <p className="sidebar__user-name">Admin User</p>
            <p className="sidebar__user-role">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;