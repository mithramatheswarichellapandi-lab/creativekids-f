import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function CurriculumEvents() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Shreifa Sulaiman",
      review: `Creative Kids in Madurai is a wonderful place for children.
It focuses on overall development and creativity.

The environment is caring and supportive.
Children are well taken care of daily.

A safe and happy place for learning.`,
    },
    {
      name: "Elangamani",
      review: `Very good school with a caring environment.
Teachers are dedicated and supportive.

Focus on both academics and growth.
Communication with parents is good.

Happy with our child’s progress.`,
    },
    {
      name: "Maha Nive",
      review: `Beautiful school with natural surroundings.
Children learn discipline and meditation.

Physical activities are well included.
Peaceful and healthy environment.`,
    },
    {
      name: "Sayatha Lubna",
      review: `My kids love going to school daily.
Staff are caring and supportive.

Safe and engaging environment.
Very satisfied with experience.`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-14 md:py-20 bg-[#f3eef5] overflow-hidden">

      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <motion.div
          className="absolute w-24 h-24 md:w-32 md:h-32 bg-pink-200 rounded-full opacity-30"
          style={{ top: "10%", left: "5%" }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-20 h-20 md:w-24 md:h-24 bg-purple-200 rounded-full opacity-30"
          style={{ top: "60%", left: "10%" }}
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-28 h-28 md:w-40 md:h-40 bg-yellow-200 rounded-full opacity-20"
          style={{ top: "20%", right: "10%" }}
          animate={{ y: [0, 35, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

      </div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SECTION */}
        <div className="relative bg-gradient-to-r from-gray-100 to-white p-6 md:p-10 rounded-[30px] shadow-lg overflow-hidden">

          {/* Badge */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center rounded-full text-lg md:text-xl shadow-md">
            🎓
          </div>

          <p className="text-yellow-500 font-semibold tracking-widest text-xs md:text-sm mb-3 md:mb-4">
            WHERE LITTLE MINDS GROW BIG DREAMS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 md:mb-8">
            ADMISSION <br /> CRITERIA
          </h2>

          <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">

            {[
              "Day care (1 year to 10 years)",
              "Playschool (1.6 yrs to 2.5 yrs)",
              "Pre KG (2.6 yrs to 3.5 yrs)",
              "LKG (3.6 yrs to 4.5 yrs)",
              "UKG (4.6 yrs to 5.5 yrs)",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-yellow-400 text-lg mt-1" />
                <span>{item}</span>
              </li>
            ))}

          </ul>

          {/* Kid Image */}
          <img
            src="/kid.jpg"
            alt="kid"
            className="hidden sm:block absolute bottom-0 right-0 w-28 md:w-44 lg:w-52"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 md:mb-12 text-center leading-tight px-2">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text">
              Voice of Creative Kidz Family
            </span>
          </h2>

          <div className="w-full max-w-[550px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >

                {/* CARD */}
                <div className="relative overflow-hidden rounded-[28px] bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-6 md:p-10">

                  {/* Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-20"></div>

                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-20"></div>

                  {/* Quote Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl mb-5">
                    <FaQuoteLeft className="text-white text-xl md:text-2xl" />
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line mb-6 relative z-10">
                    {testimonials[current].review}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-pink-300 to-transparent mb-5"></div>

                  {/* Footer */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">

                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900">
                        {testimonials[current].name}
                      </h4>

                      <p className="text-xs md:text-sm text-pink-500 font-medium mt-1">
                        Happy Parent
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white text-xs md:text-sm font-semibold px-3 py-2 rounded-full shadow-lg">
                      ★★★★★
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">

            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:scale-110 transition duration-300 text-lg"
            >
              ←
            </button>

            <button
              onClick={() =>
                setCurrent((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:scale-110 transition duration-300 text-lg"
            >
              →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CurriculumEvents;