import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";
import { useCountUp } from "../../../hooks/useCountUp";
import { cn } from "../../../lib/utils";

const ACCENTS = {
  blue: "from-blue-500 to-blue-600 shadow-blue-500/25",
  violet: "from-violet-500 to-violet-600 shadow-violet-500/25",
  amber: "from-amber-500 to-amber-600 shadow-amber-500/25",
  emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/25",
};

export default function StatCard({
  icon: Icon,
  label,
  value,
  delta,
  accent = "blue",
  loading = false,
  index = 0,
}) {
  const count = useCountUp(loading ? 0 : value);

  if (loading) {
    return (
      <Card className="p-5">
        <Skeleton className="h-11 w-11 rounded-xl" />
        <Skeleton className="mt-4 h-3 w-20" />
        <Skeleton className="mt-2 h-7 w-16" />
      </Card>
    );
  }

  const hasDelta = typeof delta === "number";
  const isUp = hasDelta && delta >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
    >
      <Card className="group transition-all hover:-translate-y-0.5 hover:shadow-md">
        <CardContent className="flex items-start justify-between">
          <div>
            <div
              className={cn(
                "mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg",
                ACCENTS[accent]
              )}
            >
              {Icon && <Icon size={20} />}
            </div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {label}
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {count.toLocaleString()}
            </p>
          </div>

          {hasDelta && (
            <span
              className={cn(
                "mt-1 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold",
                isUp ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              )}
            >
              {isUp ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
              {Math.abs(delta)}%
            </span>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
