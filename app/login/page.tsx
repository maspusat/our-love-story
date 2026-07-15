"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Login berhasil ❤️");

      router.refresh();

      router.push("/dashboard");
    } catch {
      toast.error("Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-white px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-rose-600">
            ❤️ Our Love Story
          </h1>

          <p className="mt-3 text-gray-500">
            Login untuk mengelola website.
          </p>

        </div>

        <form
          onSubmit={login}
          className="mt-10 space-y-5"
        >

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>

        </form>

      </div>
    </main>
  );
}