import React, { useState } from "react";
import API_BASE_URL from "../config/api";

function EnquiryModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    parentName: "",
    parentPhone: "",
    childName: "",
    dob: "",
    category: "",
    consent: false,
  });

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async () => {
  if (!formData.consent) {
    alert("Please accept consent.");
    return;
  }

  try {
    // 🔹 1️⃣ Save to database
    await fetch(`${API_BASE_URL}/api/enquiry/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // 🔹 2️⃣ Open WhatsApp
    const message = `
New Enquiry:
Parent Name: ${formData.parentName}
Parent Phone: ${formData.parentPhone}
Child Name: ${formData.childName}
DOB: ${formData.dob}
Category: ${formData.category}
    `;

    const phoneNumber = "919597025555"; 
  // replace with real number
  
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    onClose();

  } catch (error) {
    console.error("Error saving enquiry:", error);
    alert("Something went wrong.");
  }
};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-xl relative">

        <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">
          Admission Enquiry Form
        </h2>

        <input
          type="text"
          name="parentName"
          placeholder="Parent Name"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="parentPhone"
          placeholder="Parent Phone Number"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="childName"
          placeholder="Child Name"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        />

        <input
          type="date"
          name="dob"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        />

        <select
          name="category"
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Daycare">Daycare</option>
          <option value="Pre School">Pre School</option>
          <option value="LKG">LKG</option>
          <option value="UKG">UKG</option>
        </select>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="consent"
            className="mr-2"
            onChange={handleChange}
          />
          <label className="text-sm text-gray-600">
            I agree to be contacted by the school.
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition"
        >
          Submit
        </button>

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-lg"
        >
          ✖
        </button>

      </div>
    </div>
  );
}

export default EnquiryModal;
