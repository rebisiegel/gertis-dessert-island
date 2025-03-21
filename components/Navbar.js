import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  
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
          <Link
            href="/auth/login"
            className="text-[#4b778e] hover:text-[#89BBD6] transition-colors px-4 py-2 rounded-lg hover:bg-[#4b778e]/10"
          >
            Bejelentkezés
          </Link>
        </div>
      </div>
    </nav>
  );
}
