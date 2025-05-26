"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Projects", "Testimonials", "Contact"];

  const closeMenu = () => setNavOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-3xl md:text-4xl font-bold text-yellow-600">
          Build<span className="text-gray-900">It</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="text-black hover:text-yellow-600 text-lg transition font-medium"
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

      {/* Mobile Nav Backdrop */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Nav Panel */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-5 pt-20">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="text-black font-medium text-lg hover:text-yellow-600 transition"
            >
              {item}
            </a>
          ))}
          <a
            href="#quote"
            onClick={closeMenu}
            className="bg-yellow-500 hover:bg-yellow-600 text-black text-center px-4 py-2 rounded-md font-semibold transition"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
