import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

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

        <div style={{ padding: "24px" }}>
          <Outlet />
        </div>

      </div>
    </>
  );
}