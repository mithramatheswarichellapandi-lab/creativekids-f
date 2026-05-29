import React from "react";
import {
  FaCertificate,
  FaUniversity,
} from "react-icons/fa";

function Home() {
  const recognitions = [
    {
      title: "Recognised by Tamil Nadu Government",
      icon: <FaUniversity size={42} />,
      bg: "from-purple-500 to-indigo-500",
    },
    {
      title: "ISO Certified Institution",
      icon: <FaCertificate size={42} />,
      bg: "from-cyan-500 to-teal-500",
    },
    {
      title: "Member of Global School Alliance",
      icon: (
        <img
          src="/globalschool.png"
          alt="Global School Alliance"
          className="w-16 h-16 object-contain"
        />
      ),
      bg: "from-orange-400 to-yellow-500",
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fc] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Recognition & Certifications
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recognitions.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.bg} rounded-3xl p-6 h-[250px] flex flex-col items-center justify-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
            >
              {/* Icon */}
              <div className="bg-white w-24 h-24 rounded-2xl flex items-center justify-center shadow-md mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-lg md:text-xl font-semibold leading-snug text-center px-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;