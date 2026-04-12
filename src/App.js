
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import ScrollingFeatures from "./components/ScrollingFeatures";
import Gallery from "./pages/gallery";
import CurriculumEvents from "./pages/CurriculumEvents";
import Footer from "./components/footer";
import WhyChooseUs from "./components/WhyChooseUs";
import Franchise from "./pages/Franchise";
import ProgramsPage from "./pages/ProgramsPage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};



function App() {
const [counts, setCounts] = useState({
  students: 0,
  teachers: 0,
  parents: 0,
  views: 0,
});
  useEffect(() => {
  // Disable Right Click
  const handleContextMenu = (e) => e.preventDefault();
  const handleDragStart = (e) => e.preventDefault();

  const handleKeyDown = (e) => {
    if (
      e.ctrlKey &&
      ["s", "u", "S", "U"].includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("dragstart", handleDragStart);
  document.addEventListener("keydown", handleKeyDown);

  // ✅ Random Counts
  setCounts({
    students: Math.floor(Math.random() * 50) + 30,
    teachers: Math.floor(Math.random() * 30) + 20,
    parents: Math.floor(Math.random() * 70) + 90,
    views: Math.floor(Math.random() * 5000) + 5000,
  });

  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("dragstart", handleDragStart);
    document.removeEventListener("keydown", handleKeyDown);
  };
}, []);
   function Counter({ label, value, color }) {
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1500; // total animation time
    const increment = value / (duration / 20);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        setDisplay(value);
        clearInterval(counter);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="bg-white px-6 py-4 rounded-full shadow-md">
      <h3 className={`text-xl font-bold ${color}`}>
        {display}+
      </h3>
      <p className="text-sm">{label}</p>
    </div>
  );
}
  return (
    <div className="font-sans scroll-smooth">

      <Navbar />
      <HeroSection />
      <ScrollingFeatures />
{/* 🔥 Animated Stats Section */}
<div className="py-10 bg-gradient-to-r from-pink-50 to-purple-50">
  <div className="flex flex-wrap justify-center gap-6 text-center">

    <Counter label="Views" value={counts.views} color="text-pink-500" />
    <Counter label="Students" value={counts.students} color="text-purple-500" />
    <Counter label="Teachers" value={counts.teachers} color="text-blue-500" />
    <Counter label="Parents" value={counts.parents} color="text-green-500" />

  </div>
</div>
      

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-26 bg-gradient-to-b from-white to-pink-50">

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              About <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Creative Kidz
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* About Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed space-y-6"
            >
              <p>
                Established in <span className="font-semibold text-gray-800">2013</span>,
                CREATIVE KIDZ has proudly nurtured young learners for over
                <span className="font-semibold text-gray-800"> 12+ years</span>.
              </p>

              <p>
                Founded under Aditeya Educational Trust by
                <span className="font-semibold text-gray-800"> Mr. Arunkumar</span>,
               with a vision of providing an uncomprised educational start and reaching the unreachables of the society. The institution began with just 9 children and steadily grew through
                dedication, trust and proven results.
              </p>

              <p>
                Today, we nurture 75+ children in a joyful, secure and stimulating
                environment where learning happens through play, structured guidance
                and creative exploration. We concentrate on physical, mental, social and emotional development of each and every child.
              </p>
            </motion.div>

            {/* Leadership */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >

              {[
                {
                  name: "Dr.P.Arunkumar B.Sc,MBA,PGDSA,DNIIT",
                  role: "Founder",
                  img: "/founder2.jpeg",
                  color: "text-pink-500",
                  desc: "Visionary leader dedicated to providing uncompromised early childhood education and building strong foundations for lifelong learning.",
                },
                {
                  name: "Mrs.V.Abirami Arunkumar B.Sc,B.Ed,MCA,GNIIT ",
                  role: "Co-Founder",
                  img: "/founder1.jpg",
                  color: "text-purple-500",
                  desc: "Passionate educator committed to nurturing creativity, confidence and holistic growth in every child.",
                },
              ].map((person, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex gap-6 bg-white/70 backdrop-blur-lg
                  p-6 rounded-3xl shadow-md hover:shadow-2xl
                  transition-all duration-500 hover:-translate-y-2"
                >
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-32 h-40 object-cover rounded-2xl shadow-md"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
                    <p className={`${person.color} font-medium`}>{person.role}</p>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{person.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
<motion.div
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="mt-16 py-8 px-6 bg-[#FDF6EC] relative"
>
  <div className="max-w-6xl mx-auto space-y-20 relative z-10">

    {/* ===== Section Title ===== */}
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold text-center mb-12
                 bg-clip-text text-transparent bg-gradient-to-r
                 from-purple-500 via-pink-500 to-yellow-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Foundations of Tomorrow
    </motion.h2>

    {/* ===== Doodles floated near the sides of cards ===== */}
    {/* Pencil on Right Side */}
    <div
      className="absolute top-24 right-0 w-60 h-100 z-0"
      style={{
        opacity: 0.2,
        transform: "rotate(15deg)", // slight right tilt
      }}
    >
      <img src="/pencil.svg" alt="" className="w-full h-full" />
    </div>

    {/* Book on Left Side */}
    <div
      className="absolute bottom-20 left-0 w-60 h-80 z-0"
      style={{
        opacity: 0.2,
        transform: "rotate(-12deg)", // slight left tilt
      }}
    >
      <img src="/book.svg" alt="" className="w-full h-full" />
    </div>

    {/* ===== Vision & Mission Cards ===== */}
    {[
      {
        title: "🖍️ Our Vision",
        text: "To create a joyful world where tiny hands build big dreams and every child grows with confidence, creativity, and kindness.",
        bg: "bg-yellow-300",
        rotate: "-rotate-2",
      },
      {
        title: "🌼 Our Mission",
        text: "To nurture curiosity through playful learning, colorful experiences, and meaningful moments that help every child shine.",
        bg: "bg-pink-300",
        rotate: "rotate-2",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        className={`relative w-full md:w-4/5 ${i % 2 === 0 ? "mr-auto" : "ml-auto"}`}
      >
        {/* Pencil Body */}
        <div
          className={`${item.bg} ${item.rotate} relative p-10 rounded-full shadow-xl`}
        >
          {/* Pencil Tip */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 
          w-0 h-0 border-t-[25px] border-b-[25px] 
          border-l-[40px] border-t-transparent border-b-transparent border-l-yellow-600"></div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {item.title}
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {item.text}
          </p>
        </div>
      </motion.div>
    ))}

  </div>
</motion.div>
     </div>
      </section>

      <CurriculumEvents />

     {/* ================= ACHIEVEMENTS ================= */}
{/* ================= ACHIEVEMENTS ================= */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="mt-20 bg-gradient-to-r from-yellow-50 via-white to-pink-50 
  py-20 px-6 rounded-3xl shadow-lg max-w-7xl mx-auto"
>

  {/* LOGO – CENTERED & BIGGER */}
  <div className="flex justify-center mb-10">
    <img
      src="/logoo.png"
      alt="Creative Kids Logo"
      className="w-80 md:w-[420px] object-contain drop-shadow-2xl"
    />
  </div>

  {/* TITLE & SUBCONTENT – CENTERED */}
  <div className="text-center max-w-3xl mx-auto mb-14">
    <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 ">
      🏆 Achievements & Awards
    </h3><br></br>
    <p className="text-gray-600 text-lg leading-relaxed">
      At Creative Kids, we take pride in being recognized for excellence in early childhood education.
      These awards reflect our dedication, passion, and commitment to nurturing young minds and
      building a joyful learning environment.
    </p>
  </div>

  {/* SCROLLABLE AWARD CARDS */}
  <div className="flex gap-8 overflow-x-auto pb-6">

    {[
      { img: "/achiv1.jpeg", text: "Top Promising Preschool – Global Triumph Foundation-MAY 2019 in Mumbai" },
      { img: "/achiv2.jpeg", text: "Best Kidz School Award – Shriram Life Insurance Company,Madurai" },
      { img: "/achiv3.jpeg", text: "Excellence in Early Education Award received from Actor Arunvijay" },
      { img: "/achiv4.jpeg", text: "Outstanding Learning Environment Recognition" },
      { img: "/award.jpeg", text: "Our student Anirudh has won 2nd prize in tamil speech competition in V Trendy 2020 held at Gandhi Museum." },
      { img: "/award6.jpg", text: "Child Development Excellence Award" },
      { img: "/award7.jpg", text: "Best Kindergarten Activities Award" },
      { img: "/award8.jpg", text: "Top Preschool Brand Recognition" },
    ].map((award, index) => (
      <div
        key={index}
        className="min-w-[280px] bg-white rounded-2xl shadow-md 
        hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      >
        <img
          src={award.img}
          alt={`award-${index}`}
          className="w-full h-52 object-cover rounded-t-2xl"
        />
        <div className="p-4 text-center">
          <p className="text-sm font-medium text-gray-700">
            {award.text}
          </p>
        </div>
      </div>
    ))}

  </div>

</motion.div>

    {/* ================= SAFETY ================= */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="mt-20 mb-20 p-16 rounded-3xl shadow-2xl max-w-6xl mx-auto 
             bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 
             border border-gray-200"
>
  {/* Dark-Gradient Title */}
 <motion.h3
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
  transition={{ duration: 5, ease: "easeOut", repeat: Infinity }}
  style={{ backgroundSize: "200% 200%" }}
  className="text-4xl md:text-5xl font-extrabold text-center mb-12
             bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-900 to-black"
>
    Thrive Safe Ecosystem
  </motion.h3>

  <div className="grid md:grid-cols-2 gap-12 text-gray-700 text-lg">
    <div className="flex gap-4 items-start">
      <span className="text-blue-500 text-3xl drop-shadow-md">🛡</span>
      <p>24/7 CCTV surveillance across the campus.</p>
    </div>

    <div className="flex gap-4 items-start">
      <span className="text-green-500 text-3xl drop-shadow-md">🩺</span>
      <p>First-aid facilities with trained staff.</p>
    </div>

    <div className="flex gap-4 items-start">
      <span className="text-purple-500 text-3xl drop-shadow-md">🚪</span>
      <p>Secure entry and exit system with authorized access only.</p>
    </div>

    <div className="flex gap-4 items-start">
      <span className="text-pink-500 text-3xl drop-shadow-md">👩‍🏫</span>
      <p>Continuous supervision and low teacher-student ratio.</p>
    </div>
  </div>
</motion.div>

      <ProgramsPage />
      <WhyChooseUs />
      <Gallery />
      <Franchise />

      {/* ================= CONTACT ================= */}<section
  id="contact"
  className="relative py-28 overflow-hidden"
>
  {/* ================= BACKGROUND IMAGE ================= */}
  <div className="absolute inset-0 z-0">
    <img
      src="/border.jpg" // replace with your image in public folder
      alt="Contact Background"
      className="w-full h-full object-cover opacity-30"
    />
  </div>

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Title */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-600 text-lg">
        We'd love to hear from you! Visit, call, or leave us a review.
      </p>
    </motion.div>

    {/* Contact Cards */}
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-10 text-center"
    >
      {/* Address Card */}
      <motion.div
        variants={fadeUp}
        className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
      >
        <div className="text-4xl mb-4">📍</div>
        <h3 className="text-xl font-semibold mb-2">Address</h3>
        <p className="text-gray-600">
          H29, Malligai Nagar, TNHB Colony, <br />
          Anaiyur, Madurai - 625017
        </p>
      </motion.div>

      {/* Phone Card */}
      <motion.div
        variants={fadeUp}
        className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
      >
        <div className="text-4xl mb-4">📞</div>
        <h3 className="text-xl font-semibold mb-2">Phone</h3>
        <a
          href="tel:+919597025555"
          className="text-gray-600 hover:text-pink-500 transition duration-300"
        >
          +91 95970 25555
        </a>
      </motion.div>

      {/* Email Card */}
      <motion.div
        variants={fadeUp}
        className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
      >
        <div className="text-4xl mb-4">✉️</div>
        <h3 className="text-xl font-semibold mb-2">Email</h3>
        <a
          href="mailto:creativekidzplayschool@gmail.com"
          className="text-gray-600 hover:text-pink-500 transition duration-300"
        >
          creativekidzplayschool@gmail.com
        </a>
      </motion.div>
    </motion.div>

    {/* Buttons Section */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mt-16 flex flex-col md:flex-row justify-center gap-6"
    >
      <a
        href="/trust"
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
      >
        Aditeya Educational Trust, Madurai
      </a>

      <a
        href="https://g.page/r/CctTIDYN_AcpEBM/review"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
      >
        Leave a Google Review ⭐
      </a>
    </motion.div>
  </div>
</section>
      <Footer />
    </div>
  );
}

export default App;