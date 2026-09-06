export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">
        <h1 className="text-2xl font-bold">
          Reset Password
        </h1>

        <p className="mt-2 text-slate-600">
          Enter your new password below.
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="password"
            placeholder="New password"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full rounded-lg border p-3"
          />

          <button
            className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
          >
            Update Password
          </button>
        </form>
      </div>
    </main>
  );
}
