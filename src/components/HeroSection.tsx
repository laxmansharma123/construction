"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // ✅ Show when scroll crosses 100px
      if (scrollY > 100) {
        setShowStats(true);
      } else {
        setShowStats(false); // ✅ Hide when scroll goes back up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/ghr.avif')",
      }}
    >
      {/* Hero Content */}
      <div className="absolute inset-0  bg-opacity-50 flex items-center px-10">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Build your dream home with{" "}
            <span className="text-yellow-400">BuildIt.com</span>
          </h1>
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition">
            Get a free construction estimate
          </button>
        </div>
      </div>

      {/* Slide-in Stats Section */}
      <div
  className={`absolute bottom-0 left-0 right-0 transition-all duration-500 ease-in-out
    ${showStats ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
  `}
>
  <div className="backdrop-blur-sm bg-white/10 text-black rounded-t-3xl shadow-2xl px-8 py-6 w-full">
    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center text-sm font-semibold">
      <div>
        <p className="text-yellow-500 text-xl font-bold">440+</p>
        <p className="text-white">Quality Checks</p>
      </div>
      <div>
        <p className="text-yellow-500 text-xl font-bold">500K+</p>
        <p className="text-white">Sq.Ft Built</p>
      </div>
      <div>
        <p className="text-yellow-500 text-xl font-bold">100%</p>
        <p className="text-white">On-Time Delivery</p>
      </div>
      <div>
        <p className="text-yellow-500 text-xl font-bold">10+ Yrs</p>
        <p className="text-white">Warranty</p>
      </div>
      <div>
        <p className="text-yellow-500 text-xl font-bold">5+</p>
        <p className="text-white">States</p>
      </div>
      <div>
        <p className="text-yellow-500 text-xl font-bold">Trusted</p>
        <p className="text-white">By Clients</p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}
