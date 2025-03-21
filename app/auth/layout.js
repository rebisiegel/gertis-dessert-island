"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AuthLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const isLogin = pathname === "/auth/login";

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-[0_8px_32px_rgba(137,187,214,0.15)] w-full max-w-md overflow-hidden mx-4 border border-[#89BBD6]/30 relative">
        {/* Bezárás gomb */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#4b778e] hover:text-[#89BBD6] transition-colors p-2 rounded-lg hover:bg-[#4b778e]/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Váltó gombok */}
        <div className="relative h-[50px] bg-[#f5f8fa] rounded-lg overflow-hidden mb-8">
          <div className="flex h-full relative z-10">
            <Link
              href="/auth/login"
              className={`flex-1 text-lg font-medium transition-colors duration-300 flex items-center justify-center ${
                isLogin ? "text-white" : "text-[#4b778e]/90"
              }`}
            >
              Bejelentkezés
            </Link>
            <Link
              href="/auth/signup"
              className={`flex-1 text-lg font-medium transition-colors duration-300 flex items-center justify-center ${
                !isLogin ? "text-white" : "text-[#4b778e]/90"
              }`}
            >
              Regisztráció
            </Link>
          </div>
          <div
            className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-[#4b778e] via-[#89BBD6] to-[#4b778e] rounded-lg transition-all duration-500 ${
              isLogin ? "left-0" : "left-1/2"
            }`}
          />
        </div>

        {children}
      </div>
    </div>
  );
}
