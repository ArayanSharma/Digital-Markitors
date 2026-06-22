import { NavLink } from "react-router-dom";
import {
LayoutDashboard,
Image,
Mail,
Users,
Briefcase,
MessageSquareQuote,
Settings,
Shield,
} from "lucide-react";

import Contacts from "../Pages/admin/Contacts";
import CareerAdmin from "../Pages/admin/A-Carrer";

import "../Styles/Sidebar.css";

const menuItems = [
{
label: "Dashboard",
path: "/admin",
icon: <LayoutDashboard size={18} />,
},

{
label: "Contact Enquiries",
path: "/admin/contacts",
icon: <Mail size={18} />,
},
{
  label: "Career",
  path: "/admin/career",
  icon: <Briefcase size={18} />
},



];

export default function Sidebar() {
return ( <aside className="sidebar">


  <div className="sidebar-top">

    <div className="sidebar-logo">
      <div className="logo-box">
        <Shield size={22} />
      </div>

      <div>
        <h3>Admin Panel</h3>
        <p>Management System</p>
      </div>
    </div>

  </div>

  <div className="sidebar-menu">

    <p className="menu-title">
      MAIN MENU
    </p>

    {menuItems.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        end={item.path === "/admin"}
        className={({ isActive }) =>
          isActive
            ? "sidebar-link active"
            : "sidebar-link"
        }
      >
        <span>{item.icon}</span>

        <span>{item.label}</span>
      </NavLink>
    ))}

  </div>

  <div className="sidebar-bottom">

  

    <div className="sidebar-footer">

      <Shield size={18} />

      <div>
        <p>© 2026 Admin Panel</p>
        <span>All rights reserved.</span>
      </div>

    </div>

  </div>

</aside>


);
}
