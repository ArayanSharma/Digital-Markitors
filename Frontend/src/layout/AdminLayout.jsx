import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../layout/AdminLayout.css";

function AdminLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Navbar />

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;