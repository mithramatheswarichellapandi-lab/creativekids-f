import React from "react";
import { motion } from "framer-motion";
import {
  Baby,
  Home,
  Building,
  Users,
  BookOpen,
  Activity,
} from "lucide-react";

const programs = [
  {
    title: "Preschool Programs (1.5 years to 5.5 years)",
    description:
      "Our preschool offers a premium early learning experience that blends structured academics with creative exploration. With a strong focus on phonics, communication, and foundational skills, we nurture confident, curious, and independent learners..",
    icon: Baby,
    color: "from-pink-500 to-pink-600",
    bg: "bg-pink-50",
  },
  {
    title: "Daycare",
    description:
      "A premium daycare experience built on trust, care, and creativity. Creative Kidz ensures your child enjoys a perfect balance of comfort, play, and early learning.",
    icon: Home,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Corporate Daycare",
    description:
      "Empower the workforce with dependable, high-quality childcare. Creative Kidz Corporate Day Care creates a safe, engaging space for children—so the employees stay focused, stress-free, and productive.",
    icon: Building,
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Nanny @ Home",
    description:
      "Our trained and verified caregivers provide personalized attention in the comfort of your home—ensuring your child feels safe, secure, and loved at all times.",
    icon: Users,
    color: "from-green-500 to-green-600",
    bg: "bg-green-50",
  },
  {
    title: "After School Programs",
    description:
      "Fun and educational activities to support children beyond school hours.",
    icon: BookOpen,
    color: "from-yellow-500 to-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    title: "Yoga Sessions",
    description:
      "Mindful yoga sessions promoting physical health and mental well-being.",
    icon: Activity,
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
  },
];

const ProgramsPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-16">
      
      {/* 🔥 Heading */}
<div className="text-center mb-20">
  
  {/* Title */}
  <h1 className="text-5xl md:text-6xl font-extrabold">
    <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Care & Learning
    </span>
  </h1>

  {/* Divider Line */}
  <div className="mt-4 flex justify-center">
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
  </div>

  {/* Caption */}
  <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
    Building strong foundations through play, care, and creativity.
  </p>

</div>
      {/* 🎨 Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, index) => {
          const Icon = program.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`relative ${program.bg} border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                {/* 🔥 Top Row (Icon + Title) */}
                <div className="flex items-center gap-4 mb-4">
                  
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${program.color} text-white shadow-md group-hover:scale-110 transition`}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {program.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-5 h-1 w-10 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 rounded-full"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramsPage;