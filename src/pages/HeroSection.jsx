import React, { useEffect, useState } from "react";
import EnquiryModal from "../components/EnquiryModal";

const images = ["/s1.jpeg", "/s2.jpeg", "/s3.jpeg"];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  // Background Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ================= BACKGROUND SLIDER ================= */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Kids"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            index === currentIndex
              ? "opacity-100 scale-110"
              : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">

          <div className="max-w-2xl text-white">

            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/creativekids.png"
                alt="Creative Kidz"
                className="w-[320px] md:w-[550px] drop-shadow-2xl"
              />

              <p className="mt-3 text-center md:text-left text-xl md:text-2xl font-semibold">
                Creating Champs
              </p>
            </div>

            {/* Yellow Line */}
            <div className="w-28 h-1 bg-yellow-400 rounded-full mt-5"></div>

            {/* Trust */}
            <p className="mt-5 text-xl md:text-2xl font-semibold">
              Run by{" "}
              <span className="text-yellow-300">
                Aditeya Educational Trust
              </span>
            </p>

            {/* Location */}
            <p className="mt-3 text-lg md:text-xl text-gray-200">
              Madurai
            </p>

            {/* Recognition Section */}
            <div className="mt-4 flex flex-wrap gap-3 items-center">

              {/* Tamil Nadu Govt */}
              <div className="inline-block border border-yellow-300/60 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full shadow-lg">
                <p className="text-sm md:text-base font-semibold tracking-wide text-yellow-200">
                  ✨ Recognised by Tamil Nadu Government
                </p>
              </div>

              

            </div>

            {/* Enquiry Button */}
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 
              hover:scale-105 transition-all duration-300
              text-white px-8 py-3 rounded-full shadow-2xl font-semibold"
            >
              Enquiry
            </button>

          </div>
        </div>
      </div>

      {/* ================= ENQUIRY MODAL ================= */}
      <EnquiryModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />

      {/* ================= CERTIFICATE POPUP ================= */}
{showCertificate && (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">

    <div className="relative bg-white rounded-xl p-3 shadow-2xl">

      {/* Close Button */}
      <button
        onClick={() => setShowCertificate(false)}
        className="absolute top-1 right-3 text-black text-2xl font-bold"
      >
        ×
      </button>

      {/* Certificate Image */}
      <img
        src="/gsa-certificate.png"
        alt="Certificate"
        className="w-[300px] md:w-[400px] rounded-lg"
      />

    </div>
  </div>
)}

    </section>
  );
}

export default HeroSection;