export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          System Settings
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Configure enterprise settings, user access, security,
          integrations, and application preferences.
        </p>
      </div>

      {/* Auto Layout */}
      <section
        className="
          grid
          gap-6
          [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]
          [grid-auto-rows:minmax(180px,auto)]
          items-start
          justify-items-stretch
          content-start
        "
      >
        <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6">
          <h3 className="text-lg font-semibold">👥 Users</h3>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Manage user accounts and permissions.
          </p>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6">
          <h3 className="text-lg font-semibold">🔒 Security</h3>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Authentication, MFA, and password policies.
          </p>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6">
          <h3 className="text-lg font-semibold">🔗 Integrations</h3>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Connect external services and APIs.
          </p>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6">
          <h3 className="text-lg font-semibold">⚙️ Preferences</h3>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Regional settings, themes, and notifications.
          </p>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6 min-h-96">
          <h2 className="text-xl font-semibold">
            User Roles & Permissions
          </h2>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6 min-h-96">
          <h2 className="text-xl font-semibold">
            System Configuration
          </h2>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 shadow p-6 min-h-64 col-span-full">
          <h2 className="text-xl font-semibold">
            Audit Logs & Activity History
          </h2>
        </div>
      </section>
    </div>
  );
}
