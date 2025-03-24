"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { login as apiLogin } from "@/api/auth";
import Link from "next/link";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await apiLogin({ email, password });
      login(response.user);
      router.push("/");
    } catch (error) {
      setError("Hibás email cím vagy jelszó");
      console.error("Bejelentkezési hiba:", error);
    }
  };

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-[#4b778e] mb-2">
          Bejelentkezés
        </h2>
        <p className="text-gray-600">Üdvözöljük újra!</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email cím"
            className="w-full h-[50px] px-6 rounded-lg border border-[#89BBD6]/30 focus:border-[#4b778e] outline-none text-lg transition-colors bg-white/50"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Jelszó"
            className="w-full h-[50px] px-6 rounded-lg border border-[#89BBD6]/30 focus:border-[#4b778e] outline-none text-lg transition-colors bg-white/50"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#4b778e] hover:bg-[#89BBD6] text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Bejelentkezés
        </button>
      </form>

      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

      <div className="mt-6 text-center text-sm">
        <p className="text-gray-600">
          Még nincs fiókja?{" "}
          <Link
            href="/auth/signup"
            className="text-[#4b778e] hover:text-[#89BBD6]"
          >
            Regisztráljon most
          </Link>
        </p>
      </div>
    </>
  );
}
