import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-4xl font-bold text-yellow-600">
          Build<span className="text-white">It</span>
        </div>
            <p className="text-lg text-gray-400 mb-4">
              We are a leading construction company, delivering high-quality
              projects on time and within budget. Our experts are here to help you
              build your dream.
            </p>
            <p className="text-gray-400">Location: 1234 Construction St, City, Country</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Phone: +123 456 7890</li>
              <li>Email: info@yourcompany.com</li>
              <li>Address: 1234 Construction St, City, Country</li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Stay Updated with Our Latest Projects!
          </h3>
          <div className="flex justify-center">
  <input
    type="email"
    placeholder="Enter your email"
    className="p-3 w-72 rounded-l-lg bg-white text-gray-800 placeholder-gray-500 outline-none"
  />
  <button className="bg-yellow-400 text-white py-3 px-6 rounded-r-lg hover:bg-yellow-500">
    Subscribe
  </button>
</div>
        </div>

        {/* Legal Links */}
        <div className="mt-6 text-center text-gray-400">
          <p className="text-sm">
            © 2025 Your Company. All rights reserved. | <a href="#" className="hover:text-yellow-400">Privacy Policy</a> | <a href="#" className="hover:text-yellow-400">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
