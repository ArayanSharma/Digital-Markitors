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

        <div key={location.pathname} className="px-8 py-6 md:px-10 md:py-8 adm-fade-in">
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
