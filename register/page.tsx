"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Account created. Please check your email for verification."
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-3 text-zinc-400">
            Join TradeXpress Enterprise Platform
          </p>
        </div>


        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Full Name
            </label>

            <input
              className="h-12 w-full rounded-lg border border-zinc-700 bg-black px-4 text-white"
              value={fullName}
              onChange={(e)=>setFullName(e.target.value)}
              required
            />
          </div>


          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="hello@tradexpress.co"
              className="h-12 w-full rounded-lg border border-zinc-700 bg-black px-4 text-white"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>


          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Minimum 8 characters"
              className="h-12 w-full rounded-lg border border-zinc-700 bg-black px-4 text-white"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>


          {message && (
            <div className="rounded-lg border border-zinc-700 bg-black p-3 text-sm text-zinc-300">
              {message}
            </div>
          )}


          <button
            disabled={loading}
            className="h-12 w-full rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

        </form>


        <div className="mt-6 text-center">
          <button
            onClick={()=>router.push("/login")}
            className="text-sm text-blue-400 hover:underline"
          >
            Already have an account? Sign In
          </button>
        </div>

      </div>
    </main>
  );
}
