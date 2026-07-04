import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";

const COLORS = ["#2563eb", "#8b5cf6", "#f59e0b", "#10b981", "#94a3b8"];

function ChartTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-md">
      <p className="font-medium text-slate-700">{item.name}</p>
      <p className="mt-0.5 font-semibold text-blue-600">{item.value} leads</p>
    </div>
  );
}

export default function ServiceBreakdownChart({ data = [], loading = false }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>Leads by Service</CardTitle>
          <p className="mt-0.5 text-sm text-slate-500">What people are asking about</p>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {loading ? (
          <Skeleton className="h-64 w-full" />
        ) : total === 0 ? (
          <div className="flex h-64 items-center justify-center text-sm text-slate-400">
            No enquiries yet
          </div>
        ) : (
          <>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="62%"
                    outerRadius="90%"
                    paddingAngle={3}
                    strokeWidth={0}
                  >
                    {data.map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-4 space-y-2">
              {data.map((entry, index) => (
                <li key={entry.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-600">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    {entry.name}
                  </span>
                  <span className="font-medium text-slate-900">
                    {Math.round((entry.value / total) * 100)}%
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
}
