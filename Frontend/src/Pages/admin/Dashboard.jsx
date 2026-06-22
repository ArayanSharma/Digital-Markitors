import Navbar from "../../Components/Navbar";

import {
Briefcase,
Mail,
Users
} from "lucide-react";

import "../../Styles/Dashboard.css";

export default function Dashboard() {
return ( <div className="dashboard-page">


  {/* Top Navbar */}
  <Navbar />

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
        <h2>248</h2>
      </div>

    </div>

    <div className="dashboard-card">

      <div className="dashboard-card-icon green">
        <Briefcase size={26} />
      </div>

      <div>
        <span>Career Applications</span>
        <h2>36</h2>
      </div>

    </div>

    <div className="dashboard-card">

      <div className="dashboard-card-icon orange">
        <Users size={26} />
      </div>

      <div>
        <span>Total Visitors</span>
        <h2>1,245</h2>
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

      <button>
        View Contacts
      </button>

    </div>

    <div className="action-card">

      <h3>Career Applications</h3>

      <p>
        Review job applications
        submitted through your website.
      </p>

      <button>
        View Careers
      </button>

    </div>

  </div>

  {/* Recent Activity */}

  <div className="recent-activity">

    <h3>Recent Activity</h3>

    <ul>

      <li>
        New contact enquiry received.
      </li>

      <li>
        New career application submitted.
      </li>

      <li>
        Contact enquiry updated.
      </li>

    </ul>

  </div>

</div>


);
}
