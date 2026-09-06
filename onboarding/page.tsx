export default function OnboardingPage() {
  return (
    <main className="min-h-screen p-10">

      <h1 className="text-4xl font-bold">
        TX Handshake
      </h1>

      <p className="mt-3 text-zinc-500">
        Initializing TradeXpress environment...
      </p>


      <div className="mt-8 grid gap-4 md:grid-cols-2">


        <div className="rounded-xl border p-6">
          <h2 className="font-semibold">
            🔐 Identity Verification
          </h2>

          <p className="mt-2 text-sm">
            Checking user authentication and access level.
          </p>

          <span className="text-green-600">
            Ready
          </span>
        </div>



        <div className="rounded-xl border p-6">
          <h2 className="font-semibold">
            🌐 Environment
          </h2>

          <p className="mt-2 text-sm">
            Detecting TX runtime and connection.
          </p>

          <span className="text-green-600">
            Connected
          </span>
        </div>



        <div className="rounded-xl border p-6">
          <h2 className="font-semibold">
            🧠 AI Workspace
          </h2>

          <p className="mt-2 text-sm">
            Loading TX AI Command Center.
          </p>

          <span className="text-yellow-600">
            Initializing
          </span>
        </div>



        <div className="rounded-xl border p-6">
          <h2 className="font-semibold">
            🛡 Security Policy
          </h2>

          <p className="mt-2 text-sm">
            Applying roles and permissions.
          </p>

          <span className="text-green-600">
            Active
          </span>
        </div>


      </div>


      <button
        className="mt-10 rounded-xl bg-black px-6 py-3 text-white"
      >
        Enter TX Workspace
      </button>


    </main>
  );
}
