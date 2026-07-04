import {
  BookOpen,
  FileText,
  Mail,
  Star,
} from "lucide-react";
import { useDashboardData } from "../../../hooks/useDashboardData";
import StatCard from "./StatCard";
import LeadsTrendChart from "./LeadsTrendChart";
import ServiceBreakdownChart from "./ServiceBreakdownChart";
import LeadPipeline from "./LeadPipeline";
import RecentLeads from "./RecentLeads";

export default function Dashboard() {
  const { loading, data } = useDashboardData();
  const stats = data?.stats;

  const statCards = [
    {
      key: "totalLeads",
      label: "Total Enquiries",
      value: stats?.totalLeads ?? 0,
      icon: Mail,
      accent: "blue",
    },
    {
      key: "newThisWeek",
      label: "New This Week",
      value: stats?.newThisWeek ?? 0,
      delta: stats?.weekDelta,
      icon: Star,
      accent: "emerald",
    },
    {
      key: "totalBlogs",
      label: "Blog Posts",
      value: stats?.totalBlogs ?? 0,
      icon: FileText,
      accent: "violet",
    },
    {
      key: "totalCaseStudies",
      label: "Case Studies",
      value: stats?.totalCaseStudies ?? 0,
      icon: BookOpen,
      accent: "amber",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {statCards.map(({ key, ...card }, index) => (
          <StatCard key={key} {...card} loading={loading} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LeadsTrendChart data={data?.leadsTrend ?? []} loading={loading} />
        </div>
        <ServiceBreakdownChart data={data?.serviceBreakdown ?? []} loading={loading} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentLeads leads={data?.recentLeads ?? []} loading={loading} />
        </div>
        <div className="flex flex-col gap-6">
          <LeadPipeline statusCounts={data?.statusCounts} loading={loading} />
        </div>
      </div>
    </div>
  );
}
