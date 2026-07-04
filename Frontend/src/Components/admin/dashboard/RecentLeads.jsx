import { Link } from "react-router-dom";
import { ArrowUpRight, Inbox } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Skeleton } from "../../ui/skeleton";
import { formatRelativeTime } from "../../../lib/time";
import "./Dashboard.css";

const STATUS_VARIANT = {
  New: "default",
  Read: "warning",
  Resolved: "success",
};

function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "?";
}

export default function RecentLeads({ leads = [], loading = false }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Enquiries</CardTitle>
        <Link
          to="/admin/contacts"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View all
          <ArrowUpRight size={14} />
        </Link>
      </CardHeader>
      <CardContent className="pt-4">
        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-14 w-full" />
            ))}
          </div>
        ) : leads.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 py-10 text-slate-400">
            <Inbox size={26} className="opacity-60" />
            <p className="text-sm">No enquiries yet</p>
          </div>
        ) : (
          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Received</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600">
                          {initials(lead.name)}
                        </div>
                        <span className="font-medium text-slate-900">{lead.name}</span>
                      </div>
                    </td>
                    <td>{lead.service || "General Enquiry"}</td>
                    <td>
                      <Badge variant={STATUS_VARIANT[lead.status] || "neutral"}>
                        {lead.status || "New"}
                      </Badge>
                    </td>
                    <td className="text-slate-400">{formatRelativeTime(lead.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
