import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#f5f8fa] text-[#A8A8A8] py-12 px-8 w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Közösségi média */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6 text-center text-[#4b778e]">
              Kövess minket
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/gertisdessertisland"
                className="bg-[#6cabcc] text-white p-3 rounded-full hover:bg-[#89BBD6] transition-all hover:scale-105"
              >
                <FaFacebookF fontSize={20} />
              </a>
              <a
                href="https://www.instagram.com/nagy.gertrud21/"
                className="bg-[#6cabcc] text-white p-3 rounded-full hover:bg-[#89BBD6] transition-all hover:scale-105"
              >
                <FaInstagram fontSize={20} />
              </a>
              <a
                href="https://www.tiktok.com/@gertis.dessert.island"
                className="bg-[#6cabcc] text-white p-3 rounded-full hover:bg-[#89BBD6] transition-all hover:scale-105"
              >
                <FaTiktok fontSize={20} />
              </a>
            </div>
          </div>

          {/* Kapcsolat */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-[#4b778e]">
              Kapcsolat
            </h3>
            <div className="space-y-2">
              <p>Email: support@gertis-dessert.com</p>
              <p>Telefon: +40 30 123 4567</p>
              <p>Cím: 105 Cukrászda utca, Budapest</p>
            </div>
          </div>

          {/* Térkép */}
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-4 text-center text-[#4b778e]">
              Térkép
            </h3>
            <div className="w-full h-[150px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10811.627718055368!2d23.179202000000004!3d47.355215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474815d10db28493%3A0xa1ac3b1195bc7da9!2sGerti&#39;s%20Dessert%20Island!5e0!3m2!1shu!2sro!4v1742400081414!5m2!1shu!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#6cabcc]/20 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Gerti&apos;s Dessert Island.
            Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
