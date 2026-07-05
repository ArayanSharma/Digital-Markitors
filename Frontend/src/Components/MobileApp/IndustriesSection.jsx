import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  UtensilsCrossed,
  Truck,
  GraduationCap,
  Building2,
  Plane,
  Dumbbell,
  Clapperboard,
  Factory,
  Zap,
} from "lucide-react";
import { SectionKicker } from "./shared";

const INDUSTRIES = [
  { icon: HeartPulse, title: "Healthcare", desc: "Telemedicine, patient portals & HIPAA-ready records." },
  { icon: Landmark, title: "Finance", desc: "Secure banking, trading & digital wallet apps." },
  { icon: ShoppingCart, title: "Ecommerce", desc: "High-converting shopping & marketplace experiences." },
  { icon: UtensilsCrossed, title: "Food Delivery", desc: "Live tracking, ordering & kitchen dashboards." },
  { icon: Truck, title: "Logistics", desc: "Fleet tracking, route optimization & dispatch tools." },
  { icon: GraduationCap, title: "Education", desc: "Interactive learning, live classes & progress tracking." },
  { icon: Building2, title: "Real Estate", desc: "Property listings, virtual tours & lead management." },
  { icon: Plane, title: "Travel", desc: "Bookings, itineraries & real-time trip updates." },
  { icon: Dumbbell, title: "Fitness", desc: "Workout plans, wearable sync & community challenges." },
  { icon: Clapperboard, title: "Entertainment", desc: "Streaming, ticketing & fan engagement platforms." },
  { icon: Factory, title: "Manufacturing", desc: "IoT dashboards, inventory & plant-floor visibility." },
  { icon: Zap, title: "On-Demand Services", desc: "Booking, dispatch & real-time service marketplaces." },
];

export default function IndustriesSection() {
  return (
    <section className="bg-slate-50 py-24 md:py-28">
      <div className="container-custom">
        <SectionKicker
          eyebrow="Industries We Serve"
          title="Domain Expertise Across Every Sector"
          description="We've shipped mobile products for founders and enterprises across a wide range of industries."
        />

        <div className="mp-stagger-group grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white border border-slate-200 p-7 overflow-hidden aspect-square flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_20px_46px_rgba(227,30,36,0.12)] hover:border-[#e31e24]/30 transition-all duration-400"
            >
              <ind.icon
                size={90}
                strokeWidth={1}
                className="absolute -right-4 -bottom-4 text-[#e31e24]/5 group-hover:text-[#e31e24]/10 group-hover:scale-110 transition-all duration-500"
              />
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e31e24] to-[#c4151a] text-white flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                <ind.icon size={22} />
              </div>
              <div className="relative">
                <h3 className="font-bold text-slate-900 text-base">{ind.title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
