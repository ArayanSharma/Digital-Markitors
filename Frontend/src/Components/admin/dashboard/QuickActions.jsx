import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";

export default function QuickActions({ actions = [], loading = false }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-20 w-full" />
              ))
            : actions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    <Link
                      to={action.path}
                      className="group flex h-20 flex-col justify-between rounded-xl border border-slate-200 p-3 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <Icon size={18} className="text-slate-400 group-hover:text-blue-600" />
                        {typeof action.count === "number" && (
                          <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600">
                            {action.count}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-medium text-slate-700 group-hover:text-blue-700">
                        {action.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
        </div>
      </CardContent>
    </Card>
  );
}
