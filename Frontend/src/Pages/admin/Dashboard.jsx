import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiMail,
  FiArrowRight,
  FiTrendingUp,
  FiFolderPlus,
  FiPlusCircle,
  FiCalendar,
  FiAward,
  FiCompass,
  FiChevronDown
} from "react-icons/fi";

export default function Dashboard() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState(856);
  const [careers, setCareers] = useState(28);
  const [loading, setLoading] = useState(true);
  const [filterRange, setFilterRange] = useState("Last 7 Days");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const contactRes = await fetch("http://localhost:5000/api/contact");
      if (contactRes.ok) {
        const contactData = await contactRes.json();
        if (contactData.success && contactData.contacts) {
          setContacts(contactData.contacts.length);
        }
      }
      
      const careerRes = await fetch("http://localhost:5000/api/career");
      if (careerRes.ok) {
        const careerData = await careerRes.json();
        if (careerData.success && careerData.careers) {
          setCareers(careerData.careers.length);
        }
      }
    } catch (error) {
      console.log("Could not load backend data, using mockup fallbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Mock data for the enquiries timeline (May 08 - May 14)
  const chartData = [
    { label: "May 08", val: 90 },
    { label: "May 09", val: 150 },
    { label: "May 10", val: 115 },
    { label: "May 11", val: 200 },
    { label: "May 12", val: 135 },
    { label: "May 13", val: 165 },
    { label: "May 14", val: 238 }
  ];

  // SVG Chart path calculation
  const chartWidth = 500;
  const chartHeight = 160;
  const padding = 20;
  
  const getCoordinates = () => {
    const maxVal = 250;
    return chartData.map((d, i) => {
      const x = padding + (i * (chartWidth - padding * 2)) / (chartData.length - 1);
      const y = chartHeight - padding - (d.val * (chartHeight - padding * 2)) / maxVal;
      return { x, y, label: d.label, val: d.val };
    });
  };

  const coords = getCoordinates();
  const linePath = coords.reduce((path, c, i) => {
    return i === 0 ? `M ${c.x} ${c.y}` : `${path} L ${c.x} ${c.y}`;
  }, "");

  // Create area path under the line
  const areaPath = coords.length > 0 
    ? `${linePath} L ${coords[coords.length - 1].x} ${chartHeight - padding} L ${coords[0].x} ${chartHeight - padding} Z`
    : "";

  return (
    <div className="space-y-8 animate-[fadeIn_0.4s_ease-out] text-slate-800 pb-12">
      
      {/* Header section */}
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-slate-400 mt-1 font-medium">
            Welcome back, Admin. Here is a quick overview of your website enquiries and statistics.
          </p>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Total Enquiries */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Enquiries</p>
            <h3 className="text-2xl font-bold text-slate-950">1,248</h3>
            <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
              <FiTrendingUp size={14} />
              <span>+18.5%</span>
              <span className="text-slate-400 font-normal ml-0.5">vs last month</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <FiUsers size={22} />
          </div>
        </div>

        {/* Card 2: Total Services */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Services</p>
            <h3 className="text-2xl font-bold text-slate-950">36</h3>
            <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
              <FiTrendingUp size={14} />
              <span>+12.4%</span>
              <span className="text-slate-400 font-normal ml-0.5">vs last month</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <FiBriefcase size={22} />
          </div>
        </div>

        {/* Card 3: Blogs Published */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Blogs Published</p>
            <h3 className="text-2xl font-bold text-slate-950">{careers + 15}</h3>
            <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
              <FiTrendingUp size={14} />
              <span>+7.6%</span>
              <span className="text-slate-400 font-normal ml-0.5">vs last month</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <FiFileText size={22} />
          </div>
        </div>

        {/* Card 4: Total Contacts */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Contacts</p>
            <h3 className="text-2xl font-bold text-slate-950">{contacts}</h3>
            <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
              <FiTrendingUp size={14} />
              <span>+15.3%</span>
              <span className="text-slate-400 font-normal ml-0.5">vs last month</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <FiMail size={22} />
          </div>
        </div>

      </div>

      {/* Enquiries Overview Line Chart Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Enquiries Overview</h2>
            <p className="text-xs text-slate-400 font-medium">Daily trends of contact forms and services enquiries</p>
          </div>

          <div className="relative">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors">
              <span>{filterRange}</span>
              <FiChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* SVG Rendered Line Chart */}
        <div className="w-full overflow-hidden">
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="w-full h-auto text-blue-500 overflow-visible"
            style={{ maxHeight: "280px" }}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} stroke="#F1F5F9" strokeWidth="1" />
            <line x1={padding} y1={chartHeight / 2} x2={chartWidth - padding} y2={chartHeight / 2} stroke="#F1F5F9" strokeWidth="0.5" />
            <line x1={padding} y1={padding} x2={chartWidth - padding} y2={padding} stroke="#F1F5F9" strokeWidth="0.5" />

            {/* Area Path */}
            <path d={areaPath} fill="url(#chartGradient)" />

            {/* Line Path */}
            <path d={linePath} fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Data nodes & Labels */}
            {coords.map((c, i) => (
              <g key={i}>
                <circle
                  cx={c.x}
                  cy={c.y}
                  r="4"
                  fill="#ffffff"
                  stroke="#2563EB"
                  strokeWidth="2"
                  className="transition-transform duration-200 hover:scale-150 cursor-pointer"
                />
                
                {/* Value tooltip label displayed on node */}
                <text
                  x={c.x}
                  y={c.y - 8}
                  textAnchor="middle"
                  className="text-[8px] font-bold fill-slate-700 bg-white"
                >
                  {c.val}
                </text>

                {/* X Axis Labels */}
                <text
                  x={c.x}
                  y={chartHeight - 4}
                  textAnchor="middle"
                  className="text-[8px] font-semibold fill-slate-400"
                >
                  {c.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Grid: Recent Enquiries & Top Services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card: Recent Enquiries */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Recent Enquiries</h2>
                <p className="text-xs text-slate-400 font-medium">Newly received submissions</p>
              </div>
              <button 
                onClick={() => navigate("/admin/contacts")}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                View All
                <FiArrowRight size={14} />
              </button>
            </div>

            {/* Enquiries List */}
            <div className="divide-y divide-slate-100">
              {[
                { name: "Rohit Sharma", service: "SEO Services", time: "2 min ago", status: "New" },
                { name: "Anjali Verma", service: "PPC Services", time: "15 min ago", status: "New" },
                { name: "Vikash Kumar", service: "Social Media Marketing", time: "1 hr ago", status: "Contacted" },
                { name: "Neha Singh", service: "Website Audit", time: "2 hr ago", status: "Contacted" },
                { name: "Amit Patel", service: "AI SEO Services", time: "3 hr ago", status: "New" }
              ].map((enq, index) => (
                <div key={index} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 shrink-0 text-sm">
                      {enq.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-slate-800 truncate">{enq.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 truncate">{enq.service}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-slate-400 font-medium">{enq.time}</span>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      enq.status === "New" 
                        ? "bg-blue-50 text-blue-600 border border-blue-100" 
                        : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                    }`}>
                      {enq.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card: Top Services */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Top Services</h2>
                <p className="text-xs text-slate-400 font-medium">Most popular services by traffic and volume</p>
              </div>
              <button 
                onClick={() => navigate("/admin/page-editor/services")}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                View All
                <FiArrowRight size={14} />
              </button>
            </div>

            {/* Services List */}
            <div className="divide-y divide-slate-100">
              {[
                { name: "SEO Services", score: 425 },
                { name: "PPC Services", score: 312 },
                { name: "Social Media Marketing", score: 198 },
                { name: "Content Creation", score: 156 },
                { name: "Website Audit", score: 102 }
              ].map((svc, index) => (
                <div key={index} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <FiAward size={16} />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 truncate">{svc.name}</span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm font-bold text-slate-900">{svc.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Section: Quick Actions */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          
          <button
            onClick={() => navigate("/admin/contacts")}
            className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 text-center flex flex-col items-center justify-center gap-3"
          >
            <FiPlusCircle size={22} className="text-blue-600" />
            <span className="text-xs font-bold text-slate-700">Add Enquiry</span>
          </button>

          <button
            onClick={() => navigate("/admin/blog")}
            className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 text-center flex flex-col items-center justify-center gap-3"
          >
            <FiFolderPlus size={22} className="text-blue-600" />
            <span className="text-xs font-bold text-slate-700">Create Blog</span>
          </button>

          {/* Trigger Premium Create Service page */}
          <button
            onClick={() => navigate("/admin/services/create")}
            className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 text-center flex flex-col items-center justify-center gap-3 scale-105 ring-2 ring-blue-500 ring-offset-2"
          >
            <FiPlusCircle size={22} className="text-blue-600 animate-pulse" />
            <span className="text-xs font-bold text-slate-900">Add Service</span>
          </button>

          <button
            onClick={() => navigate("/admin/case-study")}
            className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 text-center flex flex-col items-center justify-center gap-3"
          >
            <FiCompass size={22} className="text-blue-600" />
            <span className="text-xs font-bold text-slate-700">Add Case Study</span>
          </button>

          <button
            onClick={() => navigate("/admin/testimonials")}
            className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 text-center flex flex-col items-center justify-center gap-3"
          >
            <FiCalendar size={22} className="text-blue-600" />
            <span className="text-xs font-bold text-slate-700">Add Testimonial</span>
          </button>

        </div>
      </div>

    </div>
  );
}
