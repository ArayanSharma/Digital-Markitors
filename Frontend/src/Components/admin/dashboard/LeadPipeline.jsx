import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Progress } from "../../ui/progress";
import { Skeleton } from "../../ui/skeleton";

const STAGES = [
  { key: "New", indicatorClassName: "from-blue-500 to-blue-600" },
  { key: "Read", indicatorClassName: "from-amber-500 to-amber-600" },
  { key: "Resolved", indicatorClassName: "from-emerald-500 to-emerald-600" },
];

export default function LeadPipeline({ statusCounts, loading = false }) {
  const total = statusCounts
    ? Object.values(statusCounts).reduce((sum, n) => sum + n, 0)
    : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Pipeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 pt-4">
        {loading ? (
          <>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </>
        ) : total === 0 ? (
          <p className="text-sm text-slate-400">No enquiries yet</p>
        ) : (
          STAGES.map((stage) => {
            const count = statusCounts[stage.key] || 0;
            const pct = total ? Math.round((count / total) * 100) : 0;
            return (
              <div key={stage.key}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-600">{stage.key}</span>
                  <span className="text-slate-500">
                    {count} · {pct}%
                  </span>
                </div>
                <Progress value={pct} indicatorClassName={`bg-gradient-to-r ${stage.indicatorClassName}`} />
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
