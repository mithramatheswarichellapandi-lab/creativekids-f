import React, { useEffect, useState } from "react";

const images = [
  "/s1.jpeg",
  "/s2.jpeg",
  "/s3.jpeg"
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const colors = [
    "text-pink-500",
    "text-yellow-400",
    "text-blue-400",
    "text-green-400",
    "text-purple-500",
    "text-red-400",
    "text-orange-400"
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ================= BACKGROUND SLIDER ================= */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Kids"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex
              ? "opacity-100 scale-110"
              : "opacity-0 scale-100"
          }`}
          style={{
            transition: "opacity 1s ease-in-out, transform 6s ease-in-out"
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-xl text-white space-y-6">

            {/* ===== GRAFFITI TITLE ===== */}
            <div className="animate-fadeInUp">
  <img
    src="/creativekids.png"
    alt="Creative Kidz"
    className="w-[580px] md:w-[1050px] drop-shadow-2xl"
  />
</div>
            {/* Stylish Line */}
            <div className="w-28 h-1 bg-yellow-400 rounded-full"></div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl font-semibold">
              Run by{" "}
              <span className="text-yellow-300">
                Aditeya Educational Trust
              </span>
            </p>

            <p className="text-lg md:text-xl text-gray-200">
              Madurai
            </p>

            {/* Badge */}
            <div className="inline-block bg-yellow-400 px-6 py-3 rounded-full shadow-lg">
              <p className="text-sm md:text-base font-bold text-black tracking-wide">
                ✨ Recognised by Government of Tamil Nadu ✨
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;