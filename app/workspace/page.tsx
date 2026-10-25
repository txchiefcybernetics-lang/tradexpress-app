import dynamic from 'next/dynamic';

const HeroBanner = dynamic(() => import('../../components/workspace/overview/HeroBanner'), { ssr: false });
const QuickActions = dynamic(() => import('../../components/workspace/overview/QuickActions'), { ssr: false });
const PreviewGrid = dynamic(() => import('../../components/workspace/overview/PreviewGrid'), { ssr: false });

export default function WorkspacePage() {
  return (
    <main className="min-h-screen p-6 space-y-6">
      <HeroBanner />
      <QuickActions />
      <PreviewGrid />
    </main>
  );
}
