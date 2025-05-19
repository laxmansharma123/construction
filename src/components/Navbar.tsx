"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // you can install lucide-react or use Heroicons

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Projects", "Testimonials", "Contact"];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-4xl font-bold text-yellow-600">
          Build<span className="text-gray-900">It</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="text-black hover:text-yellow-600 text-1xl transition font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#quote"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-semibold transition"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="block text-white font-medium hover:text-yellow-600"
            >
              {item}
            </a>
          ))}
          <a
            href="#quote"
            className="block bg-yellow-500 hover:bg-yellow-600 text-black text-center px-4 py-2 rounded-md font-semibold"
          >
            Get Quote
          </a>
        </div>
      )}
    </header>
  );
}
