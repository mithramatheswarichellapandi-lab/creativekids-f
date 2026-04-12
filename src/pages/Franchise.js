import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Franchise.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

function FranchiseSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/franchise", formData);
      alert("Franchise enquiry submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        pincode: ""
      });
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="franchise-container">

      {/* LEFT SIDE */}
      <motion.div
        className="franchise-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
 {/* SVG behind text */}
  <svg
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <circle cx="50" cy="50" r="50" fill="rgba(0,0,0,0.05)" />
    <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
    <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
  </svg>
        <h2 className="tag">FRANCHISE OPPORTUNITY</h2>
        <h1>Start Your Own Preschool With Us 🚀</h1>
        <p>
          Be a part of our growing education family.
          Build a bright future for children and a successful business for yourself.
        </p>

        {/* ===== Pan India Locations ===== */}
        <motion.div
          className="franchise-locations mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h4 className="text-xl font-semibold mb-4">Our Preferable Locations Across India</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
            {["Hyderabad", "Bangalore", "Chennai", "Delhi"].map((city, i) => (
              <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE FORM */}
      <motion.div
        className="franchise-form"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3>Enquire Now</h3>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name"
            value={formData.name} onChange={handleChange} required />

          <input type="tel" name="phone" placeholder="Phone Number"
            value={formData.phone} onChange={handleChange} required />

          <input type="email" name="email" placeholder="Email Address"
            value={formData.email} onChange={handleChange} required />

          <input type="text" name="city" placeholder="City"
            value={formData.city} onChange={handleChange} required />

          <input type="text" name="pincode" placeholder="Pincode"
            value={formData.pincode} onChange={handleChange} required />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Enquiry
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default FranchiseSection;