import { Briefcase, Edit, Mail, Trash2 } from "lucide-react";
import { Card } from "../../../Components/ui/card";
import { Badge } from "../../../Components/ui/badge";

export default function CareerTable({ careers, loading, onEdit, onDelete }) {
  return (
    <Card className="overflow-hidden">
      {loading ? (
        <div className="animate-pulse py-16 text-center text-sm font-semibold text-slate-400">
          Loading applications...
        </div>
      ) : careers.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <Briefcase size={30} />
          </div>
          <h3 className="text-base font-semibold text-slate-900">No applications found</h3>
          <p className="max-w-sm text-sm text-slate-500">
            There are currently no career applications available.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Date</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody className="adm-stagger">
              {careers.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 text-sm font-bold text-white shadow-sm">
                        {item.name ? item.name.charAt(0).toUpperCase() : "?"}
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-tight text-slate-800">
                          {item.name}
                        </p>
                        <p className="text-xs font-medium text-slate-400">Applicant</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Mail size={14} className="text-slate-400" />
                      <span>{item.email}</span>
                    </div>
                  </td>
                  <td>
                    <Badge variant="default" className="bg-purple-50 text-purple-600">
                      {item.position || "General"}
                    </Badge>
                  </td>
                  <td className="font-medium text-slate-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => onEdit(item)}
                        title="Edit"
                        className="adm-icon-btn"
                      >
                        <Edit size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => onDelete(item._id)}
                        title="Delete"
                        className="adm-icon-btn danger"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
