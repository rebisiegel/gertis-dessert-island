import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";



export default function Footer() {
  return (
    <footer className="bg-[#89BBD6] text-white py-10 px-16 w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">

        <div className="flex gap-6 mb-6 md:mb-0">
          <a href="https://www.facebook.com/gertisdessertisland" className="bg-white text-[#4b778e] p-4 rounded-full shadow-md hover:bg-gray-200">
            <FaFacebookF fontSize={30} />
          </a>
          <a href="https://www.instagram.com/nagy.gertrud21/" className="bg-white text-[#4b778e] p-4 rounded-full shadow-md hover:bg-gray-200">
            <FaInstagram fontSize={30} />
          </a>
          <a href="https://www.tiktok.com/@gertis.dessert.island" className="bg-white text-[#4b778e] p-4 rounded-full shadow-md hover:bg-gray-200">
            <FaTiktok fontSize={30} />
          </a>
        </div>

        <div className="text-center" style={{ color:'black' }}>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p>Email: support@gertis-dessert.com</p>
          <p>Telefon: +40 30 123 4567</p>
          <p>Cím: 105 Cukrászda utca, Budapest</p>
        </div>

        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.6590673540377!2d23.17662191181687!3d47.35521870518276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474815d10db28493%3A0xa1ac3b1195bc7da9!2sGerti&#39;s%20Dessert%20Island!5e1!3m2!1shu!2sro!4v1741860920999!5m2!1shu!2sro"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
