import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const [showQR, setShowQR] = useState(false);

  return (
    <footer className="bg-gradient-to-r from-[#5b136b] to-[#7e1f91] text-white relative overflow-hidden">

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-10 px-8 py-12">

        {/* Column 1 */}
        <div>
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            Giving your child the <br /> best start in life
          </h2>

          <div className="text-sm mb-6 space-y-3">

  {/* Branch 1 */}
  <div className="flex gap-3">
    <FaMapMarkerAlt className="text-yellow-400 mt-1" />
    <p>
      Branch-1 H29, Malligai Nagar, TNHB Colony, Anaiyur, Madurai
    </p>
  </div>

  {/* Branch 2 */}
  <div className="flex gap-3">
    <FaMapMarkerAlt className="text-yellow-400 mt-1" />
    <p>
      Branch-2 ELCOT, Mattuthavani, Madurai
    </p>
  </div>

</div>

          <div className="flex gap-3">
            <img src="/gallery15.jpeg" className="w-24 h-20 rounded-xl object-cover hover:scale-105 transition" />
            <img src="/gallery14.jpeg" className="w-24 h-20 rounded-xl object-cover hover:scale-105 transition" />
            <img src="/gallery19.jpeg" className="w-24 h-20 rounded-xl object-cover hover:scale-105 transition" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <p className="mb-3">
            Monday to Friday: <strong>8.30am – 03.00pm</strong>
          </p>
          <p className="mb-6">
            Saturday, Sunday: <strong>Special Care Available</strong>
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-yellow-400 p-3 rounded-full text-black">
              <FaEnvelope />
            </div>
            <p>creativekidzplayschool@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 p-3 rounded-full text-black">
              <FaPhoneAlt />
            </div>
            <p>+91 9597025555</p>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Services</h3>
          <div className="w-12 h-1 bg-yellow-400 mb-6"></div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <p>• Daycare</p>
            <p>• Pre-school Programs</p>
            <p>• Nanny @ Home</p>
             <p>• Corporate Daycare</p>
            <p>• After School Programs</p>
             <p>• Daily Fittness Routine</p>
          </div>
        </div>
      </div>

      {/* 🔥 Curved Floating Social Bar */}
      <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-lg px-5 py-3 rounded-full flex gap-4 shadow-xl border border-white/20">

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1D3a5EYqvz/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full hover:scale-110 transition"
        >
          <FaFacebookF className="text-[#1877F2]" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919597025555"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full hover:scale-110 transition"
        >
          <FaWhatsapp className="text-[#25D366]" />
        </a>

        {/* Instagram (QR Popup) */}
        <button
          onClick={() => setShowQR(true)}
          className="bg-white p-3 rounded-full hover:scale-110 transition"
        >
          <FaInstagram className="text-[#E4405F]" />
        </button>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@creativekidz3567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full hover:scale-110 transition"
        >
          <FaYoutube className="text-[#FF0000]" />
        </a>

      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 left-6 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaArrowUp />
      </button>

      {/* 📱 Instagram QR Popup */}
      {showQR && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl text-center w-80 relative shadow-2xl">

            <button
              onClick={() => setShowQR(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Follow us on Instagram
            </h2>

            <img
              src="/instagram-qr.png"
              alt="Instagram QR"
              className="w-52 h-52 mx-auto mb-4"
            />

            <a
              href="https://instagram.com/creativekidz2011"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E4405F] text-white px-5 py-2 rounded-full hover:opacity-90 transition"
            >
              Open Instagram
            </a>

          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;