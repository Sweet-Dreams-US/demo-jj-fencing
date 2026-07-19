import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin-dashboard";

export const metadata: Metadata = {
  title: "Owner Dashboard (Demo) | JJ Fencing & Construction",
  description: "A preview of the JJ Fencing & Construction owner portal — jobs, estimates, schedule, staff, materials, analytics and accounting.",
};

export default function AdminPage() {
  return (
    <div className="bg-cream-deep/60 px-4 py-8 sm:px-8">
      <AdminDashboard />
    </div>
  );
}
