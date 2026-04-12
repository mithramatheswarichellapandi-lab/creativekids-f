function Home() {
  return (
    <div className="overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="bg-sky-400 text-white py-24 text-center relative"
      >
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-extrabold">
            Welcome to <span className="text-yellow-300">KIDDY!</span>
          </h1>

          <p className="mt-6 text-lg">
            A perfect learning center for your kids
          </p>

          <div className="flex justify-center mt-12">
            <img
              src="/kids.png"
              alt="kids"
              className="w-[450px] drop-shadow-2xl"
            />
          </div>

        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 200">
            <path
              fill="#fde68a"
              d="M0,96L80,112C160,128,320,160,480,165.3C640,171,800,149,960,133.3C1120,117,1280,107,1360,101.3L1440,96V200H0Z"
            ></path>
          </svg>
        </div>
      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section
        id="features"
        className="bg-amber-200 py-20"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-white p-10 rounded-[100px] shadow-xl hover:scale-105 transition duration-500">
            <h3 className="text-xl font-bold text-sky-500">Games</h3>
            <p className="mt-4 text-gray-600 text-sm">
              Game in early childhood builds learning skills.
            </p>
            <button className="mt-6 bg-yellow-400 px-4 py-2 rounded-full text-white hover:bg-yellow-500">
              More
            </button>
          </div>

          <div className="bg-white p-10 rounded-[100px] shadow-xl hover:scale-105 transition duration-500">
            <h3 className="text-xl font-bold text-sky-500">Activities</h3>
            <p className="mt-4 text-gray-600 text-sm">
              Creative and fun learning activities.
            </p>
            <button className="mt-6 bg-yellow-400 px-4 py-2 rounded-full text-white hover:bg-yellow-500">
              More
            </button>
          </div>

          <div className="bg-white p-10 rounded-[100px] shadow-xl hover:scale-105 transition duration-500">
            <h3 className="text-xl font-bold text-sky-500">Education</h3>
            <p className="mt-4 text-gray-600 text-sm">
              Engaging educational programs.
            </p>
            <button className="mt-6 bg-yellow-400 px-4 py-2 rounded-full text-white hover:bg-yellow-500">
              More
            </button>
          </div>

        </div>
      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold text-sky-500">
              A Few Words About Our Center
            </h2>

            <p className="mt-6 text-gray-600">
              We create a joyful and safe learning environment where
              children grow emotionally, socially and intellectually.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Safe & Secure Campus</li>
              <li>✔ Experienced Teachers</li>
              <li>✔ Creative Learning Methods</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="/blocks-kid.png"
              alt="kid playing"
              className="w-[350px] drop-shadow-xl"
            />
          </div>

        </div>
      </section>


      {/* ================= GALLERY SECTION ================= */}
      <section
        id="gallery"
        className="py-20 bg-pink-50"
      >
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Gallery
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            <img src="/gallery1.jpg" className="rounded-xl shadow-md hover:scale-105 transition duration-500" />
            <img src="/gallery2.jpg" className="rounded-xl shadow-md hover:scale-105 transition duration-500" />
            <img src="/gallery3.jpg" className="rounded-xl shadow-md hover:scale-105 transition duration-500" />
            <img src="/gallery4.jpg" className="rounded-xl shadow-md hover:scale-105 transition duration-500" />
            <img src="/gallery5.jpg" className="rounded-xl shadow-md hover:scale-105 transition duration-500" />
            <img src="/gallery6.jpg" className="rounded-xl shadow-md hover:scale-105 transition duration-500" />
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
