"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md py-4 sticky top-0 z-50">
      <div className="container mx-auto max-w-[1200px] flex items-center px-4">
        <Link href="/" className="flex items-center">
          <Image src="/icon.png" alt="Logo" width={170} height={150} />
        </Link>
        <div className="flex-1 flex justify-center space-x-8">
          <Link
            href="/"
            className="text-[#4b778e] hover:text-[#89BBD6] transition-colors px-4 py-2 rounded-lg hover:bg-[#4b778e]/10"
          >
            Főoldal
          </Link>
          <Link
            href="/katalogus"
            className="text-[#4b778e] hover:text-[#89BBD6] transition-colors px-4 py-2 rounded-lg hover:bg-[#4b778e]/10"
          >
            Katalógus
          </Link>
          <Link
            href="/rendeles"
            className="text-[#4b778e] hover:text-[#89BBD6] transition-colors px-4 py-2 rounded-lg hover:bg-[#4b778e]/10"
          >
            Rendelés
          </Link>
          <Link
            href="/kapcsolat"
            className="text-[#4b778e] hover:text-[#89BBD6] transition-colors px-4 py-2 rounded-lg hover:bg-[#4b778e]/10"
          >
            Kapcsolat
          </Link>
          </div>
          <div className="flex items-center gap-2 ml-4">
          {user ? (
            <div className="flex items-center gap-2 ml-4">
              <div className="flex items-center bg-[#4b778e]/10 rounded-full pr-4 pl-2 py-1 hover:bg-[#4b778e]/20 transition-all">
                <FaUserCircle className="text-[#4b778e] text-xl mr-2" />
                <span className="text-[#4b778e] font-medium">
                  {`${user.first_name} ${user.last_name}`}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white border-2 border-[#4b778e] text-[#4b778e] hover:bg-[#4b778e] hover:text-white transition-all duration-300 px-4 py-1.5 rounded-full font-medium"
              >
                Kijelentkezés
              </button>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="bg-[#4b778e] text-white hover:bg-[#89BBD6] transition-all duration-300 px-6 py-2 rounded-full font-medium ml-4 flex items-center gap-2"
            >
              <FaUserCircle className="text-lg" />
              Bejelentkezés
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
