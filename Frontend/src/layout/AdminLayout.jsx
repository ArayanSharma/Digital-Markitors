import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { AdminUIProvider, useAdminUI } from "../context/AdminUIContext";
import { ToastProvider } from "../context/ToastContext";
import "../Styles/admin-theme.css";

function DashboardLayoutInner() {
  const { sidebarCollapsed } = useAdminUI();
  const location = useLocation();

  return (
    <>
      <Sidebar />

      <div className={`adm-shell adm-content ${sidebarCollapsed ? "adm-content-collapsed" : ""}`}>
        <Navbar />

        <div key={location.pathname} className="adm-fade-in" style={{ padding: "2rem 2.5rem" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default function DashboardLayout() {
  return (
    <AdminUIProvider>
      <ToastProvider>
        <DashboardLayoutInner />
      </ToastProvider>
    </AdminUIProvider>
  );
}
