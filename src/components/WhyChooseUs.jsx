import React, { useEffect, useRef, useState } from "react";
import { FaSchool, FaChalkboardTeacher, FaArrowUp } from "react-icons/fa";

function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="relative MT-20 py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-br from-white via-red-50 to-yellow-50">

      {/* Glow Background Effects */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-red-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>

      <div className="relative grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT IMAGE GRID ================= */}
        <div className="relative grid grid-cols-2 gap-6">

          <img
            src="/gallery10.jpeg"
            alt=""
            className="rounded-3xl object-cover w-full h-72 shadow-xl hover:scale-105 transition duration-500"
          />

          <img
            src="/gallery12.jpeg"
            alt=""
            className="rounded-3xl object-cover w-full h-72 shadow-xl hover:scale-105 transition duration-500"
          />

          <img
            src="/gallery8.jpeg"
            alt=""
            className="rounded-3xl object-cover w-full h-72 shadow-xl hover:scale-105 transition duration-500"
          />

          <img
            src="/gallery17.jpeg"
            alt=""
            className="rounded-3xl object-cover w-full h-72 shadow-xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 ease-out ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40">

            <p className="text-red-500 font-semibold tracking-widest mb-3">
              PART OF THE FAMILY SINCE 2013
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed">
              We are constantly expanding the range of services offered,
              taking care of children of all ages. Our goal is to carefully
              educate and develop children in a fun way. We strive to turn
              the learning process into a bright event so that children
              study with pleasure.
            </p>

            {/* Stats Section */}
            <div className="flex flex-col md:flex-row gap-10">

              {/* Activities */}
              <div className="flex items-center gap-5 group">
                <div className="bg-red-100 p-6 rounded-full shadow-md group-hover:scale-110 transition duration-300">
                  <FaSchool className="text-3xl text-red-500" />
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-red-500">25</h3>
                  <p className="text-gray-700 font-semibold">
                    Outdoor Activities
                  </p>
                </div>
              </div>

              {/* Teachers */}
              <div className="flex items-center gap-5 group">
                <div className="bg-yellow-100 p-6 rounded-full shadow-md group-hover:scale-110 transition duration-300">
                  <FaChalkboardTeacher className="text-3xl text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-yellow-500">15</h3>
                  <p className="text-gray-700 font-semibold">
                    Loving Teachers
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-red-500 to-yellow-500 hover:scale-110 transition p-4 rounded-full text-white shadow-xl"
      >
        <FaArrowUp />
      </button>

    </section>
  );
}

export default WhyChooseUs;