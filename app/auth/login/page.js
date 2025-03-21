"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { logIn } from "@/api/auth";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const formData = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      const response = await logIn(formData);

      if (response.success) {
        // Sikeres bejelentkezés után átirányítás a főoldalra
        router.push("/");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        // Backend által küldött hibaüzenet
        setError(error.response.data.message);
      } else {
        setError("Hibás email cím vagy jelszó");
      }
      console.error("Bejelentkezési hiba:", error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-[#4b778e] mb-2">
          Bejelentkezés
        </h2>
        <p className="text-gray-600">Üdvözöljük újra!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email cím"
            className="w-full h-[50px] px-6 rounded-lg border border-[#89BBD6]/30 focus:border-[#4b778e] outline-none text-lg transition-colors bg-white/50"
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Jelszó"
            className="w-full h-[50px] px-6 rounded-lg border border-[#89BBD6]/30 focus:border-[#4b778e] outline-none text-lg transition-colors bg-white/50"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full h-[50px] rounded-lg relative overflow-hidden group"
        >
          <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-[#4b778e] via-[#89BBD6] to-[#4b778e] group-hover:opacity-90"></div>
          <span className="relative text-white text-lg font-medium">
            Bejelentkezés
          </span>
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
