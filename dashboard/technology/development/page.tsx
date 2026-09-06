export default function DevelopmentPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        Technology Development
      </h1>

      <div className="grid gap-4 md:grid-cols-3">

        <div className="rounded-xl border p-5">
          <h2 className="font-semibold">
            Application
          </h2>
          <p>TradeXpress Platform</p>
        </div>

        <div className="rounded-xl border p-5">
          <h2 className="font-semibold">
            Framework
          </h2>
          <p>Next.js 16.2.12</p>
        </div>

        <div className="rounded-xl border p-5">
          <h2 className="font-semibold">
            Environment
          </h2>
          <p>Production</p>
        </div>

      </div>
    </div>
  );
}
