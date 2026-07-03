import { createContext, useContext, useEffect, useState } from "react";

const AdminUIContext = createContext(null);

export function AdminUIProvider({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    () => localStorage.getItem("adm_sidebar_collapsed") === "1"
  );

  useEffect(() => {
    localStorage.setItem("adm_sidebar_collapsed", sidebarCollapsed ? "1" : "0");
  }, [sidebarCollapsed]);

  const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);
  const expandSidebar = () => setSidebarCollapsed(false);

  return (
    <AdminUIContext.Provider
      value={{ sidebarCollapsed, toggleSidebar, expandSidebar }}
    >
      {children}
    </AdminUIContext.Provider>
  );
}

export function useAdminUI() {
  const ctx = useContext(AdminUIContext);
  if (!ctx) throw new Error("useAdminUI must be used within AdminUIProvider");
  return ctx;
}
