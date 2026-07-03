import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX, FiShield, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import menuData from "../config/menuData";
import { useAdminUI } from "../context/AdminUIContext";
import "../Styles/Sidebar.css";

export default function Sidebar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { sidebarCollapsed, toggleSidebar, expandSidebar } = useAdminUI();

  useEffect(() => {
    const activeParent = menuData.find(
      (item) =>
        item.type === "dropdown" &&
        item.children.some((child) => location.pathname.startsWith(child.path))
    );
    setOpenMenu(activeParent ? activeParent.label : null);
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const toggleMenu = (label) => {
    if (sidebarCollapsed) {
      expandSidebar();
      setOpenMenu(label);
      return;
    }
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <button
        type="button"
        className="sidebar-toggle lg:hidden"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {mobileOpen && (
        <div className="sidebar-overlay lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`sidebar ${mobileOpen ? "sidebar-open" : ""} ${sidebarCollapsed ? "sidebar-collapsed" : ""
          }`}
      >
        <button
          type="button"
          className="sidebar-collapse-toggle"
          onClick={toggleSidebar}
          aria-label="Collapse sidebar"
        >
          {sidebarCollapsed ? <FiChevronsRight size={13} /> : <FiChevronsLeft size={13} />}
        </button>

        <div className="sidebar-brand">
          <div className="sidebar-logo-box">
            <FiShield size={20} />
          </div>
          <div className="sidebar-brand-text">
            <h1>Digicore</h1>
            <p>Admin Dashboard</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuData.map((item, index) => {
            if (item.type === "divider") {
              return <div key={`divider-${index}`} className="sidebar-divider" />;
            }

            if (item.type === "title") {
              return (
                <p key={`title-${index}`} className="sidebar-section-title">
                  {item.label}
                </p>
              );
            }

            if (item.type === "dropdown") {
              const isOpen = openMenu === item.label && !sidebarCollapsed;
              const isChildActive = item.children.some((child) =>
                location.pathname.startsWith(child.path)
              );
              const Icon = item.icon;

              return (
                <div key={item.label} className="sidebar-group">
                  <button
                    type="button"
                    onClick={() => toggleMenu(item.label)}
                    className={`sidebar-link ${isChildActive ? "sidebar-link-active" : ""}`}
                    title={item.label}
                  >
                    <Icon size={18} className="sidebar-icon" />
                    <span className="sidebar-label">{item.label}</span>
                    <FiChevronDown
                      size={16}
                      className={`sidebar-chevron ${isOpen ? "sidebar-chevron-open" : ""}`}
                    />
                  </button>

                  <div className={`sidebar-submenu-wrapper ${isOpen ? "expanded" : ""}`}>
                    <div className="sidebar-submenu">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `sidebar-sublink ${isActive ? "sidebar-sublink-active" : ""}`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                title={item.label}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "sidebar-link-active" : ""}`
                }
              >
                <Icon size={18} className="sidebar-icon" />
                <span className="sidebar-label">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <p>© 2026 Digicore</p>
          <span>All rights reserved.</span>
        </div>
      </aside>
    </>
  );
}
