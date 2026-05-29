import React, { useState } from "react";
import EnquiryModal from "./EnquiryModal";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const colors = [
    "text-pink-500",
    "text-yellow-400",
    "text-blue-400",
    "text-green-400",
    "text-purple-500",
    "text-red-400",
    "text-orange-400",
  ];

  const menuItems = ["Home", "About", "Gallery", "Programs", "Contact"];

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 md:top-6 z-50 flex justify-center">
        <nav
          className="w-[95%] max-w-7xl 
          bg-white/70 backdrop-blur-xl 
          border border-white/40
          shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
          rounded-full px-6 md:px-10 py-4 
          flex justify-between items-center 
          transition-all duration-300"
        >
          {/* Logo + Tagline */}
          <div className="flex items-center gap-2">
            <img
              src="/log.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />

            <div className="flex flex-col items-center justify-center leading-tight">
              <img
                src="/creativekids.png"
                alt="Creative Kidz"
                className="h-10 md:h-12 w-auto object-contain"
              />

              {/* Centered tagline */}
              <span className="text-[11px] md:text-xs text-gray-600 font-semibold text-center">
                Creating Champs
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            {menuItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative group transition duration-300 ${
                  colors[i % colors.length]
                }`}
              >
                <span className="group-hover:scale-105 transition">
                  {item}
                </span>
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 
                  bg-gradient-to-r from-pink-500 to-purple-500 
                  transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            ))}

            <button
              onClick={() => setShowModal(true)}
              className="ml-4 bg-gradient-to-r from-pink-500 to-purple-500 
                text-white px-6 py-2 rounded-full 
                shadow-lg hover:shadow-xl 
                hover:scale-105 transition-all duration-300"
            >
              Enquiry
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1 focus:outline-none"
            >
              <span
                className={`block h-1 w-7 rounded-full bg-gray-700 transition-transform duration-300 ${
                  mobileMenu ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-1 w-7 rounded-full bg-gray-700 transition-opacity duration-300 ${
                  mobileMenu ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-1 w-7 rounded-full bg-gray-700 transition-transform duration-300 ${
                  mobileMenu ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-30"
                onClick={() => setMobileMenu(false)}
              />

              {/* Side Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 w-64 h-full bg-white/95 backdrop-blur-lg shadow-2xl z-40 p-6 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-4 mt-10">
                  {menuItems.map((item, i) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`text-lg font-semibold ${
                        colors[i % colors.length]
                      }`}
                      onClick={() => setMobileMenu(false)}
                    >
                      {item}
                    </a>
                  ))}

                  <button
                    onClick={() => {
                      setShowModal(true);
                      setMobileMenu(false);
                    }}
                    className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 
                      text-white px-4 py-2 rounded-full shadow-lg"
                  >
                    Enquiry
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default Navbar;