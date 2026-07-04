import { motion } from "framer-motion";
import { Briefcase, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../../../Components/ui/card";
import { useCountUp } from "../../../hooks/useCountUp";

function Stat({ label, value, icon: Icon, accent, index }) {
  const count = useCountUp(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
    >
      <Card className="group transition-all hover:-translate-y-0.5 hover:shadow-md">
        <CardContent className="flex items-center gap-4" style={{ padding: "1.25rem" }}>
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg ${accent}`}
          >
            <Icon size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {label}
            </p>
            <p className="mt-0.5 text-2xl font-bold text-slate-900">
              {count.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function CareerStats({ total = 0, newThisWeek = 0 }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Stat
        label="Total Applications"
        value={total}
        icon={Briefcase}
        accent="from-blue-500 to-blue-600 shadow-blue-500/25"
        index={0}
      />
      <Stat
        label="New This Week"
        value={newThisWeek}
        icon={TrendingUp}
        accent="from-emerald-500 to-emerald-600 shadow-emerald-500/25"
        index={1}
      />
    </div>
  );
}
