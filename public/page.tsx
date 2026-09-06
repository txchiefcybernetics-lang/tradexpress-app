import HeroBanner from "@/components/workspace/overview/HeroBanner";
import QuickActions from "@/components/workspace/overview/QuickActions";
import PreviewGrid from "@/components/workspace/overview/PreviewGrid";

export default function WorkspacePage() {
  return (
    <main className="min-h-screen p-6 space-y-6">

      <HeroBanner />

      <QuickActions />

      <PreviewGrid />

    </main>
  );
}
