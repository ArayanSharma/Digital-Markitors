import {
  Repeat,
  PenTool,
  Wrench,
  Webhook,
  Braces,
  Building2,
  ShoppingCart,
  UtensilsCrossed,
  HeartPulse,
  Landmark,
  CalendarCheck,
  Share2,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import {
  SiReact,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGooglecloud,
  SiAppwrite,
  SiAndroidstudio,
  SiXcode,
  SiDocker,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaAndroid, FaApple, FaAppStoreIos, FaGooglePlay, FaAws, FaGithub } from "react-icons/fa";

/* Keys below MUST match the SERVICE_ICON_OPTIONS strings in
   AdAndroidandIso.jsx — admin-authored services reference these exact keys. */
export const SERVICE_ICON_MAP = {
  NativeAndroid: { Icon: FaAndroid, color: "#3DDC84" },
  NativeIOS: { Icon: FaApple, color: "#0f172a" },
  CrossPlatform: { Icon: Repeat, color: "#3B82F6" },
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  ReactNative: { Icon: SiReact, color: "#61DAFB" },
  UIUX: { Icon: PenTool, color: "#ec4899" },
  Maintenance: { Icon: Wrench, color: "#f59e0b" },
  APIIntegration: { Icon: Webhook, color: "#14b8a6" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  AppStoreDeployment: { Icon: FaAppStoreIos, color: "#0f172a" },
  GooglePlayPublishing: { Icon: FaGooglePlay, color: "#00B2FF" },
  EnterpriseApps: { Icon: Building2, color: "#0ea5e9" },
  EcommerceApps: { Icon: ShoppingCart, color: "#3B82F6" },
  FoodDeliveryApps: { Icon: UtensilsCrossed, color: "#f97316" },
  HealthcareApps: { Icon: HeartPulse, color: "#ef4444" },
  FinTechApps: { Icon: Landmark, color: "#059669" },
  BookingApps: { Icon: CalendarCheck, color: "#8b5cf6" },
  SocialMediaApps: { Icon: Share2, color: "#ec4899" },
  EducationApps: { Icon: GraduationCap, color: "#f59e0b" },
  CustomBusinessApps: { Icon: Briefcase, color: "#1e40af" },
};

/* Keyed by the free-text `name` field admins type into the Technologies tab.
   Falls back to a generic braces icon in Braces-blue when unmatched. */
export const TECH_META = {
  Kotlin: { Icon: SiKotlin, color: "#7F52FF", category: "Mobile" },
  Java: { Icon: FaJava, color: "#E76F00", category: "Mobile" },
  Swift: { Icon: SiSwift, color: "#F05138", category: "Mobile" },
  SwiftUI: { Icon: SiSwift, color: "#F05138", category: "Mobile" },
  Flutter: { Icon: SiFlutter, color: "#02569B", category: "Mobile" },
  "React Native": { Icon: SiReact, color: "#61DAFB", category: "Mobile" },
  "Node.js": { Icon: SiNodedotjs, color: "#3C873A", category: "Backend" },
  Express: { Icon: SiExpress, color: "#1F2937", category: "Backend" },
  Django: { Icon: SiDjango, color: "#0C4B33", category: "Backend" },
  MongoDB: { Icon: SiMongodb, color: "#47A248", category: "Database" },
  MySQL: { Icon: SiMysql, color: "#4479A1", category: "Database" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1", category: "Database" },
  SQLite: { Icon: SiSqlite, color: "#003B57", category: "Database" },
  AWS: { Icon: FaAws, color: "#FF9900", category: "Cloud" },
  "Google Cloud": { Icon: SiGooglecloud, color: "#4285F4", category: "Cloud" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28", category: "Cloud" },
  Appwrite: { Icon: SiAppwrite, color: "#F02E65", category: "Cloud" },
  "Android Studio": { Icon: SiAndroidstudio, color: "#3DDC84", category: "Tools" },
  Xcode: { Icon: SiXcode, color: "#147EFB", category: "Tools" },
  GitHub: { Icon: FaGithub, color: "#181717", category: "Tools" },
  Docker: { Icon: SiDocker, color: "#2496ED", category: "Tools" },
  Figma: { Icon: SiFigma, color: "#F24E1E", category: "Tools" },
  Postman: { Icon: SiPostman, color: "#FF6C37", category: "Tools" },
};

export const TECH_CATEGORIES = ["Mobile", "Backend", "Database", "Cloud", "Tools"];

export const DEFAULT_TECH_ICON = { Icon: Braces, color: "#e31e24" };
