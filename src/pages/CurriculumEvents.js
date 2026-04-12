import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion"; // For popup animations

function CurriculumEvents() {
  const events = [
    {
      title: "Drawing Competition",
      date: "12",
      month: "MAR",
      description: "Kids explore creativity with colors."
    },
    {
      title: "Annual Day Celebration",
      date: "25",
      month: "APR",
      description: "Dance, drama and joyful celebrations."
    },
    {
      title: "Sports Day",
      date: "15",
      month: "MAY",
      description: "Outdoor fun games and happy memories."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 120 }
    })
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT - Admission Criteria */}
        <div className="relative p-8 sm:p-10 md:p-12 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl h-auto lg:h-[500px] overflow-hidden">
          
          {/* Floating shapes */}
          <div className="absolute -top-8 -left-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-pink-300/30 blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-8 -right-8 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-purple-400/20 blur-3xl animate-pulse-slow"></div>

          {/* Heading & Content */}
          <p className="text-yellow-500 uppercase tracking-widest text-xs sm:text-sm mb-2 font-medium relative z-10">
            Where Little Minds Grow Big Dreams
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-gray-900 relative z-10 animate-pop">
            ADMISSION-CRITERIA
          </h3>
          <ul className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 relative z-10">
            {[
              "Day care (1 year to 10 years)",
              "Playschool (1.6 yrs to 2.5 yrs)",
              "Pre KG (2.6 yrs to 3.5 yrs)",
              "LKG (3.6 yrs to 4.5 yrs)",
              "UKG (4.6 yrs to 5.5 yrs)"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 sm:gap-3">
                <FaCheckCircle className="text-yellow-400 text-base sm:text-xl" />
                {item}
              </li>
            ))}
          </ul>

          {/* 🎓 Top-right icon */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-2xl sm:text-3xl shadow-lg animate-bounce z-10">
            🎓
          </div>

          {/* Glass effect boy image */}
          <div className="absolute top-10 sm:top-12 -right-8 sm:-right-12 h-[200px] sm:h-full w-2/3 z-0 overflow-hidden rounded-r-3xl bg-white/20 backdrop-blur-xl">
            <img
              src="/admission.png"
              alt="Boy"
              className="h-full w-full object-contain mix-blend-multiply opacity-90"
            />
          </div>
        </div>

        {/* RIGHT - Events */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-10 text-center lg:text-left animate-pulse">
            🎉 Upcoming Events
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                className="flex flex-col sm:flex-row items-center bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 cursor-pointer transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                {/* Date Box */}
                <div className="flex flex-row sm:flex-col items-center justify-center bg-gradient-to-b from-pink-400 to-pink-500 text-white rounded-xl px-4 py-2 sm:px-5 sm:py-4 mr-0 sm:mr-6 mb-3 sm:mb-0">
                  <span className="text-xs sm:text-sm font-semibold tracking-wider">
                    {event.month}
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold leading-none">
                    {event.date}
                  </span>
                </div>

                {/* Event Details */}
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl md:text-xl mb-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-base">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default CurriculumEvents;