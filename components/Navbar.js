import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#6CABCC] text-white py-1 px-6 flex justify-between items-center fixed top-0 w-full shadow-md z-50">
      {/* Logó */}
      <div className="flex items-center gap-2">
        <Link href="/"><Image
          src="/icon.png"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        </Link>
        <span className="text-2xl font-[Poppins, sans-serif] italic">Gerti&apos;s Dessert Island</span>
      </div>

      {/* Menü */}
      <ul className="flex space-x-6 text-lg font-light">
        <li><Link href="/" className="hover:text-blue-500">Kezdőlap</Link></li>
        <li><Link href="/katalogus" className="hover:text-blue-500">Katalógus</Link></li>
        <li><Link href="/rendeles" className="hover:text-blue-500">Rendelés</Link></li>
        <li><Link href="/kapcsolat" className="hover:text-blue-500">Kapcsolat</Link></li>
      </ul>
    </nav>
  );
}
