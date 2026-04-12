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
  const [selectedQR, setSelectedQR] = useState(null);
  const [selectedLink, setSelectedLink] = useState("");

  return (
    <footer className="bg-[#5b136b] text-white relative overflow-hidden">

      {/* Main Footer Content */}
      <div className="grid md:grid-cols-3 gap-10 px-10 py-12">

        {/* Column 1 */}
        <div>
          <h2 className="text-3xl font-bold leading-snug mb-4">
            Giving your child the <br /> best start in life
          </h2>

          <div className="flex items-start gap-3 text-sm mb-6">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
            <p>
              Branch-1 H29, Malligai Nagar, TNHB Colony, Anaiyur, Madurai <br />
              Branch-2 ELCOT, Mattuthavani, Madurai
            </p>
          </div>

          {/* Images */}
          <div className="flex gap-4">
            <img src="/gallery15.jpeg" alt="Kids activity" className="w-28 h-20 rounded-xl object-cover" />
            <img src="/gallery14.jpeg" alt="Kids playing" className="w-28 h-20 rounded-xl object-cover" />
            <img src="/gallery19.jpeg" alt="Kids learning" className="w-28 h-20 rounded-xl object-cover" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
          <div className="w-10 h-1 bg-yellow-400 mb-6"></div>

          <p className="mb-3">
            Monday to Friday: <strong>8.30am – 03.00pm</strong>
          </p>
          <p className="mb-6">
            Saturday, Sunday: <strong>If needed, Special Care</strong>
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
          <h3 className="text-2xl font-bold mb-2">Useful Services</h3>
          <div className="w-10 h-1 bg-yellow-400 mb-6"></div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <p>• Daycare</p>
            <p>• Pre-school</p>
            <p>• Kindergarten</p>
            <p>• Playgroup</p>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 bg-red-500 hover:bg-red-600 p-4 rounded-full shadow-lg"
      >
        <FaArrowUp />
      </button>

      {/* Social Icons */}
      <div className="absolute bottom-6 right-20 flex gap-4">

        {/* Facebook */}
        <button
          onClick={() => {
            setSelectedQR("/facebook-qr.png");
            setSelectedLink("https://facebook.com/yourpage");
          }}
          className="bg-white text-[#5b136b] p-3 rounded-full hover:bg-yellow-400 transition duration-300 shadow-md"
        >
          <FaFacebookF />
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => {
            setSelectedQR("/whatsapp-qr.png");
            setSelectedLink("https://wa.me/919597025555");
          }}
          className="bg-white text-[#5b136b] p-3 rounded-full hover:bg-yellow-400 transition duration-300 shadow-md"
        >
          <FaWhatsapp />
        </button>

        {/* Instagram */}
        <button
          onClick={() => {
            setSelectedQR("/instagram-qr.png");
            setSelectedLink("https://instagram.com/yourusername");
          }}
          className="bg-white text-[#5b136b] p-3 rounded-full hover:bg-yellow-400 transition duration-300 shadow-md"
        >
          <FaInstagram />
        </button>

        {/* YouTube */}
        <button
          onClick={() => {
            setSelectedQR("/youtube-qr.png");
            setSelectedLink("https://youtube.com/yourchannel");
          }}
          className="bg-white text-[#5b136b] p-3 rounded-full hover:bg-yellow-400 transition duration-300 shadow-md"
        >
          <FaYoutube />
        </button>

      </div>

      {/* QR Popup */}
      {selectedQR && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center relative w-80">

            {/* Close */}
            <button
              onClick={() => {
                setSelectedQR(null);
                setSelectedLink("");
              }}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Connect with us
            </h2>

            <img
              src={selectedQR}
              alt="QR Code"
              className="w-56 h-56 object-contain mx-auto mb-4"
            />

            {/* Direct Link */}
            <a
              href={selectedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5b136b] text-white px-5 py-2 rounded-full hover:bg-purple-800 transition"
            >
              Open Now
            </a>

          </div>

        </div>
      )}

    </footer>
  );
}

export default Footer;