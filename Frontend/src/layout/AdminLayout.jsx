import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Dashboard from "../Pages/admin/Dashboard";


import { Contact } from "lucide-react";

export default function DashboardLayout() {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          minHeight: "100vh",
          background: "#f8fafc",
        }}
      >
        <Navbar />

        {/* page content */}
      
      </div>
    </>
  );
}