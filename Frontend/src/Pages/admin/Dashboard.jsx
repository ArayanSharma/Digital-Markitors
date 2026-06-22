import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Briefcase,
  Mail,
  Users,
} from "lucide-react";

import "../../Styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState(0);
  const [careers, setCareers] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const contactRes = await fetch(
        "http://localhost:5000/api/contact"
      );

      const contactData =
        await contactRes.json();

      if (contactData.success) {
        setContacts(
          contactData.contacts?.length || 0
        );
      }

      const careerRes = await fetch(
        "http://localhost:5000/api/career"
      );

      const careerData =
        await careerRes.json();

      if (careerData.success) {
        setCareers(
          careerData.careers?.length || 0
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard-page">

      {/* Welcome Section */}
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>

        <p>
          Welcome back Admin. Here's a quick
          overview of your website enquiries.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-stats">

        <div className="dashboard-card">
          <div className="dashboard-card-icon blue">
            <Mail size={26} />
          </div>

          <div>
            <span>Total Contacts</span>
            <h2>{contacts}</h2>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-card-icon green">
            <Briefcase size={26} />
          </div>

          <div>
            <span>Career Applications</span>
            <h2>{careers}</h2>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-card-icon orange">
            <Users size={26} />
          </div>

          <div>
            <span>Total Visitors</span>
            <h2>1245</h2>
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="dashboard-actions">

        <div className="action-card">
          <h3>Contact Enquiries</h3>

          <p>
            Manage all website contact
            enquiries received from users.
          </p>

          <button
            onClick={() =>
              navigate("/admin/contacts")
            }
          >
            View Contacts
          </button>
        </div>

        <div className="action-card">
          <h3>Career Applications</h3>

          <p>
            Review job applications
            submitted through your website.
          </p>

          <button
            onClick={() =>
              navigate("/admin/career")
            }
          >
            View Careers
          </button>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h3>Recent Activity</h3>

        <ul>
          <li>
            Total Contact Enquiries:
            <strong> {contacts}</strong>
          </li>

          <li>
            Total Career Applications:
            <strong> {careers}</strong>
          </li>

          <li>
            Dashboard Loaded Successfully
          </li>
        </ul>
      </div>

    </div>
  );
}