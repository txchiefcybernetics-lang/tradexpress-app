import Sidebar from "@/components/enterprise/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <main className="ml-72 min-h-screen p-8">
        {children}
      </main>
    </div>
  );
}